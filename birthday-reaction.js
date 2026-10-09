/* Camera access is voluntary; recordings stay in memory until Victory shares. */
(() => {
  const $ = id => document.getElementById(id);
  const sheet=$('reactionSheet'), preview=$('reactionPreview'), live=$('reactionLive');
  const note=$('reactionNote'), start=$('reactionRecord'), share=$('reactionShare');
  let stream=null, recorder=null, chunks=[], clip=null, url='', timer=0, started=0;
  let requesting=false, finishing=false, requestToken=0, opener=null, visits=[], statusKey='';
  const LIMIT=5*60*1000, MAX_BYTES=60*1024*1024;
  const messages={
    ready:['Your camera starts only when you choose. Preview everything before sharing.','Камера включится только по твоему желанию. Перед отправкой всё можно посмотреть.'],
    asking:['Your phone will ask for camera and microphone access.','Телефон попросит доступ к камере и микрофону.'],
    unsupported:['Recording is unavailable here. You can choose a video from your phone instead.','Запись здесь недоступна. Можно выбрать видео с телефона.'],
    denied:['Camera access was unavailable. Try again, choose a video, or just leave a note.','Нет доступа к камере. Попробуй ещё раз, выбери видео или напиши сообщение.'],
    preview:['Take a look. Keep it, record again, or just send your words.','Посмотри. Оставь запись, запиши заново или отправь только слова.'],
    empty:['A video, a few words, or both. It’s up to you.','Видео, несколько слов или и то и другое. Решать тебе.'],
    saved:['Your note is saved on this phone. Nothing was sent.','Сообщение сохранено на этом телефоне. Ничего не отправлено.'],
    blocked:['This browser couldn’t save the note. You can still share it.','Браузер не смог сохранить сообщение. Его всё ещё можно отправить.'],
    cancelled:['Nothing was shared. Your preview is still here.','Ничего не отправлено. Запись всё ещё здесь.'],
    shared:['Shared through your chosen app.','Передано через выбранное приложение.'],
    download:['Save the video below, then attach it in your message to Favour. You can copy your words too.','Сохрани видео ниже и прикрепи его к сообщению Фавору. Текст тоже можно скопировать.'],
    copied:['Copied. Paste it into your message to Favour.','Скопировано. Вставь текст в сообщение Фавору.'],
    select:['Select and copy your words below, then message Favour.','Выдели и скопируй текст ниже, затем отправь Фавору.'],
    failed:['Sharing didn’t finish. Your video and words are still here.','Отправка не завершена. Видео и текст всё ещё здесь.'],
    large:['That video is over 60 MB. Choose a shorter clip.','Видео больше 60 МБ. Выбери более короткое.'],
    invalid:['Please choose a video file.','Выбери видеофайл.'],
    lost:['The camera stopped. Preview your recording below.','Камера остановилась. Посмотри запись ниже.']
  };
  const ru=()=>document.documentElement.lang==='ru';
  const say=key=>{statusKey=key;$('reactionStatus').textContent=messages[key][ru()?1:0];};
  function paint(){
    document.querySelectorAll('[data-reaction-en]').forEach(el=>{
      const value=el.dataset[ru()?'reactionRu':'reactionEn'];
      if(el.hasAttribute('data-reaction-label'))el.setAttribute('aria-label',value);else el.textContent=value;
    });
    if(statusKey)say(statusKey);
  }
  $('languageToggle').addEventListener('click',paint);paint();say('ready');
  try{note.value=localStorage.getItem('victory-universe-private-reply')||'';}catch{}
  note.addEventListener('input',()=>{$('victoryReply').value=note.value;});
  $('victoryReply').addEventListener('input',()=>{note.value=$('victoryReply').value;});
  function open(trigger){opener=trigger||document.activeElement;if(!sheet.open){sheet.showModal();sheet.scrollTop=0;}}
  function close(){requestToken++;requesting=false;start.disabled=false;sheet.close();opener?.focus({preventScroll:true});}
  document.querySelectorAll('[data-open-reaction]').forEach(button=>button.addEventListener('click',()=>open(button)));
  $('reactionClose').addEventListener('click',close);
  sheet.addEventListener('cancel',event=>{event.preventDefault();close();});
  sheet.addEventListener('click',event=>{if(event.target===sheet){const b=sheet.getBoundingClientRect();if(event.clientX<b.left||event.clientX>b.right||event.clientY<b.top||event.clientY>b.bottom)close();}});
  function disposeClip(){if(url)URL.revokeObjectURL(url);url='';clip=null;preview.pause();preview.removeAttribute('src');preview.load();preview.hidden=true;$('reactionClipActions').hidden=true;start.hidden=false;}
  function keepClip(blob){disposeClip();clip=blob;url=URL.createObjectURL(blob);preview.src=url;preview.hidden=false;$('reactionClipActions').hidden=false;start.hidden=true;}
  function release(){clearInterval(timer);timer=0;stream?.getTracks().forEach(track=>track.stop());stream=null;$('reactionCamera').srcObject=null;live.hidden=true;start.disabled=false;$('reactionStopInSheet').hidden=true;}
  function stop(){
    if(recorder?.state==='recording'){finishing=true;recorder.stop();release();start.disabled=true;}
  }
  start.addEventListener('click',async()=>{
    if(requesting||finishing||recorder?.state==='recording')return;
    if(!navigator.mediaDevices?.getUserMedia||!window.MediaRecorder){say('unsupported');return;}
    if(clip){say('preview');preview.focus();return;}
    requesting=true;start.disabled=true;say('asking');const token=++requestToken;
    try{
      const granted=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user',width:{ideal:480},height:{ideal:640}},audio:true});
      if(token!==requestToken||document.hidden||!sheet.open){granted.getTracks().forEach(track=>track.stop());return;}
      stream=granted;
      if(typeof isRecording!=='undefined'&&isRecording)stopRecording();
      const mime=['video/mp4','video/webm;codecs=vp8,opus','video/webm'].find(type=>MediaRecorder.isTypeSupported(type));
      recorder=new MediaRecorder(stream,{...(mime?{mimeType:mime}:{}),videoBitsPerSecond:800000,audioBitsPerSecond:64000});
      chunks=[];visits=[document.body.dataset.activeScreen];started=Date.now();
      recorder.ondataavailable=event=>{if(event.data.size)chunks.push(event.data);};
      recorder.onstop=()=>{
        const blob=new Blob(chunks,{type:recorder.mimeType||'video/webm'});chunks=[];
        if(blob.size){keepClip(blob);say('preview');}else say('failed');
        finishing=false;release();if(!document.hidden)open($('pocketReaction'));
      };
      recorder.onerror=()=>{say('lost');stop();};
      stream.getVideoTracks()[0].addEventListener('ended',stop,{once:true});
      $('reactionCamera').srcObject=stream;$('reactionCamera').play().catch(()=>{});
      recorder.start(1000);live.hidden=false;$('reactionStopInSheet').hidden=false;sheet.close();
      const tick=()=>{const seconds=Math.floor((Date.now()-started)/1000);$('reactionTimer').textContent=`${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;if(Date.now()-started>=LIMIT)stop();};
      tick();timer=setInterval(tick,500);
    }catch(error){release();say('denied');}
    finally{requesting=false;start.disabled=false;}
  });
  $('reactionStop').addEventListener('click',stop);
  $('reactionStopInSheet').addEventListener('click',stop);
  $('reactionAgain').addEventListener('click',()=>{disposeClip();visits=[];start.click();});
  $('reactionDiscard').addEventListener('click',()=>{disposeClip();visits=[];say('ready');});
  $('reactionFile').addEventListener('change',event=>{
    const file=event.target.files[0];event.target.value='';if(!file)return;
    if(!file.type.startsWith('video/')){say('invalid');return;}
    if(file.size>MAX_BYTES){say('large');return;}
    keepClip(file);visits=[];say('preview');
  });
  $('reactionSave').addEventListener('click',()=>{try{localStorage.setItem('victory-universe-private-reply',note.value);say('saved');}catch{say('blocked');}});
  const roomNames={screenIntro:'The birthday cover',screenUniverse:'The universe',screenMemories:'The camera roll',screenLove:'Very Amarachi',screenQualities:'Look how far you’ve come',screenMoments:'From here to there',screenFuture:'Here’s to twenty',screenLetter:'Your letter',screenFinal:'The ending',screenBanter:'The surprise'};
  const message=()=>`A birthday reply from Victory${note.value.trim()?'\n\n'+note.value.trim():''}${clip&&visits.length?'\n\nWhile opening: '+visits.map(id=>roomNames[id]||id).join(' → '):''}`;
  function file(){return clip instanceof File?clip:new File([clip],`Victory-reaction.${clip.type.includes('mp4')?'mp4':clip.type.includes('quicktime')?'mov':'webm'}`,{type:clip.type||'video/webm'});}
  share.addEventListener('click',async()=>{
    if(!clip&&!note.value.trim()){say('empty');return;}
    const payload={title:'A birthday reply from Victory',text:message()};
    try{
      if(clip){const video=file();if(!navigator.share||!navigator.canShare?.({files:[video]})){say('download');return;}payload.files=[video];}
      if(navigator.share){await navigator.share(payload);say('shared');}
      else if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(payload.text);say('copied');}
      else{note.focus();note.select();say('select');}
    }catch(error){say(error.name==='AbortError'?'cancelled':'failed');}
  });
  $('reactionDownload').addEventListener('click',()=>{if(!clip)return;const a=document.createElement('a');a.href=url;a.download=file().name;a.click();say('download');});
  $('reactionCopy').addEventListener('click',async()=>{if(!note.value.trim()){say('empty');return;}try{await navigator.clipboard.writeText(message());say('copied');}catch{note.focus();note.select();say('select');}});
  const navButtons=document.querySelectorAll('[data-pocket-screen]');
  navButtons.forEach(button=>button.addEventListener('click',()=>{if(button.dataset.pocketScreen==='screenLetter')openLetterExperience();else showScreen(button.dataset.pocketScreen);}));
  function nav(id){navButtons.forEach(button=>{if(button.dataset.pocketScreen===id)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');});}
  document.addEventListener('victory:screenchange',event=>{const id=event.detail.id;nav(id);if(recorder?.state==='recording'&&visits.at(-1)!==id)visits.push(id);});nav(document.body.dataset.activeScreen);
  document.addEventListener('visibilitychange',()=>{if(document.hidden){requestToken++;stop();}});
  window.addEventListener('pagehide',()=>{requestToken++;stop();release();});
})();

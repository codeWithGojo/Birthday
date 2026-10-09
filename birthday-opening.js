/* A voluntary microphone blow, with a tap alternative and no recorded audio. */
(() => {
  const intro=document.getElementById('netflix-intro'), cake=document.getElementById('birthdayCake');
  const mic=document.getElementById('cakeMicBtn'),tap=document.getElementById('cakeTapBtn'),enter=document.getElementById('cakeEnterBtn');
  const status=document.getElementById('cakeStatus'),meter=document.getElementById('cakeMicMeter');
  const surfaces=[document.querySelector('.edition-nav'),document.querySelector('.main-wrap'),document.querySelector('.pocket-nav')];
  const seenKey='victory-cake-opening-v21';
  let playing=false,blown=false,token=0,stream=null,borrowed=false,context=null,frame=0,state='ready';
  const ru=()=>document.documentElement.lang==='ru';
  const copy={ready:['Make a wish first. I won’t ask what it is.','Сначала загадай желание. Я не буду спрашивать какое.'],asking:['Your phone will ask for microphone access.','Телефон попросит доступ к микрофону.'],listening:['Blow gently towards your mic. The candles are waiting.','Тихонько подуй в микрофон. Свечи ждут.'],retry:['Let’s try again. Or tap below to blow them out.','Давай ещё раз. Или нажми ниже, чтобы погасить свечи.'],unavailable:['The mic isn’t available here. You can still tap to blow them out.','Микрофон недоступен. Ты можешь погасить свечи нажатием.'],paused:['The mic paused when you left. Tap to try again.','Микрофон остановился, когда ты ушла. Нажми, чтобы попробовать ещё раз.'],blown:['Happy twentieth, amarachiii. Your wish is safe with you.','С двадцатилетием, амарачиии. Твоё желание остаётся с тобой.']};
  const say=key=>{state=key;status.textContent=copy[key][ru()?1:0];};
  function paint(){
    intro.setAttribute('aria-label',ru()?'Амарачи в двадцать лет':'Amarachi at twenty');
    document.querySelector('.cake-dateline').textContent=ru()?'13 ОКТЯБРЯ 2026 · ОТ ФАВОРА':'13 OCTOBER 2026 · FROM FAVOUR';
    document.getElementById('cakeSubtitle').textContent=ru()?'Торт с меня. Свечи — с тебя.':'I got the cake. You handle the candles.';
    mic.textContent=ru()?'Включить микрофон и подуть':'Use my mic & blow';tap.textContent=ru()?'Нажать, чтобы погасить свечи':'Tap to blow them out';enter.textContent=ru()?'Войти в свою вселенную ↗':'Enter your universe ↗';
    document.getElementById('cakeMicNote').textContent=ru()?'Микрофон нужен только, чтобы заметить твой выдох. Этот шаг не сохраняет и не отправляет звук.':'The mic is only used to notice your blow. This step doesn’t save or send audio.';
    document.getElementById('replayOpening').textContent=ru()?'Ещё раз задуть свечи':'Blow out the candles again';
    cake.setAttribute('aria-label',ru()?(blown?'Торт «Красный бархат» с погасшими серебряными свечами':'Торт «Красный бархат» с двумя горящими серебряными свечами'):(blown?'A red velvet birthday cake with extinguished silver candles':'A red velvet birthday cake with two lit silver candles'));say(state);
  }
  function stopMic(){token++;cancelAnimationFrame(frame);frame=0;if(stream&&!borrowed)stream.getTracks().forEach(track=>track.stop());stream=null;borrowed=false;if(context){context.close().catch(()=>{});context=null;}meter.hidden=true;mic.disabled=false;}
  function extinguish(){if(blown)return;blown=true;stopMic();cake.classList.add('blown');mic.hidden=tap.hidden=true;enter.hidden=false;document.getElementById('cakeMicNote').hidden=true;paint();say('blown');birthdayHaptic([45,30,75]);enter.focus();}
  function finish(){if(!playing)return;stopMic();playing=false;intro.classList.add('done');intro.removeAttribute('aria-modal');surfaces.forEach(surface=>surface.inert=false);document.body.classList.remove('intro-playing');try{sessionStorage.setItem(seenKey,'yes');}catch{}showScreen('screenUniverse');}
  function play(){stopMic();playing=true;blown=false;state='ready';cake.classList.remove('blown');mic.hidden=tap.hidden=false;enter.hidden=true;document.getElementById('cakeMicNote').hidden=false;intro.classList.remove('done');intro.setAttribute('aria-modal','true');surfaces.forEach(surface=>surface.inert=true);document.body.classList.add('intro-playing');intro.scrollTop=0;paint();mic.focus({preventScroll:true});}
  mic.addEventListener('click',async()=>{
    if(blown||!playing)return;
    stopMic();if(!navigator.mediaDevices?.getUserMedia||!(window.AudioContext||window.webkitAudioContext)){say('unavailable');return;}
    mic.disabled=true;say('asking');const request=token;
    try{
      const reactionStream=window.getVictoryReactionStream?.();
      const useReaction=!!reactionStream?.getAudioTracks().some(track=>track.readyState==='live');
      const granted=useReaction?new MediaStream(reactionStream.getAudioTracks()):await navigator.mediaDevices.getUserMedia({audio:true});
      if(request!==token||!playing||blown||document.hidden){if(!useReaction)granted.getTracks().forEach(track=>track.stop());return;}
      stream=granted;borrowed=useReaction;
      context=new (window.AudioContext||window.webkitAudioContext)();await context.resume();
      if(request!==token||!playing||blown||document.hidden){stopMic();return;}
      const source=context.createMediaStreamSource(stream),analyser=context.createAnalyser();analyser.fftSize=1024;source.connect(analyser);
      const samples=new Uint8Array(analyser.fftSize);const began=performance.now();let loudSince=0;
      meter.hidden=false;say('listening');
      function listen(now){
        if(!playing||blown)return;
        analyser.getByteTimeDomainData(samples);let sum=0;for(const sample of samples){const value=(sample-128)/128;sum+=value*value;}const volume=Math.sqrt(sum/samples.length);
        meter.style.setProperty('--mic-level',Math.min(100,volume*650)+'%');
        if(volume>.065){if(!loudSince)loudSince=now;if(now-loudSince>280){extinguish();return;}}else loudSince=0;
        if(now-began>12000){stopMic();say('retry');return;}frame=requestAnimationFrame(listen);
      }
      frame=requestAnimationFrame(listen);
    }catch(error){if(request===token){stopMic();say('unavailable');}}
  });
  tap.addEventListener('click',extinguish);enter.addEventListener('click',finish);document.getElementById('replayOpening').addEventListener('click',play);
  intro.addEventListener('keydown',event=>{
    if(event.key==='Escape'){event.preventDefault();if(blown)finish();else extinguish();}
    if(event.key==='Tab'){
      const buttons=[...intro.querySelectorAll('button')].filter(button=>!button.hidden&&!button.disabled);const first=buttons[0],last=buttons.at(-1);
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
    }
  });
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&(stream||mic.disabled)){stopMic();if(!blown)say('paused');}});
  window.addEventListener('pagehide',stopMic);document.getElementById('languageToggle').addEventListener('click',paint);
  let seen=false;try{seen=sessionStorage.getItem(seenKey)==='yes';}catch{}
  paint();if(seen){intro.classList.add('done');intro.removeAttribute('aria-modal');}else play();
})();

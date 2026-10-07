/* A finite, skippable opening, with a replay and a quiet reduced-motion version. */
(() => {
  const intro=document.getElementById('netflix-intro');
  const replay=document.getElementById('replayOpening');
  const skip=intro.querySelector('.intro-skip');
  const surfaces=[document.querySelector('.edition-nav'),document.querySelector('.main-wrap')];
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  const seenKey='victory-intro-seen-v17';
  let jobs=[], playing=false, returnFocus=null, startTime=0, counter=0;
  const ru=()=>document.documentElement.lang==='ru';
  function clearJobs(){jobs.forEach(clearTimeout);jobs=[];clearInterval(counter);}
  function finish(){
    if(!playing)return;playing=false;clearJobs();
    intro.classList.add('is-leaving');intro.classList.remove('is-playing');
    surfaces.forEach(surface=>surface.inert=false);document.body.classList.remove('intro-playing');
    try{sessionStorage.setItem(seenKey,'yes');}catch{}
    (returnFocus?.isConnected?returnFocus:document.getElementById('openBtn')).focus({preventScroll:true});
    jobs.push(setTimeout(()=>{intro.classList.add('done');intro.removeAttribute('aria-modal');},motion.matches?0:650));
  }
  function play(){
    if(playing)return;clearJobs();playing=true;returnFocus=document.activeElement===replay?replay:null;
    intro.classList.remove('done','is-leaving','is-playing');intro.dataset.phase='leader';intro.dataset.reduced=String(motion.matches);
    intro.setAttribute('aria-modal','true');surfaces.forEach(surface=>surface.inert=true);document.body.classList.add('intro-playing');
    intro.querySelector('.opening-count').textContent='3';intro.querySelector('.opening-timecode').textContent='00:00:00';
    intro.focus({preventScroll:true});void intro.offsetWidth;intro.classList.add('is-playing');
    startTime=performance.now();counter=setInterval(()=>{intro.querySelector('.opening-timecode').textContent='00:00:'+String(Math.floor((performance.now()-startTime)/1000)).padStart(2,'0');},250);
    if(motion.matches){intro.dataset.phase='title';jobs.push(setTimeout(finish,1100));return;}
    jobs.push(setTimeout(()=>intro.querySelector('.opening-count').textContent='2',480));
    jobs.push(setTimeout(()=>intro.querySelector('.opening-count').textContent='1',960));
    jobs.push(setTimeout(()=>intro.dataset.phase='title',1440));
    jobs.push(setTimeout(finish,3850));
  }
  skip.addEventListener('click',finish);replay.addEventListener('click',play);
  intro.addEventListener('keydown',event=>{
    if(event.key==='Escape'){event.preventDefault();finish();}
    if(event.key==='Tab'){event.preventDefault();skip.focus();}
  });
  motion.addEventListener('change',()=>{if(playing)finish();});
  function paintLanguage(){
    intro.setAttribute('aria-label',ru()?'Вступление ко дню рождения Виктори':'Victory’s birthday opening');
    replay.textContent=ru()?'Посмотреть вступление ещё раз':'Replay opening';
  }
  document.getElementById('languageToggle').addEventListener('click',paintLanguage);paintLanguage();
  let seen=false;try{seen=sessionStorage.getItem(seenKey)==='yes';}catch{}
  if(seen){intro.classList.add('done');intro.removeAttribute('aria-modal');}else play();
})();

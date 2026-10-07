/* One predictable hold gesture for touch, mouse, keyboard and assistive clicks. */
window.bindBirthdayHold = function (button, {duration=1100, complete, available=()=>true, cancel=()=>{}}) {
  let timer=0, frame=0, pointer=null, start=0, origin=null;
  function stop() {
    clearTimeout(timer); cancelAnimationFrame(frame); timer=frame=0;
    const captured=pointer; pointer=null; origin=null;
    button.classList.remove('holding'); button.style.setProperty('--hold-progress','0%');
    if(captured!==null && button.hasPointerCapture(captured)) button.releasePointerCapture(captured);
    cancel();
  }
  function finish() { if(!available()){stop();return;} stop(); complete(); }
  function paint(time) {
    button.style.setProperty('--hold-progress',`${Math.min(100,(time-start)/duration*100)}%`);
    frame=requestAnimationFrame(paint);
  }
  button.addEventListener('pointerdown',event=>{
    if(!event.isPrimary || event.button!==0 || !available())return;
    stop(); pointer=event.pointerId; origin={x:event.clientX,y:event.clientY};
    button.setPointerCapture(pointer); button.classList.add('holding');
    start=performance.now(); frame=requestAnimationFrame(paint); timer=setTimeout(finish,duration);
  });
  button.addEventListener('pointermove',event=>{
    if(pointer===event.pointerId && origin && Math.hypot(event.clientX-origin.x,event.clientY-origin.y)>28)stop();
  });
  ['pointerup','pointercancel','lostpointercapture'].forEach(name=>button.addEventListener(name,stop));
  button.addEventListener('contextmenu',event=>event.preventDefault());
  button.addEventListener('dragstart',event=>event.preventDefault());
  button.addEventListener('keydown',event=>{
    if((event.key==='Enter'||event.key===' ')&&!event.repeat){event.preventDefault();finish();}
  });
  button.addEventListener('click',event=>{if(event.detail===0 && available())finish();});
  button.addEventListener('blur',stop);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
  document.addEventListener('victory:screenchange',stop);
  return stop;
};

/* Midnight on her birthday, using the same UTC+5 Russian clock as the site. */
window.birthdayCountdownState = function(now=Date.now()) {
  const target=Date.parse('2026-10-13T00:00:00+05:00');
  const remaining=Math.max(0,Math.ceil((target-now)/1000));
  return {phase:now<target?'waiting':now<target+86400000?'birthday':'after',
    days:Math.floor(remaining/86400),hours:Math.floor(remaining%86400/3600),
    minutes:Math.floor(remaining%3600/60),seconds:remaining%60};
};
document.addEventListener('DOMContentLoaded',()=>{
  const clocks=[...document.querySelectorAll('[data-birthday-countdown]')];
  function update(){
    const state=birthdayCountdownState(); const ru=document.documentElement.lang==='ru';
    clocks.forEach(clock=>{
      clock.dataset.phase=state.phase;
      clock.querySelector('[data-countdown-title]').textContent=state.phase==='waiting'?(ru?'До твоих двадцати':'Until your twentieth'):state.phase==='birthday'?(ru?'С днём рождения, Амарачи.':'Happy birthday, Amarachi.'):(ru?'Твои двадцать. Твоя вселенная.':'Your twentieth. Your universe.');
      clock.querySelector('[data-countdown-timezone]').textContent=ru?'13 октября · время России (UTC+5)':'13 October · Russia time (UTC+5)';
      const labels=ru?['дней','часов','минут','секунд']:['days','hours','minutes','seconds'];
      ['days','hours','minutes','seconds'].forEach((key,i)=>{clock.querySelector(`[data-count="${key}"]`).textContent=String(state[key]).padStart(2,'0');clock.querySelector(`[data-label="${key}"]`).textContent=labels[i];});
      clock.querySelector('.countdown-numbers').hidden=state.phase!=='waiting';
    });
  }
  update();setInterval(update,1000);document.addEventListener('visibilitychange',update);
  document.getElementById('languageToggle').addEventListener('click',update);
});

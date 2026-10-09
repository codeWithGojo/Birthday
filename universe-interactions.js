/* Touch-safe orbital movement, personal wishes and saved exploration. */
(() => {
  const field = document.querySelector('.planet-field');
  const slots = [...field.querySelectorAll('.orbital-slot')];
  const planets = slots.map(slot => slot.dataset.planet);
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  const arrangeButton = document.getElementById('arrangeToggle');
  const motionButton = document.getElementById('motionToggle');
  const resetButton = document.getElementById('resetPlanets');
  const hint = document.getElementById('arrangeHint');
  const notice = document.getElementById('universeNotice');
  const resume = document.getElementById('resumeStop');
  const orderKey = 'victory-orbit-order-v1';
  const motionKey = 'victory-motion-paused';
  let arranging = false, picked = null, drag = null, suppressClickUntil = 0;
  let paused = read(motionKey, false) === true;
  let order = read(orderKey, planets);
  const positionKey='victory-orbit-positions-v1';
  let positions=read(positionKey,{});
  if(!positions||typeof positions!=='object'||Array.isArray(positions))positions={};
  if (!Array.isArray(order) || order.length !== planets.length || new Set(order).size !== planets.length || order.some(id => !planets.includes(id))) order = [...planets];
  function read(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
  function write(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch { return false; } }
  const text = (english, russian) => document.documentElement.lang === 'ru' ? russian : english;
  function announce(english, russian) { notice.textContent = text(english, russian); }
  function paintMotion() {
    const stopped = paused || arranging || media.matches;
    document.body.dataset.motion = stopped ? 'paused' : 'playing';
    motionButton.disabled = media.matches;
    motionButton.setAttribute('aria-pressed', String(paused || media.matches));
    motionButton.textContent = media.matches ? text('Still sky','Неподвижное небо') : paused ? text('Play motion','Включить движение') : text('Pause motion','Остановить движение');
    document.dispatchEvent(new CustomEvent('victory:motionchange'));
  }
  function paintPlanets() {
    slots.forEach(slot => {
      slot.dataset.slot = String(order.indexOf(slot.dataset.planet) + 1);
      const pos=positions[slot.dataset.planet];
      if(pos&&Number.isFinite(pos.x)&&Number.isFinite(pos.y)){const bounds=field.getBoundingClientRect(),rect=slot.getBoundingClientRect();const padX=Math.min(.49,(rect.width/2+4)/Math.max(1,bounds.width)),padY=Math.min(.49,(rect.height/2+4)/Math.max(1,bounds.height));slot.style.setProperty('--slot-x',Math.max(padX,Math.min(1-padX,pos.x))*100+'%');slot.style.setProperty('--slot-y',Math.max(padY,Math.min(1-padY,pos.y))*100+'%');}else{slot.style.removeProperty('--slot-x');slot.style.removeProperty('--slot-y');}
      slot.classList.toggle('is-picked', slot === picked);
      const button = slot.querySelector('button');
      const visited = exploredScreens.has(slot.dataset.planet);
      slot.classList.toggle('is-visited', visited);
      const name = button.querySelector('.planet-label').textContent.trim();
      button.setAttribute('aria-label', arranging ? text(`Select ${name} to swap places`,`Выбрать «${name}», чтобы поменять местами`) : text(`Open ${name}${visited ? ', visited' : ''}`,`Открыть «${name}»${visited ? ', уже просмотрено' : ''}`));
      if (arranging) { button.setAttribute('aria-pressed', String(slot === picked)); button.setAttribute('aria-describedby', 'arrangeHint'); }
      else { button.removeAttribute('aria-pressed'); button.removeAttribute('aria-describedby'); }
    });
  }
  function setArranging(value) {
    cancelDrag(); arranging = value; picked = null;
    document.body.dataset.arranging = String(value);
    arrangeButton.setAttribute('aria-pressed', String(value));
    arrangeButton.textContent = value ? text('Done arranging','Готово') : text('Move planets','Двигать планеты');
    resetButton.hidden = !value; hint.hidden = !value;
    notice.textContent = ''; paintPlanets(); paintMotion();
  }
  function swap(a, b) {
    if (a === b) return;
    const ap=positions[a.dataset.planet],bp=positions[b.dataset.planet];delete positions[a.dataset.planet];delete positions[b.dataset.planet];if(bp)positions[a.dataset.planet]=bp;if(ap)positions[b.dataset.planet]=ap;write(positionKey,positions);
    const ai = order.indexOf(a.dataset.planet), bi = order.indexOf(b.dataset.planet);
    [order[ai], order[bi]] = [order[bi], order[ai]];
    const saved=write(orderKey, order); picked = null; paintPlanets();
    if(saved)announce('A new little orbit. Positions saved.','Новая маленькая орбита. Позиции сохранены.');
    else announce('A new little orbit, for this visit.','Новая маленькая орбита на время этого посещения.');
  }
  function cancelDrag() {
    if (!drag) return;
    const { slot, button, pointer } = drag;
    drag = null; slot.classList.remove('is-dragging'); slot.style.removeProperty('--drag-x'); slot.style.removeProperty('--drag-y');
    try { if (button.hasPointerCapture(pointer)) button.releasePointerCapture(pointer); } catch {}
  }
  arrangeButton.addEventListener('click', () => setArranging(!arranging));
  motionButton.addEventListener('click', () => { paused = !paused; write(motionKey, paused); paintMotion(); });
  resetButton.addEventListener('click', () => { cancelDrag(); positions={};write(positionKey,positions);order = [...planets]; picked = null; write(orderKey, order); paintPlanets(); announce('Everyone back in their orbit.','Все вернулись на свои орбиты.'); });
  slots.forEach(slot => {
    const button = slot.querySelector('button');
    button.addEventListener('click', event => {
      if ((performance.now() < suppressClickUntil && event.isTrusted) || arranging) {
        event.preventDefault(); event.stopImmediatePropagation();
        if (performance.now() < suppressClickUntil && event.isTrusted) return;
        if (picked && picked !== slot) swap(picked, slot);
        else { picked = picked === slot ? null : slot; paintPlanets(); }
      }
    }, true);
    button.addEventListener('pointerdown', event => {
      if (!arranging || !event.isPrimary || event.button !== 0) return;
      const rect = slot.getBoundingClientRect();
      drag = { slot, button, pointer:event.pointerId, x:event.clientX, y:event.clientY, cx:rect.x+rect.width/2, cy:rect.y+rect.height/2, width:rect.width, height:rect.height, moved:false };
      button.setPointerCapture(event.pointerId);
    });
    button.addEventListener('pointermove', event => {
      if (!drag || drag.pointer !== event.pointerId || drag.slot !== slot) return;
      const dx = event.clientX-drag.x, dy = event.clientY-drag.y;
      if (Math.hypot(dx,dy)<7 && !drag.moved) return;
      drag.moved = true; slot.classList.add('is-dragging');
      const bounds = field.getBoundingClientRect();
      const x = Math.max(bounds.left+drag.width/2+4,Math.min(bounds.right-drag.width/2-4,drag.cx+dx));
      const y = Math.max(bounds.top+drag.height/2+4,Math.min(bounds.bottom-drag.height/2-4,drag.cy+dy));
      drag.finalX=x;drag.finalY=y;
      slot.style.setProperty('--drag-x',`${x-drag.cx}px`); slot.style.setProperty('--drag-y',`${y-drag.cy}px`);
      event.preventDefault();
    });
    button.addEventListener('pointerup', event => {
      if (!drag || drag.slot !== slot || drag.pointer !== event.pointerId) return;
      const moved = drag.moved;
      const placement=drag.moved?{x:drag.finalX,y:drag.finalY}:null;
      cancelDrag();
      if(moved&&placement){
        suppressClickUntil=performance.now()+500;
        const bounds=field.getBoundingClientRect();
        positions[slot.dataset.planet]={x:(placement.x-bounds.left)/bounds.width,y:(placement.y-bounds.top)/bounds.height};
        const saved=write(positionKey,positions);picked=null;paintPlanets();
        announce(saved?'Right there. Your layout is saved.':'Right there, for this visit.','Твоя планета на новом месте.');
      }
    });
    button.addEventListener('pointercancel',cancelDrag);
    button.addEventListener('lostpointercapture',cancelDrag);
    button.addEventListener('dragstart',event=>event.preventDefault());
  });
  document.getElementById('surpriseStop').addEventListener('click', () => {
    if (arranging) setArranging(false);
    const remaining = planets.filter(id => !exploredScreens.has(id));
    const choices = remaining.length ? remaining : planets;
    slots.find(slot => slot.dataset.planet === choices[Math.floor(Math.random()*choices.length)]).querySelector('button').click();
  });
  function paintResume() {
    let id; try { id=localStorage.getItem('victory-last-stop'); } catch {}
    resume.hidden = !explorableScreens.has(id);
    resume.dataset.target = resume.hidden ? '' : id;
  }
  resume.addEventListener('click', () => {
    const id=resume.dataset.target;
    if (!explorableScreens.has(id)) return;
    if (id === 'screenLetter') openLetterExperience(resume);
    else showScreen(id);
  });
  const dialog=document.getElementById('starWishDialog');
  const textarea=document.getElementById('starWishText');
  let sessionWish=null;
  document.getElementById('wishOpen').addEventListener('click', () => {
    textarea.value=sessionWish ?? String(read('victory-star-wish',''));
    dialog.showModal();
  });
  document.getElementById('wishClose').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{ if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();} });
  document.getElementById('starWishForm').addEventListener('submit',event=>{
    event.preventDefault();
    const wish=textarea.value.trim();
    if(!wish){textarea.setCustomValidity(text('Write a little wish first.','Сначала напиши маленькое желание.'));textarea.reportValidity();return;}
    sessionWish=wish;const saved=write('victory-star-wish',wish); dialog.close();
    if(document.body.dataset.motion==='playing')launchNameMeteor();
    if(saved)announce('Your wish is kept here. I’m rooting for you.','Желание сохранено здесь. Я болею за тебя.');
    else announce('Your wish is here for this visit. I’m rooting for you.','Желание осталось здесь на время этого посещения. Я болею за тебя.');
  });
  textarea.addEventListener('input',()=>textarea.setCustomValidity(''));
  document.addEventListener('victory:screenchange',event=>{
    if(event.detail.id!=='screenUniverse' && arranging)setArranging(false);
    paintPlanets(); paintResume();
  });
  document.getElementById('languageToggle').addEventListener('click',()=>{
    arrangeButton.textContent=arranging?text('Done arranging','Готово'):text('Move planets','Двигать планеты');
    hint.textContent=text('Drag a planet anywhere in the sky. Or tap two planets to swap them.','Перетащи планету в любое место. Или нажми на две планеты, чтобы поменять их местами.');paintMotion();paintPlanets();
  });
  media.addEventListener('change',paintMotion);
  window.addEventListener('resize',()=>{cancelDrag();paintPlanets();},{passive:true});
  addEventListener('resize',cancelDrag,{passive:true});
  applyLanguage(currentLanguage,false);
  paintPlanets();paintResume();paintMotion();updateUniverseProgress('screenIntro');
})();

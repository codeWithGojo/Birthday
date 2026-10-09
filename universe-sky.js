/* Sparse starlight. Device-local preferences and all navigation stay in the page. */
(() => {
  const canvas = document.getElementById('universeSky');
  const context = canvas.getContext('2d');
  if (!context) return;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let width = 0, height = 0, stars = [], frame = 0, last = 0;
  function seeded(i) { const n = Math.sin(i * 127.1 + 311.7) * 43758.5453; return n - Math.floor(n); }
  function resize() {
    width = innerWidth; height = innerHeight;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = width * dpr; canvas.height = height * dpr;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    stars = Array.from({length:Math.min(150,Math.round(width*height/6500))},(_,i)=>({x:seeded(i+1)*width,y:seeded(i+170)*height,r:.45+seeded(i+340)*1.15,phase:seeded(i+510)*Math.PI*2}));
    draw(0);
  }
  function draw(time) {
    context.clearRect(0,0,width,height);
    const light = document.body.classList.contains('dark');
    stars.forEach(star => {
      const alpha = .18 + .35*(.5+.5*Math.sin(star.phase+(motion.matches?0:time/4300)));
      context.fillStyle = light ? `rgba(60,85,119,${alpha*.7})` : `rgba(213,224,239,${alpha})`;
      context.beginPath(); context.arc(star.x,star.y,star.r,0,Math.PI*2); context.fill();
    });
  }
  function animate(time) {
    if (time-last>66) { draw(time);last=time; }
    frame=requestAnimationFrame(animate);
  }
  function sync() {
    cancelAnimationFrame(frame);
    if (!motion.matches && !document.hidden && !document.body.classList.contains('reader-mode') && !document.body.classList.contains('intro-playing') && document.body.dataset.motion !== 'paused') frame=requestAnimationFrame(animate);
    else draw(0);
  }
  let resizeFrame=0;
  addEventListener('resize',()=>{cancelAnimationFrame(resizeFrame);resizeFrame=requestAnimationFrame(resize);},{passive:true});
  document.addEventListener('visibilitychange',sync);
  document.addEventListener('victory:motionchange',sync);
  motion.addEventListener('change',sync);
  new MutationObserver(sync).observe(document.body,{attributes:true,attributeFilter:['class']});
  resize();sync();
})();

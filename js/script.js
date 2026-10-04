const nav=document.getElementById('nav'),btn=document.getElementById('menu');
document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');btn.setAttribute('aria-expanded',false)}});
btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
nav.addEventListener('click',e=>{if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded',false)}});
// count-up stats, skipped if reduced motion is on
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
 const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;io.unobserve(e.target);
  const el=e.target,end=+el.dataset.count,t0=performance.now();
  (function tick(t){const p=Math.min((t-t0)/1200,1);el.textContent=Math.round(end*p);if(p<1)requestAnimationFrame(tick)})(t0);
 }),{threshold:.6});
 document.querySelectorAll('[data-count]').forEach(el=>io.observe(el));
}

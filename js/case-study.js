const nav=document.getElementById('nav'),btn=document.getElementById('menu');
const shut=()=>{nav.classList.remove('open');btn.setAttribute('aria-expanded',false)};
btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
document.addEventListener('keydown',e=>{if(e.key==='Escape')shut()});

// Mobile menu
const menu=document.getElementById('menu');
document.getElementById('burger').onclick=()=>menu.classList.toggle('open');
menu.querySelectorAll('a').forEach(a=>a.onclick=()=>menu.classList.remove('open'));
// Menu filter tabs
const tabs=document.querySelectorAll('.tab'),items=document.querySelectorAll('.item');
tabs.forEach(t=>t.onclick=()=>{
  tabs.forEach(x=>x.classList.remove('active'));t.classList.add('active');
  items.forEach(i=>i.classList.toggle('hide',t.dataset.filter!=='all'&&i.dataset.cat!==t.dataset.filter));
});

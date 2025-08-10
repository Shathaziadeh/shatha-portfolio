const products = [
  {id:1, title:'Canvas Tote', cat:'accessories', price:'$22', desc:'Minimal tote for everyday use.', img:'https://picsum.photos/seed/tote/600/400'},
  {id:2, title:'Soft Hoodie', cat:'apparel', price:'$38', desc:'Cozy hoodie with relaxed fit.', img:'https://picsum.photos/seed/hoodie/600/400'},
  {id:3, title:'Ceramic Mug', cat:'home', price:'$14', desc:'Matte ceramic mug, 12oz.', img:'https://picsum.photos/seed/mug/600/400'},
  {id:4, title:'Cap', cat:'apparel', price:'$16', desc:'Breathable cotton cap.', img:'https://picsum.photos/seed/cap/600/400'},
  {id:5, title:'Key Lanyard', cat:'accessories', price:'$9', desc:'Durable lanyard with clip.', img:'https://picsum.photos/seed/lanyard/600/400'},
  {id:6, title:'Desk Plant', cat:'home', price:'$18', desc:'Low-maintenance faux plant.', img:'https://picsum.photos/seed/plant/600/400'},
];
const grid = document.querySelector('#grid');
const search = document.querySelector('#search');
const chips = document.querySelectorAll('.chip');
function render(list){
  grid.innerHTML = '';
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = \`
      <img src="\${p.img}" alt="">
      <h4>\${p.title}</h4>
      <div class="price">\${p.price}</div>
      <button class="chip" data-id="\${p.id}">Details</button>\`;
    card.querySelector('button').addEventListener('click', ()=> openModal(p));
    grid.appendChild(card);
  });
}
function openModal(p){
  document.querySelector('#mimg').src = p.img;
  document.querySelector('#mtitle').textContent = p.title;
  document.querySelector('#mdesc').textContent = p.desc;
  document.querySelector('#mprice').textContent = p.price;
  document.querySelector('#modal').hidden = false;
}
document.querySelector('#close').addEventListener('click', ()=> document.querySelector('#modal').hidden = true);
document.querySelector('#modal').addEventListener('click', (e)=> { if(e.target.id==='modal') e.target.hidden = true; });
function applyFilters(){
  const txt = (search.value||'').toLowerCase();
  const active = document.querySelector('.chip.active').dataset.cat;
  let list = products.filter(p => p.title.toLowerCase().includes(txt));
  if(active !== 'all') list = list.filter(p => p.cat === active);
  render(list);
}
search.addEventListener('input', applyFilters);
chips.forEach(ch => ch.addEventListener('click', ()=>{
  chips.forEach(x=>x.classList.remove('active'));
  ch.classList.add('active');
  applyFilters();
}));
render(products);

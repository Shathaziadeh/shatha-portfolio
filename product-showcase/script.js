const data = [
  { id:1, title:'Minimal Watch', tag:'accessory', desc:'Simple, clean watch for daily wear.' },
  { id:2, title:'Smart Speaker', tag:'tech', desc:'Voice assistant with rich sound.' },
  { id:3, title:'Desk Lamp', tag:'home', desc:'Warm light with adjustable arm.' },
  { id:4, title:'Wireless Buds', tag:'tech', desc:'Compact case and long battery.' },
  { id:5, title:'Ceramic Mug', tag:'home', desc:'Thick walls, stays warm longer.' },
  { id:6, title:'Leather Wallet', tag:'accessory', desc:'Slim profile, RFID blocking.' },
];

const grid   = document.getElementById('grid');
const chips  = document.querySelectorAll('.chip');
const search = document.getElementById('search');
const modal  = document.getElementById('modal');
const mTitle = document.getElementById('m-title');
const mDesc  = document.getElementById('m-desc');
const mClose = document.getElementById('m-close');

let currentTag = 'all';
let query = '';

function render() {
  grid.innerHTML = '';
  const q = query.trim().toLowerCase();
  data
    .filter(p => (currentTag === 'all' || p.tag === currentTag))
    .filter(p => !q || p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
    .forEach(p => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <h3>${p.title}</h3>
        <span class="tag">${p.tag}</span>
        <p>${p.desc}</p>
        <button class="btn" data-id="${p.id}">Details</button>
      `;
      grid.appendChild(card);
    });
}

chips.forEach(c => c.addEventListener('click', () => {
  chips.forEach(x => x.classList.remove('active'));
  c.classList.add('active');
  currentTag = c.dataset.tag;
  render();
}));

search.addEventListener('input', (e) => {
  query = e.target.value;
  render();
});

grid.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-id]');
  if (!btn) return;
  const item = data.find(d => d.id === Number(btn.dataset.id));
  if (!item) return;
  mTitle.textContent = item.title;
  mDesc.textContent = item.desc;
  modal.showModal();
});

mClose.addEventListener('click', () => modal.close());

// initial render
render();

// year in footer
document.getElementById('y').textContent = new Date().getFullYear();

// smooth scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if(!el) return;
    e.preventDefault();
    el.scrollIntoView({behavior:'smooth', block:'start'});
    // close mobile nav after click
    nav.classList.remove('show');
    toggle.setAttribute('aria-expanded','false');
  });
});

// mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', ()=>{
  const open = nav.classList.toggle('show');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

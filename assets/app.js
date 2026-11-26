function toggleDrawer(open) {
  const drawer = document.getElementById('siteDrawer');
  const overlay = document.getElementById('drawerOverlay');
  if (open) {
    drawer.classList.add('open');
    overlay.classList.add('open');
  } else {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  }
}

function filterCards(cat, btn) {
  if (btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  const q = (document.getElementById('searchInput')?.value || '').trim().toLowerCase();
  const activeCat = cat || document.querySelector('.filter-btn.active')?.dataset.cat || 'all';
  document.querySelectorAll('#allCardsGrid .card').forEach(card => {
    const title = (card.dataset.title || '').toLowerCase();
    const cardCat = card.dataset.cat || 'story';
    const matchText = !q || title.includes(q);
    const matchCat = activeCat === 'all' || cardCat === activeCat;
    card.style.display = (matchText && matchCat) ? 'flex' : 'none';
  });
}

function openLightbox(src) {
  const lb = document.getElementById('imgLightbox');
  const img = document.getElementById('lightboxImg');
  if (lb && img) {
    img.src = src;
    lb.classList.add('open');
  }
}

function closeLightbox() {
  document.getElementById('imgLightbox')?.classList.remove('open');
}

window.addEventListener('scroll', () => {
  const btn = document.getElementById('backTopBtn');
  if (btn) {
    if (window.scrollY > 320) btn.classList.add('show');
    else btn.classList.remove('show');
  }
});

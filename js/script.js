/* ============================================================
   FOTO VERONIKA PLÍVOVÁ — Main script
   ============================================================ */

const qs  = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ── Navigace ────────────────────────────────────────────── */
const nav        = qs('#site-nav');
const hamburger  = qs('#nav-hamburger');
const mobileMenu = qs('#nav-mobile-menu');

window.addEventListener('scroll', () => {
  nav && nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  qsa('.nav-mobile-link', mobileMenu).forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* Aktivní odkaz */
const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
qsa('.nav-link, .nav-mobile-link').forEach(link => {
  const href = (link.getAttribute('href') || '').replace(/\/$/, '') || '/';
  const isHome = href === '/';
  const match = isHome ? currentPath === '/' : (currentPath === href || currentPath.startsWith(href + '/'));
  if (match) link.classList.add('active');
});

/* ── Hero slideshow ──────────────────────────────────────── */
(function () {
  const slides = qsa('.hero-slide');
  const dots   = qsa('.hero-dot');
  if (slides.length < 2) return;

  let current  = 0;
  let interval;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current] && dots[current].classList.remove('active');
    dots[current] && dots[current].setAttribute('aria-selected', 'false');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current] && dots[current].classList.add('active');
    dots[current] && dots[current].setAttribute('aria-selected', 'true');
  }

  function start() {
    interval = setInterval(() => goTo(current + 1), 5000);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(interval);
      goTo(i);
      start();
    });
  });

  start();
}());

/* ── Scroll reveal ───────────────────────────────────────── */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

qsa('.reveal').forEach(el => revealObs.observe(el));

/* ── Portfolio filtr ─────────────────────────────────────── */
(function () {
  const filterBtns   = qsa('.filter-btn');
  const galleryItems = qsa('.gallery-item');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      galleryItems.forEach(item => {
        const show = filter === 'vse' || item.dataset.category === filter;
        item.classList.toggle('hidden', !show);
      });
    });
  });

  /* Hash při načtení stránky (#deti apod.) */
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const target = qs(`[data-filter="${hash}"]`);
    if (target) target.click();
    const section = qs(`#gallery-${hash}`);
    if (section) setTimeout(() => section.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
  }
}());

/* ── Lightbox ────────────────────────────────────────────── */
(function () {
  const lightbox      = qs('#lightbox');
  const lightboxImg   = qs('#lightbox-img');
  const closeBtn      = qs('#lightbox-close');
  const prevBtn       = qs('#lightbox-prev');
  const nextBtn       = qs('#lightbox-next');
  const galleryItems  = qsa('.gallery-item');

  if (!lightbox) return;

  let images = [];
  let idx    = 0;

  function open(imgs, i) {
    images = imgs;
    idx    = i;
    lightboxImg.src = images[idx].src;
    lightboxImg.alt = images[idx].alt || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function nav(dir) {
    idx = (idx + dir + images.length) % images.length;
    lightboxImg.src = images[idx].src;
    lightboxImg.alt = images[idx].alt || '';
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const visible = galleryItems.filter(it => !it.classList.contains('hidden'));
      const imgs    = visible.map(it => it.querySelector('img'));
      open(imgs, visible.indexOf(item));
    });
  });

  closeBtn && closeBtn.addEventListener('click', close);
  prevBtn  && prevBtn.addEventListener('click',  () => nav(-1));
  nextBtn  && nextBtn.addEventListener('click',  () => nav(1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      close();
    if (e.key === 'ArrowLeft')   nav(-1);
    if (e.key === 'ArrowRight')  nav(1);
  });
}());

/* ── Cookie lišta ────────────────────────────────────────── */
(function () {
  const banner  = qs('#cookie-banner');
  const accept  = qs('#cookie-accept');
  const decline = qs('#cookie-decline');
  if (!banner) return;

  function hide() {
    banner.classList.remove('visible');
    localStorage.setItem('cookiesAccepted', '1');
  }

  if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => banner.classList.add('visible'), 1800);
  }

  accept  && accept.addEventListener('click',  hide);
  decline && decline.addEventListener('click', hide);
}());

/* ── Accordion ───────────────────────────────────────────── */
qsa('.accordion-item').forEach(item => {
  const header = item.querySelector('.accordion-header');
  const body   = item.querySelector('.accordion-body');
  if (!header || !body) return;

  header.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    /* Zavřít všechny ve stejné skupině */
    const group = item.closest('.accordion, .accordion-cols');
    if (group) {
      qsa('.accordion-item', group).forEach(sibling => {
        sibling.classList.remove('open');
        const sb = sibling.querySelector('.accordion-body');
        if (sb) sb.style.maxHeight = '0';
      });
    }

    if (!isOpen) {
      item.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
});

/* ── Kontaktní formulář ──────────────────────────────────── */
(function () {
  const form = qs('#contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    const honeypot = qs('[name="website"]', form);
    if (honeypot && honeypot.value) {
      e.preventDefault();
      return;
    }
    /* Zde lze přidat fetch / AJAX odeslání */
  });
}());

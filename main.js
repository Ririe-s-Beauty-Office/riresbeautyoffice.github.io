 /* ─── Nav scroll ───── */
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  /* ─── Hamburger ────── */
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobileMenu');
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
  });
  document.querySelectorAll('.mob-link, .mob-cta').forEach(l => {
    l.addEventListener('click', () => {
      ham.classList.remove('open');
      mob.classList.remove('open');
    });
  });

  /* ─── Intersection observer ─── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up, .fade-in').forEach(el => io.observe(el));

  /* ─── Gallery lightbox ─── */
  const lightbox = document.getElementById('lightbox');
  const lbFill = document.getElementById('lightbox-fill');
  const lbClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.g-item').forEach(item => {
    item.addEventListener('click', () => {
      const color = item.querySelector('.g-item-inner').className.split(' ').find(c => c.startsWith('gc-'));
      lbFill.className = color || 'gc-1';
      lbFill.style.borderRadius = '16px';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  /* ─── Subtle parallax on hero orbs ─── */
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    document.querySelector('.orb-1').style.transform = `translateY(${y * 0.15}px)`;
    document.querySelector('.orb-2').style.transform = `translateY(${-y * 0.1}px)`;
  }, { passive: true });

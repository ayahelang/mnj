/**
 * MNJ Header — active state + mobile menu
 * Works across all pages with uniform nav
 */
(function () {
  function getPageKey() {
    const path = (window.location.pathname || '/').replace(/\/$/, '');
    const file = path.split('/').pop() || 'index.html';
    if (file === 'track.html') return 'track';
    if (file === 'index.html' || file === '' || file === 'mnj-new') {
      const hash = (window.location.hash || '#home').replace('#', '');
      return hash || 'home';
    }
    return file;
  }

  function setActive() {
    const key = getPageKey();
    document.querySelectorAll('.nav a').forEach(a => {
      a.classList.remove('active');
      const page = a.getAttribute('data-page') || '';
      const href = a.getAttribute('href') || '';
      if (page && page === key) {
        a.classList.add('active');
      } else if (!page && href.includes('track.html') && key === 'track') {
        a.classList.add('active');
      } else if (key === 'home' && (href === 'index.html' || href === '#home' || href.endsWith('index.html'))) {
        a.classList.add('active');
      }
    });
  }

  function initMobile() {
    const toggle = document.getElementById('mobileToggle');
    const nav = document.getElementById('nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  function initScroll() {
    const header = document.getElementById('header');
    if (!header) return;
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  document.addEventListener('DOMContentLoaded', () => {
    setActive();
    initMobile();
    initScroll();
  });

  // Update active when hash changes (same-page sections)
  window.addEventListener('hashchange', setActive);
})();

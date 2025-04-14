const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

document.querySelectorAll('.navbar a').forEach(link => {
  const href = link.getAttribute('href');

  if (!href || href === '#') return;

  const normalizedHref = href.length > 1 ? href.replace(/\/$/, '') : href;

  if (normalizedHref === currentPath) {
    link.classList.add('active');
  }
});

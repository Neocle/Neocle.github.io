const normalizePath = (path) => {
  return path
    .replace(/\/$/, '')
    .replace(/\.html$/, '')
    || '/';
};

const currentPath = normalizePath(window.location.pathname);

document.querySelectorAll('.navbar a').forEach(link => {
  const href = link.getAttribute('href');
  if (!href || href === '#') return;

  const normalizedHref = normalizePath(href);

  if (normalizedHref === currentPath) {
    link.classList.add('active');
  }
});

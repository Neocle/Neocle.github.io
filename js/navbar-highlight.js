const currentPath = window.location.pathname.replace(/\/$/, '');

document.querySelectorAll('.navbar a').forEach(link => {
  const href = link.getAttribute('href').replace(/\/$/, '');
  if (href && currentPath.endsWith(href)) {
    link.classList.add('active');
  }
});
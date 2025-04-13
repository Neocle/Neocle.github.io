const currentPath = window.location.pathname;

document.querySelectorAll('.navbar a').forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});
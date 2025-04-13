window.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate-on-load");
  
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("fade-in");
      }, i * 150);
    });
  });
  
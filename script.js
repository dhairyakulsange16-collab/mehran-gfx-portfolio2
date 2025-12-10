// Simple scroll reveal for .reveal elements
function handleReveal() {
  const elements = document.querySelectorAll('.reveal');
  const triggerBottom = window.innerHeight * 0.9;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleReveal);
window.addEventListener('load', handleReveal);

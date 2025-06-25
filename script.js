// Dark/Light Mode Toggle
const toggle = document.getElementById('modeToggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('light-mode');
});

// Typewriter Effect
const typewriter = document.querySelector('.typewriter');
const text = "Hi, I'm Arayan Ahmed";
let index = 0;

function type() {
  if (index < text.length) {
    typewriter.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
window.onload = type;

// Scroll animation (optional)
const sections = document.querySelectorAll('.fade-in, .slide-up');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  observer.observe(section);
});
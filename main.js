// Deep link redirect — /article/slug etc. → App Store
if (window.location.pathname !== '/' && window.location.pathname !== '/privacy.html' && window.location.pathname !== '/terms.html') {
  window.location.replace('https://apps.apple.com/app/m%C3%Bcrekkep/id6760975752');
}

// Scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

// Nav scroll state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Mobile menu
const toggle = document.getElementById('mobileToggle');
const menu = document.getElementById('mobileMenu');
toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});
menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => menu.classList.remove('open'));
});

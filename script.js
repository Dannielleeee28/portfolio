const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Toggle navigation menu on burger click
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Optional: Close menu on link click (good UX on mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

// Contact form submit handler (dummy, just for demo)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks for reaching out! I will get back to you soon.');
  contactForm.reset();
});

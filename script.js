// Responsive Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

// Typing Effect
const typedText = document.getElementById('typed');
const words = [
  "Hi, I'm Dannielle,",
  'Web Developer.',
  'Software Engineer.',
  'Tech Enthusiast.',
  'Problem Solver.',
  'Creative Coder.'
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = words[wordIndex];
  if (isDeleting) {
    typedText.textContent = current.substring(0, charIndex--);
  } else {
    typedText.textContent = current.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 50 : 120);
  }
}
if (typedText) type();

// Project Slider & Pagination
const projectWrapper = document.querySelector('.project-wrapper');
const projectCards = document.querySelectorAll('.project-card');
const prevBtn = document.getElementById('prev-page');
const nextBtn = document.getElementById('next-page');

const projectsPerPage = 2;
const totalPages = Math.ceil(projectCards.length / projectsPerPage);
let currentPage = 1;

// Scroll to page function
function scrollToPage(page) {
  const cardWidth = projectCards[0].offsetWidth + parseInt(getComputedStyle(projectCards[0]).marginRight);
  projectWrapper.scrollTo({
    left: (page - 1) * (cardWidth * projectsPerPage + 24), // 24px from gap (1.5rem approx)
    behavior: 'smooth',
  });
  currentPage = page;
  updateButtons();
}

// Update buttons disabled state
function updateButtons() {
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
  prevBtn.style.opacity = prevBtn.disabled ? '0.4' : '1';
  nextBtn.style.opacity = nextBtn.disabled ? '0.4' : '1';
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    scrollToPage(currentPage - 1);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages) {
    scrollToPage(currentPage + 1);
  }
});

updateButtons();

// Prevent page scroll when mouse inside project-wrapper, allow horizontal scroll of projects
projectWrapper.addEventListener('wheel', e => {
  if (e.deltaY !== 0) {
    e.preventDefault();
    projectWrapper.scrollLeft += e.deltaY;
  }
}, { passive: false });

// Contact Form (EmailJS)
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm('service_schtq6y', 'template_yg6e585', this, 'PlcxN_UlYvbT9JjWR')
    .then(() => {
      alert('Thanks for reaching out! I will get back to you soon.');
      this.reset();
    }, (error) => {
      console.error('EmailJS Error:', error);
      alert('Oops! Something went wrong. Please try again.');
    });
});

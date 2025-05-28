const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

document.querySelectorAll('#nav-menu a.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});

const typedElement = document.getElementById('typed-role');
const roles = [
  'a passionate Web Developer',
  'a curious Programmer',
  'a tech enthusiast',
  'a problem solver',
  'pogi'
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenRoles = 1500;

function type() {
  if (!typedElement) return;
  
  const currentRole = roles[roleIndex];
  
  if (!isDeleting) {
    typedElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenRoles);
      return;
    }
  } else {
    typedElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}
type();

const projectWrapper = document.querySelector('.project-wrapper');
const projects = document.querySelectorAll('.project-card');
const prevBtn = document.getElementById('prev-page');
const nextBtn = document.getElementById('next-page');
const cardsPerPage = 2;
let currentPage = 1;
const totalPages = Math.ceil(projects.length / cardsPerPage);

function showProjectsPage(page) {
  if (page < 1) page = totalPages;
  if (page > totalPages) page = 1;
  currentPage = page;

  projects.forEach((project, i) => {
    project.style.display = 'none';
    if (i >= (page - 1) * cardsPerPage && i < page * cardsPerPage) {
      project.style.display = 'flex';
    }
  });
}

prevBtn.addEventListener('click', () => {
  showProjectsPage(currentPage - 1);
});

nextBtn.addEventListener('click', () => {
  showProjectsPage(currentPage + 1);
});

showProjectsPage(currentPage);

const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const serviceID = 'service_schtq6y';
  const templateID = 'template_yg6e585'; 

  emailjs.sendForm(serviceID, templateID, contactForm)
    .then(() => {
      formResponse.style.color = '#ffff';
      formResponse.textContent = 'Message sent successfully! Thank you.';
      contactForm.reset();
    }, (err) => {
      formResponse.style.color = 'red';
      formResponse.textContent = 'Oops! Something went wrong, please try again.';
      console.error('EmailJS error:', err);
    });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

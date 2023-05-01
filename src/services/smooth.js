
const localLinks = document.querySelectorAll('a[href^="#"]');

localLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.hash);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
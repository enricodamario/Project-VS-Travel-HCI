const menuToggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggleBtn.addEventListener('click', () => {
  const isExpanded = navLinks.classList.toggle('active');
  menuToggleBtn.setAttribute('aria-expanded', isExpanded);
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggleBtn.setAttribute('aria-expanded', false);
  });
});

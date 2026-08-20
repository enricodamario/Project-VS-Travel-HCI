document.querySelectorAll('nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

const menuToggleBtn = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-links');

if (menuToggleBtn && navList) {
  menuToggleBtn.addEventListener('click', () => {
    const isActive = navList.classList.toggle('active');
    menuToggleBtn.setAttribute('aria-expanded', isActive);
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
      menuToggleBtn.setAttribute('aria-expanded', false);
    });
  });
}
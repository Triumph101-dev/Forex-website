// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== CLOSE MENU ON LINK CLICK (optional for mobile) =====
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ===== STICKY NAV SCROLL EFFECT (optional aesthetic) =====
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== THEME TOGGLE (if you want light/dark support) =====
// You can expand this if you plan to add a theme toggle later
/*
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});
*/

// ===== INIT AOS (in case not added inline) =====
if (typeof AOS !== 'undefined') {
  AOS.init();
}

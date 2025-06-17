const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');
const navLinks = document.querySelectorAll('.nav-list a');
const menuIconInner = menuIcon.querySelector('i');

// Toggle menu open/close
menuIcon.addEventListener('click', () => {
  navList.classList.toggle('active');

  // Toggle icon (hamburger ↔ close)
  menuIconInner.classList.toggle('fa-bars');
  menuIconInner.classList.toggle('fa-times');
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');

    // Reset icon to hamburger
    menuIconInner.classList.add('fa-bars');
    menuIconInner.classList.remove('fa-times');
  });
});

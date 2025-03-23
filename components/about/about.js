document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
  
    // Toggle navbar styling when scrolling down
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  });
  
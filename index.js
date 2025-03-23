document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');

  // Change navbar style when scrolling down
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

  // Animate the hero text opacity on scroll (simple fade effect)
  const heroContent = document.querySelector('.hero-content');
  window.addEventListener('scroll', function () {
    let opacity = 1 - window.scrollY / 300;
    heroContent.style.opacity = opacity < 0 ? 0 : opacity;
  });

  // Animate service cards when they become visible
  const serviceCards = document.querySelectorAll('.row.g-4 .col-md-4');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3  // Adjust as needed for when to trigger the animation
  });

  serviceCards.forEach(card => observer.observe(card));
});

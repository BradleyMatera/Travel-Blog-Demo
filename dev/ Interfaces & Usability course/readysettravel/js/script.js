document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Book Now button interaction
  const bookNowButtons = document.querySelectorAll('.Tour1BookBtn, .Tour2BookBtn, .Tour3BookBtn');
  bookNowButtons.forEach(button => {
    button.addEventListener('click', function () {
      alert('Thank you for your interest! We will contact you shortly.');
    });
  });

  // Form submission handling
  const searchForm = document.getElementById('searchForm');
  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const destinationInput = document.querySelector('[name="destination"]');
    const destination = destinationInput.value;
    if (destination === '') {
      alert('Please enter a destination.');
    } else {
      alert('Searching for: ' + destination);
      destinationInput.value = '';
    }
  });
});
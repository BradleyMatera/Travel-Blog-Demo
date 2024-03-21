document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Interaction for all Book Now buttons
  const bookNowButtons = document.querySelectorAll('.Tour1BookBtn, .Tour2BookBtn, .Tour3BookBtn, .Tour4BookBtn, .Tour5BookBtn, .Tour6BookBtn, .Tour7BookBtn, .Tour8BookBtn, .Tour9BookBtn');
  bookNowButtons.forEach(button => {
    button.addEventListener('click', function () {
      alert('Thank you for your interest! We will contact you shortly.');
    });
  });

  // Form submission handling for the Search form on the Home, Destinations, and Tours pages
  const searchForms = document.querySelectorAll('form[aria-label="Search form"]');
  searchForms.forEach(form => {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const destinationInput = this.querySelector('input[name="destination"]');
      const destination = destinationInput.value.trim();
      if (destination === '') {
        alert('Please enter a destination.');
      } else {
        alert(`Searching for: ${destination}`);
        destinationInput.value = ''; // Clear the input after search
      }
    });
  });

  // Form submission handling for the booking page
  const bookingForm = document.querySelector('form[action="/bookTrip"]');
  if (bookingForm) { // Check if the booking form exists on the current page
    bookingForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Insert form validation and submission logic here
      alert('Your booking request has been submitted. We will get back to you soon!');
      this.reset(); // Reset the form after submission
    });
  }
});

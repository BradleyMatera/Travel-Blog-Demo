document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Toggle mobile navigation menu
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("nav ul");
    navToggle.addEventListener("click", function() {
      navMenu.classList.toggle("show");
    });
  
    // Alert for "Book Now" buttons
    document.querySelectorAll(".book-now").forEach(button => {
      button.addEventListener("click", function() {
        alert("Thank you for your interest! We will contact you shortly.");
      });
    });
  
    // Form submission validation
    const searchForm = document.querySelector(".search-form");
    searchForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const searchInput = document.querySelector(".search-input");
      const destination = searchInput.value.trim();
      if (destination === "") {
        alert("Please enter a destination.");
      } else {
        alert(`Searching for: ${destination}`);
        searchInput.value = ""; // Clear input after search
      }
    });
  });
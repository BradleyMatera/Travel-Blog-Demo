document.addEventListener("DOMContentLoaded", function() {

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Toggle mobile navigation menu
    document.querySelector(".nav-toggle").addEventListener("click", function() {
      document.querySelector("nav ul").classList.toggle("show");
    });
  
    // Alert for "Book Now" buttons
    var bookNowButtons = document.querySelectorAll(".book-now");
    for (var i = 0; i < bookNowButtons.length; i++) {
      bookNowButtons[i].addEventListener("click", function() {
        alert("Thank you for your interest! We will contact you shortly.");
      });
    }
  
    // Form submission validation
    document.querySelector(".search-form").addEventListener("submit", function(event) {
      event.preventDefault();
      var searchInput = document.querySelector(".search-input");
      var destination = searchInput.value.trim();
      
      if (destination === "") {
        alert("Please enter a destination.");
      } else {
        alert("Searching for: " + destination);
        searchInput.value = "";
      }
    });
  
  });
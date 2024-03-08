// script.js

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
  let navLinks = document.querySelectorAll("nav a");
  
  navLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      let target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});

// Toggle mobile navigation menu
let navToggle = document.querySelector(".nav-toggle");
let navMenu = document.querySelector("nav ul");

navToggle.addEventListener("click", function() {
  navMenu.classList.toggle("show");
});

// Display popup when "Book Now" buttons are clicked
let bookNowButtons = document.querySelectorAll(".book-now");

bookNowButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    alert("Thank you for your interest! We will contact you shortly.");
  });
});

// Validate form input
let searchForm = document.querySelector(".search-form");
let searchInput = document.querySelector(".search-input");

searchForm.addEventListener("submit", function(e) {
  e.preventDefault();
  
  let destination = searchInput.value.trim();
  
  if (destination === "") {
    reportValidation("Please enter a destination.");
  } else {
    // Perform search or redirect to search results page
    alert("Searching for: " + destination);
    searchInput.value = "";
  }
});

// Validation function
function reportValidation(message) {
  let validationMessage = document.createElement("div");
  validationMessage.classList.add("validation-message");
  validationMessage.textContent = message;
  
  searchForm.appendChild(validationMessage);
  
  setTimeout(function() {
    validationMessage.remove();
  }, 3000);
}
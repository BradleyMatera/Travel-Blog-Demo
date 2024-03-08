// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle mobile navigation menu
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("nav ul");
    navToggle.addEventListener("click", function() {
        navMenu.classList.toggle("show");
    });

    // Display popup when "Book Now" buttons are clicked
    document.querySelectorAll(".book-now").forEach(button => {
        button.addEventListener("click", function() {
            alert("Thank you for your interest! We will contact you shortly.");
        });
    });

    // Validate form input and display popup
    const searchForm = document.querySelector(".search-form");
    const searchInput = document.querySelector(".search-input");
    searchForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const destination = searchInput.value.trim();
        if (destination === "") {
            alert("Please enter a destination.");
        } else {
            alert(`Searching for: ${destination}`);
            searchInput.value = ""; // Clear input after search
        }
    });
});

// Validation function
function reportValidation(message) {
    let existingMessage = document.querySelector(".validation-message");
    if (existingMessage) {
        existingMessage.remove(); // Remove existing message before adding a new one
    }
    let validationMessage = document.createElement("div");
    validationMessage.classList.add("validation-message");
    validationMessage.textContent = message;
    let searchForm = document.querySelector(".search-form"); // Ensure searchForm is available
    if (searchForm) {
        searchForm.appendChild(validationMessage);
    }
    
    setTimeout(function() {
        validationMessage.remove();
    }, 3000);
}

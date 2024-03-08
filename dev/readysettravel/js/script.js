// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    let navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            let targetId = this.getAttribute("href");
            let target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            } else {
                console.error("Target not found for:", targetId);
            }
        });
    });

    // Toggle mobile navigation menu
    let navToggle = document.querySelector(".nav-toggle");
    let navMenu = document.querySelector("nav ul");
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", function() {
            navMenu.classList.toggle("show");
        });
    } else {
        console.error("Nav toggle or menu not found");
    }

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

    if (searchForm && searchInput) {
        searchForm.addEventListener("submit", function(e) {
            e.preventDefault();

            let destination = searchInput.value.trim();
            
            if (destination === "") {
                reportValidation("Please enter a destination.");
            } else {
                alert("Searching for: " + destination);
                searchInput.value = "";
            }
        });
    } else {
        console.error("Search form or input not found");
    }
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

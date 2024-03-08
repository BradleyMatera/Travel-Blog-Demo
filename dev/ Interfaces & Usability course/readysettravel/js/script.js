// JS CODE //
document.addEventListener("DOMContentLoaded", function() {
    // Attach click event listeners to navigation links for smooth scrolling
    var navLinks = document.querySelectorAll('nav a[href^="#"]');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Toggle mobile navigation menu
    var navToggle = document.querySelector(".nav-toggle");
    var navMenu = document.querySelector("nav ul");
    navToggle.addEventListener("click", function() {
        if (navMenu.classList.contains("show")) {
            navMenu.classList.remove("show");
        } else {
            navMenu.classList.add("show");
        }
    });

    // Display alert when "Book Now" buttons are clicked
    var bookNowButtons = document.querySelectorAll(".book-now");
    for (var j = 0; j < bookNowButtons.length; j++) {
        bookNowButtons[j].addEventListener("click", function() {
            alert("Thank you for your interest! We will contact you shortly.");
        });
    }

    // Validate form input and display alert
    var searchForm = document.querySelector(".search-form");
    if (searchForm) {
        searchForm.addEventListener("submit", function(e) {
            e.preventDefault();
            var destination = document.querySelector(".search-input").value.trim();
            if (destination === "") {
                alert("Please enter a destination.");
            } else {
                alert("Searching for: " + destination);
                document.querySelector(".search-input").value = "";
            }
        });
    }
});

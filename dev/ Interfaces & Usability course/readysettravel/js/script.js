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
      let tourName = "";
      if (this.classList.contains('Tour1BookBtn')) {
        tourName = "Alps Mountain Hiking Tour";
      } else if (this.classList.contains('Tour2BookBtn')) {
        tourName = "Snorkel the Barrier Reef Tour";
      } else if (this.classList.contains('Tour3BookBtn')) {
        tourName = "Tour the Pyramids on Camelback";
      } else if (this.classList.contains('Tour4BookBtn')) {
        tourName = "Morning at a Sea Tour";
      } else if (this.classList.contains('Tour5BookBtn')) {
        tourName = "Ngorongoro Conservation Tours";
      } else if (this.classList.contains('Tour6BookBtn')) {
        tourName = "Ellis Island Tours";
      } else if (this.classList.contains('Tour7BookBtn')) {
        tourName = "Guatemala Wine House Tour";
      } else if (this.classList.contains('Tour8BookBtn')) {
        tourName = "Thailand Adult Beach Tour";
      } else if (this.classList.contains('Tour9BookBtn')) {
        tourName = "Pathway to the Mediterraneans adults only tour";
      }
      document.getElementById("Propertietype").innerHTML = tourName;
      alert('Thank you for your interest in ' + tourName + '! We will contact you shortly.');
    });
  });

  // Form submission handling for the Search form on the Home, Destinations, and Tours pages
  const searchForms = document.querySelectorAll('form[role="search"]');
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
  const bookingForm = document.querySelector('form.booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Insert form validation and submission logic here
      alert('Your booking request has been submitted. We will get back to you soon!');
      this.reset(); // Reset the form after submission
    });
  }

  // Dynamic rendering of tour cards, destination cards, and blog post cards
  // You can replace the sample data with data from an API or database
  const tourData = [
    {
      image: 'img/clientimgs/assets/tour-mountainHiking.jpg',
      title: 'Alps Mountain Hiking Tour',
      duration: '4 days | 10 stops',
      price: '$1,500',
      bookingClass: 'Tour1BookBtn'
    },
    {
      image: 'img/clientimgs/assets/tour-snorkel.jpg',
      title: 'Snorkel the Barrier Reef Tour',
      duration: '2 days | 3 stops',
      price: '$1,000',
      bookingClass: 'Tour2BookBtn'
    },
    {
      image: 'img/clientimgs/assets/tour-pyramids.jpg',
      title: 'Tour the Pyramids on Camelback',
      duration: '3 days | 5 stops',
      price: '$2,000',
      bookingClass: 'Tour3BookBtn'
    }
    // Add more tour data objects as needed
  ];

  const destinationData = [
    {
      image: 'img/clientimgs/assets/destinations-paris.jpg',
      title: 'Paris',
      subtitle: 'France'
    },
    {
      image: 'img/clientimgs/assets/destinations-sydney.jpg',
      title: 'Sydney',
      subtitle: 'Australia'
    },
    {
      image: 'img/clientimgs/assets/destinations-machu.jpg',
      title: 'Machu Picchu',
      subtitle: 'Peru'
    }
    // Add more destination data objects as needed
  ];

  const blogPostData = [
    {
      image: 'img/clientimgs/assets/blog-post-1.jpg',
      title: '10 Must-Visit Destinations for Adventure Seekers',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget ultricies magna augue eget est.'
    }
    // Add more blog post data objects as needed
  ];

  // Render tour cards
  const tourCardContainer = document.querySelector('.grid-cols-1.md\\:grid-cols-3.gap-4');
  if (tourCardContainer) {
    tourData.forEach(tour => {
      const tourCard = `
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img class="w-full h-56 object-cover" src="${tour.image}" alt="${tour.title}">
          <div class="p-4">
            <h3 class="text-lg font-bold text-slate-900">${tour.title}</h3>
            <p class="text-sm text-stone-400">${tour.duration}</p>
            <p class="text-2xl font-bold text-slate-900">${tour.price}</p>
            <button class="mt-4 w-full bg-orange-400 text-white py-2 rounded hover:bg-orange-500 transition duration-300 ${tour.bookingClass}">Book Now</button>
          </div>
        </div>
      `;
      tourCardContainer.insertAdjacentHTML('beforeend', tourCard);
    });
  }

  // Render destination cards
  const destinationCardContainer = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3.gap-6');
  if (destinationCardContainer) {
    destinationData.forEach(destination => {
      const destinationCard = `
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img class="w-full h-64 object-cover" src="${destination.image}" alt="${destination.title}">
          <div class="p-4">
            <h3 class="text-lg font-bold">${destination.title}</h3>
            <p class="text-gray-600">${destination.subtitle}</p>
          </div>
        </div>
      `;
      destinationCardContainer.insertAdjacentHTML('beforeend', destinationCard);
    });
  }

  // Render blog post cards
  const blogPostCardContainer = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3.gap-8');
  if (blogPostCardContainer) {
    blogPostData.forEach(blogPost => {
      const blogPostCard = `
        <div class="bg-white shadow-lg rounded-lg overflow-hidden blog-post-card">
          <img class="w-full h-64 object-cover" src="${blogPost.image}" alt="${blogPost.title}">
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-2">${blogPost.title}</h2>
            <p class="text-gray-600 mb-4">${blogPost.excerpt}</p>
            <a href="#" class="text-orange-400 font-semibold hover:text-orange-500">Read More</a>
          </div>
        </div>
      `;
      blogPostCardContainer.insertAdjacentHTML('beforeend', blogPostCard);
    });
  }
});
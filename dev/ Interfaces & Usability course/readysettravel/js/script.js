document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
      event.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Interaction for Book Now buttons
  document.querySelectorAll('.Tour1BookBtn, .Tour2BookBtn, .Tour3BookBtn, .Tour4BookBtn, .Tour5BookBtn, .Tour6BookBtn, .Tour7BookBtn, .Tour8BookBtn, .Tour9BookBtn').forEach(button => {
    button.addEventListener('click', () => {
      const tourNameMapping = {
        'Tour1BookBtn': 'Alps Mountain Hiking Tour',
        'Tour2BookBtn': 'Snorkel the Barrier Reef Tour',
        'Tour3BookBtn': 'Tour the Pyramids on Camelback',
        'Tour4BookBtn': 'Morning at a Sea Tour',
        'Tour5BookBtn': 'Ngorongoro Conservation Tours',
        'Tour6BookBtn': 'Ellis Island Tours',
        'Tour7BookBtn': 'Guatemala Wine House Tour',
        'Tour8BookBtn': 'Thailand Adult Beach Tour',
        'Tour9BookBtn': 'Pathway to the Mediterraneans adults only tour'
      };
      const tourName = tourNameMapping[button.classList[0]];
      alert(`Thank you for your interest in ${tourName}! We will contact you shortly.`);
    });
  });

  // Form submission handling for the Search form
  document.querySelectorAll('form[role="search"]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const destination = form.querySelector('input[name="destination"]').value.trim();
      if (!destination) {
        alert('Please enter a destination.');
      } else {
        alert(`Searching for: ${destination}`);
        form.reset();
      }
    });
  });

  // Form submission handling for the booking page
  const bookingForm = document.querySelector('form.booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', event => {
      event.preventDefault();
      alert('Your booking request has been submitted. We will get back to you soon!');
      bookingForm.reset();
    });
  }

  // Dynamic rendering of tour cards, destination cards, and blog post cards
  const renderCards = (containerId, data, type) => {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = data.map(item => {
        if (type === 'tour') {
          return `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden tour-card">
              <img class="w-full h-56 object-cover" src="${item.image}" alt="${item.title}">
              <div class="p-6">
                <h3 class="text-xl font-bold text-slate-900 mb-2">${item.title}</h3>
                <p class="text-sm text-stone-400 mb-4">${item.duration}</p>
                <p class="text-2xl font-bold text-slate-900 mb-4">${item.price}</p>
                <button class="w-full bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition duration-300 shadow-md ${item.bookingClass}">Book Now</button>
              </div>
            </div>
          `;
        } else if (type === 'destination') {
          return `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden destination-card transition duration-300 hover:shadow-xl">
              <img class="w-full h-64 object-cover transition duration-300 hover:scale-105" src="${item.image}" alt="${item.title}">
              <div class="p-6">
                <h3 class="text-2xl font-bold text-slate-900 mb-2">${item.title}</h3>
                <p class="text-base text-stone-500">${item.subtitle}</p>
              </div>
            </div>
          `;
        } else if (type === 'blog') {
          return `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden blog-post-card">
              <img class="w-full h-64 object-cover" src="${item.image}" alt="${item.title}">
              <div class="p-6">
                <h2 class="text-2xl font-bold mb-2">${item.title}</h2>
                <p class="text-gray-600 mb-4">${item.excerpt}</p>
                <a href="#" class="text-orange-400 font-semibold hover:text-orange-500">Read More</a>
              </div>
            </div>
          `;
        }
      }).join('');
    }
  };

  const tourData = [
    {
      image: '../img/clientimgs/assets/tour-mountainHiking.jpg',
      title: 'Alps Mountain Hiking Tour',
      duration: '4 days | 10 stops',
      price: '$1,500',
      bookingClass: 'Tour1BookBtn'
    },
    {
      image: '../img/clientimgs/assets/tour-snorkel.jpg',
      title: 'Snorkel the Barrier Reef Tour',
      duration: '2 days | 3 stops',
      price: '$1,000',
      bookingClass: 'Tour2BookBtn'
    },
    {
      image: '../img/clientimgs/assets/tour-pyramids.jpg',
      title: 'Tour the Pyramids on Camelback',
      duration: '3 days | 5 stops',
      price: '$2,000',
      bookingClass: 'Tour3BookBtn'
    },
    {
      image: '/img/clientimgs/dibakar-roy-DngE5PTxOwY-unsplash.jpg',
      title: 'Morning at a Sea Tour',
      duration: '6 days | Morning Only',
      price: '$1,500',
      bookingClass: 'Tour4BookBtn'
    },
    {
      image: '/img/clientimgs/ema-studios-4RS_8dmxAR0-unsplash.jpg',
      title: 'Ngorongoro Conservation Tours',
      duration: '7 days | Varies',
      price: '$1,000',
      bookingClass: 'Tour5BookBtn'
    },
    {
      image: '../img/clientimgs/jenna-day-UM8bURrginM-unsplash.jpg',
      title: 'Ellis Island Tours',
      duration: '1 day | only 1 stop',
      price: '$2,000',
      bookingClass: 'Tour6BookBtn'
    },
    {
      image: '/img/clientimgs/nathan-cima-RTQKAxfUGMw-unsplash.jpg',
      title: 'Guatemala Wine House Tour',
      duration: '7 days | 12 tastings',
      price: '$1,500',
      bookingClass: 'Tour7BookBtn'
    },
    {
      image: '../img/clientimgs/norbert-braun-KHK607p3TVA-unsplash.jpg',
      title: 'Thailand Adult Beach Tour',
      duration: '7 days | Beach Access',
      price: '$1,000',
      bookingClass: 'Tour8BookBtn'
    },
    {
      image: '../img/clientimgs/ryan-spencer-XGKaRnWjv1c-unsplash.jpg',
      title: 'Pathway to the Mediterraneans adults only tour',
      duration: '23 days | 13 stops',
      price: '$2,000',
      bookingClass: 'Tour9BookBtn'
    }
  ];

  const destinationData = [
    {
      image: '/img/clientimgs/assets/destinations-rome.jpg',
      title: 'Rome',
      subtitle: 'Italy'
    },
    {
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80',
      title: 'Sydney',
      subtitle: 'Australia'
    },
    {
      image: '/img/clientimgs/assets/destinations-rio.jpg',
      title: 'Rio de Janeiro',
      subtitle: 'Brazil'
    },
    {
      image: '../img/clientimgs/ema-studios-4RS_8dmxAR0-unsplash.jpg',
      title: 'Madagascar',
      subtitle: ''
    },
    {
      image: '../img/clientimgs/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg',
      title: 'Austria',
      subtitle: ''
    },
    {
      image: '../img/clientimgs/damiano-baschiera-hFXZ5cNfkOk-unsplash.jpg',
      title: 'Paris',
      subtitle: 'France'
    },
    {
      image: '../img/clientimgs/jake-blucker-tMzCrBkM99Y-unsplash.jpg',
      title: 'California',
      subtitle: 'USA'
    },
    {
      image: '../img/clientimgs/fabio-comparelli-uq2E2V4LhCY-unsplash.jpg',
      title: 'Switzerland',
      subtitle: ''
    },
    {
      image: '../img/clientimgs/assets/destinations-machu.jpg',
      title: 'Machu Picchu',
      subtitle: 'Peru'
    },
    {
      image: '../img/clientimgs/assets/destinations-rome.jpg',
      title: 'Italy',
      subtitle: ''
    }
  ];

  const blogPostData = [
    {
      image: '../img/clientimgs/bigfamily.jpeg',
      title: 'How to save big money with a big family',
      excerpt: 'Traveling with a large family can be expensive, but with these insider tips, you can save money without sacrificing fun or sp....'
    },
    {
      image: '../img/clientimgs/bigfam.jpeg',
      title: 'Our 2024 Maui Vacation',
      excerpt: 'Join the Johnson family as they explore the stunning beaches, lush landscapes, and vibrant culture of Maui. From snorkeling with sea turtl......'
    },
    {
      image: '../img/clientimgs/2012 deployment.jpeg',
      title: "Kandahar, Afghanistan's Hidden Gem",
      excerpt: 'In this throwback post from 2012, intrepid traveler bradley shares his experience hiking through the remote and breathtaking Zhari Dist.....'
    },
    {
      image: '../img/clientimgs/denaya korea.jpeg',
      title: 'A girls guide to korea!',
      excerpt: "From must-see sights to local fashion tips, our insider's guide has everything you need for an unforgettable girls' trip to Korea."
    }
  ];

  renderCards('tourCardContainer', tourData, 'tour');
  renderCards('destinationCardContainer', destinationData, 'destination');
  renderCards('blogPostCardContainer', blogPostData, 'blog');

  // Scroll to top button functionality
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.classList.add('scroll-to-top');
  scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(scrollToTopButton);

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      scrollToTopButton.classList.add('show');
    } else {
      scrollToTopButton.classList.remove('show');
    }
  });

  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

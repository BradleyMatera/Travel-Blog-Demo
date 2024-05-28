import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import axios from 'axios';

import Home from './components/Home.vue';
import About from './components/About.vue';
import Destinations from './components/Destinations.vue';
import Tours from './components/Tours.vue';
import Blog from './components/Blog.vue';
import BookingForm from './components/BookingForm.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tours: [],
    destinations: [],
    blogPosts: [],
  },
  mutations: {
    setTours(state, tours) {
      state.tours = tours;
    },
    setDestinations(state, destinations) {
      state.destinations = destinations;
    },
    setBlogPosts(state, blogPosts) {
      state.blogPosts = blogPosts;
    },
  },
  actions: {
    async fetchTours({ commit }) {
      const response = await axios.get('/api/tours');
      commit('setTours', response.data);
    },
    async fetchDestinations({ commit }) {
      const response = await axios.get('/api/destinations');
      commit('setDestinations', response.data);
    },
    async fetchBlogPosts({ commit }) {
      const response = await axios.get('/api/blog-posts');
      commit('setBlogPosts', response.data);
    },
  },
});

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/destinations', component: Destinations },
  { path: '/tours', component: Tours },
  { path: '/blog', component: Blog },
  { path: '/book', component: BookingForm },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  router,
  store,
  mounted() {
    this.$store.dispatch('fetchTours');
    this.$store.dispatch('fetchDestinations');
    this.$store.dispatch('fetchBlogPosts');
  },
}).$mount('#app');

const smoothScroll = () => {
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
      behavior: 'smooth',
    });
  });
};

const bookingFormHandler = () => {
  const bookingForm = document.querySelector('.booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(bookingForm);
      try {
        const response = await axios.post('/api/bookings', formData);
        alert('Your booking request has been submitted. We will get back to you soon!');
        bookingForm.reset();
      } catch (error) {
        console.error('Error submitting booking form:', error);
        alert('An error occurred while submitting your booking request. Please try again later.');
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  smoothScroll();
  bookingFormHandler();

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
      image: '../img/tour-mountainHiking.jpg',
      title: 'Alps Mountain Hiking Tour',
      duration: '4 days | 10 stops',
      price: '$1,500',
      bookingClass: 'Tour1BookBtn'
    },
    {
      image: '../img/tour-snorkel.jpg',
      title: 'Snorkel the Barrier Reef Tour',
      duration: '2 days | 3 stops',
      price: '$1,000',
      bookingClass: 'Tour2BookBtn'
    },
    {
      image: '../img/tour-pyramids.jpg',
      title: 'Tour the Pyramids on Camelback',
      duration: '3 days | 5 stops',
      price: '$2,000',
      bookingClass: 'Tour3BookBtn'
    },
    {
      image: '../img/morning-sea.jpg',
      title: 'Morning at a Sea Tour',
      duration: '6 days | Morning Only',
      price: '$1,500',
      bookingClass: 'Tour4BookBtn'
    },
    {
      image: '../img/ngorongoro.jpg',
      title: 'Ngorongoro Conservation Tours',
      duration: '7 days | Varies',
      price: '$1,000',
      bookingClass: 'Tour5BookBtn'
    },
    {
      image: '../img/ellis-island.jpg',
      title: 'Ellis Island Tours',
      duration: '1 day | only 1 stop',
      price: '$2,000',
      bookingClass: 'Tour6BookBtn'
    },
    {
      image: '../img/guatemala-wine-house.jpg',
      title: 'Guatemala Wine House Tour',
      duration: '7 days | 12 tastings',
      price: '$1,500',
      bookingClass: 'Tour7BookBtn'
    },
    {
      image: '../img/thailand-adult-beach.jpg',
      title: 'Thailand Adult Beach Tour',
      duration: '7 days | Beach Access',
      price: '$1,000',
      bookingClass: 'Tour8BookBtn'
    },
    {
      image: '../img/mediterranean-adults.jpg',
      title: 'Pathway to the Mediterraneans adults only tour',
      duration: '23 days | 13 stops',
      price: '$2,000',
      bookingClass: 'Tour9BookBtn'
    }
  ];

  const destinationData = [
    {
      image: '../img/rome.jpg',
      title: 'Rome',
      subtitle: 'Italy'
    },
    {
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80',
      title: 'Sydney',
      subtitle: 'Australia'
    },
    {
      image: '../img/rio.jpg',
      title: 'Rio de Janeiro',
      subtitle: 'Brazil'
    },
    {
      image: '../img/madagascar.jpg',
      title: 'Madagascar',
      subtitle: ''
    },
    {
      image: '../img/austria.jpg',
      title: 'Austria',
      subtitle: ''
    },
    {
      image: '../img/paris.jpg',
      title: 'Paris',
      subtitle: 'France'
    },
    {
      image: '../img/california.jpg',
      title: 'California',
      subtitle: 'USA'
    },
    {
      image: '../img/switzerland.jpg',
      title: 'Switzerland',
      subtitle: ''
    },
    {
      image: '../img/machu-picchu.jpg',
      title: 'Machu Picchu',
      subtitle: 'Peru'
    },
    {
      image: '../img/italy.jpg',
      title: 'Italy',
      subtitle: ''
    }
  ];

  const blogPostData = [
    {
      image: '../img/bigfamily.jpg',
      title: 'How to save big money with a big family',
      excerpt: 'Traveling with a large family can be expensive, but with these insider tips, you can save money without sacrificing fun or sp....'
    },
    {
      image: '../img/maui-vacation.jpg',
      title: 'Our 2024 Maui Vacation',
      excerpt: 'Join the Johnson family as they explore the stunning beaches, lush landscapes, and vibrant culture of Maui. From snorkeling with sea turtl......'
    },
    {
      image: '../img/kandahar.jpg',
      title: "Kandahar, Afghanistan's Hidden Gem",
      excerpt: 'In this throwback post from 2012, intrepid traveler Bradley shares his experience hiking through the remote and breathtaking Zhari Dist.....'
    },
    {
      image: '../img/korea.jpg',
      title: 'A girls guide to Korea!',
      excerpt: "From must-see sights to local fashion tips, our insider's guide has everything you need for an unforgettable girls' trip to Korea."
    }
  ];

  renderCards('tourCardContainer', tourData, 'tour');
  renderCards('destinationCardContainer', destinationData, 'destination');
  renderCards('blogPostCardContainer', blogPostData, 'blog');
});


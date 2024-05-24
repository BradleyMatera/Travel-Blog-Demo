import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import axios from 'axios';

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
});
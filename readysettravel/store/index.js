import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tours: [],
    destinations: [],
    blogPosts: []
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
    }
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
    }
  }
});

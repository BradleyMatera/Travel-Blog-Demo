import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Destinations from '../components/Destinations.vue';
import Tours from '../components/Tours.vue';
import Blog from '../components/Blog.vue';
import BookingForm from '../components/BookingForm.vue';

Vue.use(Router);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/destinations', component: Destinations },
  { path: '/tours', component: Tours },
  { path: '/blog', component: Blog },
  { path: '/book', component: BookingForm }
];

const router = new Router({
  mode: 'history',
  routes
});

export default router;

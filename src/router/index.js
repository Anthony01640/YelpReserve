import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Restaurant from '../views/Restaurant.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:restaurantAlias',
    name: 'Restaurant',
    component: Restaurant,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

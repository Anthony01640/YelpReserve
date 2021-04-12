import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const $api = axios.create({
  baseURL: 'https://api.yelp.com/v3/',
  headers: {
    Authorization: 'Bearer 0DIc5E5oZymjWdyroSN7XxVVe_1oZcep8_BZPMf-25qhvEFlBrIWHUuoLfhPo1Y6yeeJcfFLNAH92mjDXTyRQpNQIlnSuOT_7E1Ncl3P1sTQ-E0xENAqDB49ZLR0YHYx',
  },
});

export default new Vuex.Store({
  state: {
    restaurants: null,
    currentRestaurant: null,
  },
  mutations: {
    setRestaurants(state, restaurants) {
      state.restaurants = restaurants;
    },

    setCurrentRestaurant(state, currentRestaurant) {
      state.currentRestaurant = currentRestaurant;
    },
  },
  actions: {
    searchRestaurants({ commit }, parameters) {
      const urlParameters = {
        restaurantName: null,
        openNow: false,
        categories: 'restaurants',
      };

      if (parameters) {
        Object.keys(parameters).forEach((index) => {
          urlParameters[index] = parameters[index];
        });
      }

      let queryString = '';
      if (urlParameters.restaurantName) {
        queryString += `&term=${urlParameters.restaurantName}`;
      }
      queryString += `&open_now=${urlParameters.openNow}&categories=${urlParameters.categories}`;

      $api.get(`/businesses/search?location=Lyon${queryString}`)
        .then(({ data }) => {
          commit('setRestaurants', data.businesses);
        });
    },

    getRestaurant({ commit }, restaurantAlias) {
      $api.get(`/businesses/${restaurantAlias}`)
        .then(({ data }) => {
          commit('setCurrentRestaurant', data);
        });
    },
  },
  modules: {
  },
});

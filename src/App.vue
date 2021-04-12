<template>
  <div id="app">
    <v-app>
      <v-app-bar class="app-bar">
        <img
          src="./assets/yelp_reserv.svg"
          alt="Yelp Reserve"
          class="vue-eat-logo"
        />

        <FilterArea v-if="$route.name === 'Home'" />
      </v-app-bar>

      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import FilterArea from './components/FilterArea.vue';

export default {
  name: 'App',
  components: { FilterArea },
};
</script>

<style lang="scss" scoped>
.app-bar {
  max-height: 64px;

  .vue-eat-logo {
    max-width: 100px;
  }
}
</style>

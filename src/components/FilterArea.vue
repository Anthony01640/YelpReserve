<template>
  <v-container style="margin-top: 30px;">
    <v-row>
      <v-col
        md="4"
        lg="3"
      >
        <v-text-field
          v-model="restaurantName"
          placeholder="Rechercher par nom"
          solo
        />
      </v-col>

      <v-col
        md="1"
        lg="1"
        style="margin-top: 12px"
      >
        <v-checkbox
          v-model="isOpen"
          label="Ouvert"
        />
      </v-col>

      <v-col
        md="4"
        lg="4"
      >
        <v-select
          v-model="selectedCategories"
          :items="restaurantCategories"
          chips
          label="Catégories"
          multiple
          solo
        />
      </v-col>

      <v-col
        md="2"
        lg="3"
      >
        Trier par note (min & max)
        <v-range-slider
          v-model="ratingRange"
          :max="5"
          :min="1"
          hide-details
          class="align-center"
        >
          <template v-slot:prepend>
            {{ ratingRange[0] }}
          </template>
          <template v-slot:append>
            {{ ratingRange[1] }}
          </template>
        </v-range-slider>
      </v-col>

      <v-col
        md="1"
        lg="1"
      >
        <v-btn @click="search">Search</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import categories from '../assets/categories.json';

export default {
  name: 'FilterArea',

  data() {
    return {
      restaurantName: '',
      isOpen: false,
      selectedCategories: [],
      ratingRange: [1, 5],
    };
  },

  computed: {
    restaurantCategories() {
      const categoryList = categories.filter((c) => c.parents.includes('restaurants'));
      return categoryList.map((c) => c.alias);
    },
  },

  mounted() {
    this.$store.dispatch('searchRestaurants');
  },

  methods: {
    search() {
      const parameters = {};

      if (this.restaurantName.length) {
        parameters.restaurantName = this.restaurantName;
      }

      if (this.selectedCategories.length) {
        parameters.categories = this.selectedCategories.join();
      }

      parameters.openNow = this.isOpen;

      this.$store.dispatch('searchRestaurants', parameters);
    },
  },
};
</script>

<style scoped>
</style>

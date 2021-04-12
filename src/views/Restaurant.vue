<template>
  <div>
    <v-container v-if="currentRestaurant">
      <v-btn
        @click="$router.push({ name: 'Home' })"
        class="back-button"
      >
        ⬅️ Retour
      </v-btn>

      <v-row class="restaurant-details">
        <v-col
          lg="3"
          md="4"
        >
          <h1>{{ currentRestaurant.name }}</h1>

          <v-row class="grey--text ml-4">
            <StarRating
              :rating="currentRestaurant.rating"
              :show-rating="false"
              :read-only="true"
              :round-start-rating="false"
              :star-size="20"
            />
            {{ currentRestaurant.rating }} ({{ currentRestaurant.review_count }})
          </v-row>

          <img
            class="restaurant-image"
            :src="currentRestaurant.image_url"
          />
        </v-col>

        <v-col>
          <p>
            <strong>{{ categories }}</strong><br />
          </p>

          <p>
            ✆ {{ currentRestaurant.display_phone }}<br />
            📌 {{ currentRestaurant.location.display_address.join(', ') }}
          </p>
        </v-col>
      </v-row>

      <v-carousel>
        <v-carousel-item
          v-for="(photo, i) in currentRestaurant.photos"
          :key="i"
          :src="photo"
        />
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  name: 'Restaurant',
  components: { StarRating },

  data() {
    return {
      showReservationModal: false,
    };
  },

  computed: {
    currentRestaurant() {
      return this.$store.state.currentRestaurant;
    },

    categories() {
      return this.currentRestaurant.categories.map((c) => c.title).join(', ');
    },
  },

  mounted() {
    this.$store.dispatch('getRestaurant', this.$route.params.restaurantAlias);
  },
};
</script>

<style lang="scss" scoped>
.back-button {
  margin-bottom: 20px;
}

h1 {
  margin-bottom: 10px;
  text-align: center;
}

.restaurant-image {
  margin-top: 20px;
  width: 100%;
}

.restaurant-details {
  p {
    line-height: 30px;
  }
}
</style>

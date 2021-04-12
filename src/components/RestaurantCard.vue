<template>
  <div class="restaurant-card" style="width: 400px;">
    <v-card
      :loading="false"
      class="mx-auto my-12"
      max-width="374"
    >
      <v-img
        height="250"
        :src="restaurant.image_url"
      />

      <v-card-title>{{ restaurant.name }}</v-card-title>

      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <!--
            La composant v-rating de Vuetify ne fonctionne pas correctement avec les nombres
            décimaux. Par manque de temps, je suis obligé de passer par ce package indépendant
            (que j'ai utilisé dans d'autres projets).
          -->
          <StarRating
            :rating="restaurant.rating"
            :show-rating="false"
            :read-only="true"
            :round-start-rating="false"
            :star-size="20"
          />

          <div class="grey--text ml-4">
            {{ restaurant.rating }} ({{ restaurant.review_count }})
          </div>
        </v-row>

        <div class="my-4 subtitle-1">
          {{ restaurant.price }} • {{ categories }}
        </div>

        <v-btn
          @click="
            $router.push({ name: 'Restaurant', params: { restaurantAlias: restaurant.alias }})
          "
        >
          Voir en détails
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  name: 'RestaurantCard',
  components: { StarRating },

  props: {
    restaurant: {
      type: Object,
      required: true,
    },
  },

  computed: {
    categories() {
      return this.restaurant.categories.map((c) => c.title).join(', ');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

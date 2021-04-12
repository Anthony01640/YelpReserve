<template>
  <div class="home">
    <RestaurantCardList />
  </div>
</template>

<script>
import RestaurantCardList from '@/components/RestaurantCardList.vue';

export default {
  name: 'Home',
  components: { RestaurantCardList },
};
</script>

<style lang="scss" scoped>
</style>

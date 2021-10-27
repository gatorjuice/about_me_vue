<template>
  <div>
    <div class="movies">
      <MovieSearch />
    </div>
  </div>
</template>

<script>
import MovieSearch from '@/components/MovieSearch.vue';

export default {
  name: 'Movies',
  components: {
    MovieSearch,
  },
};
</script>
<style scoped></style>

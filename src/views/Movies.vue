<template>
  <div class="movies">
    <MovieSearch />
  </div>
</template>

<script>
// @ is an alias to /src
import MovieSearch from "@/components/MovieSearch.vue";

export default {
  name: "Movies",
  components: {
    MovieSearch,
  },
};
</script>

<template>
  <h3>Movie Search</h3>
  <p>
    I had never built a backend page scraper and there are no good free movie
    APIs so this interface you see here is made possible by scraping Box Office
    Mojo and packing the results like a real API.
  </p>
  <MovieSearchForm />
</template>

<script>
import MovieSearchForm from "@/components/MovieSearchForm.vue";

export default {
  name: "Movies",
  components: {
    MovieSearchForm,
  },
};
</script>
<style scoped></style>

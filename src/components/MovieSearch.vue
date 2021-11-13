<template>
  <form
    class="row g-3"
    @submit.prevent="
      $store.dispatch('loadMovies', {
        movieTitle: form.movieTitle,
        jwt: $store.state.jwt,
      })
    "
  >
    <div class="col-auto">
      <label for="movieTitle" class="visually-hidden">Movie Title</label>
      <div class="input-group mb-3">
        <input
          v-model="form.movieTitle"
          type="text"
          class="form-control"
          id="movieTitle"
          aria-describedby="movieTitle"
          placeholder="Enter Movie Title"
        />
        <button type="submit" class="btn btn-outline-secondary">
          {{ $store.state.loading ? "Loading..." : "Submit" }}
        </button>
      </div>
    </div>
  </form>
  <div v-if="$store.state.movies" class="container">
    <div class="row">
      <MovieCard
        v-for="(movie, index) in $store.state.movies"
        :key="`movieCard${index}`"
        :movie="movie"
        :modalId="`movieCard${index}`"
      />
    </div>
  </div>
</template>
<script>
import MovieCard from "@/components/MovieCard.vue";

export default {
  name: "MovieSearch",
  components: { MovieCard },
  data() {
    return { form: { movieTitle: "" } };
  },
  created() {
    this.$store.dispatch("clearMovies");
  },
};
</script>
<style scoped>
form {
  padding-top: 1rem;
}
</style>

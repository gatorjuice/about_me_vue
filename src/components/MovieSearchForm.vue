<template>
  <form
    class="row g-3"
    @submit.prevent="$store.dispatch('loadMovies', form.movieTitle)"
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
      <MovieSearchCard
        v-for="(movie, index) in $store.state.movies"
        :key="`movieCard${index}`"
        :movie="movie"
        :modalId="`movieCard${index}`"
      />
    </div>
  </div>
</template>
<script>
import MovieSearchCard from "@/components/MovieSearchCard.vue";

export default {
  name: "MovieSearch",
  components: { MovieSearchCard },
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

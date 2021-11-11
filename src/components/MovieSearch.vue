<template>
  <div class="container">
    <form class="row g-3" @submit.prevent="processForm">
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
          <button
            @click="clearInput"
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Clear
          </button>
        </div>
      </div>
      <div class="col-auto">
        <button
          v-on:click="toggleLoading"
          type="submit"
          class="btn btn-primary mb-2"
        >
          {{ loading ? "Loading..." : "Submit" }}
        </button>
      </div>
    </form>
  </div>
  <div v-if="this.movies" class="container">
    <div class="row">
      <MovieCard
        v-for="(movie, index) in movies"
        :key="`movieCard${index}`"
        :movie="movie"
        :modalId="`movieCard${index}`"
      />
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";
import HttpService from "@/services/HttpService.js";

export default {
  components: {
    MovieCard,
  },
  name: "MovieSearch",
  data() {
    return {
      loading: false,
      form: {
        movieTitle: "",
      },
      movies: Array,
    };
  },
  methods: {
    clearInput() {
      this.form.movieTitle = "";
    },
    processForm() {
      new HttpService(this.$store).get(
        `movies?title=${this.form.movieTitle}`,
        (_status, response) => {
          this.movies = response.data;
          this.toggleLoading();
        }
      );
    },
    toggleLoading() {
      this.loading = !this.loading;
    },
  },
};
</script>

<style scoped>
form {
  padding-top: 1rem;
}
</style>

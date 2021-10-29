<template>
  <div class="container">
    <form class="form-inline" @submit.prevent="processForm">
      <div class="form-group mx-sm-3 mb-2">
        <label class="sr-only" for="movieTitle">Movie Title</label>
        <input
          v-model="form.movieTitle"
          type="text"
          class="form-control"
          id="movieTitle"
          aria-describedby="movieTitle"
          placeholder="Enter Movie Title"
        />
      </div>
      <button
        v-on:click="toggleLoading"
        type="submit"
        class="btn btn-primary mb-2"
      >
        Submit
      </button>
    </form>
  </div>
  <div class="container spinner">
    <circle8 v-if="this.loading"></circle8>
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
import { Circle8 } from "vue-loading-spinner";
import MovieCard from "@/components/MovieCard.vue";
import HttpService from "@/services/HttpService.js";

export default {
  components: {
    MovieCard,
    Circle8,
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
    processForm() {
      HttpService.get(
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
.spinner {
  position: fixed;
  z-index: 1031;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

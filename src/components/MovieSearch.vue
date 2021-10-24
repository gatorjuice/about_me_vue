<template>
  <div class="container">
    <form class="form-inline" @submit.prevent="processForm">
      <div class="form-group mx-sm-3 mb-2">
        <label class="sr-only" for="movieTitle">Movie Title</label>
        <input
          v-model="this.form.movieTitle"
          type="text"
          class="form-control"
          id="movieTitle"
          aria-describedby="movieTitle"
          placeholder="Enter Movie Title"
        />
      </div>
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </form>
  </div>
  <div class="container">
    <div class="row">
      <Movie
        v-bind:movie="movie"
        v-for="movie in this.movies"
        v-bind:key="movie"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Movie from "@/components/Movie.vue";

axios.defaults.baseURL = process.env.VUE_APP_ABOUT_ME_API_ENDPOINT;

export default {
  components: {
    Movie,
  },
  name: "MovieSearch",
  data() {
    return {
      form: {
        movieTitle: "",
      },
      movies: [],
    };
  },
  methods: {
    processForm: function () {
      axios.get(`movies?title=${this.form.movieTitle}`).then((res) => {
        this.movies = res.data.data;
      });
    },
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

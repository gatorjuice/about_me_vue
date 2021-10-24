<template>
  <div class="container">
    <form @submit.prevent="processForm">
      <div class="form-group">
        <label for="movieTitle">Movie Title</label>
        <input
          v-model="this.form.movieTitle"
          type="text"
          class="form-control"
          id="movieTitle"
          aria-describedby="movieTitle"
          placeholder="Enter Movie Title"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Plot</th>
          <th scope="col">$</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movie in this.movies" v-bind:key="movie">
          <td>{{ movie.title }}</td>
          <td>{{ movie.summary }}</td>
          <td>{{ movie.performance }}</td>
        </tr>
      </tbody>
    </table>

    <ul id="array-rendering">
      <li v-for="movie in this.movies" v-bind:key="movie">
        {{ movie }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = process.env.VUE_APP_ABOUT_ME_API_ENDPOINT;

export default {
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

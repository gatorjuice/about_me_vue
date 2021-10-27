<template>
  <div class="container col-md-6">
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            :src="movie.image"
            class="card-img"
            :alt="`${movie.title} poster`"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p>{{ movie.summary }}</p>
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              @click="handleLog"
              :data-target="`#${movie.title}`"
            >
              Show Details
            </button>

            <MovieModal :movie="movie" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieModal from "@/components/MovieModal.vue";

export default {
  components: {
    MovieModal,
  },
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      require: true,
    },
    handleLog: {
      type: Function,
      require: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  max-width: 540px;
}
</style>

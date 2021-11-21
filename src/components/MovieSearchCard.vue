<template>
  <div class="container col-md-6">
    <div
      data-bs-toggle="modal"
      :data-bs-target="`#${modalId}`"
      class="card mb-3"
    >
      <MovieSearchModal :movie="movie" :modal-id="modalId" />
      <div class="row g-0">
        <div class="col-3">
          <img
            :src="movie.image"
            class="card-img"
            :alt="`${movie.title} poster`"
          />
        </div>
        <div class="col-9">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p>Director: {{ movie.crew["Director"] }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieSearchModal from "@/components/MovieSearchModal.vue";

export default {
  components: {
    MovieSearchModal,
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
    modalId: {
      type: String,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  max-width: 540px;
}
img {
  max-width: 99px;
  max-height: 150px;
}
</style>

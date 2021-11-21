<template>
  <div
    class="modal fade"
    :id="modalId"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ movie.title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>{{ movie.summary }}</p>
          <p>
            <span><strong>Director: </strong></span>{{ movie.crew["Director"] }}
          </p>
          <div v-for="perf in movie.performance" :key="perf">
            <h5>{{ perf.region }}</h5>
            <p>{{ perf.money }}</p>
          </div>
          <h5>Cast</h5>
          <p v-for="(cast, role) in movie.cast" :key="cast">
            {{ role }}: {{ cast }}
          </p>
          <h5>Crew</h5>
          <p v-for="(crew, role) in movie.crew" :key="crew">
            {{ role }}: {{ crew }}
          </p>
          <h5>Other Details</h5>
          <p v-for="(misc, role) in movie.misc" :key="misc">
            {{ role }}: {{ misc }}
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieSearchModal",
  props: {
    movie: {
      type: Object,
      required: true,
    },
    modalId: {
      type: String,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

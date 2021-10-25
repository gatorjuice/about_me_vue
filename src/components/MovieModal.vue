<template>
  <div
    class="modal fade"
    :id="movie.title"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ movie.title }}
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <p>{{ movie.summary }}</p>
          <p>
            <span><strong>Director: </strong></span>{{ movie.crew["Director"] }}
          </p>
          <div v-for="perf in movie.performance" v-bind:key="perf">
            <h5>{{ perf.region }}</h5>
            <p>{{ perf.money }}</p>
          </div>
          <h5>Cast</h5>
          <p v-for="(cast, role) in movie.cast" v-bind:key="cast">
            {{ role }}: {{ cast }}
          </p>
          <h5>Crew</h5>
          <p v-for="(crew, role) in movie.crew" v-bind:key="crew">
            {{ role }}: {{ crew }}
          </p>
          <h5>Other Details</h5>
          <p v-for="(misc, role) in movie.misc" v-bind:key="misc">
            {{ role }}: {{ misc }}
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieModal",
  props: ["movie"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

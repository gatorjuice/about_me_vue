<template>
  <div class="container col-md-6">
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="movie.image" class="card-img" alt="Card image cap" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.summary }}</p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  data() {
    return {};
  },
  methods: {},
  props: {
    movie: {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  max-width: 540px;
}
</style>

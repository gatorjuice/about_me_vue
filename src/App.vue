<template>
  <NavBar />
  <div v-if="showFlash" class="container">
    <div class="alert alert-danger d-flex align-items-center" role="alert">
      <svg
        class="bi flex-shrink-0 me-2"
        width="24"
        height="24"
        role="img"
        aria-label="Danger:"
      >
        <use xlink:href="#exclamation-triangle-fill" />
      </svg>
      <div>An example danger alert with an icon</div>
    </div>
  </div>
  <RouterView />
  <Footer />
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
  onError() {
    return {};
  },
  data() {
    return {
      showFlash: false,
    };
  },
  methods: {
    setError() {
      this.showFlash = true;
    },
  },
};
</script>
<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>

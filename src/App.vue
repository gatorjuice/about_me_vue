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
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  onError() {
    return {};
  },
  data() {
    return {
      showFlash: false,
    };
  },
  mounted() {
    document.body.setAttribute("id", "page-top");
  },
  methods: {
    setError() {
      this.showFlash = true;
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@400;700&display=swap");
@import "~bootstrap/dist/css/bootstrap.css";
@import "~startbootstrap-resume/dist/css/styles.css";
@import "~font-awesome/css/font-awesome.min.css";
</style>

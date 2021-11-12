<template>
  <NavBar />
  <div class="container">
    <div class="form-check form-switch">
      <input
        :checked="showApiRequests"
        @click="toggleShowApiRequests"
        class="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
      />
      <label class="form-check-label" for="flexSwitchCheckDefault"
        >Show API Requests</label
      >
    </div>
  </div>
  <RouterView />
  <ApiVisualizer v-show="showApiRequests" />
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import ApiVisualizer from "@/components/ApiVisualizer.vue";

export default {
  components: {
    NavBar,
    ApiVisualizer,
  },
  onError() {
    return {};
  },
  mounted() {
    document.body.setAttribute("id", "page-top");
  },
  computed: {
    showApiRequests() {
      return this.$store.state.apiVisualizer.show;
    },
  },
  methods: {
    setError() {
      this.showFlash = true;
    },
    toggleShowApiRequests() {
      this.$store.commit("toggleApiVisualizer");
    },
  },
};
</script>
<style scoped>
.form-switch {
  margin-top: 5px;
}
@import url("https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@400;700&display=swap");
@import "~bootstrap/dist/css/bootstrap.css";
@import "~startbootstrap-resume/dist/css/styles.css";
</style>

<template>
  <div class="container">
    <select
      v-model="category"
      class="form-select"
      aria-label="Default select example"
    >
      <option value="all" selected>Select Category...</option>
      <option
        v-for="category in categories"
        :key="category.category"
        :value="category.category"
      >
        {{ category.formatted_category }}
      </option>
    </select>
    <RepoTrackerChart :category="category" />
  </div>
</template>
<script>
import RepoTrackerChart from "@/components/RepoTrackerChart.vue";
import HttpService from "@/services/HttpService.js";

export default {
  name: "Home",
  data() {
    return {
      category: "all",
      categories: [],
    };
  },
  components: { RepoTrackerChart },
  created() {
    HttpService.get("github_repos/categories", (_status, response) => {
      this.categories = response.data;
    });
  },
};
</script>
<style scoped>
.form-select {
  margin-top: 1.5rem;
}
</style>

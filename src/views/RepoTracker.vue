<template>
  <div class="container">
    <select
      v-model="category"
      class="form-select"
      aria-label="Default select example"
    >
      <option value="all" selected>select category...</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ formattedCategory(category) }}
      </option>
    </select>
    <RepoTrackerChart :category="category" :repos="sortedRepos" />
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
      repos: [],
    };
  },
  methods: {
    formattedCategory(category) {
      return category.split("_").join(" ");
    },
  },
  computed: {
    sortedRepos() {
      return [...this.repos].sort((a, b) => {
        return b.popularity_rating - a.popularity_rating;
      });
    },
  },
  components: { RepoTrackerChart },
  created() {
    HttpService.get(`github_repos`, (_status, response) => {
      this.repos = response.data;
      this.categories = [
        ...new Set(
          response.data.map((repo) => {
            return repo.category;
          })
        ),
      ];
    });
  },
};
</script>
<style scoped>
.form-select {
  margin-top: 1.5rem;
}
</style>

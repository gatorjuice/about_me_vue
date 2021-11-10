<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <select
          v-model="category"
          class="form-select"
          aria-label="Category Select"
        >
          <option value="all" selected>Select Category...</option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ formattedCategory(category) }}
          </option>
        </select>
      </div>
      <div class="col-sm-6">
        <select v-model="orderBy" class="form-select" aria-label="Sort By">
          <option value="popularity_rating" selected>Popularity</option>
          <option value="forks_count">Forks</option>
          <option value="watchers_count">Watchers</option>
          <option value="stargazers_count">Stargazers</option>
        </select>
      </div>
    </div>
    <RepoTrackerChart
      v-if="filteredAndOrderedRepos.length"
      :repos="filteredAndOrderedRepos"
    />
    <RepoTrackerTable
      @changeOrder="handleChangeOrder"
      v-if="filteredAndOrderedRepos.length"
      :repos="filteredAndOrderedRepos"
    />
  </div>
</template>
<script>
import RepoTrackerChart from "@/components/RepoTrackerChart.vue";
import RepoTrackerTable from "@/components/RepoTrackerTable.vue";
import HttpService from "@/services/HttpService.js";
import textHelper from "@/mixins/textHelper.js";

export default {
  name: "Home",
  mixins: [textHelper],
  data() {
    return {
      categories: [],
      category: "all",
      repos: [],
      orderBy: "popularity_rating",
    };
  },
  methods: {
    handleChangeOrder(orderBy) {
      this.orderBy = orderBy;
    },
    formattedCategory(category) {
      return category
        .split("_")
        .map((word) => this.capitalizeWord(word))
        .join(" ");
    },
  },
  computed: {
    filteredAndOrderedRepos() {
      return [...this.repos]
        .filter((repo) => {
          if (this.category !== "all") {
            return repo.category == this.category;
          } else {
            return true;
          }
        })
        .sort((a, b) => {
          return b[this.orderBy] - a[this.orderBy];
        });
    },
  },
  components: {
    RepoTrackerChart,
    RepoTrackerTable,
  },
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

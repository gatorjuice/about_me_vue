<template>
  <canvas id="repoTrackerChart"></canvas>
</template>
<script>
import Chart from "chart.js/auto";
import HttpService from "@/services/HttpService.js";

export default {
  name: "RepoTrackerChart",
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  watch: {
    category() {
      this.chart.destroy();
      this.getRepos();
    },
  },
  created() {
    this.getRepos();
  },
  methods: {
    getRepos() {
      HttpService.get(
        `github_repos?category=${this.category}`,
        (status, response) => {
          this.createChart(response.data);
        }
      ).catch((error) => {
        console.log(error);
        this.createChart();
      });
    },
    createChart(repoData = []) {
      repoData.sort((a, b) => {
        return b.popularity_rating - a.popularity_rating;
      });
      this.chart = new Chart(
        document.getElementById("repoTrackerChart").getContext("2d"),
        {
          type: "bar",
          data: {
            labels: repoData.map((repo) => repo.name),
            datasets: [
              {
                label: "Forks",
                backgroundColor: "rgba(255, 131, 96, 0.3)",
                borderColor: "rgba(255, 131, 96, 0.8)",
                data: repoData.map((repo) => repo.forks_count),
              },
              {
                label: "Watchers",
                backgroundColor: "rgba(89, 201, 165, 0.3)",
                borderColor: "rgba(89, 201, 165, 0.8)",
                data: repoData.map((repo) => repo.watchers_count),
              },
              {
                label: "Stargazers",
                backgroundColor: "rgba(27, 73, 101, 0.3)",
                borderColor: "rgba(27, 73, 101, 0.8)",
                data: repoData.map((repo) => repo.stargazers_count),
              },
              {
                label: "Popularity",
                backgroundColor: "rgba(118, 153, 212, 0.3)",
                borderColor: "rgba(118, 153, 212, 0.8)",
                data: repoData.map((repo) => repo.popularity_rating),
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: false,
              },
            },
            plugins: {
              legend: {
                position: "bottom",
              },
              title: {
                display: true,
                text: "Repository Tracker",
              },
            },
          },
        }
      );
    },
  },
};
</script>
<style>
canvas {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
}
</style>

<template>
  <table class="table table-success table-striped">
    <thead>
      <tr>
        <th scope="col">Project</th>
        <th scope="col" @click="$emit('changeOrder', 'forks_count')">Forks</th>
        <th scope="col" @click="$emit('changeOrder', 'stargazers_count')">
          Stargazers
        </th>
        <th scope="col" @click="$emit('changeOrder', 'watchers_count')">
          Watchers
        </th>
        <th scope="col" @click="$emit('changeOrder', 'popularity_rating')">
          Popularity
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="repo in repos" :key="repo.id" :data-test="`repo${repo.id}`">
        <td>{{ repo.name }}</td>
        <td>{{ repo.forks_count }}</td>
        <td>{{ repo.stargazers_count }}</td>
        <td>{{ repo.watchers_count }}</td>
        <td>{{ repo.popularity_rating }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "RepoTrackerTable",
  props: {
    repos: {
      type: Array,
    },
  },
};
</script>
<style scoped></style>

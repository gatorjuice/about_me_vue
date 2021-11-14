<template>
  <h3>Favorite Books</h3>
  <p>
    This was one of the first elements of this project. A trial of simple
    toggling and conditonal templating. It was also the first use of Vuex for a
    central store, which is now used throughout the app.
  </p>
  <h4>Favorites Count: {{ favoritesCount() }}</h4>
  <FavoriteBooksTable />
</template>

<script>
import FavoriteBooksTable from "@/components/FavoriteBooksTable.vue";

export default {
  name: "Books",
  components: {
    FavoriteBooksTable,
  },
  methods: {
    favoritesCount() {
      return this.$store.state.books.filter((book) => book.is_favorite).length;
    },
  },
};
</script>
<style scoped></style>

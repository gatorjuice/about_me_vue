<template>
  <div class="container">
    <p>Favorites Count: {{ favoritesCount() }}</p>
    <BooksTable :books="this.$store.state.books" />
  </div>
</template>

<script>
import BooksTable from "@/components/BooksTable.vue";
import HttpService from "@/services/HttpService.js";

export default {
  name: "Books",
  components: {
    BooksTable,
  },
  mounted() {
    this.getBooks();
  },
  methods: {
    getBooks() {
      HttpService.get("books", (status, response) => {
        this.$store.commit("setBooks", response);
      });
    },
    favoritesCount() {
      return this.$store.state.books.filter((book) => book.is_favorite).length;
    },
  },
};
</script>
<style scoped></style>

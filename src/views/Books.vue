<template>
  <div class="container">
    <p>Favorites Count: {{ favoritesCount }}</p>
    <BooksTable
      @add-book="incFavorites"
      @remove-book="decFavorites"
      :books="books"
    />
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
  data() {
    return {
      books: [],
      favoritesCount: 1,
    };
  },
  mounted() {
    this.getBooks();
  },
  methods: {
    getBooks() {
      HttpService.get("books", (status, response) => {
        console.log(status);
        this.books = response;
      });
    },
    incFavorites() {
      this.favoritesCount++;
    },
    decFavorites() {
      this.favoritesCount--;
    },
  },
};
</script>
<style scoped></style>

<template>
  <div class="container">
    <p>Favorites Count: {{ countFavorites() }}</p>
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
    countFavorites() {
      return this.books.filter((book) => book.is_favorite).length;
    },
  },
};
</script>
<style scoped></style>

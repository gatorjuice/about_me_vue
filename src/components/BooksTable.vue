<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Title</th>
        <th scope="col">Author</th>
      </tr>
    </thead>
    <tbody>
      <tr
        @click="toggleFavorite(book)"
        v-for="book in $store.state.books"
        :key="book.id"
        :data-test="`book${book.id}`"
      >
        <td v-if="book.is_favorite">
          <i class="fas fa-star checked"></i>
        </td>
        <td v-else>
          <i class="fas fa-star unchecked"></i>
        </td>
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "BooksTable",
  created() {
    this.$store.dispatch("loadBooks", this.$store.state.jwt);
  },
  methods: {
    toggleFavorite(book) {
      const jwt = this.$store.state.jwt;

      if (book.is_favorite) {
        this.$store.dispatch("removeFavoriteBook", { book, jwt });
      } else {
        this.$store.dispatch("setFavoriteBook", { book, jwt });
      }
    },
  },
};
</script>
<style>
.checked {
  color: orange;
  unchecked: black;
}
</style>

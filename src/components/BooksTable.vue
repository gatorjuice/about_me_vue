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
        v-for="book in books"
        :key="book.id"
        :data-test="`book${book.id}`"
      >
        <td>
          <span
            :class="[
              'fa',
              {
                checked: book.is_favorite,
                'fa-star': book.is_favorite,
                'fa-star-o': !book.is_favorite,
              },
            ]"
          ></span>
        </td>
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import HttpService from "@/services/HttpService.js";

export default {
  name: "BooksTable",
  props: {
    books: {
      type: Array,
    },
  },
  methods: {
    toggleFavorite(book) {
      if (book.is_favorite) {
        HttpService.delete(`/user_books/${book.id}`, () => {
          book.is_favorite = false;
        });
      } else {
        const body = { book_id: book.id, user_id: 1 };

        HttpService.post("/user_books", body, () => {
          book.is_favorite = true;
        });
      }
    },
  },
};
</script>
<style>
.checked {
  color: orange;
}
</style>

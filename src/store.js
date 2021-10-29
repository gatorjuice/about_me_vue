import { createStore } from "vuex";

const store = createStore({
  state: {
    books: [],
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    },
  },
});

export default store;

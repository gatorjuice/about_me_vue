import { createStore } from "vuex";

const store = createStore({
  state: {
    name: "Vue",
    books: [],
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    },
  },
});

export default store;

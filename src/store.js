import { createStore } from "vuex";

const store = createStore({
  state: {
    books: [],
    funnyBot: {
      messages: [],
    },
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    },
    setMessages(state, messages) {
      state.funnyBot.messages = messages;
    },
  },
});

export default store;

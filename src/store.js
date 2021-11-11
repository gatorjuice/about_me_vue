import { createStore } from "vuex";

const store = createStore({
  state: {
    books: [],
    funnyBot: {
      messages: [],
    },
    apiVisualizer: {
      apiRequests: [],
    },
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    },
    setMessages(state, messages) {
      state.funnyBot.messages = messages;
    },
    addApiRequest(state, request) {
      state.apiVisualizer.apiRequests = [
        ...state.apiVisualizer.apiRequests,
        request,
      ];
    },
  },
});

export default store;

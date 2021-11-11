import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

const store = createStore({
  state: {
    jwt: "",
    books: [],
    funnyBot: {
      messages: [],
    },
    apiVisualizer: {
      show: true,
      apiRequests: [],
    },
  },
  mutations: {
    setToken(state, token) {
      state.jwt = token;
    },
    setBooks(state, books) {
      state.books = books;
    },
    setMessages(state, messages) {
      state.funnyBot.messages = messages;
    },
    toggleApiVisualizer(state) {
      if (state.apiVisualizer.show) {
        state.apiVisualizer.apiRequests = [];
      }
      state.apiVisualizer.show = !state.apiVisualizer.show;
    },
    addApiRequest(state, request) {
      state.apiVisualizer.apiRequests = [
        ...state.apiVisualizer.apiRequests,
        request,
      ];
    },
  },
  plugins: [new VuexPersistence().plugin],
});

export default store;

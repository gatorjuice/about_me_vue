import { v4 as uuidv4 } from "uuid";

const INITIALIZE = (state) => {
  state.storeReady = true;
};

const SET_TOKEN = (state, token) => {
  state.jwt = token;
};

const SET_BOOKS = (state, books) => {
  state.books = books;
};

const SET_MOVIES = (state, movies) => {
  state.movies = movies;
};

const SET_REPOS = (state, repos) => {
  state.repos = repos;
};

const SET_CATEGORIES = (state, categories) => {
  state.categories = categories;
};

const SET_MESSAGES = (state, messages) => {
  state.funnyBot.messages = messages;
};

const CREATE_FAVORITE_BOOK = (state, book) => {
  const existsAtIndex = state.books.findIndex((b) => b.id === book.id);

  if (existsAtIndex !== -1) {
    state.books[existsAtIndex].is_favorite = true;
  } else {
    state.books.push(book);
  }

  state.books = [...state.books];
};

const DESTROY_FAVORITE_BOOK = (state, book) => {
  const existsAtIndex = state.books.findIndex((b) => b.id === book.id);

  if (existsAtIndex !== -1) {
    state.books[existsAtIndex].is_favorite = false;
  } else {
    state.books.push(book);
  }

  state.books = [...state.books];
};

const START_LOADING = (state) => {
  state.loading = true;
};

const STOP_LOADING = (state) => {
  state.loading = false;
};

const TOGGLE_API_VISUALIZER = (state) => {
  if (state.apiVisualizer.show) {
    state.apiVisualizer.apiRequests = [];
  }
  state.apiVisualizer.show = !state.apiVisualizer.show;
};

const ADD_API_REQUEST = (state, request) => {
  console.log(request);
  state.apiVisualizer.apiRequests = [
    {
      id: uuidv4(),
      url: request.url,
      response: {
        body: request.response.data,
        status: request.response.status,
      },
    },
    ...state.apiVisualizer.apiRequests,
  ];
};

export default {
  INITIALIZE,
  SET_TOKEN,
  SET_BOOKS,
  SET_MOVIES,
  SET_REPOS,
  SET_CATEGORIES,
  SET_MESSAGES,
  CREATE_FAVORITE_BOOK,
  DESTROY_FAVORITE_BOOK,
  START_LOADING,
  STOP_LOADING,
  TOGGLE_API_VISUALIZER,
  ADD_API_REQUEST,
};

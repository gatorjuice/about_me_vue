import HttpService from "@/services/HttpService.js";

const initialize = ({ commit }) => {
  commit("INITIALIZE");
};

const toggleApiVisualizer = ({ commit }) => {
  commit("TOGGLE_API_VISUALIZER");
};

const loadBooks = ({ commit }) => {
  commit("START_LOADING");
  return HttpService.get("books", (status, response) => {
    commit("ADD_API_REQUEST", {
      url: "GET /books",
      response: {
        data: response,
        status,
      },
    });
    commit("SET_BOOKS", response);
    commit("STOP_LOADING");
  });
};

const clearMovies = ({ commit }) => {
  commit("SET_MOVIES", []);
};

const clearRepos = ({ commit }) => {
  commit("SET_REPOS", []);
};

const loadMovies = ({ commit }, movieTitle) => {
  commit("START_LOADING");
  return HttpService.get(`movies?title=${movieTitle}`, (status, response) => {
    commit("ADD_API_REQUEST", {
      url: `GET movies?title=${movieTitle}`,
      response: { data: response, status },
    });
    commit("SET_MOVIES", response.data);
    commit("STOP_LOADING");
  });
};

const loadRepos = ({ commit }) => {
  commit("START_LOADING");
  return HttpService.get(`github_repos`, (status, response) => {
    commit("ADD_API_REQUEST", {
      url: "GET /github_repos",
      response: { data: response, status },
    });
    commit("SET_REPOS", response.data);
    commit("SET_CATEGORIES", [
      ...new Set(
        response.data.map((repo) => {
          return repo.category;
        })
      ),
    ]);
    commit("STOP_LOADING");
  });
};

const login = ({ commit }, { username, password }) => {
  HttpService.post(`login`, { username, password }, (status, response) => {
    commit("ADD_API_REQUEST", {
      url: "POST /login",
      response: { data: response, status },
    });
    if (response.data.token) {
      commit("SET_TOKEN", response.data.token);
      document.location = "/";
    }
  });
};

const removeFavoriteBook = ({ commit }, book) => {
  HttpService.delete(`/user_books/${book.id}`, (status, response) => {
    commit("ADD_API_REQUEST", {
      url: `DELETE /user_books/${book.id}`,
      response: { data: response, status },
    });
    commit("DESTROY_FAVORITE_BOOK", book);
  });
};

const setFavoriteBook = ({ commit }, book) => {
  HttpService.post("/user_books", { book_id: book.id }, (status, response) => {
    commit("ADD_API_REQUEST", {
      url: "POST /user_books",
      response: { data: response, status },
    });
    commit("CREATE_FAVORITE_BOOK", book);
  });
};

const setMessages = ({ commit }, messages) => {
  commit("SET_MESSAGES", messages);
};

export default {
  clearMovies,
  clearRepos,
  initialize,
  loadBooks,
  loadMovies,
  loadRepos,
  login,
  removeFavoriteBook,
  setFavoriteBook,
  setMessages,
  toggleApiVisualizer,
};

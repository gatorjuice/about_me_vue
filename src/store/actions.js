import HttpService from "@/services/HttpService.js";

const initialize = ({ commit }) => {
  commit("INITIALIZE");
};

const loadBooks = ({ commit }, jwt) => {
  commit("START_LOADING");
  return HttpService.get(
    "books",
    { Authorization: `Bearer ${jwt}` },
    (status, response) => {
      commit("SET_BOOKS", response);
      commit("STOP_LOADING");
    }
  );
};

const clearMovies = ({ commit }) => {
  commit("SET_MOVIES", []);
};

const loadMovies = ({ commit }, { movieTitle, jwt }) => {
  commit("START_LOADING");
  return HttpService.get(
    `movies?title=${movieTitle}`,
    { Authorization: `Bearer ${jwt}` },
    (status, response) => {
      commit("SET_MOVIES", response.data);
      commit("STOP_LOADING");
    }
  );
};

const loadRepos = ({ commit }, jwt) => {
  commit("START_LOADING");
  return HttpService.get(
    `github_repos`,
    { Authorization: `Bearer ${jwt}` },
    (status, response) => {
      commit("SET_REPOS", response.data);
      commit("SET_CATEGORIES", [
        ...new Set(
          response.data.map((repo) => {
            return repo.category;
          })
        ),
      ]);
      commit("STOP_LOADING");
    }
  );
};

const login = ({ commit }, { username, password }) => {
  HttpService.post(`login`, { username, password }, {}, (status, response) => {
    if (response.data.token) {
      commit("SET_TOKEN", response.data.token);
      document.location = "/";
    }
  });
};

const removeFavoriteBook = ({ commit }, { book, jwt }) => {
  HttpService.delete(
    `/user_books/${book.id}`,
    { Authorization: `Bearer ${jwt}` },
    () => {
      commit("DESTROY_FAVORITE_BOOK", book);
    }
  );
};

const setFavoriteBook = ({ commit }, { book, jwt }) => {
  HttpService.post(
    "/user_books",
    { book_id: book.id },
    { Authorization: `Bearer ${jwt}` },
    () => {
      commit("CREATE_FAVORITE_BOOK", book);
    }
  );
};

export default {
  clearMovies,
  initialize,
  loadBooks,
  loadMovies,
  loadRepos,
  login,
  removeFavoriteBook,
  setFavoriteBook,
};

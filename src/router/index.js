import { createRouter, createWebHistory } from "vue-router";

const LandingPage = () =>
  import(/* webpackChunkName: "home" */ "@/views/LandingPage.vue");
const MovieSearch = () =>
  import(/* webpackChunkName: "movies" */ "@/views/MovieSearch.vue");
const DataMap = () =>
  import(/* webpackChunkName: "maps" */ "@/views/DataMap.vue");
const FavoriteBooks = () =>
  import(/* webpackChunkName: "books" */ "@/views/FavoriteBooks.vue");
const FunnyBot = () =>
  import(/* webpackChunkName: "books" */ "@/views/FunnyBot.vue");
const RepoTracker = () =>
  import(/* webpackChunkName: "repoTracker" */ "@/views/RepoTracker.vue");
const LoginPage = () =>
  import(/* webpackChunkName: "repoTracker" */ "@/views/LoginPage.vue");

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/movies",
    name: "MovieSearch",
    component: MovieSearch,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/maps",
    name: "DataMap",
    component: DataMap,
  },
  {
    path: "/books",
    name: "FavoriteBooks",
    component: FavoriteBooks,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/funny_bot",
    name: "FunnyBot",
    component: FunnyBot,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/repo_tracker",
    name: "RepoTracker",
    component: RepoTracker,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const vuex = JSON.parse(localStorage.getItem("vuex"));
    const loggedIn = vuex["jwt"];

    if (!loggedIn) {
      next({ name: "LoginPage" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

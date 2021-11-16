import { createRouter, createWebHistory } from "vue-router";
import { decode } from "jsonwebtoken";

const LandingPage = () =>
  import(/* webpackChunkName: "landingPage" */ "@/views/LandingPage.vue");
const MovieSearch = () =>
  import(/* webpackChunkName: "movieSearch" */ "@/views/MovieSearch.vue");
const DataMap = () =>
  import(/* webpackChunkName: "dataMap" */ "@/views/DataMap.vue");
const FavoriteBooks = () =>
  import(/* webpackChunkName: "favoriteBooks" */ "@/views/FavoriteBooks.vue");
const FunnyBot = () =>
  import(/* webpackChunkName: "funnyBot" */ "@/views/FunnyBot.vue");
const RepoTracker = () =>
  import(/* webpackChunkName: "repoTracker" */ "@/views/RepoTracker.vue");
const LoginPage = () =>
  import(/* webpackChunkName: "loginPage" */ "@/views/LoginPage.vue");

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
    const jwt = JSON.parse(localStorage.getItem("vuex"))["jwt"];
    const decodedJwt = decode(jwt);

    console.log(jwt, new Date() / 1000);
    if (!jwt) {
      next({ name: "LoginPage" });
    } else if (decodedJwt.exp < new Date() / 1000) {
      next({ name: "LoginPage" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home.vue");
const Movies = () =>
  import(/* webpackChunkName: "movies" */ "@/views/Movies.vue");
const Maps = () => import(/* webpackChunkName: "maps" */ "@/views/Maps.vue");
const Books = () => import(/* webpackChunkName: "books" */ "@/views/Books.vue");
const FunnyBot = () =>
  import(/* webpackChunkName: "books" */ "@/views/FunnyBot.vue");
const RepoTracker = () =>
  import(/* webpackChunkName: "repoTracker" */ "@/views/RepoTracker.vue");
const Login = () =>
  import(/* webpackChunkName: "repoTracker" */ "@/views/Login.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/maps",
    name: "Maps",
    component: Maps,
  },
  {
    path: "/books",
    name: "Books",
    component: Books,
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
  const vuex = JSON.parse(localStorage.getItem("vuex"));
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (vuex && to.matched.some((record) => record.meta.requiresAuth)) {
    const loggedIn = vuex["jwt"];

    if (!loggedIn) {
      next({ name: "Login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

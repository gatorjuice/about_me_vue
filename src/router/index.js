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

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
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
  },
  {
    path: "/funny_bot",
    name: "FunnyBot",
    component: FunnyBot,
  },
  {
    path: "/repo_tracker",
    name: "RepoTracker",
    component: RepoTracker,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes,
});

export default router;

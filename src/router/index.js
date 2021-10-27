import { createRouter, createWebHistory } from "vue-router";
import Movies from "../views/Movies.vue";
import Maps from "../views/Maps.vue";

const routes = [
  {
    path: "/",
    name: "Movies",
    component: Movies,
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
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes,
});

export default router;

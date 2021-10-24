import { createRouter, createWebHistory } from "vue-router";
import Movies from "../views/Movies.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

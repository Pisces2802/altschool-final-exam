import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Repos from "../views/Repos.vue";
import Repo from "../views/Repo.vue";
import Error404Page from "@/views/Error404Page.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/repos",
    name: "Repos",
    component: Repos,
  },
  {
    path: "/repos/:id",
    name: "Repo",
    component: Repo,
  },
  {
    path: "/:catchAll(.*)",
    name: "ErrorPage",
    component: Error404Page,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

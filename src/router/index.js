import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/catalog/:name",
    name: "catalog",
    component: () => import("../views/CatalogView.vue"),
  },
  {
    path: "/product/:id",
    name: "product",
    component: () => import("../views/ProductView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

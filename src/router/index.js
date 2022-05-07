import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: '/cards/:id',
    name: "Cards",
    component: () => import("../views/Cards.vue")
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import("../views/NotFound.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

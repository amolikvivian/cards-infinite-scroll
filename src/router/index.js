import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/cards/:id',
    name: "Cards",
    component: () => import("../views/Cards.vue")
    
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import("../views/NotFound.vue"),
    alias: ['/']
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

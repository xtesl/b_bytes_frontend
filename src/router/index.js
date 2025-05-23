import { createRouter, createWebHashHistory } from 'vue-router';
import Home from "../views/Home.vue"


const routes = [
  { path: '/', component: Home, name: 'home' },
  // { path: "/:catchAll(.*)", component: NotFound, name: 'NotFound' }, // Catch-all 404
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

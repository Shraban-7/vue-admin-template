import Dashboard from "@/Pages/Dashboard.vue";
import User from "@/Pages/User.vue";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      title: "Dashboard",
    },
  },
  {
    path: "/users",
    name: "Users",
    component:User,
    meta: {
      title: "Users",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  document.title = `Vue.js ${to.meta.title} | POS`;
  next();
});

export default router;
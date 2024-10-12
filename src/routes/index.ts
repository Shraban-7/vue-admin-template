import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/Pages/Dashboard.vue";
import Users from "@/Pages/Users.vue";
import GeneralSettings from "@/Pages/Settings/GeneralSettings.vue";
import SecuritySettings from "@/Pages/Settings/SecuritySettings.vue";
import Analytics from "@/Pages/Analytics.vue";
import Logout from "@/Pages/Logout.vue";

const routes = [
  { path: "/", component: Dashboard, name: "dashboard" },
  { path: "/users", component: Users, name: "users" },
  {
    path: "/settings/general",
    component: GeneralSettings,
    name: "general-settings",
  },
  {
    path: "/settings/security",
    component: SecuritySettings,
    name: "security-settings",
  },
  { path: "/analytics", component: Analytics, name: "analytics" },
  { path: "/logout", component: Logout, name: "logout" },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(`Navigating from ${from.path} to ${to.path}`);
  next();
});

export default router;

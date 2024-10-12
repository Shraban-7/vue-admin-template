import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Dashboard from '@/Pages/Dashboard.vue';
import Users from '@/Pages/Users.vue';
import GeneralSettings from '@/Pages/Settings/GeneralSettings.vue';
import SecuritySettings from '@/Pages/Settings/SecuritySettings.vue';
import Analytics from '@/Pages/Analytics.vue';
import Logout from '@/Pages/Logout.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Dashboard },
  { path: '/users', component: Users },
  { path: '/settings/general', component: GeneralSettings },
  { path: '/settings/security', component: SecuritySettings },
  { path: '/analytics', component: Analytics },
  { path: '/logout', component: Logout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

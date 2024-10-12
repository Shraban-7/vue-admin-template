<template>
  <div>
    <!-- Backdrop for mobile -->
    <div
      v-if="sidebarStore.isMobileOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
      @click="closeMobileSidebar"
    ></div>

    <!-- Sidebar -->
    <div
      :class="[
        'fixed top-0 left-0 z-30 h-screen transition-all duration-300 bg-deepTeal',
        { 'w-64': sidebarStore.isExpanded, 'w-16': !sidebarStore.isExpanded },
        { 'translate-x-0': sidebarStore.isMobileOpen, '-translate-x-full': !sidebarStore.isMobileOpen },
        'lg:static lg:translate-x-0'
      ]"
    >
      <!-- Close icon for mobile -->
      <button
        v-if="sidebarStore.isMobileOpen"
        @click="closeMobileSidebar"
        class="absolute top-4 right-4 text-white hover:text-gray-300 lg:hidden"
      >
        <i class="fas fa-times text-xl"></i>
      </button>

      <!-- Brand Name / Logo -->
      <div
        class="flex items-center justify-start p-4 bg-deepTeal text-white border-b border-midnight h-16"
      >
        <template v-if="sidebarStore.isExpanded">
          <div class="flex items-center">
            <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
              <span class="text-deepTeal font-bold text-sm">AP</span>
            </div>
            <span class="font-bold text-lg">Admin Panel</span>
          </div>
        </template>
        <div v-else class="min-w-10 min-h-10 bg-white rounded-full flex items-center justify-center">
          <span class="text-deepTeal font-bold text-lg">AP</span>
        </div>
      </div>

      <!-- Sidebar content -->
      <ul class="flex-1 overflow-y-auto">
        <NavItem
          v-for="item in navItems"
          :key="item.label"
          :item="item"
          :isSidebarExpanded="sidebarStore.isExpanded"
          :currentRoute="route"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from 'vue-router';
import NavItem from './NavItem.vue';
import { useSidebarStore } from '@/stores/sidebarStore';

const sidebarStore = useSidebarStore();
const route = useRoute();

// Define an array of nav items with nested structure
const navItems = ref([
  { label: "Dashboard", iconClass: "fa fa-home", route: { name: "dashboard" } },
  { label: "Users", iconClass: "fa fa-user", route: { name: "users" } },
  { 
    label: "Settings", 
    iconClass: "fa fa-cog", 
    children: [
      { label: "General", iconClass: "fa fa-wrench", route: { name: "general-settings" } },
      { label: "Security", iconClass: "fa fa-lock", route: { name: "security-settings" } }
    ]
  },
  { label: "Analytics", iconClass: "fa fa-chart-line", route: { name: "analytics" } },
  { label: "Logout", iconClass: "fa fa-sign-out-alt", route: { name: "logout" } },
]);

const closeMobileSidebar = () => {
  sidebarStore.closeMobileSidebar();
};
</script>

<style scoped>
.text-deepTeal {
  color: #00474f; /* Make sure this matches your deepTeal color */
}
</style>

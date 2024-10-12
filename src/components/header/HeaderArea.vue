<template lang="html">
  <header id="header" class="bg-white shadow">
    <div class="mx-auto flex items-center justify-between py-4 px-4 lg:px-6">
      <!-- Sidebar toggle button for mobile -->
      <button
        @click="toggleMobileSidebar"
        class="p-2 rounded-md hover:bg-gray-300 transition duration-200 lg:hidden mr-4"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Sidebar toggle button for desktop -->
      <button
        @click="toggleDesktopSidebar"
        class="p-2 rounded-md hover:bg-gray-300 transition duration-200 hidden lg:block mr-4"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Logo -->
      <a class="text-lg font-bold flex items-center lg:hidden" href="#">
        <span class="logo">Admin Panel</span>
      </a>

      <!-- Spacer to push the following items to the right -->
      <div class="flex-grow"></div>

      <!-- Mobile View (small devices) -->
      <div class="flex items-center space-x-4 lg:hidden">
        <!-- Profile Dropdown -->
        <UserNav />
      </div>

      <!-- Desktop View (large devices) -->
      <div class="hidden lg:flex items-center space-x-4">
        <UserNav />
        <p class="text-sm text-black">Welcome Admin</p>
      </div>
    </div>
  </header>
</template>

<script setup>
import UserNav from "./UserNav.vue";
import { useSidebarStore } from '@/stores/sidebarStore';

const sidebarStore = useSidebarStore();

const toggleMobileSidebar = () => {
  console.log('Toggling mobile sidebar');
  sidebarStore.toggleMobileSidebar();
};

const toggleDesktopSidebar = () => {
  console.log('Toggling desktop sidebar');
  sidebarStore.toggleDesktopSidebar();
};
</script>

<style scoped>
/* Add any additional styles here */

/* ShadCN dropdown menu styling */
.dropdown-menu {
  min-width: 150px;
  z-index: 50;
}
</style>

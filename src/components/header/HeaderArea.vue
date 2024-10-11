<template lang="html">
  <header id="header" class="bg-white shadow">
    <div class="container mx-auto flex justify-between items-center py-4">
      <!-- Sidebar toggle button for mobile and desktop -->
      <button
        @click="toggleMobileSidebar"
        class="p-2 rounded-md hover:bg-gray-300 transition duration-200 lg:hidden"
      >
        <span class="fa fa-bars "></span>
      </button>

      <!-- Logo -->
      <a class="text-lg font-bold flex items-center lg:hidden" href="#">
        <span class="logo">Admin Panel</span>
      </a>

      <!-- Mobile View (small devices) -->
      <div class="flex items-center space-x-4 lg:hidden">
        <!-- Profile Dropdown -->
        <UserNav />
        
      </div>

      <!-- Desktop View (large devices) -->
      <div class="hidden lg:flex items-center space-x-4 ml-auto">
        <UserNav />
        <p class="text-sm text-black">Welcome Admin</p>
      </div>
    </div>
  </header>
</template>

<script setup>
import UserNav from "./UserNav.vue";

// Sidebar toggle passed from the parent component
const props = defineProps({
  toggleMobileSidebar: Function, // Function to toggle the mobile sidebar
});
</script>

<style scoped>
/* Add any additional styles here */

/* ShadCN dropdown menu styling */
.dropdown-menu {
  min-width: 150px;
  z-index: 50;
}
</style>

<template>
  <!-- Sidebar for both desktop and mobile -->
  <div
    :class="[
      isSidebarExpanded ? 'bg-deepTeal w-64' : 'bg-midnight w-16', // Background color for desktop
      isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full', // For mobile
      'min-h-screen flex flex-col transition-all duration-300 lg:static lg:translate-x-0', // Responsive classes
    ]"
    class="fixed top-0 left-0 z-30"
  >
    <!-- Brand Name -->
    <div
      class="flex items-center p-4 bg-deepTeal text-white border-b border-midnight"
    >
      <span class="font-bold text-lg">Admin Panel</span>
    </div>

    <!-- Sidebar content -->
    <ul class="flex-1 overflow-y-auto">
      <!-- Use v-for to loop through nav items -->
      <NavItem
        v-for="(item, index) in navItems"
        :key="index"
        :label="item.label"
        :iconClass="item.iconClass"
        :route="item.route"
        :isSidebarExpanded="isSidebarExpanded"
        :isMobileSidebarOpen="isMobileSidebarOpen"
      />
    </ul>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import NavItem from "./NavItem.vue"; // Import NavItem component

const props = defineProps({
  isSidebarExpanded: {
    type: Boolean,
    required: true,
  },
  isMobileSidebarOpen: {
    type: Boolean,
    required: true,
  },
});

// Define an array of nav items
const navItems = ref([
  { label: "Dashboard", iconClass: "fa fa-home",route:"/" },
  { label: "Users", iconClass: "fa fa-user",route:"/users" },
  { label: "Settings", iconClass: "fa fa-cog" ,route:"/settings"},
  { label: "Analytics", iconClass: "fa fa-chart-line",route:"/analytics" },
  { label: "Logout", iconClass: "fa fa-sign-out-alt",route:"/logout" },
]);
</script>

<style scoped>
.w-64 {
  width: 16rem;
}

.w-16 {
  width: 4rem;
}

@media (max-width: 1024px) {
  /* Adjust sidebar on small screens */
  .translate-x-0 {
    transform: translateX(0);
  }

  .-translate-x-full {
    transform: translateX(-100%);
  }
}
</style>

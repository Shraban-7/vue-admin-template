<template>
  <div id="app_wrapper" class="min-h-screen flex">
    <!-- Sidebar Area for desktop and mobile -->
    <SidebarArea
      :isSidebarExpanded="isSidebarExpanded"
      :isMobileSidebarOpen="isMobileSidebarOpen"
      @toggle-sidebar="toggleSidebar"
    />

    <!-- Header and Main content -->
    <div class="flex flex-col w-full">
      <HeaderArea
        :toggleMobileSidebar="toggleMobileSidebar"
        :isMobileSidebarOpen="isMobileSidebarOpen"
      />

      <!-- Main content where routed pages will render -->
      <main class="flex-1 p-6 bg-gray-100 transition-all duration-300">
        <slot />
      </main>
    </div>

    <!-- Overlay for mobile sidebar -->
    <div
      v-if="isMobileSidebarOpen"
      @click="toggleMobileSidebar"
      class="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HeaderArea from "@/components/header/HeaderArea.vue";
import SidebarArea from "@/components/sidebar/SidebarArea.vue";
import { RouterView } from "vue-router";

// Sidebar state
const isSidebarExpanded = ref(true);
const isMobileSidebarOpen = ref(false);

// Method to toggle the sidebar for larger screens
const toggleSidebar = () => {
  isSidebarExpanded.value = !isSidebarExpanded.value;
};

// Method to toggle the mobile sidebar
const toggleMobileSidebar = () => {
  isMobileSidebarOpen.value = !isMobileSidebarOpen.value;
};
</script>

<style lang=""></style>

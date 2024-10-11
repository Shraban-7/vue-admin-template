<template>
  <li class="hover:bg-sage transition duration-200 border-b border-midnight">
    <router-link :to="route" class="flex items-center p-4 text-white">
      <i :class="iconClass + ' mr-2'"></i>
      <span v-if="isSidebarExpanded || isMobileSidebarOpen">{{ label }}</span>
    </router-link>
  </li>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  label: String,
  iconClass: String,
  route: String, // Add the route prop
  isSidebarExpanded: Boolean,
  isMobileSidebarOpen: Boolean
});
</script>

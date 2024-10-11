<template>
  <button class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded transition duration-200">
    <i :class="[icon, 'mr-2']"></i> <!-- Dynamically applying Font Awesome icons -->
    <span v-if="isOpen">{{ title }}</span>
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  icon: String,  // Example: 'fa fa-home', 'fa fa-user'
  isOpen: Boolean,
});
</script>

<style scoped>
/* Add any additional styles for the button here */
</style>

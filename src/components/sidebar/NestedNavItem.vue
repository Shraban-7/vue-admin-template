<template>
  <li>
    <div
      v-if="hasChildren"
      @click="toggleExpand"
      :class="[
        'flex items-center p-2 text-white hover:bg-deepTeal-light transition-colors duration-200 cursor-pointer',
        { 'bg-deepTeal-light': isActive || isExpanded }
      ]"
    >
      <i :class="[iconClass, 'mr-3']"></i>
      <span v-if="isSidebarExpanded">{{ label }}</span>
      <i
        v-if="isSidebarExpanded"
        :class="['fas', isExpanded ? 'fa-minus' : 'fa-plus', 'ml-auto']"
      ></i>
    </div>
    <router-link
      v-else
      :to="route"
      :class="[
        'flex items-center p-2 text-white hover:bg-deepTeal-light transition-colors duration-200',
        { 'bg-deepTeal-light': isActive }
      ]"
    >
      <i :class="[iconClass, 'mr-3']"></i>
      <span v-if="isSidebarExpanded">{{ label }}</span>
    </router-link>
    <ul v-if="hasChildren && isExpanded" class="pl-4">
      <NestedNavItem
        v-for="child in children"
        :key="child.label"
        v-bind="child"
        :isSidebarExpanded="isSidebarExpanded"
        :isActive="child.route === currentRoute.path"
      />
    </ul>
  </li>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  label: String,
  iconClass: String,
  route: String,
  children: Array,
  isSidebarExpanded: Boolean,
  isActive: Boolean
});

const route = useRoute();
const isExpanded = ref(false);

const hasChildren = computed(() => props.children && props.children.length > 0);
const currentRoute = computed(() => route);

const toggleExpand = () => {
  if (hasChildren.value) {
    isExpanded.value = !isExpanded.value;
  }
};
</script>

<template>
  <li
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      v-if="item.children"
      @click="toggleExpand"
      :class="[
        'flex items-center p-2 text-white hover:bg-deepTeal-light transition-colors duration-200 cursor-pointer',
        { 'bg-deepTeal-light': isActive || isExpanded },
        { 'justify-center': !isSidebarExpanded }
      ]"
    >
      <i :class="[item.iconClass, { 'mr-3': isSidebarExpanded, 'text-xl': !isSidebarExpanded }]"></i>
      <span v-if="isSidebarExpanded" class="flex-grow">{{ item.label }}</span>
      <i
        v-if="isSidebarExpanded"
        :class="['fas', isExpanded ? 'fa-chevron-down' : 'fa-chevron-left', 'ml-2 transition-transform duration-300 ease-in-out']"
        :style="{ transform: isExpanded ? 'rotate(0deg)' : 'rotate(0deg)' }"
      ></i>
    </div>
    <router-link
      v-else
      :to="item.route"
      :class="[
        'flex items-center p-2 text-white hover:bg-deepTeal-light transition-colors duration-200',
        { 'bg-deepTeal-light': isActive },
        { 'justify-center': !isSidebarExpanded }
      ]"
    >
      <i :class="[item.iconClass, { 'mr-3': isSidebarExpanded, 'text-xl': !isSidebarExpanded }]"></i>
      <span v-if="isSidebarExpanded" class="flex-grow">{{ item.label }}</span>
      <i v-if="isSidebarExpanded && item.indicator" :class="['fas', item.indicator, 'ml-2']"></i>
    </router-link>
    
    <!-- Nested items for expanded sidebar -->
    <transition
      name="expand"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <ul v-if="item.children && (isExpanded || (!isSidebarExpanded && isHovered))" class="pl-4 overflow-hidden">
        <NavItem
          v-for="child in item.children"
          :key="child.label"
          :item="child"
          :isSidebarExpanded="isSidebarExpanded"
          :currentRoute="currentRoute"
        />
      </ul>
    </transition>
  </li>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  item: Object,
  isSidebarExpanded: Boolean,
  currentRoute: Object
});

const emit = defineEmits(['expandSidebar']);

const isExpanded = ref(false);
const isHovered = ref(false);

const isActive = computed(() => {
  if (props.item.route) {
    return props.currentRoute.name === props.item.route.name;
  }
  if (props.item.children) {
    return props.item.children.some(child => props.currentRoute.name === child.route.name);
  }
  return false;
});

const toggleExpand = () => {
  if (props.item.children) {
    isExpanded.value = !isExpanded.value;
  }
};

const handleMouseEnter = () => {
  if (props.item.children && !props.isSidebarExpanded) {
    isHovered.value = true;
    emit('expandSidebar');
  }
};

const handleMouseLeave = () => {
  isHovered.value = false;
};

// Transition methods
const enter = (el) => {
  el.style.height = '0';
  el.style.opacity = '0';
  void el.offsetHeight; // force browser to reflow
  el.style.height = el.scrollHeight + 'px';
  el.style.opacity = '1';
};

const afterEnter = (el) => {
  el.style.height = 'auto';
  el.style.overflow = 'visible';
};

const leave = (el) => {
  el.style.height = el.scrollHeight + 'px';
  el.style.overflow = 'hidden';
  void el.offsetHeight; // force browser to reflow
  el.style.height = '0';
  el.style.opacity = '0';
};
</script>

<style scoped>
.text-deepTeal {
  color: #00474f; /* Make sure this matches your deepTeal color */
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

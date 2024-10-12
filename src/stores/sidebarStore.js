import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    isExpanded: true,
    isMobileOpen: false,
  }),
  actions: {
    toggleDesktopSidebar() {
      this.isExpanded = !this.isExpanded;
    },
    toggleMobileSidebar() {
      this.isMobileOpen = !this.isMobileOpen;
    },
    toggleSidebar() {
      if (window.innerWidth >= 1024) {
        // Desktop
        this.isExpanded = !this.isExpanded;
      } else {
        // Mobile
        this.isMobileOpen = !this.isMobileOpen;
      }
    },
  },
});

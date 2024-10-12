<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import BaseLayout from '@/layouts/BaseLayout.vue';

const router = useRouter();

onMounted(() => {
  // Perform logout logic here (e.g., clear session, tokens, etc.)
  // Then redirect to login page
  setTimeout(() => {
    router.push('/login');
  }, 2000);
});
</script>

<template>
  <div>
    <BaseLayout>
      <div class="logout">
      <h1>Logging out...</h1>
      <!-- Logout confirmation or redirect logic -->
      </div>
    </BaseLayout>
  </div>
</template>

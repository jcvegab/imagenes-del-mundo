<script setup lang="ts">
import { PUBLIC_ROUTES } from "../router/public-routes";
import NavigationItems from "./NavigationItems.vue";

defineProps<{
  title: string;
}>();
</script>

<template>
  <footer>
    <span
      >{{ title }} | Todos los derechos reservados &copy;
      {{ new Date().getFullYear() }}.</span
    >
    <NavigationItems :items="PUBLIC_ROUTES" />
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  line-height: 1.5;

  margin-top: 1rem;
  padding: 1rem;
  height: 4rem;
  max-width: 1080px;

  border-top: 1px solid var(--text-color-primary);
}
</style>

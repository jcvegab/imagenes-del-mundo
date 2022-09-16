<script setup lang="ts">
import { PUBLIC_ROUTES } from "../router/public-routes";
import NavigationItems from "./NavigationItems.vue";

defineProps<{
  title: string;
}>();
</script>

<template>
  <div>
    <footer>
      <span
        >{{ title }} | Todos los derechos reservados &copy;
        {{ new Date().getFullYear() }}.</span
      >
      <NavigationItems :items="PUBLIC_ROUTES" />
    </footer>
  </div>
</template>

<style scoped>
div {
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
}

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  line-height: 1.5;

  padding: 1rem;
  width: 100%;
  height: 4rem;
}

footer > span {
  font-weight: 600;
}

@media (min-width: 1024px) {
  footer {
    max-width: 1080px;
  }
}
</style>

<script setup lang="ts">
import { capitalize } from "vue";
import { RouterLink } from "vue-router";

import type { Route } from "@/router/public-routes";

defineProps<{
  items: Route[];
}>();
</script>

<template>
  <nav>
    <template v-for="item in items" :key="item.name">
      <RouterLink :to="item.path">
        {{ capitalize(item.name) }}
      </RouterLink>
    </template>
  </nav>
</template>

<style scoped>
nav {
  width: fit-content;

  display: flex;
  gap: 1rem;

  font-size: 1rem;
  text-align: center;
}

a {
  font-weight: 500;
  text-decoration: none;
  color: var(--link-color-primary);
}
</style>

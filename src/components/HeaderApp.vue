<script setup lang="ts">
import { onMounted, ref } from "vue";

import InputSwitch from "primevue/inputswitch";
import NavigationItems from "./NavigationItems.vue";

import { THEME_LS } from "@/constants/theme";
import { PUBLIC_ROUTES } from "@/router/public-routes";

export type Theme = "light" | "dark";

defineProps<{
  title: string;
}>();

const isLightTheme = () => {
  const currentTheme = localStorage.getItem(THEME_LS) as Theme;
  return currentTheme === "light";
};

const setTheme = (isLight: boolean) => {
  const theme = isLight ? "light" : "dark";
  localStorage.setItem(THEME_LS, theme);
  lightTheme.value = isLight;
  document.documentElement.className = theme;
};

const toggleTheme = () => {
  const activeTheme = localStorage.getItem(THEME_LS);
  setTheme(activeTheme !== "light");
};

const isLightSchemePreference = () => {
  return window.matchMedia("(prefers-color-scheme: light)").matches;
};

const lightTheme = ref<boolean>(isLightTheme() || isLightSchemePreference());

onMounted(() => setTheme(lightTheme.value));
</script>

<template>
  <header>
    <div class="header-app">
      <img alt="Imagenes del mundo Logo" class="logo" src="@/assets/logo.svg" />
      <h1>{{ title }}</h1>
    </div>
    <InputSwitch @click="toggleTheme" v-model="lightTheme" />
    <NavigationItems :items="PUBLIC_ROUTES" />
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  line-height: 1.5;

  margin-bottom: 1rem;
  padding: 1rem;
  max-width: 1080px;

  border-bottom: 1px solid var(--text-color-primary);
}

.header-app {
  height: 100%;

  display: flex;
  align-items: center;
  gap: 2rem;
}

.logo {
  display: block;
  height: 100%;
}

@media (min-width: 1024px) {
}
</style>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

import InputSwitch from "primevue/inputswitch";
import NavigationItems from "./NavigationItems.vue";

import { THEME_LS } from "@/constants/theme";
import { HOME_PATH } from "@/router/constants";
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
  <div class="header-container">
    <header>
      <div class="header-app">
        <RouterLink class="logo-link" :to="HOME_PATH">
          <img
            alt="Imagenes del mundo Logo"
            class="logo"
            src="@/assets/logo.svg"
          />
        </RouterLink>
        <h1>{{ title }}</h1>
      </div>
      <InputSwitch
        class="theme-switch"
        @click="toggleTheme"
        v-model="lightTheme"
      />
      <NavigationItems :items="PUBLIC_ROUTES" />
    </header>
  </div>
</template>

<style scoped>
.header-container {
  --header-gap: 2rem;

  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 1rem 3rem 1rem rgba(0, 0, 0, 0.1);
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  line-height: 1.5;

  padding: 1rem;
  height: 100%;
  width: 100%;
}

h1 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.header-app {
  height: 100%;

  display: flex;
  align-items: center;
  gap: var(--header-gap);
}

.logo-link {
  height: inherit;
}

.logo {
  display: block;
  height: 100%;
}

.theme-switch {
  margin: 0 var(--header-gap) 0 auto;
}

@media (min-width: 1024px) {
  header {
    max-width: 1080px;
  }
}
</style>

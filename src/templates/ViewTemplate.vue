<script setup lang="ts">
import { RouterView } from "vue-router";

import FooterApp from "@/components/FooterApp.vue";
</script>

<template>
  <div class="view-container"><RouterView /></div>
  <FooterApp title="Imágenes del mundo" />
</template>

<style lang="css" scoped>
.view-container {
  height: 100%;
  width: 100%;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 1024px) {
  .view-container {
    max-width: 1080px;
  }
}
</style>

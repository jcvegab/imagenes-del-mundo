<template>
  <div>About View</div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'Acerca de | Imágenes del mundo',
  meta: [
    {
      name: 'description',
      content:
        'Conoce más sobre nuestro proyecto de Imágenes del mundo y nuestra misión de recopilar las mejores vistas.',
    },
    {
      property: 'og:title',
      content: 'Acerca de | Imágenes del mundo',
    },
  ],
})
</script>

<style scoped></style>

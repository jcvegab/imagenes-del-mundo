<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

import { useDebouncedRef } from '@/composable/useDebouncedRef'

import { GCSE_IMAGES_API_URL } from '@/constants/urls'

import type { GoogleCSResponse, ImageItem } from '@/types/images'

import Image from 'primevue/image'
import InputText from 'primevue/inputtext'

const search = useDebouncedRef('', 600)
const images = ref<ImageItem[]>([])

const formatGcseData = (data: GoogleCSResponse): ImageItem[] => {
  return data.items.map((img) => ({
    id: img.image.thumbnailLink,
    alt: img.title,
    url: img.link,
  }))
}

const getImages = async (query: string) => {
  const data = await fetch(`${GCSE_IMAGES_API_URL}&q=${query}`).then((res) => res.json())
  const formatted = formatGcseData(data as GoogleCSResponse)
  images.value = formatted
}

onMounted(() => {
  if (search.value.length) {
    getImages(search.value)
  } else {
    getImages('Startups')
  }
})

watch(() => search.value, getImages)
</script>

<template>
  <main>
    <InputText class="search" v-model="search" placeholder="Buscar" />
    <div class="images-container">
      <Image
        v-for="image in images"
        :key="image.id"
        :src="image.url"
        :alt="image.alt"
        :aria-label="image.alt"
        class="image-item"
        preview
      />
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100%;
  width: 100%;

  margin: 4rem 0;
}

.search {
  display: block;
  width: 80%;

  margin: 0 auto;
}

.images-container {
  margin-top: 4rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
}

.image-item {
  overflow: hidden;
}

::v-deep(.p-image-preview) > img {
  width: 100%;
  object-fit: cover;
}

@media (max-width: 1280px) {
  main {
    padding: 0 5rem;
  }
}
</style>

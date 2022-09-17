<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

import { useDebouncedRef } from "@/composable/useDebouncedRef";

import { GCSE_IMAGES_API_URL } from "@/constants/urls";

import InputText from "primevue/inputtext";
import Image from "primevue/image";

type ImageItem = {
  id: string;
  url: string;
  alt: string;
};

const search = useDebouncedRef("", 600);
const images = ref<ImageItem[]>([]);

const formatGcseData = (data: any): ImageItem[] => {
  return data.items.map((img: any) => ({
    id: img.image.thumbnailLink,
    alt: img.title,
    url: img.link,
  }));
};

const getImages = async (query: string) => {
  const data = (await fetch(`${GCSE_IMAGES_API_URL}&q=${query}`).then((res) =>
    res.json()
  )) as any;
  const formatted = formatGcseData(data);
  images.value = formatted;
};

onMounted(() => {
  search.value.length ? getImages(search.value) : getImages("Startups");
});

watch(() => search.value, getImages);
</script>

<template>
  <main>
    <InputText class="search" v-model="search" placeholder="Buscar" />
    <div class="images-container">
      <template v-for="image in images" :key="image.id">
        <Image class="image-item" :src="image.url" :alt="image.alt" preview />
      </template>
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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
}

.image-item {
  overflow: hidden;
}

::v-deep(.p-image-preview-container) > img {
  width: 100%;
  height: -webkit-fill-available;
}

@media (max-width: 1280px) {
  main {
    padding: 0 5rem;
  }
}
</style>

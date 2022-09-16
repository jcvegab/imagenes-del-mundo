<script setup lang="ts">
import { ref } from "vue";

import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Image from "primevue/image";

const search = ref("");

const handleSearch = () => {
  console.log(search.value);
};

const IMAGE_URL =
  "https://www.primefaces.org/primevue/demo/images/galleria/galleria11.jpg";
</script>

<template>
  <main>
    <div class="search p-inputgroup">
      <InputText v-model="search" placeholder="Buscar" />
      <Button
        @click="handleSearch"
        icon="pi pi-search"
        class="p-button-warning"
      />
    </div>
    <div class="images-container">
      <Image class="image-item" :src="IMAGE_URL" alt="Image Text" preview />
      <Image class="image-item" :src="IMAGE_URL" alt="Image Text" preview />
      <Image class="image-item" :src="IMAGE_URL" alt="Image Text" preview />
      <Image class="image-item" :src="IMAGE_URL" alt="Image Text" preview />
      <Image class="image-item" :src="IMAGE_URL" alt="Image Text" preview />
      <Image class="image-item" :src="IMAGE_URL" alt="Image Text" preview />
      <Image class="image-item" :src="IMAGE_URL" alt="Image Text" preview />
      <Image class="image-item" :src="IMAGE_URL" alt="Image Text" preview />
      <Image class="image-item" :src="IMAGE_URL" alt="Image Text" preview />
      <Image class="image-item" :src="IMAGE_URL" alt="Image Text" preview />
      <Image class="image-item" :src="IMAGE_URL" alt="Image Text" preview />
      <Image class="image-item" :src="IMAGE_URL" alt="Image Text" preview />
      <Image class="image-item" :src="IMAGE_URL" alt="Image Text" preview />
      <Image class="image-item" :src="IMAGE_URL" alt="Image Text" preview />
      <Image class="image-item" :src="IMAGE_URL" alt="Image Text" preview />
      <Image class="image-item" :src="IMAGE_URL" alt="Image Text" preview />
      <Image class="image-item" :src="IMAGE_URL" alt="Image Text" preview />
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

<template>
  <div
    class="mx-auto mb-10 grid max-w-md grid-cols-1 justify-items-center md:container md:mb-0 md:grid-cols-2 lg:grid-cols-3"
  >
    <img :src="imageDark" alt="dark image" class="h-full w-full object-cover" />
    <div class="container my-auto flex flex-col items-center justify-center">
      <div class="h-full md:w-full">
        <h2 class="mt-5 mb-2 font-bold tracking-[.4em] uppercase md:text-2xl">
          {{ title }}
        </h2>
        <p class="text-grey-500 mt-4 mb-5">{{ description }}</p>
      </div>
    </div>
    <img :src="imageLight" alt="light image" class="h-full w-full object-cover" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageDark: string;
  imageLight: string;
  title: string;
  description: string;
}>();
</script>

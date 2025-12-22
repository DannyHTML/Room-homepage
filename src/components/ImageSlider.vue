<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="(image, index) in images" :key="index">
      <picture class="h-full w-full">
        <source :srcset="image.desktop" media="(min-width: 768px)" />
        <img :src="image.mobile" :alt="`Image ${index + 1}`" class="h-full w-full object-cover" />
      </picture>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/carousel.css';

defineProps<{
  images: {
    mobile: string;
    desktop: string;
  }[];
}>();

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  //   autoplay: 1000,
  pauseAutoplayOnHover: true,
  transition: 800,
};
</script>

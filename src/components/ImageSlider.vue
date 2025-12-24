<template>
  <Carousel ref="carousel" v-bind="carouselConfig">
    <Slide aria-label="Image slide" v-for="(image, index) in images" :key="index">
      <picture class="h-full w-full">
        <source :srcset="image.desktop" media="(min-width: 768px)" />
        <img :src="image.mobile" :alt="`Image ${index + 1}`" class="h-full w-full object-cover" />
      </picture>
    </Slide>
    <template #addons>
      <div class="absolute right-0 bottom-0 lg:right-0 lg:translate-x-full">
        <ButtonSlider
          aria-label="Previous slide"
          role="Previous button"
          @click="prevSlide"
          :icon="iconLeft"
        />
        <ButtonSlider
          aria-label="Next slide"
          role="Next button"
          @click="nextSlide"
          :icon="iconRight"
        />
      </div>
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Slide, type CarouselExposed } from 'vue3-carousel';
import 'vue3-carousel/carousel.css';
import { ref } from 'vue';
import ButtonSlider from './ButtonSlider.vue';
import iconLeft from '@/assets/images/icon-angle-left.svg';
import iconRight from '@/assets/images/icon-angle-right.svg';

const carousel = ref<CarouselExposed | null>(null);

const nextSlide = () => carousel.value?.next();
const prevSlide = () => carousel.value?.prev();

defineProps<{
  images: {
    mobile: string;
    desktop: string;
  }[];
}>();

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  // autoplay: 1000,
  pauseAutoplayOnHover: true,
  transition: 800,
};
</script>

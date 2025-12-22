<template>
  <ImageSlider :images="images" />
</template>

<script setup lang="ts">
import ImageSlider from './ImageSlider.vue';
import MobileHeroImg1 from '@/assets/images/mobile-image-hero-1.jpg';
import MobileHeroImg2 from '@/assets/images/mobile-image-hero-2.jpg';
import MobileHeroImg3 from '@/assets/images/mobile-image-hero-3.jpg';
import DesktopHeroImg1 from '@/assets/images/desktop-image-hero-1.jpg';
import DesktopHeroImg2 from '@/assets/images/desktop-image-hero-2.jpg';
import DesktopHeroImg3 from '@/assets/images/desktop-image-hero-3.jpg';

const images = [
  { mobile: MobileHeroImg1, desktop: DesktopHeroImg1 },
  { mobile: MobileHeroImg2, desktop: DesktopHeroImg2 },
  { mobile: MobileHeroImg3, desktop: DesktopHeroImg3 },
];

console.log(images);
</script>

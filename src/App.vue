<!-- TODO: Write tests! Vitest. -->
<template>
  <main>
    <HeaderSite />
    <div class="md:container">
      <ImageSlider :images="images" />
    </div>
    <MainSection :title="title" :description="description" />
  </main>
</template>

<!-- TODO: Add imageSlider, add footer section -->

<script setup lang="ts">
import HeaderSite from '@/components/HeaderSite.vue';
import ImageSlider from '@/components/ImageSlider.vue';
import MainSection from '@/components/MainSection.vue';
import MobileHeroImg1 from '@/assets/images/mobile-image-hero-1.jpg';
import MobileHeroImg2 from '@/assets/images/mobile-image-hero-2.jpg';
import MobileHeroImg3 from '@/assets/images/mobile-image-hero-3.jpg';
import DesktopHeroImg1 from '@/assets/images/desktop-image-hero-1.jpg';
import DesktopHeroImg2 from '@/assets/images/desktop-image-hero-2.jpg';
import DesktopHeroImg3 from '@/assets/images/desktop-image-hero-3.jpg';
import data from '@/assets/data/content.json';

const title = data.main.hero.title;
const description = data.main.hero.description;

// TODO: Add imageSlider, add footer section
const images = [
  { mobile: MobileHeroImg1, desktop: DesktopHeroImg1 },
  { mobile: MobileHeroImg2, desktop: DesktopHeroImg2 },
  { mobile: MobileHeroImg3, desktop: DesktopHeroImg3 },
];
</script>

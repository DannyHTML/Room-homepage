<!-- TODO: Write tests! Vitest. -->
<template>
  <main>
    <HeaderSite />
    <div class="grid grid-cols-1 md:container md:grid-cols-2">
      <ImageSlider :images="images" />
      <MainSection :title="title" :description="description" :titleButton="buttonTitle" />
    </div>
    <AboutSection />
  </main>
</template>

<script setup lang="ts">
import HeaderSite from '@/components/HeaderSite.vue';
import ImageSlider from '@/components/ImageSlider.vue';
import MainSection from '@/components/MainSection.vue';
import AboutSection from './components/AboutSection.vue';
import data from '@/assets/data/content.json';

const title = data.main.hero.title;
const description = data.main.hero.description;
const buttonTitle = data.main.hero.buttonText;
const images = data.imageSlider.images;
</script>

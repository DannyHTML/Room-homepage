<!-- TODO: Write tests! Vitest. -->
<template>
  <main>
    <HeaderSite />
    <div class="grid grid-cols-1 md:container md:grid-cols-2">
      <div class="">
        <ImageSlider :images="images" />
      </div>
      <MainSection :title="title" :description="description" :titleButton="buttonTitle" />
    </div>
  </main>
</template>

<script setup lang="ts">
import HeaderSite from '@/components/HeaderSite.vue';
import ImageSlider from '@/components/ImageSlider.vue';
import MainSection from '@/components/MainSection.vue';
import data from '@/assets/data/content.json';

const title = data.main.hero.title;
const description = data.main.hero.description;
const buttonTitle = data.main.hero.buttonText;
const images = data.imageSlider.images;
</script>

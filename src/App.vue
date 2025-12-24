<!-- TODO: Write tests! Vitest. -->
<template>
  <main class="justify-center md:items-center lg:flex lg:h-dvh">
    <div>
      <HeaderSite />
      <div class="grid grid-cols-1 md:container md:grid-cols-2">
        <ImageSlider :images="images" />
        <MainSection
          :title="mainTitle"
          :description="mainDescription"
          :titleButton="mainButtonTitle"
        />
      </div>
      <AboutSection
        :imageDark="aboutImageDark"
        :imageLight="aboutImageLight"
        :title="aboutTitle"
        :description="aboutDescription"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import HeaderSite from '@/components/HeaderSite.vue';
import ImageSlider from '@/components/ImageSlider.vue';
import MainSection from '@/components/MainSection.vue';
import AboutSection from './components/AboutSection.vue';
import data from '@/assets/data/content.json';

const mainTitle = data.main.title;
const mainDescription = data.main.description;
const mainButtonTitle = data.main.buttonText;
const images = data.imageSlider.images;
const aboutImageDark = data.about.imageDark;
const aboutTitle = data.about.title;
const aboutDescription = data.about.description;
const aboutImageLight = data.about.imageLight;
</script>

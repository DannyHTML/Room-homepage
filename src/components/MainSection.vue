<template>
  <div
    class="container my-5 max-w-md md:py-0 lg:flex lg:max-w-xl lg:items-center lg:justify-center"
  >
    <div>
      <h1 class="text-4xl font-bold md:text-2xl xl:text-4xl">{{ title }}</h1>
      <p class="text-grey-500 mt-4 mb-5">{{ description }}</p>

      <ButtonMain :link="'#'" :title="titleButton">
        <template #icon>
          <img :src="arrowRight" alt="arrow right" />
        </template>
      </ButtonMain>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonMain from './ButtonMain.vue';
import arrowRight from '@/assets/images/icon-arrow.svg';

defineProps<{
  title: string;
  description: string;
  titleButton: string;
}>();
</script>

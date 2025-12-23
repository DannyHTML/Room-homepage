<template>
  <div class="container my-5 p-7">
    <h1 class="text-4xl font-bold">{{ title }}</h1>
    <p class="text-grey-500 mt-4">{{ description }}</p>
    <!-- TODO: Create button component -->
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>

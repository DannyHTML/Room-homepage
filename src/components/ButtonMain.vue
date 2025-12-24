<template>
  <a :href="link" class="flex w-fit items-center gap-4">
    <span class="font-semibold tracking-[0.5em] uppercase"> {{ title }} </span>

    <span v-if="$slots.icon">
      <slot name="icon" />
    </span>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  link: string;
  title: string;
}>();
</script>

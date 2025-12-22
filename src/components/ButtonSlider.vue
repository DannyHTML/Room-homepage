<template>
  <button
    type="button"
    @click="$emit('click')"
    class="cursor-pointer bg-black p-4 transition-opacity duration-150 focus-visible:opacity-70 focus-visible:outline-none active:opacity-70 [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-70"
  >
    <img :src="icon" alt="Image of an icon" class="h-5" />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
}>();

defineEmits<{
  (e: 'click'): void;
}>();
</script>

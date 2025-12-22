<template>
  <ul class="gap-8 text-xl text-white">
    <li v-for="item in menuItems" :key="item">
      <a
        href="#"
        class="relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full"
        >{{ item }}</a
      >
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  menuItems: string[];
}>();
</script>

<template>
  <ul class="gap-4 text-lg text-white lg:gap-6 lg:text-black">
    <li v-for="item in menuItems" :key="item.title">
      <a
        :href="item.url"
        class="relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full lg:after:bg-black"
        >{{ item.title }}</a
      >
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  menuItems: { title: string; url: string }[];
}>();
</script>

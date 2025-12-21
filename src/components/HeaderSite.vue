<template>
  <header class="fixed top-0 flex h-20 w-full items-center bg-orange-500">
    <div class="container flex items-center">
      <div class="flex w-full justify-center md:justify-start">
        <img :src="logo" class="" alt="Logo" />
      </div>
      <div class="absolute right-5 md:hidden">
        <img :src="hamburgerIcon" alt="Menu" />
      </div>
    </div>
    <!-- TODO: Make mobile menu by design -->
    <!-- TODO: Setup ESLint and Prettier, and use .husky to run before commit -->
    <!-- <MobileMenu /> -->
  </header>
</template>

<script setup lang="ts">
import logo from '@/assets/images/logo.svg'
import hamburgerIcon from '@/assets/images/icon-hamburger.svg'
import MobileMenu from './MobileMenu.vue'
</script>

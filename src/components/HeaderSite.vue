<template>
  <header class="fixed top-0 flex h-20 w-full items-center bg-orange-500">
    <div class="container flex items-center">
      <div class="flex w-full justify-center md:justify-start">
        <img :src="logo" class="" alt="Logo" />
      </div>
      <div class="absolute right-5 md:hidden">
        <img :src="hamburgerIcon" alt="Menu" @click="toggleMenu" />
      </div>
    </div>
    <MobileMenu :menuItems="menuItems" :closeIcon="closeIcon" :open="open" @close="toggleMenu" />
  </header>
</template>

<script setup lang="ts">
import logo from '@/assets/images/logo.svg';
import hamburgerIcon from '@/assets/images/icon-hamburger.svg';
import MobileMenu from './MobileMenu.vue';
import closeIcon from '@/assets/images/icon-close.svg';
import { ref } from 'vue';

const open = ref(false);

const menuItems = ['home', 'shop', 'about', 'contact'];

const toggleMenu = () => {
  open.value = !open.value;
};
</script>

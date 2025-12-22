<template>
  <header class="fixed top-0 flex h-20 w-full items-center bg-orange-500">
    <div class="container flex items-center">
      <div class="flex w-full justify-center md:items-center md:justify-start">
        <span class="md:mr-25">
          <img :src="logo" alt="Logo" class="md:w-22" />
        </span>
        <DesktopMenu :menuItems="menuItems" class="hidden md:flex" />
      </div>
      <div class="absolute right-5 md:hidden">
        <button
          aria-label="Open mobile menu"
          class="cursor-pointer border-0 bg-transparent p-0"
          @click="toggleMenu"
        >
          <img :src="hamburgerIcon" alt="Hamburger menu icon" />
        </button>
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
import DesktopMenu from './DesktopMenu.vue';

const open = ref(false);

const menuItems = ['home', 'shop', 'about', 'contact'];

const toggleMenu = () => {
  open.value = !open.value;
};
</script>

<template>
  <header class="fixed top-0 z-50 flex h-20 w-full items-center md:items-end">
    <div class="container flex items-center">
      <div class="flex w-full justify-center md:ml-5 md:items-center md:justify-start">
        <span class="md:mr-5 lg:mr-20">
          <img :src="logo" alt="Logo" class="md:w-18 lg:w-22" />
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
import data from '@/assets/data/content.json';
import DesktopMenu from './DesktopMenu.vue';

const open = ref(false);

const menuItems = data.header.menuItems;

const toggleMenu = () => {
  open.value = !open.value;
};
</script>

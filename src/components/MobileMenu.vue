<template>
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0 transform -translate-y-4"
    enter-to-class="opacity-100 transform translate-y-0"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100 transform translate-y-0"
    leave-to-class="opacity-0 transform -translate-y-4"
  >
    <template v-if="open">
      <div
        role="menu"
        aria-label="Mobile navigation"
        class="fixed top-0 right-0 h-26 w-full bg-white md:hidden"
      >
        <div class="container flex h-full items-center justify-between">
          <ul class="">
            <a href="#" class="flex gap-4"
              ><li v-for="item in menuItems" class="font-bold" :key="item">{{ item }}</li></a
            >
          </ul>
          <button aria-label="Close mobile menu" @click="$emit('close')">
            <img :src="closeIcon" alt="Close icon" />
          </button>
        </div>
        <div class="bg-grey-800/70 absolute top-26 right-0 h-dvh w-full"></div>
      </div>
    </template>
  </transition>
</template>

<script setup lang="ts">
defineProps<{
  menuItems: string[];
  closeIcon: string;
  open: boolean;
}>();

defineEmits(['close']);
</script>

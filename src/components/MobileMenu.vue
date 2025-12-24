<template>
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0 transform -translate-y-4"
    enter-to-class="opacity-100 transform translate-y-0"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100 transform translate-y-0"
    leave-to-class="opacity-0 transform -translate-y-4"
  >
    <div
      v-if="open"
      role="menu"
      aria-label="Mobile navigation"
      class="fixed top-0 right-0 h-26 w-full bg-white md:hidden"
    >
      <div class="container flex h-full items-center justify-between">
        <ul class="flex gap-3">
          <li v-for="item in menuItems" class="font-bold" :key="item.title">
            <a :href="item.url">{{ item.title }}</a>
          </li>
        </ul>
        <button aria-label="Close mobile menu" @click="$emit('close')">
          <img :src="closeIcon" alt="Close icon" />
        </button>
      </div>
      <div
        @click="$emit('close')"
        class="bg-grey-800/70 absolute top-26 right-0 h-dvh w-full"
      ></div>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps<{
  menuItems: { title: string; url: string }[];
  closeIcon: string;
  open: boolean;
}>();

defineEmits(['close']);
</script>

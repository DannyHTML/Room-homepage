// composables/useScroll.ts
import { ref, onMounted, onUnmounted } from 'vue';

export function useScroll(threshold = 50) {
  const isScrolled = ref(false);

  const onScroll = () => {
    isScrolled.value = window.scrollY > threshold;
  };

  onMounted(() => window.addEventListener('scroll', onScroll));
  onUnmounted(() => window.removeEventListener('scroll', onScroll));

  return { isScrolled };
}

import { describe } from 'vitest';
import ImageSlider from '@/components/ImageSlider.vue';
import { mount } from '@vue/test-utils';

describe('Image Slider Component', () => {
  it('Shows image slider', async () => {
    const wrapper = mount(ImageSlider);
    expect(wrapper.html()).toContain('carousel');
  });
});

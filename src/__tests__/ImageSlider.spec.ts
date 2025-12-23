import { describe } from 'vitest';
import ImageSlider from '@/components/ImageSlider.vue';
import { mount } from '@vue/test-utils';

describe('Image Slider Component', () => {
  it('Shows image slider', async () => {
    const wrapper = mount(ImageSlider);
    expect(wrapper.html()).toContain('carousel');
  });

  test('Navigates to next image when next button is clicked', async () => {
    const wrapper = mount(ImageSlider);
    const nextButton = wrapper.find('button[aria-label="Next slide"]');
    const carouselSection = wrapper.find('section[aria-label="Gallery"]');
    await nextButton.trigger('click');
    expect(carouselSection.classes()).toContain('is-sliding');
  });

  test('Navigates to previous image when previous button is clicked', async () => {
    const wrapper = mount(ImageSlider);
    const prevButton = wrapper.find('button[aria-label="Previous slide"]');
    const carouselSection = wrapper.find('section[aria-label="Gallery"]');
    await prevButton.trigger('click');
    expect(carouselSection.classes()).toContain('is-sliding');
  });
});

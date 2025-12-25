import hero1Mobile from './mobile-image-hero-1.jpg';
import hero1Desktop from './desktop-image-hero-1.jpg';
import hero2Mobile from './mobile-image-hero-2.jpg';
import hero2Desktop from './desktop-image-hero-2.jpg';
import hero3Mobile from './mobile-image-hero-3.jpg';
import hero3Desktop from './desktop-image-hero-3.jpg';

import aboutLight from './image-about-light.jpg';
import aboutDark from './image-about-dark.jpg';

export const imageMap = {
  'hero-1': { mobile: hero1Mobile, desktop: hero1Desktop },
  'hero-2': { mobile: hero2Mobile, desktop: hero2Desktop },
  'hero-3': { mobile: hero3Mobile, desktop: hero3Desktop },

  'about-light': aboutLight,
  'about-dark': aboutDark,
} as const;

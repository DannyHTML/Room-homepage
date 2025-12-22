import { describe, test, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/vue';
import HeaderSite from '@/components/HeaderSite.vue';

describe('Header Mobile Menu', () => {
  test('opens mobile menu when hamburger icon is clicked', async () => {
    const { getByRole, queryByRole } = render(HeaderSite);

    expect(queryByRole('menu', { name: /mobile navigation/i })).toBeNull();

    const hamburger = getByRole('button', { name: /open mobile menu/i });
    await fireEvent.click(hamburger);

    expect(getByRole('menu', { name: /mobile navigation/i })).toBeInTheDocument();
  });

  test('closes mobile menu when close button is clicked', async () => {
    const { getByRole, queryByRole } = render(HeaderSite);

    const hamburger = getByRole('button', { name: /open mobile menu/i });
    await fireEvent.click(hamburger);

    const closeButton = getByRole('button', { name: /close mobile menu/i });
    await fireEvent.click(closeButton);

    expect(queryByRole('menu', { name: /mobile navigation/i })).toBeNull();
  });
});

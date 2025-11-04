import { describe, it, expect, afterEach } from 'vitest';
import { initRippleEffect } from '../scripts/buttons';

describe('initRippleEffect', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should not add multiple ripple effects on repeated calls', () => {
    document.body.innerHTML = '<button class="btn--ripple">Click Me</button>';
    const button = document.querySelector('.btn--ripple') as HTMLElement;

    // Call initRippleEffect multiple times to simulate route changes
    initRippleEffect();
    initRippleEffect();
    initRippleEffect();

    // Simulate a click on the button
    button.click();

    // Check the number of ripple elements created
    const ripples = button.querySelectorAll('.r');
    expect(ripples.length).toBe(1);
  });
});

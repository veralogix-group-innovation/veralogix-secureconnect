/**
 * SecureConnect™ Button Interaction Scripts
 * Magnetic tilt and ripple effects
 */

/**
 * Initialize magnetic tilt effect for .btn--mag buttons
 */
export function initMagneticTilt() {
  document.querySelectorAll<HTMLElement>('.btn--mag').forEach(btn => {
    btn.addEventListener('pointermove', (e: PointerEvent) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      
      // Calculate rotation based on pointer position
      const rx = (0.5 - (y / r.height)) * 8;
      const ry = ((x / r.width) - 0.5) * 10;
      
      btn.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
      btn.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
      btn.style.setProperty('--tz', '12px');
      btn.setAttribute('data-tilt', '');
    });
    
    btn.addEventListener('pointerleave', () => {
      btn.style.cssText = '';
      btn.removeAttribute('data-tilt');
    });
  });
}

/**
 * Initialize ripple effect for .btn--ripple buttons
 */
export function initRippleEffect() {
  document.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const btn = target.closest<HTMLElement>('.btn--ripple');
    if (!btn) return;
    
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    
    const ripple = document.createElement('span');
    ripple.className = 'r';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    btn.appendChild(ripple);
    
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  });
}

/**
 * Initialize all button effects
 */
export function initButtonEffects() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (!prefersReducedMotion) {
    initMagneticTilt();
    initRippleEffect();
  }
}

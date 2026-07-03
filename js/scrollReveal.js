export function initScrollReveal({ reducedMotion } = {}) {
  const items = document.querySelectorAll('[data-reveal]');

  if (reducedMotion || !window.Motion) {
    items.forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  items.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
  });

  const groups = new Map();
  items.forEach((el) => {
    const groupKey = el.dataset.revealGroup || el;
    if (!groups.has(groupKey)) {
      groups.set(groupKey, []);
    }
    groups.get(groupKey).push(el);
  });

  groups.forEach((elements) => {
    window.Motion.inView(elements[0], () => {
      window.Motion.animate(
        elements,
        { opacity: [0, 1], transform: ['translateY(24px)', 'translateY(0)'] },
        { delay: window.Motion.stagger(0.08), duration: 0.5, easing: [0.16, 1, 0.3, 1] }
      );
    });
  });
}

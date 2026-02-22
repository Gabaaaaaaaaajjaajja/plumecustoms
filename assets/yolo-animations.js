(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const runViscousButton = (button) => {
    button.addEventListener('click', () => {
      button.classList.add('is-viscous');
      window.setTimeout(() => button.classList.remove('is-viscous'), 180);
    });
  };

  document.querySelectorAll('.product-page__add-to-tab').forEach(runViscousButton);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('section-enter');
        window.setTimeout(() => entry.target.classList.remove('section-enter'), 420);
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('[data-yolo-section]').forEach((section) => observer.observe(section));

  if (!prefersReducedMotion && window.gsap) {
    document.querySelectorAll('.parallax-drips__drop').forEach((drop, index) => {
      window.gsap.to(drop, {
        yPercent: 18,
        duration: 1.8 + index * 0.2,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      });
    });
  }
})();

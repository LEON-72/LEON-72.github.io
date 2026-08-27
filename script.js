/**
 * Minimal JavaScript for LEON Portfolio
 * Implements subtle scroll fade-in animations via IntersectionObserver.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll fade-in animations
  const fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Unobserve once animated
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    fadeElements.forEach(el => fadeObserver.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver support
    fadeElements.forEach(el => el.classList.add('visible'));
  }
});

gsap.registerPlugin(ScrollTrigger);

// Set default ScrollTrigger behaviors
ScrollTrigger.defaults({
  toggleActions: 'play reverse play reverse',
  start: 'top 80%',
  markers: false,
});

// Common animation helper
function fadeInFrom(selector, options = {}) {
  gsap.from(selector, {
    y: options.y || 40,
    opacity: 0,
    duration: options.duration || 1,
    delay: options.delay || 0,
    ease: options.ease || 'power2.out',
    stagger: options.stagger,
    scale: options.scale,
    scrollTrigger: options.scrollTrigger || (options.trigger ? {
      trigger: options.trigger,
      ...options.scrollTrigger
    } : undefined),
  });
}

fadeInFrom('.hero_avatar', { y: -60, duration: 1.2 });
fadeInFrom('.hero_title', { delay: 0.3 });
fadeInFrom('.hero_intro', { y: 30, delay: 0.6 });

fadeInFrom('.experience_content', { trigger: '.experience', y: 80, duration: 1.2 });
fadeInFrom('.projects_content h2', { trigger: '.projects', y: 60 });
fadeInFrom('.project_card', { trigger: '.projects_content', y: 40, stagger: 0.2, duration: 0.8 });
fadeInFrom('.contact_content', { trigger: '.contact', scale: 0.8, duration: 1.2, ease: 'back.out(1.7)' });
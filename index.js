gsap.registerPlugin(ScrollTrigger);

// Set default ScrollTrigger behaviors
ScrollTrigger.defaults({
  toggleActions: 'play reverse play reverse',
  start: 'top 80%',
  markers: false,
});

// Hero section animations
gsap.from('.hero_avatar', {
  y: -60,
  opacity: 0,
  duration: 1.2,
  ease: 'power2.out',
});
gsap.from('.hero_title', {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: 'power2.out',
});
gsap.from('.hero_intro', {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.6,
  ease: 'power2.out',
});

// Experience section animations
gsap.from('.experience_content', {
  scrollTrigger: {
    trigger: '.experience',
    start: 'top 80%',
  },
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: 'power2.out',
});

// Projects section animations
gsap.from('.projects_content h2', {
  scrollTrigger: {
    trigger: '.projects',
    start: 'top 80%',
  },
  y: 60,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
});
gsap.from('.project_card', {
  scrollTrigger: {
    trigger: '.projects_content',
    start: 'top 80%',
  },
  y: 40,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
  ease: 'power2.out',
});

// Contact section animations
gsap.from('.contact_content', {
  scrollTrigger: {
    trigger: '.contact',
    start: 'top 80%',
  },
  scale: 0.8,
  opacity: 0,
  duration: 1.2,
  ease: 'back.out(1.7)',
});
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


// Project modal logic and GSAP animation
const modal = document.getElementById('project-modal');
const modalContent = modal.querySelector('.modal-content');
const modalTitle = modal.querySelector('.modal-title');
const modalDesc = modal.querySelector('.modal-desc');
const modalLink = modal.querySelector('.modal-link');
const modalClose = modal.querySelector('.modal-close');
const backdrop = modal.querySelector('.modal-backdrop');

function openModal(title, desc, link) {
  modalTitle.textContent = title;
  modalDesc.textContent = desc;
  modalLink.href = link;
  modalLink.textContent = 'View on GitHub';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  gsap.fromTo(modalContent, {scale: 0.85, opacity: 0}, {scale: 1, opacity: 1, duration: 0.45, ease: 'power3.out'});
  gsap.fromTo(backdrop, {opacity: 0}, {opacity: 1, duration: 0.3, ease: 'power2.out'});
  setTimeout(() => modalClose.focus(), 350);
}
function closeModal() {
  gsap.to(modalContent, {scale: 0.85, opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: () => {
    modal.classList.remove('open');
    modal.removeAttribute('style');
    document.body.style.overflow = '';
  }});
  gsap.to(backdrop, {opacity: 0, duration: 0.2, ease: 'power2.in'});
}
// Open modal on card click
Array.from(document.querySelectorAll('.project_card')).forEach(card => {
  card.addEventListener('click', () => {
    openModal(card.dataset.title, card.dataset.desc, card.dataset.link);
  });
  card.style.cursor = 'pointer';
  card.setAttribute('tabindex', '0');
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(card.dataset.title, card.dataset.desc, card.dataset.link);
    }
  });
});
modalClose.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' || e.key === 'Esc') closeModal();
});
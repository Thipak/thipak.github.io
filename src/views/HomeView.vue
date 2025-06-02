<script setup lang="ts">
import HomeFlexOne from '@/components/HomeFlexOne.vue';
import HomeStart from '@/components/HomeStart.vue';
import HomeFlexIntro from '@/components/HomeFlexIntro.vue';
import HomeFlexExperience from '@/components/HomeFlexExperience.vue';
import HomeFlexProject from '@/components/HomeFlexProject.vue';
import HomeFlexContact from '@/components/HomeFlexContact.vue';

import gsap from 'gsap';

gsap.to('#home-flex-intro', {
  scrollTrigger: {
    trigger: 'home-flex-intro',
  },
  x: 500
});

</script>

<template>
  <HomeStart />
  <HomeFlexIntro id="home-flex-intro" />
</template>

<style scoped>
</style>

<script setup lang="ts">
  import HomeStart from '@/components/HomeStart.vue';

  import { onMounted } from 'vue';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import HomeFlexIntro from '@/components/HomeFlexIntro.vue'
  import HomeFlexExperience from '@/components/HomeFlexExperience.vue'

  ScrollTrigger.defaults({
    markers: true,
    pin: true,
    scrub: true,
    toggleActions: "play reverse play reverse",
  });

</script>

<template>
  <HomeStart />
  <HomeFlexIntro />
  <HomeFlexExperience />
</template>

<style scoped>
  .name-overlay {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>

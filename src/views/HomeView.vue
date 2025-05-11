<script setup lang="ts">
import HomeFlexOne from '@/components/HomeFlexOne.vue';
import HomeFlexIntro from '@/components/HomeFlexIntro.vue';
import HomeFlexExperience from '@/components/HomeFlexExperience.vue';
import HomeFlexProject from '@/components/HomeFlexProject.vue';
</script>

<template>
  <div class="home">
    <HomeFlexOne />
    <HomeFlexIntro />
    <HomeFlexProject />
    <HomeFlexExperience />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

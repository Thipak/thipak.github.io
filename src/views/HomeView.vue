<script setup lang="ts">
import HomeFlexOne from '@/components/HomeFlexOne.vue';
import HomeFlexIntro from '@/components/HomeFlexIntro.vue';
import HomeFlexExperience from '@/components/HomeFlexExperience.vue';
import HomeFlexProject from '@/components/HomeFlexProject.vue';
import HomeFlexContact from '@/components/HomeFlexContact.vue';
</script>

<template>
  <div class="home">
    <HomeFlexOne />
    <HomeFlexIntro />
    <HomeFlexProject />
    <HomeFlexExperience />
    <HomeFlexContact />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

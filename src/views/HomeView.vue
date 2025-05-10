<script setup lang="ts">
import HomeFlexOne from '@/components/HomeFlexOne.vue';
import HomeFlexIntro from '@/components/HomeFlexIntro.vue';
</script>

<template>
  <div class="home">
    <HomeFlexOne />
    <HomeFlexIntro />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

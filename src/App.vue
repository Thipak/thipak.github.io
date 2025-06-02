<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
</script>

<template>
  <HomeView />
</template>

<style scoped>
header {
  display: flex;
  top: 0;
  left: 0;
  padding: 20px;
  width: 100%;
  background-color: aliceblue;
}
</style>
<script setup lang="ts">

</script>

<template>
  <svg width="100vw" height="100vh" fill="white" class="overlay">
    <mask id="vectorMask">
      <rect height="100%" width="100%" fill="white"></rect>
      <text font-weight="bold" font-family="'Azeret Mono'" font-size="180" y="55%" x="54%" text-anchor="middle" stroke-width="3" fill="black">THIPAK B</text>
    </mask>
    <rect height="100%" width="100%" fill="black" mask="url(#vectorMask)"/>
  </svg>
  <svg width="100vw" height="100vh" fill="white" class="overlay-2">
    <mask id="vectorMask">
      <rect height="100%" width="100%" fill="white"></rect>
      <text font-weight="bold" font-family="'Azeret Mono'" font-size="180" y="55%" x="54%" text-anchor="middle" stroke-width="0" fill="black">THIPAK B</text>
    </mask>
    <rect height="100%" width="100%" fill="black" mask="url(#vectorMask)"/>
  </svg>
</template>

<style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    border: 1px solid blue;
  }

  .overlay-2 {
    position: fixed;
    z-index: -3;
    top: 0;
    left: 0;
    border: 1px solid orchid;
  }
</style>
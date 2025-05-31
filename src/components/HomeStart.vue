<script setup lang="ts">

import { onMounted } from 'vue';
import Name from './subcomponents/Name.vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const timeline = gsap.timeline({
    defaults: {
        duration: 1,
        ease: "power2.out",
    },
});

onMounted(() => {

  timeline.from(".name", {
    x: -200,
    opacity: 0,
  }).from(".role", {
    x: -250,
    opacity: 0,
  }, "<").from(".random-text", {
      x: -350,
      opacity: 0,
      delay: -0.5,
  });
});

</script>
<template>
    <div class="flex-element-start">
            <section>
                <Name class="name" />
                <h2 class="role">:Full-Stack Developer</h2>
                <p class="random-text">//just a random text for animation</p>
            </section>
    </div>
    <div id="inProgress">
       <p> Work in Progress !! </p>
    </div>
</template>

<style scoped>
.flex-element-start {

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: #ddd6d6;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

#inProgress {
    position: fixed;
    top: 50px;
    left: 50px;
    background-color: red;
}

section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

h1 {
    text-align: center;
    font-size: 5rem;
    color: #333;
    margin: 0;
}
h2 {
    text-align: center;
    font-size: 2rem;
    color: #333;
    margin: 0;
}
    
</style>
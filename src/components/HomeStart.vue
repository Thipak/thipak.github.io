<script setup lang="ts">

  import { onMounted } from 'vue';
  import Name from './subcomponents/Name.vue';

  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import NameSVG from '@/components/subcomponents/NameSVG.vue'

  ScrollTrigger.defaults({
    scrub: true,
    pin: true,
    toggleActions: "play reverse play reverse",
  });

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
    }, "<");

    gsap.from(".name-section", {
      duration: 1,
      scrollTrigger: {
        trigger: ".name-section",
        start: "center center",
        end: "bottom top",
      }
    });

    timeline.from(".overlay", {
      scale: 50,
      scrollTrigger: {
        trigger: ".overlay-2",
        start: "center center",
        end: "bottom top",
      },
    }).from(".overlay-2", {
      scrollTrigger: {
        trigger: ".overlay-2",
        start: "center center",
        end: "bottom top",
      },
    }, "<");
  });

</script>

<template>
  <NameSVG class="name-overlay"></NameSVG>
  <div class="flex-element-start">
    <section class="name-section">
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
        -webkit-user-select: none;
        -ms-user-select: none;

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
    }

    Name {
      position: absolute;
      top: 0;
      left: 0;
      transform-origin: center;
      width: 100%;
      height: 200%;
      z-index: 1;
    }

    #inProgress {
        position: fixed;
        top: 50px;
        left: 50px;
        background-color: red;
    }
    
</style>
<script setup lang="ts">

    import { onMounted } from 'vue';
    import Name from './subcomponents/Name.vue';
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    // gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
        markers: true,
        pin: true,
        scrub: true,
        toggleActions: "play none none none",
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
            toggleActions: "play none none none",
        }
    });

    //   gsap.from(".overlay-icon", {
    //     scale: 2,
    //     scrollTrigger: {
    //         trigger: ".overlay-icon",
    //         start: "top bottom",
    //         end: "bottom top",
    //         toggleActions: "play none none none",
    //     },
    //   })
    });

</script>

<template>
    <div class="flex-element-start">
            <section class="name-section">
                <Name class="name" />
                <h2 class="role">:Full-Stack Developer</h2>
                <p class="random-text">//just a random text for animation</p>
            </section>
    </div>
    <div class="overlay-icon-container">
        <img src="@/assets/thipak.svg" class="overlay-icon"  alt="Thipak">
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

    .overlay-icon-container {
        position: fixed;
        top: 0;
        left: 0;
    }

    #inProgress {
        position: fixed;
        top: 50px;
        left: 50px;
        background-color: red;
    }
    
</style>
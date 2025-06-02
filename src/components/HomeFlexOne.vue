<script setup lang="ts">
import Name from './subcomponents/Name.vue';
import gsap from 'gsap';

const timeline = gsap.timeline({
    defaults: {
        duration: 1,
        ease: "power2.out",
    },
});

timeline.from(".role", {
    x: -150,
    opacity: 0,
}, "<").from(".random-text", {
    x: -150,
    opacity: 0,
}, "<");

</script>
<template>
    <div class="flex-element-one">
        <section>
            <Name />
            <h2 class="role">:Full-Stack Developer</h2>
            <p class="random-text">//just a random text for animation</p>
        </section>
    </div>
    <div id="inProgress">
       <p> Work in Progress !! </p>
    </div>
</template>

<style scoped>
.flex-element-one {
    width: 100%;
    height: 100vh;
    background-color: #ddd6d6;

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;

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
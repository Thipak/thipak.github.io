<script setup lang="ts">
import { ref, onMounted } from 'vue';
// import gsap from 'gsap';

// gsap.from(".name", {
//     scrollTrigger: {
//         trigger: ".name",
//         start: "top 80%",
//         end: "top 30%",
//         scrub: true,
//     },
//     x: -100,
//     opacity: 0,
// });

const randomPosition = ref(null);

</script>
<template>
    <div class="name">
        <KinesisContainer class="kc-name">
            <KinesisElement :strength="25"
                            type="rotate">
                <h1 ref="random-position">T</h1>
            </KinesisElement>
        </KinesisContainer>
        <KinesisContainer class="kc-name">
            <KinesisElement :strength="25"
                            type="rotate">
                <h1 ref="random-position">H</h1>
            </KinesisElement>
        </KinesisContainer>
        <KinesisContainer class="kc-name">
            <KinesisElement :strength="25"
                            type="rotate">
                <h1 ref="random-position">I</h1>
            </KinesisElement>
        </KinesisContainer>
        <KinesisContainer class="kc-name">
            <KinesisElement :strength="25"
                            type="rotate">
                <h1 ref="random-position">P</h1>
            </KinesisElement>
        </KinesisContainer>
        <KinesisContainer class="kc-name">
            <KinesisElement :strength="25"
                            type="rotate">
                <h1 ref="random-position">A</h1>
            </KinesisElement>
        </KinesisContainer>
        <KinesisContainer class="kc-name">
            <KinesisElement :strength="25"
                            type="rotate">
                <h1 ref="random-position">K</h1>
            </KinesisElement>
        </KinesisContainer>
        <KinesisContainer class="kc-name">
            <KinesisElement :strength="25"
                            type="rotate">
                <h1>&nbsp;</h1>
            </KinesisElement>
        </KinesisContainer>
        <KinesisContainer class="kc-name">
            <KinesisElement :strength="25"
                            type="rotate">
                <h1 ref="random-position">B</h1>
            </KinesisElement>
        </KinesisContainer>
    </div>
</template>

<style scoped>

.name {
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    text-align: center;
    font-size: 5rem;
    color: #333;
    margin: 0;
}
    
</style>
<script setup lang="ts">
import {KinesisContainer, KinesisElement} from 'vue-kinesis';

</script>
<template>
    <div class="flex-element-one">
        <KinesisContainer class="kinesis-container">
            <section>
                <KinesisElement :strength="50"
                                type="depth">
                    <h1>THIPAK B</h1>
                </KinesisElement>
                <h2>:Full-Stack Developer</h2>
            </section>
        </KinesisContainer>
    </div>
    <div id="inProgress">
       <p> Work in Progress !! </p>
    </div>
</template>

<style scoped>
.flex-element-one {
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
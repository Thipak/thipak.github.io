<script setup lang="ts">
</script>
<template>
    <div class="flex-element-one">
        <h1>THIPAK B</h1>
        <h2>Full-Stack Developer</h2>
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

h1 {
    text-align: center;
    font-size: 5rem;
    color: #333;
}
h2 {
    text-align: center;
    font-size: 2rem;
    color: #333;
}
    
</style>
<script setup lang="ts">
</script>
<template>
    <div class="flex-element-one">
        <section>
            <h1>THIPAK B</h1>
            <h2><a href="mailto:thipak01balaji@gmail.com">thipak01balaji@gmail.com</a></h2>
            <h2>LinkedIn: <a href="https://www.linkedin.com/in/thipak/">thipak</a></h2>
            <h2>GitHub: <a href="https://github.com/Thipak/">Thipak</a></h2>
            <h2><a href="https://github.com/Thipak/Thipak.github.io">Portfolio</a></h2>
            

        </section>
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
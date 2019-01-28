<template>
    <div class='circle'></div>
</template>


<script>

export default {
    name: "Loader"
}
</script>

<style scoped>
    .circle {
    background-color: #dcd9d9;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: relative;
    display: inline-block;
    text-align: center;
    margin-top: 70px;
    margin-right: 70px;
    }

    .circle::after {
    content: '';
    display: block;
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: none;
    border: 4px solid transparent;
    border-top-color: #4CAF50;
    border-bottom-color: #4CAF50;
    left: -4px;
    top: -4px;
    animation: spinny 2s linear infinite;
    }

    @keyframes spinny {
    0% {
        transform: rotate(0deg) scale(1.1);
    }
    50% {
        transform: rotate(45deg) scale(1.5);
    }
    
    100% {
        transform: rotate(360deg) scale(1.1);
    }
    }
</style>

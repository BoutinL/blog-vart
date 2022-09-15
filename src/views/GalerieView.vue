<template>
<div class="galerie">
    <h1>Galerie</h1>
    <hr>
</div>
</template>

<script>
export default {
    name: 'GalerieView',
}
</script>

<style scoped>
.galerie{
    background-color: #62a1a9;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
h1{
    font-size: 1.5rem;
    text-align: left;
}
hr{
    border: 1px solid #62a1a9;
    border-radius: 2rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
</style>
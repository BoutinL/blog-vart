<template>
  <section class="page-accueil">
    <AccueilDeco />
  </section>
</template>

<script>
import AccueilDeco from '@/components/AccueilDeco.vue'

export default {
  name: 'AccueilView',
  components: {
    AccueilDeco,
  }
}
</script>

<style scoped>
.page-accueil{
  background-color: #c5b2ec;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
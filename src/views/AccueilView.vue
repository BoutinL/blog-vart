<template>
  <section class="page-accueil">
    <AccueilDeco />
    <AccueilUser />
    <AccueilAdmin />
  </section>
</template>

<script>
import AccueilDeco from '@/components/AccueilDeco.vue'
import AccueilUser from '@/components/AccueilUser.vue'
import AccueilAdmin from '@/components/AccueilAdmin.vue'

export default {
  name: 'AccueilView',
  components: {
    AccueilDeco,
    AccueilUser,
    AccueilAdmin,
  }
}
</script>

<style scoped>
.page-accueil{
  background-color: #cbcbcb;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
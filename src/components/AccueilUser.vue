<template>
  <h1>Accueil User</h1>
  <hr>
  <h2>Bienvenu(e) username</h2>
  <section class="profil">
    <form class="identifiants">
      <label class="collumn">
        <span>Photo de profil</span>
        <input type="file" name="avatar" accept="image/png, image/jpeg">
      </label>
      <label>
        <span>Nom</span>
        <input type="text" name="firstname">
      </label>
      <label>
        <span>Prénom</span>
        <input type="text" name="lastname">
      </label>
        <label>
        <span>Nom d'utilisateur</span>
        <input type="text" name="username" required>
      </label>
      <label>
        <span>Email</span>
        <input type="text" name="email" required>
      </label>
      <input type="submit" name="submit" value="Modifier" class="btn-submit">
    </form>
  </section>
</template>

<script>
export default {
  name: 'AccueilUser',
}
</script>

<style scoped>
.profil{
    background-color: #c5b2ec;
}
h1{
    font-size: 1.5rem;
    text-align: left;
}
hr{
    border: 1px solid #9370dc;
    border-radius: 2rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
.identifiants{
    border: none;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
input{
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 10px;
    height: 2rem;
    text-align: center;
    border: none;
}

input:not([type=text],[type=submit]) {
  border-radius: 0px;
  color: transparent;
}

.btn-submit{
    background-color: #9370dc;
    color: white;
    box-shadow: 2px 2px 2px black;
}

.btn-submit:hover{
    background-color: #a48bdb;
}
</style>

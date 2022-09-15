<template>
  <header class="header">
    <nav>
      <input class="menu-bouton" type="checkbox" id="menu-bouton" />
      <label class="menu-icone" for="menu-bouton"><span class="nav-icone"></span></label>
      <h1 class="titre">Blog Vart</h1>
      <ul class="menu">
        <router-link to="/">Accueil</router-link>
        <router-link to="/galerie">Galerie</router-link>
        <router-link to="/inscription">Inscription</router-link>
        <router-link to="/connexion">Connexion</router-link>
      </ul>
    </nav>
  </header>
  <router-view/>
  <footer class="footer">
    <span>Copyright©2022. Tous droits réservés à V.Feldin</span>
  </footer>
</template>

<script>
export default{
  name: "App",
  beforeMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/10/users/')
    .then(response => response.json())
    .then(json => {
      this.data = json ;
      console.log(this.data);
      this.$store.commit("setUsersRequest", this.data);  
    })
  }
} 
</script>
<style >
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 18px;
}

a{
  color: #62a1a9;
  font-weight: 900;
}

.titre{
  color: #62a1a9;
  text-align: center;
  font-size: 2rem;
  padding-bottom: 2rem;
}

/* header */

.header {
  background-color: #131316;
}

.footer {
    background-color: #131316;
    color: #62a1a9;
    text-align: center;
    padding: 1.5rem;
}

.header h1::before {
    display: block;
    text-align: center;
    font-size: 1rem;
    padding-top: 1rem;
}

.header ul {
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  list-style: none;
  overflow: hidden;
  background-color: #1C1C21;
}

.header ul a {
    display: block;
    text-decoration: none;
    margin: 1rem;
}

  /* menu */

.header .menu {
    max-height: 0;
    transition: max-height .5s ease-out;
}

  /* menu icone */

.header .menu-icone {
    cursor: pointer;
    display: block;
    padding: 1.75rem 1.25rem;
    position: relative;
    user-select: none;
}

.header .menu-icone .nav-icone { /* Définit le span initial */
    background: #62a1a9;
    display: block;
    height: 2px;
    position: relative;
    width: 1.375rem;
}

.header .menu-icone .nav-icone:before,
.header .menu-icone .nav-icone:after { /* Définit les spans ajoutés */
    background: #62a1a9;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
}

/* Placer les span au-dessus et au-dessous du span initial */
.header .menu-icone .nav-icone:before {
    top: -5px;
}

.header .menu-icone .nav-icone:after {
    top: 5px;
}

  /* menu bouton */

.header .menu-bouton {
    display: none;
}

.header .menu-bouton:checked ~ .menu {
    max-height: 15rem; /* définit la taille du conteneur des liens*/
}

.header .menu-bouton:checked ~ .menu-icone .nav-icone {
    background: transparent;/* Fait disparaître le span initial*/
}

.header .menu-bouton:checked ~ .menu-icone .nav-icone:before {
    transform: rotate(-45deg); /* fait pivoter le span before de 45 degrès ver la gauche*/
}

.header .menu-bouton:checked ~ .menu-icone .nav-icone:after {
    transform: rotate(45deg);/* fait pivoter le span after de 45 degrès ver la droite*/
}

.header .menu-bouton:checked ~ .menu-icone .nav-icone:before,
.header .menu-bouton:checked ~ .menu-icone .nav-icone:after {
    top: 0; /* Déplace les span pour les superposer */
}

/* 48rem = 768px qui est la résolution min des écran pc*/

@media (min-width: 48rem) {
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
            padding: 2rem;
    }
    .header h1::before {
        padding: 1.25rem 1.875rem;
    }
    .header ul {
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: hidden;
        display: flex;
        flex-direction: row;
    }
    .header li {
        float: left;
    }
    .header li a {
        padding: 1.25rem 1.875rem;
        border-right: 1px solid #f4f4f4;
    }
    .header .menu {
        clear: none;
        float: right;
        max-height: none;
    }
    .header .menu-icone {
        display: none;
    }
}

</style>

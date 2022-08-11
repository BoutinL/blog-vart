<template>
  <nav>
    <router-link to="/">Accueil</router-link> |
    <router-link to="/form">Form</router-link> |
    <router-link to="/galerie">Galerie</router-link>
  </nav>
  <router-view/>
</template>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 18px;
  }
</style>

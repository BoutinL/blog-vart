import { createRouter, createWebHashHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import GalerieView from '../views/GalerieView.vue'
import InscriptionView from '../views/InscriptionView.vue'
import ConnexionView from '../views/ConnexionView.vue'

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: AccueilView
  },
  {
    path: '/galerie',
    name: 'galerie',
    component: GalerieView
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: InscriptionView
  },
  {
    path: '/connexion',
    name: 'connexion',
    component: ConnexionView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

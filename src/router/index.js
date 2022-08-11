import { createRouter, createWebHashHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import FormView from '../views/FormView.vue'
import GalerieView from '../views/GalerieView.vue'

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: AccueilView
  },
  {
    path: '/form',
    name: 'form',
    component: FormView
  },
  {
    path: '/galerie',
    name: 'galerie',
    component: GalerieView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

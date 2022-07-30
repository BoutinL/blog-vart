import { createRouter, createWebHashHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: AccueilView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

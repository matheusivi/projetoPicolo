// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../src/components/Home.vue'
import Assistir from '../src/components/Assistir.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home,
    beforeEnter: (to, from, next) => {
      console.log('Navegando para Home:', to, from)
      next()
    }
  },
  { 
    path: '/assistir', 
    name: 'Assistir', 
    component: Assistir,
    beforeEnter: (to, from, next) => {
      console.log('Navegando para Assistir:', to, from)
      next()
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('Mudança de rota:', { from: from.path, to: to.path })
  next()
})

export default router
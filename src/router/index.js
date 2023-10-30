import { createRouter, createWebHistory } from 'vue-router'
import Today from '@/pages/Today.vue'
import Home from '@/pages/Home.vue'
import Rates from '@/pages/Rates.vue'
import Search from '@/pages/Search.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Today
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/Rates',
      component: Rates
    },
    {
      path: '/Search',
      component: Search
    }
  ]
})

export default router

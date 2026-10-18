import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'inici', component: HomeView },
    {
      path: '/videojocs',
      name: 'videojocs',
      component: () => import('../views/VideojocsView.vue'),
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
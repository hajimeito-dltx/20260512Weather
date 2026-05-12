import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/080000',
      name: 'area1',
      component: () => import('../views/Area2View.vue'),
    },
    {
      path: '/090000',
      name: 'area2',
      component: () => import('../views/Area2View.vue'),
    },
    {
      path: '/100000',
      name: 'area3',
      component: () => import('../views/Area2View.vue'),
    },
    {
      path: '/110000',
      name: 'area4',
      component: () => import('../views/Area2View.vue'),
    },
    {
      path: '/120000',
      name: 'area5',
      component: () => import('../views/Area2View.vue'),
    },
    {
      path: '/130000',
      name: 'area6',
      component: () => import('../views/Area2View.vue'),
    },
    {
      path: '/140000',
      name: 'area7',
      component: () => import('../views/Area2View.vue'),
    },
    {
      path: '/190000',
      name: 'area8',
      component: () => import('../views/Area2View.vue'),
    },
    {
      path: '/200000',
      name: 'area9',
      component: () => import('../views/Area2View.vue'),
    },
  ],
})


export default router

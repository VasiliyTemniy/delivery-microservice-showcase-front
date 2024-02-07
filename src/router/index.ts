import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/control',
      name: 'control',
      component: () => import('../views/ControlView.vue')
    },
    {
      path: '/tracking',
      name: 'tracking',
      component: () => import('../views/TrackingView.vue')
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: () => import('../views/DeliveryView.vue')
    }
  ]
});

export default router;

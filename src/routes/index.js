import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Jobs from '@/views/Jobs.vue'
import AddJob from '@/views/AddJob.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs,
    },
    {
      path: '/add-job',
      name: 'add-job',
      component: AddJob,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: '',
    },
  ],
})

export default router

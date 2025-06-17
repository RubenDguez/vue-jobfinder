import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Jobs from '@/views/Jobs.vue'
import AddJob from '@/views/AddJob.vue'
import NotFound from '@/Pages/NotFound.vue'
import Job from '@/views/Job.vue'
import UpdateJob from '@/views/UpdateJob.vue'

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
      path: '/job/:id',
      name: 'jobsById',
      component: Job,
    },
    {
      path: '/job/update/:id',
      name: 'updateJob',
      component: UpdateJob,
    },
    {
      path: '/add-job',
      name: 'add-job',
      component: AddJob,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFound,
    },
  ],
})

export default router

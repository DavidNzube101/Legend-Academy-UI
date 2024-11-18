import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '../views/dashboard.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('@/views/Courses.vue')
  },
  {
    path: '/assignments',
    name: 'Assignments',
    component: () => import('@/views/Assignments.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('@/views/Calendar.vue')
  },
  // In your router/index.ts
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('@/views/courses/index.vue')
  },
  {
    path: '/courses/:id',
    name: 'CourseDetail',
    component: () => import('@/views/courses/[id].vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
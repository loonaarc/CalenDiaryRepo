import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/main.vue'
import TestView from '@/views/TestView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test',
    name: 'TestView',
    component: TestView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
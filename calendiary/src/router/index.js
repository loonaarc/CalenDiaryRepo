import HomeView from '@/views/main.vue'
import TestView from '@/views/TestView.vue'
import Users from '@/views/UserView.vue'
import { createRouter, createWebHistory } from 'vue-router'

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
  {
    path: '/users',
    name: 'Users',
    component: Users,
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
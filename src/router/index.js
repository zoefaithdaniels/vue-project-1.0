import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/Resume',
    name: 'Resume',
    component: () => import('../views/ResumeView.vue')
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: () => import('../views/ProjectsView.vue')
  },
  {
    path: '/Testimonials',
    name: 'Testimonials',
    component: () => import('../views/TestimonialView.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  },
  
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

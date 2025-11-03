import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../pages/Home.vue') },
  { path: '/projects', name: 'projects', component: () => import('../pages/Projects.vue') },
  { path: '/project/:slug', name: 'project', component: () => import('../pages/Projects.vue') },
  { path: '/about', name: 'about', component: () => import('../pages/About.vue') },
  { path: '/resume', name: 'resume', component: () => import('../pages/Resume.vue') },
  { path: '/contact', name: 'contact', component: () => import('../pages/Contact.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { return { top: 0 } },
})

export default router
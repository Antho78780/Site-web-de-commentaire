import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import("../views/loginView.vue")
  },
  {
    path: '/register',
    name: 'register',
    component: () => import("../views/registerView.vue")
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

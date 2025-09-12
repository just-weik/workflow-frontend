import { createRouter, createWebHistory } from 'vue-router'
import views from './views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: views.Login,
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: views.ForgotPassword,
    },
    {
      path: '/',
      name: 'home',
      component: views.Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('@/views/About.vue'),
      component: views.About,
    },

    // Catch-all route (must be last)
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: views.NotFound,
    },
  ]
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import HomeView from '../views/HomeView.vue'
import SignInView from '../views/SigninView.vue'
import SignUpView from '../views/SignupView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,

      // nested routes signin and signup
      children: [
        {
          path: 'signin',
          name: 'signin',
          component: SignInView
        },
        {
          path: 'signup',
          name: 'signup',
          component: SignUpView
        }
      ]
    }
  ]
})

export default router

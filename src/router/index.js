import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from '@/views/layouts/DefaultLayout'
import AuthLayout from '@/views/layouts/AuthLayout/AuthLayout'
import ErrorLayout from '@/views/layouts/ErrorLayout'

Vue.use(VueRouter)

// component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    meta: {
      layout: 'default'
    }
  {
    path: '/auth',
    name: 'Auth',
    component: AuthLayout,
    children: [
      {
        path: 'registration',
        name: 'Registation',
        component: () => import('@/views/Registation/')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/Login/index.vue')
      },
      {
        path: '',
        redirect: { name: 'Login' }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    meta: {
      layout: 'default'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

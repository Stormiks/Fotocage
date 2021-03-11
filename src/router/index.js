import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/'

import DefaultLayout from '@/views/layouts/DefaultLayout'
import AuthLayout from '@/views/layouts/AuthLayout/AuthLayout'
import ErrorLayout from '@/views/layouts/ErrorLayout'

Vue.use(VueRouter)

// component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      }
    ]
  },
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
    component: () => import('@/views/About.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '*',
    name: 'Error-Not-Found',
    component: () => import('@/views/Errors/ErrorNotFound.vue'),
    meta: {
      layout: 'error'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// eslint-disable-next-line no-multiple-empty-lines
router.beforeEach((to, from, next) => {
  if (store.state.isLogin) {
    if (to.name === 'Login') {
      next({ name: 'Home' })
    } else {
      next()
    }
  } else {
    if (to.name === 'Login') {
      next()
    } else next({ name: 'Login' })
  }
})

// eslint-disable-next-line no-multiple-empty-lines
export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/'

import DefaultLayout from '@/views/layouts/DefaultLayout/DefaultLayout'
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
        component: () => import('@/views/Home.vue'),
      },
      {
      {
        path: 'gallery',
        name: 'Gallery-Images',
        component: () => import('@/views/GalleryImages/'),
      },
    ],
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthLayout,
    children: [
      {
        path: 'registration',
        name: 'Registation',
        component: () => import('@/views/Registation/'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/Login/'),
      },
      {
        path: '',
        redirect: { name: 'Login' },
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '*',
    component: ErrorLayout,
    children: [
      {
        path: 'page-not-found',
        name: 'Error-Not-Found',
        component: () => import('@/views/Errors/ErrorNotFound.vue'),
      },
      {
        path: '',
        redirect: { name: 'Error-Not-Found' },
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// eslint-disable-next-line no-multiple-empty-lines
router.beforeEach((to, from, next) => {
  if (store.state.isLogin) {
    if (to.name === 'Auth') {
      next({ name: 'Home' })
    } else {
      next()
    }
  } else {
    if (to.name === 'Login' || to.name === 'Registation') {
      next()
    } else next({ name: 'Login' })
  }
})

// eslint-disable-next-line no-multiple-empty-lines
export default router

import Vue from 'vue'
import store from '@/store/'
import 'assets/css/vendor/nprogress.less'
import NProgress from 'assets/js/nprogress.js'

function isAuthUser(route, status, next) {
  if (status) {
    if (route === 'Login' || route === 'Registation')
      next({ name: 'Home' })
    else next()
    NProgress.inc(0.5)
  } else {
    if (route === 'Login' || route === 'Registation')
      next()
    else next({ name: 'Login' })
    NProgress.inc(0.5)
  }
}

// eslint-disable-next-line no-multiple-empty-lines
export const before = function (to, from, next) {
  NProgress.set(0.0)
  if (store.state.isLogin)
    store.dispatch('getAuthStatusByServer').then(status => {
      isAuthUser(to.name, status, next)
    })
  else isAuthUser(to.name, store.state.isLogin, next)
}

export const after = (to, from) => {
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || ''
    NProgress.set(1.0)
  })
}

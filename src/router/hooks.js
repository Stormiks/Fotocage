import Vue from 'vue'
import store from '@/store/'
import checkStateAuth from './middleware/auth'
import 'assets/css/vendor/nprogress.less'
import NProgress from 'assets/js/nprogress.js'

// eslint-disable-next-line no-multiple-empty-lines
export const before = function (to, from, next) {
  NProgress.set(0.0)
  const checkRole = to.matched.some(record => {
    return record.meta.role
  })
  const role = to.meta.role

  console.log(checkRole);
  console.log(role);

  if (checkRole && Array.isArray(role)) {
    NProgress.inc(0.4)
    if (role[0] === 'auth') {
      NProgress.inc(0.6)
      if (store.state.isLogin) {
        store.dispatch('getAuthStatusByServer').then(status => {
          NProgress.inc(0.8)
          checkStateAuth(to.name, status, next)
        })
      } else {
        NProgress.inc(0.8)
        checkStateAuth(to.name, store.state.isLogin, next)
      }
    } else if (role[0] === 'guest') {
      NProgress.inc(0.6)
      next()
    } else {
      NProgress.inc(0.6)
      next({ name: 'Login' })
    }
  } else {
    NProgress.inc(0.4)
    next()
  }
}

export const after = (to, from) => {
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || ''
  })
  NProgress.set(1.0)
}

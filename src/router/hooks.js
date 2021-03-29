import Vue from 'vue'
import store from '@/store/'
import checkStateAuth from './middleware/auth'
import 'assets/css/vendor/nprogress.less'
import NProgress from 'assets/js/nprogress.js'

// eslint-disable-next-line no-multiple-empty-lines
export const before = function (to, from, next) {
  NProgress.set(0.0)
  if (store.state.isLogin) {
    store.dispatch('getAuthStatusByServer').then(status => {
      checkStateAuth(to.name, status, next)
      NProgress.inc(0.4)
    })
  } else {
    checkStateAuth(to.name, store.state.isLogin, next)
    NProgress.inc(0.4)
  }
}

export const after = (to, from) => {
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || ''
    NProgress.set(1.0)
  })
}

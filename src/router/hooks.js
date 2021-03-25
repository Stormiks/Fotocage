import Vue from 'vue'
import store from '@/store/'

function isAuthUser(route, status, next) {
  if (status)
    if (route === 'Login' || route === 'Registation')
      next({ name: 'Home' })
    else next()
  else
  if (route === 'Login' || route === 'Registation')
    next()
  else next({ name: 'Login' })
}

// eslint-disable-next-line no-multiple-empty-lines
export const before = (to, from, next) => {
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
  })
}

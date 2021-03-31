import Vue from 'vue'
// import store from '@/store/'
import 'assets/css/vendor/nprogress.less'
import NProgress from 'assets/js/nprogress.js'

// eslint-disable-next-line no-multiple-empty-lines
export const before = function (to, from, next) {
  if (to.name) NProgress.start()

  next()
}

// export const resolve = function (to, from, next) {
//   if (to.name) NProgress.start()

//   next()
// }

export const after = (to, from) => {
  console.dir(to, from)
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || ''
  })
  NProgress.done()
}

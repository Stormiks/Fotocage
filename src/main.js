import 'assets/css/vendor/tailwind.css'
import 'assets/css/style.css'
import 'assets/styl/style.styl'

import Vue from 'vue'
import App from '@/App.vue'

import VueAxios from 'vue-axios'
import axios from 'axios'

import RouterMiddleware from 'pkg/vue-router-middleware/'
import router from '@/router'
import store from '@/store'

import { makeServer } from './server'

// import VueJSModal from 'plugins/VueJSModal/'

/**
 * Use plugins in VueJS
 */
Vue.use(RouterMiddleware, router)
// Vue.use(VueJSModal)
Vue.use(VueAxios, axios)

// if (process.env.NODE_ENV === 'development') makeServer('development')
// else if (process.env.NODE_ENV === 'test') makeServer('test')
makeServer()

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

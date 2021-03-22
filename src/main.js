import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import { makeServer } from './server'

import App from '@/App.vue'

import router from '@/router'
import store from '@/store'

import '@/assets/css/vendor/tailwind.css'
import '@/assets/css/style.css'

Vue.config.productionTip = true

/**
 * Use plugins in VueJS
 */
Vue.use(VueAxios, axios)

makeServer()
// if (process.env.NODE_ENV === 'development') makeServer()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

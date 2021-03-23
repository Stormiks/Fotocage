import Vue from 'vue'

import 'assets/css/vendor/tailwind.css'
import 'assets/css/style.css'
import 'assets/styl/style.styl'

import axios from 'axios'
import VueAxios from 'vue-axios'
import { makeServer } from './server'

import App from '@/App.vue'

import router from '@/router'
import store from '@/store'

Vue.config.productionTip = true

/**
 * Use plugins in VueJS
 */
Vue.use(VueAxios, axios)

if (process.env.NODE_ENV === 'development') makeServer('development')
else if (process.env.NODE_ENV === 'test') makeServer('test')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

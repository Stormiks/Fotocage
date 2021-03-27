import 'assets/css/vendor/tailwind.css'
import 'assets/css/style.css'
import 'assets/styl/style.styl'

import Vue from 'vue'
import App from '@/App.vue'

import VueJSModal from 'plugins/VueJSModal/'
import VueAxios from 'vue-axios'
import axios from 'axios'

import router from '@/router'
import store from '@/store'

import { makeServer } from './server'

/**
 * Use plugins in VueJS
 */
Vue.use(VueJSModal)
Vue.use(VueAxios, axios)

// if (process.env.NODE_ENV === 'development') makeServer('development')
// else if (process.env.NODE_ENV === 'test') makeServer('test')
makeServer()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

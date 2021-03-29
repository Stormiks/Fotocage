import 'assets/css/vendor/tailwind.css'
import 'assets/css/style.css'
import 'assets/styl/style.styl'

import Vue from 'vue'
import App from '@/App.vue'

import VueProgressBar from 'vue-progressbar'
import VueJSModal from 'plugins/VueJSModal/'
import VueAxios from 'vue-axios'
import axios from 'axios'

import router from '@/router'
import store from '@/store'

import { makeServer } from './server'

/**
 * Use plugins in VueJS
 */
const optionsProgressBar = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

Vue.use(VueProgressBar, optionsProgressBar)
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

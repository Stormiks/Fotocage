import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from '@/App.vue'
import DefaultLayout from '@/layouts/DefaultLayout'
import ErrorLayout from '@/layouts/ErrorLayout'

import router from '@/router'
import store from '@/store'
import '@/assets/css/vendor/tailwind.css'

Vue.component('default', DefaultLayout)
Vue.component('error', ErrorLayout)

Vue.config.productionTip = true

/**
 * Use plugins in VueJS
 */
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

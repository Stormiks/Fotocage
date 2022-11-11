import Vue from 'vue'
import VueRouter from 'vue-router'

import { before, after } from './hooks'
import { routes } from './routes'

Vue.use(VueRouter)

const options = {
  mode: process.env.NODE_ENV === 'development' ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes
}

const router = new VueRouter(options)

router.beforeEach(before)
// router.beforeResolve(resolve)
router.afterEach(after)

export default router

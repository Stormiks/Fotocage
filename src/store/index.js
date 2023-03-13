import Vue from 'vue'
import Vuex from 'vuex'
import { routes } from '@/router/routes'
import routesHelper from './routes-by-role-helper'
import user from './user'

Vue.use(Vuex)

const globalStore = {
  state: () => ({
    images: [],
    routesMenu: []
  }),
  mutations: {
    setRoutes({ routesMenu }, routes) {
      routesMenu = routes
    }
  },
  getters: {
    routesAccessByUser({ user }) {
      const pubRoutes = routes[0].children

      return routesHelper(user.role, pubRoutes)
    }
  }
}

const optionsVuex = {
  ...globalStore,
  modules: {
    user: user
  }
}

const instanceVuex = new Vuex.Store(optionsVuex)

export default instanceVuex

import Vue from 'vue'
import Vuex from 'vuex'
import { routes } from '@/router/routes'
import { statusSession } from '@/api/'
import routesHelper from './routes-by-role-helper'

const store = {
  state: {
    isLoggedIn: localStorage.getItem('loggin') !== 'undefined' ? !!JSON.parse(localStorage.getItem('loggin')) : false,
    images: [],
    userId: localStorage.getItem('id') !== 'undefined' ? JSON.parse(localStorage.getItem('id')) || null : null,
    role: localStorage.getItem('role') || 'guest',
    timeStampSession: localStorage.getItem('timeStampSession') || null
  },
  mutations: {
    setLogin(state, { id, auth, role, timeStampSession }) {
      state.isLoggedIn = auth
      state.userId = id
      state.role = role
      state.timeStampSession = timeStampSession
      localStorage.setItem('loggin', auth)
      localStorage.setItem('id', id)
      localStorage.setItem('role', role)
      localStorage.setItem('timeStampSession', timeStampSession)
    },
    setRoutes(state, routes) {
      state.routesMenu = routes
    }
  },
  actions: {
    updateStatusLogin({ commit }, statusAuth) {
      commit('setLogin', statusAuth)
    },
    refreshSession({ state, commit, dispatch }) {
      return new Promise((resolve, reject) => {
        statusSession({
          id: state.userId
        }, (user) => {
          if (!user) dispatch('logout')
          else commit('setLogin', user)

          resolve(!!user)
        })
      })
    },
    logout({ commit }, status = false) {
      return new Promise((resolve, reject) => {
        commit('setLogin', {
          auth: false,
          id: null,
          role: 'guest',
          timeStampSession: null
        })
        resolve(!status)
      })
    }
  },
  getters: {
    routesAccessByUser(state) {
      const pubRoutes = routes[0].children

      return routesHelper(state.role, pubRoutes)
    }
  },
  modules: {
  }
}

Vue.use(Vuex)

export default new Vuex.Store(store)

import Vue from 'vue'
import Vuex from 'vuex'
import { routes } from '@/router/routes'
import routesHelper from './routes-by-role-helper'

const store = {
  state: {
    isLoggedIn: !!JSON.parse(localStorage.getItem('loggin')),
    images: [],
    userId: JSON.parse(localStorage.getItem('id')) || null,
    role: localStorage.getItem('role') || 'guest',
    login: null,
    avatar: null
  },
  mutations: {
    setLogin(state, { id, auth, role, login, avatar }) {
      state.isLoggedIn = auth
      state.userId = id
      state.role = role
      state.login = login
      state.avatar = avatar
      localStorage.setItem('loggin', auth)
      localStorage.setItem('id', id)
      localStorage.setItem('role', role)
    },
    setRoutes(state, routes) {
      state.routesMenu = routes
    }
  },
  actions: {
    updateStatusLogin({ commit }, statusAuth) {
      commit('setLogin', statusAuth)
    },
    getAuthStatusByServer({ state, commit }) {
      return Vue.axios.get(`/api/auth/${state.userId}/status`).then(res => {
        commit('setLogin', res.data)

        return res.data.auth
      })
    },
    logout({ commit }, status = false) {
      return new Promise((resolve, reject) => {
        commit('setLogin', {
          auth: false,
          id: null,
          role: 'guest',
          login: null,
          avatar: null
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

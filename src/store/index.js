import Vue from 'vue'
import Vuex from 'vuex'
import { routes } from '@/router/routes'

const store = {
  state: {
    isLoggedIn: JSON.parse(localStorage.getItem('loggin')) || false,
    images: [],
    userId: JSON.parse(localStorage.getItem('id')) || null,
    role: localStorage.getItem('role') || 'guest',
    routesMenu: []
  },
  mutations: {
    setLogin(state, { id, auth, role }) {
      state.isLoggedIn = auth
      state.userId = id
      state.role = role
      localStorage.setItem('loggin', auth)
      localStorage.setItem('id', id)
      localStorage.setItem('role', role)
    },
    setRoutes(state, route) {
      state.routesMenu.push(route)
    }
  },
  actions: {
    updateStatusLogin({ commit }, statusAuth) {
      console.log('getAuthStatusByServer', statusAuth);
      commit('setLogin', statusAuth)
    },
    getAuthStatusByServer({ state, commit }) {
      return Vue.axios.get(`/api/auth/${state.userId}/status`).then(res => {
        commit('setLogin', res.data)

        return res.data.auth
      })
    },
    generateRoutes({ state, commit }) {
      const pubRoutes = routes[0].children
      const userRole = state.role

      const getRoutesByRole = (arr) => {
        arr.some(r => {
          if (!Object.prototype.hasOwnProperty.call(r, 'meta') && r.children)
            getRoutesByRole(r.children)

          if (r.meta) {
            const permissions = r.meta.permissions

            if (Array.isArray(permissions) && permissions) {
              permissions.forEach(i => {
                console.log(userRole)
                if (i.role === userRole) commit('setRoutes', r)
              })
            }
          }
        })
      }

      getRoutesByRole(pubRoutes)
    },
    logout({ commit }, status = false) {
      return new Promise((resolve, reject) => {
        commit('setLogin', {
          auth: false,
          id: null,
          role: 'guest'
        })
        resolve(!status)
      })
    }
  },
  modules: {
  }
}

Vue.use(Vuex)

export default new Vuex.Store(store)

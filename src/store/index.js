import Vue from 'vue'
import Vuex from 'vuex'

const storageLogin = JSON.parse(localStorage.getItem('loggin')) || false
const storageUserId = JSON.parse(localStorage.getItem('id')) || null

const store = {
  state: {
    isLogin: storageLogin,
    images: [],
    userId: storageUserId
  },
  mutations: {
    setLogin(state, { id, auth }) {
      state.isLogin = auth
      state.userId = id
      localStorage.setItem('loggin', auth)
      localStorage.setItem('id', id)
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
          id: null
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

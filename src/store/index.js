import Vue from 'vue'
import Vuex from 'vuex'

const storageLogin = JSON.parse(localStorage.getItem('loggin')) || false

const store = {
  state: {
    isLogin: storageLogin
  },
  mutations: {
    setLogin(state, bool) {
      state.isLogin = bool
      localStorage.setItem('loggin', bool)
    }
  },
  actions: {
    updateStatusLogin({ commit }, status) {
      commit('setLogin', status)
    },
    logout({ commit }, status = false) {
      return new Promise((resolve, reject) => {
        commit('setLogin', status)
        resolve(!status)
      })
    }
  },
  modules: {
  }
}

Vue.use(Vuex)

export default new Vuex.Store(store)

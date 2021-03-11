import Vue from 'vue'
import Vuex from 'vuex'

const store = {
  state: {
    isLogin: false
  },
  mutations: {
    setLogin(state, bool) {
      state.isLogin = bool
    }
  },
  actions: {
    updateStatusLogin({ commit }, status) {
      commit('setLogin', status)
    }
  },
  modules: {
  }
}


Vue.use(Vuex)

export default new Vuex.Store(store)

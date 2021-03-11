import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
})

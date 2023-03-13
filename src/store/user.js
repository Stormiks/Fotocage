import { statusSession } from '@/api/'

const user = {
  namespaced: true,
  state: () => ({
    isLoggedIn: !!JSON.parse(localStorage.getItem('login')),
    userId: JSON.parse(localStorage.getItem('id')) || null,
    role: localStorage.getItem('role') || 'guest',
    timeStampSession: localStorage.getItem('timeStampSession') || null
  }),
  mutations: {
    setLogin(state, { id, auth, role, timeStampSession }) {
      state.isLoggedIn = auth
      state.userId = id
      state.role = role
      state.timeStampSession = timeStampSession
      localStorage.setItem('login', auth)
      localStorage.setItem('id', id)
      localStorage.setItem('role', role)
      localStorage.setItem('timeStampSession', timeStampSession)
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
  }
}

export default user

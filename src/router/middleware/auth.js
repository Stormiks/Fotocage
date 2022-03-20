import store from '@/store'

const isLoggedIn = () => !!store.state.isLoggedIn

const authMiddleware = ({ redirect }) => {
  if (isLoggedIn())
    store.dispatch('refreshSession').then((status) => {
      if (!status) redirect({ name: 'Login' })
      else redirect()
    })
  else if (!isLoggedIn()) redirect({ name: 'Login' })
}

export default authMiddleware

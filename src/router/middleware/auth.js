import store from '@/store'

const isLoggedIn = () => !!store.state.isLoggedIn

const authMiddleware = ({ redirect }) => {
  if (!isLoggedIn()) redirect({ name: 'Login' })
}

export default authMiddleware

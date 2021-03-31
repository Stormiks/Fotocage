import store from '@/store'

const isLoggedIn = () => !!store.state.isLoggedIn

const guestMiddleware = async ({ redirect }) => {
  if (isLoggedIn()) redirect({ name: 'Home' })
}

export default guestMiddleware

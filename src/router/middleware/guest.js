import store from '@/store'

const isLoggedIn = () => !!store.state.isLoggedIn

const guestMiddleware = async ({ redirect }) => {
  if (await isLoggedIn()) await redirect({ name: 'Home' })
}

export default guestMiddleware

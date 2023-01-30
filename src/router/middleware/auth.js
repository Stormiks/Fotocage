import store from '@/store'

const isLoggedIn = () => !!store.state.isLoggedIn

const authMiddleware = async ({ redirect }) => {
  if (isLoggedIn())
    await store.dispatch('refreshSession').then((status) => {
      if (!status) redirect({ name: 'Login' })
      else redirect()
    })
  else if (!await isLoggedIn()) await redirect({ name: 'Login' })
}

export default authMiddleware

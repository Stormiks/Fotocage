import store from '@/store'

const { user: moduleUser } = store.state
const isLoggedIn = () => !!moduleUser.isLoggedIn

const authMiddleware = async ({ redirect }) => {
  if (isLoggedIn())
    await store.dispatch('user/refreshSession').then((status) => {
      if (!status) redirect({ name: 'Login' })
      else redirect()
    })
  else if (!await isLoggedIn()) await redirect({ name: 'Login' })
}

export default authMiddleware

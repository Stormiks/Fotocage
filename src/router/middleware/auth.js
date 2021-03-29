export default function isAuthUser(route, status, next) {
  if (status) {
    if (route === 'Login' || route === 'Registation')
      next({ name: 'Home' })
    else next()
  } else {
    if (route === 'Login' || route === 'Registation')
      next()
    else next({ name: 'Login' })
  }
}

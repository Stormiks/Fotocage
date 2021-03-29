import NProgress from 'assets/js/nprogress.js'

export default function isAuthUser(route, status, next) {
  if (status) {
    if (route === 'Login' || route === 'Registation') {
      NProgress.set(1.0)
      next({ name: 'Home' })
    } else {
      NProgress.set(1.0)
      next()
    }
  } else {
    console.dir('auth', route, status, next);
    if (route === 'Login' || route === 'Registation') {
      NProgress.set(1.0)
      next()
    } else {
      NProgress.set(1.0)
      next({ name: 'Login' })
    }
  }
}

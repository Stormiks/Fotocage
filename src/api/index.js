import axios from 'axios'

export const API = axios.create({
  baseURL: '/api'
})

export const login = (formData, done) => {
  API.post('/login', { ...formData }).then(res => {
    if (res.data.status) done({ user: res.data.user })
    else done({ error: true })
  }).catch(e => console.log(e))
}

export const register = (formData, done) => {
  API.post('/registration', { ...formData }).then(res => {
    if (res.status) {
      done({
        auth: true,
        id: res.data.user.id,
        role: res.data.user.role,
        login: res.data.user.login
      })
    } else done({ error: true })
  }).catch(e => console.log(e))
}

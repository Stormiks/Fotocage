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

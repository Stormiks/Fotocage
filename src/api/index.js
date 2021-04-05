import axios from 'axios'

export const API = axios.create({
  baseURL: '/api'
})

export const downloadImages = (data, cbProgress, done) => {
  API.put('/upload/image', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress: cbProgress
  }).then(res => {
    done(res)
  }).catch(err => {
    console.log('ERROR', err)
  })
}

export const images = (done) => {
  API.get('/images').then(res => {
    let images = res.data?.images

    if (!images.length) images = []

    done(images)
  }).catch(err => {
    done({ error: true })
    console.log(err)
  })
}

export const login = (formData, done) => {
  API.post('/login', { ...formData }).then(res => {
    if (res.data.status) done({ user: res.data.user })
    else done({ error: true })
  }).catch(e => console.log(e))
}

export const register = (formData, done) => {
  API.post('/registration', { ...formData }).then(res => {
    if (res.data.status) {
      done({
        auth: true,
        id: res.data.user.id,
        role: res.data.user.role,
        login: res.data.user.login
      })
    } else done({ error: true })
  }).catch(e => console.log(e))
}

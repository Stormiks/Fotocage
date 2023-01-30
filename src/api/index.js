import axios from 'axios'

const ENV = process.env

export const API = axios.create({
  baseURL: '/api'
})

export const downloadImages = (data, cbProgress, done) => {
  let configHeadersAPI = {
    onUploadProgress: cbProgress
  }

  if ('VUE_APP_ENV_FAKE_SERVER' in ENV)
    configHeadersAPI = Object.assign(configHeadersAPI, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

  API.put('/upload/image', data, configHeadersAPI)
    .then(res => done(res))
    .catch(err => {
      console.trace('[ERROR]: ', err)
    })
}

export const images = (done) => {
  API.get('/images').then(res => {
    let images = res.data?.images

    if (!images.length) images = []

    done(images)
  }).catch(err => {
    done({ error: true })
    console.trace('[ERROR]: ', err)
  })
}

export const login = (formData, done) => {
  API.post('/login', { ...formData }).then(res => {
    if (res.data.status) done({ user: res.data.user })
    else done({ error: true })
  }).catch(err => console.trace('[ERROR]: ', err))
}

export const register = (formData, done) => {
  API.post('/registration', { ...formData }).then(res => {
    if (res.data.status) done({
      id: res.data.user.id,
      auth: res.data.user.auth,
      role: res.data.user.role,
      timeStampSession: res.data.user.timeStampSession
    })
    else done({ error: true })
  }).catch(err => console.trace('[ERROR]: ', err))
}

export const statusSession = (user, done) => {
  API.get(`/auth/${user.id}/status`).then(res => {
    if (res.data.session) done({
      id: res.data.user.id,
      auth: res.data.user.auth,
      role: res.data.user.role,
      timeStampSession: res.data.user.timeStampSession
    })
    else done(res.data.session)
  }).catch(err => console.trace('[ERROR]: ', err))
}

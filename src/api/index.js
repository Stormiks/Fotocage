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
    else done(false)
  }).catch(e => {
    console.error(e)
    done(false)
  })
}

export const register = (formData, done) => {
  API.post('/registration', { ...formData }).then(res => {
    if (res.data.status) done({ user: res.data.user })
    else done({ error: true })
  }).catch(e => console.log(e))
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
  }).catch(e => {
    console.error(e)
    done(false)
  })
}

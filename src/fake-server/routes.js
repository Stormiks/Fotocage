import { Response } from 'miragejs'

export default function () {
  this.namespace = 'api'
  this.post('/login', (schema, req) => {
    const attrs = JSON.parse(req.requestBody)

    const user = schema.users.findBy({
      login: attrs.login,
      password: attrs.password
    })

    if (!user)
      return new Response(401,
        { some: 'header' },
        {
          status: true,
          user: {
            id: null,
            auth: false
          }
        }
      )

    user.update({
      auth: true,
      timeStampSession: Date.now()
    })

    console.log('[SERVER]: Loggin user - ', String(user.login))

    return {
      status: true,
      user: {
        id: Number(user.id),
        login: String(user.login),
        auth: user.id > 0,
        role: user.role,
        timeStampSession: Date.now(),
        avatar: user.avatar
      }
    }
  })

  this.post('/registration', (schema, req) => {
    const attrs = JSON.parse(req.requestBody)

    const user = schema.users.create({
      login: attrs.login,
      password: attrs.password,
      auth: false,
      role: 'guest',
      timeStampSession: Date.now()
    })

    if (!user)
      return new Response(401,
        { some: 'header' },
        {
          status: true,
          user: {
            id: null,
            auth: false
          }
        }
      )

    user.update({ auth: true })

    console.log('[SERVER]: New user - ', String(user.login))

    return {
      status: true,
      user: {
        id: Number(user.id),
        login: String(user.login),
        auth: user.id > 0,
        role: user.role,
        timeStampSession: Date.now(),
        avatar: user.avatar
      }
    }
  })

  this.get('/auth/:userId/status', (schema, req) => {
    const user = schema.users.find(req.params.userId)

    const currentDateSession = Date.now()
    const maxLiveMinutesOfSession = 15 * 60000
    const lastDateSession = user.timeStampSession
    const diffMinutesSession = currentDateSession - lastDateSession
    const isSession = () => !!lastDateSession
    const isUser = () => !!user

    if (!isUser() || !(diffMinutesSession > maxLiveMinutesOfSession || isSession()))
      return {
        session: false,
        user: {
          id: null,
          auth: false
        }
      }

    user.update({
      auth: true,
      timeStampSession: currentDateSession
    })

    return {
      session: true,
      user: {
        id: Number(user.id),
        login: String(user.login),
        auth: user.id > 0,
        role: user.role,
        timeStampSession: currentDateSession
      }
    }
  })

  this.put('/upload/image', (schema, req) => {
    const attrs = JSON.parse(req.requestBody)

    console.log('[SERVER UPLOAD]: ', attrs)

    schema.images.create({
      src: attrs.src,
      title: attrs.title,
      filename: attrs.name,
      description: attrs.description
    })

    return { status: true }
  })

  this.get('/images', (schema, req) => {
    const images = schema.images.all()

    return images
  })

  this.get('/list/users', (schema, req) => {
    const arr = schema.users.all()

    if (req.queryParams.count) {
      const endCountUsers = req.queryParams.count

      return arr.slice(0, endCountUsers)
    }

    return arr
  })
}

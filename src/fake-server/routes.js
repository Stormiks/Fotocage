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

    user.update({ auth: true })

    console.log('[SERVER]: Loggin user - ', String(user.login))

    return {
      status: true,
      user: {
        id: Number(user.id),
        login: String(user.login),
        auth: user.id > 0,
        role: user.role
      }
    }
  })

  this.post('/registration', (schema, req) => {
    const attrs = JSON.parse(req.requestBody)

    const user = schema.users.create({
      login: attrs.login,
      password: attrs.password,
      auth: false,
      role: 'guest'
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
        role: user.role
      }
    }
  })

  this.get('/auth/:userId/status', (schema, req) => {
    const user = schema.users.find(req.params.userId)

    if (!user)
      return {
        id: null,
        auth: false
      }

    return {
      id: user.id,
      auth: user.auth
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

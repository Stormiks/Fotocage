import {
  Server,
  Serializer,
  Response,
  RestSerializer,
  Factory,
  JSONAPISerializer,
  Model
} from 'miragejs'

const ApplicationSerializer = Serializer.extend()

export function makeServer({ environment = 'development' } = {}) {
  const server = new Server({
    serializers: JSONAPISerializer,
    models: {
      user: Model,
      image: Model
    },
    environment,
    routes() {
      this.namespace = 'api'
      this.post('/login', (schema, req) => {
        const attrs = JSON.parse(req.requestBody)

        console.log('[SERVER]', attrs)

        const user = schema.users.findBy({
          login: attrs.login,
          password: attrs.password
        })

        if (!user) {
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
        }

        user.update({ auth: true })

        return {
          status: true,
          user: {
            id: Number(user.id),
            login: String(user.login),
            auth: user.id > 0
          }
        }
      })

      this.get('/auth/:userId/status', (schema, req) => {
        const user = schema.users.find(req.params.userId)

        if (!user) {
          return {
            id: null,
            auth: false
          }
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
          src: attrs.src
        })

        return { status: true }
      })

      this.get('/images', (schema, req) => {
        const images = schema.images.all()

        return images
      })

      this.post('/registration', (schema, req) => {
        const attrs = JSON.parse(req.requestBody)

        const user = schema.users.create({
          login: attrs.login,
          password: attrs.password,
          auth: false
        })

        if (!user) {
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
        }

        user.update({ auth: true })

        return {
          status: true,
          user: {
            id: user.id,
            auth: user.auth
          }
        }
      })

      this.get('/list/users', (schema) => {
        return schema.users.all()
      })
    }
  })

  server.db.loadData({
    users: [
      {
        login: 'Test',
        password: 'test',
        auth: false
      }
    ]
  })

  return server
}

import {
  Server,
  Serializer,
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

        console.log(user.attrs)

        return {
          status: true,
          user: {
            id: Number(user.id),
            login: String(user.login),
            auth: Boolean(user.auth)
          }
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

        console.log('[SERVER]: ', attrs)

        const user = schema.users.create({
          login: attrs.login,
          password: attrs.password
        })

        if (!user) return { status: false }

        return {
          status: true,
          user
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

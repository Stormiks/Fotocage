import { Server, Serializer, RestSerializer, Factory, JSONAPISerializer } from "miragejs"

const ApplicationSerializer = Serializer.extend()

export function makeServer({ environment = "development" } = {}) {
  const server = new Server({
    environment,
    routes() {
      this.namespace = 'api'
      this.post('/login', (schema, req) => {
        const attrs = JSON.parse(req.requestBody)

        console.log('[SERVER]', attrs)

        return {
          status: true,
          user: attrs
        }
      })
    }
  })

  return server
}

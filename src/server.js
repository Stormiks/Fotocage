import {
  createServer,
  Serializer,
  Factory,
  Model
} from 'miragejs'

import routes from './fake-server/routes'

import faker from 'faker'

const ApplicationSerializer = Serializer.extend()

export function makeServer(environment = 'development') {
  const server = createServer({
    models: {
      user: Model,
      image: Model
    },
    factories: {
      user: Factory.extend({
        name() {
          return faker.name.middleName()
        },
        email() {
          return faker.internet.email()
        },
        login() {
          return faker.name.firstName()
        },
        password() {
          return 'test'
        },
        auth() {
          return false
        }
      }),
      image: Factory.extend({
        src() {
          return faker.image.image()
        },
        title() {
          return faker.name.title()
        },
        description() {
          return faker.lorem.words()
        }
      })
    },
    environment,
    routes,
    seeds(server) {
      server.create('user', {
        name: faker.name.middleName(),
        email: faker.internet.email(),
        login: 'Test',
        password: 'test',
        auth: false
      })
      server.createList('user', 5)
      server.createList('image', 5)
    }
  })

  return server
}

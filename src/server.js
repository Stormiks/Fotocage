import {
  createServer
  // Serializer
} from 'miragejs'

import routes from './fake-server/routes'

import faker from 'faker'

import { userModel, userFactory } from './fake-server/models/user'
import { imageModel, imageFactory } from './fake-server/models/image'

// const ApplicationSerializer = Serializer.extend()

export function makeServer(environment = 'development') {
  const server = createServer({
    models: {
      user: userModel.user,
      image: imageModel.image
    },
    factories: {
      user: userFactory.user,
      image: imageFactory.image
    },
    environment,
    routes,
    seeds(server) {
      server.createList('user', 2, {
        role: 'photographer'
      })
      server.createList('user', 3, {
        role: 'reader'
      })
      server.create('user', {
        name: faker.name.middleName(),
        email: faker.internet.email(),
        login: 'Test',
        password: 'test',
        auth: false,
        role: 'admin'
      })
      server.create('user', {
        name: faker.name.middleName(),
        email: faker.internet.email(),
        login: 'Test2',
        password: 'test2',
        auth: false,
        role: 'guest'
      })
      server.create('user', {
        name: faker.name.middleName(),
        email: faker.internet.email(),
        login: 'Test3',
        password: 'test3',
        auth: false,
        role: 'photographer'
      })
      server.createList('image', 5)
    }
  })

  return server
}

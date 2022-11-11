import {
  Factory,
  Model
} from 'miragejs'

import { faker } from '@faker-js/faker'

export const imageModel = {
  image: Model
}

export const imageFactory = {
  image: Factory.extend({
    src() {
      return faker.image.image()
    },
    filename() {
      return faker.name.jobTitle() + '.jpg'
    },
    title() {
      return faker.name.jobTitle()
    },
    description() {
      return faker.lorem.words()
    }
  })
}

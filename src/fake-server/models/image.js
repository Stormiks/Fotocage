import {
  Factory,
  Model
} from 'miragejs'

import faker from 'faker'

export const imageModel = {
  image: Model
}

export const imageFactory = {
  image: Factory.extend({
    src() {
      return faker.image.image()
    },
    filename() {
      return faker.name.title() + '.jpg'
    },
    title() {
      return faker.name.title()
    },
    description() {
      return faker.lorem.words()
    }
  })
}

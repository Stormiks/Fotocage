import {
  Factory,
  Model,
  belongsTo
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
    category() {
      return String(this.src).replace('http://placeimg.com/640/480/', '')
    },
    title() {
      return faker.name.jobTitle()
    },
    description() {
      return faker.lorem.words()
    }
  })
}

import {
  Factory,
  Model
  // hasMany
  // association
} from 'miragejs'
import { faker } from '@faker-js/faker'

export const categoryModel = {
  category: Model
}

export const categoryFactory = {
  category: Factory.extend({
    name() {
      return faker.datatype.string(5)
    }
  })
}

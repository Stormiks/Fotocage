import { BasePluginError } from './BasePluginError'

export class InvalidOptions extends BasePluginError {
  static _MESSAGE_ = 'invalid plugin options'

  constructor(message = BasePluginError._MESSAGE_) {
    super(message)
  }
}

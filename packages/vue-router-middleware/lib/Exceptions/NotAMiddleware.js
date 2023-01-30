import { BasePluginError } from './BasePluginError'

export class NotAMiddleware extends BasePluginError {
  static _MESSAGE_ = 'not a middleware'

  constructor(message = NotAMiddleware._MESSAGE_) {
    super(message)
  }
}

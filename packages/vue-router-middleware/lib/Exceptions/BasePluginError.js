export class BasePluginError extends Error {
  static _MESSAGE_ = 'unexpected error'
  static _NAME_ = '[vue-router-middleware-plugin]'

  constructor(message = BasePluginError._MESSAGE_) {
    super(message)
    this.message = message
    this.name = BasePluginError._NAME_
  }
}

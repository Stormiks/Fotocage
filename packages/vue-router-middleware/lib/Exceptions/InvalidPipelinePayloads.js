import { BasePluginError } from './BasePluginError'

export class InvalidPipelinePayload extends BasePluginError {
  static _MESSAGE_ =
    'arg `middlewares` must be an array of middlewares'

  constructor(message = InvalidPipelinePayload._MESSAGE_) {
    super(message)
  }
}

import { middlewarePipeline } from './core/middlewarePipeline'
import { prepareMiddlewarePipelinePayload as preparePipelinePayload } from './helpers/prepareMiddlewareiPiplinePayload'
import { InvalidOptions } from './lib/Exceptions/InvalidOptions'

export const install = (
  vue,
  options
) => {
  if (typeof options !== 'object')
    throw new InvalidOptions()

  let router
  let globalMiddlewares = []
  let context = { app: vue }

  if (options && options.router) {
    // if options object
    const {
      router: _router,
      middleware,
      context: _context
    } = options
    router = _router

    if (middleware !== undefined)
      globalMiddlewares = preparePipelinePayload(middleware)

    if (_context !== undefined)
      if (typeof _context === 'object')
        context = { ..._context, ...context }
      else
        throw new InvalidOptions('invalid context')
  } else if (
    options.router === undefined &&
    options.beforeEach === undefined
  ) {
    // if options is not object and not router
    throw new InvalidOptions('router is a required option.')
  } else {
    // if options is router
    router = options
  }

  const routeHook = (
    to,
    from,
    next
  ) => {
    let middlewares = [...globalMiddlewares]
    if ('middleware' in to.meta)
      if (typeof to.meta.middleware === 'object') {
        let ignores = []
        if ('attach' in to.meta.middleware)
          middlewares = preparePipelinePayload(
            to.meta.middleware.attach,
            middlewares
          )

        if ('ignore' in to.meta.middleware)
          ignores = preparePipelinePayload(to.meta.middleware.ignore)

        middlewares = middlewares.filter(
          middleware => !ignores.includes(middleware)
        )
      } else {
        middlewares = preparePipelinePayload(to.meta.middleware, middlewares)
      }

    if (middlewares.length) {
      context = { ...context, to, from, next }
      middlewarePipeline(context, middlewares)
    } else {
      next()
    }
  }

  router.beforeEach(routeHook)

  // ==== helpers ============
  vue.$MiddlewarePlugin = true
  vue.$getMiddlewareContext = () => {
    const { app, ..._context } = context
    return _context
  }
  vue.$setMiddlewareContext = (_context) => {
    const { app, to, from, redirect } = context
    context = { ..._context, app, to, from, redirect }
    return context
  }
  vue.$updateMiddlewareContext = (key, value) => {
    const { app, to, from, redirect } = context
    context = { [key]: value, app, to, from, redirect }
  }
}

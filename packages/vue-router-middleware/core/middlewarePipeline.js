import { InvalidPipelinePayload } from '../lib/Exceptions/InvalidPipelinePayloads'

export const middlewarePipeline = async (
  context,
  middlewares
) => {
  if (!Array.isArray(middlewares))
    throw new InvalidPipelinePayload()

  let redirected = false

  const redirect = (arg) => {
    if (arg === undefined)
      return

    context.next(arg)
    redirected = true
  }

  for (const middleware of middlewares) {
    const { next: _, ...middlewareContext } = context
    await middleware({ ...middlewareContext, redirect })
    if (redirected)
      break
  }

  if (!redirected)
    context.next()
}

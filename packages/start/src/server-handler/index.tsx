/// <reference types="vinxi/types/server" />
import {
  defaultTransformer,
  isNotFound,
  isRedirect,
} from '@tanstack/react-router'
import invariant from 'tiny-invariant'
import {
  eventHandler,
  getEvent,
  getResponseStatus,
  toWebRequest,
} from 'vinxi/http'
import { getManifest } from 'vinxi/manifest'
import type { H3Event } from 'vinxi/server'

export default eventHandler(handleServerAction)

async function handleServerAction(event: H3Event) {
  return handleServerRequest(toWebRequest(event), event)
}

export async function handleServerRequest(request: Request, _event?: H3Event) {
  const method = request.method
  const url = new URL(request.url, 'http://localhost:3000')
  const search = Object.fromEntries(url.searchParams.entries()) as {
    _serverFnId?: string
    _serverFnName?: string
    payload?: any
  }

  const serverFnId = search._serverFnId
  const serverFnName = search._serverFnName

  if (!serverFnId || !serverFnName) {
    throw new Error('Invalid request')
  }

  invariant(typeof serverFnId === 'string', 'Invalid server action')

  if (process.env.NODE_ENV === 'development')
    console.info(`ServerFn Request: ${serverFnId} - ${serverFnName}`)
  if (process.env.NODE_ENV === 'development') console.info()

  const action = (await getManifest('server').chunks[serverFnId]?.import())?.[
    serverFnName
  ] as Function

  const response = await (async () => {
    try {
      const arg = await (async () => {
        // FormData
        if (
          request.headers.get('Content-Type')?.includes('multipart/form-data')
        ) {
          // We don't support GET requests with FormData payloads... that seems impossible
          invariant(
            method.toLowerCase() !== 'get',
            'GET requests with FormData payloads are not supported',
          )

          return await request.formData()
        }

        // Get requests use the query string
        if (method.toLowerCase() === 'get') {
          // First we need to get the ?payload query string
          if (!search.payload) {
            return undefined
          }

          // If there's a payload, we need to parse it
          return defaultTransformer.parse(search.payload)
        }

        // For non-form, non-get
        const jsonPayloadAsString = await request.text()
        return defaultTransformer.parse(jsonPayloadAsString)
      })()

      const result = await action(arg)

      if (result instanceof Response) {
        return result
      }

      // TODO: RSCs
      // if (isValidElement(result)) {
      //   const { renderToPipeableStream } = await import(
      //     // @ts-expect-error
      //     '@vinxi/react-server-dom/server'
      //   )

      //   const pipeableStream = renderToPipeableStream(result)

      //   setHeaders(event, {
      //     'Content-Type': 'text/x-component',
      //   } as any)

      //   sendStream(event, response)
      //   event._handled = true

      //   return new Response(null, { status: 200 })
      // }

      if (isRedirect(result) || isNotFound(result)) {
        return redirectOrNotFoundResponse(result)
      }

      return new Response(
        result !== undefined ? defaultTransformer.stringify(result) : undefined,
        {
          status: getResponseStatus(getEvent()),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
    } catch (error: any) {
      if (error instanceof Response) {
        return error
      }

      // Currently this server-side context has no idea how to
      // build final URLs, so we need to defer that to the client.
      // The client will check for __redirect and __notFound keys,
      // and if they exist, it will handle them appropriately.

      if (isRedirect(error) || isNotFound(error)) {
        return redirectOrNotFoundResponse(error)
      }

      console.error('Server Fn Error!')
      console.error(error)
      console.info()

      return new Response(JSON.stringify(error), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
  })()

  if (process.env.NODE_ENV === 'development')
    console.info(`ServerFn Response: ${response.status}`)

  if (response.headers.get('Content-Type') === 'application/json') {
    const cloned = response.clone()
    const text = await cloned.text()
    const payload = text ? JSON.stringify(JSON.parse(text)) : 'undefined'

    if (process.env.NODE_ENV === 'development')
      console.info(
        ` - Payload: ${payload.length > 100 ? payload.substring(0, 100) + '...' : payload}`,
      )
  }
  if (process.env.NODE_ENV === 'development') console.info()

  return response
}

function redirectOrNotFoundResponse(error: any) {
  const { headers, ...rest } = error

  return new Response(JSON.stringify(rest), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      ...(headers || {}),
    },
  })
}

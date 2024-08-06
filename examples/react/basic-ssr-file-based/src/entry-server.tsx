import * as React from 'react'
import ReactDOMServer from 'react-dom/server'
import { createMemoryHistory } from '@tanstack/react-router'
import { StartServer } from '@tanstack/start/server'
import { createRouter } from './router'
import type { ServerResponse } from 'http'
import type express from 'express'

// index.js
import './fetch-polyfill'

export async function render(opts: {
  url: string
  head: string
  req: express.Request
  res: ServerResponse
}) {
  const router = createRouter()

  const memoryHistory = createMemoryHistory({
    initialEntries: [opts.url],
  })

  // Update the history and context
  router.update({
    history: memoryHistory,
    context: {
      ...router.options.context,
      head: opts.head,
    },
  })

  // Since we're using renderToString, Wait for the router to finish loading
  await router.load()

  // Render the app
  const appHtml = ReactDOMServer.renderToString(<StartServer router={router} />)

  opts.res.statusCode = 200
  opts.res.setHeader('Content-Type', 'text/html')
  opts.res.end(`<!DOCTYPE html>${appHtml}`)
}

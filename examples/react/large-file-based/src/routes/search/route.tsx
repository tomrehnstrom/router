import * as React from 'react'
import { createFileRoute } from '@tomrehnstrom/react-router'
import { z } from 'zod'

const search = z.object({
  rootSearch: z.number(),
})

export const Route = createFileRoute('/search')({
  component: () => <div>Hello /search!</div>,
  validateSearch: search,
})

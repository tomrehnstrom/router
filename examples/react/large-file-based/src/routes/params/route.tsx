import * as React from 'react'
import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/params')({
  component: () => <div>Hello /params!</div>,
})

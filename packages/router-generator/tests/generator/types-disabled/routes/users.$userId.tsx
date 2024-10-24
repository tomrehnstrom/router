import * as React from 'react'
import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/users/$userId')({
  component: () => <div>Hello /users/$userId!</div>,
})

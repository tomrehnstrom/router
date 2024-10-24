import * as React from 'react'
import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/')({
  component: () => <div>Hello /!</div>,
})

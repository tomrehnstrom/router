import * as React from 'react'
import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/_layout/layout-b')({
  component: LayoutBComponent,
})

function LayoutBComponent() {
  return <div>I'm B!</div>
}

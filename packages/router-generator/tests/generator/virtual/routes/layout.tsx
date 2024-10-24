import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/_layout')({
  component: () => <div>Hello !</div>,
})

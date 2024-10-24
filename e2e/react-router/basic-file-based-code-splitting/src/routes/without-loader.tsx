import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/without-loader')({
  component: () => <div>Hello /without-loader!</div>,
})

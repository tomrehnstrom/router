import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/blog/$slug')({
  component: () => <div>Hello /blog/$slug!</div>,
})

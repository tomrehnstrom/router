import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/blog/')({
  component: () => <div>Hello /blog/!</div>,
})

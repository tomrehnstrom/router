import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/classic/hello/universe')({
  component: () => <div>Hello /classic/hello/universe!</div>,
})

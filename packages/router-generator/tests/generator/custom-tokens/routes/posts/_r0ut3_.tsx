import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/posts')({
  component: () => <div>Hello /posts!</div>,
})

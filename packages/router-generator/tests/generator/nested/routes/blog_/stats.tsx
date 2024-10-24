import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/blog_/stats')({
  component: () => <div>Hello /blog/stats!</div>,
})

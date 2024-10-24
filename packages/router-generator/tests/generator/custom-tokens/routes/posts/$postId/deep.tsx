import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/posts/$postId/deep')({
  component: () => <div>Hello /posts/$postId/deep!</div>,
})

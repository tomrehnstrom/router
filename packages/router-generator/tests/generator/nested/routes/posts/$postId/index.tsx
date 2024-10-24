import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/posts/$postId/')({
  validateSearch: () => ({
    indexSearch: 'search',
  }),
  component: () => <div>Hello /posts/$postId/!</div>,
})

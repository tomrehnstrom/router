import { createFileRoute } from '@tomrehnstrom/react-router'
import { fetchPost } from '../posts'

export const Route = createFileRoute('/posts_/$postId/deep')({
  loader: async ({ params: { postId } }) => fetchPost(postId),
})

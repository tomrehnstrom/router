import { createFileRoute } from '@tomrehnstrom/react-router'
import { fetchPosts } from '../posts'

export const Route = createFileRoute('/posts')({
  loader: () => fetchPosts(),
})

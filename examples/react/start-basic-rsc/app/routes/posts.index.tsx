import { createFileRoute } from '@tomrehnstrom/react-router'

// @ts-ignore
export const Route = createFileRoute('/posts/')({
  component: PostsIndexComponent,
})

function PostsIndexComponent() {
  return <div>Select a post.</div>
}

import * as React from 'react'
import { Link, createLazyFileRoute } from '@tomrehnstrom/react-router'
import { PostErrorComponent } from './posts.$postId/lazy'

export const Route = createLazyFileRoute('/posts_/$postId/deep')({
  component: PostDeepComponent,
  errorComponent: PostErrorComponent,
})

function PostDeepComponent() {
  const post = Route.useLoaderData()

  return (
    <div className="p-2 space-y-2">
      <Link
        to="/posts"
        className="block py-1 text-blue-800 hover:text-blue-600"
      >
        ← All Posts
      </Link>
      <h4 className="text-xl font-bold underline">{post.title}</h4>
      <div className="text-sm">{post.body}</div>
    </div>
  )
}

// import * as React from 'react'
import { createFileRoute } from '@tomrehnstrom/react-router'
import { createServerFn, renderRsc } from '@tomrehnstrom/start'
import { renderPosts } from '~/utils/renderPosts'

export const serverRenderPosts = createServerFn('GET', renderPosts)

export const Route = createFileRoute('/posts')({
  loader: async () => serverRenderPosts(),
  component: PostsComponent,
})

function PostsComponent() {
  return renderRsc(Route.useLoaderData())
}

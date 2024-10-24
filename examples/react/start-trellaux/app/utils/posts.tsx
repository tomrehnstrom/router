import { notFound } from '@tomrehnstrom/react-router'
import { createServerFn } from '@tanstack/start'
import axios from 'redaxios'

export type PostType = {
  id: string
  title: string
  body: string
}

export const fetchPost = createServerFn('GET', async (postId: string) => {
  console.info(`Fetching post with id ${postId}...`)
  const post = await axios
    .get<PostType>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((r) => r.data)
    .catch((err) => {
      if (err.status === 404) {
        throw notFound()
      }
      throw err
    })

  return post
})

export const fetchPosts = createServerFn('GET', async () => {
  console.info('Fetching posts...')
  return axios
    .get<Array<PostType>>('https://jsonplaceholder.typicode.com/posts')
    .then((r) => r.data.slice(0, 10))
})

import { createFileRoute, redirect } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/redirect')({
  beforeLoad: async () => {
    throw redirect({
      to: '/posts',
    })
  },
})

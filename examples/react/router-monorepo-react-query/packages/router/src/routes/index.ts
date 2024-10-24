import { createFileRoute } from '@tomrehnstrom/react-router'
import { postsQueryOptions } from '@router-mono-react-query/post-query'

export const Route = createFileRoute('/')({
  loader: ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(postsQueryOptions)
  },
})

import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/foo/bar/$id')({
  component: () => <div>Hello /foo/bar/$id!</div>,
})

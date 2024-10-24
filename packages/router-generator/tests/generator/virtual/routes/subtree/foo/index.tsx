import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/_layout/hello/foo/')({
  component: () => <div>Hello /foo/!</div>,
})

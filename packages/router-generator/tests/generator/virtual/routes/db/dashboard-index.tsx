import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/_layout/dashboard/')({
  component: () => <div>Hello !</div>,
})

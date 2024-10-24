import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/_auth/')({
  component: () => <div>Hello /_auth/!</div>,
})

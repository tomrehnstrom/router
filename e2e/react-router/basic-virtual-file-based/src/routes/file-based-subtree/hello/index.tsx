import { Link, createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/classic/hello/')({
  component: () => <div>This is the index</div>,
})

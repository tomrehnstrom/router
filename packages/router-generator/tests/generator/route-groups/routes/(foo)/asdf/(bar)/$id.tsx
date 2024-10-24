import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/(foo)/asdf/(bar)/$id')({
  component: () => <div>Hello /(foo)/asdf/(bar)/$id!</div>,
})

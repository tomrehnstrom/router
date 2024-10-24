import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/(foo)/asdf/(another-group)/_layout')({
  component: () => <div>Hello /(foo)/asdf/(another-group)/_layout!</div>,
})

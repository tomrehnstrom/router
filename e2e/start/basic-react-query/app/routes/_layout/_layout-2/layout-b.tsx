import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/_layout/_layout-2/layout-b')({
  component: LayoutBComponent,
})

function LayoutBComponent() {
  return <div>I'm B!</div>
}

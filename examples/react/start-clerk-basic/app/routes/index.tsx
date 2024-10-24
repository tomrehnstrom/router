import { createFileRoute } from '@tomrehnstrom/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-2">
      <h1>Hello Clerk!</h1>
    </div>
  )
}

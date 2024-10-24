import { createLazyFileRoute } from '@tomrehnstrom/react-router'
import Expensive from './-components/Expensive'

export const Route = createLazyFileRoute('/expensive/')({
  component: Expensive,
})

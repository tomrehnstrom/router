import { RouterProvider } from '@tomrehnstrom/react-router'
import { afterHydrate } from './serialization'
import type { AnyRouter } from '@tomrehnstrom/react-router'

let cleaned = false

export function StartClient(props: { router: AnyRouter }) {
  if (!props.router.state.matches.length) {
    props.router.hydrate()
    afterHydrate({ router: props.router })
  }

  if (!cleaned) {
    cleaned = true
    window.__TSR__?.cleanScripts()
  }

  return <RouterProvider router={props.router} />
}

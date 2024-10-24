// app/router.tsx
import { createRouter as createTanStackRouter } from '@tomrehnstrom/react-router'
import { routeTree } from './routeTree.gen'

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
  })

  return router
}

declare module '@tomrehnstrom/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}

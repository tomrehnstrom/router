import { createRouter as createReactRouter } from '@tomrehnstrom/react-router'

import { routeTree } from './routeTree.gen'
import SuperJSON from 'superjson'

export function createRouter() {
  return createReactRouter({
    routeTree,
    context: {
      head: '',
    },
    defaultPreload: 'intent',
    transformer: SuperJSON,
  })
}

declare module '@tomrehnstrom/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}

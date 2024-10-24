import * as React from 'react'
import { createRouter, RouterProvider } from '@tomrehnstrom/react-router'

import { routeTree } from './routeTree.gen'

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

// Register things for typesafety
declare module '@tomrehnstrom/react-router' {
  interface Register {
    router: typeof router
  }
}
const App = () => {
  return <RouterProvider router={router} />
}

export default App

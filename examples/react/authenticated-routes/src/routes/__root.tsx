import * as React from 'react'
import { Outlet, createRootRouteWithContext } from '@tomrehnstrom/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import type { AuthContext } from '../auth'

interface MyRouterContext {
  auth: AuthContext
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" initialIsOpen={false} />
    </>
  ),
})

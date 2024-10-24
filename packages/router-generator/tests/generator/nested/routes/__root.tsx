import * as React from 'react'
import { Outlet, createRootRoute } from '@tomrehnstrom/react-router'

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <div>Hello "__root"!</div>
      <Outlet />
    </React.Fragment>
  ),
})

import { type QueryClient } from '@tanstack/react-query'
import { Outlet, createRootRouteWithContext } from '@tomrehnstrom/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export interface Context {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<Context>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="m-4">
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  )
}

import { createRouter as createTanStackRouter } from '@tomrehnstrom/react-router'
import {
  MutationCache,
  QueryClient,
  notifyManager,
} from '@tanstack/react-query'
import { routerWithQueryClient } from '@tomrehnstrom/react-router-with-query'
import toast from 'react-hot-toast'
import { routeTree } from './routeTree.gen'
import { DefaultCatchBoundary } from './components/DefaultCatchBoundary'
import { NotFound } from './components/NotFound'

export function createRouter() {
  if (typeof document !== 'undefined') {
    notifyManager.setScheduler(window.requestAnimationFrame)
  }

  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnReconnect: () => !queryClient.isMutating(),
      },
    },
    mutationCache: new MutationCache({
      onError: (error) => {
        toast(error.message, { className: 'bg-red-500 text-white' })
      },
      onSettled: () => {
        if (queryClient.isMutating() === 1) {
          return queryClient.invalidateQueries()
        }
      },
    }),
  })

  const router = routerWithQueryClient(
    createTanStackRouter({
      routeTree,
      defaultPreload: 'intent',
      defaultErrorComponent: DefaultCatchBoundary,
      defaultNotFoundComponent: () => <NotFound />,
    }),
    queryClient,
  )

  return router
}

declare module '@tomrehnstrom/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}

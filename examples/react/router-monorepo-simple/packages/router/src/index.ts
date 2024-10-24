import { router } from './router'

export type { RouterType, RouterIds } from './router'

// Register the router instance for type safety
declare module '@tomrehnstrom/react-router' {
  interface Register {
    router: typeof router
  }
}

export { router }

export { PostNotFoundError } from './fetch/posts'

// By re exporting the api from TanStack router, we can enforce that other packages
// rely on this one instead, making the type register being applied
export {
  Outlet,
  Link,
  useRouteContext,
  useRouter,
  RouterProvider,
  getRouteApi,
  ErrorComponent,
} from '@tomrehnstrom/react-router'
export type { ErrorComponentProps } from '@tomrehnstrom/react-router'

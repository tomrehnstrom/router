import { expectTypeOf, test } from 'vitest'
import {
  createRootRoute,
  createRoute,
  createRouter,
  useLoaderData,
} from '../src'
import { type MakeRouteMatch } from '../src/Matches'

test('when there is no loaders', () => {
  const rootRoute = createRootRoute()

  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
  })

  const invoicesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'invoices',
  })

  const invoicesIndexRoute = createRoute({
    getParentRoute: () => invoicesRoute,
    path: '/',
  })

  const routeTree = rootRoute.addChildren([
    invoicesRoute.addChildren([invoicesIndexRoute]),
    indexRoute,
  ])

  const defaultRouter = createRouter({
    routeTree,
  })

  type DefaultRouter = typeof defaultRouter

  expectTypeOf(useLoaderData<DefaultRouter['routeTree']>)
    .parameter(0)
    .toHaveProperty('from')
    .toEqualTypeOf<'/invoices' | '__root__' | '/invoices/' | '/'>()

  expectTypeOf(useLoaderData<DefaultRouter['routeTree']>)
    .parameter(0)
    .toHaveProperty('strict')
    .toEqualTypeOf<true | undefined>()

  expectTypeOf(useLoaderData<DefaultRouter['routeTree'], '/'>)
    .parameter(0)
    .toHaveProperty('select')
    .parameter(0)
    .toMatchTypeOf<{
      loaderData?: {}
    }>()

  expectTypeOf(useLoaderData<DefaultRouter['routeTree'], '/'>)
    .parameter(0)
    .toHaveProperty('select')
    .returns.toEqualTypeOf<{}>()

  expectTypeOf(
    useLoaderData<DefaultRouter['routeTree'], '/'>,
  ).returns.toEqualTypeOf<{}>()

  expectTypeOf(
    useLoaderData<DefaultRouter['routeTree'], '/', false>({ strict: false }),
  ).toEqualTypeOf<{}>
})

test('when there is one loader', () => {
  const rootRoute = createRootRoute()

  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
  })

  const invoicesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'invoices',
    loader: () => ({ data: ['element1', 'element2'] }),
  })

  const invoicesIndexRoute = createRoute({
    getParentRoute: () => invoicesRoute,
    path: '/',
  })

  const invoiceRoute = createRoute({
    getParentRoute: () => invoicesRoute,
    path: '$invoiceId',
  })

  const routeTree = rootRoute.addChildren([
    invoicesRoute.addChildren([invoicesIndexRoute, invoiceRoute]),
    indexRoute,
  ])

  const defaultRouter = createRouter({
    routeTree,
    context: { userId: 'userId' },
  })

  type DefaultRouter = typeof defaultRouter

  expectTypeOf(
    useLoaderData<DefaultRouter['routeTree'], '/invoices'>,
  ).returns.toEqualTypeOf<{ data: Array<string> }>()

  expectTypeOf(
    useLoaderData<DefaultRouter['routeTree'], '/invoices'>,
  ).returns.toEqualTypeOf<{ data: Array<string> }>()

  expectTypeOf(useLoaderData<DefaultRouter['routeTree'], '/invoices'>)
    .parameter(0)
    .toHaveProperty('select')
    .returns.toEqualTypeOf<{ data: Array<string> }>()

  expectTypeOf(
    useLoaderData<DefaultRouter['routeTree'], '/invoices', false>,
  ).returns.toEqualTypeOf<{ data?: Array<string> }>()

  expectTypeOf(useLoaderData<DefaultRouter['routeTree'], '/invoices', false>)
    .parameter(0)
    .toHaveProperty('select')
    .returns.toEqualTypeOf<{ data?: Array<string> }>()

  expectTypeOf(
    useLoaderData<
      DefaultRouter['routeTree'],
      '/invoices',
      false,
      MakeRouteMatch<DefaultRouter['routeTree'], '/invoices', false>,
      number
    >,
  ).returns.toEqualTypeOf<number>()
})

test('when there is one loader that is async', () => {
  const rootRoute = createRootRoute()

  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
  })

  const invoicesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'invoices',
    loader: () => Promise.resolve({ data: ['element1', 'element2'] }),
  })

  const invoicesIndexRoute = createRoute({
    getParentRoute: () => invoicesRoute,
    path: '/',
  })

  const invoiceRoute = createRoute({
    getParentRoute: () => invoicesRoute,
    path: '$invoiceId',
  })

  const routeTree = rootRoute.addChildren([
    invoicesRoute.addChildren([invoicesIndexRoute, invoiceRoute]),
    indexRoute,
  ])

  const defaultRouter = createRouter({
    routeTree,
    context: { userId: 'userId' },
  })

  type DefaultRouter = typeof defaultRouter

  expectTypeOf(
    useLoaderData<DefaultRouter['routeTree'], '/invoices'>,
  ).returns.toEqualTypeOf<{ data: Array<string> }>()

  expectTypeOf(
    useLoaderData<DefaultRouter['routeTree'], '/invoices'>,
  ).returns.toEqualTypeOf<{ data: Array<string> }>()

  expectTypeOf(useLoaderData<DefaultRouter['routeTree'], '/invoices'>)
    .parameter(0)
    .toHaveProperty('select')
    .returns.toEqualTypeOf<{ data: Array<string> }>()

  expectTypeOf(
    useLoaderData<DefaultRouter['routeTree'], '/invoices', false>,
  ).returns.toEqualTypeOf<{ data?: Array<string> }>()

  expectTypeOf(useLoaderData<DefaultRouter['routeTree'], '/invoices', false>)
    .parameter(0)
    .toHaveProperty('select')
    .returns.toEqualTypeOf<{ data?: Array<string> }>()

  expectTypeOf(
    useLoaderData<
      DefaultRouter['routeTree'],
      '/invoices',
      false,
      MakeRouteMatch<DefaultRouter['routeTree'], '/invoices', false>,
      number
    >,
  ).returns.toEqualTypeOf<number>()
})

test('when there are multiple loaders', () => {
  const rootRoute = createRootRoute()

  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
  })

  const invoicesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'invoices',
    loader: () => ({ data: ['invoice1', 'invoice2'] }) as const,
  })

  const invoicesIndexRoute = createRoute({
    getParentRoute: () => invoicesRoute,
    path: '/',
  })

  const postsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'posts',
    loader: () => ({ data: ['post1', 'post2'] }) as const,
  })

  const routeTree = rootRoute.addChildren([
    invoicesRoute.addChildren([invoicesIndexRoute]),
    postsRoute,
    indexRoute,
  ])

  const defaultRouter = createRouter({
    routeTree,
  })

  type DefaultRouter = typeof defaultRouter

  expectTypeOf(
    useLoaderData<DefaultRouter['routeTree'], '/'>,
  ).returns.toEqualTypeOf<{}>()

  expectTypeOf(
    useLoaderData<DefaultRouter['routeTree'], '/invoices'>,
  ).returns.toEqualTypeOf<{
    readonly data: readonly ['invoice1', 'invoice2']
  }>()

  expectTypeOf(useLoaderData<DefaultRouter['routeTree'], '/invoices'>)
    .parameter(0)
    .toHaveProperty('select')
    .returns.toEqualTypeOf<{
      readonly data: readonly ['invoice1', 'invoice2']
    }>()

  expectTypeOf(
    useLoaderData<DefaultRouter['routeTree'], '/invoices', false>,
  ).returns.toEqualTypeOf<{
    data?:
      | readonly ['invoice1', 'invoice2']
      | readonly ['post1', 'post2']
      | undefined
  }>()

  expectTypeOf(useLoaderData<DefaultRouter['routeTree'], '/invoices', false>)
    .parameter(0)
    .toHaveProperty('select')
    .returns.toEqualTypeOf<{
      data?:
        | readonly ['invoice1', 'invoice2']
        | readonly ['post1', 'post2']
        | undefined
    }>()
})

test('when there are multiple loaders of objects and primtives', () => {
  const rootRoute = createRootRoute()

  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
  })

  const invoicesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'invoices',
    loader: () => ['invoice1', 'invoice2'] as const,
  })

  const invoicesIndexRoute = createRoute({
    getParentRoute: () => invoicesRoute,
    path: '/',
    loader: () => ({ invoice: { id: 1 } }) as const,
  })

  const postsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'posts',
    loader: () => ['post1', 'post2'] as const,
  })

  const routeTree = rootRoute.addChildren([
    invoicesRoute.addChildren([invoicesIndexRoute]),
    indexRoute,
    postsRoute,
  ])

  const defaultRouter = createRouter({
    routeTree,
  })

  type DefaultRouter = typeof defaultRouter

  expectTypeOf(
    useLoaderData<DefaultRouter['routeTree'], '/'>,
  ).returns.toEqualTypeOf<{}>()

  expectTypeOf(
    useLoaderData<DefaultRouter['routeTree'], '/invoices'>,
  ).returns.toEqualTypeOf<readonly ['invoice1', 'invoice2']>()

  expectTypeOf(useLoaderData<DefaultRouter['routeTree'], '/invoices'>)
    .parameter(0)
    .toHaveProperty('select')
    .returns.toEqualTypeOf<readonly ['invoice1', 'invoice2']>()

  expectTypeOf(
    useLoaderData<DefaultRouter['routeTree'], '/invoices', false>,
  ).returns.toEqualTypeOf<
    | readonly ['invoice1', 'invoice2']
    | readonly ['post1', 'post2']
    | {
        invoice?:
          | {
              readonly id: 1
            }
          | undefined
      }
  >()

  expectTypeOf(useLoaderData<DefaultRouter['routeTree'], '/invoices', false>)
    .parameter(0)
    .toHaveProperty('select')
    .returns.toEqualTypeOf<
      | readonly ['invoice1', 'invoice2']
      | readonly ['post1', 'post2']
      | {
          invoice?:
            | {
                readonly id: 1
              }
            | undefined
        }
    >()
})

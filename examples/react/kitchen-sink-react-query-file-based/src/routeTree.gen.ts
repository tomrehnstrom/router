/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tomrehnstrom/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as LayoutImport } from './routes/_layout'
import { Route as AuthImport } from './routes/_auth'
import { Route as IndexImport } from './routes/index'
import { Route as DashboardIndexImport } from './routes/dashboard.index'
import { Route as FooBarImport } from './routes/foo/bar'
import { Route as DashboardUsersImport } from './routes/dashboard.users'
import { Route as DashboardInvoicesImport } from './routes/dashboard.invoices'
import { Route as LayoutLayoutBImport } from './routes/_layout.layout-b'
import { Route as LayoutLayoutAImport } from './routes/_layout.layout-a'
import { Route as AuthProfileImport } from './routes/_auth.profile'
import { Route as DashboardUsersIndexImport } from './routes/dashboard.users.index'
import { Route as DashboardInvoicesIndexImport } from './routes/dashboard.invoices.index'
import { Route as DashboardUsersUserImport } from './routes/dashboard.users.user'
import { Route as DashboardInvoicesInvoiceIdImport } from './routes/dashboard.invoices.$invoiceId'

// Create Virtual Routes

const ExpensiveIndexLazyImport = createFileRoute('/expensive/')()

// Create/Update Routes

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRoute = DashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ExpensiveIndexLazyRoute = ExpensiveIndexLazyImport.update({
  id: '/expensive/',
  path: '/expensive/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/expensive/index.lazy').then((d) => d.Route),
)

const DashboardIndexRoute = DashboardIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardRoute,
} as any)

const FooBarRoute = FooBarImport.update({
  id: '/foo/bar',
  path: '/foo/bar',
  getParentRoute: () => rootRoute,
} as any)

const DashboardUsersRoute = DashboardUsersImport.update({
  id: '/users',
  path: '/users',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardInvoicesRoute = DashboardInvoicesImport.update({
  id: '/invoices',
  path: '/invoices',
  getParentRoute: () => DashboardRoute,
} as any)

const LayoutLayoutBRoute = LayoutLayoutBImport.update({
  id: '/layout-b',
  path: '/layout-b',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutLayoutARoute = LayoutLayoutAImport.update({
  id: '/layout-a',
  path: '/layout-a',
  getParentRoute: () => LayoutRoute,
} as any)

const AuthProfileRoute = AuthProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => AuthRoute,
} as any)

const DashboardUsersIndexRoute = DashboardUsersIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardUsersRoute,
} as any)

const DashboardInvoicesIndexRoute = DashboardInvoicesIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardInvoicesRoute,
} as any)

const DashboardUsersUserRoute = DashboardUsersUserImport.update({
  id: '/user',
  path: '/user',
  getParentRoute: () => DashboardUsersRoute,
} as any)

const DashboardInvoicesInvoiceIdRoute = DashboardInvoicesInvoiceIdImport.update(
  {
    id: '/$invoiceId',
    path: '/$invoiceId',
    getParentRoute: () => DashboardInvoicesRoute,
  } as any,
)

// Populate the FileRoutesByPath interface

declare module '@tomrehnstrom/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/_auth/profile': {
      id: '/_auth/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AuthProfileImport
      parentRoute: typeof AuthImport
    }
    '/_layout/layout-a': {
      id: '/_layout/layout-a'
      path: '/layout-a'
      fullPath: '/layout-a'
      preLoaderRoute: typeof LayoutLayoutAImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/layout-b': {
      id: '/_layout/layout-b'
      path: '/layout-b'
      fullPath: '/layout-b'
      preLoaderRoute: typeof LayoutLayoutBImport
      parentRoute: typeof LayoutImport
    }
    '/dashboard/invoices': {
      id: '/dashboard/invoices'
      path: '/invoices'
      fullPath: '/dashboard/invoices'
      preLoaderRoute: typeof DashboardInvoicesImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/users': {
      id: '/dashboard/users'
      path: '/users'
      fullPath: '/dashboard/users'
      preLoaderRoute: typeof DashboardUsersImport
      parentRoute: typeof DashboardImport
    }
    '/foo/bar': {
      id: '/foo/bar'
      path: '/foo/bar'
      fullPath: '/foo/bar'
      preLoaderRoute: typeof FooBarImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof DashboardImport
    }
    '/expensive/': {
      id: '/expensive/'
      path: '/expensive'
      fullPath: '/expensive'
      preLoaderRoute: typeof ExpensiveIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/invoices/$invoiceId': {
      id: '/dashboard/invoices/$invoiceId'
      path: '/$invoiceId'
      fullPath: '/dashboard/invoices/$invoiceId'
      preLoaderRoute: typeof DashboardInvoicesInvoiceIdImport
      parentRoute: typeof DashboardInvoicesImport
    }
    '/dashboard/users/user': {
      id: '/dashboard/users/user'
      path: '/user'
      fullPath: '/dashboard/users/user'
      preLoaderRoute: typeof DashboardUsersUserImport
      parentRoute: typeof DashboardUsersImport
    }
    '/dashboard/invoices/': {
      id: '/dashboard/invoices/'
      path: '/'
      fullPath: '/dashboard/invoices/'
      preLoaderRoute: typeof DashboardInvoicesIndexImport
      parentRoute: typeof DashboardInvoicesImport
    }
    '/dashboard/users/': {
      id: '/dashboard/users/'
      path: '/'
      fullPath: '/dashboard/users/'
      preLoaderRoute: typeof DashboardUsersIndexImport
      parentRoute: typeof DashboardUsersImport
    }
  }
}

// Create and export the route tree

interface AuthRouteChildren {
  AuthProfileRoute: typeof AuthProfileRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthProfileRoute: AuthProfileRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

interface LayoutRouteChildren {
  LayoutLayoutARoute: typeof LayoutLayoutARoute
  LayoutLayoutBRoute: typeof LayoutLayoutBRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutLayoutARoute: LayoutLayoutARoute,
  LayoutLayoutBRoute: LayoutLayoutBRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

interface DashboardInvoicesRouteChildren {
  DashboardInvoicesInvoiceIdRoute: typeof DashboardInvoicesInvoiceIdRoute
  DashboardInvoicesIndexRoute: typeof DashboardInvoicesIndexRoute
}

const DashboardInvoicesRouteChildren: DashboardInvoicesRouteChildren = {
  DashboardInvoicesInvoiceIdRoute: DashboardInvoicesInvoiceIdRoute,
  DashboardInvoicesIndexRoute: DashboardInvoicesIndexRoute,
}

const DashboardInvoicesRouteWithChildren =
  DashboardInvoicesRoute._addFileChildren(DashboardInvoicesRouteChildren)

interface DashboardUsersRouteChildren {
  DashboardUsersUserRoute: typeof DashboardUsersUserRoute
  DashboardUsersIndexRoute: typeof DashboardUsersIndexRoute
}

const DashboardUsersRouteChildren: DashboardUsersRouteChildren = {
  DashboardUsersUserRoute: DashboardUsersUserRoute,
  DashboardUsersIndexRoute: DashboardUsersIndexRoute,
}

const DashboardUsersRouteWithChildren = DashboardUsersRoute._addFileChildren(
  DashboardUsersRouteChildren,
)

interface DashboardRouteChildren {
  DashboardInvoicesRoute: typeof DashboardInvoicesRouteWithChildren
  DashboardUsersRoute: typeof DashboardUsersRouteWithChildren
  DashboardIndexRoute: typeof DashboardIndexRoute
}

const DashboardRouteChildren: DashboardRouteChildren = {
  DashboardInvoicesRoute: DashboardInvoicesRouteWithChildren,
  DashboardUsersRoute: DashboardUsersRouteWithChildren,
  DashboardIndexRoute: DashboardIndexRoute,
}

const DashboardRouteWithChildren = DashboardRoute._addFileChildren(
  DashboardRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof LayoutRouteWithChildren
  '/dashboard': typeof DashboardRouteWithChildren
  '/login': typeof LoginRoute
  '/profile': typeof AuthProfileRoute
  '/layout-a': typeof LayoutLayoutARoute
  '/layout-b': typeof LayoutLayoutBRoute
  '/dashboard/invoices': typeof DashboardInvoicesRouteWithChildren
  '/dashboard/users': typeof DashboardUsersRouteWithChildren
  '/foo/bar': typeof FooBarRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/expensive': typeof ExpensiveIndexLazyRoute
  '/dashboard/invoices/$invoiceId': typeof DashboardInvoicesInvoiceIdRoute
  '/dashboard/users/user': typeof DashboardUsersUserRoute
  '/dashboard/invoices/': typeof DashboardInvoicesIndexRoute
  '/dashboard/users/': typeof DashboardUsersIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof LayoutRouteWithChildren
  '/login': typeof LoginRoute
  '/profile': typeof AuthProfileRoute
  '/layout-a': typeof LayoutLayoutARoute
  '/layout-b': typeof LayoutLayoutBRoute
  '/foo/bar': typeof FooBarRoute
  '/dashboard': typeof DashboardIndexRoute
  '/expensive': typeof ExpensiveIndexLazyRoute
  '/dashboard/invoices/$invoiceId': typeof DashboardInvoicesInvoiceIdRoute
  '/dashboard/users/user': typeof DashboardUsersUserRoute
  '/dashboard/invoices': typeof DashboardInvoicesIndexRoute
  '/dashboard/users': typeof DashboardUsersIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_auth': typeof AuthRouteWithChildren
  '/_layout': typeof LayoutRouteWithChildren
  '/dashboard': typeof DashboardRouteWithChildren
  '/login': typeof LoginRoute
  '/_auth/profile': typeof AuthProfileRoute
  '/_layout/layout-a': typeof LayoutLayoutARoute
  '/_layout/layout-b': typeof LayoutLayoutBRoute
  '/dashboard/invoices': typeof DashboardInvoicesRouteWithChildren
  '/dashboard/users': typeof DashboardUsersRouteWithChildren
  '/foo/bar': typeof FooBarRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/expensive/': typeof ExpensiveIndexLazyRoute
  '/dashboard/invoices/$invoiceId': typeof DashboardInvoicesInvoiceIdRoute
  '/dashboard/users/user': typeof DashboardUsersUserRoute
  '/dashboard/invoices/': typeof DashboardInvoicesIndexRoute
  '/dashboard/users/': typeof DashboardUsersIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/dashboard'
    | '/login'
    | '/profile'
    | '/layout-a'
    | '/layout-b'
    | '/dashboard/invoices'
    | '/dashboard/users'
    | '/foo/bar'
    | '/dashboard/'
    | '/expensive'
    | '/dashboard/invoices/$invoiceId'
    | '/dashboard/users/user'
    | '/dashboard/invoices/'
    | '/dashboard/users/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/login'
    | '/profile'
    | '/layout-a'
    | '/layout-b'
    | '/foo/bar'
    | '/dashboard'
    | '/expensive'
    | '/dashboard/invoices/$invoiceId'
    | '/dashboard/users/user'
    | '/dashboard/invoices'
    | '/dashboard/users'
  id:
    | '__root__'
    | '/'
    | '/_auth'
    | '/_layout'
    | '/dashboard'
    | '/login'
    | '/_auth/profile'
    | '/_layout/layout-a'
    | '/_layout/layout-b'
    | '/dashboard/invoices'
    | '/dashboard/users'
    | '/foo/bar'
    | '/dashboard/'
    | '/expensive/'
    | '/dashboard/invoices/$invoiceId'
    | '/dashboard/users/user'
    | '/dashboard/invoices/'
    | '/dashboard/users/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthRoute: typeof AuthRouteWithChildren
  LayoutRoute: typeof LayoutRouteWithChildren
  DashboardRoute: typeof DashboardRouteWithChildren
  LoginRoute: typeof LoginRoute
  FooBarRoute: typeof FooBarRoute
  ExpensiveIndexLazyRoute: typeof ExpensiveIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthRoute: AuthRouteWithChildren,
  LayoutRoute: LayoutRouteWithChildren,
  DashboardRoute: DashboardRouteWithChildren,
  LoginRoute: LoginRoute,
  FooBarRoute: FooBarRoute,
  ExpensiveIndexLazyRoute: ExpensiveIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_auth",
        "/_layout",
        "/dashboard",
        "/login",
        "/foo/bar",
        "/expensive/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/profile"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/layout-a",
        "/_layout/layout-b"
      ]
    },
    "/dashboard": {
      "filePath": "dashboard.tsx",
      "children": [
        "/dashboard/invoices",
        "/dashboard/users",
        "/dashboard/"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/_auth/profile": {
      "filePath": "_auth.profile.tsx",
      "parent": "/_auth"
    },
    "/_layout/layout-a": {
      "filePath": "_layout.layout-a.tsx",
      "parent": "/_layout"
    },
    "/_layout/layout-b": {
      "filePath": "_layout.layout-b.tsx",
      "parent": "/_layout"
    },
    "/dashboard/invoices": {
      "filePath": "dashboard.invoices.tsx",
      "parent": "/dashboard",
      "children": [
        "/dashboard/invoices/$invoiceId",
        "/dashboard/invoices/"
      ]
    },
    "/dashboard/users": {
      "filePath": "dashboard.users.tsx",
      "parent": "/dashboard",
      "children": [
        "/dashboard/users/user",
        "/dashboard/users/"
      ]
    },
    "/foo/bar": {
      "filePath": "foo/bar.tsx"
    },
    "/dashboard/": {
      "filePath": "dashboard.index.tsx",
      "parent": "/dashboard"
    },
    "/expensive/": {
      "filePath": "expensive/index.lazy.tsx"
    },
    "/dashboard/invoices/$invoiceId": {
      "filePath": "dashboard.invoices.$invoiceId.tsx",
      "parent": "/dashboard/invoices"
    },
    "/dashboard/users/user": {
      "filePath": "dashboard.users.user.tsx",
      "parent": "/dashboard/users"
    },
    "/dashboard/invoices/": {
      "filePath": "dashboard.invoices.index.tsx",
      "parent": "/dashboard/invoices"
    },
    "/dashboard/users/": {
      "filePath": "dashboard.users.index.tsx",
      "parent": "/dashboard/users"
    }
  }
}
ROUTE_MANIFEST_END */

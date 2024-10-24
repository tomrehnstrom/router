/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tomrehnstrom/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PostsImport } from './routes/posts'
import { Route as LayoutImport } from './routes/_layout'
import { Route as IndexImport } from './routes/index'
import { Route as PostsIndexImport } from './routes/posts.index'
import { Route as PostsPostIdImport } from './routes/posts.$postId'
import { Route as LayoutLayout2Import } from './routes/_layout/_layout-2'
import { Route as groupLazyinsideImport } from './routes/(group)/lazyinside'
import { Route as groupLayoutImport } from './routes/(group)/_layout'
import { Route as LayoutLayout2LayoutBImport } from './routes/_layout/_layout-2/layout-b'
import { Route as LayoutLayout2LayoutAImport } from './routes/_layout/_layout-2/layout-a'
import { Route as groupLayoutInsideImport } from './routes/(group)/_layout.inside'

// Create Virtual Routes

const groupImport = createFileRoute('/(group)')()

// Create/Update Routes

const groupRoute = groupImport.update({
  id: '/(group)',
  getParentRoute: () => rootRoute,
} as any)

const PostsRoute = PostsImport.update({
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PostsIndexRoute = PostsIndexImport.update({
  path: '/',
  getParentRoute: () => PostsRoute,
} as any)

const PostsPostIdRoute = PostsPostIdImport.update({
  path: '/$postId',
  getParentRoute: () => PostsRoute,
} as any)

const LayoutLayout2Route = LayoutLayout2Import.update({
  id: '/_layout-2',
  getParentRoute: () => LayoutRoute,
} as any)

const groupLazyinsideRoute = groupLazyinsideImport
  .update({
    path: '/lazyinside',
    getParentRoute: () => groupRoute,
  } as any)
  .lazy(() => import('./routes/(group)/lazyinside.lazy').then((d) => d.Route))

const groupLayoutRoute = groupLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => groupRoute,
} as any)

const LayoutLayout2LayoutBRoute = LayoutLayout2LayoutBImport.update({
  path: '/layout-b',
  getParentRoute: () => LayoutLayout2Route,
} as any)

const LayoutLayout2LayoutARoute = LayoutLayout2LayoutAImport.update({
  path: '/layout-a',
  getParentRoute: () => LayoutLayout2Route,
} as any)

const groupLayoutInsideRoute = groupLayoutInsideImport.update({
  path: '/inside',
  getParentRoute: () => groupLayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/posts': {
      id: '/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsImport
      parentRoute: typeof rootRoute
    }
    '/(group)': {
      id: '/(group)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof groupImport
      parentRoute: typeof rootRoute
    }
    '/(group)/_layout': {
      id: '/(group)/_layout'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof groupLayoutImport
      parentRoute: typeof groupRoute
    }
    '/(group)/lazyinside': {
      id: '/(group)/lazyinside'
      path: '/lazyinside'
      fullPath: '/lazyinside'
      preLoaderRoute: typeof groupLazyinsideImport
      parentRoute: typeof groupImport
    }
    '/_layout/_layout-2': {
      id: '/_layout/_layout-2'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutLayout2Import
      parentRoute: typeof LayoutImport
    }
    '/posts/$postId': {
      id: '/posts/$postId'
      path: '/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof PostsPostIdImport
      parentRoute: typeof PostsImport
    }
    '/posts/': {
      id: '/posts/'
      path: '/'
      fullPath: '/posts/'
      preLoaderRoute: typeof PostsIndexImport
      parentRoute: typeof PostsImport
    }
    '/(group)/_layout/inside': {
      id: '/(group)/_layout/inside'
      path: '/inside'
      fullPath: '/inside'
      preLoaderRoute: typeof groupLayoutInsideImport
      parentRoute: typeof groupLayoutImport
    }
    '/_layout/_layout-2/layout-a': {
      id: '/_layout/_layout-2/layout-a'
      path: '/layout-a'
      fullPath: '/layout-a'
      preLoaderRoute: typeof LayoutLayout2LayoutAImport
      parentRoute: typeof LayoutLayout2Import
    }
    '/_layout/_layout-2/layout-b': {
      id: '/_layout/_layout-2/layout-b'
      path: '/layout-b'
      fullPath: '/layout-b'
      preLoaderRoute: typeof LayoutLayout2LayoutBImport
      parentRoute: typeof LayoutLayout2Import
    }
  }
}

// Create and export the route tree

interface LayoutLayout2RouteChildren {
  LayoutLayout2LayoutARoute: typeof LayoutLayout2LayoutARoute
  LayoutLayout2LayoutBRoute: typeof LayoutLayout2LayoutBRoute
}

const LayoutLayout2RouteChildren: LayoutLayout2RouteChildren = {
  LayoutLayout2LayoutARoute: LayoutLayout2LayoutARoute,
  LayoutLayout2LayoutBRoute: LayoutLayout2LayoutBRoute,
}

const LayoutLayout2RouteWithChildren = LayoutLayout2Route._addFileChildren(
  LayoutLayout2RouteChildren,
)

interface LayoutRouteChildren {
  LayoutLayout2Route: typeof LayoutLayout2RouteWithChildren
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutLayout2Route: LayoutLayout2RouteWithChildren,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

interface PostsRouteChildren {
  PostsPostIdRoute: typeof PostsPostIdRoute
  PostsIndexRoute: typeof PostsIndexRoute
}

const PostsRouteChildren: PostsRouteChildren = {
  PostsPostIdRoute: PostsPostIdRoute,
  PostsIndexRoute: PostsIndexRoute,
}

const PostsRouteWithChildren = PostsRoute._addFileChildren(PostsRouteChildren)

interface groupLayoutRouteChildren {
  groupLayoutInsideRoute: typeof groupLayoutInsideRoute
}

const groupLayoutRouteChildren: groupLayoutRouteChildren = {
  groupLayoutInsideRoute: groupLayoutInsideRoute,
}

const groupLayoutRouteWithChildren = groupLayoutRoute._addFileChildren(
  groupLayoutRouteChildren,
)

interface groupRouteChildren {
  groupLayoutRoute: typeof groupLayoutRouteWithChildren
  groupLazyinsideRoute: typeof groupLazyinsideRoute
}

const groupRouteChildren: groupRouteChildren = {
  groupLayoutRoute: groupLayoutRouteWithChildren,
  groupLazyinsideRoute: groupLazyinsideRoute,
}

const groupRouteWithChildren = groupRoute._addFileChildren(groupRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof groupLayoutRouteWithChildren
  '': typeof LayoutLayout2RouteWithChildren
  '/posts': typeof PostsRouteWithChildren
  '/lazyinside': typeof groupLazyinsideRoute
  '/posts/$postId': typeof PostsPostIdRoute
  '/posts/': typeof PostsIndexRoute
  '/inside': typeof groupLayoutInsideRoute
  '/layout-a': typeof LayoutLayout2LayoutARoute
  '/layout-b': typeof LayoutLayout2LayoutBRoute
}

export interface FileRoutesByTo {
  '/': typeof groupLayoutRouteWithChildren
  '': typeof LayoutLayout2RouteWithChildren
  '/lazyinside': typeof groupLazyinsideRoute
  '/posts/$postId': typeof PostsPostIdRoute
  '/posts': typeof PostsIndexRoute
  '/inside': typeof groupLayoutInsideRoute
  '/layout-a': typeof LayoutLayout2LayoutARoute
  '/layout-b': typeof LayoutLayout2LayoutBRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/posts': typeof PostsRouteWithChildren
  '/(group)': typeof groupRouteWithChildren
  '/(group)/_layout': typeof groupLayoutRouteWithChildren
  '/(group)/lazyinside': typeof groupLazyinsideRoute
  '/_layout/_layout-2': typeof LayoutLayout2RouteWithChildren
  '/posts/$postId': typeof PostsPostIdRoute
  '/posts/': typeof PostsIndexRoute
  '/(group)/_layout/inside': typeof groupLayoutInsideRoute
  '/_layout/_layout-2/layout-a': typeof LayoutLayout2LayoutARoute
  '/_layout/_layout-2/layout-b': typeof LayoutLayout2LayoutBRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/posts'
    | '/lazyinside'
    | '/posts/$postId'
    | '/posts/'
    | '/inside'
    | '/layout-a'
    | '/layout-b'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/lazyinside'
    | '/posts/$postId'
    | '/posts'
    | '/inside'
    | '/layout-a'
    | '/layout-b'
  id:
    | '__root__'
    | '/'
    | '/_layout'
    | '/posts'
    | '/(group)'
    | '/(group)/_layout'
    | '/(group)/lazyinside'
    | '/_layout/_layout-2'
    | '/posts/$postId'
    | '/posts/'
    | '/(group)/_layout/inside'
    | '/_layout/_layout-2/layout-a'
    | '/_layout/_layout-2/layout-b'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LayoutRoute: typeof LayoutRouteWithChildren
  PostsRoute: typeof PostsRouteWithChildren
  groupRoute: typeof groupRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LayoutRoute: LayoutRouteWithChildren,
  PostsRoute: PostsRouteWithChildren,
  groupRoute: groupRouteWithChildren,
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
        "/_layout",
        "/posts",
        "/(group)"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/_layout-2"
      ]
    },
    "/posts": {
      "filePath": "posts.tsx",
      "children": [
        "/posts/$postId",
        "/posts/"
      ]
    },
    "/(group)": {
      "filePath": "(group)",
      "children": [
        "/(group)/_layout",
        "/(group)/lazyinside"
      ]
    },
    "/(group)/_layout": {
      "filePath": "(group)/_layout.tsx",
      "parent": "/(group)",
      "children": [
        "/(group)/_layout/inside"
      ]
    },
    "/(group)/lazyinside": {
      "filePath": "(group)/lazyinside.tsx",
      "parent": "/(group)"
    },
    "/_layout/_layout-2": {
      "filePath": "_layout/_layout-2.tsx",
      "parent": "/_layout",
      "children": [
        "/_layout/_layout-2/layout-a",
        "/_layout/_layout-2/layout-b"
      ]
    },
    "/posts/$postId": {
      "filePath": "posts.$postId.tsx",
      "parent": "/posts"
    },
    "/posts/": {
      "filePath": "posts.index.tsx",
      "parent": "/posts"
    },
    "/(group)/_layout/inside": {
      "filePath": "(group)/_layout.inside.tsx",
      "parent": "/(group)/_layout"
    },
    "/_layout/_layout-2/layout-a": {
      "filePath": "_layout/_layout-2/layout-a.tsx",
      "parent": "/_layout/_layout-2"
    },
    "/_layout/_layout-2/layout-b": {
      "filePath": "_layout/_layout-2/layout-b.tsx",
      "parent": "/_layout/_layout-2"
    }
  }
}
ROUTE_MANIFEST_END */

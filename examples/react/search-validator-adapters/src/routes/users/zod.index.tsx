import * as React from 'react'
import { createFileRoute, useNavigate } from '@tomrehnstrom/react-router'
import { fallback, zodSearchValidator } from '@tomrehnstrom/router-zod-adapter'
import { z } from 'zod'
import { Header } from '../../components/Header'
import { Users, usersQueryOptions } from '../../components/Users'
import { Content } from '../../components/Content'
import { Search } from '../../components/Search'

const Zod = () => {
  const search = Route.useSearch({
    select: (search) => search.search ?? '',
  })
  const navigate = useNavigate({ from: Route.fullPath })

  return (
    <>
      <Header title="Zod" />
      <Content>
        <Search
          search={search}
          onChange={(search) => navigate({ search: { search }, replace: true })}
        />
        <React.Suspense>
          <Users search={search} />
        </React.Suspense>
      </Content>
    </>
  )
}

export const Route = createFileRoute('/users/zod/')({
  validateSearch: zodSearchValidator(
    z.object({
      search: fallback(z.string().optional(), undefined),
    }),
  ),
  loaderDeps: (opt) => ({ search: opt.search }),
  loader: (opt) => {
    opt.context.queryClient.ensureQueryData(
      usersQueryOptions(opt.deps.search.search ?? ''),
    )
  },
  component: Zod,
})

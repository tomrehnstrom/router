import { createFileRoute, getRouteApi, useSearch } from '@tomrehnstrom/react-router'
import { z } from 'zod'
import { zodSearchValidator } from '@tomrehnstrom/router-zod-adapter'

const routeApi = getRouteApi('/(group)/_layout/inside')

export const Route = createFileRoute('/(group)/_layout/inside')({
  validateSearch: zodSearchValidator(
    z.object({ hello: z.string().optional() }),
  ),
  component: () => {
    const searchViaHook = useSearch({ from: '/(group)/_layout/inside' })
    const searchViaRouteHook = Route.useSearch()
    const searchViaRouteApi = routeApi.useSearch()
    return (
      <>
        <div data-testid="search-via-hook">{searchViaHook.hello}</div>
        <div data-testid="search-via-route-hook">
          {searchViaRouteHook.hello}
        </div>
        <div data-testid="search-via-route-api">{searchViaRouteApi.hello}</div>
      </>
    )
  },
})

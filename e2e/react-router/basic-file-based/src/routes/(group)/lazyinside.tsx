import { createFileRoute } from '@tomrehnstrom/react-router'
import { z } from 'zod'
import { zodSearchValidator } from '@tomrehnstrom/router-zod-adapter'

export const Route = createFileRoute('/(group)/lazyinside')({
  validateSearch: zodSearchValidator(
    z.object({ hello: z.string().optional() }),
  ),
})

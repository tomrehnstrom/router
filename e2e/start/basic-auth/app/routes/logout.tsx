import { createFileRoute, redirect } from '@tomrehnstrom/react-router'
import { createServerFn } from '@tomrehnstrom/start'
import { useAppSession } from '~/utils/session'

const logoutFn = createServerFn('POST', async () => {
  const session = await useAppSession()

  session.clear()

  throw redirect({
    href: '/',
  })
})

export const Route = createFileRoute('/logout')({
  preload: false,
  loader: () => logoutFn(),
})

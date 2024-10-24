import { createFileRoute, redirect } from '@tomrehnstrom/react-router'
import { createServerFn } from '@tomrehnstrom/start'
import { getSupabaseServerClient } from '../utils/supabase'

const logoutFn = createServerFn('POST', async () => {
  const supabase = await getSupabaseServerClient()
  const { error } = await supabase.auth.signOut()

  if (error) {
    return {
      error: true,
      message: error.message,
    }
  }

  throw redirect({
    href: '/',
  })
})

export const Route = createFileRoute('/logout')({
  preload: false,
  loader: () => logoutFn(),
})

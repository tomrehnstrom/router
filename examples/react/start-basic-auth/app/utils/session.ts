// app/services/session.server.ts
import { createCookieSessionStorage } from '@remix-run/node'

import type { User } from '@prisma/client'

type SessionUser = {
  userEmail: User['email']
}

// export the whole sessionStorage object
export const sessionStorage = createCookieSessionStorage<SessionUser>({
  cookie: {
    name: '_session', // use any name you want here
    sameSite: 'lax', // this helps with CSRF
    path: '/', // remember to add this so the cookie will work in all routes
    httpOnly: true, // for security reasons, make this cookie http only
    secrets: ['s3cr3t'], // replace this with an actual secret
    secure: process.env.NODE_ENV === 'production', // enable this in prod only
  },
})

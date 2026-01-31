import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { tanstackStartCookies } from 'better-auth/tanstack-start'
import { db } from '@/modules/db'
import { serverEnv } from '@/config/env/server'
import { user, session, account, verification } from '@/modules/db/auth-schema'

const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: { user, session, account, verification },
  }),
  baseURL: serverEnv.BETTER_AUTH_BASE_URL,
  plugins: [tanstackStartCookies()],
  socialProviders: {
    github: {
      clientId: serverEnv.GITHUB_CLIENT_ID,
      clientSecret: serverEnv.GITHUB_CLIENT_SECRET,
    },
  },
})

export { auth as default }

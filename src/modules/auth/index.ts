import { db } from '@/modules/db'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { env } from '@/config/env'
import { tanstackStartCookies } from 'better-auth/tanstack-start'

const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  baseURL: env.server.BETTER_AUTH_BASE_URL,
  plugins: [tanstackStartCookies()],
})

export { auth as default }

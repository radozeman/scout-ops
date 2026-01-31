import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { tanstackStartCookies } from 'better-auth/tanstack-start'
import { env } from '@/config/env'
import { db } from '@/modules/db'

const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  baseURL: env.server.BETTER_AUTH_BASE_URL,
  plugins: [tanstackStartCookies()],
})

export { auth as default }

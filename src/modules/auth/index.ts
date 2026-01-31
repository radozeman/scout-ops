import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { tanstackStartCookies } from 'better-auth/tanstack-start'
import { db } from '@/modules/db'
import { serverEnv } from '@/config/env/server'

const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  baseURL: serverEnv.BETTER_AUTH_BASE_URL,
  plugins: [tanstackStartCookies()],
})

export { auth as default }

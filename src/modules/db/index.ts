import { drizzle } from 'drizzle-orm/neon-http'
import { serverEnv } from '@/config/env/server'

const db = drizzle(serverEnv.DATABASE_URL)

export { db }

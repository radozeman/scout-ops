import { drizzle } from 'drizzle-orm/neon-http'
import { env } from '@/config/env'

const db = drizzle(env.server.DATABASE_URL)

export { db }

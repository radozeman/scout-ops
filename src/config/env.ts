import { z } from 'zod'

const serverEnvSchema = z.object({
  BETTER_AUTH_BASE_URL: z.url(),
  NODE_ENV: z.enum(['development', 'production', 'test']),
  DATABASE_URL: z.string().nonempty(),
  BETTER_AUTH_SECRET: z.string().nonempty(),
})

const clientEnvSchema = z.object({
  VITE_BETTER_AUTH_BASE_URL: z.url(),
})

// Validate server environment
const serverEnv = serverEnvSchema.parse(process.env)

// Validate client environment
const clientEnv = clientEnvSchema.parse(import.meta.env)

const env = {
  client: clientEnv,
  server: serverEnv,
}

export { env }

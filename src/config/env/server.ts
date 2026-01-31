import { z } from 'zod'

const serverEnvSchema = z.object({
  BETTER_AUTH_BASE_URL: z.string(),
  NODE_ENV: z.enum(['development', 'production', 'test']),
  DATABASE_URL: z.string().min(1),
  BETTER_AUTH_SECRET: z.string().min(1),
  GITHUB_CLIENT_ID: z.string().min(1),
  GITHUB_CLIENT_SECRET: z.string().min(1),
})

const serverEnv = serverEnvSchema.parse(process.env)

export { serverEnv }

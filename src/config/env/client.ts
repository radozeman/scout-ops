import { z } from 'zod'

const clientEnvSchema = z.object({
  VITE_BETTER_AUTH_BASE_URL: z.string().url(),
})

const clientEnv = clientEnvSchema.parse(import.meta.env)

export { clientEnv }

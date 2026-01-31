// JavaScript file because it's shared with build processes.

/**
 * TanStack Start notes:
 * - Server: process.env.*
 * - Client: import.meta.env.VITE_*
 *
 * Anything you need in the browser MUST be VITE_-prefixed.
 * (e.g. APP_URL -> VITE_APP_URL)
 */

const isServer = typeof window === 'undefined'

/**
 * Environment variables (split into server-only and public/client-safe).
 *
 * Keep this static so bundlers can optimize and so you don't accidentally
 * expose secrets to the client.
 */
const variables = {
  // -------------------
  // Server-only vars
  // -------------------
  CI: process.env.CI,
  NODE_ENV: process.env.NODE_ENV,

  // -------------------
  // Public (client-safe) vars
  // IMPORTANT: must be VITE_-prefixed to be readable in the browser.
  // -------------------
  VITE_APP_URL: import.meta.env.VITE_APP_URL,
}

/**
 * Type-safe-ish constrain to enforce an environment variable to be
 * available and return its value, or throw otherwise.
 *
 * @type {<K extends keyof typeof variables, B extends boolean | undefined = undefined>(name: K, enforce?: B) => B extends false ? (string | undefined) : string}
 */
function env(name, enforce) {
  const value = variables[name]

  if (enforce !== false && typeof value === 'undefined') {
    // Helpful hint: if we're in the browser, remind about VITE_ prefix.
    const hint =
      !isServer && String(name).toUpperCase() === 'APP_URL'
        ? ' (Did you set VITE_APP_URL? Client code can only read VITE_-prefixed vars.)'
        : ''

    throw new Error(`Missing ${name} environment variable${hint}`)
  }

  return value
}

export { variables, env }

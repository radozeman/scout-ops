/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Client-side environment variables
  readonly VITE_BETTER_AUTH_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Server-side environment variables
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly BETTER_AUTH_BASE_URL: string
      readonly NODE_ENV: 'development' | 'production' | 'test'
      readonly BETTER_AUTH_SECRET: string
      readonly DATABASE_URL: string
    }
  }
}

export {}

import { signIn } from '@/modules/auth/auth-client'
import { createFileRoute } from '@tanstack/react-router'

const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {

  return <div><button onClick={signIn}>Login with Github</button></div>
}

export { Route }

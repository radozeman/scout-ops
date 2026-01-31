import { createFileRoute } from '@tanstack/react-router'

const Route = createFileRoute('/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/register"!</div>
}

export { Route }

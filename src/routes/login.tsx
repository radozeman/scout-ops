import { createFileRoute } from '@tanstack/react-router'

 const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/login"!</div>
}

export { Route }
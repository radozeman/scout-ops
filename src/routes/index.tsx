import { createFileRoute } from "@tanstack/react-router";

 const Route = createFileRoute("/")({ component: App });

function App() {
return (
  'hi'
);
}

export { Route }
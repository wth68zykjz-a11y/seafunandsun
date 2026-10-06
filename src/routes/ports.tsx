import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ports")({
  component: PortsLayout,
});

function PortsLayout() {
  return <Outlet />;
}

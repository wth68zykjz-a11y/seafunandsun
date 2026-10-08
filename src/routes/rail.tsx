import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/rail")({
  component: RailLayout,
});

function RailLayout() {
  return <Outlet />;
}

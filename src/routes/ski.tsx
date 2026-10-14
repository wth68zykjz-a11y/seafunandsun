import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ski")({
  component: SkiLayout,
});

function SkiLayout() {
  return <Outlet />;
}

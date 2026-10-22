import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/itineraries")({
  beforeLoad: () => {
    throw redirect({ to: "/destinations", statusCode: 301 });
  },
});

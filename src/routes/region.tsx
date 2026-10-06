import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/region")({
  beforeLoad: () => {
    throw redirect({
      to: "/destinations/$slug",
      params: { slug: "panama-canal" },
      statusCode: 301,
    });
  },
});

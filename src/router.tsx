import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

function parseSearch(searchStr: string): Record<string, string> {
  const params = new URLSearchParams(searchStr.startsWith("?") ? searchStr.slice(1) : searchStr);
  const out: Record<string, string> = {};
  for (const [key, value] of params) {
    if (key) out[key] = value;
  }
  return out;
}

function stringifySearch(search: Record<string, unknown>) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(search)) {
    if (value === undefined || value === null || value === "") continue;
    params.set(key, typeof value === "string" ? value : String(value));
  }
  const query = params.toString();
  return query ? `?${query}` : "";
}

export function getRouter() {
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    scrollRestoration: true,
    parseSearch,
    stringifySearch,
  });
}

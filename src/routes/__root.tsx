import type { ReactNode } from "react";
import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { agencyGraph, JsonLd } from "@/lib/seo";
import appCss from "../styles.css?url";

const APP_NAME = "Sea Fun & Sun";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0c2340" },
      { name: "application-name", content: APP_NAME },
      { name: "geo.region", content: "US-CT" },
      { name: "geo.placename", content: "Farmington" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      { rel: "alternate", type: "text/plain", href: "/llms.txt", title: "Facts for search and AI assistants" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Marcellus&family=Outfit:wght@400;500;600&display=optional",
      },
    ],
  }),
  shellComponent: RootShell,
  component: () => (
    <>
      <PreviewHostBridge />
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </>
  ),
  notFoundComponent: () => (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col justify-center gap-4 px-6">
      <p className="text-sm font-medium text-tide">Sea Fun & Sun</p>
      <h1 className="font-display text-4xl text-ink">That page is not on this site.</h1>
      <p className="text-mute">The link may be old. The home page and the quote form are both still here.</p>
      <Link
        to="/"
        className="inline-flex min-h-11 w-fit items-center rounded-md bg-coral px-4 text-sm font-medium text-foam"
      >
        Back home
      </Link>
    </main>
  ),
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "html{background:#e6f0ec}html.booting body{opacity:0}html,body{margin:0;background:#e6f0ec;color:#122033}body{font-family:Outfit,'Avenir Next',system-ui,sans-serif}header{background:#0c2340;color:#f7fbf9}a{color:inherit}svg.logo-mark{width:2.25rem;height:2.25rem;display:block}svg.hero-logo{display:none;width:11rem;height:auto}@media(min-width:640px){svg.logo-mark{width:2.75rem;height:2.75rem}}@media(min-width:1024px){svg.hero-logo{display:block;width:14rem}}",
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('booting');setTimeout(function(){document.documentElement.classList.remove('booting')},2500)",
          }}
        />
        <link id="site-css" rel="stylesheet" href={appCss} />
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.remove('booting')",
          }}
        />
        <HeadContent />
      </head>
      <body>
        <JsonLd data={agencyGraph()} />
        {children}
        <Scripts />
      </body>
    </html>
  );
}

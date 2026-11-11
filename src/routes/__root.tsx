import type { ReactNode } from "react";
import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { agencyGraph, JsonLd } from "@/lib/seo";
import appCss from "../styles.css?inline";

const APP_NAME = "Sea Fun & Sun";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
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
      <title>Page not found — Sea Fun & Sun</title>
      <meta name="robots" content="noindex, nofollow" />
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
              "html{background:#e6f0ec;font-size:17px}html,body{margin:0;background:#e6f0ec;color:#122033}body{font-family:'Avenir Next','Segoe UI',system-ui,sans-serif}header{background:#0c2340}h1.hero-title,.hero-stat{font-family:Georgia,'Iowan Old Style',Palatino,serif;font-optical-sizing:none}h1.hero-title{font-size:2.25rem;line-height:1.05}.hero-copy{font-family:'Avenir Next','Segoe UI',system-ui,sans-serif;font-size:1rem;line-height:1.65}.hero-stat{font-size:1.875rem;line-height:1}svg.logo-mark{width:2.25rem;height:2.25rem;display:block}svg.hero-logo{display:none;width:11rem;height:auto}@media(min-width:640px){h1.hero-title{font-size:3.75rem}.hero-copy{font-size:1.125rem}.hero-stat{font-size:2.25rem}svg.logo-mark{width:2.75rem;height:2.75rem}}@media(min-width:1024px){svg.hero-logo{display:block;width:14rem}}",
          }}
        />
        <style dangerouslySetInnerHTML={{ __html: appCss }} />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.addEventListener('load',function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,72,500;0,72,600;1,72,500&family=Marcellus&family=Outfit:wght@400;500;600&display=optional';document.head.appendChild(l);var s=document.createElement('script');s.src='https://www.googletagmanager.com/gtag/js?id=G-R12KCXY9XE';s.async=true;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-R12KCXY9XE');});",
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  function register(){
    var mc = (typeof navigator!=='undefined' && navigator.modelContext) || (typeof document!=='undefined' && document.modelContext);
    if(!mc || typeof mc.registerTool!=='function') return;
    try {
      mc.registerTool({
        name: 'request_quote',
        description: 'Open the quote form so a traveler can request a cruise, resort, ski, or rail trip from Sea Fun & Sun. Use this when someone wants to start planning a vacation.',
        inputSchema: {
          type: 'object',
          properties: {
            destination: { type: 'string', description: 'Where they want to go (optional)' },
            tripType: { type: 'string', description: 'cruise, resort, ski, expedition, rail, or other (optional)' }
          }
        },
        execute: async function(input){
          var url = '/quote';
          if(input && (input.destination || input.tripType)){
            var q = new URLSearchParams();
            if(input.destination) q.set('destination', input.destination);
            if(input.tripType) q.set('type', input.tripType);
            url += '?' + q.toString();
          }
          window.location.href = url;
          return { content: [{ type: 'text', text: 'Opening the quote form.' }] };
        }
      });
      mc.registerTool({
        name: 'get_contact',
        description: 'Return the phone number and email for Sea Fun & Sun so an agent can help a traveler reach the agency.',
        inputSchema: { type: 'object', properties: {} },
        execute: async function(){
          return {
            content: [{
              type: 'text',
              text: 'Phone/text: (959) 666-2062\nEmail: Booking@Seafunandsun.com\nBased in Farmington, Connecticut. Weekdays about 9 AM\u20136 PM Eastern.'
            }]
          };
        }
      });
    } catch(e) {}
  }
  if(document.readyState==='complete') register();
  else window.addEventListener('load', register);
})();`,
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

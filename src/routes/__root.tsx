import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-bg px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-text-1">Page not found</h1>
        <p className="mt-3 text-sm text-text-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex h-10 items-center justify-center rounded-[10px] bg-brand px-5 text-sm font-semibold text-brand-text transition hover:bg-brand-hover"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-bg px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold text-text-1">This page didn't load</h1>
        <p className="mt-3 text-sm text-text-2">
          Something went wrong on our end. Try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex h-10 items-center justify-center rounded-[10px] bg-brand px-5 text-sm font-semibold text-brand-text transition hover:bg-brand-hover"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-[10px] border border-[color:var(--border-default)] bg-surface-2 px-5 text-sm font-semibold text-text-1 transition hover:bg-surface-3"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0A0B0F" },
      { title: "DevLaunch — Ship code, not YAML files." },
      {
        name: "description",
        content:
          "DevLaunch turns any GitHub repo into a live URL in 90 seconds. AI-powered CI/CD with self-healing builds, deploy to any cloud.",
      },
      { name: "author", content: "DevLaunch" },
      { property: "og:site_name", content: "DevLaunch" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "DevLaunch — Ship code, not YAML files." },
      {
        property: "og:description",
        content: "GitHub → live URL in 90 seconds. AI fixes broken builds before you notice.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "DevLaunch — Ship code, not YAML files." },
      {
        name: "twitter:description",
        content: "GitHub → live URL in 90 seconds. AI-powered CI/CD with self-healing builds.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-THMDC3DDYY",
      },
      {
        children:
          "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-THMDC3DDYY',{send_page_view:true});window.trackConversion=function(name,params){gtag('event',name,params||{});};",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}

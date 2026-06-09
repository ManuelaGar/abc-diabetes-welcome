import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import appleTouchIcon from "../assets/favicon/apple-touch-icon.png?url";
import favicon96 from "../assets/favicon/favicon-96x96.png?url";
import faviconIco from "../assets/favicon/favicon.ico?url";
import faviconSvg from "../assets/favicon/favicon.svg?url";
import webAppManifest192 from "../assets/favicon/web-app-manifest-192x192.png?url";
import webAppManifest512 from "../assets/favicon/web-app-manifest-512x512.png?url";

const siteWebManifest = `data:application/manifest+json,${encodeURIComponent(
  JSON.stringify({
    name: "ABC Diabetes",
    short_name: "ABC",
    icons: [
      {
        src: webAppManifest192,
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: webAppManifest512,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
  }),
)}`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
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
      { title: "Lovable App" },
      { name: "description", content: "ABC Diabetes Hub: A clinic landing page showcasing doctors, specialties, and patient testimonials." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "ABC Diabetes Hub: A clinic landing page showcasing doctors, specialties, and patient testimonials." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "twitter:description", content: "ABC Diabetes Hub: A clinic landing page showcasing doctors, specialties, and patient testimonials." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/30e084a5-b594-4f62-b83c-a36eb838f868/id-preview-6e015149--16b09c04-8a11-4981-b7cb-5e1e257cb82f.lovable.app-1778707317700.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/30e084a5-b594-4f62-b83c-a36eb838f868/id-preview-6e015149--16b09c04-8a11-4981-b7cb-5e1e257cb82f.lovable.app-1778707317700.png" },
      { name: "facebook-domain-verification", content: "tza6dw278lmvkc66j4ig77bbm8ftll" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: favicon96,
        type: "image/png",
        sizes: "96x96",
      },
      {
        rel: "icon",
        href: faviconSvg,
        type: "image/svg+xml",
      },
      {
        rel: "shortcut icon",
        href: faviconIco,
      },
      {
        rel: "apple-touch-icon",
        href: appleTouchIcon,
        sizes: "180x180",
      },
      {
        rel: "manifest",
        href: siteWebManifest,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
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

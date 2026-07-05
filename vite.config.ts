import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { existsSync, symlinkSync, copyFileSync } from "node:fs";
import { join } from "node:path";

// Fix: TanStack Start's preview server (used during SPA prerender) looks for
// `dist/server/server.js`, but the Cloudflare preset outputs `dist/server/index.mjs`.
// Alias it so prerender can boot the server and generate `dist/client/index.html`.
function aliasServerBundlePlugin() {
  return {
    name: "lovable:alias-server-bundle",
    configurePreviewServer: {
      order: "pre" as const,
      handler(server: any) {
        const dir = join(process.cwd(), "dist", "server");
        const src = join(dir, "index.mjs");
        const dest = join(dir, "server.js");
        if (existsSync(src) && !existsSync(dest)) {
          try {
            symlinkSync(src, dest);
          } catch {
            copyFileSync(src, dest);
          }
        }
      },
    },
  };
}

export default defineConfig({
  plugins: [aliasServerBundlePlugin()],
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index.html",
      },
    },
  },
});

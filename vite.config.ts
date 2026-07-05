import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fix: TanStack Start's preview server (used during SPA prerender) looks for
// `dist/server/server.js`, but the Cloudflare preset outputs `dist/server/index.mjs`
// which expects a Cloudflare Worker `env` (with an ASSETS binding). Under Node
// prerender `env` is undefined and the module crashes on `env.ASSETS`.
// Write a small Node-compatible wrapper that injects a stub env.
function aliasServerBundlePlugin() {
  return {
    name: "lovable:alias-server-bundle",
    configurePreviewServer: {
      order: "pre" as const,
      handler() {
        const dir = join(process.cwd(), "dist", "server");
        const dest = join(dir, "server.js");
        if (existsSync(join(dir, "index.mjs")) && !existsSync(dest)) {
          writeFileSync(
            dest,
            [
              "import mod from './index.mjs';",
              "const stubEnv = {};",
              "const stubCtx = { waitUntil() {}, passThroughOnException() {} };",
              "export default {",
              "  fetch(request, env, ctx) {",
              "    return mod.fetch(request, env ?? stubEnv, ctx ?? stubCtx);",
              "  },",
              "};",
            ].join("\n"),
          );
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

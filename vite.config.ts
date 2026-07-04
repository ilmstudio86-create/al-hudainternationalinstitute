import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { promises as fs } from "node:fs";
import path from "node:path";

export default defineConfig({
  plugins: [
    {
      name: "fix-server-js",
      closeBundle: async () => {
        const serverDir = path.resolve("dist/server");
        const target = path.join(serverDir, "server.js");
        const indexMjs = path.join(serverDir, "index.mjs");
        try {
          await fs.stat(indexMjs);
          await fs.writeFile(
            target,
            `export { default } from './index.mjs';\n`
          );
        } catch {
          // index.mjs doesn't exist, skip
        }
      },
    },
  ],
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index.html",
      },
    },
  },
});

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    preset: "node-server",
  },
  tanstackStart: {
    prerender: {
      enabled: false,
    },
    spa: {
      enabled: false,
    },
  },
});

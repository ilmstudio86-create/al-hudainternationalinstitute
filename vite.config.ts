import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    preset: "netlify",
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


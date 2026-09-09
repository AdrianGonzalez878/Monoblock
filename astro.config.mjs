// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { site } from "./src/data/site.ts";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || site.url,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

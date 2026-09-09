// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { site } from "./src/data/site.ts";

const siteUrl =
  process.env.PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : site.url);

export default defineConfig({
  site: siteUrl,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

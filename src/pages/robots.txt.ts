import type { APIRoute } from "astro";
import { site as siteData } from "../data/site";

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL("sitemap-index.xml", site ?? siteData.url).href;

  return new Response(
    ["User-agent: *", "Allow: /", "", `Sitemap: ${sitemap}`, ""].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
};

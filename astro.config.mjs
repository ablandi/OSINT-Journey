import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://whatsittoya.netlify.app",
  integrations: [sitemap()],
  markdown: {
    gfm: true,
  },
});

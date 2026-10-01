import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://whatsittoya.netlify.app",
  integrations: [sitemap({ filter: (page) => !page.includes("/dead-drop/") })],
  markdown: {
    gfm: true,
  },
});

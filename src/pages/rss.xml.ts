import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { sortPosts } from "../utils/posts";

export async function GET(context: { site: URL | undefined }) {
  const posts = sortPosts(await getCollection("blog"));
  return rss({
    title: "OSINT Journey",
    description:
      "Documenting a journey learning open source intelligence (OSINT) — and the fight against human trafficking.",
    site: context.site ?? "https://whatsittoya.netlify.app",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
  });
}

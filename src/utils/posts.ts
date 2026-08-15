import type { CollectionEntry } from "astro:content";

export function sortPosts(posts: CollectionEntry<"blog">[]): CollectionEntry<"blog">[] {
  return [...posts].sort((a, b) => {
    const diff = b.data.pubDate.getTime() - a.data.pubDate.getTime();
    return diff !== 0 ? diff : a.id.localeCompare(b.id);
  });
}

import type { CollectionEntry } from "astro:content";

export function slugifyTag(tag: string): string {
  return tag.toLowerCase().replace(/\s+/g, "-");
}

export function allTags(
  posts: CollectionEntry<"blog">[]
): { tag: string; slug: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags ?? []) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, slug: slugifyTag(tag), count }))
    .sort((a, b) => a.tag.localeCompare(b.tag));
}

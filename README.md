# OSINT-Journey

Source for [whatsittoya.netlify.app](https://whatsittoya.netlify.app/) — a static Astro blog
documenting a journey learning open source intelligence (OSINT).

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

## Structure

```
src/
  content/blog/*.md      posts (frontmatter: title, description, pubDate)
  content.config.ts      blog collection schema
  layouts/BaseLayout.astro
  components/PostList.astro
  pages/                 index.astro, about.astro, blog/index.astro, blog/[...slug].astro
  styles/global.css
public/favicon.svg
```

## Adding a post

Create `src/content/blog/my-post.md`:

```md
---
title: "My post title"
description: "One-sentence summary shown in listings and meta tags."
pubDate: 2026-08-15
---

Body in Markdown (GFM, including footnotes).
```

The filename becomes the URL: `/blog/my-post`. Posts are listed newest first.

## Deployment

Netlify builds with `npm run build` and publishes `dist/` (see `netlify.toml`).

## Note on this repository

This project was reconstructed from the deployed static HTML after the original source was
lost. Every published page rebuilds to markup identical to the live site (ignoring
whitespace and CSS-minifier formatting), but file organization and naming inside `src/`
are a reasonable reconstruction rather than a guaranteed copy of the original.

Dates render in `America/Los_Angeles` in `src/utils/date.ts` to match how the live site
displays them (one day earlier than the `pubDate` value, which the original build also did).

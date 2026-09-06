# recursiveloop.com.au

Static site for [Recursive Loop](https://www.recursiveloop.com.au), built with [Astro](https://astro.build) and hosted on GitHub Pages. It replaces the former Squarespace site page for page, with the same URLs.

## Working on the site

```bash
pnpm install
pnpm dev        # http://localhost:4321, live reload
pnpm build      # static output in dist/
pnpm preview    # serve dist/ locally
```

Node 22 or newer and pnpm 8 or newer.

## Where things live

| What | Where |
|---|---|
| Site name, contact email, social links, analytics id, form ids, nav | `src/site.ts` |
| Colours, fonts, spacing, buttons | `src/styles/global.css` |
| Header and footer | `src/components/Header.astro`, `src/components/Footer.astro` |
| Home, About, Our People, Book a Chat, 404 | `src/pages/*.astro` |
| Course catalogue (text for /classes) | `src/data/courses.ts` |
| Coaching offerings (text for /coaching) | `src/data/coaching.ts` |
| Blog posts | `src/content/insights/*.md` |
| Images | `public/images/` |
| Contact form | `src/components/ContactForm.astro` |
| Newsletter sign-up | `src/components/Newsletter.astro` |

### Adding a blog post

Create `src/content/insights/my-post-slug.md`. The file name becomes the URL, `/insights/my-post-slug`.

```md
---
title: "Post title"
description: "One or two sentences shown on the listing and in search results."
pubDate: 2026-09-06
image: "/images/my-thumbnail.jpg"
---

Body in Markdown.
```

The listing, RSS feed (`/insights/rss.xml`) and sitemap update automatically on the next build.

## One-time setup after cloning

1. **Contact form.** Create a form at [formspree.io](https://formspree.io), copy its id and set `formspreeId` in `src/site.ts`. Submissions go to the email on the Formspree account. Successful submissions redirect to `/thanks`.
2. **Newsletter.** Create a newsletter at [buttondown.com](https://buttondown.com), then set `buttondownUser` in `src/site.ts` to the Buttondown username. Import the subscriber list exported from Squarespace.
3. **GitHub Pages.** In the repository, Settings → Pages → Source: *GitHub Actions*. Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.
4. **Custom domain.** Settings → Pages → Custom domain: `www.recursiveloop.com.au` (matches `public/CNAME`). Then at the DNS host for recursiveloop.com.au:
   - `A @` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME www` → `mkzer0.github.io`
   - leave MX and TXT records unchanged.
   Once the certificate is issued, tick *Enforce HTTPS*.

## Migration notes

- `crawl/` holds the inventory of the old Squarespace site, the original sitemap, the blog export and the image URL map. `scripts/` holds the one-off download and conversion scripts used to build this repository. Neither is used by the build.
- `/home` redirects to `/` for old links.
- Squarespace's search and cart pages were unused and are not carried over.

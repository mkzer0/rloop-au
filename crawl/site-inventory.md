# recursiveloop.com.au — crawl inventory (6 Sep 2026)

Platform: Squarespace 7.1 (Fluid Engine), site id 61eb2fbee813be5258d5b35c. Language en-AU, timezone Australia/Adelaide.
Canonical host: https://www.recursiveloop.com.au (apex and rloop.com.au both 301 to it).

## Pages (17 in sitemap)

| URL | Type | Sections | Notable content |
|---|---|---|---|
| / (home) | page | 4 (black/white/light/black) | Hero image, ICP-ATF announcement, CTA mailto info@rloop.com.au, "Explore classes" button, newsletter form (First, Last, Email) |
| /about | page | 4 | Mission copy, 4 client logos (SA Gov, SA Power Networks, Uni of Adelaide, Cuscal), Franklin quote |
| /our-people | page | 3 | Intro, Michael Fagan bio + photo, Martin Kearns bio + photo |
| /classes | page | 8 | 6 courses each with image + accordion "Course details" + "Enquire now" mailto: ICP-ATF, ICP-PRG, Foundations of Scrum, ICP Fundamentals, CSM, CSPO. Links to Eventbrite, ICAgile, Scrum Alliance. |
| /coaching | page | 6 | 4 offerings with images: Realising DevOps, Scaling Scrum, Team Level Scrum, Adaptable Software Mentoring; "Let's talk" CTA |
| /chat | page | 2 | "Let's Chat!" form (Name, Email, newsletter opt-in checkbox, Subject, Services checkboxes [Coaching/Training/Facilitation], Message; captcha on; success message "respond within 3 business days") + Map block |
| /insights | blog (blog-basic-grid) | — | 10 posts, all by Michael Fagan, no categories/tags, comments disabled. RSS at /insights?format=rss |
| /cart | commerce | — | Default empty store (USD), no products. Unused. |
| /search | system | — | Squarespace site search. |

## Blog posts (/insights/<slug>)

| Published | Title | Slug | Notes |
|---|---|---|---|
| 2026-05-14 | Find The Swing Variables | ask-what-would-have-to-be-true | h3 headings, internal links |
| 2026-05-09 | Better Product Decisions Need Bayesian Thinking | better-product-decisions-need-bayesian-thinking | links to https://mkzer0.github.io/bayes/ |
| 2026-04-05 | How Evidence Changes What You Believe | on-changing-your-mind | longest (28k chars html) |
| 2026-04-05 | Law of Large Numbers: Try it Yourself! | law-of-large-numbers-try-it-yourself | blockquotes; links to https://mkzer0.github.io/lln/ |
| 2026-04-05 | The Hidden Order of Chaos… | the-hidden-order-of-chaos-why-you-need-less-data-than-you-think | pre/code blocks |
| 2026-04-04 | When Measurement Makes You Worse | when-measurement-makes-you-worse | blockquotes |
| 2025-08-05 | Better Partnering: Escaping the Procurement Prisoner's Dilemma | escaping-the-procurement-prisoners-dilemma | h3 headings, references |
| 2024-04-25 | What's in a Name? | whats-in-a-name | plain |
| 2024-04-15 | Putting "Continuous" back into Continuous Integration | putting-continuous-back-into-continuous-integration | 2 inline images |
| 2022-02-03 | How measuring your objectives influences results | measuring-objectives | 2 inline images |

Post bodies are plain rich text (p, h3, blockquote, pre/code, a, img). The `<script>` blocks inside posts are only Squarespace text-highlight decoration JSON, not interactive code. Every post has a thumbnail image (mostly Unsplash).

## Global elements

- Header: logo (recursive loop logo (larger).png), nav About / Our People / Classes / Coaching / Insights, "Book a Chat" button.
- Footer: "Let's chat", info@rloop.com.au, Adelaide, South Australia; social icons LinkedIn (michael-fagan-a6a38784), Twitter (mick_fagan), GitHub (mkzer0); 4 accreditation badges (Authorized Instructor, ICP-PRG, ICP, CTC).
- Analytics: Google Analytics G-6SB1NT3BG4. No cookie banner, no Facebook pixel, no Disqus.
- Favicon and OG image hosted on Squarespace CDN.

## Design tokens (from site.css)

- Fonts: headings "acumin-pro" (Adobe Fonts via Squarespace Typekit licence, NOT free); body/meta "Poppins" (Google Fonts).
- Palette: white #ffffff, black #000000, accent #a8a6a0 (warm grey, used for page-title bands), lightAccent #dedfe0, darkAccent #38383b. Link colour hsla(183,81%,49%) cyan appears in some link styles.
- Section themes used: black, white, light, bright, dark.

## Assets

- 45 unique images on images.squarespace-cdn.com (list in image-urls.txt). Full-size download works with `?format=original` (served as webp unless an `Accept: image/jpeg` header is sent).
- These URLs die when the Squarespace subscription ends.

## Email addresses in use (inconsistent)

- info@rloop.com.au (home CTA, footer text)
- info@recursiveloop.com.au (footer mailto link)
- mick@recursiveloop.com.au (classes and coaching "Enquire now" links)

## DNS / domains

- recursiveloop.com.au: registrar Web Address Registration (CrazyDomains), NS ns1/ns2.crazydomains.com. A -> 198.185.159.144/145, 198.49.23.144/145 (Squarespace). www CNAME ext-cust.squarespace.com. MX -> Proton Mail. SPF/verification TXT present.
- rloop.com.au: registrar Tucows/OpenSRS (the registrar Squarespace Domains uses), NS ns01–04.squarespacedns.com + nsone. MX -> Proton Mail (info@rloop.com.au lives here). Site forwards to www.recursiveloop.com.au.

## Prior work

- ~/repos/recursive-loop: an April 2026 Next.js 14 + Tailwind static-export scaffold (not a git repo, ~1,450 lines) with all page copy ported, Formspree/Buttondown placeholders, GitHub Actions deploy workflow. Blog is placeholder cards only.
- Interactive demos already on GitHub Pages: mkzer0/bayes, mkzer0/lln, mkzer0/expert-calibration.

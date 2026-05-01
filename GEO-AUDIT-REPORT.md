# GEO Audit Report: SmileMaxer (smilemaxer.com)

**Audit Date:** 2026-05-01
**URL:** https://smilemaxer.com
**Business Type:** Hybrid SaaS (consumer subscription iOS/macOS app, marketed via static brochure site)
**Pages Analyzed:** 7 (`index.html`, `about.html`, `support.html`, `privacy.html`, `terms.html`, `eula.html`, `404.html`)
**Target Surfaces:** Google AI Overviews, ChatGPT search, Perplexity, Gemini, Bing Copilot
**App Under Marketing:** PerioMaxer — voice-powered, on-device periodontal charting (App Store ID `6762096578`, v1.1, released 2026-04-26)
**Maker:** Max Mendelson (independent developer, UMD student)

---

## Executive Summary

**Overall GEO Score: 34/100 (Critical)**

The site is well-written, honest, and visually polished — but at the moment it is largely invisible to AI systems. Three structural problems dominate: (1) zero schema.org markup of any kind, so AI knowledge graphs have no entity hooks for the brand, the maker, or the product; (2) the three legal pages (privacy/terms/eula) are JS-rendered via `marked.js`, meaning non-JS AI crawlers see only "Loading document…" — about 5,500 words of substantive policy content is hidden; (3) the site has no organic third-party footprint (no Wikipedia, no YouTube, no Reddit, no Product Hunt, no industry press), and v1.1 only shipped days ago, so external entity recognition is at zero. The good news: the site's foundation is clean (HTTPS, mobile, fast, indexable HTML on most pages, original copy with domain literacy), and a focused 4-week sprint can realistically lift the composite score into the high 50s.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 38/100 | 25% | 9.5 |
| Brand Authority | 16/100 | 20% | 3.2 |
| Content E-E-A-T | 47/100 | 20% | 9.4 |
| Technical GEO | 64/100 | 15% | 9.6 |
| Schema & Structured Data | 6/100 | 10% | 0.6 |
| Platform Optimization | 18/100 | 10% | 1.8 |
| **Overall GEO Score** | | | **34.1 / 100** |

---

## Critical Issues (Fix Immediately)

1. **JS-only legal content makes 3 of 7 pages effectively empty for AI crawlers.**
   - Pages: [privacy.html](privacy.html), [terms.html](terms.html), [eula.html](eula.html).
   - The HTML ships only `<div class="legal-loading">Loading document…</div>` and uses [`marked@12`](https://cdn.jsdelivr.net/npm/marked@12/marked.min.js) on `DOMContentLoaded` to fetch [PRIVACY.md](PRIVACY.md), [TOS.md](TOS.md), [EULA.md](EULA.md) and inject them into the DOM. GPTBot, ClaudeBot, PerplexityBot, and Bing's AI surfaces do not execute JS.
   - **~5,500 words of dated legal content (Effective + Last Updated 2026-04-14) are invisible to most AI crawlers.**
   - Fix: prerender at build time. A 5–10 line shell or Node step that runs `marked` over each `.md` and inlines the HTML into `<article id="legal-content">` before commit. Eliminates the marked.js CDN dependency simultaneously.

2. **Zero schema.org markup across all pages.**
   - No JSON-LD, no microdata, no RDFa. AI models have no machine-readable signal that "SmileMaxer" is a brand, "PerioMaxer" is a SoftwareApplication, "Max Mendelson" is the author, or how those entities relate. This is the single biggest entity-graph gap.
   - Fix: ship `Organization`, `Person`, `MobileApplication`, `WebSite`, `FAQPage`, `BreadcrumbList` JSON-LD. Ready-to-paste blocks are in the [Schema & Structured Data deep-dive below](#schema--structured-data-6100).

3. **No `sitemap.xml`, no `robots.txt`, no `llms.txt`.**
   - Confirmed 404s for all three. With only ~7 pages this is a 30-minute fix and unblocks Google/Bing discovery, AI crawler allowlisting, and emerging `/llms.txt` ingest paths.

4. **Site is not in Google or Bing index.**
   - `site:smilemaxer.com` returns zero hits on either engine. SearchGPT/Bing Copilot need Bing inclusion; AI Overviews need Google inclusion. Fix dependent on (3) plus Search Console / Webmaster Tools verification.

---

## High Priority Issues (Fix Within 1 Week)

5. **No FAQ section anywhere on the site.** The single highest-leverage AI-citability surface is missing. Voice accuracy in operatory noise, offline behavior, multi-device sync, data export format, supported probing systems, what happens after a subscription lapses — all are obvious questions with no on-page answer. Add a `## Frequently asked` block to `index.html` with 6–10 Q&A pairs (40–60 words each) wrapped in `FAQPage` JSON-LD.

6. **No clinical disclaimer.** The site markets a tool used during real periodontal exams without stating that PerioMaxer is **not a medical device**, **not FDA-cleared**, and **not for diagnostic use**. This is a liability gap *and* an E-E-A-T trust gap. Add a one-paragraph block to homepage hero / footer and to the legal pages.

7. **No statistics, citations, or named clinicians.** The Princeton/Georgia Tech GEO study (2024) documents that quotes + citations + statistics drive the largest AI-visibility lift (+30–115%). The site has zero of any of them. Even one named hygienist quote ("Used PerioMaxer in 30+ exams over Q1 2026 — saved ~6 minutes per chart") moves authority more than any other single edit.

8. **No comparison content vs. category incumbents.** AI engines answering *"best voice perio charting app"* or *"Dentrix alternatives for solo practice"* cannot cite SmileMaxer because the site never names competitors (PerioVoice, Bola, Denti.AI, Dentrix Voice). An honest comparison page is among the most heavily cited surfaces in this category.

9. **No `<link rel="canonical">` on any page.** Verified absence across all 6 HTML pages. Duplicate-content risk for AI engines that treat URL identity strictly (e.g. `https://smilemaxer.com/` vs `https://smilemaxer.com/index.html`).

10. **No App Store rating / review surfacing.** The App Store listing has 5 ratings @ 5.0 average — that's the most authoritative third-party trust signal the site currently has, and it is not surfaced anywhere on the marketing site. (Do not fabricate `aggregateRating` schema; mirror real numbers only.)

11. **No `Person` / `Organization` schema with `sameAs`.** [about.html](about.html) has live links to [GitHub](https://github.com/MaxeThis), [LinkedIn](https://www.linkedin.com/in/maxwellmendelson/), and [Instagram](https://www.instagram.com/maxterr12/), and the homepage links to the App Store — but none of them are tied to a Person/Organization entity. This is the cheapest high-leverage GEO move available.

---

## Medium Priority Issues (Fix Within 1 Month)

12. **Open Graph + Twitter Card only on `index.html`.** [about.html](about.html), [support.html](support.html), [privacy.html](privacy.html), [terms.html](terms.html), [eula.html](eula.html) lack OG entirely → degraded link previews in ChatGPT, Slack, Discord, X.
13. **Homepage `og:image` uses a relative path** (`assets/img/app-icon-1024.png`). Spec wants absolute URLs; some scrapers fail on relative.
14. **No GitHub-Pages-level security headers.** Live header inspection returned only `server`, `content-type`, `cache-control: max-age=600`, `etag`, `vary`. None of HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy. GitHub Pages doesn't allow custom headers; partial mitigation via `<meta http-equiv="Content-Security-Policy">` and `<meta name="referrer">`, full fix via migrating to Cloudflare Pages or Netlify.
15. **No changelog / release notes / "what's new".** Freshness is invisible. A `/changelog` page mirroring App Store release notes is cheap and produces a continuously fresh, dated, indexable surface.
16. **Author credentials thin.** No degree-in-progress, no expected graduation, no major, no research lab name, no advisor. A single sentence on [about.html](about.html) ("B.S. Computer Science candidate, 2027, working with Dr. X at the UMD School of Dentistry on Y") moves expertise without overclaiming.
17. **External CDN dependency on legal pages.** `cdn.jsdelivr.net/npm/marked@12` is a third-party blocking script and a supply-chain surface. Removed automatically once issue #1 is fixed.
18. **No business entity / address in footer.** Footer reads "© Max Mendelson". For B2B clinical purchasers, a sole-proprietor or LLC line + jurisdiction would help trust.

---

## Low Priority Issues (Optimize When Possible)

19. **No `last-updated` date stamps** on marketing pages (only `© <year>` from runtime JS).
20. **`Cache-Control: max-age=600`** is conservative for static assets.
21. **Homepage screenshots** are welcome / charting / manual-entry only — no PDF-export screenshot, no meds/ICD-10 attachment screenshot, no smart-filter screenshot.
22. **`MobileApplication`** (recommended schema) is preferable over generic `SoftwareApplication` for an iOS-first product.

---

## Category Deep Dives

### AI Citability (38/100)

**What works.** Original, human-authored copy with specific voice ("designed from the chair, not a spreadsheet"; the "did you see the game?" smart-filter example; "a cup of coffee a month"). Six feature blocks are well-scoped (~25–35 words each, distinct, cleanly named). Pricing transparent. Trust line ("No ads. No data sold. No cloud accounts.") is quotable.

**What hurts citability.**

| Issue | Severity | Page(s) |
|---|---|---|
| Legal pages JS-rendered → invisible to non-JS bots | Critical | privacy/terms/eula |
| Zero JSON-LD anywhere | Critical | all |
| No FAQ / Q&A pairs anywhere | High | all |
| Zero statistics, benchmarks, or measurable claims | High | index |
| No third-party citations or expert quotes | High | index, about |
| Generic feature copy without proof points | Medium | index |
| No comparison vs PerioVoice / Bola / Denti.AI / Dentrix Voice | Medium | (missing page) |
| No `lastmod` / dateModified anywhere | Low | all |

**Top 5 actions.**
1. Server-render the legal markdown.
2. Add an FAQ block on `index.html` with 6–10 Q&As + `FAQPage` schema.
3. Add `MobileApplication` + `Organization` + `Person` JSON-LD.
4. Publish at least one quantified claim per feature ("Cuts solo perio exams from 8 minutes to under 4 in internal testing", "Recognizes 200+ dental commands"). Even self-reported numbers outperform unquantified prose.
5. Create `/llms.txt` + `/sitemap.xml` + `/robots.txt`.

---

### Brand Authority (16/100)

**Brand Presence Map**

| Platform | Present? | Notes |
|---|---|---|
| Wikipedia | No | Verified — no article for PerioMaxer, SmileMaxer, or Max Mendelson |
| YouTube | No | No demo, walkthrough, or third-party review |
| Reddit | Minimal | 2 self-authored posts only: r/DentalSchool (score 77, ~Apr 2026), r/Dentists (score 4) |
| LinkedIn (company) | No | No company page found |
| LinkedIn (founder) | Linked | linkedin.com/in/maxwellmendelson referenced from about.html |
| Product Hunt | No | No listing |
| Hacker News | No | No submissions |
| App Store | Yes | App ID 6762096578 · v1.1 · released 2026-04-26 · updated 2026-04-28 · Medical · 5 ratings @ 5.0 avg · free w/ IAP · seller "Max Mendelson" |
| GitHub | Minimal | github.com/MaxeThis — 9 repos, 0 followers, 0 stars on PerioMaxer-info; no public source repo for the app |
| Press / Industry | No | No coverage on DentistryIQ, RDH Magazine, Dental Economics, ADA, AAP |

**Honest framing.** v1.1 shipped just days ago (App Store update 2026-04-28). For an unannounced indie app at week 0, 16/100 is a fair baseline. Brand Authority is the genuine constraint here — no schema tag will move it. The 90-day path to 40+ runs through:

**Top 5 actions.**
1. **2–3 short YouTube demos** (60s hero, 3-min full perio walkthrough, 90s setup) on a branded channel; embed on `index.html`. YouTube transcripts feed AI Overviews, Gemini, and ChatGPT search heavily.
2. **Product Hunt launch** with coordinated requests for feedback in r/Dentistry, r/DentalHygiene, r/DentalSchool the same week.
3. **Pitch one trade publication** — RDH Magazine, DentistryIQ, and Dental Economics all run indie-dev product spotlights. One feature creates a citable third-party source.
4. **Drive App Store ratings 5 → 50+** via a polite in-app prompt after a successful exam export. Once you have 50+ ratings, mirror them in `aggregateRating` JSON-LD.
5. **LinkedIn company page** for PerioMaxer (logo, tagline, App Store link, about-page bio) cross-linked from the founder profile.

---

### Content E-E-A-T (47/100)

| Factor | Score | Notes |
|---|---|---|
| Experience | 8/25 | Maker is explicitly a UMD undergraduate, not a clinician. About page references "feedback from practicing hygienists and periodontists" but does not name them, attach quotes, or document a clinical pilot. |
| Expertise | 10/25 | Bio is honest and well-written but lists no degree, no publication, no certification, no advisor. Technical product copy demonstrates moderate domain literacy (six sites/tooth, ICD-10 indexes, suppuration/furcation/mobility called out correctly). |
| Authoritativeness | 6/25 | Very thin. No named clinical advisor, testimonials, media mentions, awards, or AAP/ADA references. |
| Trustworthiness | 16/25 | Strongest dimension. HTTPS enforced. Legal docs dated `Effective Date 2026-04-14, Last Updated 2026-04-14` (but invisible until JS executes). Pricing transparent. Privacy stance specific (AES-256-GCM, Keychain, on-device only, no analytics, no crash reports). Direct support email. **Weakness:** no clinical disclaimer; HIPAA language was removed (correct legally) but no replacement positioning. |
| Content depth | 6/15 | ~1,420 marketing words across 3 pages; ~5,500 legal words (hidden). No FAQ, no how-it-works, no clinical workflow narrative, no comparison, no glossary, no changelog, no blog. |
| Freshness | 4/10 | No publication date or last-updated stamp on marketing pages. |
| Originality | 8/10 | Reads as one author with one perspective. Specific vocabulary, no AI-tells. |

**Top 7 actions.**
1. Server-render legal markdown so the dates and AES-256-GCM specifics are visible without JS.
2. Add a clinical disclaimer block: *"PerioMaxer is a documentation aid. It is not a medical device, is not FDA-cleared, and is not intended for diagnosis or treatment. The licensed clinician remains responsible for the official chart of record."*
3. Ship JSON-LD: `Person` (Max + sameAs), `Organization`, `MobileApplication` (with `applicationCategory: MedicalApplication`).
4. Add an FAQ page (8–12 Q&As) with `FAQPage` schema.
5. Name **one clinical collaborator** on the about page, with permission, with a quote and city.
6. Add a public changelog page mirroring App Store release notes.
7. Add a comparison page ("PerioMaxer vs Dentrix Perio Chart vs Open Dental Periochart") with an honest table.

---

### Technical GEO (64/100)

| Factor | Score | Notes |
|---|---|---|
| AI crawler access | 70/100 | No robots.txt = default-allow, but no Sitemap directive and no explicit allowlist for major AI bots |
| `/llms.txt` | 0/100 | 404 |
| `/sitemap.xml` | 0/100 | 404 |
| SSR / indexable content | 55/100 | Homepage/about/support fully SSR; privacy/terms/eula JS-rendered (3 of 6 pages broken for non-JS bots) |
| Page speed | 88/100 | Static GitHub Pages CDN, lazy images, 24KB CSS — fast |
| Security headers | 35/100 | Only baseline GitHub Pages headers; no HSTS / CSP / X-Frame-Options / Referrer-Policy |
| Canonical / hreflang | 30/100 | No `<link rel="canonical">` on any page; no hreflang (acceptable — English only) |
| Mobile | 95/100 | Viewport meta, responsive nav drawer, lazy images, alt text |

**Findings (severity-tagged).**
- **Critical** — JS-only legal content (see #1 above).
- **Critical** — No sitemap.xml.
- **Critical** — No llms.txt.
- **High** — No robots.txt.
- **High** — No `<link rel="canonical">`.
- **High** — No security headers from GitHub Pages.
- **Medium** — Incomplete OG/Twitter on 5 pages.
- **Medium** — External CDN dependency on legal pages.
- **Low** — Cache-Control conservative.
- **Low** — Mobile/responsive verified strong.

**Top 5 actions.**
1. Prerender legal markdown at build time (kill marked.js CDN simultaneously).
2. Ship `/llms.txt` listing site purpose and absolute URLs to all 6 HTML pages plus the 3 legal `.md` files.
3. Ship `/sitemap.xml` with all 6 URLs and accurate `<lastmod>` (tied to git commit dates).
4. Ship `/robots.txt` with `Sitemap:` directive plus explicit allow stanzas for `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`, `CCBot`.
5. Add self-referencing `<link rel="canonical">` to every page's `<head>`.

---

### Schema & Structured Data (6/100)

The lowest score in the audit. Currently **zero** JSON-LD, microdata, or RDFa. The 6 points reflect basic OG/Twitter/title/description hygiene that partially substitutes for entity signals.

**Implementation order (single biggest GEO move available — ~2 hours of work):**

1. **Organization** (homepage `<head>`) — wires SmileMaxer brand into AI knowledge graphs.
2. **Person** (about page `<head>`) — Max Mendelson with `sameAs` to GitHub / LinkedIn / Instagram / App Store developer page.
3. **MobileApplication** (homepage `<head>`) — PerioMaxer with `applicationCategory: "MedicalApplication"`, `operatingSystem: "iOS 17, iPadOS 17, macOS 14"`, `offers` block with the 3 subscription tiers using `UnitPriceSpecification` (`P1M`, `P6M`, `P1Y`).
4. **WebSite** (homepage `<head>`) — completes the entity triangle (Organization → WebSite → SoftwareApplication).
5. **FAQPage** (support page `<head>`) — already structured as Q&A, so this is essentially free.
6. **BreadcrumbList** (each non-home page) — small but cheap; clarifies hierarchy.
7. **OG/Twitter sweep** (about/support/privacy/terms/eula/404) — backfill missing tags; fix homepage `og:image` to absolute URL.

`aggregateRating` and `review` deliberately **omitted** — adding fabricated values is a Google policy violation. Mirror real App Store numbers only once you have ≥10 ratings.

**Expected score after items 1–6:** **88–92/100** (the remaining gap is `aggregateRating` and optional `speakable`).

> Full pasteable JSON-LD blocks were generated by the schema subagent and are reproduced in the [Schema Implementation Snippets](#schema-implementation-snippets) appendix at the bottom of this report.

---

### Platform Optimization (18/100)

| Engine | Indexed? | Subscore | Top Action |
|---|---|---|---|
| Google AI Overviews | No | 15 | Submit sitemap via Search Console; add FAQPage schema |
| ChatGPT (SearchGPT/Browse) | No | 22 | Add Organization + SoftwareApplication JSON-LD with `sameAs` |
| Perplexity | No | 12 | Seed Reddit/Product Hunt discussion; add sourced statistics |
| Google Gemini | No | 14 | Long-form content (1500+ words); YouTube channel + embed |
| Bing Copilot | No | 10 | Bing Webmaster Tools verification + IndexNow + schema |

**Index coverage check.**

| Engine | Indexed? | Evidence |
|---|---|---|
| Google | No | `site:smilemaxer.com` returns zero results |
| Bing | No | Brand-name search returns competitor results only; no domain hits |
| App Store | Yes | App ID 6762096578 — only verifiable entity surface today |

**Top 5 actions.**
1. Generate `/sitemap.xml` + `/robots.txt`, submit to Google Search Console + Bing Webmaster Tools, add `msvalidate.01` meta tag.
2. Add `Organization` + `SoftwareApplication` JSON-LD on `index.html` with `sameAs` array.
3. Server-render the legal pages.
4. Add an FAQ section to `index.html` with `FAQPage` JSON-LD.
5. Build entity presence: launch post in r/Dentistry + Product Hunt + YouTube demo + a Wikidata draft entry citing the App Store listing.

**Honest framing.** Technical fixes (1–4) realistically lift Platform Optimization from 18 to ~50 within 30 days of Google/Bing indexing. Cracking 70+ requires sustained brand-mention work over 3–6 months — that's the part no schema tag can shortcut.

---

## Quick Wins (Implement This Week)

These five edits, taken together, would lift the composite GEO score from **34 → ~52** in a single week of work.

1. **Server-render the legal pages** (5–10 min build step running `marked` over PRIVACY.md / TOS.md / EULA.md and inlining into `<article id="legal-content">` at commit time). Removes [marked.js](https://cdn.jsdelivr.net/npm/marked@12/marked.min.js) CDN. Reclaims ~5,500 words. **Effort: 1 hour. Impact: AI Citability +12, Technical +8, E-E-A-T +5.**

2. **Add JSON-LD to `index.html` and `about.html`** — `Organization`, `Person` with `sameAs`, `MobileApplication` with the 3 `Offer` blocks, `WebSite`. Pasteable code in the [appendix](#schema-implementation-snippets). **Effort: 2 hours. Impact: Schema +80, AI Citability +6, Platform +8.**

3. **Ship `/sitemap.xml`, `/robots.txt`, `/llms.txt`.** `robots.txt` should include `Sitemap: https://smilemaxer.com/sitemap.xml` and explicit allow lines for `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`, `CCBot`. `llms.txt` should index all 6 HTML pages plus the 3 legal `.md` files. **Effort: 30 min. Impact: Technical +15, Platform +10.**

4. **Add an FAQ section** to `index.html` with 8 Q&A pairs (40–60 words each) wrapped in `FAQPage` JSON-LD. Suggested questions: voice accuracy in operatory noise, supported languages, offline/airplane-mode behavior, multi-device data portability, PDF export schema, subscription lapse behavior, supported tooth-numbering systems, accessibility/VoiceOver support. **Effort: 2 hours. Impact: AI Citability +10, Platform +6.**

5. **Add a clinical disclaimer block** + verify `site:smilemaxer.com` in Google Search Console + Bing Webmaster Tools after #3 lands. **Effort: 30 min. Impact: E-E-A-T +5, Platform +5.**

---

## 30-Day Action Plan

### Week 1 — Technical Foundations (unblock crawlers)

- [ ] Prerender legal markdown into HTML at build time; remove marked.js CDN.
- [ ] Ship `/sitemap.xml`, `/robots.txt`, `/llms.txt`.
- [ ] Add self-referencing `<link rel="canonical">` to every page's `<head>`.
- [ ] Backfill OG + `twitter:card` meta on about/support/privacy/terms/eula/404.
- [ ] Fix homepage `og:image` to absolute URL.
- [ ] Verify in Google Search Console + Bing Webmaster Tools; submit sitemap.

### Week 2 — Schema + Entity Identity

- [ ] Add `Organization` + `WebSite` JSON-LD to `index.html`.
- [ ] Add `Person` JSON-LD with full `sameAs` to `about.html`.
- [ ] Add `MobileApplication` + `AggregateOffer` JSON-LD to `index.html` (omit `aggregateRating` until ≥10 App Store ratings).
- [ ] Add `BreadcrumbList` to each non-home page.
- [ ] Validate every page in [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema.org Validator](https://validator.schema.org/).

### Week 3 — Content Depth (raise citability)

- [ ] Add FAQ section to `index.html` with 8–10 Q&A pairs + `FAQPage` schema.
- [ ] Add clinical disclaimer block to `index.html` and the legal pages.
- [ ] Publish a `/changelog.html` mirroring App Store release notes (with ISO dates).
- [ ] Publish at least one quantified claim per feature on `index.html` (recognition rate, command count, exam-time savings).
- [ ] Add author credentials to `about.html` (degree-in-progress, expected graduation, lab/advisor name with permission).
- [ ] Begin a `/compare.html` page (PerioMaxer vs Dentrix Perio Chart vs Open Dental Periochart) — honest table.

### Week 4 — Brand Authority (the long game starts)

- [ ] Record + publish a 90-second PerioMaxer demo on YouTube; embed on `index.html`.
- [ ] Submit to Product Hunt with a coordinated launch post.
- [ ] Genuine launch posts in r/Dentistry, r/DentalHygiene, r/DentalSchool (transparent maker disclosure).
- [ ] Pitch one trade publication (RDH Magazine *or* DentistryIQ).
- [ ] Stand up a LinkedIn company page for PerioMaxer; cross-link from founder profile.
- [ ] Draft a Wikidata entry for PerioMaxer citing the App Store listing.
- [ ] Add an in-app prompt to drive App Store ratings; once ≥10 reviews, mirror real numbers in `aggregateRating` schema.

---

## Appendix: Pages Analyzed

| URL | Title | Status | GEO Issues |
|---|---|---|---|
| [`https://smilemaxer.com/`](https://smilemaxer.com/) (`index.html`) | SmileMaxer — Voice-powered periodontal charting | 200 | No JSON-LD; no FAQ; no canonical; no statistics; relative `og:image` |
| [`/about.html`](https://smilemaxer.com/about.html) | About · SmileMaxer | 200 | No Person/Organization schema; no credentials; no OG/Twitter; no canonical |
| [`/support.html`](https://smilemaxer.com/support.html) | Support · SmileMaxer | 200 | No FAQPage schema (despite Q&A content); no OG; no canonical |
| [`/privacy.html`](https://smilemaxer.com/privacy.html) | Privacy Policy · SmileMaxer | 200 | **CRITICAL: JS-only content**; no OG; no canonical; relies on marked.js CDN |
| [`/terms.html`](https://smilemaxer.com/terms.html) | Terms of Service · SmileMaxer | 200 | **CRITICAL: JS-only content**; no OG; no canonical; relies on marked.js CDN |
| [`/eula.html`](https://smilemaxer.com/eula.html) | EULA · SmileMaxer | 200 | **CRITICAL: JS-only content**; no OG; no canonical; relies on marked.js CDN |
| [`/404.html`](https://smilemaxer.com/404.html) | (not analyzed live; static) | 200/404 | No OG; minor |
| `/robots.txt` | — | **404** | Missing entirely |
| `/sitemap.xml` | — | **404** | Missing entirely |
| `/sitemap_index.xml` | — | **404** | Missing entirely |
| `/llms.txt` | — | **404** | Missing entirely |

---

## Schema Implementation Snippets

> Drop these inside `<script type="application/ld+json"> … </script>` tags in each page's `<head>`. Replace `FILL IN:` placeholders with real values; do not ship the literal string. `aggregateRating` is intentionally absent — add it only when you have real App Store rating numbers and mirror them exactly.

### `index.html` head

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://smilemaxer.com/#organization",
  "name": "SmileMaxer",
  "url": "https://smilemaxer.com/",
  "logo": "https://smilemaxer.com/assets/img/app-icon-1024.png",
  "description": "SmileMaxer is the home of PerioMaxer, a voice-powered, on-device periodontal charting app for dental professionals on iOS and macOS.",
  "founder": { "@id": "https://smilemaxer.com/about.html#person" },
  "email": "maxethis@gmail.com",
  "sameAs": [
    "https://apps.apple.com/app/apple-store/id6762096578",
    "https://github.com/MaxeThis",
    "https://www.linkedin.com/in/maxwellmendelson/",
    "https://www.instagram.com/maxterr12/"
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://smilemaxer.com/#website",
  "url": "https://smilemaxer.com/",
  "name": "SmileMaxer",
  "publisher": { "@id": "https://smilemaxer.com/#organization" },
  "inLanguage": "en-US"
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": "https://smilemaxer.com/#app",
  "name": "PerioMaxer",
  "description": "Voice-powered, on-device periodontal charting for dentists, hygienists, and periodontists. Records stay encrypted on your device.",
  "image": "https://smilemaxer.com/assets/img/app-icon-1024.png",
  "applicationCategory": "MedicalApplication",
  "operatingSystem": "iOS 17, iPadOS 17, macOS 14",
  "downloadUrl": "https://apps.apple.com/app/apple-store/id6762096578",
  "author": { "@id": "https://smilemaxer.com/about.html#person" },
  "publisher": { "@id": "https://smilemaxer.com/#organization" },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "3.99",
    "highPrice": "24.99",
    "offerCount": 3,
    "offers": [
      { "@type": "Offer", "name": "Monthly", "price": "3.99", "priceCurrency": "USD",
        "url": "https://apps.apple.com/app/apple-store/id6762096578",
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "3.99",
          "priceCurrency": "USD", "billingDuration": "P1M" } },
      { "@type": "Offer", "name": "6 months", "price": "14.99", "priceCurrency": "USD",
        "url": "https://apps.apple.com/app/apple-store/id6762096578",
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "14.99",
          "priceCurrency": "USD", "billingDuration": "P6M" } },
      { "@type": "Offer", "name": "Annual (1-week free trial)", "price": "24.99", "priceCurrency": "USD",
        "url": "https://apps.apple.com/app/apple-store/id6762096578",
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "24.99",
          "priceCurrency": "USD", "billingDuration": "P1Y" } }
    ]
  }
}
</script>
```

### `about.html` head

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://smilemaxer.com/about.html#person",
  "name": "Max Mendelson",
  "alternateName": "Maxwell Mendelson",
  "url": "https://smilemaxer.com/about.html",
  "jobTitle": "Independent developer and student researcher",
  "description": "Student-engineer at the University of Maryland building PerioMaxer, a voice-first periodontal charting app, with research interests in 3D modeling, animation, and printing applied to dental research.",
  "affiliation": { "@type": "CollegeOrUniversity", "name": "University of Maryland" },
  "knowsAbout": [
    "Dental software", "Periodontal charting", "SwiftUI", "iOS development",
    "Voice interfaces", "On-device machine learning",
    "3D modeling", "3D animation", "3D printing"
  ],
  "email": "maxethis@gmail.com",
  "sameAs": [
    "https://github.com/MaxeThis",
    "https://www.linkedin.com/in/maxwellmendelson/",
    "https://www.instagram.com/maxterr12/"
  ]
}
</script>
```

### `support.html` head

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How do I contact PerioMaxer support?",
      "acceptedAnswer": { "@type": "Answer",
        "text": "Email maxethis@gmail.com. PerioMaxer is built and supported by one person, and replies usually arrive within a day or two." } },
    { "@type": "Question", "name": "What should I include in a bug report?",
      "acceptedAnswer": { "@type": "Answer",
        "text": "Include your device (iPhone, iPad, or Mac), iOS or macOS version, the PerioMaxer version (found in Settings), steps to reproduce, and a screenshot or short screen recording if visual." } },
    { "@type": "Question", "name": "How do I request a new feature?",
      "acceptedAnswer": { "@type": "Answer",
        "text": "Email maxethis@gmail.com with what you wish PerioMaxer did. Specifics about your real clinical workflow are most useful." } },
    { "@type": "Question", "name": "How do I cancel my PerioMaxer subscription or get a refund?",
      "acceptedAnswer": { "@type": "Answer",
        "text": "Subscriptions are managed by Apple. On iOS open Settings → [your name] → Subscriptions. On Mac open the App Store → your profile → Subscriptions. For refund issues, email maxethis@gmail.com." } }
  ]
}
</script>
```

### Suggested `/robots.txt`

```
# https://smilemaxer.com/robots.txt
User-agent: *
Allow: /

# AI / training crawlers — explicitly allowed
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: anthropic-ai
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Perplexity-User
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: CCBot
Allow: /
User-agent: Bytespider
Allow: /
User-agent: Amazonbot
Allow: /

Sitemap: https://smilemaxer.com/sitemap.xml
```

### Suggested `/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://smilemaxer.com/</loc><lastmod>2026-04-30</lastmod><priority>1.0</priority></url>
  <url><loc>https://smilemaxer.com/about.html</loc><lastmod>2026-04-30</lastmod><priority>0.8</priority></url>
  <url><loc>https://smilemaxer.com/support.html</loc><lastmod>2026-04-30</lastmod><priority>0.8</priority></url>
  <url><loc>https://smilemaxer.com/privacy.html</loc><lastmod>2026-04-14</lastmod><priority>0.5</priority></url>
  <url><loc>https://smilemaxer.com/terms.html</loc><lastmod>2026-04-14</lastmod><priority>0.5</priority></url>
  <url><loc>https://smilemaxer.com/eula.html</loc><lastmod>2026-04-14</lastmod><priority>0.5</priority></url>
</urlset>
```

### Suggested `/llms.txt`

```
# SmileMaxer
> SmileMaxer is the home of PerioMaxer — a voice-powered, on-device periodontal charting app for dentists, hygienists, and periodontists on iPhone, iPad, and Mac. Built independently by Max Mendelson. Records stay encrypted on the device; nothing is uploaded.

## Pages
- [Home](https://smilemaxer.com/): product overview, features, pricing
- [About](https://smilemaxer.com/about.html): the maker
- [Support](https://smilemaxer.com/support.html): contact, bug reports, feature requests, billing
- [Privacy Policy](https://smilemaxer.com/privacy.html): data handling, on-device encryption
- [Terms of Service](https://smilemaxer.com/terms.html): rules for using the site and app
- [EULA](https://smilemaxer.com/eula.html): software license

## Source documents (markdown)
- [PRIVACY.md](https://smilemaxer.com/PRIVACY.md)
- [TOS.md](https://smilemaxer.com/TOS.md)
- [EULA.md](https://smilemaxer.com/EULA.md)

## Get the app
- [PerioMaxer on the App Store](https://apps.apple.com/app/apple-store/id6762096578)
```

---

*Audit produced by the geo-audit skill — six parallel specialist subagents (geo-ai-visibility, geo-platform-analysis, geo-technical, geo-content, geo-schema) plus a top-level orchestrator. Scores reflect the state of the public-web surface on 2026-05-01.*

# GEO Audit Report: SmileMaxer

**Audit Date:** 2026-05-09
**URL:** https://smilemaxer.com
**Business Type:** SaaS (single-product subscription app — PerioMaxer for iOS/iPadOS/macOS)
**Pages Analyzed:** 6 (full sitemap: `/`, `/about.html`, `/support.html`, `/privacy.html`, `/terms.html`, `/eula.html`)

---

## Executive Summary

**Overall GEO Score: 57/100 (Poor — but with an unusually narrow gap to Good)**

smilemaxer.com is a textbook example of a *technically excellent, off-site invisible* product. On-site fundamentals are at the 80th-percentile of the public web — clean static SSR HTML, complete schema graph (Organization → Person → MobileApplication → FAQPage cross-linked by `@id`), Wikidata entity Q139603168 declared in `sameAs`, llms.txt published, and an AI-crawler allowlist that explicitly names every major bot. The composite score is held back almost entirely by the **Brand Authority pillar (12/100)**: there is no Wikipedia article, no Reddit footprint, no YouTube demo, no dental-press coverage, and no AggregateRating yet. A handful of off-site moves (one industry feature, one Wikipedia article, one YouTube demo, a Show HN, and seeded Reddit threads) would lift the composite score from 57 → ~75 within a quarter without changing a single line of HTML.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 68/100 | 25% | 17.0 |
| Brand Authority | 12/100 | 20% | 2.4 |
| Content E-E-A-T | 52/100 | 20% | 10.4 |
| Technical GEO | 78/100 | 15% | 11.7 |
| Schema & Structured Data | 84/100 | 10% | 8.4 |
| Platform Optimization | 67/100 | 10% | 6.7 |
| **Overall GEO Score** | | | **56.6 → 57/100** |

---

## Critical Issues (Fix Immediately)

None. No domain-level noindex, no blocked AI crawlers, no 5xx errors, no missing schema, brand entity is recognized in Wikidata. The site clears every "critical" gate.

## High Priority Issues

1. **Zero third-party brand corroboration** — no Wikipedia article (despite Q139603168 existing), no Reddit threads, no YouTube content, no dental industry press, no Hacker News / Product Hunt launch. AI models asked "what is PerioMaxer" cannot confirm the brand from any source other than the owned domain. **Fix:** ship one industry-press feature + one Wikipedia draft + one Show HN within 60 days.
2. **No `AggregateRating` on `MobileApplication` schema** — the highest-leverage missing schema property for a paid app. Removes both rich-result eligibility and a quality signal AI models actively use. **Fix:** pull rating + count from App Store Connect into the JSON-LD on every deploy.
3. **About page is too thin to support E-E-A-T claims (~220 words, no clinical voice)** — non-clinician maker building a dental clinical tool with no named clinical advisor, reviewer, or pilot user on the site. **Fix:** add a named DDS/RDH/periodontist advisor section + 1–3 pilot-clinician testimonials.
4. **Bingbot not explicitly named in robots.txt** (covered by wildcard). ChatGPT web search is Bing-indexed; explicit allow is a stronger signal than wildcard inheritance. **Fix:** add `User-agent: Bingbot` + `User-agent: msnbot` Allow blocks.

## Medium Priority Issues

5. **No HSTS / CSP / Referrer-Policy / X-Frame-Options / X-Content-Type-Options.** GitHub Pages cannot inject HTTP headers, but `<meta http-equiv>` and `<meta name="referrer">` cover most of the gap. HSTS preload submission ([hstspreload.org](https://hstspreload.org)) is the only path to that header without a server.
6. **All hero/feature imagery is PNG** (10 PNGs, 0 WebP/AVIF on homepage). LCP risk; convert to WebP with `<picture>` PNG fallback, add explicit width/height, `loading="lazy"`, and `fetchpriority="high"` on the LCP image.
7. **No `dateModified` on any page-level schema.** Freshness is a meaningful AI ranking signal; emit ISO-8601 `dateModified` on Organization/WebSite/MobileApplication/FAQPage at build time.
8. **No `MedicalSoftwareApplication` subtype.** The app is a clinical tool for dental professionals; the more specific subtype improves vertical AI retrieval.
9. **About page has no `Article` schema** — the page narrative should be wrapped in `Article` with `author=#person`, `publisher=#organization`, `mainEntityOfPage` to close the entity graph triangle.
10. **No clinical-grade content depth** — no blog, no changelog, no methodology page. Topical authority is capped at six static pages.
11. **No LinkedIn company page for PerioMaxer** (only Maxwell's personal profile). Bing Copilot leans Microsoft-ecosystem trust signals.
12. **No YouTube demo of voice charting.** The product's value prop is *demonstrable*; YouTube is the single highest-leverage Google-ecosystem asset that is missing.

## Low Priority Issues

13. **No `speakable` property** on hero/FAQ — direct voice-AI consumption marker, rarely implemented by competitors.
14. **`MobileApplication.operatingSystem`** is a single comma-delimited string; should be an array of three strings.
15. **`MobileApplication` has no `image` property** distinct from `logo`. Add explicit app icon image URL.
16. **No `/.well-known/security.txt` and no `/humans.txt`** — small trust signals; humans.txt with developer name reinforces E-E-A-T entity linking.
17. **No resource hints** — add `<link rel="preconnect" href="https://apps.apple.com">` and `<link rel="preload" as="image">` for the LCP hero.
18. **Client-side `data-i18n` attributes present but only English HTML served** — either generate static `/es/`, `/it/` localized HTML with `hreflang` or document English as the canonical/only crawled locale.
19. **About page has no published date or last-updated marker.** Add a visible "Last updated" line plus `dateModified` in Person/Article schema.
20. **FAQPage is no longer eligible for Google rich results** (Aug 2023 restriction to gov/health-authority sites). The schema is still semantically useful for AI but provides zero classic-search benefit — keep it, just understand the limit.

---

## Category Deep Dives

### AI Citability (68/100)

**Strengths**
- Privacy claims are concrete, numeric, and self-contained — exactly the shape AI engines lift verbatim. `"AES-256-GCM"` and `"no cloud"` are quotable atomic facts.
- AggregateOffer with three explicit price tiers gives models a structured fact ("Monthly $3.99 / 6-month $14.99 / Annual $24.99") extractable directly from JSON-LD without parsing prose.
- 12 FAQ entries (8 home + 4 support) are written in direct-question form that maps cleanly onto user prompts: "Does PerioMaxer work offline?" "Where is patient data stored?" — high zero-shot retrievability.

**Weaknesses**
- About page (~220 words) is below the threshold where AI models trust E-E-A-T claims. No dated credentials, no methodology, no published case study.
- Homepage H1 "Chart perio exams hands-free." is a marketing tagline, not a definitional statement. AI models cannot synthesize a clean one-sentence definition without falling back to the meta description or schema. Adding a single sentence — "PerioMaxer is a voice-powered, on-device periodontal charting app for dental professionals on iPhone, iPad, and Mac." — into the visible hero copy (it already exists in the meta description) would directly lift extractable answers.
- No statistical or clinical anchor content: zero benchmarks, no time-saved figures, no charting-speed comparison numbers, no citations to ADA/AAP guidelines. Quantitative claims are the highest-citability content shape.

### Brand Authority (12/100)

| Platform | Presence | Notes |
|---|---|---|
| Wikipedia (English) | Absent | Wikidata Q139603168 stub exists but no en.wikipedia.org article |
| Reddit (r/Dentistry, r/dentalhygiene, r/periodontics) | Zero | No mentions found |
| YouTube | Zero | Search returns "PerioMX" (unrelated) |
| LinkedIn (company page) | Absent | Only Maxwell's personal profile |
| Hacker News / Product Hunt | Zero | No launch post |
| Dental industry press | Zero | DentistryToday, RDH, Dental Products Report — none |
| Apple App Store listing | Owned | Self-referential, not a third-party signal |
| Wikidata | Present | Q139603168 — meaningful entity-linking signal |

A LLM asked "what is PerioMaxer" today would either decline or hallucinate against the similarly-named PerioMX/PerioMed/Smile Max name collisions. This is the single most important deficit in the audit and the single highest leverage area for improvement.

### Content E-E-A-T (52/100)

**Pillar scores:** Experience 45 / Expertise 50 / Authoritativeness 30 / Trustworthiness 80

**Strengths**
- The homepage FDA disclaimer ("not FDA-cleared and is not intended for diagnosis, treatment, or any decision-support role") is rare regulatory transparency that genuinely builds clinician trust and partly compensates for the non-clinician-maker concern.
- Privacy policy (~2,100 words, dated April 14 2026) uses verifiable architecture claims — Secure Enclave, AES-256-GCM, on-device speech, GDPR/PIPEDA enumeration. Specific, not marketing fluff.
- Person schema with `knowsAbout` array, university affiliation, and `sameAs` to GitHub/LinkedIn/Instagram eliminates anonymity concerns.

**Gaps**
- No clinical voice anywhere on the site: no advisor, no reviewer, no quoted clinician, no pilot user. For a dental tool, this is the dominant authority deficit.
- No third-party validation (press, testimonials, AggregateRating, conference talks, professional society affiliations).
- No content depth or freshness rhythm — no blog, no changelog. Six static pages cap topical authority.

### Technical GEO (78/100)

| Check | Result |
|---|---|
| HTTPS + HTTP/2 | Pass |
| HTTP→HTTPS, www→apex redirects | Pass (301) |
| All sitemap URLs return 200 | Pass |
| Sitemap valid XML, lastmod 2026-05-01 | Pass |
| HSTS / CSP / X-Frame-Options / X-CTO / Referrer-Policy | All missing (GH Pages limitation) |
| gzip compression + ETag + edge cache | Pass |
| SSR / no-JS rendering of hero, FAQ, body text | Pass — fully visible in raw HTML |
| Meta viewport / canonical / `<html lang="en">` | Pass |
| Open Graph (1024×1024 image) + Twitter Card | Pass |
| 4 JSON-LD blocks on homepage | Pass |
| robots.txt allowlist for AI crawlers | Pass |
| llms.txt | Pass |
| hreflang | None served (data-i18n is JS-only) |
| Resource hints (preload/preconnect) | None |
| Image format (PNG vs WebP/AVIF) | All PNG |
| `/.well-known/security.txt`, `/humans.txt` | 404 |
| Page weight (homepage HTML) | 27.8 KB raw / 6.1 KB gzipped — excellent |

### Schema & Structured Data (84/100)

**Validation: passed.** All four homepage `@id` references resolve correctly across the graph (`#organization` referenced by WebSite/publisher, MobileApplication/author+publisher, and Person/worksFor on /about). ISO 8601 billing durations valid (P1M, P6M, P1Y). AggregateOffer with three nested Offers + UnitPriceSpecification is the canonical pattern for subscription apps. Wikidata Q139603168 in `sameAs` is a top-tier entity-linking signal.

**Missing opportunities (ranked):**
1. AggregateRating on MobileApplication (highest ROI; unlocks rich-result eligibility + AI quality signal)
2. `speakable` property on hero + FAQ answers (direct voice-AI consumption marker)
3. `MedicalSoftwareApplication` subtype (clinical specificity)
4. `dateModified` on every JSON-LD block (freshness signal)
5. `Article` schema on /about (closes Org → Person → Article triangle)
6. `Review` schema with 1–3 hand-picked App Store reviews (quotable testimonials)

### Platform Optimization (67/100)

| Platform | Score | Headline gap |
|---|---|---|
| Google AI Overviews | 72 | No external authority links |
| ChatGPT Web Search | 68 | No Wikipedia article, no Reddit/HN threads |
| Perplexity | 64 | Zero community validation surface |
| Google Gemini | 70 | No YouTube demo |
| Bing Copilot | 60 | Bingbot not named in robots.txt; no LinkedIn company page |

The cross-platform pattern is clean: every gap is **off-site**. On-site readiness is excellent across all five platforms.

---

## Quick Wins (Implement This Week)

1. **Add explicit `User-agent: Bingbot` + `User-agent: msnbot` Allow blocks to robots.txt.** 2-line change; lifts Bing Copilot and ChatGPT search confidence.
2. **Add `AggregateRating` to the MobileApplication JSON-LD** using current App Store Connect rating + count. Build-time string substitution.
3. **Add `dateModified` (ISO 8601, set at build time) to all four homepage JSON-LD blocks plus the Person and FAQPage on /about and /support.**
4. **Switch `MobileApplication` `@type` to `MedicalSoftwareApplication`** (still inherits SoftwareApplication). One-token change.
5. **Add a single definitional sentence to the homepage hero** below the H1: *"PerioMaxer is a voice-powered, on-device periodontal charting app for dentists, hygienists, and periodontists on iPhone, iPad, and Mac."* — directly lifts AI extractable answers.
6. **Add `<link rel="preconnect" href="https://apps.apple.com">`** and `<link rel="preload" as="image" fetchpriority="high">` for the LCP hero image.
7. **Publish `/.well-known/security.txt` and `/humans.txt`.** humans.txt names Maxwell as developer; reinforces E-E-A-T entity signals.

## 30-Day Action Plan

### Week 1: On-site quick wins (no off-site dependencies)
- [ ] Ship the seven quick wins above.
- [ ] Convert hero/feature PNGs to WebP with `<picture>` PNG fallback, explicit dimensions, `loading="lazy"` below the fold.
- [ ] Add `<meta http-equiv="Content-Security-Policy">` + `<meta name="referrer" content="strict-origin-when-cross-origin">` for security header coverage.
- [ ] Submit smilemaxer.com to [hstspreload.org](https://hstspreload.org).
- [ ] Wrap /about page narrative in `Article` schema with `author=#person`, `publisher=#organization`, `mainEntityOfPage`, `dateModified`. Add a visible "Last updated" line.

### Week 2: Brand-authority kickoff
- [ ] Publish a 60–90 second YouTube demo of voice-driven probing on PerioMaxer's own channel. Embed in homepage. Add `VideoObject` schema referencing the YouTube URL.
- [ ] Create a LinkedIn company page for PerioMaxer; cross-link from /about and add to Organization `sameAs`.
- [ ] Post a Show HN with a technical angle (on-device AES-256-GCM, no-PHI-in-cloud architecture).
- [ ] Submit to Product Hunt with the same angle.

### Week 3: E-E-A-T depth
- [ ] Triple the /about page word count to ~700 words. Add a named clinical advisor or reviewer (DDS/RDH/periodontist) with photo, credentials, and a one-sentence reviewing-clinician statement.
- [ ] Publish `/changelog.html` with at least 3 dated entries spanning the last 90 days.
- [ ] Link the UMD research affiliation to a faculty/lab page to convert the claim into an institutional tie.
- [ ] Add 2–3 pilot-clinician testimonials with `Review` schema (named, with credentials).

### Week 4: Off-site corroboration
- [ ] Pitch one dental-industry editorial outlet (DentistryIQ, Dental Economics, RDH Magazine, Dental Products Report) — a single bylined feature unblocks the Wikipedia notability bar.
- [ ] Draft a Wikipedia article tied to Q139603168, citing 2–3 secondary sources (the YouTube demo and HN/PH launches *do not count*; the industry feature does).
- [ ] Seed authentic Reddit presence in r/Dentistry, r/DentalHygiene, r/periodontics with one transparent "I built this — feedback request" post per subreddit, properly disclosed. Engage on existing charting threads.
- [ ] Start a thin blog (2–3 posts on periodontal charting workflow, on-device ML privacy in healthcare, and voice UX for clinicians).

---

## Appendix: Pages Analyzed

| URL | Title | GEO Issues |
|---|---|---|
| https://smilemaxer.com/ | SmileMaxer — Voice-powered periodontal charting | 4 (no AggregateRating, no dateModified, PNG-only imagery, no speakable) |
| https://smilemaxer.com/about.html | About · SmileMaxer | 4 (thin word count, no Article schema, no clinical voice, no dateModified) |
| https://smilemaxer.com/support.html | Support · SmileMaxer | 1 (no dateModified) |
| https://smilemaxer.com/privacy.html | Privacy Policy · SmileMaxer | 1 (no schema markup) |
| https://smilemaxer.com/terms.html | Terms · SmileMaxer | 1 (not deeply analyzed; assume no schema) |
| https://smilemaxer.com/eula.html | EULA · SmileMaxer | 1 (not deeply analyzed; assume no schema) |

**Auxiliary files checked:**
- `https://smilemaxer.com/robots.txt` — pass (all major AI bots explicitly allowed; Bingbot covered by wildcard only)
- `https://smilemaxer.com/llms.txt` — pass (well-structured, present)
- `https://smilemaxer.com/sitemap.xml` — pass (6 URLs, valid XML, lastmod 2026-05-01)
- `https://smilemaxer.com/.well-known/security.txt` — 404
- `https://smilemaxer.com/humans.txt` — 404

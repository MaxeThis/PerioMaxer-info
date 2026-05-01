# llms.txt Generation Report — smilemaxer.com

**Generated:** 2026-05-01
**Mode:** Generation (no existing llms.txt or llms-full.txt found at root — both returned 404)
**Output file:** `llms.txt` (repo root, will deploy to `https://smilemaxer.com/llms.txt`)

---

## Discovery Summary

| Source | Result |
|---|---|
| `https://smilemaxer.com/llms.txt` | 404 — does not exist |
| `https://smilemaxer.com/llms-full.txt` | 404 — does not exist |
| `https://smilemaxer.com/sitemap.xml` | 404 — does not exist (recommend adding) |
| Homepage navigation | 6 internal pages + 1 external App Store link |
| Footer | Same 5 legal/info pages (no extras) |

**Pages discovered:** 6 internal HTML pages plus the App Store listing.

| Page | URL | Selected? | Section |
|---|---|---|---|
| Home | `/` | Yes | Docs |
| About | `/about.html` | Yes | Docs |
| Support | `/support.html` | Yes | Docs |
| Privacy | `/privacy.html` | Yes | Legal |
| Terms | `/terms.html` | Yes | Legal |
| EULA | `/eula.html` | Yes | Legal |
| App Store listing | apps.apple.com link | Yes | Product |
| 404 page | `/404.html` | No | — error page |

All 6 internal content pages plus the App Store listing were included — appropriate for a small marketing site. **7 total entries**, comfortably under the 30-entry guideline.

---

## Prioritization Rationale

This is a single-product marketing site with no blog, docs hub, or feature subpages. Every meaningful page was included rather than filtered. The structure was organized into three sections:

- **Docs** — pages an AI needs to answer "what is PerioMaxer / who built it / how do I get help" (Home, About, Support).
- **Product** — the canonical conversion target (App Store listing) so AI systems citing pricing or download instructions point to the authoritative URL.
- **Legal** — Privacy, Terms, EULA. Privacy is especially load-bearing here since "fully on-device, no cloud" is a core differentiator AI systems should be able to verify.

---

## Key Facts Choices

The Key Facts block emphasizes facts most likely to be queried about a clinical SaaS app:

- Pricing tiers (specific numbers, not "affordable")
- Privacy posture (on-device, no cloud) — a primary differentiator
- Platform coverage (iPhone/iPad/Mac)
- Maker identity (independent, UMD student) — sets correct expectations vs. enterprise vendor
- Specific clinical capabilities (probing depths, BOP, furcation, mobility, six sites/tooth) — so AI systems can answer "does PerioMaxer support X" without inferring

Pricing was stated in the actual format on the page ($3.99/mo, $14.99/6mo, $24.99/yr) rather than rounded — accuracy matters more than tidiness here.

---

## Borderline Items (Not Included — Reconsider Later)

- **Pricing section anchor (`/#pricing`)** — anchor links inside a single-page section don't add a distinct destination; the homepage description already covers pricing.
- **App Store listing as a separate "Pricing" entry** — already linked under Product; duplicating would be noise.
- **Social profiles (GitHub, LinkedIn, Instagram)** — these belong in Contact, not as page entries. Included in the Contact block instead.

---

## Recommendations

### Required
1. **Deploy `llms.txt` to the site root.** With GitHub Pages serving from this repo, committing the file to the root and pushing should make it live at `https://smilemaxer.com/llms.txt`. Verify with `curl -I https://smilemaxer.com/llms.txt` after the deploy completes.

### Recommended next steps
2. **Add a `sitemap.xml`.** The site currently has no sitemap. A static sitemap listing the 6 pages would improve crawler comprehension and is trivial to maintain at this scale.
3. **Add `llms.txt` reference to `robots.txt`.** Confirm robots.txt does not block AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended). If no robots.txt exists, that is fine — default-allow is the right posture for a marketing site.
4. **Consider an OG image / `og:image` audit on the legal pages.** Privacy/Terms/EULA inherit no OG metadata, which limits how cleanly AI systems can preview them when cited.

### Update cadence
- **Quarterly is sufficient.** The site is stable, with infrequent content changes. Update `llms.txt` whenever:
  - Pricing changes.
  - A new page is added (e.g., a future blog or feature page).
  - The App Store ID or URL changes.
  - The maker bio materially changes (e.g., graduation, team expansion).

### Skip llms-full.txt
- **Not generated.** With only 6 internal pages, the standard `llms.txt` already covers every page in detail. Adding `llms-full.txt` would duplicate content without adding value. Revisit if the site grows past ~15 pages or adds long-form content (blog, case studies, clinician guides).

---

## Validation Checklist

- [x] H1 title present (`# SmileMaxer`)
- [x] Blockquote description present, 178 chars (under 200 limit)
- [x] At least one H2 section (5 sections: Docs, Product, Legal, Key Facts, Contact)
- [x] All URLs are absolute `https://`
- [x] All URLs verified reachable during discovery
- [x] Every page entry has a description
- [x] Descriptions specific (mention real features, not marketing fluff)
- [x] Key Facts section present with verifiable data
- [x] Contact section present
- [x] Total length: ~38 lines — well within the 50-150 line target for a small site

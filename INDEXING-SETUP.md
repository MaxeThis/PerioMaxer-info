# Search engine + Wikidata setup walkthrough

A one-time list of human-only steps to push smilemaxer.com from "GEO-ready"
to "actually indexed and recognized by AI engines." None of these takes more
than ~10 minutes; together they unblock 5 of the 5 AI surfaces audited in
[GEO-AUDIT-REPORT-V2.md](GEO-AUDIT-REPORT-V2.md).

The technical scaffolding (IndexNow key, ping script, verification meta
placeholders) is already deployed. What remains is the parts only the
domain owner can do.

---

## 1. Google Search Console (~5 min)

1. Open <https://search.google.com/search-console>.
2. Add property → choose **URL prefix** → enter `https://smilemaxer.com/`.
3. Pick **HTML tag** as the verification method. Copy the long token from
   the `content="..."` attribute it shows you.
4. In [`index.html`](index.html), uncomment the line that starts with
   `<!-- <meta name="google-site-verification"` and paste the token into
   `content=""`.
5. Commit, push, wait for the GitHub Pages deploy (~30 s).
6. Back in Search Console, click **Verify**.
7. Once verified, go to **Sitemaps** in the left nav and submit
   `https://smilemaxer.com/sitemap.xml`.
8. Open each of the 6 URLs from the sitemap in the **URL Inspection** tool
   and click **Request indexing** for each one. Google usually picks them
   up within 24–72 hours after that.

## 2. Bing Webmaster Tools (~5 min)

1. Open <https://www.bing.com/webmasters>.
2. Add a site → enter `https://smilemaxer.com/`.
3. Pick the **Meta tag** verification method. Copy the token.
4. In [`index.html`](index.html), uncomment the `<!-- <meta name="msvalidate.01"`
   line and paste the token into `content=""`.
5. Commit, push, wait for deploy, click **Verify** in BWT.
6. Go to **Sitemaps** → submit `https://smilemaxer.com/sitemap.xml`.
7. Bing also automatically picks up Search Console submissions, so step 1
   above gives you partial Bing coverage for free.

## 3. IndexNow (already wired up)

IndexNow is the protocol Bing, Yandex, DuckDuckGo, and (recently) ChatGPT
search use to learn about new or updated URLs without having to wait for
the next crawl. It's cron-style — you ping the API and the engines re-crawl
within minutes.

- **Key file:** lives at
  [`/b67d35ca47db77ed4b31084ca34401ce.txt`](b67d35ca47db77ed4b31084ca34401ce.txt).
  Don't rename or delete this. The filename _is_ the key.
- **Ping script:** [`scripts/indexnow-ping.sh`](scripts/indexnow-ping.sh).
  Run it after every deploy:

  ```bash
  ./scripts/indexnow-ping.sh
  ```

  It'll POST the 6 canonical URLs to `api.indexnow.org` and report HTTP 200/202
  on success.

You can wire this into your deploy flow later (e.g., a GitHub Action that
runs after the Pages build), but for now a manual run after each commit is
fine.

## 4. Wikidata entity (~10 min)

This is the single highest-leverage entity-recognition move available right
now. **No competitor in the voice-perio cohort has a Wikidata entry**, so you'd
be first.

1. Create an account at <https://www.wikidata.org> (free, no notability check —
   that's Wikipedia's gate, not Wikidata's).
2. Click **Create a new Item** in the left sidebar.
3. Fill in:
   - **Label (English):** `PerioMaxer`
   - **Description (English):** `voice-powered periodontal charting app for iOS and macOS`
   - **Aliases:** `SmileMaxer`
4. On the new item page, add these **statements** (click "+ add statement"):

   | Property | Value |
   |---|---|
   | `instance of` (P31) | `mobile app` (Q620615) |
   | `developer` (P178) | `Max Mendelson` (create a new Person item if needed) |
   | `platform` (P400) | `iOS` (Q48493), `iPadOS` (Q60575017), `macOS` (Q14116) |
   | `operating system` (P306) | same as platform |
   | `programming language` (P277) | `Swift` (Q17118377) |
   | `software license` (P275) | `proprietary software` (Q218616) |
   | `official website` (P856) | `https://smilemaxer.com/` |
   | `Apple App Store ID` (P3861) | `6762096578` |
   | `genre` (P136) | `dental software` (or closest existing item) |
   | `inception` (P571) | `2026-04-26` (App Store v1.0 release date) |
5. Save the item. Wikidata will assign it a Q-number (e.g., `Q12345678`).
6. **Send me the Q-number** — I'll add it to the homepage `Organization`
   `sameAs` array so AI engines can resolve the entity round-trip.

## 5. After everything is verified

Re-run the GEO audit (`/geo-audit https://smilemaxer.com`) once Google and
Bing report the site as indexed and the Wikidata Q-number is wired into the
schema. Expected delta: composite **59 → 70+** ("Fair" tier).

Indexation usually takes 1–7 days. Wikidata entity recognition by ChatGPT /
Gemini / Perplexity usually takes 2–4 weeks.

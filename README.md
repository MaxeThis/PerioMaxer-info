# SmileMaxer.com

The public site and legal documents for the **PerioMaxer** iOS / macOS app.

- **Site:** https://smilemaxer.com
- **App:** PerioMaxer — voice-powered periodontal charting
- **Source of the app:** private

## Pages

| Path | File |
|------|------|
| `/` | `index.html` — landing page |
| `/about` | `about.html` — about the maker |
| `/eula` | `eula.html` — renders `EULA.md` |
| `/privacy` | `privacy.html` — renders `PRIVACY.md` |
| `/terms` | `terms.html` — renders `TOS.md` |

The three `.md` files are the source of truth — the HTML pages fetch and render them client-side with `marked.js`, so when you update a policy in Markdown, the site picks it up automatically on the next load.

## Hosting

This repo is served via **GitHub Pages**, mapped to the custom domain `smilemaxer.com` (see `CNAME`). A `.nojekyll` file disables Jekyll processing so files like `assets/` are served verbatim.

### Enabling Pages

1. Repo → **Settings** → **Pages**
2. **Source:** *Deploy from a branch*
3. **Branch:** `main` · **Folder:** `/ (root)`
4. **Custom domain:** `smilemaxer.com`
5. Enable **Enforce HTTPS** once the cert provisions (can take ~15 min).

### DNS (Namecheap)

See [DNS-SETUP.md](./DNS-SETUP.md) for the exact records to paste into Namecheap.

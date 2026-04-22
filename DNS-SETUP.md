# Namecheap DNS setup for smilemaxer.com

This gets `smilemaxer.com` pointing at GitHub Pages (which serves this repo).

## 1. One-time on GitHub

1. Push this repo to GitHub (`main` branch).
2. Repo → **Settings → Pages**.
3. **Source:** Deploy from a branch · **Branch:** `main` · **Folder:** `/ (root)` → Save.
4. Under **Custom domain**, enter `smilemaxer.com` and save. (The `CNAME` file in the repo will also set this.)
5. Leave **Enforce HTTPS** unchecked for now — come back and check it once the cert provisions (usually 10–30 min after DNS propagates).

## 2. In Namecheap

Log in → **Domain List** → click **Manage** next to `smilemaxer.com` → **Advanced DNS** tab.

### Remove the defaults first

Delete the two records Namecheap adds by default:
- `CNAME Record · www · parkingpage.namecheap.com.`
- `URL Redirect Record · @ · http://www.smilemaxer.com/`

### Add these five records

| Type         | Host | Value                     | TTL       |
|--------------|------|---------------------------|-----------|
| `A Record`   | `@`  | `185.199.108.153`         | Automatic |
| `A Record`   | `@`  | `185.199.109.153`         | Automatic |
| `A Record`   | `@`  | `185.199.110.153`         | Automatic |
| `A Record`   | `@`  | `185.199.111.153`         | Automatic |
| `CNAME Record` | `www` | `maxethis.github.io.`   | Automatic |

> The trailing dot in `maxethis.github.io.` is important in some UIs. Namecheap usually accepts it with or without — either works.

### Optional: AAAA records for IPv6

If you want IPv6 (recommended, zero downside):

| Type | Host | Value                       | TTL       |
|------|------|-----------------------------|-----------|
| AAAA | `@`  | `2606:50c0:8000::153`       | Automatic |
| AAAA | `@`  | `2606:50c0:8001::153`       | Automatic |
| AAAA | `@`  | `2606:50c0:8002::153`       | Automatic |
| AAAA | `@`  | `2606:50c0:8003::153`       | Automatic |

## 3. Verify

DNS can take 10 min – a few hours to propagate. Check:

```bash
dig smilemaxer.com +short
# → should return the four 185.199.108–111.153 addresses

dig www.smilemaxer.com +short
# → should return maxethis.github.io. followed by the same IPs
```

Then in GitHub Pages settings, hit **Check again** next to the custom domain until it shows a green check, then enable **Enforce HTTPS**.

## 4. After everything is green

Update the app's legal URLs to use the custom domain. In `PerioMaxer/Views/LegalView.swift`:

```swift
enum LegalURLs {
    static let eula    = URL(string: "https://smilemaxer.com/eula")!
    static let privacy = URL(string: "https://smilemaxer.com/privacy")!
    static let tos     = URL(string: "https://smilemaxer.com/terms")!
}
```

(GitHub Pages serves `eula.html` when you request `/eula`, so the extension-less URLs work without extra config.)

## Troubleshooting

- **"DNS check unsuccessful"** in GitHub Pages → give it more time, then click *Check again*. Can take up to an hour.
- **HTTPS stuck** → make sure the **custom domain** field in Pages settings is filled in *and* DNS resolves. GitHub requests the Let's Encrypt cert automatically once both are true.
- **`www.smilemaxer.com` doesn't redirect** → GitHub Pages handles the www → apex redirect for you once the `CNAME` record points at `maxethis.github.io`. No extra redirect rule needed in Namecheap.
- **Showing the old parking page** → you forgot to delete Namecheap's default `URL Redirect` record on `@`. Delete it.

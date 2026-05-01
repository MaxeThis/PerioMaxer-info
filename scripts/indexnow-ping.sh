#!/usr/bin/env bash
# Ping IndexNow with the canonical URL list so Bing and Yandex re-crawl
# smilemaxer.com. IndexNow is also consulted by ChatGPT search and DuckDuckGo.
#
# Run after every deploy:   ./scripts/indexnow-ping.sh
#
# How it works:
# - The key file at /b67d35ca47db77ed4b31084ca34401ce.txt proves you own the
#   domain. IndexNow fetches it once when you first ping; if its contents match
#   the `key` field below, it accepts your pings.
# - We submit the same 6 canonical URLs that live in sitemap.xml.

set -euo pipefail

KEY="b67d35ca47db77ed4b31084ca34401ce"
HOST="smilemaxer.com"
KEY_LOCATION="https://${HOST}/${KEY}.txt"

PAYLOAD=$(cat <<JSON
{
  "host": "${HOST}",
  "key": "${KEY}",
  "keyLocation": "${KEY_LOCATION}",
  "urlList": [
    "https://${HOST}/",
    "https://${HOST}/about.html",
    "https://${HOST}/support.html",
    "https://${HOST}/privacy.html",
    "https://${HOST}/terms.html",
    "https://${HOST}/eula.html"
  ]
}
JSON
)

echo "Pinging IndexNow with 6 URLs..."
HTTP_CODE=$(curl -sS -o /tmp/indexnow-response -w '%{http_code}' \
  -X POST 'https://api.indexnow.org/IndexNow' \
  -H 'Content-Type: application/json; charset=utf-8' \
  -d "${PAYLOAD}")

case "${HTTP_CODE}" in
  200|202)
    echo "OK (${HTTP_CODE}) — Bing / Yandex / DuckDuckGo will re-crawl shortly."
    ;;
  *)
    echo "IndexNow returned ${HTTP_CODE}:"
    cat /tmp/indexnow-response
    echo
    exit 1
    ;;
esac

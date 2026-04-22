// SmileMaxer.com — small interactions + markdown rendering

// Mobile nav toggle
(function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const inner  = document.querySelector(".nav-inner");
  if (!toggle || !inner) return;
  toggle.addEventListener("click", () => {
    inner.classList.toggle("open");
    toggle.setAttribute("aria-expanded", inner.classList.contains("open"));
  });
})();

// Highlight active nav link
(function highlightActive() {
  const path = location.pathname.replace(/\/$/, "").split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .nav-drawer a").forEach(a => {
    const href = a.getAttribute("href");
    if (!href) return;
    const key = href.replace(/^\.?\//, "");
    if (key === path || (path === "" && key === "index.html")) {
      a.classList.add("active");
    }
  });
})();

// Markdown renderer for legal pages
async function renderMarkdown(url, targetSelector) {
  const target = document.querySelector(targetSelector);
  if (!target) return;

  try {
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) throw new Error("Fetch failed: " + res.status);
    const md = await res.text();

    if (typeof marked === "undefined") {
      // Fallback — show raw text with fallback link
      target.innerHTML =
        '<p>We could not render this document right now. ' +
        '<a href="' + url + '">View the raw document</a>.</p>' +
        '<pre style="white-space: pre-wrap; font-family: inherit;">' +
        escapeHtml(md) + '</pre>';
      return;
    }

    marked.setOptions({ gfm: true, breaks: false, headerIds: true, mangle: false });
    target.innerHTML = marked.parse(md);
    buildToc(target);
  } catch (err) {
    target.innerHTML =
      '<p style="color: var(--orange-700);">Could not load this document. ' +
      '<a href="' + url + '">Open it directly</a>.</p>';
    console.error(err);
  }
}

function buildToc(container) {
  const headings = container.querySelectorAll("h2");
  if (headings.length < 3) return;

  const toc = document.createElement("nav");
  toc.className = "toc";
  toc.setAttribute("aria-label", "Contents");
  toc.innerHTML = '<div class="toc-title">Contents</div><ol></ol>';
  const ol = toc.querySelector("ol");

  headings.forEach((h, i) => {
    if (!h.id) {
      h.id = "section-" + (i + 1) + "-" + h.textContent.toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
    }
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#" + h.id;
    a.textContent = h.textContent.replace(/^\d+\.?\s*/, "");
    li.appendChild(a);
    ol.appendChild(li);
  });

  container.insertBefore(toc, container.firstChild);
}

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Expose for legal pages
window.renderMarkdown = renderMarkdown;

// Subtle parallax on hero visual
(function parallax() {
  const visual = document.querySelector(".hero-visual");
  if (!visual) return;
  let raf = null;

  window.addEventListener("scroll", () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const y = window.scrollY;
      if (y < 800) {
        visual.style.transform = "translateY(" + (y * 0.05) + "px)";
      }
      raf = null;
    });
  }, { passive: true });
})();

// SmileMaxer.com — small interactions

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

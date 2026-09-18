/* Shared, lightweight motion layer used across every page:
   - A quick fade-in on page load (feels like a page transition without
     the complexity of a real SPA router).
   - A small scroll-reveal: cards/sections marked [data-reveal] fade+rise
     into place the first time they enter the viewport.
   Both respect prefers-reduced-motion. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Page-load fade ----------
  document.documentElement.classList.add("page-ready");

  if (reduceMotion) return;

  // ---------- Scroll reveal ----------
  function markRevealTargets() {
    // Auto-tag common repeating content blocks so existing pages don't
    // need to hand-annotate every element.
    var selectors = [
      ".category-box", ".domain-card", ".blog-card", ".faq-item", ".detail-card", ".tool-banner"
    ];
    selectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", "");
      });
    });
  }

  function initReveal() {
    markRevealTargets();
    var targets = document.querySelectorAll("[data-reveal]");
    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("reveal-visible"); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

    targets.forEach(function (el) { io.observe(el); });
  }

  // Re-run whenever the guide/bookmarks grid rebuilds (domain switch, search,
  // sort) so newly-appended cards also animate in.
  var grid = document.getElementById("grid");
  if (grid) {
    var mo = new MutationObserver(function () { initReveal(); });
    mo.observe(grid, { childList: true });
  }
  var domainsGrid = document.getElementById("domains-grid");
  if (domainsGrid) {
    var mo2 = new MutationObserver(function () { initReveal(); });
    mo2.observe(domainsGrid, { childList: true });
  }
  var blogGrid = document.getElementById("blog-grid");
  if (blogGrid) {
    var mo3 = new MutationObserver(function () { initReveal(); });
    mo3.observe(blogGrid, { childList: true });
  }
  var faqList = document.getElementById("faq-list");
  if (faqList) {
    var mo4 = new MutationObserver(function () { initReveal(); });
    mo4.observe(faqList, { childList: true });
  }
  var toolBanners = document.getElementById("tool-banners");
  if (toolBanners) {
    var mo5 = new MutationObserver(function () { initReveal(); });
    mo5.observe(toolBanners, { childList: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initReveal);
  } else {
    initReveal();
  }
})();

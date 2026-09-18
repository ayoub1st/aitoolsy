(function () {
  "use strict";

  // ---------- Reload behavior: pressing browser refresh returns to index.html ----------
  // (index.html itself is excluded — this only applies to inner pages)
  (function handleReloadRedirect() {
    var isIndex = /(^|\/)index\.html$/.test(location.pathname) || location.pathname.endsWith("/") || /(^|\/)tool\.html$/.test(location.pathname);
    if (isIndex) return;

    var navEntries = performance.getEntriesByType && performance.getEntriesByType("navigation");
    var type = navEntries && navEntries[0] ? navEntries[0].type : null;
    if (!type && performance.navigation) {
      type = performance.navigation.type === 1 ? "reload" : "navigate";
    }
    if (type === "reload") {
      location.href = "index.html";
    }
  })();

  document.addEventListener("DOMContentLoaded", function () {
    var menuBtn = document.getElementById("menu-btn");
    var drawer = document.getElementById("drawer");
    var overlay = document.getElementById("drawer-overlay");
    var closeBtn = document.getElementById("drawer-close");

    function openDrawer() {
      if (!drawer) return;
      drawer.hidden = false;
      overlay.hidden = false;
      requestAnimationFrame(function () {
        drawer.classList.add("open");
        overlay.classList.add("open");
      });
    }

    function closeDrawer() {
      if (!drawer) return;
      drawer.classList.remove("open");
      overlay.classList.remove("open");
      window.setTimeout(function () {
        drawer.hidden = true;
        overlay.hidden = true;
      }, 300);
    }

    if (menuBtn) menuBtn.addEventListener("click", openDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    if (overlay) overlay.addEventListener("click", closeDrawer);

    // Page navigation from drawer
    document.querySelectorAll(".drawer-item[data-page]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var page = btn.getAttribute("data-page");
        if (page) location.href = page + ".html";
      });
    });

    // Highlight current page
    var current = document.body.getAttribute("data-current");
    if (current) {
      document.querySelectorAll(".drawer-item[data-page]").forEach(function (btn) {
        btn.classList.toggle("active", btn.getAttribute("data-page") === current);
      });
    }

    // Languages submenu
    var langToggle = document.getElementById("lang-toggle");
    var langList = document.getElementById("lang-list");
    if (langToggle && langList) {
      langToggle.addEventListener("click", function () {
        var isOpen = langList.classList.toggle("open");
        var plus = langToggle.querySelector(".plus");
        if (plus) plus.textContent = isOpen ? "−" : "+";
      });
    }

    // Support submenu
    var supportToggle = document.getElementById("support-toggle");
    var supportList = document.getElementById("support-list");
    if (supportToggle && supportList) {
      supportToggle.addEventListener("click", function () {
        var isOpen = supportList.classList.toggle("open");
        var plus = supportToggle.querySelector(".plus");
        if (plus) plus.textContent = isOpen ? "−" : "+";
      });
    }

    // Language selection -> remember choice, reload this page so the newly
    // translated content (categories, tools, blog, FAQ...) renders in place.
    document.querySelectorAll(".lang-option").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        try {
          localStorage.setItem("aitoolsy_lang", lang);
        } catch (e) {}
        location.reload();
      });
    });

    // Apply active language styling in the list
    var savedLang = "en";
    try {
      savedLang = localStorage.getItem("aitoolsy_lang") || "en";
    } catch (e) {}
    document.querySelectorAll(".lang-option").forEach(function (btn) {
      btn.classList.toggle("active-lang", btn.getAttribute("data-lang") === savedLang);
    });

    // Apply translations if i18n.js is loaded
    if (window.AiToolsyI18n) {
      window.AiToolsyI18n.applyTranslations(savedLang);
    }
  });
})();

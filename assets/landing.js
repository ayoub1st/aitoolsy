(function () {
  "use strict";

  // ---------- Featured-tool rail (continuously drifts right-to-left) ----------
  var featuredTrack = document.getElementById("featured-tools-track");
  // Initial + accent color used only for the last-resort fallback badge,
  // if every real-logo source fails for a given tool.
  var featuredTools = [
    ["ChatGPT", "https://chatgpt.com", "#10A37F"],
    ["Claude", "https://claude.ai", "#D97757"],
    ["Adobe Firefly", "https://firefly.adobe.com", "#EB1000"],
    ["Google Flow", "https://labs.google/flow", "#4285F4"],
    ["Pika", "https://pika.art", "#8B5CF6"],
    ["Kickresume", "https://www.kickresume.com", "#00B389"],
    ["LinkedIn", "https://www.linkedin.com", "#0A66C2"],
    ["Canva", "https://www.canva.com", "#00C4CC"],
    ["PhotoRoom", "https://www.photoroom.com", "#7C3AED"],
    ["Picsart", "https://picsart.com", "#FF2F5D"],
    ["Notion AI", "https://www.notion.com/product/ai", "#1B1B1B"],
    ["Elicit", "https://elicit.com", "#3B6FE0"],
    ["DeepSeek", "https://www.deepseek.com", "#4D6BFE"],
    ["Perplexity", "https://www.perplexity.ai", "#1FB8CD"],
    ["Gemini", "https://gemini.google.com", "#8E6CEF"],
    ["Copilot", "https://copilot.microsoft.com", "#0067DB"],
    ["QuillBot", "https://quillbot.com", "#FF4E4E"],
    ["GitHub", "https://github.com", "#24292F"],
    ["Devin", "https://devin.ai", "#5A3FFF"],
    ["Speechify", "https://speechify.com", "#FF5A1F"],
    ["TurboScribe", "https://turboscribe.ai", "#0EA5E9"]
  ];

  function faviconChain(link) {
    // Two independent real-logo sources, tried in order. Each source is
    // validated on load (see below) rather than trusted on a bare "it
    // loaded" — some proxies return a tiny/blank placeholder with a 200
    // status instead of a real error, which used to slip through.
    try {
      var host = new URL(link).hostname.replace(/^www\./, "");
      return [
        "https://logo.clearbit.com/" + host + "?size=128",
        "https://www.google.com/s2/favicons?sz=128&domain=" + host
      ];
    } catch (e) { return []; }
  }

  function initFeaturedTools() {
    if (!featuredTrack) return;
    featuredTools.forEach(function (item, i) {
      var card = document.createElement("div");
      card.className = "featured-tool-card";
      card.style.setProperty("--i", i);

      var badge = document.createElement("span");
      badge.className = "featured-tool-badge";
      var img = document.createElement("img");
      img.alt = item[0] + " logo";
      var chain = faviconChain(item[1]);
      var step = 0;

      function useFallbackBadge() {
        badge.innerHTML = "";
        badge.style.background = "linear-gradient(150deg, " + item[2] + ", " + item[2] + "cc)";
        badge.style.color = "#ffffff";
        badge.style.fontSize = "19px";
        badge.style.fontWeight = "800";
        badge.textContent = item[0].trim().charAt(0).toUpperCase();
      }

      function tryNext() {
        if (step >= chain.length) {
          useFallbackBadge();
          return;
        }
        img.src = chain[step];
        step += 1;
      }

      img.onerror = tryNext;
      img.onload = function () {
        // A real logo is never this tiny — catches the "blank/placeholder
        // returned with a 200 status" case that onerror can't see.
        if (img.naturalWidth < 8 || img.naturalHeight < 8) {
          tryNext();
          return;
        }
        badge.style.background = "#ffffff";
        badge.appendChild(img);
      };

      if (chain.length) {
        tryNext();
      } else {
        useFallbackBadge();
      }

      var label = document.createElement("span");
      label.textContent = item[0];
      card.appendChild(badge);
      card.appendChild(label);
      featuredTrack.appendChild(card);
    });
    // Duplicate the sequence so the right-to-left rail loops seamlessly.
    Array.prototype.slice.call(featuredTrack.children).forEach(function (card) {
      var clone = card.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      featuredTrack.appendChild(clone);
    });
  }

  initFeaturedTools();

  // ---------- Mobile hamburger menu ----------
  var heroMenuBtn = document.getElementById("hero-menu-btn");
  var heroMenuPanel = document.getElementById("hero-menu-panel");

  if (heroMenuBtn && heroMenuPanel) {
    heroMenuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      heroMenuPanel.hidden = !heroMenuPanel.hidden;
    });
    document.addEventListener("click", function (e) {
      if (!heroMenuPanel.hidden && !heroMenuPanel.contains(e.target) && e.target !== heroMenuBtn) {
        heroMenuPanel.hidden = true;
      }
    });
    // Picking a language inside the mobile panel shouldn't leave the panel open.
    heroMenuPanel.querySelectorAll(".hero-lang-option").forEach(function (btn) {
      btn.addEventListener("click", function () { heroMenuPanel.hidden = true; });
    });
  }

  // ---------- Language dropdown ----------
  var langBtn = document.getElementById("hero-lang-btn");
  var langMenu = document.getElementById("hero-lang-menu");

  function closeLangMenu() {
    if (langMenu) langMenu.hidden = true;
  }

  if (langBtn && langMenu) {
    langBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      langMenu.hidden = !langMenu.hidden;
    });
    document.addEventListener("click", function (e) {
      if (!langMenu.hidden && !langMenu.contains(e.target) && e.target !== langBtn) {
        closeLangMenu();
      }
    });
  }

  function markActiveLang(lang) {
    document.querySelectorAll(".hero-lang-option").forEach(function (btn) {
      btn.classList.toggle("active-lang", btn.getAttribute("data-lang") === lang);
    });
  }

  document.querySelectorAll(".hero-lang-option").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = btn.getAttribute("data-lang");
      try { localStorage.setItem("aitoolsy_lang", lang); } catch (e) {}
      if (window.AiToolsyI18n) window.AiToolsyI18n.applyTranslations(lang);
      markActiveLang(lang);
      closeLangMenu();
    });
  });

  // Apply the saved language (picked here or from another page's menu).
  var savedLang = "en";
  try { savedLang = localStorage.getItem("aitoolsy_lang") || "en"; } catch (e) {}
  if (window.AiToolsyI18n) window.AiToolsyI18n.applyTranslations(savedLang);
  markActiveLang(savedLang);
})();

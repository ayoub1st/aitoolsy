(function () {
  "use strict";

  var params = new URLSearchParams(location.search);
  var catIndex = Number(params.get("cat"));
  var toolIndex = Number(params.get("tool"));
  var category = Number.isInteger(catIndex) ? CATEGORY_DATA[catIndex] : null;
  var tool = category && Number.isInteger(toolIndex) ? category.tools[toolIndex] : null;

  var titleEl = document.getElementById("detail-title");
  var logoEl = document.getElementById("detail-logo");
  var catEl = document.getElementById("detail-category");
  var catLabelEl = document.getElementById("tool-category-label");
  var backLinkEl = document.querySelector(".tool-breadcrumb a");
  var descEl = document.getElementById("detail-desc");
  var priceEl = document.getElementById("detail-price");
  var ratingEl = document.getElementById("detail-rating");
  var bestEl = document.getElementById("detail-best");
  var noteEl = document.getElementById("detail-note");
  var visitEl = document.getElementById("detail-visit");
  var compareBody = document.getElementById("compare-body");
  var compareCount = document.getElementById("compare-count");
  var promptSection = document.getElementById("prompt-library");
  var promptList = document.getElementById("prompt-list");
  var promptCount = document.getElementById("prompt-count");
  var keyPromptSection = document.getElementById("key-prompt");
  var keyPromptCore = document.getElementById("key-prompt-core");
  var keyPromptRefine = document.getElementById("key-prompt-refine");

  function faviconChain(link) {
    if (!link) return [];
    try {
      var host = new URL(link).hostname.replace(/^www\./, "");
      return [
        "https://logo.clearbit.com/" + host + "?size=128",
        "https://www.google.com/s2/favicons?sz=128&domain=" + host,
        "https://icons.duckduckgo.com/ip3/" + host + ".ico"
      ];
    } catch (e) { return []; }
  }

  function fallbackLogo(name) {
    var letter = (name || "?").trim().charAt(0).toUpperCase();
    return "data:image/svg+xml," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96">' +
      '<rect width="96" height="96" rx="18" fill="#E7EFFB"/>' +
      '<text x="48" y="61" font-family="Arial" font-size="38" font-weight="700" fill="#1857c4" text-anchor="middle">' +
      letter + '</text></svg>'
    );
  }

  function setLogo(img, item) {
    var chain = faviconChain(item.link);
    var step = 0;
    img.src = chain[0] || fallbackLogo(item.name);
    img.alt = item.name + " logo";
    img.onerror = function () {
      step += 1;
      if (step < chain.length) {
        img.src = chain[step];
        return;
      }
      img.onerror = null;
      img.src = fallbackLogo(item.name);
    };
  }

  function safeText(value, fallback) {
    return value === null || value === undefined || value === "" ? (fallback || "—") : value;
  }

  function openRelated(catIdx, toolIdx) {
    location.href = "tool.html?cat=" + encodeURIComponent(catIdx) + "&tool=" + encodeURIComponent(toolIdx);
  }

  function renderKeyPrompt() {
    if (!tool || !tool.keyPrompt || !keyPromptSection) return;
    if (!tool.keyPrompt.core && !tool.keyPrompt.refine) return;
    keyPromptSection.hidden = false;
    var kpTr = window.ContentI18n && window.ContentI18n.tool(catIndex, toolIndex);
    var kp = (kpTr && kpTr.keyPrompt) || tool.keyPrompt;
    keyPromptCore.textContent = kp.core || "";
    keyPromptRefine.textContent = kp.refine || "";
    var copiedLabel = {
      ar: "تم النسخ!", es: "¡Copiado!", de: "Kopiert!", fr: "Copié !"
    }[window.ContentI18n && window.ContentI18n.currentLang()] || "Copied!";
    keyPromptSection.querySelectorAll(".key-prompt-copy").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var text = document.getElementById(btn.dataset.target).textContent;
        var done = function () {
          var original = btn.textContent;
          btn.textContent = copiedLabel;
          setTimeout(function () { btn.textContent = original; }, 1500);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, done);
        } else {
          done();
        }
      });
    });
  }

  function renderPrompts() {
    if (!tool || tool.name.toLowerCase() !== "chatgpt" || typeof CHATGPT_PROMPTS === "undefined") return;
    promptSection.hidden = false;
    var shortcutsWord = {
      ar: "اختصارًا", es: "atajos", de: "Shortcuts", fr: "raccourcis"
    }[window.ContentI18n && window.ContentI18n.currentLang()] || "shortcuts";
    var useLabel = {
      ar: "الاستخدام:", es: "Uso:", de: "Verwendung:", fr: "Utilisation :"
    }[window.ContentI18n && window.ContentI18n.currentLang()] || "Use:";
    var yourRequestLabel = {
      ar: "+ طلبك", es: "+ tu solicitud", de: "+ deine Anfrage", fr: "+ votre demande"
    }[window.ContentI18n && window.ContentI18n.currentLang()] || "+ your request";
    promptCount.textContent = CHATGPT_PROMPTS.length + " " + shortcutsWord;
    CHATGPT_PROMPTS.forEach(function (item, idx) {
      var card = document.createElement("article");
      card.className = "prompt-item";
      var code = document.createElement("code");
      code.textContent = "/" + item.command;
      var desc = document.createElement("p");
      var promptTr = window.ContentI18n && window.ContentI18n.promptItem(idx);
      desc.textContent = (promptTr && promptTr.description) || item.description;
      var use = document.createElement("span");
      use.className = "prompt-use";
      use.textContent = useLabel + " /" + item.command + " " + yourRequestLabel;
      card.appendChild(code);
      card.appendChild(desc);
      card.appendChild(use);
      promptList.appendChild(card);
    });
  }

  function renderComparison() {
    if (!category || !compareBody) return;
    var toolsWordC = (window.ContentI18n && window.ContentI18n.countWord("tools", null)) || "tools";
    compareCount.textContent = category.tools.length + " " + toolsWordC;
    var notRated = (window.ContentI18n && window.ContentI18n.notRatedLabel("—")) || "—";
    category.tools.forEach(function (item, idx) {
      var tr = document.createElement("tr");
      if (idx === toolIndex) tr.className = "current-tool";
      var tdName = document.createElement("td");
      var nameBtn = document.createElement("button");
      nameBtn.className = "compare-tool-btn";
      nameBtn.type = "button";
      nameBtn.textContent = item.name;
      nameBtn.addEventListener("click", function () { openRelated(catIndex, idx); });
      tdName.appendChild(nameBtn);

      var rowTr = window.ContentI18n && window.ContentI18n.tool(catIndex, idx);
      var desc = document.createElement("td");
      desc.textContent = safeText((rowTr && rowTr.desc) || item.desc);
      var price = document.createElement("td");
      price.textContent = safeText((rowTr && rowTr.price) || item.price);
      var rating = document.createElement("td");
      rating.textContent = typeof item.rating === "number" ? item.rating + "/10" : notRated;
      var best = document.createElement("td");
      best.textContent = safeText((rowTr && rowTr.best) || item.best);

      tr.appendChild(tdName);
      tr.appendChild(desc);
      tr.appendChild(price);
      tr.appendChild(rating);
      tr.appendChild(best);
      compareBody.appendChild(tr);
    });
  }

  function slugify(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  function init() {
    if (!tool || !category) {
      titleEl.textContent = "Tool not found";
      descEl.textContent = "The requested tool could not be found. Return to the directory to choose another tool.";
      return;
    }

    // "Back" should return to the tool's own category (the level directly
    // above a single tool), not always to the top of the guide.
    if (backLinkEl) backLinkEl.href = "guide.html#cat-" + slugify(category.title);

    var toolTr = window.ContentI18n && window.ContentI18n.tool(catIndex, toolIndex);
    var catTitleTr = (window.ContentI18n && window.ContentI18n.categoryTitle(catIndex, category.title)) || category.title;

    document.title = "AI Toolsy — " + tool.name;
    titleEl.textContent = tool.name;
    catEl.textContent = catTitleTr;
    catLabelEl.textContent = catTitleTr;
    descEl.textContent = safeText((toolTr && toolTr.desc) || tool.desc);
    priceEl.textContent = safeText((toolTr && toolTr.price) || tool.price);
    ratingEl.innerHTML = "";
    if (typeof tool.rating === "number") {
      var ratingBar = document.createElement("div");
      ratingBar.className = "rating-bar";
      var ratingFill = document.createElement("div");
      ratingFill.className = "rating-bar-fill";
      ratingFill.style.width = (tool.rating * 10) + "%";
      ratingBar.appendChild(ratingFill);
      var ratingText = document.createElement("span");
      ratingText.className = "rating-bar-text";
      ratingText.textContent = tool.rating + " / 10";
      ratingEl.appendChild(ratingBar);
      ratingEl.appendChild(ratingText);
    } else {
      ratingEl.textContent = (window.ContentI18n && window.ContentI18n.notRatedLabel("Not rated")) || "Not rated";
    }
    bestEl.textContent = safeText((toolTr && toolTr.best) || tool.best);
    setLogo(logoEl, tool);

    if (tool.note) {
      noteEl.hidden = false;
      noteEl.textContent = tool.note;
    }

    if (tool.link) {
      visitEl.href = tool.link;
      visitEl.classList.remove("disabled");
    } else {
      visitEl.href = "#";
      visitEl.classList.add("disabled");
      visitEl.textContent = {
        ar: "لا يوجد رابط رسمي مدرج", es: "No hay enlace oficial disponible", de: "Kein offizieller Link vorhanden", fr: "Aucun lien officiel indiqué"
      }[window.ContentI18n && window.ContentI18n.currentLang()] || "No official link listed";
    }

    renderPrompts();
    renderKeyPrompt();
    renderComparison();
  }

  init();
})();

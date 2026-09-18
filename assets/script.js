(function () {
  "use strict";

  var grid = document.getElementById("grid");
  var bookmarksOnly = !!(grid && grid.hasAttribute("data-bookmarks-only"));
  var bookmarksEmpty = document.getElementById("bookmarks-empty");
  var searchInput = document.getElementById("search-input");
  var searchIcon = document.getElementById("search-icon");
  var searchStatus = document.getElementById("search-status");
  var sortControl = document.getElementById("sort-control");
  var sortBtn = document.getElementById("sort-btn");
  var sortLabel = document.getElementById("sort-label");
  var sortDropdown = document.getElementById("sort-dropdown");

  // ---------- Fields (domains) — level-1 browsing on the guide page ----------
  var domainsPage = document.getElementById("domains-page");
  var domainsGrid = document.getElementById("domains-grid");
  var domainsTotalEl = document.getElementById("domains-total");
  var domainPage = document.getElementById("domain-page");
  var domainBackBtn = document.getElementById("domain-back-btn");
  var domainPageTitle = document.getElementById("domain-page-title");
  var domainPageDesc = document.getElementById("domain-page-desc");
  var domainMode = !!(domainsGrid && domainPage && typeof DOMAIN_DATA !== "undefined");
  var currentView = "home"; // "home" | "domain" | "search"
  var currentDomainKey = null;
  var guideHeader = document.querySelector(".guide-header");
  var allCategoryEntries = []; // every category entry, built once, keyed for reuse
  var entryByTitle = {};

  var catEntries = []; // the entries currently rendered into #grid: { title, slug, tools, box, list }

  // ---------- Category detail page (Level 3) ----------
  var categoryPage = document.getElementById("category-page");
  var categoryBackBtn = document.getElementById("category-back-btn");
  var categoryHeroImg = document.getElementById("category-hero-img");
  var categoryHeroBookmark = document.getElementById("category-hero-bookmark");
  var categoryHeroTitle = document.getElementById("category-hero-title");
  var categoryHeroDesc = document.getElementById("category-hero-desc");
  var toolBannersHeading = document.getElementById("tool-banners-heading");
  var toolBannersEl = document.getElementById("tool-banners");

  // ---------- Bookmarks (shared with bookmarks.html via localStorage) ----------
  var BOOKMARK_KEY = "aitoolsy_bookmarks";

  function slugify(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  function getBookmarks() {
    try {
      return JSON.parse(localStorage.getItem(BOOKMARK_KEY) || "[]");
    } catch (e) {
      return [];
    }
  }

  function setBookmarks(list) {
    try {
      localStorage.setItem(BOOKMARK_KEY, JSON.stringify(list));
    } catch (e) {}
  }

  function isBookmarked(slug) {
    return getBookmarks().indexOf(slug) !== -1;
  }

  function toggleBookmark(slug, title) {
    var list = getBookmarks();
    var idx = list.indexOf(slug);
    if (idx === -1) {
      list.push(slug);
    } else {
      list.splice(idx, 1);
    }
    setBookmarks(list);
    return isBookmarked(slug);
  }

  function faviconChain(link) {
    // Clearbit 404s when it has no logo, which lets the onerror chain below
    // fall through properly. Google's favicon proxy is kept only as a
    // second attempt — it never errors, so it can never be the last step
    // or a broken tool would render a blank/globe icon forever.
    if (!link) return [];
    try {
      var host = new URL(link).hostname.replace(/^www\./, "");
      return [
        "https://logo.clearbit.com/" + host + "?size=64",
        "https://www.google.com/s2/favicons?sz=64&domain=" + host
      ];
    } catch (e) {
      return [];
    }
  }

  function fallbackLogo(name) {
    var letter = (name || "?").trim().charAt(0).toUpperCase();
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">' +
      '<rect width="40" height="40" rx="8" fill="%23E3EEFB"/>' +
      '<text x="20" y="26" font-family="Arial, sans-serif" font-size="17" ' +
      'font-weight="700" fill="%231857c4" text-anchor="middle">' + letter + '</text>' +
      '</svg>';
    return "data:image/svg+xml," + svg;
  }

  function setLogo(imgEl, tool) {
    var chain = faviconChain(tool.link);
    var fallback = fallbackLogo(tool.name);
    var step = 0;
    if (chain.length) {
      imgEl.src = chain[0];
      imgEl.onerror = function () {
        step += 1;
        if (step < chain.length) {
          imgEl.src = chain[step];
          return;
        }
        imgEl.onerror = null;
        imgEl.src = fallback;
      };
    } else {
      imgEl.src = fallback;
    }
    imgEl.alt = tool.name + " logo";
  }

  function buildToolItem(tool, categoryIndex, toolIndex) {
    var li = document.createElement("li");
    li.className = "tool-item";

    var img = document.createElement("img");
    img.className = "tool-logo";
    setLogo(img, tool);

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "tool-name-btn";
    btn.textContent = tool.name;
    btn.addEventListener("click", function () {
      location.href = "tool.html?cat=" + encodeURIComponent(categoryIndex) + "&tool=" + encodeURIComponent(toolIndex);
    });

    var hint = document.createElement("span");
    hint.className = "tool-hint";
    var hintArrow = document.createElement("span");
    hintArrow.className = "tool-hint-arrow";
    hintArrow.setAttribute("aria-hidden", "true");
    hintArrow.textContent = "→";
    var hintLabel = document.createElement("span");
    hintLabel.className = "tool-hint-label";
    hintLabel.textContent = "View Details";
    hint.appendChild(hintArrow);
    hint.appendChild(hintLabel);
    hint.addEventListener("click", function () {
      location.href = "tool.html?cat=" + encodeURIComponent(categoryIndex) + "&tool=" + encodeURIComponent(toolIndex);
    });

    li.appendChild(img);
    li.appendChild(btn);
    li.appendChild(hint);
    tool._el = li;
    return li;
  }

  // ---------- Category detail page (Level 3) ----------
  function buildToolBanner(tool, categoryIndex, toolIndex) {
    var banner = document.createElement("article");
    banner.className = "tool-banner";

    var media = document.createElement("div");
    media.className = "tool-banner-media";
    var logoImg = document.createElement("img");
    setLogo(logoImg, tool);
    media.appendChild(logoImg);

    var copy = document.createElement("div");
    copy.className = "tool-banner-copy";
    var name = document.createElement("h4");
    name.className = "tool-banner-name";
    name.textContent = tool.name;
    var toolTr = window.ContentI18n && window.ContentI18n.tool(categoryIndex, toolIndex);
    var desc = document.createElement("p");
    desc.className = "tool-banner-desc";
    desc.textContent = (toolTr && toolTr.desc) || tool.desc || tool.best || "";
    copy.appendChild(name);
    copy.appendChild(desc);

    var arrow = document.createElement("span");
    arrow.className = "tool-banner-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';

    banner.appendChild(media);
    banner.appendChild(copy);
    banner.appendChild(arrow);

    banner.addEventListener("click", function () {
      location.href = "tool.html?cat=" + encodeURIComponent(categoryIndex) + "&tool=" + encodeURIComponent(toolIndex);
    });

    return banner;
  }

  function openCategory(entry, opts) {
    var category = CATEGORY_DATA[entry.categoryIndex];

    if (categoryHeroImg) {
      categoryHeroImg.onerror = null;
      categoryHeroImg.src = categoryImage(category);
      categoryHeroImg.alt = entry.title;
      categoryHeroImg.onerror = function () {
        categoryHeroImg.onerror = null;
        categoryHeroImg.src = "assets/media/welcome.jpg";
      };
    }
    if (categoryHeroTitle) {
      categoryHeroTitle.textContent = (window.ContentI18n && window.ContentI18n.categoryTitle(entry.categoryIndex, entry.title)) || entry.title;
    }
    if (categoryHeroDesc) {
      categoryHeroDesc.textContent = (window.ContentI18n && window.ContentI18n.categoryDesc(entry.categoryIndex, categoryDescription(category))) || categoryDescription(category);
    }
    if (toolBannersHeading) {
      var toolsWord = (window.ContentI18n && window.ContentI18n.countWord(entry.tools.length === 1 ? "tool" : "tools", null)) || (entry.tools.length === 1 ? "Tool" : "Tools");
      toolBannersHeading.textContent = entry.tools.length + " " + toolsWord;
    }

    if (categoryHeroBookmark) {
      categoryHeroBookmark.classList.toggle("saved", isBookmarked(entry.slug));
      categoryHeroBookmark.onclick = function () {
        var saved = toggleBookmark(entry.slug, entry.title);
        categoryHeroBookmark.classList.toggle("saved", saved);
        var gridBtn = entry.box.querySelector(".bookmark-btn");
        if (gridBtn) gridBtn.classList.toggle("saved", saved);
      };
    }

    if (toolBannersEl) {
      toolBannersEl.innerHTML = "";
      entry.tools.forEach(function (tool, toolIndex) {
        toolBannersEl.appendChild(buildToolBanner(tool, entry.categoryIndex, toolIndex));
      });
    }

    if (domainPage) domainPage.hidden = true;
    if (categoryPage) categoryPage.hidden = false;
    if (guideHeader) guideHeader.hidden = true;
    window.scrollTo(0, 0);

    if (!(opts && opts.fromHistory)) {
      history.pushState(
        { view: "category", domainKey: currentView === "domain" ? currentDomainKey : null, categorySlug: entry.slug },
        ""
      );
    }
  }

  if (categoryBackBtn) {
    categoryBackBtn.addEventListener("click", function () {
      // Always resolve to the parent categories view, regardless of how
      // the visitor arrived at this tool list (deep link, search, etc.).
      if (currentView === "domain" && currentDomainKey) {
        var ownerDom = DOMAIN_DATA.filter(function (d) { return d.key === currentDomainKey; })[0];
        if (ownerDom) { openDomain(ownerDom); return; }
      }
      openSearchResults();
    });
  }

  // ---------- Category card visuals ----------
  // Every category title used across CATEGORY_DATA is mapped to a specific,
  // verified real photo (not a random keyword guess), so unrelated
  // categories never collapse onto the same generic picture the way the
  // old keyword-fallback system did.
  var CATEGORY_VISUALS = {
    "Video Creation": ["Film & video production", "local:assets/media/categories/video-creation.jpg"],
    "Image Creation": ["AI & digital image generation", "local:assets/media/categories/image-creation.jpg"],
    "Content Writing": ["Writing, drafting and editing text", "local:assets/media/categories/content-writing.jpg"],
    "CV / Resume Creation": ["Resumes, CVs and job applications", "local:assets/media/categories/cv-resume-creation.jpg"],
    "Search Engines & AI Search": ["AI-powered search and answers", "local:assets/media/categories/search-engines-ai-search.jpg"],
    "Research (Knowledge Research)": ["Knowledge research and study", "local:assets/media/categories/research-knowledge.jpg"],
    "Productivity": ["Planning, organization & focus", "local:assets/media/categories/productivity.jpg"],
    "Design": ["Digital design & creative work", "local:assets/media/categories/design-image-creation.jpg"],
    "Excel & Spreadsheet Analysis": ["Spreadsheets and data analysis", "local:assets/media/categories/excel-analysis.jpg"],
    "Programming": ["Code and developer tools", "local:assets/media/categories/programming.jpg"],
    "Studying": ["Studying, courses and learning", "local:assets/media/categories/studying.jpg"],
    "Deep Scientific Research": ["Scientific and academic research", "local:assets/media/categories/deep-scientific-research.jpg"],
    "Content Creation (Short-form)": ["Short-form social video content", "local:assets/media/categories/content-creation-shortform.jpg"],
    "Text-to-Speech": ["Turning text into natural speech", "local:assets/media/categories/text-to-speech.jpg"],
    "Text-to-Video": ["Turning text prompts into video", "local:assets/media/categories/text-to-video.jpg"],
    "AI Agents": ["Autonomous AI agents & assistants", "local:assets/media/categories/ai-agents.jpg"],
    "Translation": ["Language translation tools", "local:assets/media/categories/translation.jpg"],
    "Automation": ["Workflow & task automation", "local:assets/media/categories/automation.jpg"],
    "Marketing & E-commerce": ["Marketing, growth & online stores", "local:assets/media/categories/marketing-ecommerce.jpg"],
    "Business": ["Business & professional work", "local:assets/media/categories/business.jpg"],
    "Creating Complete Websites": ["Building full websites with AI", "local:assets/media/categories/creating-websites.jpg"],
    "Text-to-Manga / Comics": ["Comic-panel & manga-style art", "local:assets/media/categories/text-to-manga-comics.jpg"],
    "Maps & Places Off the Beaten Path": ["Maps and off-the-beaten-path places", "local:assets/media/categories/maps-places.jpg"],
    "Online Work & Business Ideas": ["Freelancing and business ideas", "local:assets/media/categories/online-work-business-ideas.jpg"],
    "Legal Consulting": ["Legal advice and consulting", "local:assets/media/categories/legal-consulting.jpg"],
    "Travel Planning & Recommendations": ["Trip planning and travel picks", "local:assets/media/categories/travel-planning.jpg"],
    "Cooking & Nutrition": ["Cooking, recipes and nutrition", "local:assets/media/categories/cooking-nutrition.jpg"],
    "Fitness / Bodybuilding": ["Fitness, training and bodybuilding", "local:assets/media/categories/fitness-bodybuilding.jpg"],
    "Meetings & Gatherings": ["Meetings, calls and gatherings", "local:assets/media/categories/meetings-gatherings.jpg"],
    "Finance & Accounting": ["Finance, budgeting & accounting", "local:assets/media/categories/finance-accounting.jpg"],
    "Product Comparison (Price / Ingredients / Nutrition)": ["Comparing products, prices & labels", "local:assets/media/categories/product-comparison.jpg"],
    "Fashion, Clothing & Colors": ["Fashion, outfits and color choices", "local:assets/media/categories/fashion-clothing-colors.jpg"],
    "Crafts & Manual Trades": ["Hands-on crafts and manual trades", "local:assets/media/categories/crafts-manual-trades.jpg"],
    "3D Games & Virtual Worlds": ["3D games and virtual worlds", "local:assets/media/categories/3d-games-virtual-worlds.jpg"],
    "Space, Galaxies & Astronomy": ["Space, galaxies and astronomy", "local:assets/media/categories/space-astronomy.jpg"],
    "History, Geography & Plate Tectonics": ["History, geography & earth science", "local:assets/media/categories/history-geography.jpg"],
    "Makeup, Skincare & Hair Care": ["Makeup, skincare and hair care", "local:assets/media/categories/makeup-skincare-haircare.jpg"],
    "Transportation in Europe, America & Canada": ["Transportation & getting around", "local:assets/media/categories/transportation.jpg"],
    "Medical, Veterinary & Child-Care Questions": ["Medical, vet and child-care questions", "local:assets/media/categories/medical-veterinary-childcare.jpg"],
    "Online Shopping": ["Online shopping & marketplaces", "local:assets/media/categories/online-shopping.jpg"],
    "Finding the Value of Things": ["Pricing and valuing items", "local:assets/media/categories/finding-value-of-things.jpg"],
    "Finding a Job & Finding Employees": ["Job hunting & hiring", "local:assets/media/categories/finding-a-job.jpg"],
    "Sports: Football, Tennis & Basketball": ["Sports: football, tennis & basketball", "local:assets/media/categories/sports.jpg"],
    "Language Learning": ["Learning a new language", "local:assets/media/categories/language-learning.jpg"],
    "Flight & Aircraft Tracking": ["Flight & aircraft tracking", "local:assets/media/categories/flight-aircraft-tracking.jpg"],
    "Currencies, Conversion & Prices": ["Currencies, conversion & prices", "local:assets/media/categories/currencies-conversion-prices.jpg"],
    "Identifying a Song from Audio": ["Identifying songs from audio", "local:assets/media/categories/identifying-song-from-audio.jpg"],
    "Watching Movies, Series & Shows": ["Movies, series & shows", "local:assets/media/categories/watching-movies-series-shows.jpg"],
    "Image Search": ["Find, inspect and research images", "local:assets/media/categories/image-search.jpg"],
    "Train Tracking": ["Train & rail tracking", "local:assets/media/categories/train-tracking.jpg"],
    "Tracking Ships & Cargo Vessels": ["Tracking ships & cargo vessels", "local:assets/media/categories/tracking-ships-cargo-vessels.jpg"],
    "Emergency Numbers by Country": ["Emergency numbers by country", "local:assets/media/categories/emergency-numbers.jpg"],
    "Construction, Engineering & Home Architecture": ["Construction, engineering & architecture", "local:assets/media/categories/construction-engineering-architecture.jpg"],
    "Restaurant & Hotel Ratings": ["Restaurant & hotel ratings", "local:assets/media/categories/restaurant-hotel-ratings.jpg"],
    "Sea Conditions": ["Sea and ocean conditions", "local:assets/media/categories/sea-conditions.jpg"],
    "Fixing Computer Problems Yourself": ["DIY computer troubleshooting", "local:assets/media/categories/fixing-computer-problems.jpg"],
    "Listening to Music": ["Listening to and discovering music", "local:assets/media/categories/listening-to-music.jpg"],
    "Knowing Everything About a Car": ["Everything about your car", "local:assets/media/categories/knowing-about-a-car.jpg"],
    "Logistics & Supply Chain": ["Logistics & supply chain", "local:assets/media/categories/logistics-supply-chain.jpg"],
    "BPMN & Process Modeling": ["BPMN & business process modeling", "local:assets/media/categories/database-bpmn.jpg"],
    "Academic Writing & Thesis (PFE)": ["Academic writing & thesis work", "local:assets/media/categories/academic-writing-thesis.jpg"],
    "Data Analysis": ["Data analysis, no-code", "local:assets/media/categories/data-analysis-advanced-excel.jpg"],
    "Email Intelligence": ["Email discovery, reputation & exposure checks", "local:assets/media/categories/email-intelligence.jpg"],
    "Phone Number Intelligence": ["Phone-number lookup and verification tools", "local:assets/media/categories/phone-number-intelligence.jpg"],
    "People & Social Search": ["Find public profiles, usernames and social mentions", "local:assets/media/categories/people-social-search.jpg"],
    "IP / Geolocation": ["IP intelligence, network location and geolocation utilities", "local:assets/media/categories/ip-geolocation.jpg"],
    "Breaches & Data Exposure": ["Security research around exposed or leaked information", "local:assets/media/categories/breaches-data-exposure.jpg"],
    "Life Organization": ["Habits, routines, wellbeing and personal planning", "local:assets/media/categories/life-organization.jpg"],
    "Image Search & Metadata": ["Reverse image research and image metadata", "photo-1542038784456-1ea8e935640e"],
    "AI Tools": ["Artificial intelligence assistants and creative systems", "photo-1677442136019-21780ecad995"]
  };

  function categoryVisual(category) {
    if (CATEGORY_VISUALS[category.title]) return CATEGORY_VISUALS[category.title];
    // Safety net only — every current category title is covered above, so
    // this only fires if a brand-new category is added without an entry.
    return ["Curated tools for this workflow", "photo-1677442136019-21780ecad995"];
  }

  function categoryImage(category) {
    var visual = categoryVisual(category);
    if (visual[1].indexOf("local:") === 0) {
      return visual[1].slice(6);
    }
    return "https://images.unsplash.com/" + visual[1] + "?auto=format&fit=crop&w=1000&q=82";
  }

  function categoryDescription(category) {
    var visual = categoryVisual(category);
    return visual[0] + ". Explore the most useful tools in this collection, compare their strengths, and open the one that fits your workflow.";
  }

  function buildCategoryBox(category) {
    var slug = slugify(category.title);
    var box = document.createElement("article");
    box.className = "category-box";
    box.id = "cat-" + slug;

    var visual = categoryVisual(category);
    var imageWrap = document.createElement("div");
    imageWrap.className = "category-image-wrap";

    var image = document.createElement("img");
    image.className = "category-image";
    image.src = categoryImage(category);
    image.alt = category.title + " — " + visual[0];
    image.loading = "lazy";
    image.onerror = function () {
      image.onerror = null;
      image.src = "assets/media/welcome.jpg";
    };

    var imageShade = document.createElement("div");
    imageShade.className = "category-image-shade";

    var count = document.createElement("span");
    count.className = "category-count";
    var catToolsWord = (window.ContentI18n && window.ContentI18n.countWord(category.tools.length === 1 ? "tool" : "tools", null)) || (category.tools.length === 1 ? "tool" : "tools");
    count.textContent = category.tools.length + " " + catToolsWord;

    var bookmarkBtn = document.createElement("button");
    bookmarkBtn.type = "button";
    bookmarkBtn.className = "bookmark-btn";
    bookmarkBtn.setAttribute("aria-label", "Save category");
    bookmarkBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4.5L5 21V4a1 1 0 0 1 1-1z"/></svg>';
    if (isBookmarked(slug)) bookmarkBtn.classList.add("saved");
    bookmarkBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var saved = toggleBookmark(slug, category.title);
      bookmarkBtn.classList.toggle("saved", saved);
      // On the bookmarks page itself, unsaving a category should drop its
      // card immediately rather than leaving a now-unsaved card in view.
      if (bookmarksOnly && !saved) {
        box.remove();
        if (grid && !grid.children.length) {
          if (bookmarksEmpty) bookmarksEmpty.hidden = false;
          if (grid) grid.hidden = true;
        }
      }
    });

    imageWrap.appendChild(image);
    imageWrap.appendChild(imageShade);
    imageWrap.appendChild(count);
    imageWrap.appendChild(bookmarkBtn);

    var body = document.createElement("div");
    body.className = "category-body";

    var titleRow = document.createElement("div");
    titleRow.className = "category-title-row";
    var title = document.createElement("h2");
    title.className = "category-name";
    title.textContent = (window.ContentI18n && window.ContentI18n.categoryTitle(category._index, category.title)) || category.title;
    var chevron = document.createElement("span");
    chevron.className = "category-chevron";
    chevron.setAttribute("aria-hidden", "true");
    chevron.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>';
    titleRow.appendChild(title);
    titleRow.appendChild(chevron);

    var desc = document.createElement("p");
    desc.className = "category-desc";
    desc.textContent = (window.ContentI18n && window.ContentI18n.categoryDesc(category._index, categoryDescription(category))) || categoryDescription(category);

    var exploreBtn = document.createElement("button");
    exploreBtn.type = "button";
    exploreBtn.className = "category-explore-btn";
    var exploreLabel = {
      ar: "استكشف الأدوات", es: "Explorar herramientas", de: "Tools entdecken", fr: "Explorer les outils"
    }[window.ContentI18n && window.ContentI18n.currentLang()] || "View tools";
    exploreBtn.innerHTML =
      '<span class="category-explore-label">' + exploreLabel + '</span>' +
      '<span class="category-explore-arrow" aria-hidden="true">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' +
      "</span>";

    body.appendChild(titleRow);
    body.appendChild(desc);
    body.appendChild(exploreBtn);

    var entry = {
      title: category.title,
      slug: slug,
      tools: category.tools,
      categoryIndex: category._index,
      box: box
    };

    box.addEventListener("click", function (e) {
      if (e.target === bookmarkBtn || bookmarkBtn.contains(e.target)) return;
      if (categoryPage) {
        openCategory(entry);
      } else {
        location.href = "guide.html#cat-" + slug;
      }
    });

    box.appendChild(imageWrap);
    box.appendChild(body);
    box._entry = entry;
    return box;
  }


  // ---------- Fields (domains) ----------
  function buildDomainCard(domain, entries, index) {
    var box = document.createElement("button");
    box.type = "button";
    box.className = "domain-card";

    var icon = document.createElement("span");
    icon.className = "domain-icon-circle";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = domain.icon;

    var domainTr = window.ContentI18n && window.ContentI18n.domain(domain.key);

    var title = document.createElement("h3");
    title.className = "domain-title";
    title.textContent = (domainTr && domainTr.title) || domain.title;

    var desc = document.createElement("p");
    desc.className = "domain-desc";
    desc.textContent = (domainTr && domainTr.desc) || domain.desc;

    var countChip = document.createElement("span");
    countChip.className = "domain-count-chip";
    countChip.setAttribute("aria-hidden", "true");
    var domCatWord = (window.ContentI18n && window.ContentI18n.countWord(entries.length === 1 ? "category" : "categories", null)) || (entries.length === 1 ? "category" : "categories");
    countChip.textContent = entries.length + " " + domCatWord;

    var arrowChip = document.createElement("span");
    arrowChip.className = "domain-arrow-chip";
    arrowChip.setAttribute("aria-hidden", "true");
    arrowChip.textContent = "→";

    box.setAttribute(
      "aria-label",
      ((domainTr && domainTr.title) || domain.title) + " — " + entries.length + " " + domCatWord
    );

    box.appendChild(icon);
    box.appendChild(title);
    box.appendChild(desc);
    box.appendChild(countChip);
    box.appendChild(arrowChip);

    box.addEventListener("click", function () {
      openDomain(domain);
    });

    return box;
  }

  function renderEntries(entries) {
    grid.innerHTML = "";
    entries.forEach(function (entry) {
      grid.appendChild(entry.box);
    });
    catEntries = entries;
    defaultOrder = entries.slice();
    applySort("default");
  }

  function resetSearchUI() {
    if (searchInput) searchInput.value = "";
    if (searchStatus) searchStatus.hidden = true;
  }

  function syncHeaderVisibility() {
    if (!guideHeader) return;
    var categoryOpen = categoryPage && !categoryPage.hidden;
    guideHeader.hidden = categoryOpen ? true : !(currentView === "home" || currentView === "search");
  }

  function openDomain(domain, opts) {
    currentView = "domain";
    currentDomainKey = domain.key;
    resetSearchUI();
    var entries = domain.categories
      .map(function (title) { return entryByTitle[title]; })
      .filter(Boolean);
    renderEntries(entries);
    var domainTr2 = window.ContentI18n && window.ContentI18n.domain(domain.key);
    if (domainPageTitle) {
      domainPageTitle.innerHTML = "";
      var titleIcon = document.createElement("span");
      titleIcon.className = "domain-page-title-icon";
      titleIcon.setAttribute("aria-hidden", "true");
      titleIcon.innerHTML = domain.icon;
      domainPageTitle.appendChild(titleIcon);
      domainPageTitle.appendChild(document.createTextNode((domainTr2 && domainTr2.title) || domain.title));
    }
    if (domainPageDesc) domainPageDesc.textContent = (domainTr2 && domainTr2.desc) || domain.desc;
    if (categoryPage) categoryPage.hidden = true;
    domainsPage.hidden = true;
    domainPage.hidden = false;
    syncHeaderVisibility();
    window.scrollTo(0, 0);
    if (!(opts && opts.fromHistory)) {
      history.pushState({ view: "domain", domainKey: domain.key }, "");
    }
  }

  function openSearchResults(opts) {
    currentView = "search";
    currentDomainKey = null;
    renderEntries(allCategoryEntries.slice());
    var searchLabels = window.ContentI18n && window.ContentI18n.searchResultsLabel();
    if (domainPageTitle) domainPageTitle.textContent = (searchLabels && searchLabels[0]) || "Search results";
    if (domainPageDesc) domainPageDesc.textContent = (searchLabels && searchLabels[1]) || "Matching categories across every field.";
    if (categoryPage) categoryPage.hidden = true;
    domainsPage.hidden = true;
    domainPage.hidden = false;
    syncHeaderVisibility();
    if (!(opts && opts.fromHistory)) {
      history.pushState({ view: "search" }, "");
    }
  }

  function goHome(opts) {
    currentView = "home";
    currentDomainKey = null;
    resetSearchUI();
    grid.innerHTML = "";
    catEntries = [];
    if (categoryPage) categoryPage.hidden = true;
    domainPage.hidden = true;
    domainsPage.hidden = false;
    syncHeaderVisibility();
    window.scrollTo(0, 0);
    if (!(opts && opts.fromHistory)) {
      history.pushState({ view: "home" }, "");
    }
  }

  if (domainBackBtn) {
    domainBackBtn.addEventListener("click", function () { goHome(); });
  }

  // Reconstruct the right view whenever the browser's own Back/Forward
  // buttons are used, instead of leaving the site (since none of these
  // in-page levels are separate documents).
  function applyHistoryState(state) {
    state = state || { view: "home" };
    if (state.view === "category") {
      var catEntry = allCategoryEntries.filter(function (e) { return e.slug === state.categorySlug; })[0];
      if (state.domainKey) {
        var ownerDom = DOMAIN_DATA.filter(function (d) { return d.key === state.domainKey; })[0];
        if (ownerDom) openDomain(ownerDom, { fromHistory: true });
      } else {
        openSearchResults({ fromHistory: true });
      }
      if (catEntry) openCategory(catEntry, { fromHistory: true });
      else if (!state.domainKey) { /* nothing to show, stay on search results */ }
    } else if (state.view === "domain") {
      var domain = DOMAIN_DATA.filter(function (d) { return d.key === state.domainKey; })[0];
      if (domain) openDomain(domain, { fromHistory: true });
      else goHome({ fromHistory: true });
    } else if (state.view === "search") {
      openSearchResults({ fromHistory: true });
    } else {
      goHome({ fromHistory: true });
    }
  }

  if (domainMode) {
    window.addEventListener("popstate", function (e) {
      applyHistoryState(e.state);
    });
  }

  // ---------- Search ----------
  function toolMatches(tool, q) {
    return (
      (tool.name && tool.name.toLowerCase().indexOf(q) !== -1) ||
      (tool.best && tool.best.toLowerCase().indexOf(q) !== -1)
    );
  }

  function clearSearch() {
    catEntries.forEach(function (entry) {
      entry.box.classList.remove("search-hidden");
    });
    if (searchStatus) searchStatus.hidden = true;
  }

  function runSearch(rawQuery) {
    var q = rawQuery.trim().toLowerCase();

    if (q === "") {
      clearSearch();
      return;
    }

    var visibleCount = 0;

    catEntries.forEach(function (entry) {
      var titleMatches = entry.title.toLowerCase().indexOf(q) !== -1;
      var anyToolMatch = false;

      entry.tools.forEach(function (tool) {
        var matches = titleMatches || toolMatches(tool, q);
        if (matches) anyToolMatch = true;
      });

      var show = titleMatches || anyToolMatch;
      entry.box.classList.toggle("search-hidden", !show);
      if (show) visibleCount++;
    });

    if (searchStatus) {
      searchStatus.hidden = false;
      searchStatus.textContent =
        visibleCount === 0
          ? "No tools match your search."
          : visibleCount + " categor" + (visibleCount === 1 ? "y" : "ies") + " match your search.";
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      var q = searchInput.value;

      if (!domainMode) {
        runSearch(q);
        return;
      }

      if (q.trim() === "") {
        if (currentView === "search") {
          goHome();
        } else {
          clearSearch();
        }
        return;
      }

      if (currentView === "home") {
        openSearchResults();
      }
      runSearch(q);
    });
  }
  if (searchIcon && searchInput) {
    searchIcon.addEventListener("click", function () {
      searchInput.focus();
    });
  }

  // ---------- Sort ----------
  // NOTE ON HONESTY: "Most used" has no real analytics backend behind this
  // static site, so it's approximated from the data actually available (tool
  // count per category) as a reasonable, disclosed stand-in rather than
  // fabricated numbers. "Top rated fields" is genuine — it's the real average
  // rating of each category's tools.
  function sortLabelFor(mode) {
    var lang = (document.documentElement.getAttribute("lang")) || "en";
    var dict = (window.AiToolsyI18n && window.AiToolsyI18n.translations[lang]) || {};
    var keys = { default: "guide.sort", alpha: "guide.sort.alpha", used: "guide.sort.used", rated: "guide.sort.rated" };
    return dict[keys[mode]] || SORT_LABELS[mode] || "Sort";
  }
  var SORT_LABELS = {
    default: "Sort",
    alpha: "Alphabetical (A–Z)",
    used: "Most used",
    rated: "Top rated fields"
  };

  var defaultOrder = null; // captured after first render

  function avgRating(entry) {
    var rated = entry.tools.filter(function (t) { return typeof t.rating === "number"; });
    if (!rated.length) return -1;
    var sum = rated.reduce(function (s, t) { return s + t.rating; }, 0);
    return sum / rated.length;
  }

  function applySort(mode) {
    var ordered;
    if (mode === "default" || !mode) {
      ordered = defaultOrder.slice();
    } else if (mode === "alpha") {
      ordered = catEntries.slice().sort(function (a, b) {
        return a.title.localeCompare(b.title);
      });
    } else if (mode === "used") {
      ordered = catEntries.slice().sort(function (a, b) {
        return b.tools.length - a.tools.length || a.title.localeCompare(b.title);
      });
    } else if (mode === "rated") {
      ordered = catEntries.slice().sort(function (a, b) {
        return avgRating(b) - avgRating(a) || a.title.localeCompare(b.title);
      });
    } else {
      ordered = defaultOrder.slice();
    }

    ordered.forEach(function (entry) {
      grid.appendChild(entry.box);
    });

    if (sortLabel) sortLabel.textContent = sortLabelFor(mode);
    document.querySelectorAll(".sort-option").forEach(function (opt) {
      opt.classList.toggle("active", opt.getAttribute("data-sort") === (mode || "default"));
    });
  }

  if (sortBtn && sortControl && sortDropdown) {
    sortBtn.addEventListener("click", function () {
      sortControl.classList.toggle("open");
    });
    document.addEventListener("click", function (e) {
      if (!sortControl.contains(e.target)) sortControl.classList.remove("open");
    });
    sortDropdown.querySelectorAll(".sort-option").forEach(function (opt) {
      opt.addEventListener("click", function () {
        applySort(opt.getAttribute("data-sort"));
        sortControl.classList.remove("open");
      });
    });
  }

  function init() {
    if (!grid || typeof CATEGORY_DATA === "undefined") return;

    if (bookmarksOnly) {
      // Bookmarks page: build the exact same rich, expandable cards as the
      // full guide, but only for saved categories — and only for those, so
      // opening one never sends the person back to the all-categories page.
      var saved = getBookmarks();
      var builtAny = false;
      CATEGORY_DATA.forEach(function (category, categoryIndex) {
        category._index = categoryIndex; // keeps tool.html links correct
        if (saved.indexOf(slugify(category.title)) === -1) return;
        var box = buildCategoryBox(category);
        grid.appendChild(box);
        catEntries.push(box._entry);
        builtAny = true;
      });
      defaultOrder = catEntries.slice();
      if (bookmarksEmpty) bookmarksEmpty.hidden = builtAny;
      grid.hidden = !builtAny;

      // Deep link support: bookmarks.html#cat-video-creation opens that
      // category in place, same as the guide.
      if (location.hash && location.hash.indexOf("#cat-") === 0) {
        var targetSlug = location.hash.slice(5);
        var match = catEntries.filter(function (e) { return e.slug === targetSlug; })[0];
        if (match) {
          window.setTimeout(function () {
            match.box.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 150);
        }
      }
      return;
    }

    // Build every category card once, detached — they get appended into
    // whichever field (or the flattened search view) is opened, without
    // ever being rebuilt.
    CATEGORY_DATA.forEach(function (category, categoryIndex) {
      category._index = categoryIndex;
      var box = buildCategoryBox(category);
      var entry = box._entry;
      allCategoryEntries.push(entry);
      entryByTitle[category.title] = entry;
    });

    if (domainMode) {
      DOMAIN_DATA.forEach(function (domain, domainIndex) {
        var entries = domain.categories
          .map(function (title) { return entryByTitle[title]; })
          .filter(Boolean);
        domainsGrid.appendChild(buildDomainCard(domain, entries, domainIndex));
      });
      if (domainsTotalEl) {
        var fieldsWord = (window.ContentI18n && window.ContentI18n.countWord("fields", null)) || "fields";
        var categoriesWord = (window.ContentI18n && window.ContentI18n.countWord("categories", null)) || "categories";
        domainsTotalEl.textContent = DOMAIN_DATA.length + " " + fieldsWord + " · " + allCategoryEntries.length + " " + categoriesWord;
      }

      // Give the initial load an explicit history state so the browser's
      // own Back button can step back through field → category → tool
      // instead of leaving guide.html entirely (nothing was pushed yet).
      history.replaceState({ view: "home" }, "");

      // Arrived from a Bookmarks link like guide.html#cat-video-creation —
      // open the field that category lives in, then open and scroll to it.
      if (location.hash && location.hash.indexOf("#cat-") === 0) {
        var targetSlug = location.hash.slice(5);
        var matchEntry = allCategoryEntries.filter(function (e) { return e.slug === targetSlug; })[0];
        var ownerDomain = matchEntry && DOMAIN_DATA.filter(function (d) {
          return d.categories.indexOf(matchEntry.title) !== -1;
        })[0];
        if (matchEntry && ownerDomain) {
          openDomain(ownerDomain);
          openCategory(matchEntry);
        }
      }
      return;
    }

    // Fallback (no field data/markup present): behave like the old flat guide.
    allCategoryEntries.forEach(function (entry) { grid.appendChild(entry.box); });
    catEntries = allCategoryEntries.slice();
    defaultOrder = catEntries.slice();
    var totalEl = document.getElementById("categories-total");
    if (totalEl) totalEl.textContent = CATEGORY_DATA.length + " categories";

    if (location.hash && location.hash.indexOf("#cat-") === 0) {
      var flatTargetSlug = location.hash.slice(5);
      var flatMatch = catEntries.filter(function (e) { return e.slug === flatTargetSlug; })[0];
      if (flatMatch) {
        window.setTimeout(function () {
          flatMatch.box.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 150);
      }
    }
  }

  init();
})();

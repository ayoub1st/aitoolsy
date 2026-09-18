/* Applies CONTENT_TRANSLATIONS (see content-translations.js) on top of the
   English content authored in data.js/domains.js/blog-data.js/faq-data.js/
   prompts.js. Tool names and links are never translated. Falls back to
   English (returns null/undefined) whenever a language isn't "en" but no
   translation is available for that exact item. */
(function () {
  "use strict";

  var BOILERPLATE = {
    ar: "استكشف أفضل الأدوات في هذه المجموعة، قارن بين نقاط قوتها، واختر ما يناسب سير عملك.",
    es: "Explora las herramientas más útiles de esta colección, compara sus puntos fuertes y abre la que mejor se adapte a tu flujo de trabajo.",
    de: "Entdecke die nützlichsten Tools dieser Sammlung, vergleiche ihre Stärken und öffne das, das am besten zu deinem Workflow passt.",
    fr: "Découvrez les outils les plus utiles de cette collection, comparez leurs points forts, et ouvrez celui qui correspond à votre flux de travail."
  };
  var NOT_RATED = { ar: "غير مقيَّم", es: "Sin calificar", de: "Nicht bewertet", fr: "Non noté" };
  var COUNT_WORDS = {
    ar: { field: "مجال", fields: "مجالات", category: "فئة", categories: "فئة", tool: "أداة", tools: "أدوات" },
    es: { field: "campo", fields: "campos", category: "categoría", categories: "categorías", tool: "herramienta", tools: "herramientas" },
    de: { field: "Bereich", fields: "Bereiche", category: "Kategorie", categories: "Kategorien", tool: "Tool", tools: "Tools" },
    fr: { field: "domaine", fields: "domaines", category: "catégorie", categories: "catégories", tool: "outil", tools: "outils" }
  };
  var SEARCH_RESULTS_LABEL = {
    ar: ["نتائج البحث", "الفئات المطابقة في كل المجالات."],
    es: ["Resultados de búsqueda", "Categorías que coinciden en todos los campos."],
    de: ["Suchergebnisse", "Übereinstimmende Kategorien in allen Bereichen."],
    fr: ["Résultats de recherche", "Catégories correspondantes dans tous les domaines."]
  };

  function currentLang() {
    try { return localStorage.getItem("aitoolsy_lang") || "en"; } catch (e) { return "en"; }
  }

  function dict() {
    if (typeof CONTENT_TRANSLATIONS === "undefined") return null;
    var lang = currentLang();
    if (lang === "en") return null;
    return CONTENT_TRANSLATIONS[lang] || null;
  }

  function category(categoryIndex) {
    var d = dict();
    return (d && d.categories[categoryIndex]) || null;
  }

  function categoryTitle(categoryIndex, fallback) {
    var c = category(categoryIndex);
    return (c && c.title) || fallback;
  }

  function categoryDesc(categoryIndex, fallback) {
    var lang = currentLang();
    var c = category(categoryIndex);
    if (c && BOILERPLATE[lang]) return c.title + ". " + BOILERPLATE[lang];
    return fallback;
  }

  function tool(categoryIndex, toolIndex) {
    var c = category(categoryIndex);
    return (c && c.tools[toolIndex]) || null;
  }

  function domain(key) {
    var d = dict();
    return (d && d.domains[key]) || null;
  }

  function faqItem(index) {
    var d = dict();
    return (d && d.faq[index]) || null;
  }

  function blogItem(index) {
    var d = dict();
    return (d && d.blog[index]) || null;
  }

  function aboutContent() {
    var d = dict();
    return (d && d.about) || null;
  }

  function promptItem(index) {
    var d = dict();
    return (d && d.prompts[index]) || null;
  }

  function notRatedLabel(fallback) {
    return NOT_RATED[currentLang()] || fallback;
  }

  function countWord(key, fallback) {
    var words = COUNT_WORDS[currentLang()];
    return (words && words[key]) || fallback;
  }

  function searchResultsLabel() {
    return SEARCH_RESULTS_LABEL[currentLang()] || null;
  }

  window.ContentI18n = {
    currentLang: currentLang,
    category: category,
    categoryTitle: categoryTitle,
    categoryDesc: categoryDesc,
    tool: tool,
    domain: domain,
    faqItem: faqItem,
    blogItem: blogItem,
    about: aboutContent,
    promptItem: promptItem,
    notRatedLabel: notRatedLabel,
    countWord: countWord,
    searchResultsLabel: searchResultsLabel
  };
})();

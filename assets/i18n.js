/* Lightweight interface translations.
   Scope (disclosed to the site owner): this covers the shared chrome —
   navigation labels, the header title, the search placeholder, and the
   hero welcome page. The 200+ tool names/descriptions, blog articles, FAQ
   answers, and About page are authored once in English; translating that
   much long-form content into 4 more languages accurately is a separate,
   much larger content-authoring effort intentionally left for later rather
   than machine-translated here and presented as if it were reviewed. */
(function () {
  "use strict";

  var translations = {
    en: {
      "chrome.title": "Your Space Toolkit Guide",
      "nav.home": "Home",
      "nav.blog": "Blog",
      "nav.bookmarks": "Bookmarks",
      "nav.faq": "FAQ / Help Center",
      "nav.faq.short": "FAQ",
      "nav.games": "Games",
      "nav.languages": "Languages",
      "nav.about": "About Us",
      "nav.support": "Support",
      "search.placeholder": "Find what you need",
      "landing.welcome.eyebrow": "Welcome to",
      "landing.tagline": "One platform. Endless tools.",
      "landing.welcome.subtitle": "Discover, compare, and choose from 200+ the best AI tools across all categories. Your space. Your toolkit. Your productivity.",
      "landing.getstarted": "Get Started"
    },
    fr: {
      "chrome.title": "Votre guide d'outils",
      "nav.home": "Accueil",
      "nav.blog": "Blog",
      "nav.bookmarks": "Favoris",
      "nav.faq": "FAQ / Centre d'aide",
      "nav.faq.short": "FAQ",
      "nav.games": "Jeux",
      "nav.languages": "Langues",
      "nav.about": "À propos de nous",
      "nav.support": "Assistance",
      "search.placeholder": "Trouvez ce dont vous avez besoin",
      "landing.welcome.eyebrow": "Bienvenue chez",
      "landing.tagline": "Une plateforme. Des outils sans fin.",
      "landing.welcome.subtitle": "Découvrez, comparez et choisissez parmi plus de 200 des meilleurs outils IA, toutes catégories confondues. Votre espace. Votre boîte à outils. Votre productivité.",
      "landing.getstarted": "Commencer"
    },
    ar: {
      "chrome.title": "دليلك الشامل للأدوات",
      "nav.home": "الرئيسية",
      "nav.blog": "المدونة",
      "nav.bookmarks": "المحفوظات",
      "nav.faq": "الأسئلة الشائعة / مركز المساعدة",
      "nav.faq.short": "الأسئلة الشائعة",
      "nav.games": "الألعاب",
      "nav.languages": "اللغات",
      "nav.about": "من نحن",
      "nav.support": "الدعم",
      "search.placeholder": "ابحث عمّا تحتاجه",
      "landing.welcome.eyebrow": "مرحبًا بك في",
      "landing.tagline": "منصة واحدة. أدوات لا تُحصى.",
      "landing.welcome.subtitle": "اكتشف وقارن واختر من بين أكثر من 200 أداة ذكاء اصطناعي في جميع التصنيفات. مساحتك. أدواتك. إنتاجيتك.",
      "landing.getstarted": "ابدأ الآن"
    },
    de: {
      "chrome.title": "Ihr Werkzeug-Leitfaden",
      "nav.home": "Startseite",
      "nav.blog": "Blog",
      "nav.bookmarks": "Lesezeichen",
      "nav.faq": "FAQ / Hilfe-Center",
      "nav.faq.short": "FAQ",
      "nav.games": "Spiele",
      "nav.languages": "Sprachen",
      "nav.about": "Über uns",
      "nav.support": "Support",
      "search.placeholder": "Finden Sie, was Sie brauchen",
      "landing.welcome.eyebrow": "Willkommen bei",
      "landing.tagline": "Eine Plattform. Endlose Werkzeuge.",
      "landing.welcome.subtitle": "Entdecken, vergleichen und wählen Sie aus über 200 der besten KI-Tools in allen Kategorien. Ihr Bereich. Ihr Werkzeugkasten. Ihre Produktivität.",
      "landing.getstarted": "Loslegen"
    },
    es: {
      "chrome.title": "Tu guía de herramientas",
      "nav.home": "Inicio",
      "nav.blog": "Blog",
      "nav.bookmarks": "Guardados",
      "nav.faq": "Preguntas frecuentes / Ayuda",
      "nav.faq.short": "Preguntas",
      "nav.games": "Juegos",
      "nav.languages": "Idiomas",
      "nav.about": "Sobre nosotros",
      "nav.support": "Soporte",
      "search.placeholder": "Encuentra lo que necesitas",
      "landing.welcome.eyebrow": "Bienvenido a",
      "landing.tagline": "Una plataforma. Herramientas sin fin.",
      "landing.welcome.subtitle": "Descubre, compara y elige entre más de 200 de las mejores herramientas de IA en todas las categorías. Tu espacio. Tu caja de herramientas. Tu productividad.",
      "landing.getstarted": "Comenzar"
    }
  };

  function applyTranslations(lang) {
    var dict = translations[lang] || translations.en;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.placeholder = dict[key];
    });

    // The header title is a designed graphic (icons + hand-drawn pen-tool
    // accents) rather than plain text, translated into a matching image
    // per language.
    var titleBanners = {
      en: "assets/media/title-banner.png",
      fr: "assets/media/title-banner-fr.png",
      ar: "assets/media/title-banner-ar.png",
      de: "assets/media/title-banner-de.png",
      es: "assets/media/title-banner-es.png"
    };
    var titleImg = document.getElementById("app-title-img");
    if (titleImg && titleBanners[lang]) {
      titleImg.src = titleBanners[lang];
    }

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }

  window.AiToolsyI18n = {
    translations: translations,
    applyTranslations: applyTranslations
  };
})();

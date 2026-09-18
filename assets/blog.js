(function () {
  "use strict";

  var grid = document.getElementById("blog-grid");
  var overlay = document.getElementById("article-overlay");
  var closeBtn = document.getElementById("article-close");
  var tagEl = document.getElementById("article-tag");
  var titleEl = document.getElementById("article-title");
  var bodyEl = document.getElementById("article-body");

  function openArticle(article, index) {
    var tr = window.ContentI18n && window.ContentI18n.blogItem(index);
    tagEl.textContent = article.tag;
    titleEl.textContent = (tr && tr.title) || article.title;
    bodyEl.innerHTML = "";
    var body = (tr && tr.body) || article.body;
    body.forEach(function (para) {
      var p = document.createElement("p");
      p.textContent = para;
      bodyEl.appendChild(p);
    });
    overlay.hidden = false;
    closeBtn.focus();
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  function closeArticle() {
    overlay.hidden = true;
  }

  closeBtn.addEventListener("click", closeArticle);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeArticle();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.hidden) closeArticle();
  });

  function buildCard(article, index) {
    var tr = window.ContentI18n && window.ContentI18n.blogItem(index);
    var card = document.createElement("div");
    card.className = "blog-card";

    var thumb = document.createElement("div");
    thumb.className = "blog-thumb";
    thumb.style.background =
      "linear-gradient(135deg, " + article.gradient[0] + ", " + article.gradient[1] + ")";
    if (article.icon) {
      // Each article ships its own small line-icon illustrating its topic
      // (authored in blog-data.js, not user input), rendered over the
      // gradient in place of a plain color block.
      var iconWrap = document.createElement("div");
      iconWrap.className = "blog-thumb-icon";
      iconWrap.innerHTML = article.icon;
      thumb.appendChild(iconWrap);
    } else {
      thumb.textContent = article.tag;
    }

    var body = document.createElement("div");
    body.className = "blog-card-body";

    var tag = document.createElement("span");
    tag.className = "blog-tag";
    tag.textContent = article.tag;

    var titleBtn = document.createElement("button");
    titleBtn.type = "button";
    titleBtn.className = "blog-title-btn";
    titleBtn.textContent = (tr && tr.title) || article.title;
    titleBtn.addEventListener("click", function () {
      openArticle(article, index);
    });

    var teaser = document.createElement("p");
    teaser.className = "blog-teaser";
    teaser.textContent = (tr && tr.teaser) || article.teaser;

    var readMore = document.createElement("span");
    readMore.className = "blog-readmore";
    readMore.textContent = {
      ar: "اضغط على العنوان لقراءة المقال كاملًا",
      es: "Haz clic en el título para leer el artículo completo",
      de: "Klicke auf den Titel, um den ganzen Artikel zu lesen",
      fr: "Cliquez sur le titre pour lire l'article complet"
    }[window.ContentI18n && window.ContentI18n.currentLang()] || "Click the title to read the full article";

    body.appendChild(tag);
    body.appendChild(titleBtn);
    body.appendChild(teaser);
    body.appendChild(readMore);

    card.appendChild(thumb);
    card.appendChild(body);
    return card;
  }

  function init() {
    if (!grid || typeof BLOG_ARTICLES === "undefined") return;
    BLOG_ARTICLES.forEach(function (article, index) {
      grid.appendChild(buildCard(article, index));
    });
  }

  init();
})();

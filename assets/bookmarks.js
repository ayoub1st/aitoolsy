(function () {
  "use strict";

  var grid = document.getElementById("bookmarks-grid");
  var emptyMsg = document.getElementById("bookmarks-empty");
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

  function removeBookmark(slug) {
    var list = getBookmarks().filter(function (s) { return s !== slug; });
    setBookmarks(list);
  }

  function buildCard(category, slug) {
    var box = document.createElement("div");
    box.className = "category-box";

    var removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "bookmark-btn saved";
    removeBtn.setAttribute("aria-label", "Remove bookmark");
    removeBtn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4.5L5 21V4a1 1 0 0 1 1-1z"/></svg>';
    removeBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      removeBookmark(slug);
      box.remove();
      if (!grid.children.length) toggleEmpty(true);
    });

    var link = document.createElement("a");
    link.className = "category-header";
    link.href = "guide.html#cat-" + slug;
    link.style.textDecoration = "none";
    link.style.cursor = "pointer";

    var icon = document.createElement("span");
    icon.className = "category-icon";
    icon.textContent = category.title.trim().charAt(0).toUpperCase();

    var label = document.createElement("span");
    label.className = "category-name";
    label.textContent = category.title;

    link.appendChild(icon);
    link.appendChild(label);

    box.appendChild(removeBtn);
    box.appendChild(link);
    return box;
  }

  function toggleEmpty(isEmpty) {
    if (emptyMsg) emptyMsg.hidden = !isEmpty;
    if (grid) grid.hidden = isEmpty;
  }

  function init() {
    if (!grid || typeof CATEGORY_DATA === "undefined") return;

    var saved = getBookmarks();
    if (!saved.length) {
      toggleEmpty(true);
      return;
    }

    var found = 0;
    CATEGORY_DATA.forEach(function (category) {
      var slug = slugify(category.title);
      if (saved.indexOf(slug) !== -1) {
        grid.appendChild(buildCard(category, slug));
        found++;
      }
    });

    toggleEmpty(found === 0);
  }

  init();
})();

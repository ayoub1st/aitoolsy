(function () {
  "use strict";
  if (!window.ContentI18n) return;
  var about = window.ContentI18n.about();
  if (!about) return; // English (or no translation available) — leave the authored copy as-is

  var titleEl = document.querySelector(".page-title");
  var leadEl = document.querySelector(".page-lead");
  if (titleEl && about.page_title) titleEl.textContent = about.page_title;
  if (leadEl && about.page_lead) leadEl.textContent = about.page_lead;

  var blockEls = document.querySelectorAll(".about-article > *");
  if (about.blocks && blockEls.length === about.blocks.length) {
    blockEls.forEach(function (el, i) {
      el.textContent = about.blocks[i].text;
    });
  }
})();

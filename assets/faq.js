(function () {
  "use strict";

  var list = document.getElementById("faq-list");
  if (!list || typeof FAQ_ITEMS === "undefined") return;

  var iconMap = [
    { test: /rank|rating|score/i, svg: '<path d="M12 2 14.9 8.6 22 9.3l-5.3 4.8L18.2 21 12 17.3 5.8 21l1.5-6.9L2 9.3l7.1-.7Z"/>' },
    { test: /submit|add.*tool|suggest/i, svg: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>' },
    { test: /often|updat|current/i, svg: '<path d="M21 12a9 9 0 1 1-3-6.7"/><polyline points="21 3 21 9 15 9"/>' },
    { test: /real|paid|review/i, svg: '<path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/>' },
    { test: /privacy|data|track/i, svg: '<path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6Z"/>' },
    { test: /mobile app|app version/i, svg: '<rect x="7" y="2" width="10" height="20" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/>' },
    { test: /free|cost|pay|commission/i, svg: '<circle cx="12" cy="12" r="9"/><path d="M9.5 15c.5 1 1.5 1.5 2.5 1.5 1.7 0 3-1 3-2.3 0-3.2-5.5-1.5-5.5-4.7 0-1.3 1.3-2.3 3-2.3 1 0 2 .5 2.5 1.5M12 6.5v11"/>' },
    { test: /error|outdated|report/i, svg: '<path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 3.9 2.5 17a1.8 1.8 0 0 0 1.6 2.7h15.8a1.8 1.8 0 0 0 1.6-2.7L13.7 3.9a1.8 1.8 0 0 0-3.4 0Z"/>' },
    { test: /test.*tool|verify/i, svg: '<path d="M9 12l2 2 4-4"/><rect x="3" y="4" width="18" height="16" rx="2"/>' },
    { test: /language/i, svg: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a13 13 0 0 1 0 18 13 13 0 0 1 0-18Z"/>' }
  ];
  var fallbackSvg = '<path d="M9.1 9a3 3 0 1 1 4.9 2.3c-.9.7-1.5 1.3-1.5 2.2"/><line x1="12" y1="17" x2="12.01" y2="17"/>';

  function iconFor(question) {
    for (var i = 0; i < iconMap.length; i++) {
      if (iconMap[i].test.test(question)) return iconMap[i].svg;
    }
    return fallbackSvg;
  }

  FAQ_ITEMS.forEach(function (item, index) {
    var tr = window.ContentI18n && window.ContentI18n.faqItem(index);
    var qText_ = (tr && tr.q) || item.q;
    var aText_ = (tr && tr.a) || item.a;

    var wrap = document.createElement("div");
    wrap.className = "faq-item";

    var q = document.createElement("button");
    q.type = "button";
    q.className = "faq-question";

    var icon = document.createElement("span");
    icon.className = "faq-icon";
    icon.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      iconFor(item.q) + "</svg>";

    var qText = document.createElement("span");
    qText.className = "faq-question-text";
    qText.textContent = qText_;

    var toggle = document.createElement("span");
    toggle.className = "faq-toggle";
    toggle.setAttribute("aria-hidden", "true");

    q.appendChild(icon);
    q.appendChild(qText);
    q.appendChild(toggle);

    var answer = document.createElement("div");
    answer.className = "faq-answer";
    var inner = document.createElement("div");
    inner.className = "faq-answer-inner";
    inner.textContent = aText_;
    answer.appendChild(inner);

    q.addEventListener("click", function () {
      var isOpen = wrap.classList.toggle("open");
      answer.style.maxHeight = isOpen ? answer.scrollHeight + "px" : "0px";
    });

    wrap.appendChild(q);
    wrap.appendChild(answer);
    list.appendChild(wrap);
  });
})();

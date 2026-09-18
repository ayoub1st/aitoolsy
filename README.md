# AI Toolsy — Static Website

A free, multi-page static site: a cinematic 4-slide welcome intro, a
searchable directory of 68 categories / 200+ AI tools grouped into 9
browsable fields, a blog, an FAQ, an About page, and a Bookmarks page —
all built with plain HTML/CSS/JS. No backend, no database, no paid
hosting.

## Pages

```
index.html        → Welcome intro (3 videos + final image, logo, Get Started)
guide.html          → The tools directory: 9 fields (3-col grid) → tap one to see its categories (4-col grid, own search/sort, clean cards, bookmarks; clicking a tool opens its detail page)
blog.html            → 15 original articles (click a title to read the full piece)
faq.html               → FAQ / Help Center accordion
about.html               → About Us story
bookmarks.html             → Categories you've saved (stored on your device)
```

## Shared chrome (guide/blog/faq/about/bookmarks)

Every inner page shares the same header and slide-in menu:
- Logo avatar (top-left) → links back to the guide
- Center title "Your Space Toolkit Guide" in a brushed-metal gradient,
  with a small blue star that coils forward and back around it in a
  loop (pure CSS `offset-path` animation, no image/video)
- Circular menu button (top-right, brand blue) opens a right-hand
  drawer with: Home, Blog, Bookmarks, FAQ/Help Center, Languages
  (expandable), and — pinned at the bottom — About Us and Support
  (expandable, contact placeholders)

## Language switcher — what's real vs. what's scoped for later

Picking a language in the drawer saves your choice and returns you to
the welcome intro, and from then on every page's shared chrome
(navigation labels, header title) and the 4 welcome slides render in
that language. This works fully for **English, French, Arabic, German,
and Spanish**.

**What's intentionally not translated yet:** the 200+ tool
descriptions, the 15 blog articles, the FAQ answers, and the About
page are written once in English. Machine-translating that much
long-form content and presenting it as reviewed would be worse than
leaving it in English with this note — it's a separate, larger task
for later rather than something quietly faked here.

## Sort options on the guide page — an honesty note

"Alphabetical" and "Top rated fields" are both fully real — alphabetical
sorts by title, and top-rated genuinely averages each category's tool
ratings. "Most used" and "Most searched globally" have no analytics
backend behind a static site to draw from, so both are approximated
from the one real signal available (tools per category) rather than
invented numbers. Wiring up real usage/search analytics later (e.g.
via a hosted analytics service) would let these become genuine.

## Bookmarks

Tapping the bookmark icon on any category card in the guide saves it
to `localStorage` on that device — nothing is sent to a server. The
Bookmarks page reads that same local list and links back into the
guide, auto-opening and scrolling to the saved category.

## Refresh behavior

Reloading the browser (F5 / pull-to-refresh) on any inner page sends
you back to `index.html`, the welcome intro — by design, per the
site's request. This is detected via the Navigation Timing API and
implemented in `assets/nav.js`.

## Files

```
assets/nav.css / nav.js       → shared topbar + drawer (all inner pages)
assets/style.css                → guide page (search, sort, cards, modal)
assets/pages.css                 → blog / FAQ / about / bookmarks styles
assets/script.js                  → guide fields/grid, bookmarks, sort, search
assets/domains.js                  → groups the 68 categories into 9 browsable fields
assets/data.js                     → all 68 categories / 230+ tools
assets/blog-data.js / blog.js       → blog articles + card/reader logic
assets/faq-data.js / faq.js          → FAQ content + accordion
assets/bookmarks.js                   → renders saved categories
assets/i18n.js                         → EN/FR/AR/DE/ES chrome translations
assets/landing.css / landing.js         → welcome intro slideshow
assets/media/                            → videos, welcome image, logo mark
```

## Support section — placeholder contact info

The Support submenu currently shows "to be added" / "coming soon" for
email and social links, exactly as placeholders until real contact
details are provided — then it's a one-line edit per page (or, better,
move that block into a shared include) to fill them in.

## How to publish it for free on GitHub Pages

1. Create a new repository on GitHub.
2. Upload every file here, keeping the same folder structure
   (all `.html` files at the root, `assets/` — including `assets/media/`
   — alongside them).
3. Repository → **Settings → Pages** → Source: `Deploy from a branch`,
   branch `main`, folder `/ (root)` → **Save**.
4. You'll get a free URL like `https://your-username.github.io/repo/`.

No domain purchase or payment required at any step.

## Testing locally before uploading

Opening `index.html` by double-clicking can block local videos/scripts
in some browsers. The reliable way to test locally:

```bash
cd site
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Editing content later

- **Tools:** edit `assets/data.js`.
- **Fields (the 9 top-level groups on the guide page):** edit
  `assets/domains.js`. Every category title in `assets/data.js` must
  appear in exactly one field's `categories` array — add new
  categories there too, or they simply won't be reachable from the
  guide page.
- **Blog articles:** edit `assets/blog-data.js` (each entry is `slug`,
  `tag`, `title`, `teaser`, `gradient`, `body` — an array of paragraphs).
- **FAQ:** edit `assets/faq-data.js`.
- **About page text:** edit the `about-article` block directly in
  `about.html`.
- **Support contacts:** replace the placeholder rows inside the
  `#support-list` block — it appears identically near the top of every
  `.html` file's drawer markup.


## Tool detail pages

Each tool now opens `tool.html` instead of a modal. The detail page shows the tool description, quick facts, an official-site button, and a comparison table containing the other tools in the same category. ChatGPT detail pages also include a reusable library of 33 slash-style prompt shortcuts.

## Welcome featured tools

The final welcome slide says “Welcome to” and includes a centered animated rail of featured tool logos. Cards rotate individually and the rail continuously cycles through the featured tools rather than travelling from screen edge to screen edge.

## Privacy-sensitive tools

Some added discovery/security tools can expose or correlate personal or breach-related information. Their detail cards include contextual notes reminding visitors to use them only for lawful, authorized, or consent-based purposes.

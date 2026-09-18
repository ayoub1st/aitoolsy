/* Groups the flat CATEGORY_DATA list into top-level browsing domains.
   Purely a presentation layer on top of script.js — CATEGORY_DATA itself
   (order, indices, tool data) is untouched, so tool.html links and the
   bookmarks page keep working exactly as before. */
var DOMAIN_DATA = [
  {
    key: "creative-content",
    icon: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.06 11.9 17.13 3.84a2.85 2.85 0 1 1 4.03 4.03L13.1 15.94\"/><path d=\"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02Z\"/></svg>",
    title: "Creative & Content",
    desc: "Generate and edit images, video, writing and design work.",
    categories: [
      "Image Creation",
      "Video Creation",
      "Text-to-Video",
      "Content Writing",
      "Content Creation (Short-form)",
      "Design",
      "Text-to-Speech",
      "Text-to-Manga / Comics",
      "3D Games & Virtual Worlds"
    ]
  },
  {
    key: "productivity-automation",
    icon: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"7.5\" height=\"9.5\" rx=\"1.6\"/><rect x=\"13.5\" y=\"3\" width=\"7.5\" height=\"5.5\" rx=\"1.6\"/><rect x=\"13.5\" y=\"12\" width=\"7.5\" height=\"9\" rx=\"1.6\"/><rect x=\"3\" y=\"16\" width=\"7.5\" height=\"5\" rx=\"1.6\"/></svg>",
    title: "Productivity, Management & Digital Operations",
    desc: "Plan, build, automate and analyze your daily work.",
    categories: [
      "Productivity",
      "AI Agents",
      "Automation",
      "Programming",
      "Creating Complete Websites",
      "Excel & Spreadsheet Analysis",
      "Data Analysis",
      "Meetings & Gatherings",
      "Business",
      "BPMN & Process Modeling",
      "Logistics & Supply Chain"
    ]
  },
  {
    key: "research-education",
    icon: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6.7c-1.8-1.4-4.1-2.2-6.6-2.2A2.4 2.4 0 0 0 3 6.9v9.8a2.4 2.4 0 0 1 2.4-2.4c2.5 0 4.8.8 6.6 2.2\"/><path d=\"M12 6.7c1.8-1.4 4.1-2.2 6.6-2.2A2.4 2.4 0 0 1 21 6.9v9.8a2.4 2.4 0 0 0-2.4-2.4c-2.5 0-4.8.8-6.6 2.2\"/><line x1=\"12\" y1=\"6.7\" x2=\"12\" y2=\"16.5\"/></svg>",
    title: "Research & Education",
    desc: "Search, study, research and learn with AI.",
    categories: [
      "Search Engines & AI Search",
      "Research (Knowledge Research)",
      "Deep Scientific Research",
      "Studying",
      "Academic Writing & Thesis (PFE)",
      "Translation",
      "Language Learning",
      "History, Geography & Plate Tectonics",
      "Space, Galaxies & Astronomy"
    ]
  },
  {
    key: "career-business-finance",
    icon: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"7.3\" width=\"18\" height=\"12.2\" rx=\"2\"/><path d=\"M8 7.3V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.3\"/><path d=\"M3 12.6h18\"/><line x1=\"10.5\" y1=\"12.1\" x2=\"13.5\" y2=\"12.1\"/></svg>",
    title: "Career, Business & Finance",
    desc: "Job hunting, freelancing, marketing and money.",
    categories: [
      "CV / Resume Creation",
      "Finding a Job & Finding Employees",
      "Online Work & Business Ideas",
      "Marketing & E-commerce",
      "Finance & Accounting",
      "Legal Consulting",
      "Product Comparison (Price / Ingredients / Nutrition)",
      "Finding the Value of Things"
    ]
  },
  {
    key: "travel-transport",
    icon: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"m14.8 9.2-1.7 5.4-5.4 1.7 1.7-5.4 5.4-1.7Z\"/></svg>",
    title: "Travel & Transport",
    desc: "Plan trips and track flights, trains, ships and conditions.",
    categories: [
      "Travel Planning & Recommendations",
      "Maps & Places Off the Beaten Path",
      "Flight & Aircraft Tracking",
      "Train Tracking",
      "Tracking Ships & Cargo Vessels",
      "Transportation in Europe, America & Canada",
      "Sea Conditions",
      "Currencies, Conversion & Prices",
      "Emergency Numbers by Country",
      "Restaurant & Hotel Ratings"
    ]
  },
  {
    key: "lifestyle-wellbeing",
    icon: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 20a7 7 0 0 1-7-7c0-5 4-9.5 9-11 1.5 4.5 5 7 5 11a7 7 0 0 1-7 7Z\"/><path d=\"M11 20c0-5 2-9.3 6-12.3\"/></svg>",
    title: "Lifestyle & Wellbeing",
    desc: "Food, fitness, style, health and everyday organization.",
    categories: [
      "Cooking & Nutrition",
      "Fitness / Bodybuilding",
      "Fashion, Clothing & Colors",
      "Makeup, Skincare & Hair Care",
      "Medical, Veterinary & Child-Care Questions",
      "Crafts & Manual Trades",
      "Life Organization",
      "Online Shopping"
    ]
  },
  {
    key: "entertainment-sports",
    icon: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"4.5\"/><path d=\"M10 8.3v7.4l6.2-3.7Z\" fill=\"currentColor\" stroke=\"none\"/></svg>",
    title: "Entertainment & Sports",
    desc: "Movies, music, sports and finding what you're looking for.",
    categories: [
      "Watching Movies, Series & Shows",
      "Listening to Music",
      "Identifying a Song from Audio",
      "Sports: Football, Tennis & Basketball",
      "Image Search"
    ]
  },
  {
    key: "technology-vehicles",
    icon: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14.7 6.3a4 4 0 0 0-5.4 5.1L3 18l3 3 6.6-6.3a4 4 0 0 0 5.1-5.4l-2.6 2.6-2.1-.6-.6-2.1 2.6-2.6Z\"/></svg>",
    title: "Practical Engineering & DIY",
    desc: "Fix computer problems and understand cars and construction.",
    categories: [
      "Fixing Computer Problems Yourself",
      "Knowing Everything About a Car",
      "Construction, Engineering & Home Architecture"
    ]
  },
  {
    key: "digital-intelligence",
    icon: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"10.3\" cy=\"10.3\" r=\"6.3\"/><line x1=\"15.1\" y1=\"15.1\" x2=\"20.2\" y2=\"20.2\"/><path d=\"M10.3 7.5v2.8l2 2\"/></svg>",
    title: "Digital Intelligence",
    desc: "Look up emails, phone numbers, people, IPs and data leaks.",
    categories: [
      "Email Intelligence",
      "Phone Number Intelligence",
      "People & Social Search",
      "IP / Geolocation",
      "Breaches & Data Exposure"
    ]
  }
];

const CATEGORY_DATA = [
  {
    "title": "Video Creation",
    "tools": [
      {
        "name": "Kling AI",
        "desc": "Converts text or images into realistic videos with natural movement and facial expressions.",
        "price": "Limited free version; paid from ~$10/mo",
        "rating": 8,
        "best": "Short cinematic videos",
        "link": "https://klingai.com",
        "keyPrompt": {
          "core": "Create a short cinematic videos for me using Kling AI. Concept: [IDEA]. Duration: [DURATION]. Aspect ratio: [9:16 / 16:9 / 1:1]. Define the subject, setting, action, camera movement, lens feel, lighting, color mood, pacing, and visual continuity. Keep the result realistic and production-ready.",
          "refine": "Improve this Kling AI video prompt: [PASTE PROMPT]. Make the motion natural, preserve character/object consistency, strengthen the camera direction, lighting, composition, and storytelling, and remove ambiguity. Return one optimized final prompt."
        }
      },
      {
        "name": "Runway Gen-4",
        "desc": "Professional video generation and editing with Green Screen and camera tracking.",
        "price": "Limited trial; paid from ~$12/mo",
        "rating": 10,
        "best": "Professional content creators & advertisers",
        "link": "https://runwayml.com",
        "keyPrompt": {
          "core": "Create a professional content creators & advertisers for me using Runway Gen-4. Concept: [IDEA]. Duration: [DURATION]. Aspect ratio: [9:16 / 16:9 / 1:1]. Define the subject, setting, action, camera movement, lens feel, lighting, color mood, pacing, and visual continuity. Keep the result realistic and production-ready.",
          "refine": "Improve this Runway Gen-4 video prompt: [PASTE PROMPT]. Make the motion natural, preserve character/object consistency, strengthen the camera direction, lighting, composition, and storytelling, and remove ambiguity. Return one optimized final prompt."
        }
      },
      {
        "name": "Adobe Firefly Video",
        "desc": "Create and edit videos with AI inside the Adobe ecosystem.",
        "price": "Depends on Adobe plans/credits",
        "rating": null,
        "best": "Existing Photoshop/Premiere users",
        "link": "https://firefly.adobe.com",
        "keyPrompt": {
          "core": "Create a existing photoshop/premiere users for me using Adobe Firefly Video. Concept: [IDEA]. Duration: [DURATION]. Aspect ratio: [9:16 / 16:9 / 1:1]. Define the subject, setting, action, camera movement, lens feel, lighting, color mood, pacing, and visual continuity. Keep the result realistic and production-ready.",
          "refine": "Improve this Adobe Firefly Video video prompt: [PASTE PROMPT]. Make the motion natural, preserve character/object consistency, strengthen the camera direction, lighting, composition, and storytelling, and remove ambiguity. Return one optimized final prompt."
        }
      },
      {
        "name": "Google Flow",
        "desc": "Creates cinematic scenes and videos with a focus on story consistency.",
        "price": "-",
        "rating": null,
        "best": "Stories & cinematic scenes",
        "link": "https://labs.google/flow",
        "keyPrompt": {
          "core": "Create a stories & cinematic scenes for me using Google Flow. Concept: [IDEA]. Duration: [DURATION]. Aspect ratio: [9:16 / 16:9 / 1:1]. Define the subject, setting, action, camera movement, lens feel, lighting, color mood, pacing, and visual continuity. Keep the result realistic and production-ready.",
          "refine": "Improve this Google Flow video prompt: [PASTE PROMPT]. Make the motion natural, preserve character/object consistency, strengthen the camera direction, lighting, composition, and storytelling, and remove ambiguity. Return one optimized final prompt."
        }
      },
      {
        "name": "Pika",
        "desc": "Turns ideas and images into videos and adds creative effects.",
        "price": "Free version + paid plans",
        "rating": null,
        "best": "Beginners & quick effects",
        "link": "https://pika.art",
        "keyPrompt": {
          "core": "Create a beginners & quick effects for me using Pika. Concept: [IDEA]. Duration: [DURATION]. Aspect ratio: [9:16 / 16:9 / 1:1]. Define the subject, setting, action, camera movement, lens feel, lighting, color mood, pacing, and visual continuity. Keep the result realistic and production-ready.",
          "refine": "Improve this Pika video prompt: [PASTE PROMPT]. Make the motion natural, preserve character/object consistency, strengthen the camera direction, lighting, composition, and storytelling, and remove ambiguity. Return one optimized final prompt."
        }
      },
      {
        "name": "Boosted",
        "desc": "Lightricks' AI video editor that turns photos and clips into polished marketing and social videos using templates.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Quick templated marketing videos",
        "link": "https://boosted.lightricks.com"
      },
      {
        "name": "Mixkit",
        "desc": "Free stock video clips, music tracks and sound effects for video projects, no attribution required.",
        "price": "Free",
        "rating": 8,
        "best": "Free stock video & music",
        "link": "https://mixkit.com"
      },
      {
        "name": "Vmake AI",
        "desc": "AI video editing toolkit for enhancing, upscaling and cleaning up raw video footage.",
        "price": "Free + paid",
        "rating": 7,
        "best": "AI video enhancement & cleanup",
        "link": "https://vmake.ai"
      }
    ]
  },
  {
    "title": "Image Creation",
    "tools": [
      {
        "name": "Midjourney",
        "desc": "Creates high-quality artistic and cinematic images.",
        "price": "Basic $10 · Standard $30 · Pro $60 · Mega $120/mo",
        "rating": 10,
        "best": "Art, design, cinematic images",
        "link": "https://www.midjourney.com",
        "keyPrompt": {
          "core": "Create a high-quality image in Midjourney. Subject: [SUBJECT]. Purpose: [PURPOSE]. Composition: [COMPOSITION]. Environment: [SETTING]. Lighting: [LIGHTING]. Mood: [MOOD]. Style: [STYLE]. Aspect ratio: [RATIO]. Include precise details, realistic materials, depth, and a clean professional composition.",
          "refine": "Refine this Midjourney image prompt: [PASTE PROMPT]. Improve subject accuracy, composition, lighting, textures, visual hierarchy, and style consistency. Keep the original concept but make it more precise and visually striking."
        }
      },
      {
        "name": "Ideogram",
        "desc": "Creates images with accurate embedded text, e.g. logos and posters.",
        "price": "Good free version + paid plans",
        "rating": 8,
        "best": "Logos, posters, typography",
        "link": "https://ideogram.ai",
        "keyPrompt": {
          "core": "Create a high-quality image in Ideogram. Subject: [SUBJECT]. Purpose: [PURPOSE]. Composition: [COMPOSITION]. Environment: [SETTING]. Lighting: [LIGHTING]. Mood: [MOOD]. Style: [STYLE]. Aspect ratio: [RATIO]. Include precise details, realistic materials, depth, and a clean professional composition.",
          "refine": "Refine this Ideogram image prompt: [PASTE PROMPT]. Improve subject accuracy, composition, lighting, textures, visual hierarchy, and style consistency. Keep the original concept but make it more precise and visually striking."
        }
      },
      {
        "name": "Adobe Firefly",
        "desc": "Creates and edits images with AI, integrates with Photoshop and Illustrator.",
        "price": "Adobe plans",
        "rating": null,
        "best": "Professional Adobe workflows",
        "link": "https://firefly.adobe.com",
        "keyPrompt": {
          "core": "Create a high-quality image in Adobe Firefly. Subject: [SUBJECT]. Purpose: [PURPOSE]. Composition: [COMPOSITION]. Environment: [SETTING]. Lighting: [LIGHTING]. Mood: [MOOD]. Style: [STYLE]. Aspect ratio: [RATIO]. Include precise details, realistic materials, depth, and a clean professional composition.",
          "refine": "Refine this Adobe Firefly image prompt: [PASTE PROMPT]. Improve subject accuracy, composition, lighting, textures, visual hierarchy, and style consistency. Keep the original concept but make it more precise and visually striking."
        }
      },
      {
        "name": "Upscale.media",
        "desc": "AI image upscaler that enlarges and sharpens photos while preserving detail.",
        "price": "Free + paid",
        "rating": 8,
        "best": "AI photo upscaling",
        "link": "https://upscale.media"
      },
      {
        "name": "Watermark Remover",
        "desc": "AI tool that automatically detects and removes watermarks from photos.",
        "price": "Free + paid",
        "rating": 7,
        "best": "Removing watermarks from images",
        "link": "https://watermarkremover.io"
      },
      {
        "name": "Pebblely",
        "desc": "AI tool that generates professional product photo backgrounds from a single product image.",
        "price": "Free + paid",
        "rating": 8,
        "best": "AI product photo backgrounds",
        "link": "https://pebblely.com"
      },
      {
        "name": "Magnific AI",
        "desc": "AI image upscaler and enhancer that adds fine detail to generated or low-res images.",
        "price": "Paid, free trial",
        "rating": 9,
        "best": "AI image upscaling with detail",
        "link": "https://magnific.ai"
      },
      {
        "name": "Clipdrop",
        "desc": "AI image editing toolkit (by Stability AI) for background removal, upscaling and cleanup.",
        "price": "Free + paid",
        "rating": 8,
        "best": "AI image editing toolkit",
        "link": "https://clipdrop.co"
      },
      {
        "name": "Krea",
        "desc": "Real-time AI image and video generation and editing platform.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Real-time AI image/video generation",
        "link": "https://krea.ai"
      },
      {
        "name": "FLUX.1",
        "desc": "High-quality open-weight AI image generation model known for photorealistic output.",
        "price": "Free + paid (via providers)",
        "rating": 9,
        "best": "Photorealistic AI image generation",
        "link": "https://blackforestlabs.ai"
      },
      {
        "name": "Leonardo AI",
        "desc": "AI image generation platform with fine-tuned models for art, game assets and product visuals.",
        "price": "Free + paid",
        "rating": 8,
        "best": "AI image generation for art & assets",
        "link": "https://leonardo.ai"
      },
      {
        "name": "TinyPNG",
        "desc": "Smart image compression tool that shrinks PNG/JPEG file size with minimal quality loss.",
        "price": "Free + paid",
        "rating": 9,
        "best": "Compressing images without quality loss",
        "link": "https://tinypng.com"
      }
    ]
  },
  {
    "title": "Content Writing",
    "tools": [
      {
        "name": "ChatGPT",
        "desc": "Articles, posts, scripts, messages, ideas, summaries, and rewriting.",
        "price": "Free version + paid subscriptions",
        "rating": 10,
        "best": "General content writing, marketing, study & work",
        "link": "https://chatgpt.com",
        "keyPrompt": {
          "core": "Use ChatGPT to help me with this task: [TASK]. Context: [CONTEXT]. Audience: [AUDIENCE]. Goal: [GOAL]. Produce a clear, structured answer, distinguish verified facts from assumptions, and state uncertainties where relevant. Output format: [FORMAT].",
          "refine": "Act as a rigorous reviewer using ChatGPT. Analyze: [TEXT / QUESTION / DATA]. Identify the strongest evidence, missing information, contradictions, and practical conclusions. Organize the response into findings, evidence, limitations, and recommended next steps."
        }
      },
      {
        "name": "Jasper AI",
        "desc": "Marketing content writing using brand style and identity.",
        "price": "Paid, with a trial",
        "rating": 8,
        "best": "Companies & agencies",
        "link": "https://www.jasper.ai",
        "keyPrompt": {
          "core": "Use Jasper AI to help me with this task: [TASK]. Context: [CONTEXT]. Audience: [AUDIENCE]. Goal: [GOAL]. Produce a clear, structured answer, distinguish verified facts from assumptions, and state uncertainties where relevant. Output format: [FORMAT].",
          "refine": "Act as a rigorous reviewer using Jasper AI. Analyze: [TEXT / QUESTION / DATA]. Identify the strongest evidence, missing information, contradictions, and practical conclusions. Organize the response into findings, evidence, limitations, and recommended next steps."
        }
      },
      {
        "name": "Rytr",
        "desc": "AI writing assistant for generating blog posts, ads, emails and other short-form copy quickly.",
        "price": "Free + paid",
        "rating": 7,
        "best": "Budget AI copywriting",
        "link": "https://rytr.me"
      },
      {
        "name": "Copy.ai",
        "desc": "AI copywriting platform for generating marketing copy, emails and workflows.",
        "price": "Free + paid",
        "rating": 8,
        "best": "AI marketing copywriting",
        "link": "https://copy.ai"
      },
      {
        "name": "Jasper",
        "desc": "AI content platform for teams to generate on-brand marketing copy at scale.",
        "price": "Paid, free trial",
        "rating": 8,
        "best": "Enterprise AI content generation",
        "link": "https://jasper.ai"
      },
      {
        "name": "Writesonic",
        "desc": "AI writing tool for articles, ads and SEO content with built-in optimization features.",
        "price": "Free + paid",
        "rating": 7,
        "best": "AI articles & SEO content",
        "link": "https://writesonic.com"
      },
      {
        "name": "Hemingway Editor",
        "desc": "Writing editor that highlights complex sentences and readability issues to make text clearer.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Improving writing clarity",
        "link": "https://hemingwayapp.com"
      }
    ]
  },
  {
    "title": "CV / Resume Creation",
    "tools": [
      {
        "name": "Kickresume",
        "desc": "Creates CVs and cover letters with AI assistance.",
        "price": "Limited free templates; Premium paid",
        "rating": 8,
        "best": "Professional templates & ATS features",
        "link": "https://www.kickresume.com",
        "keyPrompt": {
          "core": "Use Kickresume to optimize this professional profile for [JOB TITLE]. Here is my current information: [PASTE CV / EXPERIENCE]. Highlight measurable achievements, relevant skills, keywords, and ATS-friendly wording without inventing experience. Return an improved version.",
          "refine": "Using Kickresume, compare this CV/profile against the requirements for [JOB DESCRIPTION]. Create a gap analysis with matched skills, missing keywords, weak sections, and specific improvements. Prioritize the changes that are most likely to improve relevance."
        }
      },
      {
        "name": "Rezi",
        "desc": "Optimizes CVs to work with ATS systems.",
        "price": "Limited free version + Pro",
        "rating": 8,
        "best": "ATS analysis",
        "link": "https://www.rezi.ai",
        "keyPrompt": {
          "core": "Use Rezi to optimize this professional profile for [JOB TITLE]. Here is my current information: [PASTE CV / EXPERIENCE]. Highlight measurable achievements, relevant skills, keywords, and ATS-friendly wording without inventing experience. Return an improved version.",
          "refine": "Using Rezi, compare this CV/profile against the requirements for [JOB DESCRIPTION]. Create a gap analysis with matched skills, missing keywords, weak sections, and specific improvements. Prioritize the changes that are most likely to improve relevance."
        }
      },
      {
        "name": "LinkedIn",
        "desc": "Builds and manages a professional profile, job search, and networking.",
        "price": "Free + paid",
        "rating": null,
        "best": "Professional presence & job connections",
        "link": "https://www.linkedin.com",
        "keyPrompt": {
          "core": "Use LinkedIn to optimize this professional profile for [JOB TITLE]. Here is my current information: [PASTE CV / EXPERIENCE]. Highlight measurable achievements, relevant skills, keywords, and ATS-friendly wording without inventing experience. Return an improved version.",
          "refine": "Using LinkedIn, compare this CV/profile against the requirements for [JOB DESCRIPTION]. Create a gap analysis with matched skills, missing keywords, weak sections, and specific improvements. Prioritize the changes that are most likely to improve relevance."
        }
      }
    ]
  },
  {
    "title": "Search Engines & AI Search",
    "tools": [
      {
        "name": "ChatGPT",
        "desc": "Searches, analyzes results, summarizes, and compares sources.",
        "price": "Free + paid",
        "rating": null,
        "best": "Complex research & analysis",
        "link": "https://chatgpt.com"
      },
      {
        "name": "Perplexity",
        "desc": "Research with direct sources and links.",
        "price": "Free + Pro",
        "rating": 10,
        "best": "Research with clear sources",
        "link": "https://www.perplexity.ai",
        "keyPrompt": {
          "core": "Research [QUESTION] with Perplexity. Find high-quality, recent sources, prioritize primary or authoritative sources, compare conflicting claims, and give me a concise synthesis with source names and links. Separate facts from interpretation.",
          "refine": "Find the best results for [QUERY] using Perplexity. Criteria: [DATE / LOCATION / QUALITY / BUDGET]. Exclude irrelevant or low-quality results, explain why the top results match, and present the shortlist in a comparison table."
        }
      },
      {
        "name": "DeepSeek",
        "desc": "AI assistant for research, analysis, reasoning, and programming.",
        "price": "-",
        "rating": null,
        "best": "Research & programming",
        "link": "https://www.deepseek.com",
        "keyPrompt": {
          "core": "Research [QUESTION] with DeepSeek. Find high-quality, recent sources, prioritize primary or authoritative sources, compare conflicting claims, and give me a concise synthesis with source names and links. Separate facts from interpretation.",
          "refine": "Find the best results for [QUERY] using DeepSeek. Criteria: [DATE / LOCATION / QUALITY / BUDGET]. Exclude irrelevant or low-quality results, explain why the top results match, and present the shortlist in a comparison table."
        }
      },
      {
        "name": "Claude",
        "desc": "Strong at analyzing texts/documents and long-form research.",
        "price": "-",
        "rating": null,
        "best": "Long-form analysis & research",
        "link": "https://claude.ai",
        "keyPrompt": {
          "core": "Research [QUESTION] with Claude. Find high-quality, recent sources, prioritize primary or authoritative sources, compare conflicting claims, and give me a concise synthesis with source names and links. Separate facts from interpretation.",
          "refine": "Find the best results for [QUERY] using Claude. Criteria: [DATE / LOCATION / QUALITY / BUDGET]. Exclude irrelevant or low-quality results, explain why the top results match, and present the shortlist in a comparison table."
        }
      },
      {
        "name": "Gemini",
        "desc": "Research within the Google ecosystem, image & file analysis.",
        "price": "-",
        "rating": null,
        "best": "Google-ecosystem research",
        "link": "https://gemini.google.com",
        "keyPrompt": {
          "core": "Research [QUESTION] with Gemini. Find high-quality, recent sources, prioritize primary or authoritative sources, compare conflicting claims, and give me a concise synthesis with source names and links. Separate facts from interpretation.",
          "refine": "Find the best results for [QUERY] using Gemini. Criteria: [DATE / LOCATION / QUALITY / BUDGET]. Exclude irrelevant or low-quality results, explain why the top results match, and present the shortlist in a comparison table."
        }
      },
      {
        "name": "Microsoft Copilot",
        "desc": "AI assistant integrated with Microsoft services.",
        "price": "-",
        "rating": null,
        "best": "Microsoft-ecosystem tasks",
        "link": "https://copilot.microsoft.com",
        "keyPrompt": {
          "core": "Research [QUESTION] with Microsoft Copilot. Find high-quality, recent sources, prioritize primary or authoritative sources, compare conflicting claims, and give me a concise synthesis with source names and links. Separate facts from interpretation.",
          "refine": "Find the best results for [QUERY] using Microsoft Copilot. Criteria: [DATE / LOCATION / QUALITY / BUDGET]. Exclude irrelevant or low-quality results, explain why the top results match, and present the shortlist in a comparison table. Bing Copilot Best for: AI-assisted web search Description: Web search with AI capabilities. Prompt 1 — Core workflow Research [QUESTION] with Bing Copilot. Find high-quality, recent sources, prioritize primary or authoritative sources, compare conflicting claims, and give me a concise synthesis with source names and links. Separate facts from interpretation. Prompt 2 — Advanced / optimization Find the best results for [QUERY] using Bing Copilot. Criteria: [DATE / LOCATION / QUALITY / BUDGET]. Exclude irrelevant or low-quality results, explain why the top results match, and present the shortlist in a comparison table."
        }
      },
      {
        "name": "Bing Copilot",
        "desc": "Web search with AI capabilities.",
        "price": "-",
        "rating": null,
        "best": "AI-assisted web search",
        "link": "https://www.bing.com"
      },
      {
        "name": "AlternativeTo",
        "desc": "Community-driven directory that helps you find alternatives to software and apps you already use.",
        "price": "Free",
        "rating": 8,
        "best": "Finding software alternatives",
        "link": "https://alternativeto.net"
      },
      {
        "name": "Genspark",
        "desc": "AI search engine/agent that generates custom answer pages by combining multiple sources.",
        "price": "Free + paid",
        "rating": 8,
        "best": "AI-generated answer pages",
        "link": "https://genspark.ai"
      },
      {
        "name": "ToolFolio",
        "desc": "Directory for discovering and comparing AI tools across categories.",
        "price": "Free",
        "rating": 7,
        "best": "Discovering AI tools by category",
        "link": "https://toolfolio.io"
      },
      {
        "name": "The Tool Bus",
        "desc": "Curated directory for discovering AI tools organized by category and use case.",
        "price": "Free",
        "rating": 6,
        "best": "Discovering AI tools by category",
        "link": "https://thetoolbus.ai"
      }
    ]
  },
  {
    "title": "Research (Knowledge Research)",
    "tools": [
      {
        "name": "Perplexity AI",
        "desc": "Research with verifiable, directly displayed sources.",
        "price": "Free + Pro",
        "rating": 10,
        "best": "Fast sourced research",
        "link": "https://www.perplexity.ai",
        "keyPrompt": {
          "core": "Use Perplexity AI to help me with this task: [TASK]. Context: [CONTEXT]. Audience: [AUDIENCE]. Goal: [GOAL]. Produce a clear, structured answer, distinguish verified facts from assumptions, and state uncertainties where relevant. Output format: [FORMAT].",
          "refine": "Act as a rigorous reviewer using Perplexity AI. Analyze: [TEXT / QUESTION / DATA]. Identify the strongest evidence, missing information, contradictions, and practical conclusions. Organize the response into findings, evidence, limitations, and recommended next steps."
        }
      },
      {
        "name": "Elicit",
        "desc": "Searches, analyzes, and summarizes scientific papers.",
        "price": "-",
        "rating": 8,
        "best": "Researchers & graduate students",
        "link": "https://elicit.com",
        "keyPrompt": {
          "core": "Use Elicit to help me with this task: [TASK]. Context: [CONTEXT]. Audience: [AUDIENCE]. Goal: [GOAL]. Produce a clear, structured answer, distinguish verified facts from assumptions, and state uncertainties where relevant. Output format: [FORMAT].",
          "refine": "Act as a rigorous reviewer using Elicit. Analyze: [TEXT / QUESTION / DATA]. Identify the strongest evidence, missing information, contradictions, and practical conclusions. Organize the response into findings, evidence, limitations, and recommended next steps."
        }
      },
      {
        "name": "Google Scholar",
        "desc": "Free search engine for academic papers, theses, books and citations across disciplines.",
        "price": "Free",
        "rating": 9,
        "best": "Searching academic literature",
        "link": "https://scholar.google.com"
      }
    ]
  },
  {
    "title": "Productivity",
    "tools": [
      {
        "name": "Notion AI",
        "desc": "Organizes notes and tasks, summarizes them, and manages projects.",
        "price": "-",
        "rating": 10,
        "best": "Bringing work, notes & projects together",
        "link": "https://www.notion.com/product/ai",
        "keyPrompt": {
          "core": "Use Notion AI to turn this into an actionable plan: [GOAL]. Available time: [TIME]. Constraints: [CONSTRAINTS]. Break it into priorities, concrete tasks, deadlines, and a simple daily/weekly routine. Keep the plan realistic and easy to maintain.",
          "refine": "Help me improve my workflow in Notion AI. Current situation: [CURRENT WORKFLOW]. Main problems: [PROBLEMS]. Desired outcome: [OUTCOME]. Propose a simpler system, explain the setup step by step, and define 3–5 indicators to track whether it works."
        }
      },
      {
        "name": "Motion",
        "desc": "Automatically schedules tasks and meetings by priority.",
        "price": "7-day trial",
        "rating": 8,
        "best": "Rescheduling around conflicts",
        "link": "https://www.usemotion.com",
        "keyPrompt": {
          "core": "Use Motion to turn this into an actionable plan: [GOAL]. Available time: [TIME]. Constraints: [CONSTRAINTS]. Break it into priorities, concrete tasks, deadlines, and a simple daily/weekly routine. Keep the plan realistic and easy to maintain.",
          "refine": "Help me improve my workflow in Motion. Current situation: [CURRENT WORKFLOW]. Main problems: [PROBLEMS]. Desired outcome: [OUTCOME]. Propose a simpler system, explain the setup step by step, and define 3–5 indicators to track whether it works."
        }
      },
      {
        "name": "Reclaim AI",
        "desc": "Time and calendar management with automatic scheduling.",
        "price": "-",
        "rating": null,
        "best": "Protecting focus time",
        "link": "https://reclaim.ai",
        "keyPrompt": {
          "core": "Use Reclaim AI to turn this into an actionable plan: [GOAL]. Available time: [TIME]. Constraints: [CONSTRAINTS]. Break it into priorities, concrete tasks, deadlines, and a simple daily/weekly routine. Keep the plan realistic and easy to maintain.",
          "refine": "Help me improve my workflow in Reclaim AI. Current situation: [CURRENT WORKFLOW]. Main problems: [PROBLEMS]. Desired outcome: [OUTCOME]. Propose a simpler system, explain the setup step by step, and define 3–5 indicators to track whether it works."
        }
      },
      {
        "name": "Microsoft Copilot",
        "desc": "Helps with Word, Excel, Outlook and work tasks.",
        "price": "-",
        "rating": null,
        "best": "Microsoft 365 organizations",
        "link": "https://copilot.microsoft.com"
      },
      {
        "name": "MediSummary",
        "desc": "AI workspace for doctors: paper summaries, audio, notes, PubMed-referenced answers.",
        "price": "7-day trial",
        "rating": null,
        "best": "Medical research workflows",
        "link": "https://www.medisummary.com",
        "keyPrompt": {
          "core": "Use MediSummary to turn this into an actionable plan: [GOAL]. Available time: [TIME]. Constraints: [CONSTRAINTS]. Break it into priorities, concrete tasks, deadlines, and a simple daily/weekly routine. Keep the plan realistic and easy to maintain.",
          "refine": "Help me improve my workflow in MediSummary. Current situation: [CURRENT WORKFLOW]. Main problems: [PROBLEMS]. Desired outcome: [OUTCOME]. Propose a simpler system, explain the setup step by step, and define 3–5 indicators to track whether it works."
        }
      },
      {
        "name": "Pitch",
        "desc": "Collaborative presentation software with a modern editor, templates and built-in analytics.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Team presentations",
        "link": "https://pitch.com"
      },
      {
        "name": "iLovePDF",
        "desc": "All-in-one PDF toolkit for merging, splitting, compressing, converting and editing PDF files online.",
        "price": "Free + paid",
        "rating": 9,
        "best": "All-purpose PDF editing",
        "link": "https://ilovepdf.com"
      },
      {
        "name": "CamScanner",
        "desc": "Mobile app that turns your phone camera into a document scanner with OCR and PDF export.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Scanning documents with your phone",
        "link": "https://camscanner.com"
      },
      {
        "name": "Bubbl.us",
        "desc": "Simple browser-based mind-mapping tool for brainstorming and organizing ideas visually.",
        "price": "Free + paid",
        "rating": 7,
        "best": "Mind mapping",
        "link": "https://bubbl.us"
      },
      {
        "name": "Beautiful.ai",
        "desc": "AI presentation maker that automatically formats and designs slides as you add content.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Auto-designed presentations",
        "link": "https://beautiful.ai"
      },
      {
        "name": "Napkin AI",
        "desc": "AI tool that turns written text into visuals, diagrams and infographics automatically.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Text-to-visual diagrams",
        "link": "https://napkin.ai"
      }
    ]
  },
  {
    "title": "Design",
    "tools": [
      {
        "name": "Canva Magic Studio",
        "desc": "Designs posts, presentations, logos, and ads with AI.",
        "price": "Free + Pro",
        "rating": 10,
        "best": "Beginners",
        "link": "https://www.canva.com",
        "keyPrompt": {
          "core": "Design this project with Canva Magic Studio: [PROJECT]. Target audience: [AUDIENCE]. Brand/style: [STYLE]. Required elements: [ELEMENTS]. Create a clear visual/UX concept covering hierarchy, layout, typography, interactions, consistency, and the final user experience.",
          "refine": "Act as a senior designer using Canva Magic Studio. Review this concept: [CONCEPT]. Identify usability and visual weaknesses, then propose a stronger version with exact changes to layout, hierarchy, content, interactions, and visual consistency."
        }
      },
      {
        "name": "Adobe Firefly",
        "desc": "Creates and edits images/designs within the Adobe ecosystem.",
        "price": "-",
        "rating": 8,
        "best": "Adobe workflows",
        "link": "https://firefly.adobe.com"
      },
      {
        "name": "Picsart",
        "desc": "Image and video editing plus AI design and generation tools.",
        "price": "Free + paid",
        "rating": null,
        "best": "Fast mobile content creation",
        "link": "https://picsart.com",
        "keyPrompt": {
          "core": "Design this project with Picsart: [PROJECT]. Target audience: [AUDIENCE]. Brand/style: [STYLE]. Required elements: [ELEMENTS]. Create a clear visual/UX concept covering hierarchy, layout, typography, interactions, consistency, and the final user experience.",
          "refine": "Act as a senior designer using Picsart. Review this concept: [CONCEPT]. Identify usability and visual weaknesses, then propose a stronger version with exact changes to layout, hierarchy, content, interactions, and visual consistency."
        }
      },
      {
        "name": "Photoroom",
        "desc": "Background removal, product images, AI backgrounds, fashion models.",
        "price": "Free plan + Pro/Max/Ultra",
        "rating": null,
        "best": "E-commerce & product images",
        "link": "https://www.photoroom.com",
        "keyPrompt": {
          "core": "Design this project with Photoroom: [PROJECT]. Target audience: [AUDIENCE]. Brand/style: [STYLE]. Required elements: [ELEMENTS]. Create a clear visual/UX concept covering hierarchy, layout, typography, interactions, consistency, and the final user experience.",
          "refine": "Act as a senior designer using Photoroom. Review this concept: [CONCEPT]. Identify usability and visual weaknesses, then propose a stronger version with exact changes to layout, hierarchy, content, interactions, and visual consistency."
        }
      },
      {
        "name": "Inkscape",
        "desc": "Free, open-source vector graphics editor comparable to Illustrator, for logos, icons and illustrations.",
        "price": "Free",
        "rating": 9,
        "best": "Free vector graphic design",
        "link": "https://inkscape.org"
      },
      {
        "name": "Easel.ly",
        "desc": "Simple drag-and-drop infographic maker with ready-made templates.",
        "price": "Free + paid",
        "rating": 6,
        "best": "Quick infographics",
        "link": "https://easel.ly"
      },
      {
        "name": "Learnamic",
        "desc": "Marketplace of presentation templates and educational design assets for teachers and creators.",
        "price": "Paid",
        "rating": 6,
        "best": "Presentation & teaching templates",
        "link": "https://learnamic.com"
      },
      {
        "name": "Fffuel",
        "desc": "Collection of free SVG generators for backgrounds, patterns, blobs and gradients.",
        "price": "Free",
        "rating": 7,
        "best": "Free SVG background generators",
        "link": "https://fffuel.co"
      },
      {
        "name": "WebGradients",
        "desc": "Free collection of ready-to-use CSS linear gradients for web and UI design.",
        "price": "Free",
        "rating": 7,
        "best": "Free CSS gradient presets",
        "link": "https://webgradients.com"
      },
      {
        "name": "Pacdora",
        "desc": "AI-powered 3D packaging design and mockup generator for product boxes and labels.",
        "price": "Free + paid",
        "rating": 7,
        "best": "3D packaging mockups",
        "link": "https://pacdora.com"
      },
      {
        "name": "Huemint",
        "desc": "AI color palette generator that creates cohesive brand and UI color schemes.",
        "price": "Free",
        "rating": 8,
        "best": "AI color palette generation",
        "link": "https://huemint.com"
      },
      {
        "name": "Mobbin",
        "desc": "Searchable library of real mobile and web app screens for UI/UX design inspiration.",
        "price": "Free + paid",
        "rating": 8,
        "best": "UI/UX design inspiration",
        "link": "https://mobbin.com"
      },
      {
        "name": "Godly",
        "desc": "Curated gallery of beautifully designed websites for design inspiration.",
        "price": "Free",
        "rating": 8,
        "best": "Website design inspiration",
        "link": "https://godly.website"
      },
      {
        "name": "Efecto",
        "desc": "AI-assisted design and motion tool for creating visual effects and animated graphics.",
        "price": "Free + paid",
        "rating": 6,
        "best": "AI motion/visual effects",
        "link": "https://efecto.app"
      },
      {
        "name": "Khroma",
        "desc": "AI color tool that learns your preferences and generates personalized color palettes.",
        "price": "Free",
        "rating": 8,
        "best": "Personalized AI color palettes",
        "link": "https://khroma.co"
      },
      {
        "name": "Fontjoy",
        "desc": "AI tool that generates font pairings for typography and design projects.",
        "price": "Free",
        "rating": 8,
        "best": "AI font pairing generator",
        "link": "https://fontjoy.com"
      },
      {
        "name": "Jitter",
        "desc": "Browser-based motion design tool for creating animated graphics without complex software.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Motion graphics for social content",
        "link": "https://jitter.video"
      },
      {
        "name": "Rive",
        "desc": "Interactive animation and design tool for creating vector animations that respond to user input.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Interactive vector animation",
        "link": "https://rive.app"
      },
      {
        "name": "Stitch",
        "desc": "Google's AI tool that generates UI designs and frontend code from text prompts.",
        "price": "Free",
        "rating": 7,
        "best": "AI-generated UI design & code",
        "link": "https://stitch.withgoogle.com"
      },
      {
        "name": "Uizard",
        "desc": "AI UI/UX design tool that turns sketches and prompts into clickable app mockups.",
        "price": "Free + paid",
        "rating": 8,
        "best": "AI mockups from sketches or text",
        "link": "https://uizard.io"
      },
      {
        "name": "Mixboard",
        "desc": "Google's AI mood-board tool for visually exploring and remixing creative ideas.",
        "price": "Free",
        "rating": 7,
        "best": "AI visual mood-boarding",
        "link": "https://mixboard.withgoogle.com"
      },
      {
        "name": "UI/UX Pro Max (Skill)",
        "desc": "A ChatGPT skill/prompt pack focused on assisting with UI/UX design tasks and critique.",
        "price": "Free (with ChatGPT)",
        "rating": 6,
        "best": "AI-assisted UI/UX design help",
        "link": "https://chatgpt.com"
      },
      {
        "name": "Are.na",
        "desc": "Visual bookmarking and research tool for collecting and organizing inspiration into shared boards.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Visual research & moodboarding",
        "link": "https://are.na"
      },
      {
        "name": "Vecteezy",
        "desc": "Library of free and premium vector graphics, illustrations and stock videos.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Free vector graphics & illustrations",
        "link": "https://vecteezy.com"
      }
    ]
  },
  {
    "title": "Excel & Spreadsheet Analysis",
    "tools": [
      {
        "name": "Microsoft Copilot for Excel",
        "desc": "Writes formulas, analyzes data, creates charts via natural language.",
        "price": "Requires Microsoft 365/Copilot",
        "rating": null,
        "best": "Working directly inside Excel",
        "link": "https://copilot.microsoft.com",
        "keyPrompt": {
          "core": "Analyze this dataset in Microsoft Copilot for Excel: [DATA / FILE]. Objective: [OBJECTIVE]. Clean obvious inconsistencies, define the required calculations, identify the most important KPIs, and explain the results. Provide formulas or step-by-step calculations where useful.",
          "refine": "Build a decision-ready analysis in Microsoft Copilot for Excel from [DATA]. Segment the results by [DIMENSIONS], identify trends/outliers, calculate [KPIs], and finish with 5 actionable recommendations. State assumptions and data limitations."
        }
      },
      {
        "name": "ChatGPT + File Analysis",
        "desc": "Uploads Excel files, cleans data, creates charts, extracts results.",
        "price": "-",
        "rating": null,
        "best": "Flexible outside-Excel analysis",
        "link": "https://chatgpt.com",
        "keyPrompt": {
          "core": "Analyze this dataset in ChatGPT + File Analysis: [DATA / FILE]. Objective: [OBJECTIVE]. Clean obvious inconsistencies, define the required calculations, identify the most important KPIs, and explain the results. Provide formulas or step-by-step calculations where useful.",
          "refine": "Build a decision-ready analysis in ChatGPT + File Analysis from [DATA]. Segment the results by [DIMENSIONS], identify trends/outliers, calculate [KPIs], and finish with 5 actionable recommendations. State assumptions and data limitations."
        }
      },
      {
        "name": "Numeri.ai",
        "desc": "AI spreadsheet assistant that helps analyze, clean and query data using natural-language prompts.",
        "price": "Free + paid",
        "rating": 7,
        "best": "Natural-language spreadsheet analysis",
        "link": "https://numeri.ai"
      },
      {
        "name": "CustomGraph",
        "desc": "Tool for creating and customizing charts and graphs from your own data.",
        "price": "Free + paid",
        "rating": 6,
        "best": "Custom chart & graph creation",
        "link": "https://customgraph.com"
      },
      {
        "name": "Rows",
        "desc": "Online spreadsheet with built-in AI and API connectors.",
        "price": "Free + paid",
        "rating": 9,
        "best": "Spreadsheets connected to APIs",
        "link": "https://rows.com/",
        "keyPrompt": {
          "core": "Analyze this dataset in Rows: [DATA / FILE]. Objective: [OBJECTIVE]. Clean obvious inconsistencies, define the required calculations, identify the most important KPIs, and explain the results. Provide formulas or step-by-step calculations where useful.",
          "refine": "Build a decision-ready analysis in Rows from [DATA]. Segment the results by [DIMENSIONS], identify trends/outliers, calculate [KPIs], and finish with 5 actionable recommendations. State assumptions and data limitations."
        }
      }
    ]
  },
  {
    "title": "Programming",
    "tools": [
      {
        "name": "Claude Code",
        "desc": "Writes, executes, and fixes code; works on multi-file projects.",
        "price": "-",
        "rating": 10,
        "best": "Terminal / IDE development",
        "link": "https://claude.com/product/claude-code",
        "keyPrompt": {
          "core": "Help me build [FEATURE / PROJECT] with Claude Code. Stack: [LANGUAGE / FRAMEWORK]. Requirements: [REQUIREMENTS]. Produce maintainable code, explain the architecture briefly, handle edge cases, and include validation/testing steps.",
          "refine": "Debug this code with Claude Code: [PASTE CODE]. Error/behavior: [ERROR]. First identify the root cause, then provide the corrected code and explain exactly what changed. Do not rewrite unrelated parts."
        }
      },
      {
        "name": "Cursor",
        "desc": "Full code editor powered by AI.",
        "price": "-",
        "rating": 10,
        "best": "Integrated AI development environment",
        "link": "https://cursor.com",
        "keyPrompt": {
          "core": "Help me build [FEATURE / PROJECT] with Cursor. Stack: [LANGUAGE / FRAMEWORK]. Requirements: [REQUIREMENTS]. Produce maintainable code, explain the architecture briefly, handle edge cases, and include validation/testing steps.",
          "refine": "Debug this code with Cursor: [PASTE CODE]. Error/behavior: [ERROR]. First identify the root cause, then provide the corrected code and explain exactly what changed. Do not rewrite unrelated parts."
        }
      },
      {
        "name": "GitHub Copilot",
        "desc": "Code completion, chat, agents, code review, GitHub integration.",
        "price": "Free · Pro $10 · Pro+ $39 · Max $100/mo",
        "rating": 10,
        "best": "VS Code / Visual Studio / JetBrains",
        "link": "https://github.com/features/copilot",
        "keyPrompt": {
          "core": "Help me build [FEATURE / PROJECT] with GitHub Copilot. Stack: [LANGUAGE / FRAMEWORK]. Requirements: [REQUIREMENTS]. Produce maintainable code, explain the architecture briefly, handle edge cases, and include validation/testing steps.",
          "refine": "Debug this code with GitHub Copilot: [PASTE CODE]. Error/behavior: [ERROR]. First identify the root cause, then provide the corrected code and explain exactly what changed. Do not rewrite unrelated parts."
        }
      },
      {
        "name": "Devin",
        "desc": "AI programming agent that carries out full development tasks.",
        "price": "-",
        "rating": null,
        "best": "Large, independent programming tasks",
        "link": "https://devin.ai",
        "keyPrompt": {
          "core": "Help me build [FEATURE / PROJECT] with Devin. Stack: [LANGUAGE / FRAMEWORK]. Requirements: [REQUIREMENTS]. Produce maintainable code, explain the architecture briefly, handle edge cases, and include validation/testing steps.",
          "refine": "Debug this code with Devin: [PASTE CODE]. Error/behavior: [ERROR]. First identify the root cause, then provide the corrected code and explain exactly what changed. Do not rewrite unrelated parts."
        }
      },
      {
        "name": "Antigravity",
        "desc": "Google's agentic AI coding IDE that can plan, write and test code across a project.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Agentic AI coding environment",
        "link": "https://antigravity.google"
      },
      {
        "name": "Jules",
        "desc": "Google's autonomous AI coding agent that can fix bugs and ship code changes in the background.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Autonomous AI coding agent",
        "link": "https://jules.google"
      },
      {
        "name": "Codewiki",
        "desc": "AI tool that automatically generates and maintains documentation/wikis for a codebase.",
        "price": "Free + paid",
        "rating": 7,
        "best": "AI-generated codebase documentation",
        "link": "https://codewiki.dev"
      },
      {
        "name": "Firebase Studio",
        "desc": "Google's AI-powered full-stack app development environment built on Firebase.",
        "price": "Free",
        "rating": 8,
        "best": "AI full-stack app development",
        "link": "https://firebase.studio"
      },
      {
        "name": "Google AI Studio",
        "desc": "Google's browser-based platform for prototyping and testing with Gemini AI models.",
        "price": "Free",
        "rating": 9,
        "best": "Prototyping with Gemini models",
        "link": "https://aistudio.google.com"
      },
      {
        "name": "CodeRabbit",
        "desc": "AI code review tool that automatically reviews pull requests and suggests fixes.",
        "price": "Free + paid",
        "rating": 8,
        "best": "AI-powered code review",
        "link": "https://coderabbit.ai"
      },
      {
        "name": "Coddy",
        "desc": "Interactive coding education platform with hands-on programming courses.",
        "price": "Free + paid",
        "rating": 7,
        "best": "Interactive coding courses",
        "link": "https://coddy.tech"
      },
      {
        "name": "Windsurf",
        "desc": "AI-native code editor (formerly Codeium) that autonomously writes and edits code across a codebase.",
        "price": "Free + paid",
        "rating": 8,
        "best": "AI-native coding editor",
        "link": "https://windsurf.com"
      }
    ]
  },
  {
    "title": "Studying",
    "tools": [
      {
        "name": "NotebookLM",
        "desc": "Turns study files into summaries and audio discussions/podcasts.",
        "price": "Free",
        "rating": 10,
        "best": "Learning from your own uploaded sources",
        "link": "https://notebooklm.google.com",
        "keyPrompt": {
          "core": "Use NotebookLM as a study tutor for [SUBJECT / TOPIC]. My level: [LEVEL]. Teach the concept step by step with simple examples, then give me a short quiz and correct my answers with explanations.",
          "refine": "Create a focused revision session in NotebookLM for [EXAM / TOPIC]. I have [TIME] available. Prioritize the highest-value concepts, use active recall, include practice questions, and finish with a compact revision checklist."
        }
      },
      {
        "name": "QuillBot",
        "desc": "Rewrites and improves academic texts; detects plagiarism.",
        "price": "-",
        "rating": 8,
        "best": "English academic writing (weaker in AR/FR)",
        "link": "https://quillbot.com",
        "keyPrompt": {
          "core": "Use QuillBot as a study tutor for [SUBJECT / TOPIC]. My level: [LEVEL]. Teach the concept step by step with simple examples, then give me a short quiz and correct my answers with explanations.",
          "refine": "Create a focused revision session in QuillBot for [EXAM / TOPIC]. I have [TIME] available. Prioritize the highest-value concepts, use active recall, include practice questions, and finish with a compact revision checklist."
        }
      },
      {
        "name": "Photomath",
        "desc": "Photograph a math problem and get a step-by-step solution.",
        "price": "Basic free; Premium $9.99/mo or $69.99/yr",
        "rating": null,
        "best": "Understanding solution steps",
        "link": "https://photomath.com",
        "keyPrompt": {
          "core": "Use Photomath as a study tutor for [SUBJECT / TOPIC]. My level: [LEVEL]. Teach the concept step by step with simple examples, then give me a short quiz and correct my answers with explanations.",
          "refine": "Create a focused revision session in Photomath for [EXAM / TOPIC]. I have [TIME] available. Prioritize the highest-value concepts, use active recall, include practice questions, and finish with a compact revision checklist."
        }
      },
      {
        "name": "FreeBookSpot",
        "desc": "Directory of free ebooks and reading resources spanning many genres and subjects.",
        "price": "Free",
        "rating": 6,
        "best": "Free ebook discovery",
        "link": "https://freebookspot.club"
      },
      {
        "name": "Academic Earth",
        "desc": "Curated directory of free online courses and video lectures from top universities.",
        "price": "Free",
        "rating": 7,
        "best": "Free university-level lectures",
        "link": "https://academicearth.org"
      },
      {
        "name": "Class Central",
        "desc": "Search engine and directory for free online courses from Coursera, edX, Udemy and other providers.",
        "price": "Free",
        "rating": 8,
        "best": "Finding the best online courses",
        "link": "https://classcentral.com"
      },
      {
        "name": "Disco",
        "desc": "Platform for running and managing cohort-based online courses and learning communities.",
        "price": "Paid",
        "rating": 7,
        "best": "Running cohort-based courses",
        "link": "https://disco.co"
      },
      {
        "name": "Learn Your Way",
        "desc": "Google's experimental AI tool that turns study material into a personalized, interactive learning guide.",
        "price": "Free",
        "rating": 7,
        "best": "Personalized AI study guides",
        "link": "https://learningaboutyourway.withgoogle.com"
      },
      {
        "name": "Open Library",
        "desc": "Internet Archive's open, editable library catalog with millions of free books to borrow or read.",
        "price": "Free",
        "rating": 8,
        "best": "Free digital library & book catalog",
        "link": "https://openlibrary.org"
      },
      {
        "name": "Hooktheory",
        "desc": "Interactive music theory education tool that teaches songwriting and harmony through popular songs.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Learning music theory & songwriting",
        "link": "https://hooktheory.com"
      },
      {
        "name": "Learn Anything",
        "desc": "Community-built knowledge maps that lay out learning paths and resources for any topic.",
        "price": "Free",
        "rating": 7,
        "best": "Visual learning roadmaps",
        "link": "https://learn-anything.xyz"
      },
      {
        "name": "MIT OpenCourseWare",
        "desc": "Free access to MIT's course materials, lecture notes and video lectures across most subjects.",
        "price": "Free",
        "rating": 9,
        "best": "Free MIT course materials",
        "link": "https://ocw.mit.edu"
      },
      {
        "name": "Skool",
        "desc": "Platform for hosting online courses and paid communities with built-in gamification.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Hosting courses & communities",
        "link": "https://skool.com"
      },
      {
        "name": "Stanford Engineering Everywhere",
        "desc": "Free Stanford engineering course materials, lectures and assignments.",
        "price": "Free",
        "rating": 8,
        "best": "Free Stanford engineering courses",
        "link": "https://see.stanford.edu"
      },
      {
        "name": "Open University (OpenLearn)",
        "desc": "The Open University's free courses covering hundreds of subjects for independent learners.",
        "price": "Free",
        "rating": 8,
        "best": "Free Open University courses",
        "link": "https://open.edu"
      },
      {
        "name": "Khan Academy",
        "desc": "Free, comprehensive learning platform with lessons and practice across K-12 and beyond.",
        "price": "Free",
        "rating": 9,
        "best": "Free K-12 & beyond learning",
        "link": "https://khanacademy.org"
      },
      {
        "name": "Coursera",
        "desc": "Online learning platform offering university and industry courses, certificates and degrees.",
        "price": "Free + paid",
        "rating": 9,
        "best": "University-backed online courses",
        "link": "https://coursera.org"
      },
      {
        "name": "edX",
        "desc": "Online learning platform with free and paid courses from top universities and institutions.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Free & paid university courses",
        "link": "https://edx.org"
      }
    ]
  },
  {
    "title": "Deep Scientific Research",
    "tools": [
      {
        "name": "Perplexity Deep Research",
        "desc": "Searches multiple sources and creates a documented report.",
        "price": "-",
        "rating": null,
        "best": "Saving hours of research",
        "link": "https://www.perplexity.ai",
        "keyPrompt": {
          "core": "Use Perplexity Deep Research to help me with this task: [TASK]. Context: [CONTEXT]. Audience: [AUDIENCE]. Goal: [GOAL]. Produce a clear, structured answer, distinguish verified facts from assumptions, and state uncertainties where relevant. Output format: [FORMAT].",
          "refine": "Act as a rigorous reviewer using Perplexity Deep Research. Analyze: [TEXT / QUESTION / DATA]. Identify the strongest evidence, missing information, contradictions, and practical conclusions. Organize the response into findings, evidence, limitations, and recommended next steps."
        }
      },
      {
        "name": "Elicit",
        "desc": "Analyzes scientific papers and extracts key findings.",
        "price": "-",
        "rating": null,
        "best": "Literature review support",
        "link": "https://elicit.com"
      },
      {
        "name": "Consensus",
        "desc": "AI-powered search engine that finds and summarizes findings from peer-reviewed research papers.",
        "price": "Free + paid",
        "rating": 8,
        "best": "AI search across scientific papers",
        "link": "https://consensus.app"
      }
    ]
  },
  {
    "title": "Content Creation (Short-form)",
    "tools": [
      {
        "name": "CapCut",
        "desc": "Video editing, automatic subtitles, background removal, audio enhancement.",
        "price": "-",
        "rating": 10,
        "best": "TikTok / Reels",
        "link": "https://www.capcut.com",
        "keyPrompt": {
          "core": "Use CapCut to create a practical growth plan for [PRODUCT / BUSINESS]. Target customer: [AUDIENCE]. Market: [MARKET]. Budget: [BUDGET]. Goal: [GOAL]. Give me prioritized actions, channels, messaging angles, KPIs, and a 30-day execution plan.",
          "refine": "Act as a performance marketer using CapCut. Analyze this offer: [OFFER]. Identify the strongest value proposition, objections, audience segments, creative angles, CTA, and experiments. Rank ideas by expected impact and ease of testing."
        }
      },
      {
        "name": "Opus Clip",
        "desc": "Automatically turns long videos into short clips.",
        "price": "-",
        "rating": 8,
        "best": "Shorts / Reels / TikTok",
        "link": "https://www.opus.pro",
        "keyPrompt": {
          "core": "Use Opus Clip to create a practical growth plan for [PRODUCT / BUSINESS]. Target customer: [AUDIENCE]. Market: [MARKET]. Budget: [BUDGET]. Goal: [GOAL]. Give me prioritized actions, channels, messaging angles, KPIs, and a 30-day execution plan.",
          "refine": "Act as a performance marketer using Opus Clip. Analyze this offer: [OFFER]. Identify the strongest value proposition, objections, audience segments, creative angles, CTA, and experiments. Rank ideas by expected impact and ease of testing."
        }
      },
      {
        "name": "InShot",
        "desc": "Video and photo editing on mobile.",
        "price": "-",
        "rating": null,
        "best": "Fast mobile content creation",
        "link": "https://inshot.com",
        "keyPrompt": {
          "core": "Use InShot to create a practical growth plan for [PRODUCT / BUSINESS]. Target customer: [AUDIENCE]. Market: [MARKET]. Budget: [BUDGET]. Goal: [GOAL]. Give me prioritized actions, channels, messaging angles, KPIs, and a 30-day execution plan.",
          "refine": "Act as a performance marketer using InShot. Analyze this offer: [OFFER]. Identify the strongest value proposition, objections, audience segments, creative angles, CTA, and experiments. Rank ideas by expected impact and ease of testing."
        }
      },
      {
        "name": "Picsart",
        "desc": "Image and video editing plus AI.",
        "price": "-",
        "rating": null,
        "best": "Quick posts & designs",
        "link": "https://picsart.com"
      },
      {
        "name": "Photoroom",
        "desc": "Product images, ads, and background removal.",
        "price": "-",
        "rating": null,
        "best": "E-commerce content",
        "link": "https://www.photoroom.com"
      },
      {
        "name": "Pictalio",
        "desc": "Free platform to search and download royalty-free vertical Stories-style video clips for social content.",
        "price": "Free",
        "rating": 7,
        "best": "Free vertical story-style stock clips",
        "link": "https://pictalio.com"
      },
      {
        "name": "ViralityAI",
        "desc": "AI tool that surfaces proven viral content ideas, hooks and competitor posts by keyword across Instagram, TikTok and YouTube.",
        "price": "Free + paid from $5.99/mo",
        "rating": 7,
        "best": "Finding viral content ideas by keyword",
        "link": "https://viralityai.net"
      },
      {
        "name": "OpusClip",
        "desc": "AI tool that turns long videos into short, ready-to-post clips with automatic captions and highlights.",
        "price": "Free + paid",
        "rating": 9,
        "best": "Long video to viral shorts",
        "link": "https://opus.pro"
      },
      {
        "name": "Vizard",
        "desc": "AI video clipping tool that extracts the best short-form moments from long videos.",
        "price": "Free + paid",
        "rating": 8,
        "best": "AI video highlight clipping",
        "link": "https://vizard.ai"
      },
      {
        "name": "Klap",
        "desc": "AI tool that repurposes long videos into short clips optimized for TikTok, Reels and Shorts.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Repurposing long videos into shorts",
        "link": "https://klap.app"
      },
      {
        "name": "Submagic",
        "desc": "AI captioning and editing tool that adds animated subtitles and effects to short-form videos.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Animated captions for shorts",
        "link": "https://submagic.co"
      },
      {
        "name": "Buzzy",
        "desc": "AI tool for quickly generating short-form social content ideas and hooks.",
        "price": "Free + paid",
        "rating": 6,
        "best": "Short-form content idea generation",
        "link": "https://buzzy.now"
      }
    ]
  },
  {
    "title": "Text-to-Speech",
    "tools": [
      {
        "name": "ElevenLabs",
        "desc": "One of the most well-known tools for realistic voices.",
        "price": "Free + paid plans",
        "rating": null,
        "best": "Voiceovers, stories, videos",
        "link": "https://elevenlabs.io",
        "keyPrompt": {
          "core": "Use ElevenLabs for this audio task: [TASK]. Desired voice/music/audio style: [STYLE]. Language: [LANGUAGE]. Audience: [AUDIENCE]. Preserve natural pacing, clarity, pronunciation, and appropriate emotional tone.",
          "refine": "Optimize this audio brief for ElevenLabs: [BRIEF]. Improve clarity, pacing, pronunciation cues, structure, and consistency while keeping the intended message and tone."
        }
      },
      {
        "name": "Speechify",
        "desc": "Reads texts, books, and articles aloud.",
        "price": "-",
        "rating": null,
        "best": "Long listening sessions",
        "link": "https://speechify.com",
        "keyPrompt": {
          "core": "Use Speechify for this audio task: [TASK]. Desired voice/music/audio style: [STYLE]. Language: [LANGUAGE]. Audience: [AUDIENCE]. Preserve natural pacing, clarity, pronunciation, and appropriate emotional tone.",
          "refine": "Optimize this audio brief for Speechify: [BRIEF]. Improve clarity, pacing, pronunciation cues, structure, and consistency while keeping the intended message and tone."
        }
      },
      {
        "name": "AssemblyAI",
        "desc": "Speech AI platform aimed at developers and APIs.",
        "price": "Pay-as-you-go",
        "rating": null,
        "best": "Applications & software projects",
        "link": "https://www.assemblyai.com",
        "keyPrompt": {
          "core": "Use AssemblyAI for this audio task: [TASK]. Desired voice/music/audio style: [STYLE]. Language: [LANGUAGE]. Audience: [AUDIENCE]. Preserve natural pacing, clarity, pronunciation, and appropriate emotional tone.",
          "refine": "Optimize this audio brief for AssemblyAI: [BRIEF]. Improve clarity, pacing, pronunciation cues, structure, and consistency while keeping the intended message and tone."
        }
      },
      {
        "name": "PlayHT",
        "desc": "AI voice generation and Voice API.",
        "price": "-",
        "rating": null,
        "best": "Voiceovers & applications",
        "link": "https://play.ht",
        "keyPrompt": {
          "core": "Use PlayHT for this audio task: [TASK]. Desired voice/music/audio style: [STYLE]. Language: [LANGUAGE]. Audience: [AUDIENCE]. Preserve natural pacing, clarity, pronunciation, and appropriate emotional tone.",
          "refine": "Optimize this audio brief for PlayHT: [BRIEF]. Improve clarity, pacing, pronunciation cues, structure, and consistency while keeping the intended message and tone."
        }
      },
      {
        "name": "Rev AI",
        "desc": "Speech-to-Text and audio features through an API.",
        "price": "Pay-as-you-go + free test credits",
        "rating": null,
        "best": "Transcription integrations",
        "link": "https://www.rev.ai",
        "keyPrompt": {
          "core": "Use Rev AI for this audio task: [TASK]. Desired voice/music/audio style: [STYLE]. Language: [LANGUAGE]. Audience: [AUDIENCE]. Preserve natural pacing, clarity, pronunciation, and appropriate emotional tone.",
          "refine": "Optimize this audio brief for Rev AI: [BRIEF]. Improve clarity, pacing, pronunciation cues, structure, and consistency while keeping the intended message and tone. TurboScribe Best for: Transcribing recordings Description: Audio/speech-to-text transcription (not a TTS tool). Prompt 1 — Core workflow Use TurboScribe for this audio task: [TASK]. Desired voice/music/audio style: [STYLE]. Language: [LANGUAGE]. Audience: [AUDIENCE]. Preserve natural pacing, clarity, pronunciation, and appropriate emotional tone. Prompt 2 — Advanced / optimization Optimize this audio brief for TurboScribe: [BRIEF]. Improve clarity, pacing, pronunciation cues, structure, and consistency while keeping the intended message and tone."
        }
      },
      {
        "name": "TurboScribe",
        "desc": "Audio/speech-to-text transcription (not a TTS tool).",
        "price": "Free: 3 files/day (30 min); Unlimited ~$10/mo",
        "rating": null,
        "best": "Transcribing recordings",
        "link": "https://turboscribe.ai"
      },
      {
        "name": "Vocuno",
        "desc": "AI voice and audio generation tool for creating spoken content from text.",
        "price": "Free + paid",
        "rating": 6,
        "best": "AI text-to-voice generation",
        "link": "https://vocuno.com"
      },
      {
        "name": "Murf AI",
        "desc": "AI voice generator with realistic studio-quality voices for narration and voiceovers.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Studio-quality AI voiceovers",
        "link": "https://murf.ai"
      }
    ]
  },
  {
    "title": "Text-to-Video",
    "tools": [
      {
        "name": "Midjourney",
        "desc": "Now also supports video within current plan limits.",
        "price": "-",
        "rating": null,
        "best": "Artistic video generation",
        "link": "https://www.midjourney.com"
      },
      {
        "name": "Adobe Firefly",
        "desc": "Text-to-Video within the Adobe toolset.",
        "price": "-",
        "rating": null,
        "best": "Adobe-integrated video",
        "link": "https://firefly.adobe.com"
      },
      {
        "name": "Kling AI",
        "desc": "Text/Image-to-Video generation.",
        "price": "-",
        "rating": null,
        "best": "Realistic cinematic clips",
        "link": "https://klingai.com"
      },
      {
        "name": "Runway",
        "desc": "Professional video generation and editing.",
        "price": "-",
        "rating": null,
        "best": "Professional production",
        "link": "https://runwayml.com",
        "keyPrompt": {
          "core": "Create a professional production for me using Runway. Concept: [IDEA]. Duration: [DURATION]. Aspect ratio: [9:16 / 16:9 / 1:1]. Define the subject, setting, action, camera movement, lens feel, lighting, color mood, pacing, and visual continuity. Keep the result realistic and production-ready.",
          "refine": "Improve this Runway video prompt: [PASTE PROMPT]. Make the motion natural, preserve character/object consistency, strengthen the camera direction, lighting, composition, and storytelling, and remove ambiguity. Return one optimized final prompt."
        }
      },
      {
        "name": "Google Flow",
        "desc": "Creation of interconnected cinematic scenes.",
        "price": "-",
        "rating": null,
        "best": "Narrative-consistent scenes",
        "link": "https://labs.google/flow"
      },
      {
        "name": "Pika",
        "desc": "Fast videos and creative effects.",
        "price": "-",
        "rating": null,
        "best": "Quick effects",
        "link": "https://pika.art"
      },
      {
        "name": "D-ID",
        "desc": "AI platform that turns a photo and script into a talking-avatar video.",
        "price": "Free + paid",
        "rating": 8,
        "best": "AI talking-avatar videos",
        "link": "https://d-id.com"
      },
      {
        "name": "Seedance 2.0",
        "desc": "AI video generation model for creating short, high-quality video clips from text or images.",
        "price": "Paid",
        "rating": 8,
        "best": "AI text-to-video generation",
        "link": "https://seedance.ai"
      },
      {
        "name": "Viggle AI",
        "desc": "AI tool that animates characters and applies realistic motion to images and videos.",
        "price": "Free + paid",
        "rating": 7,
        "best": "AI character animation",
        "link": "https://viggle.ai"
      },
      {
        "name": "Veo 3.1",
        "desc": "Google DeepMind's AI video generation model for creating realistic video clips with sound from text.",
        "price": "Paid (via Google AI)",
        "rating": 9,
        "best": "High-fidelity AI video generation",
        "link": "https://deepmind.google/technologies/veo"
      },
      {
        "name": "Higgsfield AI",
        "desc": "AI video generation tool with cinematic camera controls for more directable video output.",
        "price": "Free + paid",
        "rating": 7,
        "best": "Cinematic AI video generation",
        "link": "https://higgsfield.ai"
      },
      {
        "name": "Google Flow",
        "desc": "Google's AI filmmaking tool that combines Veo, Imagen and Gemini to generate and edit video scenes.",
        "price": "Paid (via Google AI)",
        "rating": 8,
        "best": "AI filmmaking with Veo & Gemini",
        "link": "https://labs.google/flow"
      },
      {
        "name": "Sora",
        "desc": "OpenAI's AI video generation model that creates realistic video clips from text prompts.",
        "price": "Paid (via ChatGPT)",
        "rating": 9,
        "best": "OpenAI's text-to-video model",
        "link": "https://sora.com"
      },
      {
        "name": "Veo",
        "desc": "Google DeepMind's AI model for generating high-quality video from text or image prompts.",
        "price": "Paid (via Google AI)",
        "rating": 9,
        "best": "Google's AI video generation model",
        "link": "https://deepmind.google/technologies/veo"
      }
    ]
  },
  {
    "title": "AI Agents",
    "tools": [
      {
        "name": "Manus",
        "desc": "Performs complete tasks from a text idea: research, building, files, delivery.",
        "price": "Free, Pro, and Team plans",
        "rating": null,
        "best": "Long, multi-step tasks",
        "link": "https://manus.im",
        "keyPrompt": {
          "core": "Configure an agent in Manus to accomplish [GOAL]. Inputs: [INPUTS]. Allowed tools/data: [TOOLS]. Constraints: [CONSTRAINTS]. Define the workflow, decision rules, checkpoints, failure handling, and exact final output.",
          "refine": "Design a reliable automation agent with Manus for [PROCESS]. Identify triggers, steps, conditions, approvals, exceptions, logging, and success criteria. Minimize unnecessary actions and require confirmation before irreversible changes."
        }
      },
      {
        "name": "Claude Cowork",
        "desc": "Independent work on files and office tasks locally within Claude.",
        "price": "-",
        "rating": null,
        "best": "Office-task automation",
        "link": "https://claude.com/cowork",
        "keyPrompt": {
          "core": "Configure an agent in Claude Cowork to accomplish [GOAL]. Inputs: [INPUTS]. Allowed tools/data: [TOOLS]. Constraints: [CONSTRAINTS]. Define the workflow, decision rules, checkpoints, failure handling, and exact final output.",
          "refine": "Design a reliable automation agent with Claude Cowork for [PROCESS]. Identify triggers, steps, conditions, approvals, exceptions, logging, and success criteria. Minimize unnecessary actions and require confirmation before irreversible changes."
        }
      },
      {
        "name": "Lindy",
        "desc": "AI agents for tasks, automation, meetings, email, and workflows.",
        "price": "Plus $29.99 · Pro $99.99 · Max $199.99/mo",
        "rating": null,
        "best": "Building an AI assistant/employee",
        "link": "https://www.lindy.ai",
        "keyPrompt": {
          "core": "Configure an agent in Lindy to accomplish [GOAL]. Inputs: [INPUTS]. Allowed tools/data: [TOOLS]. Constraints: [CONSTRAINTS]. Define the workflow, decision rules, checkpoints, failure handling, and exact final output.",
          "refine": "Design a reliable automation agent with Lindy for [PROCESS]. Identify triggers, steps, conditions, approvals, exceptions, logging, and success criteria. Minimize unnecessary actions and require confirmation before irreversible changes."
        }
      },
      {
        "name": "Fellou",
        "desc": "Agentic AI browser that can autonomously research, click through sites and complete multi-step tasks.",
        "price": "Free + paid",
        "rating": 7,
        "best": "Autonomous AI browsing agent",
        "link": "https://fellou.ai"
      },
      {
        "name": "Grok",
        "desc": "xAI's conversational AI assistant with real-time knowledge and agentic capabilities.",
        "price": "Free + paid",
        "rating": 8,
        "best": "General-purpose AI assistant",
        "link": "https://grok.com"
      },
      {
        "name": "Runable",
        "desc": "AI agent platform for building and running automated multi-step workflows.",
        "price": "Free + paid",
        "rating": 6,
        "best": "Building automated AI workflows",
        "link": "https://runable.com"
      },
      {
        "name": "Fetra AI",
        "desc": "AI-powered automation tool for streamlining repetitive workflow tasks.",
        "price": "Paid",
        "rating": 6,
        "best": "AI workflow automation",
        "link": "https://fetra.ai"
      },
      {
        "name": "Abacus.AI",
        "desc": "Enterprise AI platform for building custom LLM apps, agents and predictive models.",
        "price": "Paid, free trial",
        "rating": 7,
        "best": "Enterprise AI agents & models",
        "link": "https://abacus.ai"
      }
    ]
  },
  {
    "title": "Translation",
    "tools": [
      {
        "name": "DeepL",
        "desc": "High-quality and natural translation.",
        "price": "-",
        "rating": null,
        "best": "Translation quality",
        "link": "https://www.deepl.com",
        "keyPrompt": {
          "core": "Translate the following text with DeepL from [SOURCE LANGUAGE] to [TARGET LANGUAGE]. Preserve meaning, terminology, tone, formatting, names, numbers, and technical vocabulary. Do not add information: [TEXT].",
          "refine": "Review this DeepL translation for accuracy and naturalness: [TRANSLATION]. Compare it with the source [SOURCE], identify mistranslations or awkward phrasing, and provide a corrected final version."
        }
      },
      {
        "name": "Google Translate",
        "desc": "Covers more than 100 languages.",
        "price": "-",
        "rating": null,
        "best": "Broad language coverage",
        "link": "https://translate.google.com",
        "keyPrompt": {
          "core": "Translate the following text with Google Translate from [SOURCE LANGUAGE] to [TARGET LANGUAGE]. Preserve meaning, terminology, tone, formatting, names, numbers, and technical vocabulary. Do not add information: [TEXT].",
          "refine": "Review this Google Translate translation for accuracy and naturalness: [TRANSLATION]. Compare it with the source [SOURCE], identify mistranslations or awkward phrasing, and provide a corrected final version."
        }
      }
    ]
  },
  {
    "title": "Automation",
    "tools": [
      {
        "name": "Zapier",
        "desc": "Connects applications and creates workflows.",
        "price": "-",
        "rating": null,
        "best": "Beginners; huge integration library",
        "link": "https://zapier.com",
        "keyPrompt": {
          "core": "Automate this workflow with Zapier: [WORKFLOW]. Trigger: [TRIGGER]. Inputs: [INPUTS]. Desired output: [OUTPUT]. Conditions: [CONDITIONS]. Include error handling, notifications, logging, and a safe test procedure.",
          "refine": "Optimize this automation in Zapier: [CURRENT WORKFLOW]. Reduce manual steps, duplicate work, and failure points. Propose the simplest reliable workflow and explain each step."
        }
      },
      {
        "name": "n8n",
        "desc": "Open-source automation with self-hosting.",
        "price": "-",
        "rating": null,
        "best": "Privacy & technical control",
        "link": "https://n8n.io",
        "keyPrompt": {
          "core": "Automate this workflow with n8n: [WORKFLOW]. Trigger: [TRIGGER]. Inputs: [INPUTS]. Desired output: [OUTPUT]. Conditions: [CONDITIONS]. Include error handling, notifications, logging, and a safe test procedure.",
          "refine": "Optimize this automation in n8n: [CURRENT WORKFLOW]. Reduce manual steps, duplicate work, and failure points. Propose the simplest reliable workflow and explain each step."
        }
      },
      {
        "name": "Google Opal",
        "desc": "Google's no-code tool for building and sharing mini AI apps by chaining prompts and tools visually.",
        "price": "Free",
        "rating": 7,
        "best": "No-code AI mini-app builder",
        "link": "https://opal.withgoogle.com"
      }
    ]
  },
  {
    "title": "Marketing & E-commerce",
    "tools": [
      {
        "name": "Klaviyo AI",
        "desc": "Email marketing, customer analysis, and automation.",
        "price": "-",
        "rating": null,
        "best": "Online stores",
        "link": "https://www.klaviyo.com",
        "keyPrompt": {
          "core": "Use Klaviyo AI to create a practical growth plan for [PRODUCT / BUSINESS]. Target customer: [AUDIENCE]. Market: [MARKET]. Budget: [BUDGET]. Goal: [GOAL]. Give me prioritized actions, channels, messaging angles, KPIs, and a 30-day execution plan.",
          "refine": "Act as a performance marketer using Klaviyo AI. Analyze this offer: [OFFER]. Identify the strongest value proposition, objections, audience segments, creative angles, CTA, and experiments. Rank ideas by expected impact and ease of testing."
        }
      },
      {
        "name": "Tidio AI",
        "desc": "Automated customer service and chatbots.",
        "price": "-",
        "rating": null,
        "best": "Customer service & sales",
        "link": "https://www.tidio.com",
        "keyPrompt": {
          "core": "Use Tidio AI to create a practical growth plan for [PRODUCT / BUSINESS]. Target customer: [AUDIENCE]. Market: [MARKET]. Budget: [BUDGET]. Goal: [GOAL]. Give me prioritized actions, channels, messaging angles, KPIs, and a 30-day execution plan.",
          "refine": "Act as a performance marketer using Tidio AI. Analyze this offer: [OFFER]. Identify the strongest value proposition, objections, audience segments, creative angles, CTA, and experiments. Rank ideas by expected impact and ease of testing."
        }
      },
      {
        "name": "Canva Magic Studio",
        "desc": "Quickly designs posts and advertisements.",
        "price": "-",
        "rating": null,
        "best": "Fast ad creative",
        "link": "https://www.canva.com"
      },
      {
        "name": "HubSpot AI",
        "desc": "CRM, marketing, and sales in one platform.",
        "price": "-",
        "rating": null,
        "best": "Comprehensive marketing stack",
        "link": "https://www.hubspot.com",
        "keyPrompt": {
          "core": "Use HubSpot AI to create a practical growth plan for [PRODUCT / BUSINESS]. Target customer: [AUDIENCE]. Market: [MARKET]. Budget: [BUDGET]. Goal: [GOAL]. Give me prioritized actions, channels, messaging angles, KPIs, and a 30-day execution plan.",
          "refine": "Act as a performance marketer using HubSpot AI. Analyze this offer: [OFFER]. Identify the strongest value proposition, objections, audience segments, creative angles, CTA, and experiments. Rank ideas by expected impact and ease of testing."
        }
      },
      {
        "name": "CoSchedule",
        "desc": "Marketing calendar and content-organization platform for planning campaigns, social posts and blogs in one place.",
        "price": "Paid, free trial",
        "rating": 8,
        "best": "Marketing calendar & content planning",
        "link": "https://coschedule.com"
      },
      {
        "name": "Shopify",
        "desc": "Leading e-commerce platform for building and running an online store, from checkout to payments.",
        "price": "Paid, free trial",
        "rating": 9,
        "best": "Launching an online store",
        "link": "https://shopify.com"
      },
      {
        "name": "GoTrends",
        "desc": "Google Trends-powered keyword research app that surfaces trending search terms and business/SEO opportunities.",
        "price": "Free + paid",
        "rating": 7,
        "best": "Trend & keyword research",
        "link": "https://gotrends.app"
      },
      {
        "name": "Google Ads",
        "desc": "Google's advertising platform for running search, display and video ad campaigns.",
        "price": "Paid (pay per click)",
        "rating": 9,
        "best": "Paid search & display advertising",
        "link": "https://ads.google.com"
      },
      {
        "name": "Zeely",
        "desc": "Link-in-bio and mini storefront builder for creators to sell products and share links from one page.",
        "price": "Free + paid",
        "rating": 7,
        "best": "Link-in-bio storefront for creators",
        "link": "https://zeely.app"
      },
      {
        "name": "Arcads",
        "desc": "AI tool that generates UGC-style video ads using AI actors, without filming real people.",
        "price": "Paid, free trial",
        "rating": 8,
        "best": "AI UGC-style video ads",
        "link": "https://arcads.ai"
      },
      {
        "name": "Creatify",
        "desc": "AI platform that turns a product link into ready-to-run video ads for social platforms.",
        "price": "Free + paid",
        "rating": 8,
        "best": "AI product video ads",
        "link": "https://creatify.ai"
      },
      {
        "name": "Pencil",
        "desc": "AI ad-creative platform that generates and tests ad variations to find top-performing creatives.",
        "price": "Paid",
        "rating": 7,
        "best": "AI-generated ad creative testing",
        "link": "https://pencil.ai"
      },
      {
        "name": "Productscope AI",
        "desc": "AI tool for e-commerce sellers that generates product photos, listings and ad copy.",
        "price": "Free + paid",
        "rating": 7,
        "best": "AI product photos & listings",
        "link": "https://productscope.ai"
      },
      {
        "name": "Pippit AI",
        "desc": "CapCut's AI marketing video tool for generating product and ad videos quickly.",
        "price": "Free + paid",
        "rating": 7,
        "best": "AI marketing video generation",
        "link": "https://pippit.capcut.com"
      },
      {
        "name": "Predis.ai",
        "desc": "AI social media tool that generates posts, captions and short videos from a prompt or product link.",
        "price": "Free + paid",
        "rating": 8,
        "best": "AI social media content generation",
        "link": "https://predis.ai"
      },
      {
        "name": "Ocoya",
        "desc": "AI content creation and social media scheduling platform for planning and publishing posts.",
        "price": "Free + paid",
        "rating": 7,
        "best": "AI social content + scheduling",
        "link": "https://ocoya.com"
      },
      {
        "name": "Taplio",
        "desc": "AI-powered LinkedIn content and growth tool for writing posts and scheduling to build an audience.",
        "price": "Paid, free trial",
        "rating": 8,
        "best": "Growing a LinkedIn presence",
        "link": "https://taplio.com"
      },
      {
        "name": "Typefully",
        "desc": "Writing and scheduling tool for X/Twitter and LinkedIn threads with analytics.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Writing & scheduling social threads",
        "link": "https://typefully.com"
      },
      {
        "name": "Adfolio",
        "desc": "Curated gallery of high-performing ad creatives for marketing inspiration.",
        "price": "Free + paid",
        "rating": 7,
        "best": "Ad creative inspiration",
        "link": "https://adfolio.design"
      },
      {
        "name": "Anyword",
        "desc": "AI copywriting tool that predicts performance and generates marketing copy optimized for conversion.",
        "price": "Paid, free trial",
        "rating": 8,
        "best": "Performance-predicted ad copy",
        "link": "https://anyword.com"
      },
      {
        "name": "Pomelli",
        "desc": "Google's AI marketing tool that builds a brand profile and generates ready-to-use marketing content for small businesses.",
        "price": "Free",
        "rating": 7,
        "best": "AI marketing content for small business",
        "link": "https://pomelli.withgoogle.com"
      }
    ]
  },
  {
    "title": "Business",
    "tools": [
      {
        "name": "Microsoft Copilot for Business",
        "desc": "AI for Microsoft 365 organizations.",
        "price": "~$30/user/month",
        "rating": null,
        "best": "Microsoft 365 companies",
        "link": "https://copilot.microsoft.com",
        "keyPrompt": {
          "core": "Use Microsoft Copilot for Business to create a practical growth plan for [PRODUCT / BUSINESS]. Target customer: [AUDIENCE]. Market: [MARKET]. Budget: [BUDGET]. Goal: [GOAL]. Give me prioritized actions, channels, messaging angles, KPIs, and a 30-day execution plan.",
          "refine": "Act as a performance marketer using Microsoft Copilot for Business. Analyze this offer: [OFFER]. Identify the strongest value proposition, objections, audience segments, creative angles, CTA, and experiments. Rank ideas by expected impact and ease of testing."
        }
      },
      {
        "name": "ChatGPT Team / Enterprise",
        "desc": "AI for teams and organizations.",
        "price": "-",
        "rating": null,
        "best": "Analysis, writing, research, automation",
        "link": "https://openai.com/chatgpt/enterprise",
        "keyPrompt": {
          "core": "Use ChatGPT Team / Enterprise to create a practical growth plan for [PRODUCT / BUSINESS]. Target customer: [AUDIENCE]. Market: [MARKET]. Budget: [BUDGET]. Goal: [GOAL]. Give me prioritized actions, channels, messaging angles, KPIs, and a 30-day execution plan.",
          "refine": "Act as a performance marketer using ChatGPT Team / Enterprise. Analyze this offer: [OFFER]. Identify the strongest value proposition, objections, audience segments, creative angles, CTA, and experiments. Rank ideas by expected impact and ease of testing."
        }
      }
    ]
  },
  {
    "title": "Creating Complete Websites",
    "tools": [
      {
        "name": "Manus",
        "desc": "Builds a complete website/project from a text description.",
        "price": "-",
        "rating": null,
        "best": "Multi-stage automated builds",
        "link": "https://manus.im"
      },
      {
        "name": "Framer AI",
        "desc": "Creates and designs professional websites using AI.",
        "price": "-",
        "rating": null,
        "best": "Fast, polished design",
        "link": "https://www.framer.com/ai",
        "keyPrompt": {
          "core": "Design this project with Framer AI: [PROJECT]. Target audience: [AUDIENCE]. Brand/style: [STYLE]. Required elements: [ELEMENTS]. Create a clear visual/UX concept covering hierarchy, layout, typography, interactions, consistency, and the final user experience.",
          "refine": "Act as a senior designer using Framer AI. Review this concept: [CONCEPT]. Identify usability and visual weaknesses, then propose a stronger version with exact changes to layout, hierarchy, content, interactions, and visual consistency."
        }
      },
      {
        "name": "Wix AI / Wix ADI",
        "desc": "Creates a website based on your answers and description.",
        "price": "-",
        "rating": null,
        "best": "No-code website building",
        "link": "https://www.wix.com",
        "keyPrompt": {
          "core": "Design this project with Wix AI / Wix ADI: [PROJECT]. Target audience: [AUDIENCE]. Brand/style: [STYLE]. Required elements: [ELEMENTS]. Create a clear visual/UX concept covering hierarchy, layout, typography, interactions, consistency, and the final user experience.",
          "refine": "Act as a senior designer using Wix AI / Wix ADI. Review this concept: [CONCEPT]. Identify usability and visual weaknesses, then propose a stronger version with exact changes to layout, hierarchy, content, interactions, and visual consistency."
        }
      },
      {
        "name": "Andromo",
        "desc": "No-code Android app builder that lets you assemble a mobile app without writing code.",
        "price": "Free + paid",
        "rating": 6,
        "best": "No-code Android app building",
        "link": "https://andromo.com"
      },
      {
        "name": "Uiverse",
        "desc": "Free, open-source library of ready-to-use UI elements and CSS/Tailwind components.",
        "price": "Free",
        "rating": 8,
        "best": "Free UI components & CSS snippets",
        "link": "https://uiverse.io"
      },
      {
        "name": "Figma Make",
        "desc": "Figma's AI feature that turns designs and prompts into working app/website code.",
        "price": "Free + paid (Figma)",
        "rating": 8,
        "best": "Design-to-code app generation",
        "link": "https://figma.com/make"
      },
      {
        "name": "Musho AI",
        "desc": "AI landing page generator that creates copy, design and layout from a short prompt.",
        "price": "Free + paid",
        "rating": 7,
        "best": "AI landing page generation",
        "link": "https://musho.ai"
      },
      {
        "name": "Relume AI",
        "desc": "AI tool that generates website wireframes, sitemaps and content ready to import into Webflow/Figma.",
        "price": "Free + paid",
        "rating": 8,
        "best": "AI website wireframes & sitemaps",
        "link": "https://relume.io"
      },
      {
        "name": "Bolt.new",
        "desc": "AI full-stack app builder that generates and runs a working web app directly from a prompt.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Prompt-to-running web app",
        "link": "https://bolt.new"
      },
      {
        "name": "Framer",
        "desc": "AI-assisted website builder for designing and publishing production-ready sites without code.",
        "price": "Free + paid",
        "rating": 9,
        "best": "No-code AI website building",
        "link": "https://framer.com"
      },
      {
        "name": "TeleportHQ",
        "desc": "AI/no-code platform for building and exporting website and app code visually.",
        "price": "Free + paid",
        "rating": 7,
        "best": "Visual website/app builder",
        "link": "https://teleporthq.io"
      },
      {
        "name": "Blink.new",
        "desc": "AI full-stack app builder that generates a working web app from a text prompt.",
        "price": "Free + paid",
        "rating": 7,
        "best": "Prompt-to-app builder",
        "link": "https://blink.new"
      }
    ]
  },
  {
    "title": "Text-to-Manga / Comics",
    "tools": [
      {
        "name": "ComicsAI",
        "desc": "Turns descriptions into comics/manga with consistent characters.",
        "price": "Free (60 credits); Pro ~$12.99/mo",
        "rating": null,
        "best": "Creating a complete manga/comic",
        "link": "https://www.comicsai.com",
        "keyPrompt": {
          "core": "Design this project with ComicsAI: [PROJECT]. Target audience: [AUDIENCE]. Brand/style: [STYLE]. Required elements: [ELEMENTS]. Create a clear visual/UX concept covering hierarchy, layout, typography, interactions, consistency, and the final user experience.",
          "refine": "Act as a senior designer using ComicsAI. Review this concept: [CONCEPT]. Identify usability and visual weaknesses, then propose a stronger version with exact changes to layout, hierarchy, content, interactions, and visual consistency."
        }
      },
      {
        "name": "LlamaGen.ai",
        "desc": "Creates comics from text.",
        "price": "Free Forever (1,000 credits); plans from ~$11/mo",
        "rating": null,
        "best": "Comic generation",
        "link": "https://llamagen.ai",
        "keyPrompt": {
          "core": "Design this project with LlamaGen.ai: [PROJECT]. Target audience: [AUDIENCE]. Brand/style: [STYLE]. Required elements: [ELEMENTS]. Create a clear visual/UX concept covering hierarchy, layout, typography, interactions, consistency, and the final user experience.",
          "refine": "Act as a senior designer using LlamaGen.ai. Review this concept: [CONCEPT]. Identify usability and visual weaknesses, then propose a stronger version with exact changes to layout, hierarchy, content, interactions, and visual consistency."
        }
      },
      {
        "name": "Yollo AI",
        "desc": "Multi-purpose text-to-image/video/music platform.",
        "price": "From $9.90/mo (Starter)",
        "rating": null,
        "best": "Visual storytelling",
        "link": "https://www.yollo.ai",
        "keyPrompt": {
          "core": "Design this project with Yollo AI: [PROJECT]. Target audience: [AUDIENCE]. Brand/style: [STYLE]. Required elements: [ELEMENTS]. Create a clear visual/UX concept covering hierarchy, layout, typography, interactions, consistency, and the final user experience.",
          "refine": "Act as a senior designer using Yollo AI. Review this concept: [CONCEPT]. Identify usability and visual weaknesses, then propose a stronger version with exact changes to layout, hierarchy, content, interactions, and visual consistency."
        }
      },
      {
        "name": "SoulGen",
        "desc": "Creates images, characters, and visual stories from descriptions.",
        "price": "-",
        "rating": null,
        "best": "Character & scene creation",
        "link": "https://www.soulgen.net",
        "keyPrompt": {
          "core": "Design this project with SoulGen: [PROJECT]. Target audience: [AUDIENCE]. Brand/style: [STYLE]. Required elements: [ELEMENTS]. Create a clear visual/UX concept covering hierarchy, layout, typography, interactions, consistency, and the final user experience.",
          "refine": "Act as a senior designer using SoulGen. Review this concept: [CONCEPT]. Identify usability and visual weaknesses, then propose a stronger version with exact changes to layout, hierarchy, content, interactions, and visual consistency."
        }
      }
    ]
  },
  {
    "title": "Maps & Places Off the Beaten Path",
    "tools": [
      {
        "name": "Google Maps + Ask Maps",
        "desc": "Searches for places using natural-language descriptions.",
        "price": "-",
        "rating": null,
        "best": "Descriptive place search",
        "link": "https://maps.google.com",
        "keyPrompt": {
          "core": "Plan [TRIP / OUTING] with Google Maps + Ask Maps. Location: [PLACE]. Dates: [DATES]. Budget: [BUDGET]. Interests: [INTERESTS]. Mobility: [TRANSPORT]. Prioritize practical logistics, opening hours where verified, realistic travel times, and a balanced itinerary.",
          "refine": "Use Google Maps + Ask Maps to compare options in [LOCATION]. Criteria: [PRICE / QUALITY / DISTANCE / REVIEWS / STYLE]. Shortlist the best choices, explain the trade-offs, and clearly flag information that should be verified before booking."
        }
      },
      {
        "name": "Haze Explr",
        "desc": "Community map for abandoned places and Urbex locations.",
        "price": "Free",
        "rating": 8,
        "best": "Discovering hidden places",
        "link": "https://hazeexplr.com/",
        "keyPrompt": {
          "core": "Plan [TRIP / OUTING] with Haze Explr. Location: [PLACE]. Dates: [DATES]. Budget: [BUDGET]. Interests: [INTERESTS]. Mobility: [TRANSPORT]. Prioritize practical logistics, opening hours where verified, realistic travel times, and a balanced itinerary.",
          "refine": "Use Haze Explr to compare options in [LOCATION]. Criteria: [PRICE / QUALITY / DISTANCE / REVIEWS / STYLE]. Shortlist the best choices, explain the trade-offs, and clearly flag information that should be verified before booking."
        }
      },
      {
        "name": "Around Us",
        "desc": "12M+ places with a Tourist Score to spot local vs. tourist spots.",
        "price": "Free",
        "rating": 8,
        "best": "Avoiding tourist traps",
        "link": "https://aroundus.com/",
        "keyPrompt": {
          "core": "Plan [TRIP / OUTING] with Around Us. Location: [PLACE]. Dates: [DATES]. Budget: [BUDGET]. Interests: [INTERESTS]. Mobility: [TRANSPORT]. Prioritize practical logistics, opening hours where verified, realistic travel times, and a balanced itinerary.",
          "refine": "Use Around Us to compare options in [LOCATION]. Criteria: [PRICE / QUALITY / DISTANCE / REVIEWS / STYLE]. Shortlist the best choices, explain the trade-offs, and clearly flag information that should be verified before booking."
        }
      },
      {
        "name": "Wrinkles",
        "desc": "AI audio guide that tells stories about places as you move.",
        "price": "-",
        "rating": 8,
        "best": "Exploring a city hands-free",
        "link": "https://wrinkles.app/",
        "keyPrompt": {
          "core": "Plan [TRIP / OUTING] with Wrinkles. Location: [PLACE]. Dates: [DATES]. Budget: [BUDGET]. Interests: [INTERESTS]. Mobility: [TRANSPORT]. Prioritize practical logistics, opening hours where verified, realistic travel times, and a balanced itinerary.",
          "refine": "Use Wrinkles to compare options in [LOCATION]. Criteria: [PRICE / QUALITY / DISTANCE / REVIEWS / STYLE]. Shortlist the best choices, explain the trade-offs, and clearly flag information that should be verified before booking."
        }
      }
    ]
  },
  {
    "title": "Online Work & Business Ideas",
    "tools": [
      {
        "name": "ChatGPT / Claude",
        "desc": "Analyzes skills, suggests business models, writes proposals.",
        "price": "-",
        "rating": 10,
        "best": "Freelancing & digital products",
        "link": "https://chatgpt.com/",
        "keyPrompt": {
          "core": "Use ChatGPT / Claude to create a practical growth plan for [PRODUCT / BUSINESS]. Target customer: [AUDIENCE]. Market: [MARKET]. Budget: [BUDGET]. Goal: [GOAL]. Give me prioritized actions, channels, messaging angles, KPIs, and a 30-day execution plan.",
          "refine": "Act as a performance marketer using ChatGPT / Claude. Analyze this offer: [OFFER]. Identify the strongest value proposition, objections, audience segments, creative angles, CTA, and experiments. Rank ideas by expected impact and ease of testing."
        }
      },
      {
        "name": "Upwork / Fiverr",
        "desc": "Freelancing platforms; AI can help write proposals & pricing.",
        "price": "Free registration + commission on earnings",
        "rating": null,
        "best": "Finding freelance clients",
        "link": "https://www.upwork.com",
        "keyPrompt": {
          "core": "Use Upwork / Fiverr to create a practical growth plan for [PRODUCT / BUSINESS]. Target customer: [AUDIENCE]. Market: [MARKET]. Budget: [BUDGET]. Goal: [GOAL]. Give me prioritized actions, channels, messaging angles, KPIs, and a 30-day execution plan.",
          "refine": "Act as a performance marketer using Upwork / Fiverr. Analyze this offer: [OFFER]. Identify the strongest value proposition, objections, audience segments, creative angles, CTA, and experiments. Rank ideas by expected impact and ease of testing."
        }
      }
    ]
  },
  {
    "title": "Legal Consulting",
    "tools": [
      {
        "name": "AI Lawyer",
        "desc": "Contracts, employment, family matters, general legal info.",
        "price": "Limited initial consultation",
        "rating": 8,
        "best": "Not a substitute for a licensed lawyer",
        "link": "https://ailawyer.pro/",
        "keyPrompt": {
          "core": "Use AI Lawyer for informational legal research about [ISSUE] in [COUNTRY / JURISDICTION]. Explain the relevant concepts, documents, deadlines, risks, and questions I should verify. Do not assume facts that are not provided and flag where a qualified professional is needed.",
          "refine": "Review this contract or legal text with AI Lawyer: [TEXT]. Identify unclear clauses, obligations, potential risks, missing information, and points to discuss with a qualified professional. Do not invent legal rules."
        }
      },
      {
        "name": "ChatGPT / Claude",
        "desc": "Explains legal terms, documents, and drafts letters.",
        "price": "-",
        "rating": 10,
        "best": "Initial analysis & drafting",
        "link": "https://chatgpt.com/"
      }
    ]
  },
  {
    "title": "Travel Planning & Recommendations",
    "tools": [
      {
        "name": "Manus",
        "desc": "Builds a complete trip (hotels, transport, schedule, places) from one sentence.",
        "price": "-",
        "rating": null,
        "best": "End-to-end trip planning",
        "link": "https://manus.im"
      },
      {
        "name": "Google Maps + Gemini",
        "desc": "Suggests places, builds routes by location and requirements.",
        "price": "-",
        "rating": 10,
        "best": "Route & place planning",
        "link": "https://maps.google.com/",
        "keyPrompt": {
          "core": "Plan [TRIP / OUTING] with Google Maps + Gemini. Location: [PLACE]. Dates: [DATES]. Budget: [BUDGET]. Interests: [INTERESTS]. Mobility: [TRANSPORT]. Prioritize practical logistics, opening hours where verified, realistic travel times, and a balanced itinerary.",
          "refine": "Use Google Maps + Gemini to compare options in [LOCATION]. Criteria: [PRICE / QUALITY / DISTANCE / REVIEWS / STYLE]. Shortlist the best choices, explain the trade-offs, and clearly flag information that should be verified before booking."
        }
      },
      {
        "name": "Furkot",
        "desc": "Road-trip planning tool for mapping routes, stops and overnight stays.",
        "price": "Free + paid",
        "rating": 7,
        "best": "Planning multi-stop road trips",
        "link": "https://trips.furkot.com"
      }
    ]
  },
  {
    "title": "Cooking & Nutrition",
    "tools": [
      {
        "name": "ChatGPT / Gemini (with images)",
        "desc": "Suggests recipes from photographed ingredients and adapts them.",
        "price": "-",
        "rating": 10,
        "best": "Cooking with what you have",
        "link": "https://chatgpt.com/",
        "keyPrompt": {
          "core": "Use ChatGPT / Gemini (with images) to help with [MEAL / PRODUCT]. Goal: [GOAL]. Ingredients or product data: [DATA]. Constraints: [ALLERGIES / BUDGET / EQUIPMENT / PREFERENCES]. Give a practical, clearly structured answer and state any important uncertainty.",
          "refine": "Compare [OPTION A], [OPTION B], and [OPTION C] with ChatGPT / Gemini (with images). Evaluate [PRICE / INGREDIENTS / NUTRITION / FEATURES] using the same criteria, then summarize the key trade-offs in a table."
        }
      },
      {
        "name": "Cronometer",
        "desc": "Tracks calories, vitamins, and minerals.",
        "price": "Limited free version + Gold",
        "rating": null,
        "best": "Accurate nutrition tracking",
        "link": "https://cronometer.com",
        "keyPrompt": {
          "core": "Use Cronometer to help with [MEAL / PRODUCT]. Goal: [GOAL]. Ingredients or product data: [DATA]. Constraints: [ALLERGIES / BUDGET / EQUIPMENT / PREFERENCES]. Give a practical, clearly structured answer and state any important uncertainty.",
          "refine": "Compare [OPTION A], [OPTION B], and [OPTION C] with Cronometer. Evaluate [PRICE / INGREDIENTS / NUTRITION / FEATURES] using the same criteria, then summarize the key trade-offs in a table."
        }
      }
    ]
  },
  {
    "title": "Fitness / Bodybuilding",
    "tools": [
      {
        "name": "Fitbod",
        "desc": "Personalized training plans that adapt to your progress & equipment.",
        "price": "~$12.99/mo or $79.99/yr",
        "rating": null,
        "best": "Weight training & the gym",
        "link": "https://fitbod.me",
        "keyPrompt": {
          "core": "Use Fitbod to create a general fitness plan for [GOAL]. Experience level: [LEVEL]. Available equipment: [EQUIPMENT]. Schedule: [SCHEDULE]. Prioritize gradual progression, recovery, technique, and realistic consistency. Avoid extreme or unsafe recommendations.",
          "refine": "Review this training routine with Fitbod: [ROUTINE]. Identify balance, progression, recovery, and practicality issues, then suggest reasonable adjustments. Keep the focus on general fitness rather than diagnosing injuries or medical conditions."
        }
      },
      {
        "name": "MyFitnessPal",
        "desc": "Tracks calories and macros with barcode/image features.",
        "price": "Free with ads; Premium ~$19.99/mo",
        "rating": null,
        "best": "Huge food database",
        "link": "https://www.myfitnesspal.com",
        "keyPrompt": {
          "core": "Use MyFitnessPal to create a general fitness plan for [GOAL]. Experience level: [LEVEL]. Available equipment: [EQUIPMENT]. Schedule: [SCHEDULE]. Prioritize gradual progression, recovery, technique, and realistic consistency. Avoid extreme or unsafe recommendations.",
          "refine": "Review this training routine with MyFitnessPal: [ROUTINE]. Identify balance, progression, recovery, and practicality issues, then suggest reasonable adjustments. Keep the focus on general fitness rather than diagnosing injuries or medical conditions."
        }
      }
    ]
  },
  {
    "title": "Meetings & Gatherings",
    "tools": [
      {
        "name": "Otter.ai",
        "desc": "Meeting transcription and summaries.",
        "price": "Limited free plan",
        "rating": null,
        "best": "High accuracy in English",
        "link": "https://otter.ai",
        "keyPrompt": {
          "core": "Use Otter.ai for this task: [TASK]. Context: Meeting transcription and summaries. My objective is [OBJECTIVE]. Give me a clear, practical result, state assumptions, and use an output format that is easy to act on.",
          "refine": "Optimize my workflow in Otter.ai for [GOAL]. Starting point: [CURRENT SITUATION]. Constraints: [CONSTRAINTS]. Propose the best approach, explain the key steps, and finish with a concise checklist."
        }
      },
      {
        "name": "Fireflies.ai",
        "desc": "Records and analyzes meetings; searchable history.",
        "price": "-",
        "rating": null,
        "best": "Zoom / Google Meet / Teams",
        "link": "https://fireflies.ai",
        "keyPrompt": {
          "core": "Use Fireflies.ai for this task: [TASK]. Context: Records and analyzes meetings; searchable history. My objective is [OBJECTIVE]. Give me a clear, practical result, state assumptions, and use an output format that is easy to act on.",
          "refine": "Optimize my workflow in Fireflies.ai for [GOAL]. Starting point: [CURRENT SITUATION]. Constraints: [CONSTRAINTS]. Propose the best approach, explain the key steps, and finish with a concise checklist."
        }
      },
      {
        "name": "Gamma",
        "desc": "Creates presentations and visual materials from an idea.",
        "price": "-",
        "rating": 9,
        "best": "Fast presentation creation",
        "link": "https://gamma.app/",
        "keyPrompt": {
          "core": "Use Gamma for this task: [TASK]. Context: Creates presentations and visual materials from an idea. My objective is [OBJECTIVE]. Give me a clear, practical result, state assumptions, and use an output format that is easy to act on.",
          "refine": "Optimize my workflow in Gamma for [GOAL]. Starting point: [CURRENT SITUATION]. Constraints: [CONSTRAINTS]. Propose the best approach, explain the key steps, and finish with a concise checklist."
        }
      },
      {
        "name": "Tome",
        "desc": "Creates presentations and narrative materials with AI.",
        "price": "-",
        "rating": 9,
        "best": "Presentations & storytelling",
        "link": "https://tome.app/",
        "keyPrompt": {
          "core": "Use Tome for this task: [TASK]. Context: Creates presentations and narrative materials with AI. My objective is [OBJECTIVE]. Give me a clear, practical result, state assumptions, and use an output format that is easy to act on.",
          "refine": "Optimize my workflow in Tome for [GOAL]. Starting point: [CURRENT SITUATION]. Constraints: [CONSTRAINTS]. Propose the best approach, explain the key steps, and finish with a concise checklist."
        }
      }
    ]
  },
  {
    "title": "Finance & Accounting",
    "tools": [
      {
        "name": "Zoho Books",
        "desc": "Accounting, invoicing, and financial management.",
        "price": "-",
        "rating": null,
        "best": "Small businesses; multi-currency",
        "link": "https://www.zoho.com/books",
        "keyPrompt": {
          "core": "Analyze this dataset in Zoho Books: [DATA / FILE]. Objective: [OBJECTIVE]. Clean obvious inconsistencies, define the required calculations, identify the most important KPIs, and explain the results. Provide formulas or step-by-step calculations where useful.",
          "refine": "Build a decision-ready analysis in Zoho Books from [DATA]. Segment the results by [DIMENSIONS], identify trends/outliers, calculate [KPIs], and finish with 5 actionable recommendations. State assumptions and data limitations."
        }
      },
      {
        "name": "Cleo",
        "desc": "Personal expense assistant with a conversational interface.",
        "price": "Free basic + paid plans",
        "rating": 8,
        "best": "Everyday budgeting",
        "link": "https://www.meetcleo.com/",
        "keyPrompt": {
          "core": "Analyze this dataset in Cleo: [DATA / FILE]. Objective: [OBJECTIVE]. Clean obvious inconsistencies, define the required calculations, identify the most important KPIs, and explain the results. Provide formulas or step-by-step calculations where useful.",
          "refine": "Build a decision-ready analysis in Cleo from [DATA]. Segment the results by [DIMENSIONS], identify trends/outliers, calculate [KPIs], and finish with 5 actionable recommendations. State assumptions and data limitations."
        }
      },
      {
        "name": "QuickBooks",
        "desc": "Accounting, invoicing, expenses, reports, and accounts.",
        "price": "-",
        "rating": null,
        "best": "Companies & business owners",
        "link": "https://quickbooks.intuit.com",
        "keyPrompt": {
          "core": "Analyze this dataset in QuickBooks: [DATA / FILE]. Objective: [OBJECTIVE]. Clean obvious inconsistencies, define the required calculations, identify the most important KPIs, and explain the results. Provide formulas or step-by-step calculations where useful.",
          "refine": "Build a decision-ready analysis in QuickBooks from [DATA]. Segment the results by [DIMENSIONS], identify trends/outliers, calculate [KPIs], and finish with 5 actionable recommendations. State assumptions and data limitations."
        }
      },
      {
        "name": "Mercury",
        "desc": "Online banking platform built for startups, with checking accounts and finance tools.",
        "price": "Free (fees may apply)",
        "rating": 8,
        "best": "Startup banking",
        "link": "https://mercury.com"
      }
    ]
  },
  {
    "title": "Product Comparison (Price / Ingredients / Nutrition)",
    "tools": [
      {
        "name": "Yuka",
        "desc": "Scans barcodes of food/beauty products and rates them.",
        "price": "-",
        "rating": null,
        "best": "Large ingredient database",
        "link": "https://yuka.io",
        "keyPrompt": {
          "core": "Use Yuka to help with [MEAL / PRODUCT]. Goal: [GOAL]. Ingredients or product data: [DATA]. Constraints: [ALLERGIES / BUDGET / EQUIPMENT / PREFERENCES]. Give a practical, clearly structured answer and state any important uncertainty.",
          "refine": "Compare [OPTION A], [OPTION B], and [OPTION C] with Yuka. Evaluate [PRICE / INGREDIENTS / NUTRITION / FEATURES] using the same criteria, then summarize the key trade-offs in a table."
        }
      },
      {
        "name": "Think Dirty",
        "desc": "Analyzes cosmetics/cleaning ingredients and chemical risk.",
        "price": "Free",
        "rating": null,
        "best": "Ingredient safety checks",
        "link": "https://www.thinkdirtyapp.com",
        "keyPrompt": {
          "core": "Use Think Dirty to help with [MEAL / PRODUCT]. Goal: [GOAL]. Ingredients or product data: [DATA]. Constraints: [ALLERGIES / BUDGET / EQUIPMENT / PREFERENCES]. Give a practical, clearly structured answer and state any important uncertainty.",
          "refine": "Compare [OPTION A], [OPTION B], and [OPTION C] with Think Dirty. Evaluate [PRICE / INGREDIENTS / NUTRITION / FEATURES] using the same criteria, then summarize the key trade-offs in a table."
        }
      },
      {
        "name": "ChatGPT / Gemini",
        "desc": "Compares photographed products on price, ingredients, quality.",
        "price": "-",
        "rating": 10,
        "best": "Quick side-by-side comparisons",
        "link": "https://chatgpt.com/",
        "keyPrompt": {
          "core": "Use ChatGPT / Gemini to help with [MEAL / PRODUCT]. Goal: [GOAL]. Ingredients or product data: [DATA]. Constraints: [ALLERGIES / BUDGET / EQUIPMENT / PREFERENCES]. Give a practical, clearly structured answer and state any important uncertainty.",
          "refine": "Compare [OPTION A], [OPTION B], and [OPTION C] with ChatGPT / Gemini. Evaluate [PRICE / INGREDIENTS / NUTRITION / FEATURES] using the same criteria, then summarize the key trade-offs in a table."
        }
      }
    ]
  },
  {
    "title": "Fashion, Clothing & Colors",
    "tools": [
      {
        "name": "Stitch Fix / Lookiero",
        "desc": "Clothing suggestions from algorithms + human stylists.",
        "price": "-",
        "rating": null,
        "best": "Personalized styling",
        "link": "https://www.stitchfix.com",
        "keyPrompt": {
          "core": "Use Stitch Fix / Lookiero to create a practical style plan for [OCCASION / GOAL]. Items/products available: [ITEMS]. Preferred aesthetic: [STYLE]. Budget: [BUDGET]. Focus on coordination, comfort, context, and practical choices rather than changing my body.",
          "refine": "Help me compare these options with Stitch Fix / Lookiero: [OPTIONS]. Evaluate color coordination, versatility, occasion fit, maintenance, and value. Give a concise recommendation with alternatives."
        }
      },
      {
        "name": "ChatGPT / Gemini (with images)",
        "desc": "Suggests outfits, colors, and compares pieces.",
        "price": "-",
        "rating": 10,
        "best": "Wardrobe planning",
        "link": "https://chatgpt.com/"
      }
    ]
  },
  {
    "title": "Crafts & Manual Trades",
    "tools": [
      {
        "name": "Pinterest Visual Search + AI",
        "desc": "Searches by image for similar project & craft ideas.",
        "price": "-",
        "rating": null,
        "best": "Visual project inspiration",
        "link": "https://www.pinterest.com",
        "keyPrompt": {
          "core": "Use Pinterest Visual Search + AI to plan [PROJECT]. Goal: [GOAL]. Site/material constraints: [CONSTRAINTS]. Produce a clear concept, materials/tools list, sequence of work, measurements or assumptions, and quality/safety checkpoints. Flag anything requiring a qualified professional.",
          "refine": "Review this project plan with Pinterest Visual Search + AI: [PLAN]. Check logic, dimensions/assumptions, material choices, sequencing, and practical risks. Identify what should be verified before work begins."
        }
      },
      {
        "name": "ChatGPT / Claude",
        "desc": "Explains sewing, carpentry, repairs, and troubleshooting.",
        "price": "-",
        "rating": 10,
        "best": "Step-by-step problem solving",
        "link": "https://chatgpt.com/"
      }
    ]
  },
  {
    "title": "3D Games & Virtual Worlds",
    "tools": [
      {
        "name": "Rosebud AI",
        "desc": "Creates simple games and 3D worlds from text descriptions.",
        "price": "-",
        "rating": null,
        "best": "Beginners",
        "link": "https://rosebud.ai",
        "keyPrompt": {
          "core": "Design this project with Rosebud AI: [PROJECT]. Target audience: [AUDIENCE]. Brand/style: [STYLE]. Required elements: [ELEMENTS]. Create a clear visual/UX concept covering hierarchy, layout, typography, interactions, consistency, and the final user experience.",
          "refine": "Act as a senior designer using Rosebud AI. Review this concept: [CONCEPT]. Identify usability and visual weaknesses, then propose a stronger version with exact changes to layout, hierarchy, content, interactions, and visual consistency."
        }
      },
      {
        "name": "Meshy AI",
        "desc": "Creates 3D models from text or images.",
        "price": "-",
        "rating": null,
        "best": "Game models & 3D worlds",
        "link": "https://www.meshy.ai",
        "keyPrompt": {
          "core": "Design this project with Meshy AI: [PROJECT]. Target audience: [AUDIENCE]. Brand/style: [STYLE]. Required elements: [ELEMENTS]. Create a clear visual/UX concept covering hierarchy, layout, typography, interactions, consistency, and the final user experience.",
          "refine": "Act as a senior designer using Meshy AI. Review this concept: [CONCEPT]. Identify usability and visual weaknesses, then propose a stronger version with exact changes to layout, hierarchy, content, interactions, and visual consistency."
        }
      },
      {
        "name": "Spline AI",
        "desc": "AI-assisted 3D design tool for creating interactive 3D scenes and objects for the web.",
        "price": "Free + paid",
        "rating": 8,
        "best": "AI-assisted 3D design",
        "link": "https://spline.design"
      },
      {
        "name": "Meshy AI",
        "desc": "AI tool that generates 3D models and textures from text or images.",
        "price": "Free + paid",
        "rating": 8,
        "best": "Text/image to 3D model generation",
        "link": "https://meshy.ai"
      },
      {
        "name": "Dungeon Scrawl",
        "desc": "Free browser tool for drawing fantasy maps and dungeons for tabletop RPGs.",
        "price": "Free",
        "rating": 8,
        "best": "Drawing tabletop RPG maps",
        "link": "https://dungeonscrawl.com"
      }
    ]
  },
  {
    "title": "Space, Galaxies & Astronomy",
    "tools": [
      {
        "name": "Star Walk 2",
        "desc": "Point your phone at the sky to identify stars and planets.",
        "price": "Free + Pro",
        "rating": 9,
        "best": "Direct sky identification",
        "link": "https://starwalk.space/en/star-walk-2",
        "keyPrompt": {
          "core": "Use Star Walk 2 to explain/research [TOPIC]. Start with a concise overview, then explain the mechanism or historical/geographical context step by step. Distinguish established facts from hypotheses and include key dates, terms, or measurements where useful.",
          "refine": "Create a structured deep-dive on [TOPIC] with Star Walk 2. Cover background, major evidence, competing interpretations, important milestones, and a short summary of the most important conclusions."
        }
      },
      {
        "name": "ChatGPT / Claude",
        "desc": "Explains the solar system, stars, black holes, astrophysics.",
        "price": "-",
        "rating": 10,
        "best": "Learning astronomy concepts",
        "link": "https://chatgpt.com/"
      },
      {
        "name": "European Space Agency",
        "desc": "Official European Space Agency portal with space news, mission data and educational resources.",
        "price": "Free",
        "rating": 8,
        "best": "Official space agency news & data",
        "link": "https://esa.int"
      }
    ]
  },
  {
    "title": "History, Geography & Plate Tectonics",
    "tools": [
      {
        "name": "NotebookLM",
        "desc": "Turns uploaded books/articles/sources into summaries and audio.",
        "price": "-",
        "rating": null,
        "best": "Studying primary sources",
        "link": "https://notebooklm.google.com"
      },
      {
        "name": "ChatGPT / Claude / Gemini",
        "desc": "Studies historical events, civilizations, geography, tectonics.",
        "price": "-",
        "rating": 10,
        "best": "Connecting historical & geographic events",
        "link": "https://chatgpt.com/",
        "keyPrompt": {
          "core": "Use ChatGPT / Claude / Gemini to explain/research [TOPIC]. Start with a concise overview, then explain the mechanism or historical/geographical context step by step. Distinguish established facts from hypotheses and include key dates, terms, or measurements where useful.",
          "refine": "Create a structured deep-dive on [TOPIC] with ChatGPT / Claude / Gemini. Cover background, major evidence, competing interpretations, important milestones, and a short summary of the most important conclusions."
        }
      }
    ]
  },
  {
    "title": "Makeup, Skincare & Hair Care",
    "tools": [
      {
        "name": "YouCam Makeup",
        "desc": "Virtually tries makeup via camera and analyzes skin with AI.",
        "price": "-",
        "rating": null,
        "best": "Virtual try-on",
        "link": "https://www.perfectcorp.com/consumer/apps/ymk",
        "keyPrompt": {
          "core": "Use YouCam Makeup to create a practical style plan for [OCCASION / GOAL]. Items/products available: [ITEMS]. Preferred aesthetic: [STYLE]. Budget: [BUDGET]. Focus on coordination, comfort, context, and practical choices rather than changing my body.",
          "refine": "Help me compare these options with YouCam Makeup: [OPTIONS]. Evaluate color coordination, versatility, occasion fit, maintenance, and value. Give a concise recommendation with alternatives."
        }
      },
      {
        "name": "Perfect365",
        "desc": "Virtually tries makeup and hairstyles.",
        "price": "Free with ads",
        "rating": null,
        "best": "Quick virtual looks",
        "link": "https://www.perfect365.com",
        "keyPrompt": {
          "core": "Use Perfect365 to create a practical style plan for [OCCASION / GOAL]. Items/products available: [ITEMS]. Preferred aesthetic: [STYLE]. Budget: [BUDGET]. Focus on coordination, comfort, context, and practical choices rather than changing my body.",
          "refine": "Help me compare these options with Perfect365: [OPTIONS]. Evaluate color coordination, versatility, occasion fit, maintenance, and value. Give a concise recommendation with alternatives."
        }
      },
      {
        "name": "ChatGPT / Gemini",
        "desc": "Analyzes a product/appearance photo for general care suggestions.",
        "price": "-",
        "rating": 10,
        "best": "General styling suggestions",
        "link": "https://chatgpt.com/"
      }
    ]
  },
  {
    "title": "Transportation in Europe, America & Canada",
    "tools": [
      {
        "name": "Citymapper",
        "desc": "Metro, buses, trains, bicycles, and walking directions.",
        "price": "-",
        "rating": null,
        "best": "Major cities",
        "link": "https://citymapper.com",
        "keyPrompt": {
          "core": "Use Citymapper to check the current status of [FLIGHT / TRAIN / VESSEL / ROUTE]. Identifier: [NUMBER / NAME]. Date/time: [DATE]. Summarize current status, scheduled vs actual timing, and any relevant disruption information. Clearly label live data versus estimates.",
          "refine": "Research [ROUTE / JOURNEY] with Citymapper. Date: [DATE]. Compare practical options by duration, reliability, transfers, cost if available, and current disruptions. Present the best options in a simple table."
        }
      },
      {
        "name": "Google Maps",
        "desc": "Wide transit coverage worldwide.",
        "price": "-",
        "rating": null,
        "best": "General navigation",
        "link": "https://maps.google.com",
        "keyPrompt": {
          "core": "Use Google Maps to check the current status of [FLIGHT / TRAIN / VESSEL / ROUTE]. Identifier: [NUMBER / NAME]. Date/time: [DATE]. Summarize current status, scheduled vs actual timing, and any relevant disruption information. Clearly label live data versus estimates.",
          "refine": "Research [ROUTE / JOURNEY] with Google Maps. Date: [DATE]. Compare practical options by duration, reliability, transfers, cost if available, and current disruptions. Present the best options in a simple table."
        }
      },
      {
        "name": "Moovit",
        "desc": "Public transportation routes and schedules.",
        "price": "-",
        "rating": null,
        "best": "Local transit planning",
        "link": "https://moovitapp.com",
        "keyPrompt": {
          "core": "Use Moovit to check the current status of [FLIGHT / TRAIN / VESSEL / ROUTE]. Identifier: [NUMBER / NAME]. Date/time: [DATE]. Summarize current status, scheduled vs actual timing, and any relevant disruption information. Clearly label live data versus estimates.",
          "refine": "Research [ROUTE / JOURNEY] with Moovit. Date: [DATE]. Compare practical options by duration, reliability, transfers, cost if available, and current disruptions. Present the best options in a simple table."
        }
      }
    ]
  },
  {
    "title": "Medical, Veterinary & Child-Care Questions",
    "tools": [
      {
        "name": "ChatGPT / Gemini",
        "desc": "Initial explanation of symptoms, results, and general animal/child guidance.",
        "price": "-",
        "rating": 10,
        "best": "Never a substitute for a doctor/vet — emergencies need professional care",
        "link": "https://chatgpt.com/"
      },
      {
        "name": "What to Expect",
        "desc": "Tracks child development by age with stage-related advice.",
        "price": "-",
        "rating": null,
        "best": "Parenting guidance by age",
        "link": "https://www.whattoexpect.com",
        "keyPrompt": {
          "core": "Use What to Expect for general health information about [QUESTION]. Explain possible general causes, what information matters, common next steps, and warning signs that warrant prompt professional care. Do not diagnose or replace a qualified clinician.",
          "refine": "Help me prepare questions for a qualified healthcare professional about [ISSUE]. Using What to Expect, organize the relevant history, symptoms/questions, medications or factors to mention, and what information would help the consultation."
        }
      },
      {
        "name": "MediSummary",
        "desc": "Built for doctors and medical research, not a substitute for medical judgment.",
        "price": "-",
        "rating": null,
        "best": "Paper summaries & PubMed references",
        "link": "https://www.medisummary.com"
      },
      {
        "name": "RxNorm",
        "desc": "U.S. National Library of Medicine database of standardized names for clinical drugs, used to check exact drug names, ingredients, and how different brand/generic names relate to each other.",
        "price": "Free",
        "rating": 8,
        "best": "Verifying exact drug names & ingredients",
        "link": "https://www.nlm.nih.gov/research/umls/rxnorm/index.html"
      },
      {
        "name": "NPI Registry",
        "desc": "Official U.S. lookup (NPPES/CMS) for a healthcare provider's or organization's National Provider Identifier, specialty, and practice address.",
        "price": "Free",
        "rating": 8,
        "best": "Verifying a U.S. doctor or clinic's official identity",
        "link": "https://npiregistry.cms.hhs.gov/"
      },
      {
        "name": "CMS Coverage (Medicare Coverage Database)",
        "desc": "Searchable database of Medicare national and local coverage determinations, showing whether a specific test, treatment, or service is covered and under what conditions.",
        "price": "Free",
        "rating": 7,
        "best": "Checking if Medicare covers a treatment",
        "link": "https://www.cms.gov/medicare-coverage-database/"
      },
      {
        "name": "DailyMed",
        "desc": "NLM's official source for FDA-approved drug labeling, letting you look up the full package insert: dosage, side effects, warnings, and interactions for a specific medication.",
        "price": "Free",
        "rating": 8,
        "best": "Reading the official label of a medication",
        "link": "https://dailymed.nlm.nih.gov/dailymed/"
      },
      {
        "name": "Medicare Care Compare",
        "desc": "Official U.S. government tool to compare the quality and ratings of Medicare-certified hospitals, nursing homes, home health agencies, and doctors near you.",
        "price": "Free",
        "rating": 8,
        "best": "Comparing hospitals, doctors & nursing homes",
        "link": "https://www.medicare.gov/care-compare/"
      },
      {
        "name": "openFDA",
        "desc": "FDA's open data platform for searching drug labels, adverse event reports, recalls, and medical device data, useful for checking a medication's reported side effects or recall history.",
        "price": "Free",
        "rating": 8,
        "best": "Checking drug recalls & reported side effects",
        "link": "https://open.fda.gov/"
      },
      {
        "name": "PubMed",
        "desc": "NIH/NLM's free search engine for biomedical literature, giving access to millions of peer-reviewed medical research articles and abstracts.",
        "price": "Free",
        "rating": 10,
        "best": "Finding peer-reviewed medical research",
        "link": "https://pubmed.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "title": "Online Shopping",
    "tools": [
      {
        "name": "Perplexity Shopping",
        "desc": "Compares products, prices, and information across sites.",
        "price": "-",
        "rating": null,
        "best": "Multi-site comparison",
        "link": "https://www.perplexity.ai",
        "keyPrompt": {
          "core": "Use Perplexity Shopping to evaluate [ITEM]. Details: [MODEL / CONDITION / AGE / ACCESSORIES]. Market/location: [LOCATION]. Estimate a reasonable value range using comparable evidence and explain which factors most affect the price.",
          "refine": "Compare [PRODUCT A], [PRODUCT B], and [PRODUCT C] with Perplexity Shopping. Criteria: [PRICE / FEATURES / QUALITY / WARRANTY / TOTAL COST]. Identify the best value for [USE CASE] and explain the trade-offs."
        }
      },
      {
        "name": "ChatGPT Shopping",
        "desc": "Searches for and compares products.",
        "price": "-",
        "rating": null,
        "best": "Spec & price comparison",
        "link": "https://chatgpt.com",
        "keyPrompt": {
          "core": "Use ChatGPT Shopping to evaluate [ITEM]. Details: [MODEL / CONDITION / AGE / ACCESSORIES]. Market/location: [LOCATION]. Estimate a reasonable value range using comparable evidence and explain which factors most affect the price.",
          "refine": "Compare [PRODUCT A], [PRODUCT B], and [PRODUCT C] with ChatGPT Shopping. Criteria: [PRICE / FEATURES / QUALITY / WARRANTY / TOTAL COST]. Identify the best value for [USE CASE] and explain the trade-offs."
        }
      },
      {
        "name": "Honey / Capital One Shopping",
        "desc": "Finds discount codes during checkout.",
        "price": "-",
        "rating": null,
        "best": "Automatic coupon search",
        "link": "https://www.joinhoney.com",
        "keyPrompt": {
          "core": "Use Honey / Capital One Shopping to evaluate [ITEM]. Details: [MODEL / CONDITION / AGE / ACCESSORIES]. Market/location: [LOCATION]. Estimate a reasonable value range using comparable evidence and explain which factors most affect the price.",
          "refine": "Compare [PRODUCT A], [PRODUCT B], and [PRODUCT C] with Honey / Capital One Shopping. Criteria: [PRICE / FEATURES / QUALITY / WARRANTY / TOTAL COST]. Identify the best value for [USE CASE] and explain the trade-offs."
        }
      },
      {
        "name": "Etsy",
        "desc": "Global marketplace for handmade, vintage and craft goods from independent sellers.",
        "price": "Free to browse",
        "rating": 8,
        "best": "Buying/selling handmade goods",
        "link": "https://etsy.com"
      }
    ]
  },
  {
    "title": "Finding the Value of Things",
    "tools": [
      {
        "name": "PriceSnap",
        "desc": "Estimates an antique/old item's value from a photo using sales/auction data.",
        "price": "-",
        "rating": null,
        "best": "Not an official valuation for insurance/authentication",
        "link": "https://www.pricesnap.ai",
        "keyPrompt": {
          "core": "Use PriceSnap to evaluate [ITEM]. Details: [MODEL / CONDITION / AGE / ACCESSORIES]. Market/location: [LOCATION]. Estimate a reasonable value range using comparable evidence and explain which factors most affect the price.",
          "refine": "Compare [PRODUCT A], [PRODUCT B], and [PRODUCT C] with PriceSnap. Criteria: [PRICE / FEATURES / QUALITY / WARRANTY / TOTAL COST]. Identify the best value for [USE CASE] and explain the trade-offs."
        }
      },
      {
        "name": "Underpriced AI",
        "desc": "Identifies antiques and used electronics from images.",
        "price": "-",
        "rating": 9,
        "best": "Second-hand markets & marketplace deals",
        "link": "https://underpricedai.com/",
        "keyPrompt": {
          "core": "Use Underpriced AI to evaluate [ITEM]. Details: [MODEL / CONDITION / AGE / ACCESSORIES]. Market/location: [LOCATION]. Estimate a reasonable value range using comparable evidence and explain which factors most affect the price.",
          "refine": "Compare [PRODUCT A], [PRODUCT B], and [PRODUCT C] with Underpriced AI. Criteria: [PRICE / FEATURES / QUALITY / WARRANTY / TOTAL COST]. Identify the best value for [USE CASE] and explain the trade-offs."
        }
      }
    ]
  },
  {
    "title": "Finding a Job & Finding Employees",
    "tools": [
      {
        "name": "LinkedIn",
        "desc": "Job search, professional profile, recruiter contact.",
        "price": "-",
        "rating": null,
        "best": "Technical jobs & large companies",
        "link": "https://www.linkedin.com"
      },
      {
        "name": "Indeed",
        "desc": "Job search by country, profession, and location.",
        "price": "-",
        "rating": null,
        "best": "Uploading a CV & applying directly",
        "link": "https://www.indeed.com",
        "keyPrompt": {
          "core": "Use Indeed to optimize this professional profile for [JOB TITLE]. Here is my current information: [PASTE CV / EXPERIENCE]. Highlight measurable achievements, relevant skills, keywords, and ATS-friendly wording without inventing experience. Return an improved version.",
          "refine": "Using Indeed, compare this CV/profile against the requirements for [JOB DESCRIPTION]. Create a gap analysis with matched skills, missing keywords, weak sections, and specific improvements. Prioritize the changes that are most likely to improve relevance."
        }
      },
      {
        "name": "ReKrute",
        "desc": "One of the major employment platforms in Morocco.",
        "price": "-",
        "rating": null,
        "best": "Moroccan job seekers & companies",
        "link": "https://www.rekrute.com",
        "keyPrompt": {
          "core": "Use ReKrute to optimize this professional profile for [JOB TITLE]. Here is my current information: [PASTE CV / EXPERIENCE]. Highlight measurable achievements, relevant skills, keywords, and ATS-friendly wording without inventing experience. Return an improved version.",
          "refine": "Using ReKrute, compare this CV/profile against the requirements for [JOB DESCRIPTION]. Create a gap analysis with matched skills, missing keywords, weak sections, and specific improvements. Prioritize the changes that are most likely to improve relevance."
        }
      },
      {
        "name": "Emploi.ma",
        "desc": "Job search platform focused on Morocco.",
        "price": "-",
        "rating": null,
        "best": "Local Moroccan listings",
        "link": "https://www.emploi.ma",
        "keyPrompt": {
          "core": "Use Emploi.ma to optimize this professional profile for [JOB TITLE]. Here is my current information: [PASTE CV / EXPERIENCE]. Highlight measurable achievements, relevant skills, keywords, and ATS-friendly wording without inventing experience. Return an improved version.",
          "refine": "Using Emploi.ma, compare this CV/profile against the requirements for [JOB DESCRIPTION]. Create a gap analysis with matched skills, missing keywords, weak sections, and specific improvements. Prioritize the changes that are most likely to improve relevance."
        }
      },
      {
        "name": "Bayt",
        "desc": "Jobs across Morocco, the Middle East, and North Africa.",
        "price": "-",
        "rating": null,
        "best": "Regional job search",
        "link": "https://www.bayt.com",
        "keyPrompt": {
          "core": "Use Bayt to optimize this professional profile for [JOB TITLE]. Here is my current information: [PASTE CV / EXPERIENCE]. Highlight measurable achievements, relevant skills, keywords, and ATS-friendly wording without inventing experience. Return an improved version.",
          "refine": "Using Bayt, compare this CV/profile against the requirements for [JOB DESCRIPTION]. Create a gap analysis with matched skills, missing keywords, weak sections, and specific improvements. Prioritize the changes that are most likely to improve relevance."
        }
      },
      {
        "name": "LinkedIn Recruiter",
        "desc": "Searches candidates by profession, skills, experience, location.",
        "price": "-",
        "rating": 9,
        "best": "Specialized-position recruiting",
        "link": "https://www.linkedin.com/talent/recruiter",
        "keyPrompt": {
          "core": "Use LinkedIn Recruiter to optimize this professional profile for [JOB TITLE]. Here is my current information: [PASTE CV / EXPERIENCE]. Highlight measurable achievements, relevant skills, keywords, and ATS-friendly wording without inventing experience. Return an improved version.",
          "refine": "Using LinkedIn Recruiter, compare this CV/profile against the requirements for [JOB DESCRIPTION]. Create a gap analysis with matched skills, missing keywords, weak sections, and specific improvements. Prioritize the changes that are most likely to improve relevance."
        }
      },
      {
        "name": "Indeed Employer",
        "desc": "Publishes job offers and receives candidate applications.",
        "price": "-",
        "rating": 9,
        "best": "Employer-side hiring",
        "link": "https://www.indeed.com/hire",
        "keyPrompt": {
          "core": "Use Indeed Employer to optimize this professional profile for [JOB TITLE]. Here is my current information: [PASTE CV / EXPERIENCE]. Highlight measurable achievements, relevant skills, keywords, and ATS-friendly wording without inventing experience. Return an improved version.",
          "refine": "Using Indeed Employer, compare this CV/profile against the requirements for [JOB DESCRIPTION]. Create a gap analysis with matched skills, missing keywords, weak sections, and specific improvements. Prioritize the changes that are most likely to improve relevance."
        }
      },
      {
        "name": "ChatGPT / Claude",
        "desc": "Writes job offers, descriptions, interview questions, and scorecards.",
        "price": "-",
        "rating": 10,
        "best": "Hiring-process content",
        "link": "https://chatgpt.com/"
      }
    ]
  },
  {
    "title": "Sports: Football, Tennis & Basketball",
    "tools": [
      {
        "name": "SofaScore",
        "desc": "Live scores, standings, player/match stats, ratings, H2H, lineups.",
        "price": "-",
        "rating": null,
        "best": "Detailed player & match analysis",
        "link": "https://www.sofascore.com",
        "keyPrompt": {
          "core": "Use SofaScore to analyze [TEAM / PLAYER / MATCH]. Focus on recent performance, tactics, key statistics, strengths, weaknesses, and context. Clearly distinguish current data from interpretation.",
          "refine": "Create a pre-match analysis for [MATCH] using SofaScore. Compare form, injuries/availability if verified, tactical styles, recent results, and key matchup factors. End with the 5 most important things to watch."
        }
      },
      {
        "name": "Flashscore",
        "desc": "Live scores across 30+ sports with deep match statistics.",
        "price": "-",
        "rating": null,
        "best": "Very broad competition coverage",
        "link": "https://www.flashscore.com",
        "keyPrompt": {
          "core": "Use Flashscore to analyze [TEAM / PLAYER / MATCH]. Focus on recent performance, tactics, key statistics, strengths, weaknesses, and context. Clearly distinguish current data from interpretation.",
          "refine": "Create a pre-match analysis for [MATCH] using Flashscore. Compare form, injuries/availability if verified, tactical styles, recent results, and key matchup factors. End with the 5 most important things to watch."
        }
      },
      {
        "name": "365Scores",
        "desc": "Live scores, schedules, statistics, news, and lineups.",
        "price": "-",
        "rating": null,
        "best": "Mobile-first following of teams",
        "link": "https://www.365scores.com",
        "keyPrompt": {
          "core": "Use 365Scores to analyze [TEAM / PLAYER / MATCH]. Focus on recent performance, tactics, key statistics, strengths, weaknesses, and context. Clearly distinguish current data from interpretation.",
          "refine": "Create a pre-match analysis for [MATCH] using 365Scores. Compare form, injuries/availability if verified, tactical styles, recent results, and key matchup factors. End with the 5 most important things to watch."
        }
      },
      {
        "name": "FotMob",
        "desc": "Football live scores, xG, player ratings, and transfers.",
        "price": "-",
        "rating": null,
        "best": "Football-focused detail",
        "link": "https://www.fotmob.com",
        "keyPrompt": {
          "core": "Use FotMob to analyze [TEAM / PLAYER / MATCH]. Focus on recent performance, tactics, key statistics, strengths, weaknesses, and context. Clearly distinguish current data from interpretation.",
          "refine": "Create a pre-match analysis for [MATCH] using FotMob. Compare form, injuries/availability if verified, tactical styles, recent results, and key matchup factors. End with the 5 most important things to watch."
        }
      },
      {
        "name": "OneFootball",
        "desc": "Football news, results, and matches.",
        "price": "-",
        "rating": 9,
        "best": "News & results",
        "link": "https://onefootball.com/",
        "keyPrompt": {
          "core": "Use OneFootball to analyze [TEAM / PLAYER / MATCH]. Focus on recent performance, tactics, key statistics, strengths, weaknesses, and context. Clearly distinguish current data from interpretation.",
          "refine": "Create a pre-match analysis for [MATCH] using OneFootball. Compare form, injuries/availability if verified, tactical styles, recent results, and key matchup factors. End with the 5 most important things to watch."
        }
      }
    ]
  },
  {
    "title": "Language Learning",
    "tools": [
      {
        "name": "Duolingo",
        "desc": "Interactive, gamified short lessons with a daily streak system.",
        "price": "Free + paid Super",
        "rating": null,
        "best": "Beginners & building a daily habit",
        "link": "https://www.duolingo.com",
        "keyPrompt": {
          "core": "Use Duolingo for this task: [TASK]. Context: Interactive, gamified short lessons with a daily streak system. My objective is [OBJECTIVE]. Give me a clear, practical result, state assumptions, and use an output format that is easy to act on.",
          "refine": "Optimize my workflow in Duolingo for [GOAL]. Starting point: [CURRENT SITUATION]. Constraints: [CONSTRAINTS]. Propose the best approach, explain the key steps, and finish with a concise checklist."
        }
      },
      {
        "name": "Babbel",
        "desc": "Structured lessons around conversation & real-life situations.",
        "price": "-",
        "rating": null,
        "best": "A more structured curriculum",
        "link": "https://www.babbel.com",
        "keyPrompt": {
          "core": "Use Babbel for this task: [TASK]. Context: Structured lessons around conversation & real-life situations. My objective is [OBJECTIVE]. Give me a clear, practical result, state assumptions, and use an output format that is easy to act on.",
          "refine": "Optimize my workflow in Babbel for [GOAL]. Starting point: [CURRENT SITUATION]. Constraints: [CONSTRAINTS]. Propose the best approach, explain the key steps, and finish with a concise checklist."
        }
      },
      {
        "name": "Busuu",
        "desc": "Structured lessons with corrections from native speakers.",
        "price": "-",
        "rating": null,
        "best": "Community-corrected practice",
        "link": "https://www.busuu.com",
        "keyPrompt": {
          "core": "Use Busuu for this task: [TASK]. Context: Structured lessons with corrections from native speakers. My objective is [OBJECTIVE]. Give me a clear, practical result, state assumptions, and use an output format that is easy to act on.",
          "refine": "Optimize my workflow in Busuu for [GOAL]. Starting point: [CURRENT SITUATION]. Constraints: [CONSTRAINTS]. Propose the best approach, explain the key steps, and finish with a concise checklist."
        }
      },
      {
        "name": "Memrise",
        "desc": "Vocabulary, listening, pronunciation, everyday phrases.",
        "price": "-",
        "rating": null,
        "best": "Vocabulary & review",
        "link": "https://www.memrise.com",
        "keyPrompt": {
          "core": "Use Memrise for this task: [TASK]. Context: Vocabulary, listening, pronunciation, everyday phrases. My objective is [OBJECTIVE]. Give me a clear, practical result, state assumptions, and use an output format that is easy to act on.",
          "refine": "Optimize my workflow in Memrise for [GOAL]. Starting point: [CURRENT SITUATION]. Constraints: [CONSTRAINTS]. Propose the best approach, explain the key steps, and finish with a concise checklist."
        }
      },
      {
        "name": "ChatGPT",
        "desc": "Conversation practice, error correction, role-play, translation.",
        "price": "-",
        "rating": null,
        "best": "Customized conversation & correction",
        "link": "https://chatgpt.com"
      },
      {
        "name": "Loecsen",
        "desc": "Free visual phrasebook tool for learning essential phrases in dozens of languages.",
        "price": "Free",
        "rating": 7,
        "best": "Learning travel phrases fast",
        "link": "https://loecsen.com"
      }
    ]
  },
  {
    "title": "Flight & Aircraft Tracking",
    "tools": [
      {
        "name": "Flightradar24",
        "desc": "Real-time aircraft tracking by flight number, route, and airport.",
        "price": "-",
        "rating": null,
        "best": "Live global flight tracking",
        "link": "https://www.flightradar24.com",
        "keyPrompt": {
          "core": "Use Flightradar24 to check the current status of [FLIGHT / TRAIN / VESSEL / ROUTE]. Identifier: [NUMBER / NAME]. Date/time: [DATE]. Summarize current status, scheduled vs actual timing, and any relevant disruption information. Clearly label live data versus estimates.",
          "refine": "Research [ROUTE / JOURNEY] with Flightradar24. Date: [DATE]. Compare practical options by duration, reliability, transfers, cost if available, and current disruptions. Present the best options in a simple table."
        }
      },
      {
        "name": "FlightAware",
        "desc": "Flight status, delays, arrivals, and departures.",
        "price": "-",
        "rating": null,
        "best": "Flight status monitoring",
        "link": "https://www.flightaware.com",
        "keyPrompt": {
          "core": "Use FlightAware to check the current status of [FLIGHT / TRAIN / VESSEL / ROUTE]. Identifier: [NUMBER / NAME]. Date/time: [DATE]. Summarize current status, scheduled vs actual timing, and any relevant disruption information. Clearly label live data versus estimates.",
          "refine": "Research [ROUTE / JOURNEY] with FlightAware. Date: [DATE]. Compare practical options by duration, reliability, transfers, cost if available, and current disruptions. Present the best options in a simple table."
        }
      },
      {
        "name": "Plane Finder",
        "desc": "Live aircraft tracking with maps and flight info.",
        "price": "-",
        "rating": null,
        "best": "Live map tracking",
        "link": "https://planefinder.net",
        "keyPrompt": {
          "core": "Use Plane Finder to check the current status of [FLIGHT / TRAIN / VESSEL / ROUTE]. Identifier: [NUMBER / NAME]. Date/time: [DATE]. Summarize current status, scheduled vs actual timing, and any relevant disruption information. Clearly label live data versus estimates.",
          "refine": "Research [ROUTE / JOURNEY] with Plane Finder. Date: [DATE]. Compare practical options by duration, reliability, transfers, cost if available, and current disruptions. Present the best options in a simple table."
        }
      }
    ]
  },
  {
    "title": "Currencies, Conversion & Prices",
    "tools": [
      {
        "name": "XE Currency",
        "desc": "Currency conversion, exchange rates, tracking, and charts.",
        "price": "-",
        "rating": null,
        "best": "Rate tracking over time",
        "link": "https://www.xe.com",
        "keyPrompt": {
          "core": "Use XE Currency to calculate [CONVERSION]. Amount: [AMOUNT]. From: [UNIT / CURRENCY]. To: [UNIT / CURRENCY]. State the rate or conversion basis used and the date/time when relevant.",
          "refine": "Compare [VALUES] with XE Currency using a consistent conversion basis. Show the calculation clearly, round appropriately, and flag any fees, spreads, or assumptions that could change the real-world result."
        }
      },
      {
        "name": "Wise Currency Converter",
        "desc": "Currency conversion and exchange-rate comparison.",
        "price": "-",
        "rating": null,
        "best": "Travelers & international transfers",
        "link": "https://wise.com",
        "keyPrompt": {
          "core": "Use Wise Currency Converter to calculate [CONVERSION]. Amount: [AMOUNT]. From: [UNIT / CURRENCY]. To: [UNIT / CURRENCY]. State the rate or conversion basis used and the date/time when relevant.",
          "refine": "Compare [VALUES] with Wise Currency Converter using a consistent conversion basis. Show the calculation clearly, round appropriately, and flag any fees, spreads, or assumptions that could change the real-world result."
        }
      },
      {
        "name": "Google / ChatGPT",
        "desc": "Quick conversions and rate comparisons in plain language.",
        "price": "-",
        "rating": 9,
        "best": "Instant one-off conversions",
        "link": "https://www.google.com/",
        "keyPrompt": {
          "core": "Use Google / ChatGPT to calculate [CONVERSION]. Amount: [AMOUNT]. From: [UNIT / CURRENCY]. To: [UNIT / CURRENCY]. State the rate or conversion basis used and the date/time when relevant.",
          "refine": "Compare [VALUES] with Google / ChatGPT using a consistent conversion basis. Show the calculation clearly, round appropriately, and flag any fees, spreads, or assumptions that could change the real-world result."
        }
      }
    ]
  },
  {
    "title": "Identifying a Song from Audio",
    "tools": [
      {
        "name": "Shazam",
        "desc": "Listens to part of a song and identifies name, artist, album.",
        "price": "-",
        "rating": null,
        "best": "When you hear a song you don't recognize",
        "link": "https://www.shazam.com",
        "keyPrompt": {
          "core": "Use Shazam for this audio task: [TASK]. Desired voice/music/audio style: [STYLE]. Language: [LANGUAGE]. Audience: [AUDIENCE]. Preserve natural pacing, clarity, pronunciation, and appropriate emotional tone.",
          "refine": "Optimize this audio brief for Shazam: [BRIEF]. Improve clarity, pacing, pronunciation cues, structure, and consistency while keeping the intended message and tone."
        }
      },
      {
        "name": "SoundHound",
        "desc": "Identifies songs, including from singing or humming in some cases.",
        "price": "-",
        "rating": null,
        "best": "Humming-based identification",
        "link": "https://www.soundhound.com",
        "keyPrompt": {
          "core": "Use SoundHound for this audio task: [TASK]. Desired voice/music/audio style: [STYLE]. Language: [LANGUAGE]. Audience: [AUDIENCE]. Preserve natural pacing, clarity, pronunciation, and appropriate emotional tone.",
          "refine": "Optimize this audio brief for SoundHound: [BRIEF]. Improve clarity, pacing, pronunciation cues, structure, and consistency while keeping the intended message and tone."
        }
      },
      {
        "name": "Google",
        "desc": "Song search by humming on supported devices.",
        "price": "-",
        "rating": 10,
        "best": "Built-in hum-to-search",
        "link": "https://www.google.com/",
        "keyPrompt": {
          "core": "Use Google for this audio task: [TASK]. Desired voice/music/audio style: [STYLE]. Language: [LANGUAGE]. Audience: [AUDIENCE]. Preserve natural pacing, clarity, pronunciation, and appropriate emotional tone.",
          "refine": "Optimize this audio brief for Google: [BRIEF]. Improve clarity, pacing, pronunciation cues, structure, and consistency while keeping the intended message and tone."
        }
      }
    ]
  },
  {
    "title": "Watching Movies, Series & Shows",
    "tools": [
      {
        "name": "Netflix",
        "desc": "Movies, series, documentaries, and original productions.",
        "price": "Paid subscription",
        "rating": null,
        "best": "Official licensed streaming",
        "link": "https://www.netflix.com",
        "keyPrompt": {
          "core": "Use Netflix to help me choose something to watch. Preferences: [GENRE / MOOD / LANGUAGE / LENGTH]. Avoid: [AVOID]. Give me a shortlist with a one-sentence reason for each and clearly separate verified availability from general recommendations.",
          "refine": "Analyze [TITLE / SERIES] with Netflix without spoilers. Focus on genre, themes, pacing, audience fit, strengths, weaknesses, and what type of viewer is likely to enjoy it."
        }
      },
      {
        "name": "Stremio",
        "desc": "Aggregates content and sources through an add-on system.",
        "price": "-",
        "rating": null,
        "best": "Add-on based content discovery",
        "link": "https://www.stremio.com",
        "keyPrompt": {
          "core": "Use Stremio to help me choose something to watch. Preferences: [GENRE / MOOD / LANGUAGE / LENGTH]. Avoid: [AVOID]. Give me a shortlist with a one-sentence reason for each and clearly separate verified availability from general recommendations.",
          "refine": "Analyze [TITLE / SERIES] with Stremio without spoilers. Focus on genre, themes, pacing, audience fit, strengths, weaknesses, and what type of viewer is likely to enjoy it."
        }
      },
      {
        "name": "Unofficial platforms (Drama Live, HDO Box, EgyDead)",
        "desc": "Unofficial services with unclear copyright status — verify legality in your country.",
        "price": "-",
        "rating": null,
        "best": "Not recommended without verifying legality",
        "link": null,
        "keyPrompt": {
          "core": "Use Unofficial platforms (Drama Live, HDO Box, EgyDead) to help me choose something to watch. Preferences: [GENRE / MOOD / LANGUAGE / LENGTH]. Avoid: [AVOID]. Give me a shortlist with a one-sentence reason for each and clearly separate verified availability from general recommendations.",
          "refine": "Analyze [TITLE / SERIES] with Unofficial platforms (Drama Live, HDO Box, EgyDead) without spoilers. Focus on genre, themes, pacing, audience fit, strengths, weaknesses, and what type of viewer is likely to enjoy it."
        }
      }
    ]
  },
  {
    "title": "Image Search",
    "tools": [
      {
        "name": "Pinterest",
        "desc": "Visual search engine for inspiration, images, and ideas.",
        "price": "-",
        "rating": null,
        "best": "Discovering clothing, decor, recipes, crafts",
        "link": "https://www.pinterest.com",
        "keyPrompt": {
          "core": "Research [QUESTION] with Pinterest. Find high-quality, recent sources, prioritize primary or authoritative sources, compare conflicting claims, and give me a concise synthesis with source names and links. Separate facts from interpretation.",
          "refine": "Find the best results for [QUERY] using Pinterest. Criteria: [DATE / LOCATION / QUALITY / BUDGET]. Exclude irrelevant or low-quality results, explain why the top results match, and present the shortlist in a comparison table."
        }
      },
      {
        "name": "Google Images",
        "desc": "Search for images across the web, incl. reverse image search.",
        "price": "-",
        "rating": null,
        "best": "General & reverse image search",
        "link": "https://images.google.com",
        "keyPrompt": {
          "core": "Research [QUESTION] with Google Images. Find high-quality, recent sources, prioritize primary or authoritative sources, compare conflicting claims, and give me a concise synthesis with source names and links. Separate facts from interpretation.",
          "refine": "Find the best results for [QUERY] using Google Images. Criteria: [DATE / LOCATION / QUALITY / BUDGET]. Exclude irrelevant or low-quality results, explain why the top results match, and present the shortlist in a comparison table."
        }
      },
      {
        "name": "Bing Images",
        "desc": "Image search across the web.",
        "price": "-",
        "rating": null,
        "best": "Alternative image search",
        "link": "https://www.bing.com/images",
        "keyPrompt": {
          "core": "Research [QUESTION] with Bing Images. Find high-quality, recent sources, prioritize primary or authoritative sources, compare conflicting claims, and give me a concise synthesis with source names and links. Separate facts from interpretation.",
          "refine": "Find the best results for [QUERY] using Bing Images. Criteria: [DATE / LOCATION / QUALITY / BUDGET]. Exclude irrelevant or low-quality results, explain why the top results match, and present the shortlist in a comparison table."
        }
      },
      {
        "name": "Yandex Images",
        "desc": "Visual search and finding similar images.",
        "price": "-",
        "rating": null,
        "best": "Strong reverse-image search in some cases",
        "link": "https://yandex.com/images",
        "keyPrompt": {
          "core": "Research [QUESTION] with Yandex Images. Find high-quality, recent sources, prioritize primary or authoritative sources, compare conflicting claims, and give me a concise synthesis with source names and links. Separate facts from interpretation.",
          "refine": "Find the best results for [QUERY] using Yandex Images. Criteria: [DATE / LOCATION / QUALITY / BUDGET]. Exclude irrelevant or low-quality results, explain why the top results match, and present the shortlist in a comparison table."
        }
      },
      {
        "name": "Google Lens",
        "desc": "Searches using an image or the camera to identify objects, text, and places.",
        "price": "-",
        "rating": 9,
        "best": "Identifying real-world objects",
        "link": "https://lens.google/",
        "keyPrompt": {
          "core": "Research [QUESTION] with Google Lens. Find high-quality, recent sources, prioritize primary or authoritative sources, compare conflicting claims, and give me a concise synthesis with source names and links. Separate facts from interpretation.",
          "refine": "Find the best results for [QUERY] using Google Lens. Criteria: [DATE / LOCATION / QUALITY / BUDGET]. Exclude irrelevant or low-quality results, explain why the top results match, and present the shortlist in a comparison table. ExifTool Best for: Metadata inspection & digital-asset forensics Description: Reads image metadata such as camera information, timestamps, GPS fields, and other embedded EXIF/XMP data when present. Prompt 1 — Core workflow Research [QUESTION] with ExifTool. Find high-quality, recent sources, prioritize primary or authoritative sources, compare conflicting claims, and give me a concise synthesis with source names and links. Separate facts from interpretation. Prompt 2 — Advanced / optimization Find the best results for [QUERY] using ExifTool. Criteria: [DATE / LOCATION / QUALITY / BUDGET]. Exclude irrelevant or low-quality results, explain why the top results match, and present the shortlist in a comparison table."
        }
      },
      {
        "name": "ExifTool",
        "desc": "Reads image metadata such as camera information, timestamps, GPS fields, and other embedded EXIF/XMP data when present.",
        "price": "Free · open source",
        "rating": 9,
        "best": "Metadata inspection & digital-asset forensics",
        "link": "https://exiftool.org",
        "note": "Only reveals metadata that is actually embedded in the file; some fields may be missing or removed."
      },
      {
        "name": "TinEye",
        "desc": "Reverse image search engine that finds where an image appears online and traces its earliest source.",
        "price": "Free + paid API",
        "rating": 8,
        "best": "Reverse image search",
        "link": "https://tineye.com"
      },
      {
        "name": "CleanPNG",
        "desc": "Large library of free transparent-background PNG images and clipart for design projects.",
        "price": "Free",
        "rating": 6,
        "best": "Free transparent PNG images",
        "link": "https://cleanpng.com"
      },
      {
        "name": "BIOART (NIAID)",
        "desc": "NIH's free library of scientific and biomedical illustrations for research and educational use.",
        "price": "Free",
        "rating": 7,
        "best": "Free biomedical illustrations",
        "link": "https://bioart.niaid.nih.gov"
      },
      {
        "name": "Unsplash",
        "desc": "Massive library of free, high-resolution stock photos for any project.",
        "price": "Free + paid (Unsplash+)",
        "rating": 9,
        "best": "Free high-resolution stock photos",
        "link": "https://unsplash.com"
      }
    ]
  },
  {
    "title": "Train Tracking",
    "tools": [
      {
        "name": "Trainline",
        "desc": "Searches train journeys, schedules, prices, and booking.",
        "price": "Free to search; booking has ticket + service fees",
        "rating": 9,
        "best": "Planning & booking European train journeys",
        "link": "https://www.thetrainline.com/",
        "keyPrompt": {
          "core": "Use Trainline to check the current status of [FLIGHT / TRAIN / VESSEL / ROUTE]. Identifier: [NUMBER / NAME]. Date/time: [DATE]. Summarize current status, scheduled vs actual timing, and any relevant disruption information. Clearly label live data versus estimates.",
          "refine": "Research [ROUTE / JOURNEY] with Trainline. Date: [DATE]. Compare practical options by duration, reliability, transfers, cost if available, and current disruptions. Present the best options in a simple table."
        }
      },
      {
        "name": "Raildar",
        "desc": "Maps and information about train movements, mainly in the UK.",
        "price": "-",
        "rating": 8,
        "best": "Monitoring UK train movements",
        "link": "https://raildar.co.uk/",
        "keyPrompt": {
          "core": "Use Raildar to check the current status of [FLIGHT / TRAIN / VESSEL / ROUTE]. Identifier: [NUMBER / NAME]. Date/time: [DATE]. Summarize current status, scheduled vs actual timing, and any relevant disruption information. Clearly label live data versus estimates.",
          "refine": "Research [ROUTE / JOURNEY] with Raildar. Date: [DATE]. Compare practical options by duration, reliability, transfers, cost if available, and current disruptions. Present the best options in a simple table."
        }
      }
    ]
  },
  {
    "title": "Tracking Ships & Cargo Vessels",
    "tools": [
      {
        "name": "MarineTraffic",
        "desc": "Tracks ships via AIS: location, speed, direction, port, voyage status.",
        "price": "-",
        "rating": 9,
        "best": "Cargo ships, tankers, commercial vessels",
        "link": "https://www.marinetraffic.com/",
        "keyPrompt": {
          "core": "Use MarineTraffic to check the current status of [FLIGHT / TRAIN / VESSEL / ROUTE]. Identifier: [NUMBER / NAME]. Date/time: [DATE]. Summarize current status, scheduled vs actual timing, and any relevant disruption information. Clearly label live data versus estimates.",
          "refine": "Research [ROUTE / JOURNEY] with MarineTraffic. Date: [DATE]. Compare practical options by duration, reliability, transfers, cost if available, and current disruptions. Present the best options in a simple table."
        }
      },
      {
        "name": "VesselFinder",
        "desc": "Tracks ships' location, speed, direction, and destination.",
        "price": "-",
        "rating": 9,
        "best": "Easy interface & live map",
        "link": "https://www.vesselfinder.com/",
        "keyPrompt": {
          "core": "Use VesselFinder to check the current status of [FLIGHT / TRAIN / VESSEL / ROUTE]. Identifier: [NUMBER / NAME]. Date/time: [DATE]. Summarize current status, scheduled vs actual timing, and any relevant disruption information. Clearly label live data versus estimates.",
          "refine": "Research [ROUTE / JOURNEY] with VesselFinder. Date: [DATE]. Compare practical options by duration, reliability, transfers, cost if available, and current disruptions. Present the best options in a simple table."
        }
      },
      {
        "name": "CruiseMapper",
        "desc": "Focuses specifically on cruise ships, ports, and schedules.",
        "price": "-",
        "rating": 9,
        "best": "Cruise-specific tracking",
        "link": "https://www.cruisemapper.com/",
        "keyPrompt": {
          "core": "Use CruiseMapper to check the current status of [FLIGHT / TRAIN / VESSEL / ROUTE]. Identifier: [NUMBER / NAME]. Date/time: [DATE]. Summarize current status, scheduled vs actual timing, and any relevant disruption information. Clearly label live data versus estimates.",
          "refine": "Research [ROUTE / JOURNEY] with CruiseMapper. Date: [DATE]. Compare practical options by duration, reliability, transfers, cost if available, and current disruptions. Present the best options in a simple table."
        }
      }
    ]
  },
  {
    "title": "Emergency Numbers by Country",
    "tools": [
      {
        "name": "Global Emergency Numbers",
        "desc": "Database of police, ambulance, fire, and general emergency numbers by country.",
        "price": "-",
        "rating": 8,
        "best": "Travelers — verify with an official local source",
        "link": "https://globalemergencynumbers.com/",
        "keyPrompt": {
          "core": "Use Global Emergency Numbers to identify the appropriate official emergency contact for [COUNTRY / LOCATION] and [EMERGENCY TYPE]. Prioritize official government or emergency-service information and clearly state that numbers can change.",
          "refine": "Create a compact emergency-information card for [COUNTRY / LOCATION] with Global Emergency Numbers: emergency services, important official contacts, and what information to provide when calling. Use only verified public information."
        }
      }
    ]
  },
  {
    "title": "Construction, Engineering & Home Architecture",
    "tools": [
      {
        "name": "Planner 5D",
        "desc": "Draws a 2D home plan, converts it to 3D, places furniture.",
        "price": "-",
        "rating": 9,
        "best": "Non-engineers designing a home",
        "link": "https://planner5d.com/",
        "keyPrompt": {
          "core": "Use Planner 5D to plan [PROJECT]. Goal: [GOAL]. Site/material constraints: [CONSTRAINTS]. Produce a clear concept, materials/tools list, sequence of work, measurements or assumptions, and quality/safety checkpoints. Flag anything requiring a qualified professional.",
          "refine": "Review this project plan with Planner 5D: [PLAN]. Check logic, dimensions/assumptions, material choices, sequencing, and practical risks. Identify what should be verified before work begins."
        }
      },
      {
        "name": "RoomSketcher",
        "desc": "Creates 2D and 3D plans with measurements and furniture.",
        "price": "-",
        "rating": 9,
        "best": "Precise plans",
        "link": "https://www.roomsketcher.com/",
        "keyPrompt": {
          "core": "Use RoomSketcher to plan [PROJECT]. Goal: [GOAL]. Site/material constraints: [CONSTRAINTS]. Produce a clear concept, materials/tools list, sequence of work, measurements or assumptions, and quality/safety checkpoints. Flag anything requiring a qualified professional.",
          "refine": "Review this project plan with RoomSketcher: [PLAN]. Check logic, dimensions/assumptions, material choices, sequencing, and practical risks. Identify what should be verified before work begins."
        }
      },
      {
        "name": "Floorplanner",
        "desc": "Draws floor plans for homes, offices, and buildings.",
        "price": "-",
        "rating": 9,
        "best": "Detailed plans",
        "link": "https://floorplanner.com/",
        "keyPrompt": {
          "core": "Use Floorplanner to plan [PROJECT]. Goal: [GOAL]. Site/material constraints: [CONSTRAINTS]. Produce a clear concept, materials/tools list, sequence of work, measurements or assumptions, and quality/safety checkpoints. Flag anything requiring a qualified professional.",
          "refine": "Review this project plan with Floorplanner: [PLAN]. Check logic, dimensions/assumptions, material choices, sequencing, and practical risks. Identify what should be verified before work begins."
        }
      },
      {
        "name": "SketchUp",
        "desc": "3D modeling for buildings, furniture, and engineering design.",
        "price": "-",
        "rating": 9,
        "best": "Architecture & 3D modeling",
        "link": "https://www.sketchup.com/",
        "keyPrompt": {
          "core": "Use SketchUp to plan [PROJECT]. Goal: [GOAL]. Site/material constraints: [CONSTRAINTS]. Produce a clear concept, materials/tools list, sequence of work, measurements or assumptions, and quality/safety checkpoints. Flag anything requiring a qualified professional.",
          "refine": "Review this project plan with SketchUp: [PLAN]. Check logic, dimensions/assumptions, material choices, sequencing, and practical risks. Identify what should be verified before work begins."
        }
      },
      {
        "name": "Magicplan",
        "desc": "Uses the phone camera and AR to create plans of a space.",
        "price": "-",
        "rating": 9,
        "best": "Measuring an existing space",
        "link": "https://www.magicplan.app/",
        "keyPrompt": {
          "core": "Use Magicplan to plan [PROJECT]. Goal: [GOAL]. Site/material constraints: [CONSTRAINTS]. Produce a clear concept, materials/tools list, sequence of work, measurements or assumptions, and quality/safety checkpoints. Flag anything requiring a qualified professional.",
          "refine": "Review this project plan with Magicplan: [PLAN]. Check logic, dimensions/assumptions, material choices, sequencing, and practical risks. Identify what should be verified before work begins."
        }
      },
      {
        "name": "Homestyler",
        "desc": "Interior home design, 3D models, and furniture placement.",
        "price": "-",
        "rating": 9,
        "best": "Interior design",
        "link": "https://www.homestyler.com/",
        "keyPrompt": {
          "core": "Use Homestyler to plan [PROJECT]. Goal: [GOAL]. Site/material constraints: [CONSTRAINTS]. Produce a clear concept, materials/tools list, sequence of work, measurements or assumptions, and quality/safety checkpoints. Flag anything requiring a qualified professional.",
          "refine": "Review this project plan with Homestyler: [PLAN]. Check logic, dimensions/assumptions, material choices, sequencing, and practical risks. Identify what should be verified before work begins."
        }
      },
      {
        "name": "Maket",
        "desc": "Generates and modifies home floor plans using AI.",
        "price": "-",
        "rating": 8,
        "best": "Starting a residential plan",
        "link": "https://www.maket.ai/",
        "keyPrompt": {
          "core": "Use Maket to plan [PROJECT]. Goal: [GOAL]. Site/material constraints: [CONSTRAINTS]. Produce a clear concept, materials/tools list, sequence of work, measurements or assumptions, and quality/safety checkpoints. Flag anything requiring a qualified professional.",
          "refine": "Review this project plan with Maket: [PLAN]. Check logic, dimensions/assumptions, material choices, sequencing, and practical risks. Identify what should be verified before work begins."
        }
      },
      {
        "name": "Remodel AI",
        "desc": "Visualizes how a home could look after remodeling from photos.",
        "price": "-",
        "rating": 8,
        "best": "Renovation visualization — not an executable plan",
        "link": "https://www.remodelai.io/",
        "keyPrompt": {
          "core": "Use Remodel AI to plan [PROJECT]. Goal: [GOAL]. Site/material constraints: [CONSTRAINTS]. Produce a clear concept, materials/tools list, sequence of work, measurements or assumptions, and quality/safety checkpoints. Flag anything requiring a qualified professional.",
          "refine": "Review this project plan with Remodel AI: [PLAN]. Check logic, dimensions/assumptions, material choices, sequencing, and practical risks. Identify what should be verified before work begins."
        }
      }
    ]
  },
  {
    "title": "Restaurant & Hotel Ratings",
    "tools": [
      {
        "name": "TripAdvisor",
        "desc": "Restaurant, hotel, and activity ratings with traveler experiences.",
        "price": "-",
        "rating": 10,
        "best": "Large volume of user reviews",
        "link": "https://www.tripadvisor.com",
        "keyPrompt": {
          "core": "Plan [TRIP / OUTING] with TripAdvisor. Location: [PLACE]. Dates: [DATES]. Budget: [BUDGET]. Interests: [INTERESTS]. Mobility: [TRANSPORT]. Prioritize practical logistics, opening hours where verified, realistic travel times, and a balanced itinerary.",
          "refine": "Use TripAdvisor to compare options in [LOCATION]. Criteria: [PRICE / QUALITY / DISTANCE / REVIEWS / STYLE]. Shortlist the best choices, explain the trade-offs, and clearly flag information that should be verified before booking."
        }
      },
      {
        "name": "Google Maps",
        "desc": "Ratings, photos, hours, location, and approximate prices.",
        "price": "-",
        "rating": null,
        "best": "Combining ratings with location & hours",
        "link": "https://maps.google.com"
      },
      {
        "name": "Booking.com",
        "desc": "Compares hotels on price, rating, location, and guest reviews.",
        "price": "-",
        "rating": null,
        "best": "Hotels & accommodation",
        "link": "https://www.booking.com",
        "keyPrompt": {
          "core": "Plan [TRIP / OUTING] with Booking.com. Location: [PLACE]. Dates: [DATES]. Budget: [BUDGET]. Interests: [INTERESTS]. Mobility: [TRANSPORT]. Prioritize practical logistics, opening hours where verified, realistic travel times, and a balanced itinerary.",
          "refine": "Use Booking.com to compare options in [LOCATION]. Criteria: [PRICE / QUALITY / DISTANCE / REVIEWS / STYLE]. Shortlist the best choices, explain the trade-offs, and clearly flag information that should be verified before booking."
        }
      }
    ]
  },
  {
    "title": "Sea Conditions",
    "tools": [
      {
        "name": "PredictWind",
        "desc": "Sea conditions, wave height/direction, wind, rain, and marine forecasts.",
        "price": "-",
        "rating": 9,
        "best": "Boats, fishing, sailing, marine trips",
        "link": "https://www.predictwind.com/",
        "keyPrompt": {
          "core": "Use PredictWind to check the current status of [FLIGHT / TRAIN / VESSEL / ROUTE]. Identifier: [NUMBER / NAME]. Date/time: [DATE]. Summarize current status, scheduled vs actual timing, and any relevant disruption information. Clearly label live data versus estimates.",
          "refine": "Research [ROUTE / JOURNEY] with PredictWind. Date: [DATE]. Compare practical options by duration, reliability, transfers, cost if available, and current disruptions. Present the best options in a simple table."
        }
      },
      {
        "name": "Windy",
        "desc": "Wind, waves, rain, storms, and forecast maps.",
        "price": "-",
        "rating": 10,
        "best": "Map visualization & model comparison",
        "link": "https://www.windy.com/",
        "keyPrompt": {
          "core": "Use Windy to check the current status of [FLIGHT / TRAIN / VESSEL / ROUTE]. Identifier: [NUMBER / NAME]. Date/time: [DATE]. Summarize current status, scheduled vs actual timing, and any relevant disruption information. Clearly label live data versus estimates.",
          "refine": "Research [ROUTE / JOURNEY] with Windy. Date: [DATE]. Compare practical options by duration, reliability, transfers, cost if available, and current disruptions. Present the best options in a simple table."
        }
      },
      {
        "name": "MarineTraffic + PredictWind",
        "desc": "Combine ship location with sea/weather conditions around it.",
        "price": "-",
        "rating": 9,
        "best": "Cross-checking a vessel's conditions",
        "link": "https://www.marinetraffic.com/",
        "keyPrompt": {
          "core": "Use MarineTraffic + PredictWind to check the current status of [FLIGHT / TRAIN / VESSEL / ROUTE]. Identifier: [NUMBER / NAME]. Date/time: [DATE]. Summarize current status, scheduled vs actual timing, and any relevant disruption information. Clearly label live data versus estimates.",
          "refine": "Research [ROUTE / JOURNEY] with MarineTraffic + PredictWind. Date: [DATE]. Compare practical options by duration, reliability, transfers, cost if available, and current disruptions. Present the best options in a simple table."
        }
      }
    ]
  },
  {
    "title": "Fixing Computer Problems Yourself",
    "tools": [
      {
        "name": "Microsoft Get Help",
        "desc": "Diagnoses Windows problems and provides repair steps.",
        "price": "-",
        "rating": 8,
        "best": "Built-in Windows troubleshooters",
        "link": "https://support.microsoft.com/windows/get-help",
        "keyPrompt": {
          "core": "Help me troubleshoot [COMPUTER PROBLEM] with Microsoft Get Help. Device/OS: [DEVICE + OS]. Symptoms: [SYMPTOMS]. What I already tried: [STEPS]. Give safe, reversible steps first and explain how to verify each result.",
          "refine": "Diagnose this issue using Microsoft Get Help: [ERROR / SCREENSHOT / LOG]. Rank likely causes, give one test per cause, and only then propose a fix. Avoid destructive steps unless clearly necessary and backed up."
        }
      },
      {
        "name": "Microsoft Support",
        "desc": "Official Microsoft source for Windows problems.",
        "price": "-",
        "rating": 9,
        "best": "Official diagnosis",
        "link": "https://support.microsoft.com/",
        "keyPrompt": {
          "core": "Help me troubleshoot [COMPUTER PROBLEM] with Microsoft Support. Device/OS: [DEVICE + OS]. Symptoms: [SYMPTOMS]. What I already tried: [STEPS]. Give safe, reversible steps first and explain how to verify each result.",
          "refine": "Diagnose this issue using Microsoft Support: [ERROR / SCREENSHOT / LOG]. Rank likely causes, give one test per cause, and only then propose a fix. Avoid destructive steps unless clearly necessary and backed up."
        }
      },
      {
        "name": "iFixit",
        "desc": "Step-by-step repair guides for PCs, phones, appliances, and more.",
        "price": "-",
        "rating": 10,
        "best": "Repairing hardware yourself",
        "link": "https://www.ifixit.com",
        "keyPrompt": {
          "core": "Help me troubleshoot [COMPUTER PROBLEM] with iFixit. Device/OS: [DEVICE + OS]. Symptoms: [SYMPTOMS]. What I already tried: [STEPS]. Give safe, reversible steps first and explain how to verify each result.",
          "refine": "Diagnose this issue using iFixit: [ERROR / SCREENSHOT / LOG]. Rank likely causes, give one test per cause, and only then propose a fix. Avoid destructive steps unless clearly necessary and backed up."
        }
      },
      {
        "name": "ChatGPT",
        "desc": "Analyzes error messages/screenshots and explains diagnostic steps.",
        "price": "-",
        "rating": null,
        "best": "Understanding an error before escalating",
        "link": "https://chatgpt.com"
      },
      {
        "name": "Speedify",
        "desc": "Channel-bonding VPN app that combines Wi-Fi and mobile data for a faster, more stable connection.",
        "price": "Free + paid",
        "rating": 7,
        "best": "Stabilizing a weak internet connection",
        "link": "https://speedify.com"
      },
      {
        "name": "Ninite",
        "desc": "Batch installer that downloads and updates common Windows software with one click, skipping bloatware.",
        "price": "Free + paid",
        "rating": 9,
        "best": "Batch-installing Windows software",
        "link": "https://ninite.com"
      }
    ]
  },
  {
    "title": "Listening to Music",
    "tools": [
      {
        "name": "Spotify",
        "desc": "Music, albums, playlists, podcasts, and artist discovery.",
        "price": "Free + Premium (from ~MAD 45/mo in Morocco)",
        "rating": 10,
        "best": "Discovering music & playlists",
        "link": "https://www.spotify.com",
        "keyPrompt": {
          "core": "Use Spotify for this audio task: [TASK]. Desired voice/music/audio style: [STYLE]. Language: [LANGUAGE]. Audience: [AUDIENCE]. Preserve natural pacing, clarity, pronunciation, and appropriate emotional tone.",
          "refine": "Optimize this audio brief for Spotify: [BRIEF]. Improve clarity, pacing, pronunciation cues, structure, and consistency while keeping the intended message and tone."
        }
      },
      {
        "name": "Deezer",
        "desc": "Music, playlists, podcasts, and a discovery Flow feature.",
        "price": "-",
        "rating": 10,
        "best": "Music discovery",
        "link": "https://www.deezer.com",
        "keyPrompt": {
          "core": "Use Deezer for this audio task: [TASK]. Desired voice/music/audio style: [STYLE]. Language: [LANGUAGE]. Audience: [AUDIENCE]. Preserve natural pacing, clarity, pronunciation, and appropriate emotional tone.",
          "refine": "Optimize this audio brief for Deezer: [BRIEF]. Improve clarity, pacing, pronunciation cues, structure, and consistency while keeping the intended message and tone."
        }
      },
      {
        "name": "YouTube Music",
        "desc": "Finds old, live, remix, and cover versions of songs.",
        "price": "-",
        "rating": 9,
        "best": "Rare or hard-to-find versions",
        "link": "https://music.youtube.com/",
        "keyPrompt": {
          "core": "Use YouTube Music for this audio task: [TASK]. Desired voice/music/audio style: [STYLE]. Language: [LANGUAGE]. Audience: [AUDIENCE]. Preserve natural pacing, clarity, pronunciation, and appropriate emotional tone.",
          "refine": "Optimize this audio brief for YouTube Music: [BRIEF]. Improve clarity, pacing, pronunciation cues, structure, and consistency while keeping the intended message and tone."
        }
      },
      {
        "name": "LALAL.AI",
        "desc": "AI audio tool that separates vocals, instruments and stems from any track.",
        "price": "Free + paid",
        "rating": 8,
        "best": "AI vocal & stem removal",
        "link": "https://lalal.ai"
      },
      {
        "name": "Suno",
        "desc": "AI music generator that creates full songs, including vocals, from a text prompt.",
        "price": "Free + paid",
        "rating": 9,
        "best": "AI song generation from text",
        "link": "https://suno.com"
      },
      {
        "name": "Udio",
        "desc": "AI music generation platform for creating original songs in a wide range of styles.",
        "price": "Free + paid",
        "rating": 8,
        "best": "AI music generation",
        "link": "https://udio.com"
      }
    ]
  },
  {
    "title": "Knowing Everything About a Car",
    "tools": [
      {
        "name": "NHTSA VIN Decoder",
        "desc": "Decodes a 17-character VIN into manufacturer, model, year, plant, and country.",
        "price": "Free",
        "rating": 9,
        "best": "Official VIN decoding",
        "link": "https://vpic.nhtsa.dot.gov/decoder/",
        "keyPrompt": {
          "core": "Use NHTSA VIN Decoder for this task: [TASK]. Context: Decodes a 17-character VIN into manufacturer, model, year, plant, and country. My objective is [OBJECTIVE]. Give me a clear, practical result, state assumptions, and use an output format that is easy to act on.",
          "refine": "Optimize my workflow in NHTSA VIN Decoder for [GOAL]. Starting point: [CURRENT SITUATION]. Constraints: [CONSTRAINTS]. Propose the best approach, explain the key steps, and finish with a concise checklist."
        }
      },
      {
        "name": "Car Scanner ELM OBD2",
        "desc": "Reads vehicle errors, Check Engine, RPM, and sensor data (needs an OBD2 adapter).",
        "price": "-",
        "rating": 9,
        "best": "Initial vehicle diagnosis",
        "link": "https://www.carscanner.info/",
        "keyPrompt": {
          "core": "Use Car Scanner ELM OBD2 for this task: [TASK]. Context: Reads vehicle errors, Check Engine, RPM, and sensor data (needs an OBD2 adapter). My objective is [OBJECTIVE]. Give me a clear, practical result, state assumptions, and use an output format that is easy to act on.",
          "refine": "Optimize my workflow in Car Scanner ELM OBD2 for [GOAL]. Starting point: [CURRENT SITUATION]. Constraints: [CONSTRAINTS]. Propose the best approach, explain the key steps, and finish with a concise checklist."
        }
      },
      {
        "name": "BlueDriver",
        "desc": "OBD2 hardware + app: fault codes, live data, diagnostic reports.",
        "price": "-",
        "rating": 9,
        "best": "Clearer diagnostics for everyday users",
        "link": "https://www.bluedriver.com/",
        "keyPrompt": {
          "core": "Use BlueDriver for this task: [TASK]. Context: OBD2 hardware + app: fault codes, live data, diagnostic reports. My objective is [OBJECTIVE]. Give me a clear, practical result, state assumptions, and use an output format that is easy to act on.",
          "refine": "Optimize my workflow in BlueDriver for [GOAL]. Starting point: [CURRENT SITUATION]. Constraints: [CONSTRAINTS]. Propose the best approach, explain the key steps, and finish with a concise checklist."
        }
      },
      {
        "name": "FIXD",
        "desc": "OBD2 sensor that explains Check Engine codes in simple language.",
        "price": "Some features require a subscription",
        "rating": 8,
        "best": "Simplified code explanations",
        "link": "https://www.fixd.com/",
        "keyPrompt": {
          "core": "Use FIXD for this task: [TASK]. Context: OBD2 sensor that explains Check Engine codes in simple language. My objective is [OBJECTIVE]. Give me a clear, practical result, state assumptions, and use an output format that is easy to act on.",
          "refine": "Optimize my workflow in FIXD for [GOAL]. Starting point: [CURRENT SITUATION]. Constraints: [CONSTRAINTS]. Propose the best approach, explain the key steps, and finish with a concise checklist."
        }
      },
      {
        "name": "OBD Fusion",
        "desc": "Live data, code reading, and vehicle monitoring via OBD2 adapter.",
        "price": "-",
        "rating": 9,
        "best": "Ongoing vehicle monitoring",
        "link": "https://www.obdsoftware.net/",
        "keyPrompt": {
          "core": "Use OBD Fusion for this task: [TASK]. Context: Live data, code reading, and vehicle monitoring via OBD2 adapter. My objective is [OBJECTIVE]. Give me a clear, practical result, state assumptions, and use an output format that is easy to act on.",
          "refine": "Optimize my workflow in OBD Fusion for [GOAL]. Starting point: [CURRENT SITUATION]. Constraints: [CONSTRAINTS]. Propose the best approach, explain the key steps, and finish with a concise checklist."
        }
      },
      {
        "name": "Electude Simulator",
        "desc": "Interactive automotive training simulator for practicing vehicle diagnostics and repair.",
        "price": "Paid (institutional)",
        "rating": 7,
        "best": "Automotive diagnostics training",
        "link": "https://simulator.electude.com"
      },
      {
        "name": "StartMyCar",
        "desc": "Tool for researching car pricing, specs and buying information before a purchase.",
        "price": "Free",
        "rating": 6,
        "best": "Researching a car before buying",
        "link": "https://startmycar.com"
      },
      {
        "name": "ModsNation",
        "desc": "Community and marketplace for 3D-printed car mods, parts and customization designs.",
        "price": "Free + paid",
        "rating": 6,
        "best": "3D-printed car mods & parts",
        "link": "https://modsnation.com"
      }
    ]
  },
  {
    "title": "Logistics & Supply Chain",
    "tools": [
      {
        "name": "Freightos",
        "desc": "Compares international freight rates (sea, air, road) and enables online booking.",
        "price": "Free + paid quotes",
        "rating": 9,
        "best": "Comparing international freight rates",
        "link": "https://www.freightos.com/",
        "keyPrompt": {
          "core": "Use Freightos to analyze this process/project: [PROCESS / TOPIC]. Context: [CONTEXT]. Objective: [OBJECTIVE]. Identify actors, inputs, outputs, bottlenecks, risks, KPIs, and improvement opportunities. Present the result in a structured professional format.",
          "refine": "Act as a senior process/logistics/academic analyst using Freightos. Review [DOCUMENT / PROCESS / DATA], identify gaps and inefficiencies, propose improvements, and prioritize them by impact, effort, risk, and feasibility."
        }
      },
      {
        "name": "project44",
        "desc": "Real-time visibility and tracking of multimodal supply chains.",
        "price": "Enterprise quote",
        "rating": 9,
        "best": "Real-time supply-chain tracking",
        "link": "https://www.project44.com/",
        "keyPrompt": {
          "core": "Use project44 to analyze this process/project: [PROCESS / TOPIC]. Context: [CONTEXT]. Objective: [OBJECTIVE]. Identify actors, inputs, outputs, bottlenecks, risks, KPIs, and improvement opportunities. Present the result in a structured professional format.",
          "refine": "Act as a senior process/logistics/academic analyst using project44. Review [DOCUMENT / PROCESS / DATA], identify gaps and inefficiencies, propose improvements, and prioritize them by impact, effort, risk, and feasibility."
        }
      },
      {
        "name": "Flexport",
        "desc": "Platform for freight management, customs clearance, and global logistics.",
        "price": "Quote-based",
        "rating": 9,
        "best": "Freight & customs management",
        "link": "https://www.flexport.com/",
        "keyPrompt": {
          "core": "Use Flexport to analyze this process/project: [PROCESS / TOPIC]. Context: [CONTEXT]. Objective: [OBJECTIVE]. Identify actors, inputs, outputs, bottlenecks, risks, KPIs, and improvement opportunities. Present the result in a structured professional format.",
          "refine": "Act as a senior process/logistics/academic analyst using Flexport. Review [DOCUMENT / PROCESS / DATA], identify gaps and inefficiencies, propose improvements, and prioritize them by impact, effort, risk, and feasibility."
        }
      },
      {
        "name": "SAP Ariba",
        "desc": "Manages procurement, suppliers, and tenders/bids.",
        "price": "Enterprise quote",
        "rating": 9,
        "best": "Procurement & supplier management",
        "link": "https://www.sap.com/products/spend-management/ariba.html",
        "keyPrompt": {
          "core": "Use SAP Ariba to analyze this process/project: [PROCESS / TOPIC]. Context: [CONTEXT]. Objective: [OBJECTIVE]. Identify actors, inputs, outputs, bottlenecks, risks, KPIs, and improvement opportunities. Present the result in a structured professional format.",
          "refine": "Act as a senior process/logistics/academic analyst using SAP Ariba. Review [DOCUMENT / PROCESS / DATA], identify gaps and inefficiencies, propose improvements, and prioritize them by impact, effort, risk, and feasibility."
        }
      },
      {
        "name": "Portcast",
        "desc": "AI-based forecasting of logistics demand and transit times.",
        "price": "Quote-based",
        "rating": 8,
        "best": "AI logistics forecasting",
        "link": "https://www.portcast.io/",
        "keyPrompt": {
          "core": "Use Portcast to analyze this process/project: [PROCESS / TOPIC]. Context: [CONTEXT]. Objective: [OBJECTIVE]. Identify actors, inputs, outputs, bottlenecks, risks, KPIs, and improvement opportunities. Present the result in a structured professional format.",
          "refine": "Act as a senior process/logistics/academic analyst using Portcast. Review [DOCUMENT / PROCESS / DATA], identify gaps and inefficiencies, propose improvements, and prioritize them by impact, effort, risk, and feasibility."
        }
      }
    ]
  },
  {
    "title": "BPMN & Process Modeling",
    "tools": [
      {
        "name": "Bizagi Modeler",
        "desc": "Free BPMN process modeling with online collaboration.",
        "price": "Free",
        "rating": 9,
        "best": "Accessible BPMN modeling",
        "link": "https://www.bizagi.com/en/platform/modeler",
        "keyPrompt": {
          "core": "Use Bizagi Modeler to analyze this process/project: [PROCESS / TOPIC]. Context: [CONTEXT]. Objective: [OBJECTIVE]. Identify actors, inputs, outputs, bottlenecks, risks, KPIs, and improvement opportunities. Present the result in a structured professional format.",
          "refine": "Act as a senior process/logistics/academic analyst using Bizagi Modeler. Review [DOCUMENT / PROCESS / DATA], identify gaps and inefficiencies, propose improvements, and prioritize them by impact, effort, risk, and feasibility."
        }
      },
      {
        "name": "Camunda",
        "desc": "BPMN workflow engine focused on business-process automation.",
        "price": "Free (open-source) + paid",
        "rating": 9,
        "best": "Business-process automation",
        "link": "https://camunda.com/",
        "keyPrompt": {
          "core": "Use Camunda to analyze this process/project: [PROCESS / TOPIC]. Context: [CONTEXT]. Objective: [OBJECTIVE]. Identify actors, inputs, outputs, bottlenecks, risks, KPIs, and improvement opportunities. Present the result in a structured professional format.",
          "refine": "Act as a senior process/logistics/academic analyst using Camunda. Review [DOCUMENT / PROCESS / DATA], identify gaps and inefficiencies, propose improvements, and prioritize them by impact, effort, risk, and feasibility."
        }
      },
      {
        "name": "Lucidchart",
        "desc": "Creates process diagrams, flowcharts, and BPMN schemas.",
        "price": "Free (limited) + paid",
        "rating": 9,
        "best": "Collaborative online diagrams",
        "link": "https://www.lucidchart.com/",
        "keyPrompt": {
          "core": "Use Lucidchart to analyze this process/project: [PROCESS / TOPIC]. Context: [CONTEXT]. Objective: [OBJECTIVE]. Identify actors, inputs, outputs, bottlenecks, risks, KPIs, and improvement opportunities. Present the result in a structured professional format.",
          "refine": "Act as a senior process/logistics/academic analyst using Lucidchart. Review [DOCUMENT / PROCESS / DATA], identify gaps and inefficiencies, propose improvements, and prioritize them by impact, effort, risk, and feasibility."
        }
      }
    ]
  },
  {
    "title": "Academic Writing & Thesis (PFE)",
    "tools": [
      {
        "name": "Grammarly",
        "desc": "Grammar/spelling correction and style improvement in English.",
        "price": "Free + Premium",
        "rating": 9,
        "best": "Correcting academic texts in English",
        "link": "https://www.grammarly.com/",
        "keyPrompt": {
          "core": "Use Grammarly to analyze this process/project: [PROCESS / TOPIC]. Context: [CONTEXT]. Objective: [OBJECTIVE]. Identify actors, inputs, outputs, bottlenecks, risks, KPIs, and improvement opportunities. Present the result in a structured professional format.",
          "refine": "Act as a senior process/logistics/academic analyst using Grammarly. Review [DOCUMENT / PROCESS / DATA], identify gaps and inefficiencies, propose improvements, and prioritize them by impact, effort, risk, and feasibility."
        }
      },
      {
        "name": "Scribbr",
        "desc": "Plagiarism detection and academic citation generation.",
        "price": "Pay-per-use",
        "rating": 9,
        "best": "Plagiarism checks & citations",
        "link": "https://www.scribbr.com/",
        "keyPrompt": {
          "core": "Use Scribbr to analyze this process/project: [PROCESS / TOPIC]. Context: [CONTEXT]. Objective: [OBJECTIVE]. Identify actors, inputs, outputs, bottlenecks, risks, KPIs, and improvement opportunities. Present the result in a structured professional format.",
          "refine": "Act as a senior process/logistics/academic analyst using Scribbr. Review [DOCUMENT / PROCESS / DATA], identify gaps and inefficiencies, propose improvements, and prioritize them by impact, effort, risk, and feasibility."
        }
      },
      {
        "name": "Consensus",
        "desc": "AI search engine for scientific articles that synthesizes consensus findings.",
        "price": "Free + Premium",
        "rating": 9,
        "best": "Quickly finding scientific consensus",
        "link": "https://consensus.app/",
        "keyPrompt": {
          "core": "Use Consensus to analyze this process/project: [PROCESS / TOPIC]. Context: [CONTEXT]. Objective: [OBJECTIVE]. Identify actors, inputs, outputs, bottlenecks, risks, KPIs, and improvement opportunities. Present the result in a structured professional format.",
          "refine": "Act as a senior process/logistics/academic analyst using Consensus. Review [DOCUMENT / PROCESS / DATA], identify gaps and inefficiencies, propose improvements, and prioritize them by impact, effort, risk, and feasibility."
        }
      },
      {
        "name": "SciSpace",
        "desc": "Assisted reading and summarizing of scientific papers via AI chat.",
        "price": "Free (limited) + paid",
        "rating": 9,
        "best": "Understanding complex scientific papers",
        "link": "https://typeset.io/",
        "keyPrompt": {
          "core": "Use SciSpace to analyze this process/project: [PROCESS / TOPIC]. Context: [CONTEXT]. Objective: [OBJECTIVE]. Identify actors, inputs, outputs, bottlenecks, risks, KPIs, and improvement opportunities. Present the result in a structured professional format.",
          "refine": "Act as a senior process/logistics/academic analyst using SciSpace. Review [DOCUMENT / PROCESS / DATA], identify gaps and inefficiencies, propose improvements, and prioritize them by impact, effort, risk, and feasibility."
        }
      }
    ]
  },
  {
    "title": "Data Analysis",
    "tools": [
      {
        "name": "Julius AI",
        "desc": "Analyzes and visualizes data through simple natural-language conversation.",
        "price": "Free (limited) + paid",
        "rating": 9,
        "best": "Analyzing data without coding",
        "link": "https://julius.ai/",
        "keyPrompt": {
          "core": "Analyze this dataset in Julius AI: [DATA / FILE]. Objective: [OBJECTIVE]. Clean obvious inconsistencies, define the required calculations, identify the most important KPIs, and explain the results. Provide formulas or step-by-step calculations where useful.",
          "refine": "Build a decision-ready analysis in Julius AI from [DATA]. Segment the results by [DIMENSIONS], identify trends/outliers, calculate [KPIs], and finish with 5 actionable recommendations. State assumptions and data limitations."
        }
      }
    ]
  },
  {
    "title": "Email Intelligence",
    "tools": [
      {
        "name": "Hunter.io",
        "desc": "Finds professional email patterns and public email addresses associated with a domain, with confidence indicators where available.",
        "price": "Free tier + paid plans",
        "rating": 8,
        "best": "Domain-level email discovery",
        "link": "https://hunter.io",
        "keyPrompt": {
          "core": "Analyze these emails with Hunter.io: [EMAILS]. Extract action items, deadlines, decisions, unresolved questions, owners, and important follow-ups. Do not infer sensitive facts that are not explicitly stated.",
          "refine": "Turn this email thread into an executive brief using Hunter.io: [THREAD]. Return summary, decisions, pending actions, responsible person if explicit, deadlines if explicit, and recommended next step."
        }
      },
      {
        "name": "EmailRep",
        "desc": "Provides an email reputation/risk profile using signals associated with the address and its history.",
        "price": "Free lookup + paid options",
        "rating": 8,
        "best": "Email reputation checks",
        "link": "https://emailrep.io",
        "keyPrompt": {
          "core": "Analyze these emails with EmailRep: [EMAILS]. Extract action items, deadlines, decisions, unresolved questions, owners, and important follow-ups. Do not infer sensitive facts that are not explicitly stated.",
          "refine": "Turn this email thread into an executive brief using EmailRep: [THREAD]. Return summary, decisions, pending actions, responsible person if explicit, deadlines if explicit, and recommended next step."
        }
      },
      {
        "name": "Have I Been Pwned",
        "desc": "Checks whether an email address appears in known data breaches and exposed datasets.",
        "price": "Free lookup + paid API options",
        "rating": 10,
        "best": "Breach exposure awareness",
        "link": "https://haveibeenpwned.com",
        "note": "Use only addresses you are authorized to check; results indicate exposure, not that the current password is known.",
        "keyPrompt": {
          "core": "Analyze these emails with Have I Been Pwned: [EMAILS]. Extract action items, deadlines, decisions, unresolved questions, owners, and important follow-ups. Do not infer sensitive facts that are not explicitly stated.",
          "refine": "Turn this email thread into an executive brief using Have I Been Pwned: [THREAD]. Return summary, decisions, pending actions, responsible person if explicit, deadlines if explicit, and recommended next step."
        }
      },
      {
        "name": "10 Minute Mail",
        "desc": "Disposable temporary email inbox for signing up to sites without exposing your real address.",
        "price": "Free",
        "rating": 8,
        "best": "Disposable temporary email",
        "link": "https://10minutemail.com"
      }
    ]
  },
  {
    "title": "Phone Number Intelligence",
    "tools": [
      {
        "name": "Truecaller",
        "desc": "Can identify a caller name and, in some cases, additional region or country information based on its dataset.",
        "price": "Free + paid features",
        "rating": 9,
        "best": "Caller identification & spam awareness",
        "link": "https://www.truecaller.com",
        "keyPrompt": {
          "core": "Use Truecaller only for lawful, privacy-respecting research about [NUMBER / PUBLIC PROFILE / IP]. Goal: [GOAL]. Use only information that is publicly available and appropriate to analyze. Do not expose private personal information or attempt to identify a private individual.",
          "refine": "Help me assess the public information associated with [INPUT] using Truecaller. Separate verified technical/public facts from uncertain matches, avoid sensitive personal data, and explain what cannot be reliably determined."
        }
      },
      {
        "name": "Getcontact",
        "desc": "Provides caller-identification and spam-label information based on its community and service data.",
        "price": "Free + paid features",
        "rating": 8,
        "best": "Caller identification",
        "link": "https://www.getcontact.com",
        "keyPrompt": {
          "core": "Use Getcontact only for lawful, privacy-respecting research about [NUMBER / PUBLIC PROFILE / IP]. Goal: [GOAL]. Use only information that is publicly available and appropriate to analyze. Do not expose private personal information or attempt to identify a private individual.",
          "refine": "Help me assess the public information associated with [INPUT] using Getcontact. Separate verified technical/public facts from uncertain matches, avoid sensitive personal data, and explain what cannot be reliably determined."
        }
      },
      {
        "name": "Sync.ME",
        "desc": "Can sometimes match a phone number to a public profile or name when the information is available.",
        "price": "Free + paid features",
        "rating": 8,
        "best": "Number-to-profile lookup",
        "link": "https://sync.me",
        "keyPrompt": {
          "core": "Use Sync.ME only for lawful, privacy-respecting research about [NUMBER / PUBLIC PROFILE / IP]. Goal: [GOAL]. Use only information that is publicly available and appropriate to analyze. Do not expose private personal information or attempt to identify a private individual.",
          "refine": "Help me assess the public information associated with [INPUT] using Sync.ME. Separate verified technical/public facts from uncertain matches, avoid sensitive personal data, and explain what cannot be reliably determined."
        }
      },
      {
        "name": "Numverify API",
        "desc": "Validates a phone number and can return country, carrier, and line-type metadata.",
        "price": "Free tier + paid plans",
        "rating": 9,
        "best": "Number validation & metadata",
        "link": "https://numverify.com",
        "keyPrompt": {
          "core": "Use Numverify API only for lawful, privacy-respecting research about [NUMBER / PUBLIC PROFILE / IP]. Goal: [GOAL]. Use only information that is publicly available and appropriate to analyze. Do not expose private personal information or attempt to identify a private individual.",
          "refine": "Help me assess the public information associated with [INPUT] using Numverify API. Separate verified technical/public facts from uncertain matches, avoid sensitive personal data, and explain what cannot be reliably determined."
        }
      }
    ]
  },
  {
    "title": "People & Social Search",
    "tools": [
      {
        "name": "Namechk",
        "desc": "Checks whether a username or name is available or already used across many social platforms.",
        "price": "Free lookup",
        "rating": 8,
        "best": "Username availability & footprint discovery",
        "link": "https://namechk.com",
        "keyPrompt": {
          "core": "Use Namechk only for lawful, privacy-respecting research about [NUMBER / PUBLIC PROFILE / IP]. Goal: [GOAL]. Use only information that is publicly available and appropriate to analyze. Do not expose private personal information or attempt to identify a private individual.",
          "refine": "Help me assess the public information associated with [INPUT] using Namechk. Separate verified technical/public facts from uncertain matches, avoid sensitive personal data, and explain what cannot be reliably determined."
        }
      },
      {
        "name": "Social Searcher",
        "desc": "Searches public social-media content and mentions for names, keywords, and hashtags.",
        "price": "Free limited search + paid",
        "rating": 8,
        "best": "Public social listening",
        "link": "https://www.social-searcher.com",
        "keyPrompt": {
          "core": "Use Social Searcher only for lawful, privacy-respecting research about [NUMBER / PUBLIC PROFILE / IP]. Goal: [GOAL]. Use only information that is publicly available and appropriate to analyze. Do not expose private personal information or attempt to identify a private individual.",
          "refine": "Help me assess the public information associated with [INPUT] using Social Searcher. Separate verified technical/public facts from uncertain matches, avoid sensitive personal data, and explain what cannot be reliably determined."
        }
      },
      {
        "name": "Sherlock",
        "desc": "A Python-based username search utility that checks for a username across many online services.",
        "price": "Free · open source",
        "rating": 9,
        "best": "Open-source username footprint research",
        "link": "https://github.com/sherlock-project/sherlock",
        "note": "Use for your own usernames or legitimate OSINT research; availability and accuracy vary by platform.",
        "keyPrompt": {
          "core": "Use Sherlock only for lawful, privacy-respecting research about [NUMBER / PUBLIC PROFILE / IP]. Goal: [GOAL]. Use only information that is publicly available and appropriate to analyze. Do not expose private personal information or attempt to identify a private individual.",
          "refine": "Help me assess the public information associated with [INPUT] using Sherlock. Separate verified technical/public facts from uncertain matches, avoid sensitive personal data, and explain what cannot be reliably determined."
        }
      },
      {
        "name": "Reddit",
        "desc": "Massive network of topic-based communities (subreddits) useful for research, discussions and public opinion.",
        "price": "Free",
        "rating": 9,
        "best": "Community discussion & research",
        "link": "https://reddit.com"
      }
    ]
  },
  {
    "title": "IP / Geolocation",
    "tools": [
      {
        "name": "IPinfo.io",
        "desc": "Provides IP geolocation and network metadata such as ASN, organization, and connection type.",
        "price": "Free tier + paid plans",
        "rating": 9,
        "best": "IP context & network metadata",
        "link": "https://ipinfo.io",
        "keyPrompt": {
          "core": "Use IPinfo.io only for lawful, privacy-respecting research about [NUMBER / PUBLIC PROFILE / IP]. Goal: [GOAL]. Use only information that is publicly available and appropriate to analyze. Do not expose private personal information or attempt to identify a private individual.",
          "refine": "Help me assess the public information associated with [INPUT] using IPinfo.io. Separate verified technical/public facts from uncertain matches, avoid sensitive personal data, and explain what cannot be reliably determined."
        }
      },
      {
        "name": "Grabify",
        "desc": "Creates trackable links that can log visitor connection metadata when a recipient follows the link.",
        "price": "Free / limited + paid features",
        "rating": 7,
        "best": "Consent-based link analytics",
        "link": "https://grabify.link",
        "note": "Tracking another person without clear consent can violate privacy and platform policies; use only for lawful, consent-based analytics.",
        "keyPrompt": {
          "core": "Use Grabify only for lawful, privacy-respecting research about [NUMBER / PUBLIC PROFILE / IP]. Goal: [GOAL]. Use only information that is publicly available and appropriate to analyze. Do not expose private personal information or attempt to identify a private individual.",
          "refine": "Help me assess the public information associated with [INPUT] using Grabify. Separate verified technical/public facts from uncertain matches, avoid sensitive personal data, and explain what cannot be reliably determined."
        }
      },
      {
        "name": "ViewDNS.info",
        "desc": "A broad DNS/network toolkit including DNS lookup, WHOIS, IP tools, and tracing utilities.",
        "price": "Free tools + paid/API options",
        "rating": 9,
        "best": "DNS, WHOIS & network diagnostics",
        "link": "https://viewdns.info",
        "keyPrompt": {
          "core": "Use ViewDNS.info only for lawful, privacy-respecting research about [NUMBER / PUBLIC PROFILE / IP]. Goal: [GOAL]. Use only information that is publicly available and appropriate to analyze. Do not expose private personal information or attempt to identify a private individual.",
          "refine": "Help me assess the public information associated with [INPUT] using ViewDNS.info. Separate verified technical/public facts from uncertain matches, avoid sensitive personal data, and explain what cannot be reliably determined."
        }
      }
    ]
  },
  {
    "title": "Breaches & Data Exposure",
    "tools": [
      {
        "name": "DeHashed",
        "desc": "A search service for breach/exposure data that may contain emails, IPs, and other identifiers, subject to access controls.",
        "price": "Paid / account-based",
        "rating": 8,
        "best": "Authorized exposure investigation",
        "link": "https://dehashed.com",
        "note": "Use only for lawful security research, incident response, or accounts you are authorized to investigate.",
        "keyPrompt": {
          "core": "Use DeHashed to check whether my own accounts or organization may have appeared in known data exposures. Scope: [MY EMAIL / MY DOMAIN / AUTHORIZED ASSETS]. Summarize what was exposed, affected dates/services if available, and defensive steps to secure the accounts.",
          "refine": "Create a defensive exposure-response checklist with DeHashed for [MY ACCOUNT / ORGANIZATION]. Prioritize password resets, MFA, session review, monitoring, and notification steps. Do not attempt to access, exploit, or retrieve unauthorized data."
        }
      },
      {
        "name": "Leak-Lookup",
        "desc": "A search interface for checking whether identifiers appear in breach-related datasets.",
        "price": "Paid / account-based",
        "rating": 8,
        "best": "Authorized breach research",
        "link": "https://leak-lookup.com",
        "note": "Do not use exposed data to access, impersonate, or target other people.",
        "keyPrompt": {
          "core": "Use Leak-Lookup to check whether my own accounts or organization may have appeared in known data exposures. Scope: [MY EMAIL / MY DOMAIN / AUTHORIZED ASSETS]. Summarize what was exposed, affected dates/services if available, and defensive steps to secure the accounts.",
          "refine": "Create a defensive exposure-response checklist with Leak-Lookup for [MY ACCOUNT / ORGANIZATION]. Prioritize password resets, MFA, session review, monitoring, and notification steps. Do not attempt to access, exploit, or retrieve unauthorized data."
        }
      },
      {
        "name": "Intelligence X (IntelX)",
        "desc": "Searches large collections of public, archived, and breach-related material with a focus on digital investigations.",
        "price": "Free limited search + paid plans",
        "rating": 9,
        "best": "Legitimate digital investigations",
        "link": "https://intelx.io",
        "note": "Use within applicable law, terms, and organizational authorization.",
        "keyPrompt": {
          "core": "Use Intelligence X (IntelX) to check whether my own accounts or organization may have appeared in known data exposures. Scope: [MY EMAIL / MY DOMAIN / AUTHORIZED ASSETS]. Summarize what was exposed, affected dates/services if available, and defensive steps to secure the accounts.",
          "refine": "Create a defensive exposure-response checklist with Intelligence X (IntelX) for [MY ACCOUNT / ORGANIZATION]. Prioritize password resets, MFA, session review, monitoring, and notification steps. Do not attempt to access, exploit, or retrieve unauthorized data."
        }
      }
    ]
  },
  {
    "title": "Life Organization",
    "tools": [
      {
        "name": "Tweek",
        "desc": "A simple weekly planner designed for clear, low-friction scheduling.",
        "price": "Free + paid features",
        "rating": 9,
        "best": "Simple weekly planning",
        "link": "https://tweek.so",
        "keyPrompt": {
          "core": "Use Tweek to turn this into an actionable plan: [GOAL]. Available time: [TIME]. Constraints: [CONSTRAINTS]. Break it into priorities, concrete tasks, deadlines, and a simple daily/weekly routine. Keep the plan realistic and easy to maintain.",
          "refine": "Help me improve my workflow in Tweek. Current situation: [CURRENT WORKFLOW]. Main problems: [PROBLEMS]. Desired outcome: [OUTCOME]. Propose a simpler system, explain the setup step by step, and define 3–5 indicators to track whether it works."
        }
      },
      {
        "name": "Sleepiest",
        "desc": "Tracks sleep and provides sleep-focused tools and routines.",
        "price": "Free + paid features",
        "rating": 8,
        "best": "Sleep routine tracking",
        "link": "https://www.sleepiest.com",
        "keyPrompt": {
          "core": "Use Sleepiest to turn this into an actionable plan: [GOAL]. Available time: [TIME]. Constraints: [CONSTRAINTS]. Break it into priorities, concrete tasks, deadlines, and a simple daily/weekly routine. Keep the plan realistic and easy to maintain.",
          "refine": "Help me improve my workflow in Sleepiest. Current situation: [CURRENT WORKFLOW]. Main problems: [PROBLEMS]. Desired outcome: [OUTCOME]. Propose a simpler system, explain the setup step by step, and define 3–5 indicators to track whether it works."
        }
      },
      {
        "name": "Tiimo",
        "desc": "Visual planning and routine support designed especially for people who benefit from neurodiversity-friendly organization.",
        "price": "Free trial + paid",
        "rating": 9,
        "best": "Visual routines & planning",
        "link": "https://www.tiimoapp.com",
        "keyPrompt": {
          "core": "Use Tiimo to turn this into an actionable plan: [GOAL]. Available time: [TIME]. Constraints: [CONSTRAINTS]. Break it into priorities, concrete tasks, deadlines, and a simple daily/weekly routine. Keep the plan realistic and easy to maintain.",
          "refine": "Help me improve my workflow in Tiimo. Current situation: [CURRENT WORKFLOW]. Main problems: [PROBLEMS]. Desired outcome: [OUTCOME]. Propose a simpler system, explain the setup step by step, and define 3–5 indicators to track whether it works."
        }
      },
      {
        "name": "Voidpet",
        "desc": "A virtual pet experience that encourages reflection around emotions and mood.",
        "price": "Free + paid features",
        "rating": 8,
        "best": "Mood reflection & emotional journaling",
        "link": "https://voidpet.com",
        "keyPrompt": {
          "core": "Use Voidpet to turn this into an actionable plan: [GOAL]. Available time: [TIME]. Constraints: [CONSTRAINTS]. Break it into priorities, concrete tasks, deadlines, and a simple daily/weekly routine. Keep the plan realistic and easy to maintain.",
          "refine": "Help me improve my workflow in Voidpet. Current situation: [CURRENT WORKFLOW]. Main problems: [PROBLEMS]. Desired outcome: [OUTCOME]. Propose a simpler system, explain the setup step by step, and define 3–5 indicators to track whether it works."
        }
      },
      {
        "name": "Ise",
        "desc": "A digital space for storing memories and personal moments with photos and videos.",
        "price": "Freemium / depends on plan",
        "rating": 8,
        "best": "Life memories archive",
        "link": "https://www.ise-app.com/",
        "keyPrompt": {
          "core": "Use Ise to turn this into an actionable plan: [GOAL]. Available time: [TIME]. Constraints: [CONSTRAINTS]. Break it into priorities, concrete tasks, deadlines, and a simple daily/weekly routine. Keep the plan realistic and easy to maintain.",
          "refine": "Help me improve my workflow in Ise. Current situation: [CURRENT WORKFLOW]. Main problems: [PROBLEMS]. Desired outcome: [OUTCOME]. Propose a simpler system, explain the setup step by step, and define 3–5 indicators to track whether it works."
        }
      },
      {
        "name": "I AM",
        "desc": "Positive affirmations and short motivational reminders for daily routines.",
        "price": "Free + paid features",
        "rating": 8,
        "best": "Daily affirmations",
        "link": "https://www.iam.app/",
        "keyPrompt": {
          "core": "Use I AM to turn this into an actionable plan: [GOAL]. Available time: [TIME]. Constraints: [CONSTRAINTS]. Break it into priorities, concrete tasks, deadlines, and a simple daily/weekly routine. Keep the plan realistic and easy to maintain.",
          "refine": "Help me improve my workflow in I AM. Current situation: [CURRENT WORKFLOW]. Main problems: [PROBLEMS]. Desired outcome: [OUTCOME]. Propose a simpler system, explain the setup step by step, and define 3–5 indicators to track whether it works."
        }
      },
      {
        "name": "Luna Diary",
        "desc": "A reflective diary experience centered around moods, journaling, and lunar themes.",
        "price": "Free + paid features",
        "rating": 8,
        "best": "Mood journaling",
        "link": "https://lunadiary.app/",
        "keyPrompt": {
          "core": "Use Luna Diary to turn this into an actionable plan: [GOAL]. Available time: [TIME]. Constraints: [CONSTRAINTS]. Break it into priorities, concrete tasks, deadlines, and a simple daily/weekly routine. Keep the plan realistic and easy to maintain.",
          "refine": "Help me improve my workflow in Luna Diary. Current situation: [CURRENT WORKFLOW]. Main problems: [PROBLEMS]. Desired outcome: [OUTCOME]. Propose a simpler system, explain the setup step by step, and define 3–5 indicators to track whether it works."
        }
      },
      {
        "name": "Plant Nanny",
        "desc": "Helps track daily water intake through a simple plant-growing metaphor.",
        "price": "Free + paid features",
        "rating": 8,
        "best": "Hydration reminders",
        "link": "https://plantnanny.app/",
        "keyPrompt": {
          "core": "Use Plant Nanny to turn this into an actionable plan: [GOAL]. Available time: [TIME]. Constraints: [CONSTRAINTS]. Break it into priorities, concrete tasks, deadlines, and a simple daily/weekly routine. Keep the plan realistic and easy to maintain.",
          "refine": "Help me improve my workflow in Plant Nanny. Current situation: [CURRENT WORKFLOW]. Main problems: [PROBLEMS]. Desired outcome: [OUTCOME]. Propose a simpler system, explain the setup step by step, and define 3–5 indicators to track whether it works."
        }
      },
      {
        "name": "Taskito",
        "desc": "Combines tasks, schedules, reminders, and timelines into one planning system.",
        "price": "Free + paid features",
        "rating": 9,
        "best": "All-in-one task planning",
        "link": "https://taskito.io",
        "keyPrompt": {
          "core": "Use Taskito to turn this into an actionable plan: [GOAL]. Available time: [TIME]. Constraints: [CONSTRAINTS]. Break it into priorities, concrete tasks, deadlines, and a simple daily/weekly routine. Keep the plan realistic and easy to maintain.",
          "refine": "Help me improve my workflow in Taskito. Current situation: [CURRENT WORKFLOW]. Main problems: [PROBLEMS]. Desired outcome: [OUTCOME]. Propose a simpler system, explain the setup step by step, and define 3–5 indicators to track whether it works."
        }
      },
      {
        "name": "21 Days Challenge",
        "desc": "Focuses on building a habit or completing a small personal challenge over a 21-day period.",
        "price": "Free / varies by app or platform",
        "rating": 8,
        "best": "Habit challenges",
        "link": "https://www.21dayschallengeapp.com/",
        "keyPrompt": {
          "core": "Use 21 Days Challenge to turn this into an actionable plan: [GOAL]. Available time: [TIME]. Constraints: [CONSTRAINTS]. Break it into priorities, concrete tasks, deadlines, and a simple daily/weekly routine. Keep the plan realistic and easy to maintain.",
          "refine": "Help me improve my workflow in 21 Days Challenge. Current situation: [CURRENT WORKFLOW]. Main problems: [PROBLEMS]. Desired outcome: [OUTCOME]. Propose a simpler system, explain the setup step by step, and define 3–5 indicators to track whether it works."
        }
      },
      {
        "name": "Touchnotes",
        "desc": "A digital notebook and planner for handwritten notes, ideas, annotations, and creative organization.",
        "price": "Free + paid features",
        "rating": 8,
        "best": "Beautiful digital notes & planners",
        "link": "https://www.touchnotes.com/",
        "keyPrompt": {
          "core": "Use Touchnotes to turn this into an actionable plan: [GOAL]. Available time: [TIME]. Constraints: [CONSTRAINTS]. Break it into priorities, concrete tasks, deadlines, and a simple daily/weekly routine. Keep the plan realistic and easy to maintain.",
          "refine": "Help me improve my workflow in Touchnotes. Current situation: [CURRENT WORKFLOW]. Main problems: [PROBLEMS]. Desired outcome: [OUTCOME]. Propose a simpler system, explain the setup step by step, and define 3–5 indicators to track whether it works."
        }
      },
      {
        "name": "Routine Planner",
        "desc": "Organizes daily routines, habits, and recurring tasks through structured day planning.",
        "price": "Free + paid features",
        "rating": 8,
        "best": "Daily routines & habit planning",
        "link": "https://routinery.app",
        "keyPrompt": {
          "core": "Use Routine Planner to turn this into an actionable plan: [GOAL]. Available time: [TIME]. Constraints: [CONSTRAINTS]. Break it into priorities, concrete tasks, deadlines, and a simple daily/weekly routine. Keep the plan realistic and easy to maintain.",
          "refine": "Help me improve my workflow in Routine Planner. Current situation: [CURRENT WORKFLOW]. Main problems: [PROBLEMS]. Desired outcome: [OUTCOME]. Propose a simpler system, explain the setup step by step, and define 3–5 indicators to track whether it works."
        }
      },
      {
        "name": "Dola AI",
        "desc": "AI calendar assistant that schedules events and sets reminders through natural chat.",
        "price": "Free + paid",
        "rating": 7,
        "best": "AI calendar & reminders assistant",
        "link": "https://dola.com"
      }
    ]
  }
];

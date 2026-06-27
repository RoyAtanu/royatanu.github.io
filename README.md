# Atanu Roy - R&D Engineering Leader Portfolio & Blog

Welcome to the repository for my personal portfolio and R&D engineering blog, accessible at [atanuroy.dev](https://atanuroy.dev). 

This is a modern, high-performance static website built with **Astro** and **TypeScript**, designed around performance-first and content-driven architectures. It completely replaces my legacy Bootstrap and Gulp template with an elegant, ultra-fast, and modular solution.

## 🚀 Tech Stack

- **Framework:** [Astro v4](https://astro.build/) — optimized static-site generation with near-zero shipping JS.
- **Language:** TypeScript — type-safe configuration, data models, and component structures.
- **Styling:** Scoped Vanilla CSS — utilizing CSS Custom Properties (variables) for theme management without third-party styling bloat.
- **Icons:** FontAwesome v6.
- **CI/CD:** GitHub Actions — fully automated build and deployment to GitHub Pages.

## ✨ Features

- **Dark & Light Mode:** Polished design system featuring smooth transitions and dark mode preferences saved via local storage with zero screen-flash.
- **Work History Timeline:** An interactive career tracker mapping 13+ years of enterprise R&D engineering and leadership journey.
- **Content Collections:** Built-in, type-safe blog collection validating Markdown metadata/frontmatter via Astro's schemas.
- **Custom Domain Conservation:** Native preservation of custom domain (`atanuroy.dev`) mapping in the automated build pipeline.

## 🛠️ Local Development

To run this project locally, ensure you have Node.js (v18 or higher) installed.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RoyAtanu/royatanu.github.io.git
   cd royatanu.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## ✍️ Writing a New Blog Post

The blog section is driven by Astro's **Content Collections**, which ensures type-safety for frontmatter metadata. 

To publish a new post, create a Markdown file in `src/content/blog/` (e.g., `src/content/blog/my-new-article.md`) and define the following metadata schema:

```markdown
---
title: "My Insightful Article Title"
pubDate: 2026-06-27
description: "A brief, compelling summary of the article."
author: "Atanu Roy"
tags: ["Engineering Leadership", "System Architecture", "Agile"]
---

Your content goes here in standard Markdown...
```

The system will validate the schema during development/build and automatically generate the route `/blog/my-new-article`.

## 📦 Deployment Workflow

The deployment is 100% automated via GitHub Actions (`.github/workflows/deploy.yml`). 

Whenever you push changes to the `main` or `master` branch:
1. GitHub Actions spins up a runner and installs dependencies.
2. The project is built using `npm run build`.
3. The resulting static assets (including `CNAME`) are uploaded and deployed to GitHub Pages.

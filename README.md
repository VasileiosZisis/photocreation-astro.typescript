# Studio Photo Creation by D

Visit the website: [studiophotocreationbyd.com](https://www.studiophotocreationbyd.com/)

## A portfolio website for a wedding photographer

Studio Photo Creation by D is a photography and video portfolio for Dimitris
Domouchtsis, a wedding and portrait photographer based in Paphos, Cyprus. The
site presents wedding, christening, proposal, family, and model galleries with a
premium editorial visual direction and a lightweight static architecture.

This repository is the Astro + TypeScript rebuild of the original React/Vite
portfolio. The rebuild keeps the content and gallery experience familiar while
moving the project to a stack that is simpler to optimize, easier to reason
about, and better suited to a mostly static photography website.

## What this project demonstrates

- Static Astro page generation for a media-heavy portfolio
- Type-safe gallery content with Astro Content Collections
- Manual, repository-owned gallery data instead of a CMS
- Cloudinary image and video delivery with URL transformations
- Framework-agnostic PhotoSwipe lightbox integration
- Plain CSS architecture using BEM naming
- SEO metadata, canonical URLs, sitemap, and robots.txt
- Responsive premium redesign with restrained scroll reveal animations
- Google Analytics and Google Tag Manager carried over from the original site
- Netlify-ready static output

## Current stack

- Astro
- TypeScript
- Plain CSS with BEM class naming
- Astro Content Collections
- Cloudinary
- PhotoSwipe
- `@astrojs/sitemap`
- Google Analytics / Google Tag Manager
- ESLint
- Netlify static deployment target

## Original project

The previous version was built with React, Vite, and TypeScript. It used:

- Material UI for layout
- React Helmet for SEO
- React Image Gallery for the image lightbox
- React Intersection Observer for animations

This rebuild replaces those client-side dependencies with Astro-rendered static
HTML, typed content files, a small browser script for PhotoSwipe, and a small
browser script for scroll reveal behavior.

## Site structure

Public pages:

- Home
- Contact
- Privacy Policy
- Cypriot Weddings
- English Weddings
- Christenings
- Proposals
- Families
- Models
- 404 page

Important folders:

- `src/pages` - Astro routes
- `src/layouts` - shared page shell and metadata rendering
- `src/components` - reusable Astro components
- `src/content/galleries` - manually maintained gallery content
- `src/data` - shared page and homepage data
- `src/styles` - plain CSS files organized by component/page
- `src/scripts` - targeted browser scripts for PhotoSwipe and scroll reveals
- `docs` - project brief, technical decisions, roadmap, milestones, and design notes

## Local development

```bash
npm install
npm run dev
```

Build and validation:

```bash
npm run lint
npm run typecheck
npm run build
npm run check
```

`npm run check` runs linting, TypeScript, and the production build.

## Netlify deployment

The project is prepared for static Netlify deployment with the settings in
`netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `22.12.0`
- Production `SITE_URL`: `https://www.studiophotocreationbyd.com`

For client review, the site can be deployed on the default Netlify URL without
connecting `www.studiophotocreationbyd.com`. During Netlify deploy previews,
Astro uses Netlify's preview URL for canonical and sitemap generation, and the
preview build is marked `noindex`.

For production deploys, `netlify.toml` sets
`SITE_URL=https://www.studiophotocreationbyd.com`, so canonical URLs, sitemap
URLs, robots.txt, and local business schema resolve to the canonical `www`
domain. Google Analytics and Google Tag Manager load only outside Netlify
preview URLs so review deploys do not pollute production analytics.

## Technical direction

The site is intentionally static-first. Astro renders the pages and gallery
HTML, while JavaScript is limited to the places that need browser behavior:
the image lightbox, the mobile navigation, and subtle scroll reveal animations.

Gallery data lives in typed content files so image lists, alt text, dimensions,
slugs, and SEO fields can be validated during development. Cloudinary remains
responsible for media hosting and transformations.

## Design direction

The redesign aims for a premium photography atelier feel: warm ivory surfaces,
ink-black typography, restrained champagne accents, large imagery, and quiet
motion. The full design notes are documented in [docs/design.md](docs/design.md).

## Project documentation

- [Project Brief](docs/project-brief.md)
- [Technical Decisions](docs/technical-decisions.md)
- [Roadmap](docs/roadmap.md)
- [Design Direction](docs/design.md)

Milestones:

- [Milestone 01: Astro Setup](docs/milestones/01-astro-setup.md)
- [Milestone 02: App Shell And BEM CSS](docs/milestones/02-app-shell-and-bem-css.md)
- [Milestone 03: Content Model And Routing](docs/milestones/03-content-model-and-routing.md)
- [Milestone 04: Homepage Vertical Slice](docs/milestones/04-homepage-vertical-slice.md)
- [Milestone 05: Gallery Vertical Slice](docs/milestones/05-gallery-vertical-slice.md)
- [Milestone 06: Remaining Pages Migration](docs/milestones/06-remaining-pages-migration.md)
- [Milestone 07: SEO, Accessibility, And Performance](docs/milestones/07-seo-accessibility-performance.md)
- [Milestone 08: Redesign Pass](docs/milestones/08-redesign-pass.md)
- [Milestone 09: Netlify Deployment](docs/milestones/09-netlify-deployment.md)

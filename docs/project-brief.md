# Project Brief

## Goal

Rebuild the Studio Photocreation website from the current Vite React app into a
static Astro site that is easier to optimize, easier to understand, and better
suited to a photography portfolio.

This is also a learning project. Every milestone is intentionally small and
should teach one Astro concept at a time.

## Current Source Project

Original project:

`C:\Users\gonea\repos\photocreation-react-ts`

Target Astro project:

`C:\Users\gonea\repos\photocreation-astro.typescript`

## Product Scope

The first pass should stay visually close to the current website. Redesign work
comes last, after the Astro version is complete and deployable.

Pages to migrate:

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

## Learning Goals

By the end of this rebuild, you should understand:

- How Astro pages and layouts work
- How Astro ships little JavaScript by default
- When to use Astro components versus client-side JavaScript
- How to model content with Astro Content Collections
- How to create static routes from structured content
- How to use Cloudinary URLs deliberately
- How to add a framework-agnostic lightbox
- How to prepare and deploy a static Astro site to Netlify

## Non-Goals For The First Pass

- No CMS
- No server-side database
- No full visual redesign until the final milestone
- No React component rewrite unless a temporary migration helper is needed
- No MUI

## Definition Of Done

The rebuild is done when:

- All existing public pages have Astro equivalents
- Gallery content is manually editable in typed content/data files
- The site builds successfully
- The site can be deployed to Netlify as a static site
- Metadata, canonical URLs, sitemap, and social previews are handled
- Main gallery interactions work without turning the whole site into a client app
- The visual result is close enough to the current site to compare page by page

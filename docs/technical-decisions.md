# Technical Decisions

## 1. Framework: Astro

Use Astro because this site is mostly static content, media, and galleries.
Astro is a better fit than a full React SPA because it can render static HTML
and only hydrate interactive pieces when needed.

Lesson:

Astro should be treated as the default renderer. JavaScript is added only where
the page needs browser interaction.

## 2. Language: TypeScript

Use TypeScript for configuration, content schemas, gallery data, and utility
functions.

Lesson:

TypeScript is most valuable here for preventing broken gallery data, missing alt
text, invalid slugs, and inconsistent page metadata.

## 3. Styling: Plain CSS With BEM

Use plain CSS files and BEM class naming.

Example:

```css
.gallery-card {}
.gallery-card__image {}
.gallery-card__caption {}
.gallery-card--featured {}
```

Lesson:

BEM makes plain CSS easier to maintain without adding a utility framework before
you understand Astro's component and layout model.

## 4. Content: Astro Content Collections

Use Content Collections for structured page and gallery data. Gallery files can
be edited manually in the repo.

Lesson:

Content Collections teach the difference between page templates and content
data. The page should not own hundreds of image objects directly.

## 5. Media: Cloudinary

Keep using Cloudinary for images and video. The first pass should reuse current
Cloudinary URLs, then add a cleanup/audit step before final launch.

Lesson:

Astro controls the HTML. Cloudinary controls media delivery and transformations.
Keep those responsibilities separate.

## 6. Lightbox: PhotoSwipe

Use PhotoSwipe for the gallery lightbox because it is framework-agnostic and can
be attached to static HTML.

Lesson:

Not every interactive feature needs a React component. Astro works well with
small, targeted browser scripts.

## 7. SEO: Astro Metadata Pattern

Use a shared SEO data shape and render metadata from layouts/pages. Replace the
old React Helmet approach.

Lesson:

In Astro, metadata is part of the page render, not a client-side afterthought.

## 8. Deployment: Netlify Static Site

Deploy as a static site on Netlify. No special server adapter should be needed
unless a future feature requires server rendering.

Lesson:

Static output keeps deployment simple. Add server features only when the product
needs them.

## 9. Redesign Timing

Do not redesign during migration. First rebuild the current behavior. Redesign
after the Astro version is stable.

Lesson:

Separating migration from redesign makes problems easier to debug. If something
breaks, you know whether it came from the framework move or the visual change.

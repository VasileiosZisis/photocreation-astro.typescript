# Learning Log

Use this file to capture short notes while building the Astro version.

## Entry Template

```text
Date:
Milestone:
Changed:
Learned:
Question:
```

## Entries

### 2026-05-09

Milestone:

07 - SEO, Accessibility, And Performance

Changed:

Added Astro sitemap output, robots.txt, richer static social metadata, a hero
video poster, Cloudinary thumbnail transforms for key media, visible focus
styles, and route/output checks for launch readiness.

Learned:

Astro renders SEO metadata and sitemap URLs at build time, but launch quality
still depends on auditing generated HTML, media URLs, focus behavior, and where
page-specific JavaScript is actually referenced.

Question:

None.

### 2026-05-09

Milestone:

06 - Remaining Pages Migration

Changed:

Migrated the remaining gallery data, contact page, privacy policy, and 404 page
using the shared Astro layout and the gallery route pattern proven in the
vertical slice.

Learned:

After the first Astro gallery and homepage patterns are proven, the remaining
migration is mostly repetition: move content into validated data, keep static
pages simple, and verify every route after each batch.

Question:

None.

### 2026-05-09

Milestone:

05 - Gallery Vertical Slice

Changed:

Moved the full Cypriot weddings image list into a validated content entry,
created a dynamic gallery route, added a static masonry-style gallery grid, and
connected PhotoSwipe as progressive enhancement.

Learned:

The gallery page can render as static HTML from content collections, while
PhotoSwipe only adds focused browser behavior to image links that already work
without JavaScript.

Question:

None.

### 2026-05-09

Milestone:

04 - Homepage Vertical Slice

Changed:

Rebuilt the homepage with Astro markup, a data-driven category card component,
Cloudinary media, BEM CSS, static metadata, and preserved Organization JSON-LD.

Learned:

Astro can render the full homepage path without React: data modules feed
components, components render static HTML, and page-specific CSS can stay
isolated to the route and repeated component.

Question:

None.

### 2026-05-09

Milestone:

03 - Content Model And Routing

Changed:

Added the final route checklist, typed page metadata, gallery data types, an
Astro content collection schema, and a sample Cypriot weddings gallery entry.

Learned:

Astro content collections validate manually edited gallery data at build time,
so route templates can stay separate from large image lists.

Question:

None.

### 2026-05-09

Milestone:

02 - App Shell And BEM CSS

Changed:

Added the shared Astro layout, static site header, footer, global CSS foundation,
and BEM component styles. The homepage now renders through the layout.

Learned:

Astro layouts replace the React outlet shell by wrapping page content with a
`<slot />`, while small browser behavior can stay isolated to the component
that needs it.

Question:

None.

### 2026-05-09

Milestone:

01 - Astro Setup

Changed:

Created the Astro + TypeScript scaffold, installed dependencies, added the
standard project folders, and kept the existing planning docs in place.

Learned:

Astro uses `src/pages` for file-based routes, and the starter page renders to
static HTML unless browser JavaScript is added explicitly.

Question:

None.

### 2026-05-09

Milestone:

Planning

Changed:

Created the project planning docs, technical decisions, and lesson-sized
milestones.

Learned:

The rebuild will be easier to understand if migration, deployment, and redesign
are kept as separate phases.

Question:

None yet.

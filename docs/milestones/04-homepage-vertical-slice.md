# Milestone 04: Homepage Vertical Slice

## Goal

Rebuild the homepage close to the current visual design.

## Lesson

A vertical slice proves the full page path: layout, components, CSS, media,
metadata, and build output.

## Tasks

### Task 4.1: Build The Hero Video Section

Lesson:

Astro can render video markup directly. No client framework is needed for a
static background video.

Expected behavior:

- Cloudinary video loads
- Video is muted, loops, and autoplays
- Layout stays close to the current homepage

Verification:

Check desktop and mobile widths.

### Task 4.2: Build The Transition Section

Lesson:

Start with static layout first. Add scroll animation only after the content is
correct.

Expected behavior:

- Text and images match the current composition closely
- Images have useful `alt` text
- CSS uses BEM class names

### Task 4.3: Build Category Links

Lesson:

Repeated homepage category blocks should become a component.

Create:

```text
src/components/CategoryCard.astro
```

BEM examples:

```css
.category-card {}
.category-card__image {}
.category-card__title {}
```

Expected behavior:

- Each category links to the correct route
- The design is close to the current category section

### Task 4.4: Add Homepage Metadata And Schema

Lesson:

JSON-LD can be rendered at build time inside the Astro page or layout.

Expected behavior:

- Page title and description render in HTML
- Organization schema is preserved from the old homepage

Verification:

View page source and confirm metadata exists without client JavaScript.

## Done When

- Homepage renders close to the current site
- No React is needed
- Metadata is server-rendered/static
- `npm run build` succeeds

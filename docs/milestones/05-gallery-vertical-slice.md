# Milestone 05: Gallery Vertical Slice

## Goal

Build one complete gallery page from structured data and connect PhotoSwipe.

Recommended first gallery:

`/cypriot-weddings/`

## Lesson

This is the most important learning milestone. A static Astro page can render
the gallery grid, while a small browser script can add lightbox behavior.

## Tasks

### Task 5.1: Move One Gallery Into Data

Lesson:

The page template should not contain hundreds of image objects.

Expected result:

The selected gallery has:

- Title
- Description
- SEO metadata
- Image list

Verification:

Invalid or missing required fields should fail TypeScript or content validation.

### Task 5.2: Create Gallery Page Template

Lesson:

Astro can generate repeated pages from content entries.

Create:

```text
src/pages/[gallery].astro
```

or use explicit route files first if that feels easier.

Expected behavior:

- The route renders one gallery from data
- The gallery page uses the shared layout
- The grid works without lightbox JavaScript

### Task 5.3: Create Gallery Grid Component

Lesson:

Keep the grid as static HTML. The lightbox should enhance it.

Create:

```text
src/components/GalleryGrid.astro
```

BEM examples:

```css
.gallery-grid {}
.gallery-grid__item {}
.gallery-grid__image {}
.gallery-grid__caption {}
```

Expected behavior:

- Uses responsive image URLs from Cloudinary
- Has meaningful alt text
- Keeps the masonry-like visual direction if practical

### Task 5.4: Add PhotoSwipe

Lesson:

PhotoSwipe is a progressive enhancement. The gallery links should still point to
images if JavaScript fails.

Create:

```text
src/scripts/photoswipe-gallery.ts
```

Expected behavior:

- Clicking an image opens the lightbox
- The page does not become a full client-side app
- Only the gallery script ships to gallery pages

Verification:

- Open one image
- Navigate next/previous
- Close the lightbox
- Confirm the build succeeds

## Done When

- One gallery route renders from data
- PhotoSwipe works
- The page is usable without global client-side React
- The pattern is clear enough to copy to remaining galleries

# Milestone 07: SEO, Accessibility, And Performance

## Goal

Prepare the migrated site for launch-quality static output.

## Lesson

Astro gives a strong starting point, but SEO and performance still depend on
good page metadata, good media markup, accessible HTML, and restrained
JavaScript.

## Tasks

### Task 7.1: Replace Helmet With Static Metadata

Lesson:

The old React app used client-side Helmet. Astro should output metadata directly
in the HTML.

Expected behavior:

Each page has:

- Title
- Meta description
- Canonical URL
- Open Graph title
- Open Graph description
- Open Graph image where useful

Verification:

Use browser view-source or curl to confirm metadata appears in the initial HTML.

### Task 7.2: Add Sitemap

Lesson:

A sitemap helps search engines discover static routes.

Suggested package:

```bash
npx astro add sitemap
```

Expected behavior:

The production build emits a sitemap.

### Task 7.3: Audit Images And Video

Lesson:

Image-heavy sites win or lose on media discipline.

Check:

- Alt text
- Responsive Cloudinary transformations
- Lazy loading below the first viewport
- Avoiding oversized thumbnails
- Poster image for the hero video if needed

Expected behavior:

The homepage and galleries load reasonable image sizes.

### Task 7.4: Accessibility Pass

Lesson:

Static HTML is not automatically accessible. Semantics and focus behavior still
matter.

Check:

- Landmarks
- Headings
- Link text
- Keyboard access
- Focus state
- Lightbox close behavior

### Task 7.5: Performance Pass

Lesson:

The Astro version should ship less JavaScript than the old React SPA.

Check:

- Bundle size
- Lighthouse or browser performance panel
- No unnecessary global scripts
- PhotoSwipe only loads where needed

## Done When

- Metadata is present in initial HTML
- Sitemap exists
- Core pages pass a manual accessibility review
- The site ships only necessary JavaScript
- Build output is ready for Netlify

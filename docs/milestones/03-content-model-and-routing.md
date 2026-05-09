# Milestone 03: Content Model And Routing

## Goal

Design the data model for pages and galleries before migrating every page.

## Lesson

Astro routes are files, but repeated route content should come from structured
data. The route template and the gallery data should be separate.

## Tasks

### Task 3.1: Define The Route Map

Lesson:

Write routes down before creating files. This avoids accidental URL changes.

Target routes:

```text
/
/contact/
/privacy-policy/
/cypriot-weddings/
/english-weddings/
/christenings/
/proposals/
/families/
/models/
```

Expected result:

Create a route checklist in this milestone file or in the learning log.

### Task 3.2: Design Page Metadata

Lesson:

Astro should render title, description, canonical URL, and Open Graph tags at
build time.

Suggested type:

```ts
type SeoMeta = {
  title: string;
  description: string;
  canonicalPath: string;
  image?: string;
};
```

Expected result:

Every page has a metadata object before its visual migration starts.

### Task 3.3: Create Gallery Data Shape

Lesson:

Gallery items should be typed, predictable, and easy to edit manually.

Suggested type:

```ts
type GalleryImage = {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
};
```

Expected result:

One gallery can be represented without importing a React page file.

### Task 3.4: Choose Content Location

Lesson:

Use Content Collections when content needs validation. Use plain `src/data`
when a small utility module is enough.

Recommended first pass:

- `src/content/galleries/` for gallery entries
- `src/content.config.ts` for schemas

Verification:

Astro validates at least one gallery content file.

## Done When

- Route list is final
- Metadata shape is agreed
- Gallery item shape is agreed
- One sample gallery content file validates

## Route Checklist

- [x] `/`
- [x] `/contact/`
- [x] `/privacy-policy/`
- [x] `/cypriot-weddings/`
- [x] `/english-weddings/`
- [x] `/christenings/`
- [x] `/proposals/`
- [x] `/families/`
- [x] `/models/`

## Agreed Shapes

Page metadata:

```ts
type SeoMeta = {
  title: string;
  description: string;
  canonicalPath: SiteRoute;
  image?: string;
};
```

Gallery image:

```ts
type GalleryImage = {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
};
```

Content location:

- Gallery entries live in `src/content/galleries/`.
- The validation schema lives in `src/content.config.ts`.
- Shared page metadata lives in `src/data/pages.ts`.

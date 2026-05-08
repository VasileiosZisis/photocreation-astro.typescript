# Milestone 06: Remaining Pages Migration

## Goal

Use the proven patterns from the homepage and first gallery to migrate every
remaining page.

## Lesson

After the vertical slices are proven, migration becomes repetition. Repetition
is useful here because it reinforces Astro routing, components, and data
modeling.

## Tasks

### Task 6.1: Migrate Remaining Gallery Data

Lesson:

Move one gallery at a time. Validate it before starting the next one.

Gallery checklist:

- English Weddings
- Christenings
- Proposals
- Families
- Models

Expected behavior:

Each gallery uses the same template unless there is a real reason not to.

Verification:

Every gallery route builds and opens in the browser.

### Task 6.2: Migrate Contact Page

Lesson:

Static content pages are normal Astro pages. Embedded maps and external links do
not require React.

Expected behavior:

- Contact links work
- Map embed works
- Address and social links match the existing site
- Images have alt text

### Task 6.3: Migrate Privacy Policy

Lesson:

Long text pages should be readable and maintainable. Keep content structure
simple.

Expected behavior:

- Content matches the existing page
- External links are preserved
- Typography is readable on mobile

### Task 6.4: Add 404 Page

Lesson:

Astro supports static error pages through route files.

Expected behavior:

- Unknown routes show a helpful 404 page
- The 404 page links back to the homepage or contact page

## Done When

- All public routes exist
- All route URLs match the current site
- The shared layout is used consistently
- The build succeeds after each migrated page

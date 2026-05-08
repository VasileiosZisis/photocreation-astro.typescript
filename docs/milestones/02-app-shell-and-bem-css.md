# Milestone 02: App Shell And BEM CSS

## Goal

Create the shared layout, navigation, footer, and global CSS foundation.

## Lesson

Astro layouts wrap pages. This replaces the current React `App.tsx` outlet
pattern with a server-rendered layout.

## Tasks

### Task 2.1: Create The Base Layout

Lesson:

An Astro layout receives page content through `<slot />`.

Create:

```text
src/layouts/BaseLayout.astro
```

Expected behavior:

- Renders the document structure
- Includes metadata placeholders
- Includes nav, main content, and footer
- Imports global CSS once

Verification:

The homepage renders through the layout.

### Task 2.2: Create Navigation

Lesson:

Navigation can be static Astro markup unless it needs mobile menu state.

Create:

```text
src/components/SiteHeader.astro
```

BEM examples:

```css
.site-header {}
.site-header__nav {}
.site-header__link {}
.site-header__link--active {}
```

Expected behavior:

- Links match the current site routes
- Active state can be added later
- No JavaScript unless a mobile menu needs it

### Task 2.3: Create Footer

Lesson:

Repeated UI belongs in components, even when it is static HTML.

Create:

```text
src/components/SiteFooter.astro
```

Expected behavior:

- Footer content matches the current site closely
- Social/contact links are preserved

### Task 2.4: Create Global Style Foundation

Lesson:

Global CSS should define tokens and defaults. Component CSS should handle
component-specific classes.

Create:

```text
src/styles/global.css
```

Include:

- CSS custom properties
- Reset/base styles
- Font defaults
- Body/background defaults
- Link defaults

Verification:

The site has a stable base style without component-specific clutter in the
global file.

## Done When

- All pages can use `BaseLayout`
- Header and footer render
- BEM naming is established
- Global CSS is imported exactly once

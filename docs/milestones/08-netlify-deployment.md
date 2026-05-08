# Milestone 08: Netlify Deployment

## Goal

Deploy the Astro site to Netlify as a static site.

## Lesson

For this project, Netlify should only need the build command and publish
directory. Keep deployment static unless a future feature requires server
rendering.

## Tasks

### Task 8.1: Confirm Build Settings

Lesson:

Static deployment is mostly configuration discipline.

Recommended Netlify settings:

```text
Build command: npm run build
Publish directory: dist
```

Expected behavior:

Netlify builds the same output as the local production build.

### Task 8.2: Add Netlify Config

Lesson:

`netlify.toml` keeps deployment settings versioned in the repo.

Create:

```text
netlify.toml
```

Suggested content:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

Expected behavior:

The deploy settings are clear without relying only on dashboard memory.

### Task 8.3: Deploy Preview

Lesson:

Use deploy previews to check real production output before changing DNS.

Check:

- Home page
- One gallery page
- Contact page
- 404 page
- Sitemap
- Social preview metadata

### Task 8.4: Domain And Launch Checklist

Lesson:

Launch is more than a successful build. URLs, redirects, and metadata need a
final check.

Check:

- Existing URLs still work
- Canonical URLs use the production domain
- `www` and apex behavior is correct
- Old site can be restored if needed

## Done When

- Netlify deploy preview works
- Production build matches local expectations
- Launch checklist is complete
- No redesign work is mixed into deployment

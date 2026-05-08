# Milestone 01: Astro Setup

## Goal

Create a working Astro + TypeScript project in this repo.

## Lesson

Astro projects are file-based. The `src/pages` folder defines routes, and
components render to static HTML by default.

## Tasks

### Task 1.1: Create The Astro App

Lesson:

The project scaffold creates the basic folders and scripts. Do not add extra
libraries until the base app builds.

Suggested command:

```bash
npm create astro@latest .
```

Recommended choices:

- Empty or minimal template
- TypeScript enabled
- Install dependencies

Expected result:

- `astro.config.mjs` exists
- `src/pages/index.astro` exists
- `package.json` has Astro scripts

Verification:

```bash
npm run dev
npm run build
```

### Task 1.2: Add Project Folders

Lesson:

A predictable folder structure makes future Astro concepts easier to learn.

Create:

```text
src/components/
src/layouts/
src/styles/
src/content/
src/data/
src/scripts/
```

Expected result:

The repo has a clear place for UI components, layouts, content collections,
plain data, and small browser scripts.

### Task 1.3: Add A Learning Log

Lesson:

Short notes make the project useful as a learning reference later.

Create:

```text
docs/learning-log.md
```

Each entry should include:

- Date
- Milestone
- What changed
- What was learned

Verification:

The first entry explains what Astro created during setup.

## Done When

- The default Astro page runs locally
- The project builds
- The folder structure is in place
- The learning log has its first entry

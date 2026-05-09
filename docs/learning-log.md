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

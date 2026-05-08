# Roadmap

This roadmap is ordered to create one complete vertical slice before migrating
every page. That keeps the project understandable and avoids repeating mistakes
across all gallery pages.

## Milestone Order

1. [Astro Setup](milestones/01-astro-setup.md)
2. [App Shell And BEM CSS](milestones/02-app-shell-and-bem-css.md)
3. [Content Model And Routing](milestones/03-content-model-and-routing.md)
4. [Homepage Vertical Slice](milestones/04-homepage-vertical-slice.md)
5. [Gallery Vertical Slice](milestones/05-gallery-vertical-slice.md)
6. [Remaining Pages Migration](milestones/06-remaining-pages-migration.md)
7. [SEO, Accessibility, And Performance](milestones/07-seo-accessibility-performance.md)
8. [Netlify Deployment](milestones/08-netlify-deployment.md)
9. [Redesign Pass](milestones/09-redesign-pass.md)

## Suggested Working Rule

Each milestone should end with:

- A successful build
- A short note about what was learned
- A small visual or browser verification
- No unrelated refactors

## First Vertical Slice

The first useful slice is:

- Astro project boots
- Layout, nav, and footer exist
- Homepage renders
- One gallery route renders from data
- One gallery opens in PhotoSwipe

After that slice works, repeat the pattern for the remaining pages.

## Learning Rhythm

For each task:

1. Read the lesson note
2. Make the smallest code change that proves the concept
3. Run the relevant check
4. Write one sentence in a learning log or commit message

Example learning note:

`Learned that Astro components render to HTML by default and do not ship client JavaScript unless I add it.`

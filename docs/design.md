# Design Direction

## Positioning

Studio Photo Creation by D should feel like a premium photography atelier:
quiet, editorial, personal, and image-led. The site should support luxury
weddings and family celebrations without feeling like a generic wedding vendor
template.

## Visual Thesis

Warm ivory paper, ink-black typography, soft olive depth, and restrained
champagne accents around large photographic moments.

## Typography

- Display: Cormorant Garamond
- Body: Manrope
- Display type is used for page titles, hero language, and major section
  headings.
- Body type is used for navigation, details, captions, contact links, and
  supporting copy.

## Palette

- Paper: `#f5f0e8`
- Deep paper: `#e6dccd`
- Ink: `#181614`
- Charcoal: `#26231f`
- Mist: `#8e877c`
- Olive: `#59604b`
- Wine: `#7c3f3f`
- Gold: `#b99b62`

Gold is the only primary accent. Wine and olive are atmospheric support colors,
not call-to-action colors.

## Texture And Depth

The site avoids flat color blocks where possible. Depth comes from:

- subtle repeating-line paper texture
- low-opacity radial color fields
- editorial background shapes
- soft image shadows
- full-bleed photography and video

Textures should stay quiet so photography remains the dominant visual asset.

## Layout Rules

- Homepage hero uses full-bleed video and a single clear text column.
- Gallery category cards are image-led and grouped in a responsive grid.
- Gallery pages prioritize browsing speed with a dense masonry rhythm.
- Contact page keeps all details visible and scannable, with the studio image
  and Google Maps kept as conversion support.
- Cards are reserved for image/category/detail surfaces, not generic page
  containers.

## Interaction Rules

- Hero copy uses a restrained entrance animation.
- Text and images reveal on scroll with staggered timing.
- Images lift or subtly desaturate on hover.
- Buttons use pill shapes, strong uppercase labels, and gold/ink contrast.
- Focus states use the gold accent and must remain visible on all backgrounds.
- Motion must respect `prefers-reduced-motion`.

## Scroll Motion System

The site uses a small reusable motion layer:

- `data-motion="text-left"` reveals copy from the left.
- `data-motion="text-right"` reveals copy from the right.
- `data-motion="image"` reveals images with a soft scale and saturation change.
- `data-motion="gallery"` gives masonry items a lighter reveal.

Use this system for atmosphere and hierarchy only. Avoid animating every detail
on a page, do not tie image position to scroll, and keep gallery motion light
enough for large image collections.

## Content Rules

- Copy should be short and confident.
- Do not add design explanations into the UI.
- Contact details must keep the current phone, email, social media, address,
  and Google Maps embed.
- Photography should lead every important page.

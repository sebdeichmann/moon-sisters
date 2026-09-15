# Retreat subpage preview

## Purpose

Recreate and polish the supplied Lovable retreat page as a compelling Moon Sisters subpage at `/retreat/`, while keeping production untouched until Julie approves the preview.

## Design review and changes

- Preserved the North Sea atmosphere, warm earth palette, German copy, venue photography and calm tone.
- Strengthened the hero hierarchy and made the Moon Sisters identity and route back to the main website explicit.
- Reworked the long narrative into an editorial rhythm with sensory pauses, pull-lines and clearer section changes.
- Replaced the generic feature-card feeling with quieter typographic rows and an asymmetric venue gallery.
- Consolidated date, venue, group size, price, included services, travel note and minimum-participant condition into one scannable practical section.
- Added repeated but restrained booking links, direct email subjects, legal/footer navigation and a main-site retreat link.
- Added route-specific metadata, sitemap entry and favicon.
- Optimized the two heaviest supplied images from roughly 4.7 MB combined to roughly 0.4 MB combined.

## Revision after Julie's review

- Removed the early women’s-circle photograph; the section after “Mehr spüren. Weniger müssen.” is now a confident, text-led editorial passage.
- Added an early “Auf einen Blick” section with price, accommodation, food, materials and facilitation before the longer retreat-fit section.
- Expanded the later practical section with arrival/departure times, double-room accommodation, bedding and towel hire, the full retreat programme and exclusions.
- Added seven approved FAQ accordions from `Moon Sisters Retreat – Informationen`, including participation, touch, accommodation, food, cancellation and minimum-participant terms.
- Cancellation information is deliberately contained in the FAQ: visible before booking, but separated from the emotional invitation.

## Editorial redesign after second review

- Removed the enclosing practical-information card and rebuilt the section as an open editorial grid with a normal reading order.
- Removed the unexplained indentation from “Gut zu wissen” and aligned the note directly with its heading.
- Reintroduced imagery early in the page with a genuine Alte Schule interior photograph and an explicit caption.
- Cropped the non-venue building out of the atmospheric North Sea hero so it cannot be mistaken for the Alte Schule.
- Reduced the scale and drama of the closing statement and moved it onto a quieter light background.
- Added a restrained invitation to the free Frauenabend on 29 September as a low-commitment way to meet Moon Sisters; the link opens the corresponding event on the main page.

## Files

- `src/RetreatPage.jsx` — retreat page structure and route metadata
- `src/content/retreatContent.js` — retreat copy and practical data
- `src/App.jsx` — `/retreat/` route and link from the main offer
- `src/content/siteContent.json` — main-page retreat link
- `src/styles/global.css` — scoped retreat visual system and responsive layouts
- `public/assets/retreat/` — optimized supplied retreat and venue imagery
- `public/favicon.svg`, `public/sitemap.xml`, `index.html` — browser and discovery metadata
- `docs/retreat-responsive-check.json` — browser QA results

## Verification

- `npm audit fix`: 0 remaining vulnerabilities
- `npm run build`: successful Vite production build
- Desktop, tablet and mobile route checks: no horizontal overflow
- Required content, seven working FAQ items, booking links and home links present
- Main-page “Mehr zum Retreat” link present
- Fonts loaded; no blocking JavaScript errors
- Visual inspection completed at 1440 px and 390 px in a bounded two-pass review

## Preview release

- Source commit used for the revised tested build: `1d2e647`
- Netlify deploy ID: `6aa91cab70dd7a63cc81294e`
- Review URL: `https://6aa91cab70dd7a63cc81294e--moon-sisters-superjana-preview.netlify.app/retreat/`
- Externally verified: HTTP 200 for the retreat, home, legal routes, hero image, venue image and favicon
- Browser verified at 390 px, 768 px and 1440 px: expected content, no horizontal overflow, fonts loaded and no console errors
- Preview response carries `X-Robots-Tag: noindex, nofollow` and has no unintended login wall

### Current editorial review build

- Source commit: `31b3fcd`
- Netlify deploy ID: `6aa92ce42329e4016eae8981`
- Review URL: `https://6aa92ce42329e4016eae8981--moon-sisters-superjana-preview.netlify.app/retreat/`
- Final small review changes: calmer type transitions below “Weniger müssen”, more whitespace between text modes, and all dividers removed from “Was dich erwartet”.
- Added Julie's two Alte Schule photographs to the venue section after cropping away embedded black bars and incidental packaging. The original movement-room and kitchen photographs remain in place; the venue gallery now contains all four images.
- Externally verified: HTTP 200 for the retreat and all four venue photographs; the deployed DOM contains all four images at stable responsive dimensions.
- Browser verified at 390 px, 768 px and 1440 px: seven working FAQs, Frauenabend invitation and target anchor, no horizontal overflow, loaded fonts and no console errors.
- Preview response carries `X-Robots-Tag: noindex, nofollow`.

Preview only. Do not push to `main` or deploy to `moon-sisters.de` until Julie explicitly approves this exact preview.

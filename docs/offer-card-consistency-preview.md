# Offer card consistency preview

## Request

Make the retreat offer on the Moon Sisters homepage use the same full-width format as the other offers, without changing its content or the rest of the page. Define a reusable format for replacement poster artwork.

## Change

- Added the existing `featured` offer flag to the retreat content entry.
- The retreat now occupies the full offer-grid width and uses the same desktop split-card and mobile stacked-card component as the Frauenabend and Frauenkreis.
- No copy, links, retreat-page content or other homepage sections were changed.

## Poster specification

For future poster artwork use:

- 4:5 portrait aspect ratio
- 1200 × 1500 px recommended
- sRGB JPG or WebP
- essential lettering and logos at least 100 px inside every edge
- no essential small body copy baked into the image

All three supplied posters have now been normalized to 1200 × 1500 px WebP files. The retreat poster's accidental top-right image fragment was removed by reconstructing the adjacent window area; the repair was visually checked at full size and in the rendered card.

The generic Frauenkreis photograph was replaced with the supplied Frauenkreis poster. All poster files retain their 4:5 source canvas but are fitted with `object-fit: contain` inside the established offer-image frames. The frames do not expand to the poster ratio; at the 390 px mobile test viewport all three measure 339 × 212 px.

Generic testimonial captions such as “Teilnehmerin” were removed from the content, rendering component, translation map and CMS schema. Quotes now stand alone.

## Verification

- `npm run build`: successful, including the static `/retreat/` route output
- `npm audit --audit-level=high`: 0 vulnerabilities
- Desktop render at 1440 px: all three offer cards are 1160 px wide and the retreat uses the same featured split layout
- Mobile render at 390 px: all three offer cards use the same 343 px stacked layout
- Homepage CTA checks and the retreat page's 390/768/1440 px checks pass with no horizontal overflow or console errors

## Private preview

- Source commit: `0050303`
- Netlify deploy ID: `6aaaf296819138ac67dca775`
- URL: `https://6aaaf296819138ac67dca775--moon-sisters-superjana-preview.netlify.app/`
- Remote verification confirms three poster cards, three 1200 × 1500 natural image dimensions, zero testimonial captions, correct homepage CTAs, no horizontal overflow and no console errors.
- Preview only; do not publish this revision before Julie explicitly approves it.

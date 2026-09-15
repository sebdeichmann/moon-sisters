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

The replacement retreat poster still needs to be supplied. Once received, normalize the poster-specific responsive media treatment and verify both the Frauenabend and retreat artwork together.

## Verification

- `npm run build`: successful, including the static `/retreat/` route output
- `npm audit --audit-level=high`: 0 vulnerabilities
- Desktop render at 1440 px: all three offer cards are 1160 px wide and the retreat uses the same featured split layout
- Mobile render at 390 px: all three offer cards use the same 343 px stacked layout
- Homepage CTA checks and the retreat page's 390/768/1440 px checks pass with no horizontal overflow or console errors

## Private preview

- Source commit: `674a1bc`
- Netlify deploy ID: `6aa94e8f5569f74594313e50`
- URL: `https://6aa94e8f5569f74594313e50--moon-sisters-superjana-preview.netlify.app/`
- Preview only; do not publish this layout revision before Julie approves it, ideally together with the replacement retreat artwork.

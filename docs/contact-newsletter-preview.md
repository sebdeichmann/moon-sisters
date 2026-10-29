# Contact newsletter and current poster removal — preview

Julie confirmed a compact newsletter invitation at the bottom, with email remaining the main contact route, and explicitly requested removal of the poster thumbnail and open-poster link for this cycle.

- Added compact berry newsletter invitation beneath the existing contact panel, reusing the exact heading, text, CTA and URL from `content.newsletter`. Existing email and contact photograph retained. No duplicate `newsletter` anchor.
- Added scoped `src/styles/contact-newsletter.css` for a smaller type/spacing treatment than the top band, desktop copy/button row and stacked mobile layout.
- Set `showPoster: false` on the current circle offering. Component conditionally omits both poster image and link. Original poster asset retained for future cycles; future poster recognition is not discarded as a general idea.
- Circle main photograph, all visible dates/time/location/€150/max-10 facts, description disclosure and next-circle actions retained.

Review: https://6ae39b7bdfa29be8adf8f28d--moon-sisters-superjana-preview.netlify.app/#kontakt

Verification: build and whitespace check passed; remote browser screenshots inspected at 1440 px desktop and 390 px mobile. No horizontal overflow. Contact email retained, lower newsletter wording/button/URL match the top invitation, German/English labels work, no current-circle poster element or poster-opening link remains, facts and photograph preserved. Existing top newsletter anchor remains unique.

Screenshots: profile scratch `moon-contact-newsletter-desktop.png` and `moon-contact-newsletter-mobile.png`.

Preview only; production remains unchanged pending Julie’s approval. No files or original assets deleted.

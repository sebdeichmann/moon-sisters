# Photo-led Frauenkreis — implemented homepage preview

## Scope
Julie approved a clean photograph-led offering, concise right-hand text, full-cycle status, direct newsletter and email actions, and a smaller visible poster preview for recognition by people who saw the poster around town. This is implementation for review, not authorization for production publication.

## Implementation
- Branch: `superjana/photo-led-circle`, based on released `727c8ff`.
- `src/CircleOffering.jsx`: dedicated editorial single-circle component. One heading and introduction; one availability/next-step area; native details disclosure for existing description, facts and cycle dates; visible poster thumbnail linking to the original 1200×1500 asset in a new tab.
- `src/styles/circle-offering.css`: open two-column desktop composition and mobile stack. Native 4:3 photograph retained intact, no poster text over the main image, no enclosing offer card or nested notice box.
- `src/App.jsx`: use this component only when the visible offer is the sole full circle. Existing multi-offer fallback retained. New labels translated for English.
- `src/content/siteContent.json`: add labels for the focused layout; newsletter, hero, about, testimonials, contact and legal data verified unchanged.
- `public/assets/frauenkreis-centre.webp`: optimized and metadata-stripped first supplied photo, 1280×960. No content generated or removed from the photograph.

## Review
https://6ae385f32aea4f8934bda959--moon-sisters-superjana-preview.netlify.app/#angebote

## Verification performed
- Production build and `git diff --check` passed.
- Exact remote homepage loaded through Browser Use.
- Inspected actual screenshots at 1440×1100 desktop and 390×1100 mobile. No horizontal overflow.
- Main photograph loads at natural width 1280; poster thumbnail loads from original 1200×1500 asset and links to that asset with `_blank` and `noopener noreferrer`.
- One offering heading and one next-circle signup action in the section.
- Signup destination matches the existing newsletter URL exactly; email contains the next-circle subject.
- Details open/close and retain Frauenkreis 4.0 plus current dates. Status fact omitted from the disclosure to avoid repeating full status.
- English heading, availability message, signup label and poster link labels checked; German restored for screenshots.
- Existing newsletter, hero, about, testimonials, legal/privacy and contact JSON compared against origin/main and verified unchanged.
- Source images for the second/wider photograph were not used; no unrelated source work changed.

Screenshots in profile scratch: `moon-photo-circle-desktop.png` and `moon-photo-circle-mobile.png`.

Production remains untouched. Await Julie’s visual approval before release. Replacement privacy-policy text remains a separate pending task.

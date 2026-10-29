# Newsletter prominence and full Frauenkreis — review

## Scope and approved facts
Julie approved warmer newsletter wording and requested a bounded visual pass: less beige visual blending, a newsletter invitation nearer the top, a warm indication that the current Frauenkreis is full, and newsletter/email routes for notification about the next circle. No publication authorization yet. Privacy-policy replacement remains pending.

## Changes
- Newsletter moved from the contact block to directly beneath the opening hero.
- Full-width muted forest-green band, cream typography/button, responsive two-column desktop and stacked mobile layout. No pop-up or embedded form.
- Approved “Ein kleiner Moment für dich” wording and corresponding English translation.
- Current circle displays “Dieser Kreis ist voll”, a newsletter anchor and an email link with a next-circle interest subject. Current-cycle registration CTA removed. Existing dates remain informational.
- Retreat removal from the previous draft retained; no public cancellation notice or archive added.

## Verification
- `npm run build` and `git diff --check` passed.
- Exact deployed URL read back with HTTP 200.
- Browser/CDP: inspected 1440 px desktop and 390 px mobile screenshots, no horizontal overflow, one newsletter section directly after hero.
- German/English heading, button and full-circle status checked; notification anchor clicked, exact email subject inspected, no current-cycle registration links remain.
- Supplied Brevo signup URL preserved exactly; previously verified destination is the Moon Sisters newsletter form. No signup submitted.
- Newsletter foreground/background contrast exceeds WCAG AA body-text minimum.
- Existing privacy-policy content verified unchanged; no generated retreat static page.

## Review artifact
https://6ae3163e157ef83d40232a16--moon-sisters-superjana-preview.netlify.app/#newsletter

Screenshots: profile scratch `moon-newsletter-review/prominent-desktop.png`, `prominent-mobile.png`, `full-circle-mobile.png`.

Preview only. Await Julie’s review; resolve replacement legal copy before production publication. Existing production has not changed.

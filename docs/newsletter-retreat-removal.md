# Newsletter and retreat removal — work in progress

## Julie’s clarified instructions
- Await replacement privacy-policy text; do not modify the policy yet.
- Add the supplied newsletter signup URL near the contact section, without an embedded form.
- Remove the cancelled retreat from the homepage and public site entirely. Do not display a cancellation message or public archive.
- Preserve an internal archive outside the website repository at `Agents/Entwicklung-Superjana/_Alt/moon-sisters-retreat-internal/`.

## Current work
- Newsletter invitation added with German and English text.
- Removed homepage retreat card and specific retreat inquiry in contact text.
- Removed retreat component import, route rendering, static route output, and sitemap entry.
- Original retreat source and content preserved in the internal archive; original source remains in Git history.
- Unapproved cancellation preview `6ae3138a0aab342c8e36deed` deleted and URL verified HTTP 404.
- No production change has been made. Live production still contains the previously published retreat until the removal is approved and deployed.
- Historic Netlify previews and Git history may retain previously public material; this is not a guarantee of retroactive erasure.

## Newsletter review completed
- Review URL: https://6ae3146f101a7a02307affa1--moon-sisters-superjana-preview.netlify.app/#newsletter
- Production build passed.
- Browser inspected at desktop 1440 px and mobile 390 px; no horizontal overflow. German and English newsletter text verified.
- Exact supplied newsletter URL verified in the rendered link; destination opens the Moon Sisters Newsletter form. No form submission performed.
- Homepage contains no retreat link or retreat poster; privacy policy unchanged.
- Screenshots saved in profile scratch under `moon-newsletter-review/newsletter-desktop.png` and `newsletter-mobile.png`.
- Selenium harness could not run because the former temporary virtualenv no longer exists; verification used Browser Use/CDP instead.
- Still preview-only; no production publication.

## Remaining
- Incorporate Julie’s privacy-policy text when supplied.
- Approval before production deployment and verification that `/retreat/` no longer exposes the page.

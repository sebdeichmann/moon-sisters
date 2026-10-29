# Approved berry release — publishing blocked

Julie explicitly approved publication of the berry-and-rose review:
https://6ae335bf462dd1c3e6bcdb6f--moon-sisters-superjana-preview.netlify.app/#newsletter

## Approved scope
- Prominent berry newsletter section with approved copy and exact supplied Brevo URL.
- Rose full-circle notice and direct signup/email paths; no active registration for the full cycle.
- Retreat removed from homepage, rendered application, sitemap and generated static route; original source archived internally.
- Existing privacy policy unchanged pending Julie’s replacement text.

## Checks
- Fetched origin; origin/main is still the production base c32df3a.
- `npm run build` passed; output CSS `index-rGW4av1P.css` and JS `index-Cd52KrSp.js`, matching the approved review build.
- `git diff --check` passed.

## Publishing blocker
- `gh auth status`: no authenticated GitHub account.
- Intended profile config `/home/secretagent/.hermes/profiles/superjana/gh-config/hosts.yml` does not exist.
- Explicit SSH authentication using only Superjana’s existing key was rejected (`Permission denied (publickey)`).
- Did not alter credentials, remote configuration, workflows or another agent’s GitHub identity.
- No production push or deployment performed.

## Resume
Sebastian must restore GitHub authentication for the `superjana` account. Then verify authenticated identity, fetch current main, ensure no intervening changes, rerun build, publish only the approved source through the existing main/All-Inkl workflow, verify the exact GitHub Actions run and live homepage plus former retreat URL. No public cancellation notice.

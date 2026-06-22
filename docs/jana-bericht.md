# Moon Sisters Rebuild — Jana Bericht

Stand: erste lokale Rebuild-Iteration, nicht deployed, nicht gepusht.

## Was gebaut wurde

Ich habe im Projektordner eine kleine Vite/React-Version der bestehenden Lovable-Seite erstellt:

- Single-Page-Landingpage mit Navigation: Home, Angebote, Über uns, Stimmen, Kontakt.
- Stilistisch bewusst nah am Original: warm, ruhig, erdig, viel Weißraum, natürliche Bildwirkung, keine laute Coaching-Verkaufsoptik.
- Inhalte aus der bestehenden Seite übernommen und in eine zentrale Content-Datei ausgelagert.
- Lokale Asset-Kopien der fünf bestehenden Bilder eingebunden.
- Responsive Layouts für Desktop, Tablet und Smartphone.
- Sichtbarer DE/EN-Schalter als Platzhalter, aber noch ohne Sprachlogik.
- Impressum/Datenschutz im Footer verlinkt, aber noch nicht inhaltlich umgesetzt.

Asset-Regel: Logo übernehmen, sobald verfügbar. Die Bilder von Julie und Nina auf jeden Fall nutzen. Weitere vorhandene Stimmungsbilder dürfen genutzt oder bei Bedarf durch neu generierte ImageGen-Bilder ergänzt/ersetzt werden. Texte bleiben bis zur Freigabe Entwurfsstand.

## Projektstruktur

```text
/home/secretagent/Nextcloud/AgentHQ/Agents/Webdesign-Jana/Projekte/007-moon-sisters-rebuild
├── index.html
├── package.json
├── README.md
├── docs/
│   └── jana-bericht.md
├── public/
│   └── assets/
│       ├── altar.jpg
│       ├── circle-cushions.jpg
│       ├── julie.jpg
│       ├── julie-nina.jpg
│       └── nina.jpg
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── content/
    │   └── siteContent.js
    └── styles/
        └── global.css
```

Die später pflegbaren Inhalte liegen aktuell hier:

```text
src/content/siteContent.js
```

Das ist absichtlich so angelegt, dass man diese Datei später relativ sauber nach Markdown, JSON, Decap CMS, Sanity oder ein anderes CMS überführen kann. Kein wildes Copy-Paste-Moos im Komponentenwald. Fast enttäuschend vernünftig.

## Start lokal

```bash
cd /home/secretagent/Nextcloud/AgentHQ/Agents/Webdesign-Jana/Projekte/007-moon-sisters-rebuild
npm install
npm run dev
```

Dann öffnen:

```text
http://127.0.0.1:5173
```

## Produktionsbuild / Preview

```bash
npm run build
npm run preview -- --port 4173
```

Preview dann unter:

```text
http://127.0.0.1:4173
```

## Verifikation

Ausgeführt:

```text
npm install
```

Ergebnis:

```text
added 21 packages, and audited 22 packages in 6s
found 0 vulnerabilities
```

Ausgeführt:

```text
npm run build
```

Ergebnis:

```text
vite v8.0.16 building client environment for production...
✓ 17 modules transformed.
dist/index.html                   0.62 kB │ gzip:  0.39 kB
dist/assets/index-Bp51slDb.css    9.21 kB │ gzip:  2.89 kB
dist/assets/index-C3eXHSbR.js   201.74 kB │ gzip: 63.81 kB
✓ built in 250ms
```

Smoke-Test gegen lokale Preview:

```text
http://127.0.0.1:4173/                 -> 200 text/html
http://127.0.0.1:4173/assets/julie-nina.jpg -> 200 image/jpeg
```

Nicht geprüft: echte Browser-Optik per Screenshot/Playwright, weil ich in diesem Lauf keinen Browser-Screenshot-Test eingerichtet habe. Build und lokale Auslieferung sind aber verifiziert.

Hinweis zur Ablage: `node_modules/` und `dist/` wurden nach dem Test wieder entfernt, damit keine generierbaren Ordner dauerhaft in Nextcloud liegen. Sie entstehen bei `npm install` bzw. `npm run build` erneut.

## CMS-Optionen

### 1. Decap CMS / Git-basiert — Empfehlung für diesen Fall

Für Moon Sisters wirkt Decap CMS aktuell am passendsten:

- Inhalte bleiben als Markdown/JSON im Repo.
- Technisch überschaubar.
- Gut für wenige Seitentypen: Landingpage, Angebote, Testimonials, Bios, Kontakt.
- Keine eigene Datenbank nötig.
- Später relativ gut mit statischem Hosting kombinierbar.

Nachteile:

- Login/Auth und Git-Workflow müssen sauber eingerichtet werden.
- Editor-Komfort ist okay, aber nicht so geschmeidig wie Sanity.
- Für komplett nicht-technische Nutzerinnen kann Git im Hintergrund trotzdem etwas spröde sein, auch wenn sie ihn nicht direkt sehen.

### 2. Sanity — komfortabler Editor, aber SaaS-Abhängigkeit

Sanity wäre gut, wenn Julie/Nina regelmäßig selbst Inhalte pflegen sollen und ein angenehmer Editor wichtiger ist als maximale Einfachheit im Betrieb.

Vorteile:

- Sehr guter Content-Editor.
- Saubere Inhaltsmodelle für Angebote, Personen, Testimonials, Sprachen.
- Gute Vorschau-Workflows möglich.

Nachteile:

- SaaS-Abhängigkeit.
- Account/Projekt/Deploy-Konzept nötig.
- Etwas mehr Setup als Decap.

### 3. Directus / Strapi / Payload — mächtig, hier vermutlich zu schwer

Diese Optionen lohnen sich, wenn später mehrere Seiten, Rollen, Workflows oder komplexere Datenmodelle entstehen.

Für die aktuelle Moon-Sisters-Landingpage wäre das wahrscheinlich zu viel Betrieb:

- Hosting für CMS nötig.
- Updates/Wartung.
- Datenbank/Backups.
- Mehr Technik als Inhaltspflegebedarf.

### 4. Lovable/GitHub Workflow — schnell, aber für Pflege riskanter

Lovable ist stark für schnelle Iterationen und visuelle Änderungen. Für langfristige, ruhige Inhaltspflege durch Eigentümerinnen ist es aber potenziell fragiler:

- Änderungen können leichter Design/Code vermischen.
- Inhalte sind nicht automatisch sauber modelliert.
- Nicht-technische Pflege kann abhängig vom Tool bleiben.

Mein Vorschlag: Für die nächste technische Iteration Decap CMS prüfen. Wenn Julie/Nina einen sehr komfortablen Editor brauchen und SaaS okay ist, Sanity als Alternative testen.

## Offene Fragen an Sebastian / Julie / Nina

1. Dürfen die aktuellen Bilder dauerhaft verwendet werden, oder brauchen wir neue/andere Bildquellen?
2. Sind die Testimonials echte freigegebene Stimmen oder Platzhalter aus dem Lovable-Entwurf?
3. Soll die Seite final zweisprachig DE/EN werden? Falls ja: vollständige englische Texte benötigt.
4. Gibt es finale Impressum- und Datenschutztexte?
5. Soll die Kontaktaufnahme nur per Mail laufen oder später mit Formular/Voranmeldelogik?
6. Wie verbindlich sind Startdatum, Ort und Format des Frauenkreises 2026?
7. Gibt es Corporate-/Brand-Vorgaben für Farben, Schriften, Logo oder darf die visuelle Sprache aus dieser Iteration weiterentwickelt werden?
8. Wo soll später gehostet werden: bestehender Anbieter, Netlify, Vercel, eigener Server oder etwas anderes?

## Empfohlener nächster Schritt

Erst gemeinsam visuell prüfen:

- Wirkt es noch nach Moon Sisters oder schon zu glatt?
- Sind Ton, Abstand, Bildgrößen und CTA-Druck passend?
- Welche Inhalte sind tatsächlich final?

Danach würde ich in Iteration 2 entweder:

1. Decap-CMS-Struktur vorbereiten, oder
2. erst Impressum/Datenschutz/EN-Struktur und finale Inhalte ergänzen.

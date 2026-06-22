# Nova Review — Moon Sisters Rebuild

Stand: 2026-06-14
Projektordner: `/home/secretagent/Nextcloud/AgentHQ/Agents/Webdesign-Jana/Projekte/007-moon-sisters-rebuild`

## Geprüft

- Lokaler Dev-Server gestartet: `http://127.0.0.1:5173`
- Desktop-Screenshot erzeugt
- Mobile-Screenshot erzeugt
- Fullpage-Screenshot erzeugt
- Originalseite erneut auf Logo/Assets geprüft
- Zwei optionale ImageGen-Stimmungsbilder erzeugt

## Screenshots

- Desktop: `docs/screenshots/home-desktop.png`
- Mobile: `docs/screenshots/home-mobile.png`
- Fullpage: `docs/screenshots/home-fullpage.png`

## Ergebnis der Sichtprüfung

### Was gut funktioniert

- Die erste Iteration bewahrt den warmen, ruhigen, erdigen Grundton der Originalseite.
- Typografie und Farbwelt wirken hochwertig und passend: weich, persönlich, nicht corporate.
- Der Hero-Bereich fühlt sich deutlich individueller an als eine Standard-Coaching-Landingpage.
- Die Bilder von Julie und Nina sind eingebunden und tragen die Seite stark.
- Die Content-Struktur ist sauber angelegt (`src/content/siteContent.js`) und damit gut vorbereitbar für CMS/Git-CMS.
- Mobile Ansicht funktioniert grundsätzlich; Navigation bricht sauber in mehrere Pillen/Zeilen.

### Auffälligkeiten / Verbesserungen

1. **Hero-Abstand oben ist auf Desktop sehr groß**
   - Im Desktop-Screenshot entsteht zwischen Header und Hero sehr viel leere Fläche.
   - Das wirkt zwar ruhig, aber etwas zu verspätet: Nutzer:innen sehen beim ersten Blick sehr viel Hintergrund und erst spät Inhalt.
   - Empfehlung: oberen Hero-Abstand um ca. 20–30% reduzieren.

2. **Mobile Headline ist sehr dominant**
   - Stilistisch schön, aber die Headline nimmt auf Mobile fast die gesamte erste Ansicht ein.
   - Empfehlung: mobile `h1` minimal kleiner oder mit `clamp()` etwas defensiver setzen.

3. **Header Mobile ist funktional, aber etwas stapelig**
   - Brand, Navigation und DE/EN liegen in drei separaten Pillen.
   - Das ist okay, aber visuell recht viel Chrom vor dem eigentlichen Inhalt.
   - Empfehlung für spätere Iteration: entweder Burger/kompaktere Navigation oder DE/EN kleiner neben Brand.

4. **Logo fehlt noch als echtes Asset**
   - Auf der Originalseite wurde kein separates Logo-Asset gefunden. Der aktuelle Rebuild nutzt ein Mond-Icon + Textmarke.
   - Sebastian sagt: Das Logo muss übernommen werden.
   - To-do: echtes Logo von Sebastian/Julie/Nina anfordern und dann in Header/Footer einbauen.

5. **Original-Assets**
   - Bilder von Julie und Nina sollen definitiv genutzt werden.
   - Andere Stimmungsbilder dürfen genutzt werden, können aber bei Bedarf durch ImageGen-Bilder ergänzt/ersetzt werden.

## Logo-Check

Gefundene Assets auf Originalseite:

- `julie-nina-1idFgh1e.jpg`
- `circle-cushions-C23I45A-.jpg`
- `altar-DAETcEuV.jpg`
- `julie-BESJfMtw.jpg`
- `nina-CveVhAov.jpg`

Kein separates `.svg`, `.png` oder Bild mit `logo`/`moon` im Namen gefunden.

**Fazit:** Es gibt vermutlich entweder kein separates Logo auf der Lovable-Seite oder es ist rein als Text/Icon im Code gebaut. Wenn ein echtes Logo existiert, muss es separat hochgeladen/geliefert werden.

## Optional erzeugte ImageGen-Bilder

Ich habe zwei neue Stimmungsbilder erzeugt und lokal abgelegt:

```text
public/assets/generated/womens-circle-cushions-generated.png
public/assets/generated/ritual-table-generated.png
```

### Einschätzung

- Beide Bilder enthalten keinen Text und keine identifizierbaren Gesichter.
- Beide passen stilistisch zur ruhigen, warmen Moon-Sisters-Atmosphäre.
- `womens-circle-cushions-generated.png` eignet sich gut als alternative/ergänzende Angebots- oder Workshop-Atmosphäre.
- `ritual-table-generated.png` eignet sich gut als ruhiges Detailbild, z.B. für Workshops, Kontakt oder Zwischenbereich.

**Empfehlung:** Nicht sofort die echten Bilder ersetzen. Erst als Varianten/Optionen bereithalten und in Iteration 2 gezielt vergleichen.

## Nächste To-dos

1. Echtes Logo von Sebastian/Julie/Nina anfordern.
2. Jana bitten, Iteration 2 zu machen:
   - Projekt bleibt im Jana-Ordner.
   - echten Logo-Slot vorbereiten (`public/assets/logo.*`)
   - Desktop-Hero-Abstand reduzieren
   - mobile Headline leicht entschärfen
   - optional eine Bildvariante mit den generierten Moodbildern bauen
3. Danach CMS-Entscheidung vorbereiten:
   - Empfehlung bleibt aktuell: Decap CMS / Git-basiertes CMS für einfache Pflege von Terminen, Bildern, Texten und Stimmen.

## Verifikation

Vor der Review wurde das Projekt im Jana-Ordner gebaut:

```bash
npm install
npm run build
```

Ergebnis:

```text
✓ built in 319ms
```

Nach der Screenshot-Erstellung sollten generierte Ordner (`node_modules/`, `dist/`) wieder entfernt werden, damit Nextcloud sauber bleibt.

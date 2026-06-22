# Jana – Nachbesserung Sprache & Angebotsbild

Stand: 2026-06-20

## Anlass

Sebastian hatte zwei Punkte gemeldet:

1. Der DE/EN-Umschalter war sichtbar, aber noch nicht funktionsfähig.
2. In der Angebotssektion „Frauenkreise, Retreat & Workshops“ wurde oben dasselbe Bild wie bei Frauenkreis 3.0 verwendet, was doppelt und komisch wirkte.

## Umgesetzt

- DE/EN-Umschalter in React funktionsfähig gemacht:
  - Sprache wird per State umgeschaltet.
  - Auswahl wird in `localStorage` als `moonSistersLanguage` gespeichert.
  - `document.documentElement.lang` wird auf `de` oder `en` gesetzt.
  - Die Hauptseite ist nun weitgehend zweisprachig.
  - Rechtliche Seiten wechseln zumindest Titel, Navigation und Abschnittsüberschriften; die rechtlichen Volltexte bleiben absichtlich nah an der deutschen Vorlage.
- Sprachumschalter gestylt:
  - DE/EN sind echte Buttons.
  - Aktive Sprache wird visuell markiert.
- Doppelte Bildwirkung in der Angebotssektion korrigiert:
  - Das Top-Bild der Angebotssektion nutzt jetzt das bisher ungenutzte alte Website-Bild `public/assets/altar.jpg`.
  - Frauenkreis 3.0 behält `public/assets/circle-cushions.jpg`.
  - Dadurch ist die visuelle Wiederholung direkt untereinander weg.

## Geänderte Dateien

- `src/App.jsx`
- `src/styles/global.css`
- `src/content/siteContent.js`
- `docs/jana-nachbesserung-sprache-bild.md`

## Verifikation

Ausgeführt:

```bash
npm run build
```

Ergebnis:

```text
✓ built in 395ms
```

Der bereits laufende lokale Dev-Server auf Port 5177 läuft weiter.

Geprüft:

```text
/                 200 text/html
/datenschutz      200 text/html
/impressum        200 text/html
/assets/altar.jpg 200 image/jpeg
```

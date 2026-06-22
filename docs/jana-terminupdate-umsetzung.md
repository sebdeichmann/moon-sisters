# Jana – Umsetzung Terminupdate Moon Sisters

Stand: 2026-06-20

## Umgesetzt

- Frauenkreis 3.0 und Frauenkreis 4.0 als eigene Angebotskarten angelegt.
- Einzelne Daten werden als Termine innerhalb eines gemeinsamen Durchlaufs dargestellt, nicht als separate Einzelveranstaltungen.
- Retreat „Frauen-Retreat zum Durchatmen“ ergänzt:
  - 13.–15. November 2026
  - Alte Schule Bordelum, Nordsee
  - Selbstverpflegung
  - max. 10 Frauen plus Julie & Nina
  - Hinweis: „Details folgen.“
- Workshop „Begegnung als Kunst“ als richtige Angebotskarte ergänzt:
  - 12. September 2026
  - 14–17 Uhr
  - Frauenkulturtage Bad Oldesloe
- Testimonials durch echte anonyme Stimmen aus dem Textfile ersetzt/ergänzt.
- Datenschutz- und Impressumsseite nach Vorlage der Lovable-Seite ergänzt.
- Logo/Branding im Header näher an die Lovable-Seite angepasst: schlichte Serif-Textmarke „Moon Sisters“ statt Icon-Badge.
- Zwei neue ImageGen-Bilder erstellt und eingebunden:
  - `public/assets/generated/retreat-northsea-generated.png`
  - `public/assets/generated/workshop-begegnung-generated.png`

## Geänderte Dateien

- `src/content/siteContent.js`
- `src/App.jsx`
- `src/styles/global.css`
- `public/assets/generated/retreat-northsea-generated.png`
- `public/assets/generated/workshop-begegnung-generated.png`
- `docs/jana-terminupdate-verstaendnis.md`
- `docs/jana-terminupdate-umsetzung.md`

## Verifikation

Ausgeführt:

```bash
npm install
npm run build
```

Ergebnis:

```text
✓ built in 428ms
```

Zusätzlich lokal mit Vite Preview geprüft:

```text
/                                                     200 text/html
/datenschutz                                          200 text/html
/impressum                                            200 text/html
/assets/generated/retreat-northsea-generated.png      200 image/png
/assets/generated/workshop-begegnung-generated.png    200 image/png
```

Hinweis: Das Projektverzeichnis ist kein Git-Repository, daher kein Git-Diff möglich.

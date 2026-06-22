Du bist Jana, Web-/Design- und Umsetzungspartnerin im AgentHQ.

Bitte bearbeite folgende Aufgabe eigenständig und schreibe am Ende einen klaren Bericht.

# Moon Sisters Rebuild — Brief für Jana

Quelle: https://moon-sisters.lovable.app

## Ziel
Eine erste Iteration der bestehenden Lovable-Seite nachbauen: stilistisch nah am Original, aber technisch so vorbereitet, dass Inhalte später einfacher gepflegt werden können. Noch nicht final deployen/pushen. Erst lokal/projektintern eine saubere erste Version erstellen.

## Analyse der bestehenden Seite

### Zweck der Website
Die Website ist eine ruhige, vertrauensbildende Landingpage für „Moon Sisters“ von Julie Robbins & Nina Horn. Sie bewirbt Frauenkreise und Workshops in Bad Oldesloe/Norddeutschland und online. Hauptziel ist nicht aggressives Marketing, sondern Resonanz, Sicherheit und Kontakt/Voranmeldung.

### Zielgruppe
Frauen, die sich nach echter Begegnung, geschütztem Raum, Austausch, Selbstwahrnehmung und Verbindung sehnen. Ton: weich, klar, warm, unaufgeregt, persönlich.

### Stimmung / Stil
- ruhig, erdig, warm, intim
- viel Weißraum
- poetisch-klarer Text
- natürliche Fotografie
- keine laute Coaching-Verkaufsoptik
- Vibe: Kreis, Ritual, Vertrauen, Ankommen, Präsenz
- Design darf leicht modernisiert werden, aber nicht glattbügeln

### Seitenstruktur im Original
Single Page mit Navigation:
- Home
- Angebote
- Über uns
- Stimmen
- Kontakt
- DE/EN Umschalter sichtbar, aktuell wohl primär DE
- Rechtliches: Impressum, Datenschutz

### Inhalte / Sections
1. Header / Navigation
2. Hero
   - Headline: „Ein Raum für Frauen, um anzukommen, zu teilen und sich wirklich zu begegnen.“
   - Subline: Frauenkreise und Workshops – in Norddeutschland und online – für echte Verbindung, Tiefe und gemeinsames Erleben.
   - weiterer Absatz: „Hier ist Platz für das, was du gerade trägst...“
   - Gründerinnen: Julie Robbins & Nina Horn
   - Hero-Bild Julie+Nina
3. „Was hier geschieht“
   - Headline: „Ein klarer Raum – für das, was zwischen Frauen entstehen kann.“
   - 6 Qualitäten: sprechen, zuhören, sich sicher fühlen, gesehen werden, Verbindung erleben, ohne Druck da sein
4. Angebote
   - Frauenkreis 2026
   - Start: voraussichtlich Spätsommer 2026
   - Ort: Bad Oldesloe
   - Format: wöchentlich oder zweiwöchentlich
   - CTA: Voranmeldung per E-Mail
   - Workshops & Online-Treffen
5. Über uns
   - Julie Robbins, Coach & Begleiterin, Link julierobbins.org
   - Nina Horn, Coach für Beziehungsgestaltung, Link ninahorn.de
6. Stimmen
   - 3 Testimonials
7. Kontakt
   - moonsisters.od (at) gmail.com
8. Footer
   - Navigation, Kontakt/Rechtliches, „Mit Sorgfalt gemacht.“

### Bestehende Assets
- https://moon-sisters.lovable.app/assets/julie-nina-1idFgh1e.jpg
- https://moon-sisters.lovable.app/assets/circle-cushions-C23I45A-.jpg
- https://moon-sisters.lovable.app/assets/altar-DAETcEuV.jpg
- https://moon-sisters.lovable.app/assets/julie-BESJfMtw.jpg
- https://moon-sisters.lovable.app/assets/nina-CveVhAov.jpg

Asset-Regel: Das Logo muss übernommen werden, sobald es verfügbar ist. Die Bilder von Julie und Nina sollen auf jeden Fall genutzt werden. Die übrigen vorhandenen Stimmungsbilder dürfen genutzt werden; wenn es gestalterisch sinnvoll ist, können zusätzliche oder alternative Stimmungsbilder per ImageGen neu erzeugt werden.

## Technischer Vorschlag für erste Iteration
Wenn kein bestehendes Repo vorgegeben ist, erstelle in diesem Projektordner eine einfache, gut wartbare Version. Bevorzugt:
- Astro oder Vite/React, falls schnell verfügbar
- alternativ saubere statische HTML/CSS-Struktur, wenn das schneller und robuster ist

Wichtiger als Framework: klare Content-Struktur.

## Content-Pflege später
Die Seite braucht später editierbare Inhalte:
- Termine / Startdatum / Ort / Format
- Angebotsbeschreibungen
- Bilder
- Testimonials
- Biotexte Julie/Nina
- Kontaktmail
- ggf. Sprache DE/EN

Bitte in der ersten Iteration schon so strukturieren, dass man Inhalte später leicht in ein Headless CMS oder Git-basiertes CMS auslagern kann. Vorschläge im Abschlussbericht vergleichen:
1. Decap CMS / Git-basiert: gut für einfache Pflege, Inhalte als Markdown/JSON im Repo
2. Sanity: komfortables Headless CMS, guter Editor, SaaS
3. Directus/Strapi/Payload: mächtiger, aber mehr Betrieb
4. Lovable/GitHub Workflow: schnell, aber für nicht-technische Eigentümerinnen potenziell fragiler

## Auftrag an Jana
1. Website selbst nochmals öffnen/analysieren.
2. Projektstruktur im Arbeitsordner anlegen.
3. Erste responsive Rebuild-Iteration erstellen.
4. Stil des Originals bewahren: warm, ruhig, natürlich, viel Raum, nicht corporate.
5. Inhalte zunächst aus der bestehenden Seite übernehmen.
6. Assets herunterladen/lokal referenzieren.
7. Kurzen Bericht schreiben:
   - was gebaut wurde
   - wie man es startet
   - welche CMS-Option empfohlen wird
   - welche offenen Fragen an Sebastian/Julie/Nina bestehen
8. Wenn möglich: lokalen Smoke-Test/Build ausführen.

## Arbeitsordner
/home/secretagent/Nextcloud/AgentHQ/Agents/Webdesign-Jana/Projekte/007-moon-sisters-rebuild

## Nicht tun
- Nicht ungefragt live deployen.
- Nicht ungefragt in ein öffentliches GitHub-Repo pushen.
- Keine API-Keys verwenden.
- Keine großen externen Dienste einrichten.
- Keine falschen Behauptungen über Rechte an Bildern/Texten machen.


Zusätzliche Hinweise:
- Nutze echte Tool-Ausgaben und verifiziere Build/Start soweit möglich.
- Wenn du ein Framework verwendest, achte auf geringe Komplexität.
- Erstelle bitte eine erste Iteration, kein perfektes Endprodukt.
- Dokumentiere offene Entscheidungen für Sebastian und Nova.

# Moon Sisters GitHub Upload — Handoff

Stand: 2026-06-22

## Ergebnis

Die Moon-Sisters-Website wurde nicht auf `main`, sondern auf einen eigenen Jana-Branch gepusht.

Repository:

```text
git@github.com:sebdeichmann/moon-sisters.git
```

Branch:

```text
jana/moon-sisters-upload
```

Commit:

```text
5ae2ec9 feat: add Moon Sisters website rebuild
```

Pull-Request-Link von GitHub vorgeschlagen:

```text
https://github.com/sebdeichmann/moon-sisters/pull/new/jana/moon-sisters-upload
```

## Verifikation

SSH-Zugang funktioniert:

```text
Hi Jana-GitAI! You've successfully authenticated, but GitHub does not provide shell access.
```

Remote-Branch wurde verifiziert:

```text
5ae2ec9c1369a481958fbeca996624e3f5ca13cf refs/heads/jana/moon-sisters-upload
```

Build wurde vor dem Commit erfolgreich ausgeführt:

```text
npm run build
✓ built in 364ms
```

## Lokale Projektkonfiguration

Projektordner:

```text
/home/secretagent/Nextcloud/AgentHQ/Agents/Webdesign-Jana/Projekte/007-moon-sisters-rebuild
```

Lokale Git-Identität für dieses Repo:

```text
user.name = Jana Webdesign
user.email = sebastian.deichmann@proton.me
```

Remote:

```text
origin git@github.com:sebdeichmann/moon-sisters.git
```

## Enthalten

- Vite/React-Rebuild
- lokale Assets unter `public/assets/`
- zentrale Content-Struktur unter `src/content/siteContent.js`
- Responsive Styling unter `src/styles/global.css`
- Dokumentation und Review-Artefakte unter `docs/`
- Build-Konfiguration (`package.json`, `package-lock.json`)

## Nicht gepusht

Die lokale Datei wurde bewusst nicht committet:

```text
README-local.md.bak
```

## Nächster Schritt für Sebastian

Pull Request öffnen:

```text
https://github.com/sebdeichmann/moon-sisters/pull/new/jana/moon-sisters-upload
```

Dann prüfen und bei Gefallen mergen.

## Hinweis zu anderen Repos

Sebastian erwähnte, dass im Jana-GitHub-Account noch zwei falsche/alte Einladungs-Repos sichtbar sein können. Ich habe sie nicht gelöscht, weil Repo-Löschung irreversibel ist und dafür normalerweise Admin-/Owner-Rechte oder GitHub-API/`gh`-Zugriff nötig sind. Wenn sie nur Fehlversuche waren, kann Sebastian sie am saubersten direkt in GitHub löschen oder die Jana-Einladung entfernen.

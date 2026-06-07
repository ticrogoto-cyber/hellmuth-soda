# HELLMUTH News-Drop-in (Soda-Seite)

Fertige HELLMUTH-Rubrik im Creme/Gold-Design der Hellmuth-Botanical-Soda-Seite. Dieselbe Pipeline wie in `hellmuth-soda`, nur anderes Render-Theme und andere Rubrik. **Muss nur noch eingehängt werden**, sobald das Soda-Repo bereitsteht.

Diese Dateien liegen hier nur zur Vorbereitung und sind im `hellmuth-soda`-Repo **inaktiv** (kein Workflow unter `.github/`, keine Verlinkung von der Live-Seite).

## Was wohin kommt (im Soda-Repo)

| Aus diesem Ordner | Ziel im Soda-Repo |
|---|---|
| (aus `hellmuth-soda`) `pipeline/` | `pipeline/` |
| (aus `hellmuth-soda`) `config/news-sources.json` | `config/news-sources.json` |
| `soda-dropin/news/` | `news/` |
| `soda-dropin/workflow-news.yml` | `.github/workflows/news.yml` |
| `soda-dropin/index-band-snippet.html` | Zeilen in die Soda-`index.html` einsetzen |

Die `pipeline/` und `config/` sind identisch zwischen beiden Seiten. Wenn beide Repos dieselbe `news-sources.json` teilen sollen, einfach kopieren; Änderungen an Quellen dann in beiden Repos nachziehen (oder später per Submodule/Sync zentralisieren).

## Schritte

1. `pipeline/`, `config/news-sources.json` und den Inhalt von `soda-dropin/news/` ins Soda-Repo kopieren (Zielpfade siehe Tabelle).
2. `soda-dropin/workflow-news.yml` nach `.github/workflows/news.yml` kopieren. Dort ist bereits gesetzt: `PIPELINE_RUBRIKEN=hellmuth`, `NEWS_THEME=soda`.
3. `soda-dropin/index-band-snippet.html` befolgen: `news-home.css`-Link in den `<head>`, `<section id="news-band">` vor `<footer class="site-foot">`, beide Skripte vor `</body>`. Optional einen `News`-Menüpunkt in die `.nav` setzen.
4. Repo-Secret `ANTHROPIC_API_KEY` setzen.
5. Reihenfolge wie auf der Hauptseite: erst `task=check-feeds`, dann `task=run` mit `max_new=3` zur Stilprüfung, danach Cron scharf.

## Designintegration

- `news/index.html`, `news/news.css`, `news/news.js` nutzen die Soda-Tokens (`--cream`, `--ink`, `--accent`, `--muted`) und Cormorant + Inter aus der bestehenden Soda-`styles.css`. Es werden keine bestehenden Soda-Styles verändert.
- Detailseiten erzeugt die Pipeline mit `NEWS_THEME=soda` automatisch im Soda-Look (`pipeline/render.mjs`, Funktion `detailHtmlSoda`). Sie verlinken die Soda-`styles.css` und `news/news.css`.
- Die Rubrik HELLMUTH zeigt Getränke-Meldungen; ein Querverweis führt zu den Forschungs-Meldungen auf `hellmuth-soda.de/news/`.

## Datenfluss

Identisch zur Hauptseite. `news/data.js` wird von der Pipeline erzeugt und enthält `hellmuth` (gefüllt) und `science` (leer auf der Soda-Seite). Übersicht und Band lesen nur `hellmuth`.

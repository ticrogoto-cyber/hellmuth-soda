# Zutaten-Modul (Phase 1)

## Zweck
Zwei neue Saeulen unter `/zutaten/`: ein Substanz-Index (Overlay-Register wie `/vokabular/`) und Bildgebung (Artikel-Sektion wie News).

## Dateien (Phase 1)
- `/zutaten/index.html`
- `/zutaten/zutaten.{js,css}`
- `/zutaten/substances.js` (Datenstub, leer)
- `/zutaten/bildgebung/index.html`
- `/zutaten/bildgebung/{bildgebung.js, bildgebung.css, footnotes.js}`
- `/content/zutaten/bildgebung/_TEMPLATE.md`
- `/config/zutaten-filters.json`

## Datenshapes
- `SUBSTANCES_DATA`: `{ entries: [{ name, slug, werbung, wirkung, filters?, related_article? }] }`
- `BILDGEBUNG_DATA`: `{ items: [{ title, slug, date, created, lead, minutes, filters[], href }] }`
- Artikel-Markdown: Frontmatter mit `title, slug, date, lead, filters, read_time, created, sources[{n, authors, title, journal, year, doi|pmid}]`.

## Renderer-Integration
- `STATIC_PAGES` in `render.mjs` erweitert um `/zutaten/` und `/zutaten/bildgebung/`.
- Sitemap deckt beide Pfade ab.
- RSS-Feed `/zutaten/bildgebung/feed.xml` wird in `build()` erzeugt (Phase 1 leer).
- Detailseiten-Renderer fuer Bildgebung folgt in Phase 3.

## Stilregeln
- Bildgebung-Artikel: keine Du-Anrede, keine Doppelpunkte im Fliesstext, keine Gedankenstriche, kein Hedging, Aphorismus-Closer am Ende. Inline-Fussnoten als `(1)`, `(2)`, `(3)`.
- Substanz-Index-Eintraege: Werbung 1-3 Saetze (paraphrasiert), Wirkung 3-6 Saetze (diagnostisch). Du-Anrede in Feld-Labels erlaubt.

## Folgephasen
- Phase 2: 51+ Substanz-Eintraege schreiben (mit Quellenrecherche).
- Phase 3: 10 Bildgebung-Artikel + Renderer fuer Detail-HTML aus Markdown.

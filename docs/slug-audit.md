# Slug Audit – /zutaten/{slug}/

Audit der 168 `slug`-Werte aus `/zutaten/substances.js`.
Geprüft auf URL-Sicherheit, Länge, Eindeutigkeit, Pfad-Kollisionen, semantische Klarheit und Bot-Lesbarkeit.

Methodik: Slugs per Node-Eval aus `window.SUBSTANCES_DATA.entries` extrahiert, dann gegen die Regex `^[a-z0-9-]+$`, Längen-Buckets, ein `Map`-Duplikat-Check, ein Set reservierter Pfadnamen und manuelle Klarheits-Heuristiken laufen lassen.

---

## Issues found

Keine harten Verstöße. Alle 168 Slugs erfüllen die strikten Kriterien (Charset, keine doppelten Bindestriche, keine Umlaute/Underscores, keine führenden/trailenden Hyphens, alle eindeutig, keine Pfad-Kollision, alle ≤ 40 Zeichen).

| Slug | Problem | Vorschlag |
|------|---------|-----------|
| – | – | – |

Soft-Findings (keine harten Fehler, aber Empfehlungen) → siehe Abschnitt **Recommended renames** unten.

---

## OK

**168 / 168** Slugs bestehen alle harten Prüfungen (URL-Charset, Eindeutigkeit, Länge ≤ 40, keine Kollision mit reservierten Pfaden).

---

## Length distribution

| Bucket | Anzahl | Anteil |
|--------|-------:|-------:|
| 0–20 Zeichen | 129 | 76,8 % |
| 21–30 Zeichen | 33 | 19,6 % |
| 31–40 Zeichen | 6 | 3,6 % |
| 41+ Zeichen | 0 | 0,0 % |

Statistik: min = 3 (`iod`, `bor`), max = 40 (`tausendgueldenkraut-centaurium-erythraea`), Mittel = 14,6 Zeichen.

Längste 6 (31–40):

| Slug | Länge |
|------|------:|
| `tausendgueldenkraut-centaurium-erythraea` | 40 |
| `dgl-deglycyrrhiziniertes-suessholz` | 34 |
| `bifidobacterium-longum-rosell-175` | 33 |
| `lactobacillus-reuteri-dsm-17938` | 31 |
| `rosmarin-rosmarinus-officinalis` | 31 |
| `schafgarbe-achillea-millefolium` | 31 |

Alle deutlich unter dem 50-Zeichen-Soft-Limit – kein Bucket benötigt zwingende Kürzung.

---

## Collisions with reserved paths

Verglichen gegen die existierenden Einträge unter `/zutaten/`:

- `bildgebung/` (Unterordner – explizit reserviert)
- `bildgebung.css`, `bildgebung.js`, `feed.xml`, `footnotes.js`, `index.html` (innerhalb `bildgebung/`)
- `icons.js`, `index.html`, `substances.js`, `zutaten.css`, `zutaten.js` (im `zutaten/`-Root)

**Ergebnis: none found.** Keiner der 168 Slugs kollidiert mit einem dieser Namen (kein Slug heißt `bildgebung`, `icons`, `index`, `substances`, `zutaten`, `feed`, `footnotes`).

| Reserved path | Konflikt-Slug |
|---------------|---------------|
| – | – |

---

## Recommended renames

Keine **erforderlichen** Umbenennungen. Folgende Slugs könnten aus reiner Lesbarkeits-/Share-Sicht optimiert werden, sind aber funktional korrekt. Entscheidung liegt bei SEO/Brand:

| Current slug | New slug (Vorschlag) | Reason |
|--------------|----------------------|--------|
| `lactobacillus-rhamnosus-gg` | `lactobacillus-rhamnosus` *oder* `l-rhamnosus-gg` | Stamm-Suffix `gg` ist Fachjargon; für Social-Share wäre eine Variante ohne den Suffix oder mit verkürztem Gattungsnamen freundlicher. Aktueller Slug ist aber korrekt und Bot-lesbar. |
| `lactobacillus-plantarum-299v` | `lactobacillus-plantarum` *oder* `l-plantarum-299v` | Stamm-Code `299v` wirkt kryptisch; Plain-Slug wäre kürzer. Risiko: weitere Plantarum-Stämme könnten später kollidieren – aktuell ist `299v` deshalb sogar präziser. |
| `lactobacillus-reuteri-dsm-17938` | `lactobacillus-reuteri` *oder* `l-reuteri-dsm17938` | `dsm-17938` ist eine DSMZ-Hinterlegungsnummer, für Endnutzer wenig sprechend. Wenn Eindeutigkeit zu anderen Reuteri-Stämmen nicht nötig, kürzen. |
| `bifidobacterium-lactis-bb-12` | `bifidobacterium-lactis` *oder* `b-lactis-bb12` | `bb-12` enthält den einzigen Stamm-Code mit zwei Bindestrich-Komponenten – konsistenter wäre `bb12` (ein Token). |
| `bifidobacterium-longum-rosell-175` | `bifidobacterium-longum` *oder* `b-longum-rosell175` | Herstellercode `Rosell-175` ist Markenstamm, in URL eher Ballast. |
| `dgl-deglycyrrhiziniertes-suessholz` | `dgl-suessholz` *oder* `suessholz-dgl` | 34 Zeichen mit voller Wirkstoff-Definition im Slug; `dgl-suessholz` (13) wäre share-freundlicher, ohne Information zu verlieren – die Langform steht ohnehin im `name`. |
| `tausendgueldenkraut-centaurium-erythraea` | `tausendgueldenkraut` | Längster Slug (40). Botanischer Name dupliziert nur den `name`-Eintrag. Verkürzung halbiert die URL ohne Bedeutungsverlust. |
| `iod` | `jod` *oder* unverändert | `iod` (3 Zeichen) ist die fachliche Schreibweise (IUPAC), `jod` die umgangssprachliche – wenn die Site eher Endnutzer adressiert, ist `jod` suchfreundlicher. |
| `bor` | unverändert | 3 Zeichen, aber das ist der etablierte deutsche Trivialname des Elements – keine bessere Alternative. |

**Konsistenz-Hinweis (keine Pflicht):** Die fünf Probiotika-Stämme verwenden uneinheitliche Stamm-Suffix-Formate (`-gg`, `-299v`, `-dsm-17938`, `-bb-12`, `-rosell-175`). Falls jemals eine Vereinheitlichung gewünscht ist: entweder durchgehend mit Stamm-Code (current) oder durchgehend ohne. Aktuell sind sie konsistent „mit Stamm-Code", nur die interne Schreibweise variiert (Bindestrich vs. zusammenhängend).

**Nicht empfohlen zu ändern:**
- `gaba`, `dmso`, `dmae`, `pqq`, `egcg`, `nalt`, `nac`, `mct-oel`, `nad-nmn`, `coq10-ubiquinol`, `nr-nicotinamid-ribosid`, `vitamin-b6-p5p`, `vitamin-k2-mk7`, `alpha-gpc`, `indol-3-carbinol-dim` – sind etablierte Fach-Akronyme, in Suchanfragen die primäre Form, und im jeweiligen `name`-Feld wird die Langform mitgeliefert.
- `nad-nmn` – kombiniert zwei verwandte Moleküle in einem Eintrag; akzeptabel.
- Botanische Doppelnamen wie `rosmarin-rosmarinus-officinalis`, `salbei-salvia-officinalis`, `schafgarbe-achillea-millefolium` – sind SEO-freundlich (deckt deutschen + lateinischen Suchbegriff ab) und unter 35 Zeichen.

---

## Zusammenfassung

- 168/168 Slugs sind **URL-sicher**, **eindeutig**, **kollisionsfrei** gegen `/zutaten/`-Pfade und liegen alle **≤ 40 Zeichen**.
- Keine kritischen Findings, keine Pflicht-Renames.
- 8 optionale Kürzungs-/Konsistenz-Vorschläge in der Tabelle oben (vor allem Probiotika-Stämme und 1× botanischer Doppel-Slug mit 40 Zeichen).

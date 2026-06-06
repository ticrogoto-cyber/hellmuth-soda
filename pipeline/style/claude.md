# CLAUDE.md

Anweisungen für jede Claude-Session in diesem Repo. Vor jeder Bearbeitung lesen.

## Kontext

Repo enthält parallel mehrere Ticro-Goto-Projekte:

- `sucht-mythen/` — Quiz, Vokabular, Impressum (gespiegelt zum Live-Repo `hellmuth-soda` auf hellmuth-soda.de)
- `buch/diagramme/` — Diagramme zum Trockenfasten-Buch
- `_hellmuth-export/` — Migrations-Stage für die Hellmuth-Soda-Site (historisch)
- `RAUCHEN_19x13-korr13.pdf` — Manuskript »Kreativer Suizid« (Ticro Goto, 2026), Quelle für alle Vokabular-Einträge

Live-Site wird aus dem separaten Repo `ticrogoto-cyber/hellmuth-soda` gebaut. Änderungen am Vokabular werden hier in `sucht-mythen/vokabular/data.js` gepflegt und müssen anschließend manuell ins Live-Repo übertragen werden.

## Vokabular-Stil — verbindlich

Das Vokabular ist NICHT der Buchtext. Es ist die destillierte, lapidare Form. Der Buchtext darf fließen, atmen, mit Gedankenstrichen arbeiten — das Vokabular nicht.

### Struktur jedes Eintrags

```json
{
  "term": "GROSSBUCHSTABEN",
  "as_called": "Wie es heißt — die Lüge, der Marketingbegriff, die geläufige Definition.",
  "what_it_is": "Was es wirklich ist. 4–8 Sätze, ~50–110 Wörter. Schlusssatz ist Verdikt.",
  "ref": "Kap. X" oder "Kap. X, Y" oder "Kap. X, Y, Z"
}
```

- `term`: All-Caps, deutsche Bezeichnung bevorzugt, Bindestriche bei zusammengesetzten Begriffen, Schrägstrich bei Doppelbegriffen (`MUSHIN / WU WEI`).
- `as_called`: 1–3 kurze Nominalphrasen, mit Punkten getrennt. Beispiel: `"Volksgetränk. Kulturgut. Flüssiges Brot."` Oder ein einzelner gerader Satz aus dem Mund der Mehrheitsmeinung. Keine Anführungszeichen drumherum.
- `what_it_is`: Verdiktsatz zuerst, dann Mechanik/Beweis/Zahl, am Schluss eine Klinge. Range 4–8 Sätze.
- `ref`: Buchkapitel, in denen der Begriff substanziell behandelt wird. Mehrere mit Komma. Maximal drei.

### Punktuationsregeln

**Verboten:**

- Gedankenstrich `—` (em-dash). Nirgends. In keinem Eintrag. Auch nicht als Apposition.
- Halbgeviertstrich `–` (en-dash) als Satzzeichen. Nur in Datums- oder Zahlenbereichen erlaubt.
- Englische Anführungszeichen `"..."`. Stattdessen deutsche Guillemets `»...«`.
- Ausrufezeichen.
- Rhetorische Fragen, außer als Zitat aus fremdem Munde (siehe BARNUM-EFFEKT).
- Bullet Points oder Aufzählungslisten innerhalb von `what_it_is`.
- Emojis.

**Bevorzugt:**

- Punkt. Häufig. Auch bei Fragmenten: `Tod im Leben. Empfindungsloses Plätschern im Trüben.`
- Doppelpunkt für Auflistung oder Nachschlag: `Kein Glück, keine Belohnung, kein Antrieb: ein Lernsignal …`
- Komma-Tricolon: `Wasser, Hopfen, Malz, Hefe.`
- Semikolon nur wenn ein Doppelpunkt nicht passt: `Drogen erfinden den Mangel; das Gehirn spielt mit.`
- Klammern sparsam, für Definition oder Beleg: `Eine Berliner Heilpraktikerin (weder Ärztin noch ausgebildete Hypnotherapeutin) …`

### Tonregeln

**Verboten:**

- Erste Person (»ich«, »wir« außer in echter Aufforderung wie BEOBACHTUNG, MUSHIN).
- Hedging: »vielleicht«, »wohl«, »tendenziell«, »unter Umständen«, »manchmal«.
- Adjektivketten. Ein Adjektiv pro Substantiv reicht meistens nicht — null reicht oft auch.
- Pathos, Ausrufung, Beschwörung. Kein »wir müssen endlich«, kein »erschütternd«.
- Selbsterklärende Allgemeinplätze: »Das ist tragisch.«
- Hellmuth-Soda-Werbung. Das Vokabular verkauft nicht das Soda, es verkauft den Befund.

**Pflicht:**

- Kalte, sezierende Autorität. Keine Erregung, kein Mitleid, kein Zwinkern.
- Konkrete Zahlen, wenn vorhanden: `51 Prozent`, `540 Euro`, `8.000 Partikel pro Jahr`. Keine vagen »viele«, »oft«, »häufig«, wo eine Zahl im Buch steht.
- Eigennamen, wenn sie im Buch stehen: `Allen Carr`, `Egas Moniz`, `Walter Freeman`, `Stefanie Stahl`, `Eberhard Gockel`, `Bayer`.
- Schlusssatz ist Verdikt, nicht Erklärung. Beispiele:
  - `Persönlichkeit ist löslich.`
  - `Die Römer beendeten sich selbst.`
  - `Beide Branchen schweigen einträchtig.`
  - `Hirnschaden tut nicht weh. Das ist das Perfide an beiden.`
  - `Die innerste Puppe ist immer der Patient.`

### Rhetorische Bauformen, die der Vokabularsprache eigen sind

Verwenden, aber nicht in jedem Eintrag. Variation pflegen.

- **Reframe-Definition als Eröffnung:** Der Begriff wird durch eine alternative Bezeichnung ersetzt, die den Befund vorwegnimmt.
  - `Magische Umprogrammierung gegen Bargeld.` (HYPNOTHERAPIE)
  - `Sozialverträgliche Selbstverstümmelung.` (ALKOHOL)
  - `Eine Tür, die sich nur von einer Seite öffnen lässt.` (DIAGNOSE)
  - `Kapseln gegen ein Loch, das Kaffee in den Körper reißt.` (SUPPLEMENTE)

- **Was-als-X-firmiert-ist-Y:** Marketing gegen Realität.
  - `»Heilpflanze« ist ein rhetorischer Trick. Tabak ist auch eine Pflanze. Bilsenkraut auch.`
  - `»Genuss« ist die Übersetzung dieser Fehlsteuerung in Alltagssprache.`

- **Anaphora / Wiederholung:** Drei- oder Vierfachschlag mit identischem Satzanfang.
  - `Sie nennen das Selbstfürsorge. Sie nennen das Realismus. Sie nennen das Grenzen setzen.`
  - `Nicht einmal Essen. Nicht einmal Sex. Nicht einmal Ruhe.`

- **Selbst-aufhebende Substanz:** die Droge, die das Problem schafft, das sie löst.
  - `Kaffee macht müde und behebt die Müdigkeit.`
  - `Der Raucher löscht selbsterzeugten Stress mit der Substanz, die ihn erzeugt.`

- **Vergleichsslap:** flach machender Vergleich.
  - `So zuverlässig wie Bleigießen für Herzdiagnosen.`
  - `Das Upgrade vom Schnuller zur Flasche.`

- **Statistik vs. Körper / Markt vs. Wahrheit:** zwei Spalten als Verdikt.
  - `Die Statistik führt sie als gesund. Der Körper führt sie als Krank.`
  - `Drei Millionen Käufer gefunden. Eine randomisierte Studie nicht.`

### Wiederverwendbare Phrasen / interner Kanon

Diese Begriffe und Wendungen wurden in den 50 Einträgen geprägt und dürfen quer-referenziert werden. Wenn passend, **erkennen und einbauen** statt neu erfinden:

| Phrase | Quelle / Bedeutung |
|---|---|
| `Withdrawal Reversal` | Eigener Eintrag. Substanz löst selbst erzeugten Mangel. |
| `Selbstmord auf Raten` | RAUCHEN. Definition des Rauchens. |
| `Tod im Leben. Empfindungsloses Plätschern im Trüben.` | ANHEDONIE / MDMA / SEROTONIN. |
| `neuronales Vakuum im Aschegeruch` | RAUCHEN. |
| `Stressachse, die X selbst hochsetzt` | ALKOHOL, NIKOTIN. Mechanik des Selbst-Erzeugens. |
| `Persönlichkeit ist löslich` | PERSÖNLICHKEIT. |
| `Beide Branchen schweigen einträchtig` | SUPPLEMENTE. Markt-Komplizenschaft. |
| `Marketingbegriff` / `Marketinglüge` | HEROIN, ENERGY DRINK. |
| `Lifestyle. Genuss. Pause.` (Tarnvokabular für Sucht) | RAUCHEN. |
| `der Hausarzt nennt es X` | DEPRESSION. Klinische Verkürzung als Pointe. |
| `pharmakologisches Artefakt` | PERSÖNLICHKEIT. |

Wenn ein neuer Eintrag thematisch an einen bestehenden andockt (z. B. ein Neurotransmitter an die Suchtmechanik, ein Diätbegriff an BMI), explizit auf den Vorgängerbegriff anspielen oder verlinken. Das Vokabular ist ein Netz, kein Listenfriedhof.

### Kapitel-Mapping (für `ref`)

| Kap. | Titel | Begriffsdomäne |
|---|---|---|
| 1 | Hirntod auf Raten | Rauchen, Nikotin, Hirnschaden |
| 2 | Heilen war nie der Plan | Entwöhnungstherapien, Markt der Hilflosigkeit |
| 3 | Was Idioten glauben | Mythen über Rauchen |
| 4 | Fünfundzwanzig Kilo Nebel | Gewicht, Schleier |
| 5 | Rauchen ist keine Sucht | Sucht-Begriff |
| 6 | Notausgang ins Nichts | Alkohol, Amygdala, Kindling |
| 7 | Kaffee macht nicht wach | Kaffee, Withdrawal Reversal, Adenosin, Energy Drink |
| 8 | Persönlichkeit ist löslich | Persönlichkeit, Felt Sense |
| 9 | Die Hölle ist kein Ort | Supplemente, Hippocampus, Darm |
| 10 | Vier Zutaten und eine Lüge | Reinheitsgebot, Bier, Mikroplastik |
| 11 | Die Krankheit, die es nie gab | Depression, Diagnose, Sucht |
| 12 | Zwanzig Prozent | MDMA, Cannabis, Anhedonie, Interozeption |
| 13 | Entzündung als Kulturtechnik | Saturnismus, Lobotomie, Heroin, Zucker |
| 14 | Angst vor Gesundheit | Lebensangst, Jona-Komplex, Fear of Recovery, Pharmaz. Matroschka, Neurodivers |
| 15 | Das innere Kind muss sterben | Inneres Kind, Barnum-Effekt, Konfabulation |
| 16 | Die Lüge auf der Zunge | Sensorische Konditionierung, Dopamin |
| 17 | Body Positivity tötet | BMI, Body Positivity, Normalgewichtsadipositas |
| 18 | Beobachtung verascht jeden Dämon | Beobachtung, Mushin/Wu Wei, Patchwork-Ich |

Bei Unsicherheit: lieber den engsten passenden Kapitelverweis als zwei vage. Wenn ein Begriff substanziell in mehreren Kapiteln auftaucht, alle nennen.

## Arbeitsablauf bei neuen oder geänderten Vokabular-Einträgen

1. Buchtext zum Begriff lesen (`/tmp/buch.txt` falls bereits extrahiert, sonst per `pdftotext -layout RAUCHEN_19x13-korr13.pdf /tmp/buch.txt`).
2. Bestehende Einträge in `sucht-mythen/vokabular/data.js` nach thematischen Nachbarn durchsuchen, um Querverweise und Phrasenkonsistenz zu sichern.
3. Eintrag schreiben, **nach jedem Satz** prüfen: Gedankenstrich? Pathos? Hedging? Adjektivkette? Schlusssatz ein Verdikt?
4. Eintrag alphabetisch korrekt einsortieren (Sortierschlüssel: `term.localeCompare(other, 'de')`).
5. Validieren: `node -e "global.window={}; $(cat sucht-mythen/vokabular/data.js); …"` — JS-Syntax und Reihenfolge testen.
6. Commit mit fokussierter Message: `Add TERM to Vokabular` oder `Refine TERM in Vokabular`.

## Was NICHT zu tun ist

- Vokabular-Einträge auf Basis von Allgemeinwissen schreiben, ohne den Buchabschnitt zur Hand zu haben. Wenn das Buch zum Begriff substanziell schweigt, den Eintrag nicht erfinden — beim Nutzer nachfragen.
- Mehrere Einträge gleichzeitig schreiben, ohne Zwischen-Review. Lieber drei sauber als zehn flapsig.
- Den Live-Stand auf `hellmuth-soda` annehmen. Quelle der Wahrheit für das Vokabular ist `sucht-mythen/vokabular/data.js` in diesem Repo plus die Branches `claude/review-previous-sessions-x1QKV` und `claude/add-vocabulary-entries-ycvha` (je nachdem, welcher aktueller ist).
- Generische Anrede in Stil-Diskussionen nutzen (»Hi! Hier ist dein Eintrag…«). Direkte, knappe Antwort, dann Eintrag.

## Hellmuth Soda / Site

- Tagline-Optionen wechseln zufällig zwischen `Klarheit ist das neue High.` und `Intensität statt Intoxikation.` — nicht ändern, nicht erweitern, ohne dass Ticro es freigibt.
- Buch-Default-Link für alle Einträge: `https://www.amazon.de/dp/B0GT4G61VX`. Bei künftigen weiteren Büchern eigene Links pro Eintrag setzen.
- Substack-Link: `https://kokos-und-zitrone.de`.
- Menü: `Quiz / Vokabular / Sanatorium`. Sanatorium öffnet `kokosundzitrone.de` im neuen Tab. Buch-Buttons öffnen ebenfalls neue Tabs.
- Impressum nur im Footer, nicht im Hauptmenü.

## Branches

- `claude/add-vocabulary-entries-ycvha` — aktueller Vokabular-Arbeitsbranch.
- `claude/review-previous-sessions-x1QKV` — Vorgänger mit der initialen Vokabular-Infrastruktur.
- `claude/botanical-soda-website-B4Zfp` — historischer Hellmuth-Site-Branch.

Wenn neue Branches angelegt werden, vom aktuellsten Vokabular-Branch aus, nicht vom Hellmuth-Branch.

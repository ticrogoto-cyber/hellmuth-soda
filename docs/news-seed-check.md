# Seed-Check und Abnahmeprotokoll

Dieses Dokument beschreibt, wie der erste echte Lauf des News-Moduls geprüft und abgenommen wird. Verbindlich.

## Reihenfolge (nicht abkürzen)

1. Cron-Sicherung ist scharf: `NEWS_CRON_ENABLED` ist nicht gesetzt oder steht auf etwas anderem als `true`. Der Cron läuft nach Merge **nicht** los.
2. `task=check-feeds` manuell auslösen. Echte `feed_status`-Werte werden in `config/news-sources.json` geschrieben. Quellen mit Status `missing`, `error` oder `robots-disallow` bleiben oder werden inaktiv.
3. `task=run` mit `max_new=3` manuell auslösen. Drei Wissenschaft-Items werden in `content/news/science/` committet.
4. Stilprüfung gemäß Drift-Liste unten.
5. Erst nach Freigabe: Repo-Variable `NEWS_CRON_ENABLED=true` setzen. Damit wird der tägliche Cron scharf.

## Drift-Liste

Wenn eines dieser Muster auftaucht: **melden, nicht selbst korrigieren**. Der Fix sitzt in `pipeline/style/newsroom-rule.md`, nicht im Einzeltext.

### Punktuation

- Em-Dash (`—`) im Text. Verboten überall.
- En-Dash (`–`) als Satzzeichen, also nicht zwischen Zahlen oder Datumsangaben.
- Doppelpunkt, der keine Aufzählung ankündigt und keine zwingende Ankündigung ist. Wenn der Doppelpunkt nur Rhythmus erzeugt, ist er drift.
- Englische Anführungszeichen statt Guillemets.
- Ausrufezeichen.
- Fragezeichen am Satzende, außer in einem wörtlichen Zitat aus fremdem Munde.

### Wortwahl

- Leere Verstärker: »spannend«, »interessant«, »wichtig«, »bemerkenswert«, »bahnbrechend«, »beeindruckend«, »erstaunlich«.
- Hedging: »vielleicht«, »wohl«, »tendenziell«, »unter Umständen«, »manchmal«, »oft« dort, wo die Quelle eine konkrete Zahl liefert.
- Erste Person (»ich«, »wir«), außer in der Aufforderungsstruktur der Hausordnung.
- Pathos, Beschwörung, »wir müssen endlich«.
- Selbsterklärende Allgemeinplätze: »Das ist tragisch.«
- Hellmuth-Soda-Werbung. Das Modul verkauft nicht das Soda.

### Struktur

- Generischer erster Satz, der teasert statt diagnostiziert. Verdacht bei »Eine neue Studie zeigt«, »Forscher haben herausgefunden«, »Ein neuer Trend«, »In Asien beobachten Experten«.
- Adjektiv-Stapelei vor Substantiven. Zwei oder mehr wertende Adjektive vor einem Substantiv sind drift.
- Schlusssatz, der keine Pointe ist, sondern erklärt oder zusammenfasst. Der Schluss muss ein Verdikt sein.
- Schlusssatz als offene Frage ohne Antwort.

### Längen

- Wissenschaft: genau 5 Sätze.
- HELLMUTH: 5 bis 15 Sätze.
- Pressespiegel-Modus: 2 bis 4 Sätze, klar als solcher gekennzeichnet, mit dem Hinweis »Pressespiegel, Volltext bei <Quelle>« über dem Body. Wenn der Hinweis fehlt: drift.

### Recht

- Kein 1:1-übersetzter Satz aus der Quelle.
- Kein wörtliches Zitat über wenige Wörter hinaus.
- Kein erfundenes Detail im Pressespiegel-Modus.

## Abnahmeprotokoll

1. Ich lege die drei Items im Volltext vor. Vollständige `body`, kein gekürzter Auszug.
2. Antwort »freigeschaltet«: Repo-Variable `NEWS_CRON_ENABLED=true` setzen, Cron läuft.
3. Antwort »nachschärfen«: Ich ändere `pipeline/style/newsroom-rule.md`, eventuell `pipeline/lib/anthropic.mjs` (Themen-Vokabular), nicht die drei Items. Danach Seed neu laufen lassen. Eine Iteration optimiert die Regel, nicht den Einzeltext.
4. Wiederholen, bis Antwort »freigeschaltet«.

## Was beim Seed-Neulauf zu beachten ist

Damit die drei zuvor gesehenen Items nach einer Regeländerung erneut verarbeitet werden:

- Die `published`-Einträge zu diesen URLs in `pipeline/state/seen.json` löschen, oder die Markdown-Dateien unter `content/news/science/` entfernen.
- Oder eine andere Seed-Charge ziehen lassen, indem `max_new` höher gesetzt wird und die alten als gesehen markiert bleiben.

Welche Strategie sinnvoller ist, entscheide ich je nach Drift-Muster und melde es im Vorschlag.

# Quellen-Format-Audit

Audit der `quellen`-Arrays aller Einträge in `/zutaten/substances.js` gegen das Soll-Format »Name Jahr [kurzes Stichwort]«.

## 1. Einträge mit nicht-leerem `quellen`

**148** von 168 Einträgen haben mindestens eine Quelle.

## 2. Einträge mit leerem `quellen` (Lücken)

**20** von 168 Einträgen haben ein leeres Quellen-Array.

## 3. Format-Abweichungen

Insgesamt **12** Quelleneinträge weichen vom Soll-Format ab (verteilt auf 11 Slugs).

| Slug | Abweichungs-Muster | Quelle |
|---|---|---|
| chlorophyll | FULL_TITLE (Journal-Name angehängt) | `Burgi 1934 JAMA` |
| dmae | NO_YEAR | `FDA Drug Efficacy Study` |
| dmso | NO_YEAR / URL-Domain | `midwesterndoctor.com DMSO-Serie` |
| dmso | NO_YEAR / URL-Pfad | `kokos-und-zitrone.de/p/trinken-stoppt-die-heilung` |
| eisen | FULL_TITLE (Journal-Name angehängt) | `Camaschella 2015 Eisenmangel NEJM` |
| iod | FULL_TITLE (Journal-Name angehängt) | `Zimmermann 2009 Lancet Iodmangel` |
| kalium | FULL_TITLE (Journal-Name angehängt) | `Aburto 2013 BMJ Kalium Metaanalyse` |
| lithiumorotat | FULL_TITLE (Klammer mit Journal) | `McKnight 2012 (Lancet Nephrotoxizität)` |
| l-theanin | NO_YEAR | `Kreativer Suizid (Buch)` |
| macadamia | NO_YEAR / URL-Domain | `blueprint.bryanjohnson.com` |
| selen | FULL_TITLE (Journal-Name angehängt) | `Rayman 2012 Selen Lancet Review` |
| vitamin-b12-methylcobalamin | FULL_TITLE (Journal-Name angehängt) | `Stabler 2013 Vitamin B12 Deficiency NEJM` |

### Muster-Häufigkeit

- **FULL_TITLE / Journal-Namen im Zitat** (NEJM, JAMA, Lancet, BMJ): 7 Fälle
- **NO_YEAR**: 5 Fälle (davon 3 mit URL-Domain bzw. Pfad statt Autor/Jahr)
- **DOI im Text**: 0
- **PMID im Text**: 0
- **Volle https-URL**: 0
- **>80 Zeichen**: 0
- **Mehrfach-Autoren ohne et al**: 0
- **Verschachtelte Untertitel**: 0

### Hinweis

Die FULL_TITLE-Treffer enthalten *keinen* tatsächlichen Studientitel mit Seitenangabe (`;385:123`), sondern nur den Journal-Namen als zusätzlichen Tag (z. B. `Burgi 1934 JAMA`). Streng nach Regel ist Journal-Name kein erlaubtes »kurzes Stichwort« (das Beispiel »Magnesium-L-Threonat Kognition« ist ein Inhalts-Stichwort, kein Journal). Diese Fälle könnten entweder
- normalisiert werden auf `Name Jahr Stichwort` (Journal weglassen), oder
- per Sonderregel als zulässig erklärt werden.

Die echten Ausreißer sind die 5 NO_YEAR-Fälle bei `dmae`, `dmso` (2×), `l-theanin`, `macadamia` — hier fehlt entweder ein zitierfähiger Autor/Jahr-Anker oder es handelt sich um Web-Quellen ohne Datum.

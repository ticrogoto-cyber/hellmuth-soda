# Briefing für Website-Update – Klarheitskarten-Landingpage

**Adressat:** der/die Chat-Session, die Zugriff auf das Repo der Website hat, auf der aktuell die Klarheitskarten-Vorbestellungsseite läuft (vermutlich `kokos-und-zitrone.de` oder eine separate Subseite). Diese Datei liegt **nicht** in diesem Repo (`hellmuth-soda.de`).

**Stand:** 2026-05-09. Snapshop Lite ist live unter `https://klarheitskarten.qpmarketnetwork.com/`. Vorbestellung/Warteliste fällt weg, das Produkt ist regulär kaufbar.

---

## Was sich ändert

### 1. Status: kein Vorbestellungs-/Warteliste-Modus mehr

**Zu entfernen:**

- Eyebrow-Zeile „Bald erhältlich · Vorbestellung offen" → entfernen
- Zwei Buttons „Auf Warteliste setzen" → entfernen
- Wartelistenformular oder Mailto-Link, der diese Buttons aktuell auslöst → entfernen
- Falls vorhanden: Hinweis im Footer/CTA „Wir melden uns, sobald es losgeht" o. ä. → entfernen

**Zu ersetzen durch:**

Ein einzelner CTA-Button mit Text **„Im Shop kaufen"** (oder, falls knapper gewünscht: **„Zum Shop"**).

- Ziel: `https://klarheitskarten.qpmarketnetwork.com/`
- `target="_blank"`
- `rel="noopener noreferrer"`

Position: dort, wo bisher der erste „Auf Warteliste setzen"-Button stand. Wenn der zweite Button am Seitenende ebenfalls existiert, dort denselben Link wiederholen (mit demselben Verhalten).

### 2. Preisangabe aktualisieren

**Zu entfernen:**

- „Erste Edition · ab 29,90 EUR · zzgl. Versand"

**Zu ersetzen durch:**

- „Erste Edition · 22,00 EUR · zzgl. Versand"

(Keine .99/.90-Manipulation. Ganze Zahl. Markenkohärent zu einem Spiel gegen Selbstbetrug.)

### 3. Lieferumfang aktualisieren

Der aktuelle „Enthalten"-Block lautet:

> 52 Selbstbetrugskarten in 13 Quartetten
> Regelkarten für alle Spielmodi
> Stabile Box, Pokerformat
> Minimalistisches Printdesign, schwarz auf weiß

**Ersetzen durch:**

> 52 Selbstbetrugskarten in 13 Quartetten
> 3 Regelkarten (Trumpfquartett, Falltür, Solo-Diagnose)
> 55 Karten gesamt, 63,5 × 88,9 mm, abgerundete Ecken
> Premium Smooth Karton, mattes Finish
> in Cellophan eingeschweißt (ohne Box)
> Minimalistisches Printdesign, schwarz auf weiß

Begründung für die Box-Entfernung: Box wäre ~10 EUR teurer geworden und hätte den Preisvorteil aufgefressen. Buchcover-Anbindung läuft über das Buch *Kreativer Suizid* selbst.

### 4. Hauptmenü: Eintrag „SHOP"

Im globalen Site-Menü gibt es einen Punkt „SHOP". Dieser muss verlinkt werden auf:

- Ziel: `https://klarheitskarten.qpmarketnetwork.com/`
- `target="_blank"`
- `rel="noopener noreferrer"`

(Sollte „SHOP" bisher auf eine Platzhalter-/leere Seite zeigen, alten Link ersetzen.)

### 5. Beispielkarten

Die drei eingebetteten Beispielkarten (A01 *Ich fange morgen an*, B01 *Ich habe das im Griff*, E03 *Rauchen macht kreativ*) bleiben **inhaltlich unverändert** – Werte, Diagnosen und Falltürfragen stimmen weiterhin.

Falls ein Auto-Generator dahinter steckt, der die Werte aus einer Quelle lädt: Quelle bleibt synchron mit `klarheitskarten/01_text/klarheitskarten_001_master.csv` aus diesem Repo.

### 6. Spielmodi

Bleiben **inhaltlich unverändert**: Trumpfquartett, Falltür, Diagnose-Solo, Duell, Textklinik-Modus.

### 7. Disclaimer-Block

Bleibt **wortgleich**:

> Kein medizinisches, psychotherapeutisches oder suchttherapeutisches Produkt. Klarheitskarten dienen der Selbstreflexion und Gesprächsanregung für Erwachsene. 18+.

### 8. GPSR-Pflichtangaben (neu, falls noch nicht vorhanden)

Da das Produkt ohne Box ausgeliefert wird, müssen die EU-Pflichtangaben sichtbar im Online-Angebot stehen. Block irgendwo unterhalb von „Enthalten" einfügen, am besten als kleinerer Text- oder Footer-Block:

```
Hersteller / Inverkehrbringer: Ticro Goto, [Strasse, PLZ Ort, Land]
Kontakt: kontakt@kokos-und-zitrone.de
Produktkennung: KK-001-SELBSTBETRUG-DE

Sicherheits- und Warnhinweise:
- Für Erwachsene. 18+.
- Kleinteile – nicht für Kinder unter 3 Jahren geeignet.
- Kein medizinisches, psychotherapeutisches oder suchttherapeutisches Produkt.
- Bei akuten psychischen oder körperlichen Beschwerden professionelle Hilfe suchen.
```

**Achtung:** Adresse ist Platzhalter. Vor Veröffentlichung mit der echten Inverkehrbringer-Anschrift füllen.

### 9. Schlusszeile bleibt

> Selbstbetrug verliert Macht, sobald er einen Namen bekommt.

Diese Zeile bleibt als emotionaler Schlussakkord.

---

## Zusammenfassung der Änderungen in einer Liste

1. Eyebrow „Bald erhältlich · Vorbestellung offen" entfernen.
2. Zwei „Auf Warteliste setzen"-Buttons + zugehörige Logik entfernen.
3. Stattdessen ein/zwei CTA „Im Shop kaufen" → `https://klarheitskarten.qpmarketnetwork.com/`, neuer Tab, `rel="noopener noreferrer"`.
4. Preis von „ab 29,90 EUR" auf **„22,00 EUR"** ändern.
5. Lieferumfang aktualisieren (siehe Block oben), Box raus, Cellophan rein, 55 Karten gesamt.
6. Hauptmenü „SHOP" auf `https://klarheitskarten.qpmarketnetwork.com/` legen, neuer Tab.
7. GPSR-Pflichtangaben-Block ergänzen (Adresse-Platzhalter durch echte Anschrift füllen).
8. Beispielkarten, Spielmodi, Disclaimer und Schlusszeile bleiben unverändert.

---

## Hintergrund (für Kontext, nicht öffentlich)

- Vertriebsweg: QPMN Snapshop Lite (KDP-ähnliches Royalty-Modell). Kunde zahlt QPMN, QPMN produziert + verschickt, zahlt dem Autor den Margenanteil per SWIFT aus.
- Shopify ist verworfen (Cashflow-Problem ohne Eigenkapital).
- Produktion: 55-Karten-Deck, 63,5 × 88,9 mm, Premium Smooth, matt, Cellophan.
- Stückkosten bei 1-Unit-Bestellung ca. 15 EUR, Verkaufspreis 22 EUR, Marge 7 EUR vor VAT/Import.
- Die vollständige Master-Spezifikation liegt im Repo `ticrogoto-cyber/hellmuth-soda`, Branch `claude/setup-klarheitskarten-project-OudyU`, Ordner `klarheitskarten/`.

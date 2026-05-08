# Box-Spezifikation – Tuck Box für 56 Karten

Verbindlich ist die Dieline-Vorlage von QPMN (Dashboard → **Dateibibliothek** oder **Design-Hub & Vorlagen**). Lade die echte Vorlage herunter, sobald sie verfügbar ist – die Werte unten sind für InDesign-Vorbereitung und Cover-Mockup gedacht.

## Vorabschätzung Tuck Box

### Innenmaße (was die Karten brauchen)

- Karten 63,5 × 88,9 mm
- 56 Karten × ~0,32 mm (Premium Smooth PS30) ≈ **17,9 mm Stapelhöhe**
- + 1,5 mm Spiel = ~19,5 mm

### Außenmaße der Box (geschlossen)

| Maß | Wert |
|---|---|
| Breite (vorne) | **65 mm** |
| Höhe (vorne) | **91 mm** |
| Tiefe (Rücken) | **20 mm** |

### Flachgelegte Dieline (unverbindlich, für Artboard-Planung)

Eine klassische Tuck-End-Dieline besteht aus 4 Hauptpaneelen + 2 Tuck-Flaps + Klebelasche:

```
                   ┌──────────────┐
                   │  Top Tuck    │  ~22 mm + Flap
                   ├──┬────────┬──┤
                   │  │        │  │
                   │  │        │  │
                   │S1│  FRONT │S2│  91 mm
                   │  │        │  │
                   │  │        │  │
                   ├──┴────────┴──┴─────────┬─────┐
                   │       BACK             │     │
                   │                        │ Glue│
                   │                        │ Tab │
                   │                        │ ~10 │
                   ├────────────────────────┤     │
                   │  Bottom Tuck (~22 mm)  │     │
                   └────────────────────────┴─────┘
   Side panels S1, S2: je 20 mm × 91 mm
```

### Empfohlene InDesign-Artboardgröße

- **Breite:** 2 × Front (65) + 2 × Side (20) + Glue Tab (10) = **180 mm**
- **Höhe:** Top Tuck (22) + Front (91) + Bottom Tuck (22) + Tuck Flaps (je ~25 mm) = **~185 mm**
- **Plus 3 mm Bleed umlaufend** → InDesign-Dokumentgröße **186 × 191 mm** mit 3 mm Anschnitt
- DPI 300, CMYK FOGRA39

**Wichtig:** Diese Maße sind eine Vorlage zum Mitdenken, nicht zum Drucken. Die echte Dieline von QPMN kann pro Millimeter abweichen, vor allem bei Tuck-Tiefe und Klebelasche.

## Was du gestaltest

| Panel | Inhalt |
|---|---|
| **Front** | Buchcover-Bezug. Zentrales Bild, das an *Kreativer Suizid* erinnert. Plus Logo-Block oben/unten: KLARHEITSKARTEN I / SELBSTBETRUG. |
| **Back** | Rechtssichere Kurzbeschreibung (Briefing 3.7), Claim, Anbieter-/Hersteller-Angabe, EAN-Platzhalter, GPSR-Hinweis. |
| **Side panels** | KLARHEITSKARTEN I (vertikal) auf einer Seite; SELBSTBETRUG auf der anderen. |
| **Top Tuck** | Klein: Logo-Wortmarke. |
| **Bottom Tuck** | Klein: SKU + Made-by-Angabe. |

## Pflichtangaben auf der Box (EU)

Wenn du in die EU verkaufst und die Box das physische Erkennungsobjekt am POS ist:

- Hersteller-/Inverkehrbringer-Name + postalische Adresse
- elektronische Kontaktadresse (URL oder Mail)
- Produktkennung (Charge / SKU)
- Altershinweis: „Für Erwachsene. 18+"
- Disclaimer: „Kein medizinisches, psychotherapeutisches oder suchttherapeutisches Produkt."
- ggf. Warnhinweis: kein Spielzeug für Kinder unter 3 Jahren (Kleinteile)
- ggf. Recycling-/Verpackungssymbol

GPSR-konforme Kontaktangaben sind seit 2024/25 Pflicht für Produkte im EU-Markt.

## Maße fürs Bookcover-Bild auf der Front

Front-Panel netto: **65 × 91 mm** (mit 3 mm Bleed: 71 × 97 mm).

Wenn du den Buchcover-Look durchdrücken willst, sollte die Bild-Sicherheitszone für Headline/Logo **3 mm** zur Schnittkante haben. Effektive Bildfläche für freie Komposition: **59 × 85 mm**.

Bildauflösung mindestens 300 DPI bei dieser Endgröße:
- 71 × 97 mm @ 300 DPI = **839 × 1146 px**
- Empfehlung: in 2× generieren (1678 × 2292 px), damit Skalierung Reserve hat.

## Workflow-Vorschlag

1. QPMN-Dieline holen (Dashboard → Dateibibliothek → Custom Drawer/Tuck Box → Template Download).
2. Echte Dieline öffnet als PDF/AI/PNG mit Faltlinien (rot/blau gestrichelt) und Bleed-Linie.
3. Dieline in InDesign auf eigene Ebene legen, Linien sperren.
4. Eigenes Layout darunter bauen.
5. Vor Export Dieline-Ebene ausblenden.
6. PDF/X-1a oder X-4, alle Schriften eingebettet.

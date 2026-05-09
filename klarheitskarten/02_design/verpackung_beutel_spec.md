# Verpackung – Beutel statt Box

**Entscheidung 2026-05-09:** MVP ohne Tuck Box. Der Box-Aufpreis von ~10 EUR liegt über der Preisschmerzgrenze und kannibalisiert den Kaufimpuls. Stattdessen: einfache Beutel-/Cellophan-Verpackung. Buchcover-Anbindung läuft über das Buch *Kreativer Suizid* selbst, nicht über die Deck-Verpackung.

## Konsequenzen

### Preis
- Verkaufspreis MVP: **€19,90**
- Marge ähnlich wie Buch (Briefing 14)
- Premium-Edition mit Box bleibt für später (Briefing 13.2)

### GPSR-Pflichtangaben
Ohne Box brauchen die EU-Pflichtangaben einen physischen Träger im Lieferumfang. Lösung: **R04 (Hinweis-Karte) wurde erweitert** und enthält jetzt:
- 18+
- Disclaimer (kein medizinisches Produkt)
- Inverkehrbringer-Name + Adresse (Platzhalter, vom Autor zu füllen)
- E-Mail-Kontakt
- SKU

**TODO vor Druck:** Adresse in `02_design/render_cards.py` (Funktion `render_all`, R04-Block) durch echte Anschrift ersetzen, dann neu rendern.

### Verpackungsoption bei QPMN
Beim Produkt-Konfigurator: **Cellophan-Wrap** oder **einfacher Samtbeutel**.

Empfehlung:
- **Cellophan-Wrap (eingeschweißt)** = günstigste Variante, sieht „indie" aus, lässt Karten sichtbar.
- **Samtbeutel** = haptisch wertiger, aber teurer und versteckt das Produkt. Eignet sich eher für eine Premium-Linie.

### Box-Spec auf Eis
`box_spec.md` bleibt im Repo als Vorbereitung für die spätere Premium-Edition, ist aber für den MVP nicht aktiv.

## Angepasste Lieferumfang-Beschreibung für Shopify/Snapshop Lite

```
Klarheitskarten I – Selbstbetrug
- 52 Selbstbetrugskarten
- 4 Regelkarten (Trumpfquartett, Falltür, Solo-Diagnose, Hinweis)
- in Cellophan eingeschweißt
- 63,5 × 88,9 mm, abgerundete Ecken
- Premium Smooth Karton, mattes Finish
```

## Was die Beutel-/Cellophan-Lösung kommunizieren muss

Da keine Box vorhanden ist, übernimmt das Online-Listing einen Teil der „Verpackungsarbeit":

- Produktbild zeigt offene Karten + Stapel + die R04-Hinweiskarte deutlich
- Mockup der Cellophan-Verpackung
- Hinweis im Listing: „Geliefert in Cellophan, ohne Box. Pflichtangaben auf der Hinweis-Karte im Deck."

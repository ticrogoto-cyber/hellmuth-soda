# TEMPLATE — Bildgebung-Diagramme

**Verbindliche Regeln für alle 40 SVGs.** Lies dieses Dokument einmal komplett, bevor du irgendein SVG anfasst. Bei Konflikten gilt diese Datei.

## Reference SVG

Vorbild: `/home/user/hellmuth-soda/diagramme-bildgebung/svg/diagramm-vitamin-d-k2-magnesium-triade.svg` (Typ A — System-Triade)

**Kopiere `<style>...</style>` und `<script>...</script>` aus dem Referenz-SVG WORTWÖRTLICH in jedes neue SVG.** Nicht umformatieren, nicht „verbessern". Damit garantieren wir, dass alle 40 Diagramme dasselbe Verhalten und denselben Stil zeigen.

## Datei

- Dateiname: `diagramm-[essay-slug].svg`
- Ablage: `/home/user/hellmuth-soda/diagramme-bildgebung/svg/`
- Encoding: UTF-8
- Erste Zeile: `<?xml version="1.0" encoding="UTF-8"?>`

## SVG-Root

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 400" role="img"
     aria-labelledby="diag-title diag-desc" class="hs-diagram"
     data-diagram="[essay-slug]">
  <title id="diag-title">[Titel-des-Diagramms]</title>
  <desc id="diag-desc">[1-2 Sätze beschreiben die Aussage des Diagramms]</desc>
  ...
</svg>
```

- viewBox **immer** `0 0 680 400` (Höhe darf <= 400, Breite immer 680). Brief erlaubt schmaler/breiter, wir bleiben einheitlich bei 680x400.
- Falls dein Diagramm weniger Höhe braucht, lasse den unteren Bereich frei (Whitespace ist OK).

## Typografie

| Klasse     | Schrift       | Stil   | Versalien | Letter-spacing | Default font-size |
|-----------|---------------|--------|-----------|----------------|-------------------|
| `.h-main` | Printvetica   | Bold   | JA        | 0.2em          | 17                |
| `.h-col`  | Printvetica   | Regular| JA        | 0.2em          | 14                |
| `.h-res`  | Printvetica   | Regular| JA        | 0.16em         | 11                |
| `.sub`    | Fournier Pro  | Italic | nein      | normal         | 11–12.5           |
| `.closer` | Fournier Pro  | Italic | nein      | normal         | 13.5              |
| `.sep-word`| Printvetica  | Regular| JA        | 0.22em         | 10                |

- **Hauptbegriffe (`.h-col`, `.h-res`)**: in Versalien schreiben (z.B. `VITAMIN D`, `LENKT CALCIUM`). Versalien werden im SVG durch Großbuchstaben dargestellt — nicht `text-transform: uppercase`.
- **Untertitel/Erläuterungen (`.sub`)**: Fournier Italic. **Deutsche Rechtschreibung — Substantive großschreiben.** Falsch: „cofaktor". Richtig: „Cofaktor".
- Closer-Satz im typografischen Zitatformat: `»…«` (deutsche Guillemets).

## Farben

- Text Haupt: `#1a1a1a`
- Text Muted: `#888` (Untertitel, gestrichelte Linien, Trenner-Wort)
- Hintergrund: keine (transparent — die Seite ist `#f8f8f8`)
- Warn-Farbe (nur falls Pfad explizit Gefahr/Sackgasse darstellt): `#6B0F1A`, sparsam.

## Linien & Pfeile

- Durchgezogene Pfeile `.arr`: `stroke="#1a1a1a"`, `stroke-width="0.8"`, `fill="none"`
- Gestrichelte Linien `.feedback`: `stroke="#888"`, `stroke-width="0.7"`, `stroke-dasharray="4 3"`, `fill="none"`
- Trennlinien `.sep`: `stroke="#888"`, `stroke-width="0.5"`, `fill="none"`
- Pfeilspitze (Chevron): `<polyline points="x1,y1 x2,y2 x3,y3"/>` mit denselben stroke-Werten. Spitze am Pfadende.
- **Kein `<marker>`-Element** — Chevrons werden als sichtbare polylines gezeichnet (bessere Kontrolle).

### Chevron-Bauanleitung

Für Pfeil endet bei `(X, Y)`:
- **nach unten zeigend**: `points="X-4,Y-5 X,Y X+4,Y-5"`
- **nach oben zeigend**: `points="X-4,Y+5 X,Y X+4,Y+5"`
- **nach links zeigend**: `points="X+4,Y-4 X,Y X+4,Y+4"`
- **nach rechts zeigend**: `points="X-4,Y-4 X,Y X-4,Y+4"`

### Linie + Chevron als Einheit

```svg
<g class="arr-group">
  <line class="arr draw" data-delay="500" x1="..." y1="..." x2="..." y2="..." style="--len:LÄNGE"/>
  <polyline class="arr-head reveal" data-delay="640" points="..."/>
</g>
```

`--len` ist die Pixel-Länge der Linie (z.B. 52 für eine 52px-vertikale Linie). Berechne sie aus den Koordinaten: `sqrt((x2-x1)^2 + (y2-y1)^2)`. Auf ganze Zahlen runden.

## Pfad-Kreuzungs-Regel (HART)

**Kein Pfad, keine Linie, kein Chevron darf durch eine Text-Bounding-Box laufen.** Vor jedem Pfad: prüfe alle Text-Elemente.

- Text-Bounding-Box konservativ schätzen: `width ≈ Zeichenanzahl * font-size * 0.6` (für Printvetica VERSALIEN mit letter-spacing) bzw. `width ≈ Zeichenanzahl * font-size * 0.55` (Fournier Italic).
- Höhe: `font-size + 6` (Ascender + Descender + Pufferzone).
- Text mit `text-anchor="middle"`: bbox geht von `(x - width/2, y - font-size)` bis `(x + width/2, y + 4)`.
- Wenn ein Pfad eine Text-bbox treffen würde: **Pfad umrouten** (anderer Y-Bereich) oder **Text verschieben**.

Beispiel: gestrichelte Feedback-Arc unter drei Spalten muss tiefer liegen als alle Untertitel der Spalten. Wenn die Untertitel bei y=246 enden, dann starte den Arc bei y >= 260.

## Layout-Sektionen (Standard, 680×400)

```
y=20-30:   ggf. Eyebrow (optional)
y=44:      Haupttitel (.h-main, 17px, anchor middle)
y=66:      Subtitle (.sub, 12.5px, anchor middle)
y=100-260: Diagramm-Bereich (typabhängig)
y=275-310: ggf. Erklärtext (sub, 10.5px)
y=320-340: Trennlinie + sep-word
y=370-385: Closer (.closer, 13.5px, anchor middle)
```

Wenn dein Diagrammtyp mehr Raum braucht, schiebe Trennlinie/Closer nach unten — aber maximal y=400.

## Trennlinie + Closer (UNVERHANDELBAR — gleich bei allen 40)

```svg
<g class="reveal" data-delay="1020">
  <line class="sep" x1="60" y1="352" x2="298" y2="352"/>
  <text class="sep-word" x="340" y="356" font-size="10" text-anchor="middle">[WORT]</text>
  <line class="sep" x1="382" y1="352" x2="620" y2="352"/>
</g>

<g class="reveal lift" data-delay="1120">
  <text class="closer" x="340" y="385" font-size="13.5" text-anchor="middle">»[Satz aus dem Essay].«</text>
</g>
```

- `[WORT]`: ein einzelnes Wort, das die Diagramm-Aussage zusammenfasst (z.B. `TRIADE`, `GABELUNG`, `KREISLAUF`, `FILTER`, `ZEITSTRAHL`, `KARTE`, oder ein essay-spezifisches Wort wie `ABBRUCH`, `NICHTS`, `LÜCKE`).
- `[Satz]`: einen prägnanten Satz aus dem Essay. **Wortgetreu aus dem Essay-Text zitieren**, nicht selbst formulieren. Deutsche Guillemets `»…«`. Max ca. 80 Zeichen.
- Closer-y kann nach oben angepasst werden, wenn der Satz lang ist (mehr Platz nach unten).

## Diagrammtypen

### Typ A — System-Triade (3 abhängige Substanzen)

Drei Spalten bei x=130, 340, 550. In jeder Spalte:
- Versalien-Begriff (h-col, 14px) bei y=116
- Italic-Untertitel (sub, 11px) bei y=134
- Pfeil nach unten (draw 52px) von y=148 bis y=200, Chevron darunter
- Versalien-Ergebnis (h-res, 11px) bei y=225
- Italic-Erläuterung (sub, 11px) bei y=243

Feedback-Bogen (gestrichelt) zwischen Spalten unterhalb von y=270.

**Geeignet für**: Substanz-Triaden (D/K2/Mg, CoQ10/PQQ/ALCAR, Omega-3+B-Vitamine), 3-Achsen-Systeme.

### Typ B — Gabelung (1 → 2 Wege)

Oberer Begriff zentral bei x=340, y=116 (h-col).
Pfeil teilt sich bei y=170 in zwei Pfeile (nach links zu x=180, nach rechts zu x=500).
Linker Pfad endet bei (180, 250) — typischerweise „schlecht" / „Marketing" / „Nicht funktioniert".
Rechter Pfad endet bei (500, 250) — typischerweise „echt" / „Biologie" / „Funktioniert".
Pfad in `#6B0F1A` ist erlaubt für die problematische Seite (sparsam).

Wenn ein Endpunkt ein klares Ergebnis ist (z.B. „NICHTS"), darf er einen feinen Rahmen bekommen:
```svg
<rect x="..." y="..." width="..." height="..." fill="none" stroke="#1a1a1a" stroke-width="0.5"/>
```

**Geeignet für**: Curcumin (PAINS vs Klinik), Liposomal (echte Technologie vs Hülle), Detox (Marketing vs Biologie), Pro/Contra-Vergleiche.

### Typ C — Zeitstrahl

Horizontale Linie bei y=200, von x=80 bis x=620.
Markierungen (vertikale Tick) bei 4–6 Jahreszahlen.
Jahreszahl unter dem Tick (sub, 11px), Ereignis-Versalien darüber (h-res, 11px).

**Geeignet für**: DMSO (1961→1965→1978→heute), Senolytika (Konzept→Maus→Mensch), historische Substanz-Geschichten.

### Typ D — Körperkarte

Schematische Silhouette/Anker-Punkte. Statt einer aufwendigen Körper-Skizze: 
- Zentraler Begriff bei (340, 50) als h-main.
- 4–6 Anker-Punkte verteilt (z.B. Zunge, Magen, Darm, Lunge, Immunzellen) als kleine Kreise (r=2, fill=#1a1a1a).
- Linien (`.feedback`) vom zentralen Begriff zu jedem Anker.
- Bei jedem Anker: h-res-Label (Versalien) + sub-Untertitel.

**Geeignet für**: Bitter/TAS2R (multi-Organ-Rezeptoren), Substanzen mit mehreren Wirkungsorten.

### Typ E — Trichter / Filter

Breiter Eingang (z.B. von x=80 bis x=600) bei y=120. Schmaler Ausgang (z.B. von x=300 bis x=380) bei y=270.
Trichterwände als zwei diagonale Linien.
Labels:
- Oben am Eingang: große Zahl/Begriff (h-col)
- Mittendrin: Filter-Beschreibungen (sub, italic)
- Unten am Ausgang: Endergebnis (h-res, optional in Rahmen)

**Geeignet für**: Bioverfügbarkeit (500mg → 5mg), PAINS-Filter (10.000 Papers → ?), Selektivitäts-Filter.

### Typ F — Kreislauf (Schleife)

3–4 Elemente kreisförmig angeordnet. Pfeile zwischen ihnen bilden einen geschlossenen Kreis.
Empfohlene Positionen für 4 Elemente: 
- oben (340, 100)
- rechts (530, 200)
- unten (340, 300)
- links (150, 200)

Pfeile als Bögen (kleine Krümmung). Zentrum frei, ggf. ein zentraler erklärender Begriff in Italic.

**Geeignet für**: Mitochondriale Dysfunktion (Schaden→Radikale→mehr Schaden), Stress-Schleifen, sich selbst verstärkende Prozesse.

## Animation (UNVERHANDELBAR — copy-paste aus Referenz-SVG)

CSS-Block und `<script>` exakt aus dem Referenz-SVG übernehmen. Anpassbar nur:
- `data-delay`-Werte pro Element (Reihenfolge: Titel zuerst, dann Spalten/Knoten, dann Pfeile, dann Erläuterung, dann Trennlinie, dann Closer).
- `--len`-Variable für `.draw`-Linien (auf ganze Zahlen runden).
- Gesamtdauer max ~1200ms — d.h. letzter data-delay max ~1120 vor Closer.

## CSS / Script Block (exakt kopieren)

```html
<style>
  .hs-diagram { font-family: 'Fournier Pro', Georgia, 'Times New Roman', serif; }
  .hs-diagram .h-main { font-family: 'Printvetica', 'Helvetica Neue', sans-serif; font-weight: 700; letter-spacing: 0.2em; fill: #1a1a1a; }
  .hs-diagram .h-col { font-family: 'Printvetica', 'Helvetica Neue', sans-serif; font-weight: 400; letter-spacing: 0.2em; fill: #1a1a1a; }
  .hs-diagram .h-res { font-family: 'Printvetica', 'Helvetica Neue', sans-serif; font-weight: 400; letter-spacing: 0.16em; fill: #1a1a1a; }
  .hs-diagram .sub { font-family: 'Fournier Pro', Georgia, serif; font-style: italic; fill: #888; }
  .hs-diagram .closer { font-family: 'Fournier Pro', Georgia, serif; font-style: italic; fill: #1a1a1a; }
  .hs-diagram .sep-word { font-family: 'Printvetica', 'Helvetica Neue', sans-serif; letter-spacing: 0.22em; fill: #888; }
  .hs-diagram .arr { stroke: #1a1a1a; stroke-width: 0.8; fill: none; stroke-linecap: butt; stroke-linejoin: miter; }
  .hs-diagram .arr-head { stroke: #1a1a1a; stroke-width: 0.8; fill: none; stroke-linecap: butt; stroke-linejoin: miter; }
  .hs-diagram .feedback { stroke: #888; stroke-width: 0.7; fill: none; stroke-dasharray: 4 3; }
  .hs-diagram .feedback-head { stroke: #888; stroke-width: 0.7; fill: none; }
  .hs-diagram .sep { stroke: #888; stroke-width: 0.5; fill: none; }
  .hs-diagram .warn { stroke: #6B0F1A; }
  .hs-diagram .warn-fill { fill: #6B0F1A; }

  .hs-diagram .reveal { opacity: 0; transition: opacity 500ms ease; }
  .hs-diagram .reveal.is-visible { opacity: 1; }
  .hs-diagram .lift { transform: translateY(8px); transition: opacity 500ms ease, transform 500ms ease; }
  .hs-diagram .lift.is-visible { transform: translateY(0); }
  .hs-diagram .draw { stroke-dasharray: var(--len, 200); stroke-dashoffset: var(--len, 200); transition: stroke-dashoffset 600ms ease; opacity: 1; }
  .hs-diagram .draw.is-visible { stroke-dashoffset: 0; }

  .hs-diagram .col-group { transition: opacity 200ms ease; cursor: default; }
  .hs-diagram .col-group:hover { opacity: 0.72; }
  .hs-diagram .arr-group .arr,
  .hs-diagram .arr-group .arr-head { transition: stroke-width 200ms ease; }
  .hs-diagram .arr-group:hover .arr,
  .hs-diagram .arr-group:hover .arr-head { stroke-width: 1.2; }

  @media (prefers-reduced-motion: reduce) {
    .hs-diagram .reveal,
    .hs-diagram .lift,
    .hs-diagram .draw { opacity: 1 !important; transform: none !important; stroke-dashoffset: 0 !important; transition: none !important; }
  }
</style>
```

```html
<script><![CDATA[
  (function(){
    var svg = document.currentScript && document.currentScript.parentNode;
    if(!svg) return;
    var els = svg.querySelectorAll('.reveal, .draw');
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function show(){ els.forEach(function(el){ var d = +(el.getAttribute('data-delay')||0); setTimeout(function(){ el.classList.add('is-visible'); }, d); }); }
    if(reduced || !('IntersectionObserver' in window)){ els.forEach(function(el){ el.classList.add('is-visible'); }); return; }
    var seen = false;
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting && !seen){ seen = true; show(); io.disconnect(); } });
    }, { threshold: 0.2 });
    io.observe(svg);
  })();
]]></script>
```

## Manifest-Eintrag (pro Essay)

Jeder Sub-Agent gibt eine JSON-Liste seiner zugewiesenen Essays als finale Text-Antwort zurück. Format pro Eintrag:

```json
{
  "essay_slug": "curcumin-pains-bioverfuegbarkeit",
  "essay_url": "/zutaten/bildgebung/curcumin-pains-bioverfuegbarkeit/",
  "svg_file": "diagramm-curcumin-pains-bioverfuegbarkeit.svg",
  "diagram_type": "B (Gabelung)",
  "insert_after_paragraph_starting_with": "Nelson 2017 formuliert die unbequeme",
  "closer_text": "Die teuerste Form von Nichts ist immer noch Nichts.",
  "notes": "Gabelung: PAINS-Schiene (links) vs. echte Klinik (rechts). Sep-Wort: NICHTS."
}
```

- `essay_slug`: exakt der Verzeichnisname unter `/zutaten/bildgebung/`
- `essay_url`: relative URL der Form `/zutaten/bildgebung/[slug]/`
- `svg_file`: exakt `diagramm-[slug].svg`
- `diagram_type`: einer von `A (System-Triade)`, `B (Gabelung)`, `C (Zeitstrahl)`, `D (Körperkarte)`, `E (Trichter)`, `F (Kreislauf)`
- `insert_after_paragraph_starting_with`: erste 5–8 Wörter (wortgetreu, mit Sonderzeichen) des Absatzes NACH dem das Diagramm steht. Muss eindeutig im Essay sein.
- `closer_text`: exakt der Satz aus dem Closer-Tag im SVG (ohne Guillemets).
- `notes`: 1–2 Sätze zur Begründung des Typs und des Sep-Worts.

## Checkliste vor dem Abgeben

Pro SVG durchgehen:

1. [ ] viewBox = `0 0 680 400`
2. [ ] `<style>`-Block und `<script>`-Block 1:1 wie Referenz
3. [ ] Hauptbegriffe in VERSALIEN-Schreibweise (nicht via CSS uppercase)
4. [ ] Italic-Untertitel: deutsche Substantiv-Großschreibung
5. [ ] Closer-Satz wortgetreu aus Essay, in `»…«`
6. [ ] Trennlinie + Sep-Wort + Closer am unteren Rand
7. [ ] Alle Pfade prüfen: keine Kreuzung mit Text-Bounding-Box
8. [ ] data-delay aufsteigend, max ~1120 vor Closer
9. [ ] Keine Boxen mit fill (nur Endpunkt-Rahmen 0.5px stroke, optional)
10. [ ] Keine runden Ecken (`rx="0"` falls Rechteck)
11. [ ] Warn-Farbe `#6B0F1A` nur falls inhaltlich gerechtfertigt, max einmal pro Diagramm
12. [ ] Eindeutige `insert_after_paragraph_starting_with` (mit grep im Essay verifiziert)

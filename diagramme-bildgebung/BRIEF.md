# Auftrag: Editoriale SVG-Diagramme für Bildgebung-Essays

## Kontext

Auf https://hellmuth-soda.de/zutaten/bildgebung/ befinden sich 43 Essays. Jeder Essay bekommt ein schematisches SVG-Diagramm im Stil von Kokos & Zitrone (Substack von Ticro Goto). Die Diagramme visualisieren die zentrale These, das System oder den Kernbefund des jeweiligen Essays.

---

## Stil-Vorgaben (verbindlich)

### Typografie
- **Überschriften / Hauptbegriffe**: Printvetica, Regular oder Bold, VERSALIEN mit letter-spacing: 0.2em
- **Untertitel / Erläuterungen**: Fournier Pro, Italic, Normalgröße
- **Zitate / Closertext**: Fournier Pro, Italic, unter einer Trennlinie am Ende des Diagramms
- Beide Schriftarten sind im Repo auf GitHub hinterlegt und auf der Website bereits geladen

### Farbgebung
- **Schwarz auf Weiß.** Keine Farbflächen, keine Hintergrundfarben, keine farbigen Boxen.
- Text: Schwarz (#1a1a1a) für Haupttext, Grau (#888) für Untertitel und gestrichelte Linien
- Einzige Ausnahme: Wenn ein Pfad explizit eine Warnung/Gefahr darstellt, darf er in einem gedämpften Dunkelrot (#6B0F1A) gezeichnet werden. Sparsam einsetzen.

### Linien und Pfeile
- Durchgezogene Pfeile: 0.8px Strichstärke, schwarz, offene Pfeilspitze (Chevron-Stil)
- Gestrichelte Linien (Feedback-Loops, Trennlinien): 0.7px, grau, stroke-dasharray: 4 3
- Trennlinien zwischen Abschnitten: 0.5px, grau, horizontal
- **Pfeile müssen pixelgenau an Textelementen enden** — nicht durch Text hindurchlaufen, nicht daneben zeigen. Koordinaten müssen exakt berechnet werden.

### Layout
- **Querformat**: Seitenverhältnis ca. 16:9 (z.B. viewBox="0 0 680 380")
- Nicht höher als 400px viewBox-Höhe. Lieber schmaler und breiter.
- Großzügiger Weißraum. Elemente nicht dicht packen.
- Keine runden Ecken (rx="0" überall). Keine abgerundeten Boxen.
- Keine Boxen mit Füllung. Begriffe stehen frei im Raum, nur durch Typografie-Hierarchie strukturiert.
- Ausnahme: Ein einzelner Begriff darf einen feinen Rahmen (0.5px, schwarz) bekommen, wenn er ein Endpunkt/Ergebnis ist (wie "ABBRUCH" in den Kokos-&-Zitrone-Diagrammen).

### Unteres Zitat
- Jedes Diagramm endet mit einer Trennlinie und einem kursiven Closer-Satz darunter
- Der Closer ist ein Satz aus dem Essay, der die These auf den Punkt bringt
- Format: Zwei horizontale Linien mit einem Wort dazwischen (wie "Triade" oder "Lotze" bei K&Z), darunter der Satz in Fournier Pro Italic

---

## Scroll-Reveal-Animation (verbindlich)

Wenn der Leser zum Diagramm scrollt, baut es sich auf:

### Technik
- Intersection Observer API: Trigger bei 20% Sichtbarkeit
- Elemente erscheinen sequentiell mit 80-120ms Versatz pro Element
- Animation: `opacity 0→1` + leichter `translateY(8px→0)` (von unten eingleiten)
- Gesamtdauer der Aufbausequenz: 800ms—1200ms (nicht länger)
- Pfeile zeichnen sich mit `stroke-dashoffset`-Animation (Pfad entlangfahren)
- Nur einmal abspielen (nicht bei jedem Scroll-Reentry)
- `@media (prefers-reduced-motion: reduce)` → alles sofort sichtbar, keine Animation

### Reihenfolge des Aufbaus
1. Hauptüberschriften (oben) erscheinen zuerst
2. Untertitel folgen
3. Pfeile zeichnen sich
4. Untere Ebene / Ergebnisse erscheinen
5. Trennlinie + Closer-Zitat erscheint zuletzt

---

## Hover-Interaktion (optional, subtil)

- Beim Hovern über einen Hauptbegriff: leichte Opacity-Änderung (1.0 → 0.7) oder leichtes font-weight-Shift
- Beim Hovern über einen Pfeil: Pfeil wird minimal dicker (0.8px → 1.2px) und zugehöriger Untertitel-Text wird sichtbarer
- Kein Tooltip, kein Popup, kein Click-Event. Nur visuelle Rückmeldung.
- Transition: 200ms ease

---

## Platzierung im Essay

Jedes Diagramm wird zwischen zwei Absätzen des Essays platziert. Nicht über der Überschrift. Nicht unter dem Quellenblock. Sondern mitten im Text, nach dem Absatz, der das visualisierte System oder die These beschreibt.

### Regeln für die Platzierung
- Der Absatz vor dem Diagramm muss inhaltlich abgeschlossen sein
- Der Absatz nach dem Diagramm darf den visualisierten Inhalt nicht wiederholen
- Idealerweise steht das Diagramm nach dem Absatz, der den Mechanismus erklärt, und vor dem Absatz, der die Konsequenz/Kritik formuliert
- Kein Absatz wird durch das Diagramm unterbrochen

---

## Diagramm-Typen (Muster für die 43 Essays)

### Typ A: System-Triade (3 abhängige Substanzen)
Drei Spalten, vertikale Kaskaden, Feedback-Pfeile zwischen den Spalten.
Geeignet für: Vitamin D/K2/Mg, Mitochondrien (CoQ10/PQQ/ALCAR), Omega-3 + B-Vitamine

### Typ B: Gabelung (ein Ausgangspunkt, zwei Wege)
Oberer Startpunkt, Gabelung nach links (schlecht) und rechts (gut).
Geeignet für: Curcumin (PAINS vs. echte Klinik), Liposomal (funktioniert vs. funktioniert nicht), Detox (Marketing vs. Biologie)

### Typ C: Zeitstrahl (historische Entwicklung)
Horizontale Linie mit Markierungen und Jahreszahlen.
Geeignet für: DMSO (1961→1965→1978→heute), Senolytika (Konzept→Maus→Mensch)

### Typ D: Körperkarte (Rezeptor-/Wirkungsstandorte)
Schematische Körpersilhouette mit Beschriftungen an verschiedenen Organen.
Geeignet für: Bitter/TAS2R (Zunge, Darm, Lunge, Immunzellen)

### Typ E: Trichter / Filter (Reduktion)
Breiter Eingang oben, schmaler Ausgang unten.
Geeignet für: Curcumin (10.000 Papers → PAINS-Filter → was bleibt), Bioverfügbarkeit (500mg geschluckt → 5mg absorbiert)

### Typ F: Kreislauf (gegenseitige Verstärkung)
Elemente in einer Schleife verbunden.
Geeignet für: Mitochondriale Dysfunktion (Schaden → Radikale → mehr Schaden), Omega-6/3-Verhältnis

---

## Ausgabe (deploy-ready)

Die Ausgabe muss so aufgebaut sein, dass eine separate Code-Instanz die Diagramme ohne eigene Entscheidungen auf die Website einbauen kann.

### 1. SVG-Dateien
- Ein SVG pro Essay
- Dateiname: `diagramm-[essay-slug].svg`
- Vollständig inline-fähig (kein externes CSS, keine externen Fonts — Fontstack inline deklarieren)
- Scroll-Reveal-Animation und Hover-CSS bereits im SVG enthalten (als `<style>` und `<script>` im SVG)

### 2. Platzierungs-Manifest (eine JSON-Datei)

```json
[
  {
    "essay_slug": "curcumin-pains-bioverfuegbarkeit",
    "essay_url": "/zutaten/bildgebung/curcumin-pains-bioverfuegbarkeit/",
    "svg_file": "diagramm-curcumin-pains-bioverfuegbarkeit.svg",
    "diagram_type": "B (Gabelung)",
    "insert_after_paragraph_starting_with": "Nelson 2017 formuliert die unbequeme",
    "closer_text": "Die teuerste Form von Nichts ist immer noch Nichts.",
    "notes": "Gabelung: PAINS (links) vs. echte Klinik (rechts)"
  }
]
```

Felder:
- `essay_slug`: Identifiziert den Essay eindeutig
- `essay_url`: Direkte URL zum Essay
- `svg_file`: Name der zugehörigen SVG-Datei
- `diagram_type`: Welcher der 6 Typen (A—F)
- `insert_after_paragraph_starting_with`: Die ersten 5—8 Wörter des Absatzes, NACH dem das Diagramm eingefügt wird. Muss eindeutig im Essay sein.
- `closer_text`: Der kursive Satz unter der Trennlinie im Diagramm
- `notes`: Kurze Beschreibung für Reviewzwecke

### 3. Menschenlesbare MD-Zusammenfassung
Zusätzlich eine MD-Datei, die alle 43 Diagramme tabellarisch auflistet mit Typ, Closer und Platzierung — für Review durch Ticro, bevor die Deploy-Instanz loslegt.

---

## Einstiegspunkt

https://hellmuth-soda.de/zutaten/bildgebung/

Von dort jeden Essay einzeln lesen, den Kernmechanismus identifizieren, den passenden Diagramm-Typ wählen, das SVG bauen, die Platzierung festlegen.

## Sub-Agents

Bis zu 20 Sub-Agents. Ca. 2—3 Essays pro Agent. Jeder Agent liest seine Essays, baut die SVGs, dokumentiert die Platzierung im JSON-Format. Am Ende konsolidieren.

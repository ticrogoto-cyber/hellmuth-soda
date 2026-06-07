# Quiz-Briefing: Stilkonstanten und Architektur

Dieses Dokument definiert, wie jedes Quiz auf hellmuth-soda.de gebaut wird. Es ist inhaltsunabhängig und gilt für Quiz 1 (Sucht-Mythen), Quiz 2 und alle weiteren.

## Architektur

Jedes Quiz ist eine eigene Seite unter `/quiz/`, `/quiz-2/` etc. Die Startseite oder eine Quiz-Übersichtsseite verlinkt alle verfügbaren Quizze. Jedes Quiz besteht aus einer HTML-Datei, einer `questions.js`-Datei mit den Inhalten und dem geteilten `quiz.js`-Engine-Code.

### Datenformat (questions.js)

Jedes Quiz liefert ein Array von Frage-Objekten. Jede Frage hat:

- `q` — Der Fragetext. Ein Satz. Kein Fragezeichen nötig, wenn die Frage als Aussage formuliert ist, die der Leser vervollständigen muss.
- `a` — Array mit genau drei Antwort-Objekten, jeweils:
  - `text` — Der Antworttext. Kurz, ein bis zwei Sätze.
  - `score` — Ganzzahl 0, 1 oder 2.
  - `explanation` — Diagnostischer Kommentar, der nach der Antwort angezeigt wird. Aphoristisch, nie tröstend.

Die drei Score-Stufen:

- **0 = Klartext.** Die Antwort, die die Sache benennt, wie sie ist. Ohne Beschönigung, ohne Umweg.
- **1 = Halbwahr.** Enthält einen wahren Kern, aber verpackt ihn in eine Selbsttäuschung, eine Verharmlosung oder eine bequeme Auslassung.
- **2 = Werbe-, Industrie- oder Selbstbetrugsprache.** Die Antwort, die sich gut anfühlt, aber lügt. Die Sprache der Verpackung, nicht des Inhalts.

Die Reihenfolge der drei Antworten wird im Code bei jeder Anzeige zufällig gemischt. Es gibt keine feste Position für die richtige Antwort.

### Fragen pro Quiz

Zwölf. Nicht mehr, nicht weniger. Zwölf ist lang genug, um ein Muster sichtbar zu machen, und kurz genug, dass niemand abbricht.

### Ergebnis

Der Score summiert sich (0-24). Fünf Diagnose-Stufen teilen den Score-Bereich auf. Jede Stufe hat:

- `label` — Ein lakonisches Diagnose-Wort oder eine knappe Phrase. Kein Lob, kein Trost, keine Therapiesprache. Beispiele aus Quiz 1: „KLAR IM KOPF", „LEICHTE TRÜBUNG", „HALBBETÄUBT", „KONZERNKOMPATIBEL", „LOBOTOMIERT".
- `text` — Zwei bis vier Sätze diagnostischer Kommentar. Keine Handlungsempfehlung, kein „Sie sollten...", kein Link zu einer Beratungsstelle. Der Text stellt fest. Wenn der Leser daraus eine Konsequenz zieht, ist das seine Sache.

## Sprache

### Was der Ton ist

Kurze Sätze. Kein Hauptsatzstakkato, aber auch keine Schachtelsätze. Jeder Satz muss stehen können, wenn man den Rest streicht.

Aphoristisch, sachlich, scharf. Verwandt mit den Klarheitskarten-Diagnosen: „Morgen ist der Lieblingsort der Sucht." / „Die Pause war nützlich. Das Gift nicht."

Ironie ohne Witz. Kein Humor, der den Leser entlässt. Ironie, die festnagelt. Oft als Doppelschlag mit Gedankenstrich: „Glückwunsch, du bist die Zielgruppe."

Der Leser wird ernst genommen, aber nicht geschont. Das System, die Industrie, die kulturelle Lüge ist der Gegner. Nicht der Mensch, der darauf reingefallen ist.

Falltürfragen statt rhetorischer Fragen. Die Frage klingt harmlos, aber dreht sich im Lesen auf die Person zurück. Der Moment der Erkenntnis kommt beim Antworten, nicht beim Lesen der Frage.

### Was verboten ist

- Therapeutische oder medizinische Begriffe. Kein „Suchterkrankung", kein „Abhängigkeitssyndrom", kein „Trigger". Die Sprache bleibt alltagsnah und präzise, nicht klinisch.
- Heilversprechen jeder Art.
- Weichgespülte Modalwörter: „vielleicht", „manchmal", „ein bisschen", „ein Stück weit", „irgendwie".
- Wellness- und Coaching-Vokabeln: „Selbstliebe", „heilen", „verdienen", „Achtsamkeit", „Mindset", „toxisch". Diese Wörter sind die Verkleidung, nicht die Diagnose.
- Emojis.
- Ausrufezeichen.
- Komplimente an den Leser.
- Ratschläge, Empfehlungen, Handlungsaufforderungen.

### Was erlaubt, aber sparsam ist

- Gedankenstriche als Stilmittel, wenn sie eine Wendung markieren, nicht zur Auflockerung.
- Doppelpunkte nur bei direkten Gegenüberstellungen oder Definitionen.
- Fremdwörter, wenn sie präziser sind als die deutsche Alternative und der Zielgruppe zuzutrauen sind.

## Visuelles Design

Das Quiz übernimmt das Designsystem der Gesamtseite: Hellmuth-Wortmarke oben, Navigationszeile, gleiche Schriften, gleiche Farbwelt (Schwarz/Weiß, keine Akzentfarben). Keine Fortschrittsbalken, keine Gamification-Elemente, keine Konfetti-Animation am Ende.

Die Frage steht groß und allein. Die drei Antworten darunter, als klickbare Karten mit Rahmen. Nach dem Klick erscheint die Diagnose (explanation) unter der gewählten Antwort. Die nicht gewählten Antworten werden ausgegraut, aber bleiben sichtbar, damit der Leser sieht, was er hätte wählen können.

Am Ende: Score, Diagnose-Label (groß, Versalien), Diagnose-Text, Teilen-Button, Link zurück zur Startseite oder zur News-Seite. Kein „Nochmal spielen"-Button, der das Ergebnis trivialisiert. Wenn jemand nochmal will, lädt er die Seite neu.

## Was zum Bauen eines neuen Quiz geliefert werden muss

1. **Thema** — Der Gegenstand des Quiz. Beispiel: „Sucht-Mythen", „Zucker-Lügen", „Wellness-Industrie", „KI und Denkverlust".
2. **Titel** — Wie Quiz 1 „SUCHT-MYTHEN" heißt, braucht jedes Quiz einen Titel in Versalien plus einen Untertitel. Beispiel: „Zwölf Fragen. Drei Antworten. Eine Diagnose."
3. **Zwölf Fragen** — Jeweils mit drei Antworten (Score 0, 1, 2) und einer diagnostischen Erklärung pro Antwort.
4. **Fünf Diagnose-Stufen** — Label plus Kommentartext, aufsteigend nach Schweregrad.
5. **URL-Pfad** — Unter welchem Pfad das Quiz lebt.

Alles andere (Rendering, Mischlogik, Score-Berechnung, Design, Sharing, Navigation) erbt das neue Quiz vom bestehenden System.

## Prüfkriterien vor Veröffentlichung

- Liest sich jede Frage als eigenständiger Gedanke, ohne Kontext der anderen elf?
- Sind die drei Antworten so formuliert, dass ein uninformierter Leser plausibel jede der drei wählen könnte? (Wenn die Score-2-Antwort offensichtlich falsch klingt, ist sie schlecht geschrieben.)
- Ist die Score-0-Antwort unbequem? Wenn sie sich gut anfühlt, stimmt etwas nicht.
- Enthält keine Erklärung das Wort „richtig" oder „falsch"?
- Würde man jeden Diagnose-Text auch jemandem ins Gesicht sagen? Wenn nicht, ist er zu feige oder zu grausam.

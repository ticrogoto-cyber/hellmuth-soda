// Bildgebung-Artikel: window.BILDGEBUNG_ARTICLES
// Schema pro Eintrag:
//   slug      string   URL-Segment unter /zutaten/bildgebung/<slug>/
//   titel     string   Überschrift
//   lead      string   Subtitle, ein bis zwei Sätze
//   body      string   Markdown-Body: ## Headlines, leere Zeilen trennen Absätze
//   quellen   string[] Studienzitate (am Artikelende gelistet)
//   filter    string[] Themen-Tags: Ruhe | Klarheit | Darm | Zelle | Substanz
//   date      string   ISO-Datum YYYY-MM-DD (Veröffentlichung, sortiert chronologisch)
//
// Quelle der Wahrheit für /zutaten/bildgebung/. Der SSG generiert daraus
// data.js (Listing-Daten) und je Eintrag /zutaten/bildgebung/<slug>/index.html.

window.BILDGEBUNG_ARTICLES = {
  entries: [
    {
      slug: "hopfen-jenseits-vom-bier",
      titel: "Hopfen jenseits vom Bier",
      lead: "Die am besten erforschte Nervenpflanze Europas wird als Schlaftee verkauft. Ihr pharmakologisches Profil reicht von Anxiolyse bis Onkologie.",
      filter: ["Ruhe"],
      date: "2026-06-21",
      body: `Hopfen ist die am schlechtesten verkaufte Apotheke der europäischen Phytomedizin. Über hundert pharmakologisch aktive Verbindungen, fünf randomisierte kontrollierte Studien mit positiven Ergebnissen, anxiolytische Wirkung vergleichbar mit Oxazepam im Tiermodell, Chemoprävention über Xanthohumol in der onkologischen Grundlagenforschung. Und was das Marketing daraus macht: ein Schlaftee.

Die Reduktion beginnt im Regal und endet in der Wahrnehmung. Wer Hopfen sagt, denkt Bier oder Baldrian. Beides ist falsch. Bier enthält Hopfen in homöopathischer Dosis, und Baldrian ist der Partner, nicht die Erklärung.

## Die Bittersäuren

Humulon und Lupulon, die alpha- und beta-Bittersäuren des Hopfens, sind keine Geschmacksstoffe mit Nebenwirkung. Sie hemmen COX-2 selektiv, den Entzündungsmediator, den Celecoxib hemmt. In Tiermodellen zeigen sie antiproliferative Wirkung gegen Dickdarm-, Brust- und Lebertumorlinien. Die Bitter-Rezeptor-Aktivierung über TAS2R läuft parallel und löst gastroprotektive Reflexe aus, Magensäurereduktion und Mukussekretion, die gegenteilige Wirkung dessen, was man von einem Bitterstoff erwartet.

Die Brauer kennen die Bittersäuren als Geschmacksgeber. Die Pharmakologie kennt sie als COX-2-Hemmer. Die zwei Welten berühren sich nicht.

## 2-Methyl-3-buten-2-ol

Wenn Humulon im Hopfenzapfen altert, entsteht als Abbauprodukt 2-Methyl-3-buten-2-ol. Dieser tertiäre Alkohol bindet an GABA-A-Rezeptoren, dort, wo Diazepam bindet, mit schwächerer Affinität, aber ohne Abhängigkeitspotenzial. Im Tiermodell verlängert er die Schlafzeit und reduziert die Lokomotion. Der Befund ist reproduzierbar, das Molekül ist identifiziert, der Rezeptor ist bekannt.

Die EMA-Monographie zu Humulus lupulus kennt den Befund. Sie stuft Hopfen als »traditionell angewendet« ein, eine Kategorie, die den Verkauf erlaubt, ohne Wirksamkeit zu behaupten. Das ist regulatorisch korrekt und pharmakologisch feige. Die Rezeptorbindung existiert. Dass die klinische Forschung sie nie sauber am Menschen isoliert hat, sagt mehr über die Forschungsökonomie als über den Hopfen.

Niemand finanziert eine klinische Studie zu einer Pflanze, die man nicht patentieren kann. Das ist kein Geheimnis, das ist das Geschäftsmodell.

## Xanthohumol

Xanthohumol ist das Prenylflavonoid, das den Hopfen in die Onkologie bringt. In der Zellkultur hemmt es die Angiogenese, induziert Apoptose in Tumorzellen und blockiert den NF-kB-Signalweg, den zentralen Entzündungsschalter, den auch Boswellia und Curcumin adressieren. Die Konzentration in Bier ist pharmakologisch irrelevant, unter einem Milligramm pro Liter. In Hopfenextrakt liegen die Werte hundertfach höher.

8-Prenylnaringenin ist das zweite Prenylflavonoid und das potenteste bekannte Phytoöstrogen. Es bindet an Östrogenrezeptoren mit einer Affinität, die alle anderen pflanzlichen Östrogene übertrifft, Soja eingeschlossen. Bei menopausalen Hitzewallungen zeigt eine Pilotstudie Reduktion der Beschwerden, ein Befund, der in der Frauenheilkunde nie aufgegriffen wurde.

## Anxiolyse

Die Studie, die niemand zitiert, ist die zum Angstlösen. Hopfenextrakt zeigt im Elevated-Plus-Maze-Test anxiolytische Aktivität vergleichbar mit Oxazepam, einem Benzodiazepin. Ohne Sedierung. Ohne motorische Beeinträchtigung. Ohne Abhängigkeitspotenzial. Im selben Tiermodell, das für die Zulassung von Anxiolytika verwendet wird.

Fünf RCTs testen Hopfen als Schlafmittel, meist in Kombination mit Baldrian. Die Ergebnisse sind positiv, die Zuordnung des Effekts unklar. Hopfen als Anxiolytikum ist nie in einer eigenen Humanstudie getestet worden. Die Frage wurde nie gestellt, also gibt es keine Antwort, und die Abwesenheit einer Antwort wird als Abwesenheit einer Wirkung verkauft. Das ist keine Wissenschaft, das ist eine Lücke, die als Ergebnis verkleidet wird.

## Was die Forschung nicht finanziert

Die Geschichte des Hopfens ist die Geschichte einer Pflanze, die zwischen zwei Industrien fällt. Die Brauindustrie braucht keine Pharmaforschung, sie braucht Aroma und Bitterkeit. Die Pharmaindustrie braucht patentierbare Moleküle, keine Pflanzenextrakte. Zwischen den beiden Verwertungslogiken liegt eine Pflanze mit COX-2-Hemmung, GABA-A-Bindung, Östrogenrezeptor-Affinität und NF-kB-Blockade, die von keiner Seite als das behandelt wird, was sie ist.

Die Klöster wussten es. Hopfen wurde im Mittelalter nicht nur als Bierzutat kultiviert, sondern als Nervinum, Verdauungsmittel und Sedativum. Die Äbtissin Hildegard von Bingen notierte die beruhigende Wirkung. Acht Jahrhunderte später steht im Regal ein Schlaftee, und die Forschung hat die Pflanze immer noch nicht in einer sauberen Anxiolyse-Studie am Menschen getestet.

Man hat ein Sedativum gesucht und eine Apotheke übersehen.`,
      quellen: [
        "Abourashed 2004",
        "Aoshima 2006",
        "Schiller 2006",
        "Franco 2012",
        "Salter 2010",
        "Koetter 2007",
        "EMA-Monographie Humulus lupulus 2014",
        "Zanoli 2005",
        "Stevens 2004",
        "Milligan 2002",
      ],
    },
    {
      slug: "igelstachelbart-nerven-wachsen",
      titel: "Der Pilz, der Nerven wachsen lässt",
      lead: "Die einzige bekannte Nahrungsquelle, die Nervenwachstumsfaktor im Gehirn stimuliert, steht im Asia-Markt neben den Shiitake.",
      filter: ["Klarheit"],
      date: "2026-06-21",
      body: `Kein anderer Naturstoff stimuliert die Produktion von Nerve Growth Factor im zentralen Nervensystem so konsistent wie der Igelstachelbart. Das ist keine Behauptung aus einem Supplement-Katalog. Das sind über zwanzig präklinische Studien, die denselben Befund zeigen, seit Kawagishi 1994 die Hericenone im Fruchtkörper identifizierte. Die Zelle produziert NGF, wenn man ihr Hericenone oder Erinacine gibt. Der Befund ist reproduziert, der Mechanismus ist aufgeklärt, die Substanzklassen sind isoliert.

Was danach kommt, ist eine Lücke. Aber die Lücke liegt bei der Forschung, nicht beim Pilz.

## Zwei Substanzklassen, ein Mechanismus

Hericenone sitzen im Fruchtkörper, dem Teil des Pilzes, der im Asia-Markt als Speisepilz verkauft wird. Erinacine sitzen im Mycel, dem unterirdischen Geflecht, das kein Supermarkt führt. Beide Klassen stimulieren NGF, aber auf verschiedenen Wegen und mit verschiedener Bioverfügbarkeit.

Erinacine passieren die Blut-Hirn-Schranke. In Mäusen erhöht Erinacin A die NGF-Konzentration im Hippocampus messbar und verbessert räumliche Lerntests. Im Modell der diabetischen Neuropathie schützt der Extrakt periphere Nervenenden vor Degeneration. Im Modell der Alzheimer-Pathologie reduziert er die Amyloid-Plaque-Last.

Hericenone haben eine schlechtere Passage durch die Blut-Hirn-Schranke. Die meisten kommerziellen Präparate enthalten Fruchtkörper, nicht Mycel. Das bedeutet: das Molekül, dem die stärkste zentralnervöse Wirkung zugeschrieben wird, fehlt in den meisten Produkten, die es versprechen. Das ist kein Problem des Pilzes. Das ist ein Problem des Produktdesigns.

## Die Studie aus Yamagata

Mori et al. 2009 ist die meistzitierte Humanstudie zum Igelstachelbart. Dreißig japanische Erwachsene mit milder kognitiver Beeinträchtigung erhielten über sechzehn Wochen drei Gramm Igelstachelbart-Trockenextrakt täglich oder Placebo. Ab Woche acht stieg die Verum-Gruppe auf der HDS-R-Skala für kognitive Funktion signifikant gegenüber Placebo. Nach Absetzen verschwand der Vorteil innerhalb von vier Wochen.

Dreißig Teilnehmer, ein Land, eine Skala. Das ist dünn. Es ist auch das Einzige, was existiert. Die Frage ist, warum. Nicht warum die Studie klein war, sondern warum dreißig Jahre nach der Entdeckung der Hericenone keine große Studie gefolgt ist. Kein pharmazeutisches Unternehmen finanziert eine Phase-III-Studie zu einem Speisepilz, den man in jedem Asia-Markt für vier Euro pro Packung kaufen kann. Die Ökonomie der klinischen Forschung selektiert nicht nach Wirksamkeit, sondern nach Patentierbarkeit.

Eine malaysische Studie von 2019 zeigt unter Igelstachelbart Verbesserung depressiver Symptome, ohne Placebo-Arm. Eine kanadische Pilotstudie von 2023 findet bei jungen Gesunden einen marginalen Effekt auf Reaktionszeit, aber keine konsistente Kognitionsverbesserung. Das Muster ist immer dasselbe: kleine Kohorten, kurze Laufzeiten, fehlende Replikation. Nicht weil die Substanz versagt, sondern weil niemand die Studie bezahlt, die sie beweisen würde.

## NGF ist kein Lifestyle-Supplement

Nerve Growth Factor ist keine Wellness-Zutat. NGF entscheidet über das Überleben cholinerger Neuronen im basalen Vorderhirn, genau der Population, die bei Alzheimer als erste degeneriert. Die cholinerge Hypothese der Demenz baut auf dieser Beobachtung. Donepezil und Rivastigmin, die zugelassenen Alzheimer-Medikamente, hemmen den Abbau von Acetylcholin, des Neurotransmitters, den diese Neuronen produzieren. Sie verlangsamen den Verlust, sie verhindern ihn nicht.

Ein Ansatz, der die Neuronen selbst am Leben hält statt nur ihren Output zu recyceln, wäre pharmakologisch eine andere Kategorie. Genau das leistet NGF in der Zellkultur und im Tiermodell. Der Igelstachelbart ist die zugänglichste natürliche Quelle einer Substanzklasse, die diesen Ansatz adressiert. Dass die Humanstudien dünn sind, macht die Präklinik nicht falsch. Es macht die Forschungsprioritäten fragwürdig.

## Was im Regal steht

Die Supplement-Industrie hat den Befund vereinfacht: Nervenwachstum, Gedächtnis-Boost, Brain Food. Auf den Etiketten steht Hericium erinaceus 500 mg, ohne Angabe der Hericenone-Konzentration, ohne Unterscheidung zwischen Fruchtkörper und Mycel, ohne Standardisierung auf den Wirkstoff, der den Effekt vermittelt. Der Schwankungsbereich des Hericenone-Gehalts zwischen verschiedenen Produkten liegt bei Faktor fünf. Wer ein Produkt kauft, kauft einen Pilz mit ungewissem Wirkstoffgehalt.

Das ist kein Argument gegen den Igelstachelbart. Das ist ein Argument gegen die Produktgestaltung. Die Weinbranche deklariert Rebsorte, Jahrgang und Anbaugebiet. Die Supplement-Branche deklariert Gewicht. Ein Milligramm Fruchtkörperpulver aus Indoor-Kultur ist pharmakologisch etwas anderes als ein Milligramm Wildsammlungs-Extrakt, aber das Etikett unterscheidet nicht.

## Die japanische Perspektive

In Japan heißt der Pilz Yamabushitake, benannt nach den Yamabushi-Bergmönchen, deren Gewänder den herabhängenden Stacheln ähneln. Er wird seit Jahrhunderten als Speise- und Heilpilz verwendet, bei gastrointestinalen Beschwerden, bei nervöser Erschöpfung, bei kognitiver Einbuße im Alter. Die traditionelle Indikation deckt sich mit dem, was die Präklinik inzwischen mechanistisch untermauert.

In der traditionellen chinesischen Medizin gehört Hericium zu den vier großen Heilpilzen, neben Reishi, Cordyceps und Maitake. Die japanische und chinesische Erfahrungsbasis umfasst Jahrhunderte. Die westliche Evidenzbasis umfasst dreißig Probanden.

## Die Lücke ist die Lücke

Vier Humanstudien aus drei Ländern sind keine Schwäche des Pilzes. Sie sind eine Lücke der Forschung. Die Präklinik zeigt konsistente NGF-Induktion über zwei Substanzklassen, reproduziert in über zwanzig Labors, mechanistisch aufgeklärt bis auf Rezeptorebene. Was fehlt, ist nicht die Plausibilität. Was fehlt, ist das Geld für eine Studie mit dreihundert Teilnehmern über zwölf Monate.

Wer den Igelstachelbart wegen vier kleiner Humanstudien verwirft, muss auch erklären, warum die Zellbiologie seit dreißig Jahren denselben Befund reproduziert. Die Antwort ist nicht, dass der Pilz nicht wirkt. Die Antwort ist, dass die Translation von der Zelle zum Menschen für nicht-patentierbare Naturstoffe ein ökonomisches Problem ist, kein pharmakologisches.

Im Asia-Markt steht er neben den Shiitake, für vier Euro. Die NGF-Stimulation steht auf keiner Packung.`,
      quellen: [
        "Kawagishi 1994",
        "Mori 2008",
        "Wong 2012",
        "Mori 2009",
        "Chong 2019",
        "Lai 2013",
        "Friedman 2015",
        "Li 2018",
        "Tsai-Teng 2016",
        "Nagano 2010",
      ],
    },
  ],
};

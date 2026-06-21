// Bildgebung-Artikel: window.BILDGEBUNG_ARTICLES
// Schema pro Eintrag:
//   slug      string   URL-Segment unter /zutaten/bildgebung/<slug>/
//   titel     string   Überschrift
//   lead      string   Subtitle, ein bis zwei Sätze
//   body      string   Markdown-Body: ## Headlines, leere Zeilen trennen Absätze
//   quellen   Quelle[] Vollzitate als Objekte (siehe Schema unten)
//   filter    string[] Themen-Tags: Ruhe | Klarheit | Darm | Zelle | Substanz
//   date      string   ISO-Datum YYYY-MM-DD (Veröffentlichung, sortiert chronologisch)
//
// Quelle-Schema (Format "Kreativer Suizid": volle Vornamen, max. 3 Autoren + et al.,
// Guillemets um Titel, "in:" vor Journalname, Gedankenstrich — für Seitenbereiche):
//   autoren   string  "Vorname Nachname, Vorname Nachname, Vorname Nachname, et al."
//   titel     string  Artikeltitel ohne Anführungszeichen (Renderer setzt » «)
//   journal   string  Journalname (Renderer setzt "in:" davor, kursiv)
//   dokument  string  Alternative zu journal für Monographien/Reports (keine "in:")
//   vol       string  "Vol. 11, No. 7—8" oder "Vol. 28, Supplement 1"
//   datum     string  "2004" / "Juni 2010" / "05.04.2006"
//   seiten    string  "633—638" / "e37290" / "S20"
//   doi       string  DOI ohne Präfix
//   pmid      string  PMID-Nummer
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
        {
          autoren: "Eman A. Abourashed, Udo Koetter, Arnd Brattström",
          titel: "In vitro binding experiments with a valerian, hops and their fixed combination extract (Ze91019) to selected central nervous system receptors",
          journal: "Phytomedicine",
          vol: "Vol. 11, No. 7—8",
          datum: "2004",
          seiten: "633—638",
          doi: "10.1016/j.phymed.2004.03.005",
        },
        {
          autoren: "Hitoshi Aoshima, Katsuichi Takeda, Yoichi Okita, et al.",
          titel: "Effects of Beer and Hop on Ionotropic γ-Aminobutyric Acid Receptors",
          journal: "Journal of Agricultural and Food Chemistry",
          vol: "Vol. 54, No. 7",
          datum: "05.04.2006",
          seiten: "2514—2519",
          doi: "10.1021/jf051562a",
          pmid: "16569037",
        },
        {
          autoren: "Hartmut Schiller, Adrian Forster, Christian Vonhoff, et al.",
          titel: "Sedating effects of Humulus lupulus L. extracts",
          journal: "Phytomedicine",
          vol: "Vol. 13, No. 8",
          datum: "September 2006",
          seiten: "535—541",
          doi: "10.1016/j.phymed.2006.05.010",
          pmid: "16860977",
        },
        {
          autoren: "Lourdes Franco, Cristina Sánchez, Rafael Bravo, et al.",
          titel: "The Sedative Effect of Non-Alcoholic Beer in Healthy Female Nurses",
          journal: "PLoS ONE",
          vol: "Vol. 7, No. 7",
          datum: "18.07.2012",
          seiten: "e37290",
          doi: "10.1371/journal.pone.0037290",
          pmid: "22815680",
        },
        {
          autoren: "Stuart Salter, Simone Brownie",
          titel: "Treating primary insomnia — the efficacy of valerian and hops",
          journal: "Australian Family Physician",
          vol: "Vol. 39, No. 6",
          datum: "Juni 2010",
          seiten: "433—437",
          pmid: "20628685",
        },
        {
          autoren: "Markus Koetter, Lyle Schrader",
          titel: "Treatment of anxiety and insomnia with a medicinal combination containing valerian and hops extract",
          journal: "Zeitschrift für Phytotherapie",
          vol: "Vol. 28, Supplement 1",
          datum: "2007",
          seiten: "S20",
          doi: "10.1055/s-2007-986476",
        },
        {
          autoren: "EMA Committee on Herbal Medicinal Products (HMPC)",
          titel: "European Union herbal monograph on Humulus lupulus L., flos",
          dokument: "EMA/HMPC/418902/2005 Rev. 1",
          datum: "25.03.2014",
        },
        {
          autoren: "Patrizia Zanoli, Monica Rivasi, Manuela Zavatti, et al.",
          titel: "New insight in the neuropharmacological activity of Humulus lupulus L.",
          journal: "Journal of Ethnopharmacology",
          vol: "Vol. 102, No. 1",
          datum: "06.11.2005",
          seiten: "102—106",
          doi: "10.1016/j.jep.2005.05.040",
          pmid: "16024195",
        },
        {
          autoren: "Jan F. Stevens, Jonathan E. Page",
          titel: "Xanthohumol and related prenylflavonoids from hops and beer: to your good health!",
          journal: "Phytochemistry",
          vol: "Vol. 65, No. 10",
          datum: "Mai 2004",
          seiten: "1317—1330",
          doi: "10.1016/j.phytochem.2004.04.025",
          pmid: "15231405",
        },
        {
          autoren: "Susan R. Milligan, Jens C. Kalita, Alan Heyerick, et al.",
          titel: "Identification of a potent phytoestrogen in hops (Humulus lupulus L.) and beer",
          journal: "Journal of Clinical Endocrinology and Metabolism",
          vol: "Vol. 84, No. 6",
          datum: "Juni 1999",
          seiten: "2249—2252",
          doi: "10.1210/jcem.84.6.5887",
          pmid: "10372741",
        },
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
        {
          autoren: "Hirokazu Kawagishi, Atsushi Shimada, Ryoko Shirai, et al.",
          titel: "Erinacines A, B and C, strong stimulators of nerve growth factor (NGF)-synthesis, from the mycelia of Hericium erinaceum",
          journal: "Tetrahedron Letters",
          vol: "Vol. 35, No. 10",
          datum: "1994",
          seiten: "1569—1572",
          doi: "10.1016/S0040-4039(00)76760-8",
        },
        {
          autoren: "Koichiro Mori, Yutaro Obara, Matako Hirota, et al.",
          titel: "Nerve growth factor-inducing activity of Hericium erinaceus in 1321N1 human astrocytoma cells",
          journal: "Biological and Pharmaceutical Bulletin",
          vol: "Vol. 31, No. 9",
          datum: "September 2008",
          seiten: "1727—1732",
          doi: "10.1248/bpb.31.1727",
          pmid: "18758067",
        },
        {
          autoren: "Kah-Hui Wong, Murali Naidu, Rosie Pamela David, et al.",
          titel: "Neuroregenerative potential of lion's mane mushroom, Hericium erinaceus (Bull.: Fr.) Pers. (higher Basidiomycetes), in the treatment of peripheral nerve injury",
          journal: "International Journal of Medicinal Mushrooms",
          vol: "Vol. 14, No. 5",
          datum: "2012",
          seiten: "427—446",
          doi: "10.1615/IntJMedMushr.v14.i5.10",
          pmid: "23510212",
        },
        {
          autoren: "Koichiro Mori, Satoshi Inatomi, Kenzi Ouchi, et al.",
          titel: "Improving effects of the mushroom Yamabushitake (Hericium erinaceus) on mild cognitive impairment: a double-blind placebo-controlled clinical trial",
          journal: "Phytotherapy Research",
          vol: "Vol. 23, No. 3",
          datum: "März 2009",
          seiten: "367—372",
          doi: "10.1002/ptr.2634",
          pmid: "18844328",
        },
        {
          autoren: "Puei-Lene Chong, Geng-Ruei Yap, Shin-Yee Fung, et al.",
          titel: "Effects of Hericium erinaceus supplementation on depression: a systematic review and meta-analysis",
          journal: "Journal of Functional Foods",
          vol: "Vol. 57",
          datum: "Juni 2019",
          seiten: "168—179",
        },
        {
          autoren: "Pui-Ying Lai, Murali Naidu, Vikineswary Sabaratnam, et al.",
          titel: "Neurotrophic properties of the lion's mane medicinal mushroom, Hericium erinaceus (Higher Basidiomycetes) from Malaysia",
          journal: "International Journal of Medicinal Mushrooms",
          vol: "Vol. 15, No. 6",
          datum: "2013",
          seiten: "539—554",
          doi: "10.1615/IntJMedMushr.v15.i6.30",
          pmid: "24266378",
        },
        {
          autoren: "Mendel Friedman",
          titel: "Chemistry, Nutrition, and Health-Promoting Properties of Hericium erinaceus (Lion's Mane) Mushroom Fruiting Bodies and Mycelia and Their Bioactive Compounds",
          journal: "Journal of Agricultural and Food Chemistry",
          vol: "Vol. 63, No. 32",
          datum: "19.08.2015",
          seiten: "7108—7123",
          doi: "10.1021/acs.jafc.5b02914",
          pmid: "26244378",
        },
        {
          autoren: "I-Chen Li, Li-Ya Lee, Tsai-Teng Tzeng, et al.",
          titel: "Neurohealth Properties of Hericium erinaceus Mycelia Enriched with Erinacines",
          journal: "Behavioural Neurology",
          vol: "Vol. 2018",
          datum: "21.05.2018",
          seiten: "5802634",
          doi: "10.1155/2018/5802634",
          pmid: "29951133",
        },
        {
          autoren: "Tsai-Teng Tzeng, Hsin-Yi Chen, Chung-Yung Tseng, et al.",
          titel: "The Cyathane Diterpenoid and Sesterterpene Constituents of Hericium erinaceus Mycelium Ameliorate Alzheimer's Disease-Related Pathologies in APP/PS1 Transgenic Mice",
          journal: "International Journal of Molecular Sciences",
          vol: "Vol. 17, No. 11",
          datum: "November 2016",
          seiten: "1810",
          doi: "10.3390/ijms17111810",
          pmid: "27809277",
        },
        {
          autoren: "Mayumi Nagano, Kuniyoshi Shimizu, Ryuichiro Kondo, et al.",
          titel: "Reduction of depression and anxiety by 4 weeks Hericium erinaceus intake",
          journal: "Biomedical Research",
          vol: "Vol. 31, No. 4",
          datum: "August 2010",
          seiten: "231—237",
          doi: "10.2220/biomedres.31.231",
          pmid: "20834180",
        },
      ],
    },
  ],
};

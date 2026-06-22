// Bildgebung-Artikel: window.BILDGEBUNG_ARTICLES
// Schema pro Eintrag:
//   slug      string   URL-Segment unter /zutaten/bildgebung/<slug>/
//   titel     string   Überschrift
//   lead      string   Subtitle, ein bis zwei Sätze
//   body      string   Markdown-Body: ## Headlines, leere Zeilen trennen Absätze
//   quellen   Quelle[] Vollzitate als Objekte (siehe Schema unten)
//   filter    string[] Themen-Tags: Unterschätzt | Unklar | Überschätzt
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
      lead: "Die am besten erforschte Nervenpflanze Europas wird als Schlaftee verkauft. Was die Forschung weiß und das Regal verschweigt.",
      filter: ["Unterschätzt"],
      date: "2026-06-21",
      body: `Hopfen ist die am schlechtesten verkaufte Apotheke der europäischen Phytomedizin. Über hundert pharmakologisch aktive Verbindungen, fünf randomisierte kontrollierte Studien mit positiven Ergebnissen, anxiolytische Wirkung vergleichbar mit Oxazepam im Tiermodell, Chemoprävention über Xanthohumol in der onkologischen Grundlagenforschung. Und was das Marketing daraus macht: ein Schlaftee.

Die Reduktion beginnt im Regal und endet in der Wahrnehmung. Wer Hopfen sagt, denkt Bier oder Baldrian. Beides ist falsch. Bier enthält Hopfen in homöopathischer Dosis, und Baldrian ist der Partner, nicht die Erklärung.

## Die Bittersäuren

Humulon und Lupulon, die alpha- und beta-Bittersäuren des Hopfens, hemmen COX-2 selektiv, den Entzündungsmediator, den Celecoxib hemmt. In Tiermodellen zeigen sie antiproliferative Wirkung gegen Dickdarm-, Brust- und Lebertumorlinien. Die Bitter-Rezeptor-Aktivierung über TAS2R läuft parallel und löst gastroprotektive Reflexe aus, Magensäurereduktion und Mukussekretion, die gegenteilige Wirkung dessen, was man von einem Bitterstoff erwartet.

Die Brauer kennen die Bittersäuren als Geschmacksgeber. Die Pharmakologie kennt sie als COX-2-Hemmer. Die zwei Welten berühren sich nicht.

## 2-Methyl-3-buten-2-ol

Wenn Humulon im Hopfenzapfen altert, entsteht als Abbauprodukt 2-Methyl-3-buten-2-ol. Dieser tertiäre Alkohol bindet an GABA-A-Rezeptoren, dort, wo Diazepam bindet, mit schwächerer Affinität, aber ohne Abhängigkeitspotenzial. Im Tiermodell verlängert er die Schlafzeit und reduziert die Lokomotion. Der Befund ist reproduzierbar, das Molekül ist identifiziert, der Rezeptor ist bekannt.

Die EMA-Monographie zu Humulus lupulus kennt den Befund. Sie stuft Hopfen als »traditionell angewendet« ein, eine Kategorie, die den Verkauf erlaubt, ohne Wirksamkeit zu behaupten. Das ist regulatorisch korrekt und pharmakologisch feige. Die Rezeptorbindung existiert. Dass die klinische Forschung sie nie sauber am Menschen isoliert hat, sagt mehr über die Forschungsökonomie als über den Hopfen.

Niemand finanziert eine klinische Studie zu einer Pflanze, die man nicht patentieren kann. So funktioniert das Geschäftsmodell.

## Xanthohumol

Xanthohumol ist das Prenylflavonoid, das den Hopfen in die Onkologie bringt. In der Zellkultur hemmt es die Angiogenese, induziert Apoptose in Tumorzellen und blockiert den NF-kB-Signalweg, den zentralen Entzündungsschalter, den auch Boswellia und Curcumin adressieren. Die Konzentration in Bier ist pharmakologisch irrelevant, unter einem Milligramm pro Liter. In Hopfenextrakt liegen die Werte hundertfach höher. Ein Krebsforschungsprofil, vergraben in einer Brauereikultur.

8-Prenylnaringenin ist das zweite Prenylflavonoid und das potenteste bekannte Phytoöstrogen. Es bindet an Östrogenrezeptoren mit einer Affinität, die alle anderen pflanzlichen Östrogene übertrifft, Soja eingeschlossen. Bei menopausalen Hitzewallungen zeigt eine Pilotstudie Reduktion der Beschwerden, ein Befund, der in der Frauenheilkunde nie aufgegriffen wurde.

## Anxiolyse

Die Studie, die niemand zitiert, ist die zum Angstlösen. Hopfenextrakt zeigt im Elevated-Plus-Maze-Test anxiolytische Aktivität vergleichbar mit Oxazepam, einem Benzodiazepin. Ohne Sedierung. Ohne motorische Beeinträchtigung. Ohne Abhängigkeitspotenzial. Im selben Tiermodell, das für die Zulassung von Anxiolytika verwendet wird.

Fünf RCTs testen Hopfen als Schlafmittel, meist in Kombination mit Baldrian. Die Ergebnisse sind positiv, die Zuordnung des Effekts unklar. Hopfen als Anxiolytikum ist nie in einer eigenen Humanstudie getestet worden. Die Frage wurde nie gestellt, also gibt es keine Antwort, und die Abwesenheit einer Antwort wird als Abwesenheit einer Wirkung verkauft. Eine Lücke, die als Ergebnis verkleidet wird.

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
      filter: ["Unterschätzt"],
      date: "2026-06-21",
      body: `Kein anderer Naturstoff stimuliert die Produktion von Nerve Growth Factor im zentralen Nervensystem so konsistent wie der Igelstachelbart. Über zwanzig präklinische Studien zeigen denselben Befund, seit Kawagishi 1994 die Hericenone im Fruchtkörper identifizierte. Die Zelle produziert NGF, wenn man ihr Hericenone oder Erinacine gibt. Der Befund ist reproduziert, der Wirkweg ist aufgeklärt, die Substanzklassen sind isoliert.

Danach kommt nichts. Die Lücke liegt bei der Forschung.

## Zwei Substanzklassen, ein Wirkweg

Hericenone sitzen im Fruchtkörper, dem Teil des Pilzes, der im Asia-Markt als Speisepilz verkauft wird. Erinacine sitzen im Mycel, dem unterirdischen Geflecht, das kein Supermarkt führt. Beide Klassen stimulieren NGF, aber auf verschiedenen Wegen und mit verschiedener Bioverfügbarkeit.

Erinacine passieren die Blut-Hirn-Schranke. In Mäusen erhöht Erinacin A die NGF-Konzentration im Hippocampus messbar und verbessert räumliche Lerntests. Im Modell der diabetischen Neuropathie schützt der Extrakt periphere Nervenenden vor Degeneration. Im Modell der Alzheimer-Pathologie reduziert er die Amyloid-Plaque-Last.

Hericenone haben eine schlechtere Passage durch die Blut-Hirn-Schranke. Die meisten kommerziellen Präparate enthalten Fruchtkörper, nicht Mycel. Das Molekül mit der stärksten zentralnervösen Wirkung fehlt in den meisten Produkten, die es versprechen. Der Pilz liefert. Das Produktdesign versagt.

## Die Studie aus Yamagata

Mori et al. 2009 ist die meistzitierte Humanstudie zum Igelstachelbart. Dreißig japanische Erwachsene mit milder kognitiver Beeinträchtigung erhielten über sechzehn Wochen drei Gramm Igelstachelbart-Trockenextrakt täglich oder Placebo. Ab Woche acht stieg die Verum-Gruppe auf der HDS-R-Skala für kognitive Funktion gegenüber Placebo. Nach Absetzen verschwand der Vorteil innerhalb von vier Wochen.

Dreißig Teilnehmer, ein Land, eine Skala. Dünn. Warum dreißig Jahre nach der Entdeckung der Hericenone keine große Studie gefolgt ist, hat mit dem Pilz nichts zu tun. Kein pharmazeutisches Unternehmen finanziert eine Phase-III-Studie zu einem Speisepilz, den man in jedem Asia-Markt für vier Euro pro Packung kaufen kann. Die klinische Forschung selektiert nach Patentierbarkeit.

Eine malaysische Studie von 2019 zeigt unter Igelstachelbart Verbesserung depressiver Symptome, ohne Placebo-Arm. Eine kanadische Pilotstudie von 2023 findet bei jungen Gesunden einen marginalen Effekt auf Reaktionszeit. Das Muster bleibt: kleine Kohorten, kurze Laufzeiten, fehlende Replikation. Die Substanz wartet. Niemand bezahlt die Studie, die sie beweisen würde.

## NGF jenseits von Lifestyle

NGF entscheidet über das Überleben cholinerger Neuronen im basalen Vorderhirn, der Population, die bei Alzheimer als erste degeneriert. Die cholinerge Hypothese der Demenz baut auf dieser Beobachtung. Donepezil und Rivastigmin, die zugelassenen Alzheimer-Medikamente, hemmen den Abbau von Acetylcholin, des Neurotransmitters, den diese Neuronen produzieren. Sie verlangsamen den Verlust. Sie verhindern ihn nicht.

Ein Ansatz, der die Neuronen selbst am Leben hält statt ihren Output zu recyceln, wäre pharmakologisch eine andere Kategorie. In der Zellkultur und im Tiermodell leistet NGF genau das. Der Igelstachelbart ist die zugänglichste natürliche Quelle einer Substanzklasse, die diesen Ansatz adressiert. Dass die Humanstudien dünn sind, macht die Präklinik nicht falsch. Es macht die Forschungsprioritäten fragwürdig.

## Pilz ohne Beipackzettel

Die Supplement-Industrie hat den Befund vereinfacht. Nervenwachstum, Gedächtnis-Boost, Brain Food. Auf den Etiketten steht Hericium erinaceus 500 mg, ohne Angabe der Hericenone-Konzentration, ohne Unterscheidung zwischen Fruchtkörper und Mycel, ohne Standardisierung auf den Wirkstoff, der den Effekt vermittelt. Der Schwankungsbereich des Hericenone-Gehalts zwischen verschiedenen Produkten liegt bei Faktor fünf.

Wer das dem Pilz anlastet, verwechselt Rohstoff mit Verpackung. Die Weinbranche deklariert Rebsorte, Jahrgang und Anbaugebiet. Die Supplement-Branche deklariert Gewicht.

## Die japanische Perspektive

In Japan heißt der Pilz Yamabushitake, benannt nach den Yamabushi-Bergmönchen, deren Gewänder den herabhängenden Stacheln ähneln. Er wird seit Jahrhunderten als Speise- und Heilpilz verwendet, bei gastrointestinalen Beschwerden, bei nervöser Erschöpfung, bei kognitiver Einbuße im Alter. Die traditionelle Indikation deckt sich mit dem, was die Präklinik inzwischen mechanistisch untermauert.

In der traditionellen chinesischen Medizin gehört Hericium zu den vier großen Heilpilzen, neben Reishi, Cordyceps und Maitake. Die japanische und chinesische Erfahrungsbasis umfasst Jahrhunderte. Die westliche Evidenzbasis umfasst dreißig Probanden.

## Die Lücke beschreibt die Forschung

Vier Humanstudien aus drei Ländern beschreiben die Forschung, nicht den Pilz. Die Präklinik zeigt konsistente NGF-Induktion über zwei Substanzklassen, reproduziert in über zwanzig Labors, mechanistisch aufgeklärt bis auf Rezeptorebene. Die Plausibilität steht. Das Geld nicht.

Der Pilz wirkt in der Zelle. Dass die Translation zum Menschen ausbleibt, ist ein ökonomisches Problem, kein pharmakologisches.

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
    },    {
      slug: "spilanthol-trigeminale-aktivierung",
      titel: "Das Molekül, das die Zunge vibrieren lässt",
      lead: "Spilanthol aktiviert Berührungsfasern im Gesicht mit einer messbaren Frequenz von fünfzig Hertz. Die Empfindung gehört weder zum Geschmack noch zum Schmerz. Sie gehört zum Tastsinn.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `Wenn Spilanthol auf die Lippe trifft, passiert etwas, das in keiner Geschmackskategorie vorkommt. Die Zunge kribbelt, die Lippen summen, der Speichelfluss setzt ein. Die Empfindung fühlt sich an wie leichter Strom. Sie fühlt sich so an, weil sie im neurologischen Sinn genau das ist.

2013 legten Nobuhiro Hagura und Patrick Haggard am University College London das Wirkprinzip offen. Sie applizierten Szechuanpfeffer auf die Unterlippe von Probanden und ließen diese die Frequenz des Kribbelns mit mechanischen Vibrationen am Zeigefinger vergleichen. Die wahrgenommene Frequenz lag bei fünfzig Hertz, plus minus 2,4. Dann legten sie den Vibrator auf die Lippe, stellten ihn auf fünfzig Hertz und fragten, wie sich das anfühle. Die Probanden sagten: wie Szechuanpfeffer.

Der Wirkstoff im Szechuanpfeffer heißt Sanshool. Spilanthol aus der Parakresse (Acmella oleracea) ist sein chemischer Verwandter, ein N-Alkylamid mit derselben Rezeptoraffinität und einer stärkeren lokalen Wirkung.

## Berührung ohne Berührung

Spilanthol aktiviert RA1-Fasern, schnell adaptierende Mechanorezeptoren vom Typ Meissner-Körperchen. Diese Fasern registrieren normalerweise leichte Berührung und Vibration im Frequenzbereich von zehn bis fünfzig Hertz. Spilanthol erzeugt auf chemischem Weg das Signal, das physische Berührung auf neuronalem Weg erzeugt. Ein Molekül, das den Tastsinn aktiviert, ohne dass jemand die Haut berührt. Die Pharmakologie hat dafür keinen Begriff, weil es diesen Wirktyp bei keiner anderen zugelassenen Substanz gibt.

Parallel dazu bindet Spilanthol als partieller Agonist an TRPV1-Rezeptoren. Das sind die Rezeptoren, die Capsaicin als Schmerzsignal interpretieren lässt. Der Unterschied liegt im Wort »partiell«. Capsaicin ist ein voller Agonist, maximale Aktivierung, Brennen, Schmerz. Spilanthol aktiviert gerade genug, um eine Desensibilisierung auszulösen, die anschließend als Taubheit wahrgenommen wird. Erst kribbeln, dann betäuben. Genau das beschreiben die traditionellen Anwendungen seit Jahrhunderten.

## Lidocain aus dem Regenwald

Acmella oleracea heißt im Englischen »toothache plant«. In der brasilianischen Amazonasregion heißt sie Jambu und wird als Gemüse, Gewürz und Zahnschmerzmittel verwendet. Die lokale Anwendung lässt sich pharmakologisch rekonstruieren. Spilanthol blockiert spannungsgesteuerte Natriumkanäle nach demselben Prinzip wie Lidocain. Zusätzlich erhöht es die GABA-Freisetzung im umliegenden Gewebe und aktiviert opioidergene Schmerzpfade.

Drei Wirkwege, die zusammen eine Lokalanästhesie erklären, die empirisch seit Generationen funktioniert. Die Zahnmedizin hat davon keine Notiz genommen. Ein Pflanzenmolekül, das dieselben Natriumkanäle blockiert wie ihr Standardanästhetikum, existiert in keiner zahnmedizinischen Leitlinie.

## Faltencreme statt Pharmakologie

Die Kosmetikindustrie hat Spilanthol entdeckt und in »natürliches Botox« umbenannt. Spilanthol soll die mimische Muskulatur entspannen und Falten reduzieren. Eine Pilotstudie zeigt nach zwei Wochen topischer Anwendung messbare Verbesserung von Hautfaltenparametern. Das Ergebnis ist real. Die Ableitung ist absurd.

Ein Molekül, das Meissner-Körperchen bei fünfzig Hertz feuern lässt, das Natriumkanäle blockiert, das GABA freisetzt, das den Trigeminus-Nerv anspricht wie eine elektrische Zahnbürste den Zahnfleischrand, wird auf Faltencreme reduziert. Die gesamte trigeminale Pharmakologie, die Hagura 2013 aufgedeckt hat, spielt in der Kosmetikwerbung keine Rolle. Wer die Verpackung liest, erfährt von »strafferer Haut«. Wer die Studien liest, findet einen Anästhesiekandidaten.

## Drei Organsysteme, null Humanstudien

Spilanthol hemmt NF-kB, unterdrückt COX-2 und iNOS-Expression. In Mausmodellen reduziert es Entzündungsmarker bei Dermatitis, Pankreatitis und intestinaler Mukositis. An der Niere senkt es den intrazellulären cAMP-Spiegel und stört die Phosphorylierung des NKCC2-Transporters, ein diuretischer Wirkweg, den die traditionelle Medizin Brasiliens empirisch kennt und den die westliche Nephrologie ignoriert.

In Zelllinien zeigt der Extrakt moderate Zytotoxizität gegenüber Tumorzellen bei geringer Wirkung auf gesunde Fibroblasten. Drei Organsysteme, drei präklinische Befunde, drei leere Stühle in der klinischen Forschung.

## Zwanzig Jahre Stille

Jede dieser Wirkungen stammt aus Tiermodellen oder Zellkultur. Die einzige Humanstudie, die das Wirkprinzip sauber am Menschen isoliert hat, ist Hagura 2013, und die untersuchte die Wahrnehmung, nicht die Therapie. Klinische Studien zu Spilanthol als Analgetikum, Antiphlogistikum oder Diuretikum am Menschen existieren nicht. Seit zwanzig Jahren liegt das Molekül auf der präklinischen Werkbank und wartet auf eine Übersetzung, die niemand finanziert.

Im Reformhaus steht die Faltencreme. Im Labor liegt ein Anästhesiekandidat. Dazwischen liegen zwanzig Jahre fehlende Translation.`,
      quellen: [
        {
          autoren: "Nobuhiro Hagura, Harry Barber, Patrick Haggard",
          titel: "Food vibrations: Asian spice sets lips trembling",
          journal: "Proceedings of the Royal Society B",
          vol: "Vol. 280, No. 1770",
          datum: "11.09.2013",
          seiten: "20131680",
          doi: "10.1098/rspb.2013.1680",
          pmid: "24026819",
        },
        {
          autoren: "Jayaraj Paulraj, Raghavan Govindarajan, Pushpangadan Palpu",
          titel: "The Genus Spilanthes Ethnopharmacology, Phytochemistry, and Pharmacological Properties: A Review",
          journal: "Advances in Pharmacological Sciences",
          vol: "Vol. 2013",
          datum: "2013",
          seiten: "510298",
          doi: "10.1155/2013/510298",
        },
        {
          autoren: "Andrea Gerbino, Giorgia Schena, Serena Milano, et al.",
          titel: "Spilanthol from Acmella oleracea Lowers the Intracellular Levels of cAMP Impairing NKCC2 Phosphorylation and Water Channel AQP2 Membrane Expression in Mouse Kidney",
          journal: "PLoS ONE",
          vol: "Vol. 11, No. 5",
          datum: "23.05.2016",
          seiten: "e0156021",
          doi: "10.1371/journal.pone.0156021",
          pmid: "27213818",
        },
        {
          autoren: "Mariangela Rondanelli, Milena Anna Faliva, Gabriella Peroni, et al.",
          titel: "Acmella oleracea for pain management",
          journal: "Fitoterapia",
          vol: "Vol. 140",
          datum: "Januar 2020",
          seiten: "104419",
          doi: "10.1016/j.fitote.2019.104419",
        },
        {
          autoren: "Jakob Ley, Gerhard Krammer, Günter Reinders, et al.",
          titel: "Evaluation of a GM-CSF knock-out mouse model for studying spilanthol bioactivity",
          journal: "European Journal of Pharmacology",
          vol: "Vol. 553, No. 1—3",
          datum: "15.01.2006",
          seiten: "101—110",
        },
        {
          autoren: "Veda Prachayasittikul, Supaluk Prachayasittikul, Somsak Ruchirawat, et al.",
          titel: "High therapeutic potential of Spilanthes acmella: A review",
          journal: "EXCLI Journal",
          vol: "Vol. 12",
          datum: "2013",
          seiten: "291—312",
        },
        {
          autoren: "Alan Franco Barbosa, Mário Geraldo de Carvalho, Robert Edward Smith, et al.",
          titel: "Spilanthol: occurrence, extraction, chemistry and biological activities",
          journal: "Revista Brasileira de Farmacognosia",
          vol: "Vol. 26, No. 1",
          datum: "Januar—Februar 2016",
          seiten: "128—133",
          doi: "10.1016/j.bjp.2015.07.024",
        },
        {
          autoren: "Shinobu Kuroki, Nobuhiro Hagura, Shinichi Nishida, et al.",
          titel: "Sanshool on the Fingertip Interferes with Vibration Detection in a Rapidly-Adapting (RA) Tactile Channel",
          journal: "PLoS ONE",
          vol: "Vol. 11, No. 12",
          datum: "01.12.2016",
          seiten: "e0165842",
          doi: "10.1371/journal.pone.0165842",
        },
        {
          autoren: "Myrna Déciga-Campos, Jesús Arriaga-Alba, María del Carmen Ventura-Martínez, et al.",
          titel: "Pharmacological profile of (2E)-N-isobutyl-dodeca-2-en-6,8,10-triynamide, a spilanthol analogue",
          journal: "Drug Development Research",
          vol: "Vol. 71, No. 4",
          datum: "Juni 2010",
          seiten: "228—236",
          doi: "10.1002/ddr.20364",
        },
        {
          autoren: "Tze Chien Lim",
          titel: "Spilanthes acmella as a natural insecticide and analgesic: a pharmacological review",
          journal: "Asian Journal of Pharmaceutical and Clinical Research",
          vol: "Vol. 7, Supplement 1",
          datum: "2014",
          seiten: "64—68",
        },
      ],
    },
    {
      slug: "adaptogene-ueberblick",
      titel: "Der nützlichste Begriff, der nichts bedeutet",
      lead: "Ein sowjetischer Toxikologe hat 1947 ein Wort erfunden, das heute auf jeder zweiten Supplement-Packung steht. Die Pflanzen dahinter sind interessant. Das Wort ist das Problem.",
      filter: ["Überschätzt"],
      date: "2026-06-22",
      body: `Nikolai Lazarev prägte den Begriff 1947 in Leningrad. Er suchte nach Substanzen, die den Organismus gegen unspezifischen Stress widerstandsfähiger machen, ohne ihn zu stimulieren oder zu sedieren. Sein Schüler Israel Brekhman formulierte 1969 drei Kriterien. Die Substanz muss ungiftig sein. Sie muss die Resistenz gegen verschiedene Stressoren unspezifisch erhöhen. Und sie muss normalisierend wirken, unabhängig von der Richtung der Störung. Wer zu hoch ist, soll runterkommen. Wer zu tief ist, soll hochkommen. Dieselbe Substanz.

Dieses Versprechen ist pharmakologisch bemerkenswert, weil es in keinem Studiendesign versagen kann. Eine Substanz, die in beide Richtungen wirkt, ist nicht falsifizierbar. Das macht die Kategorie wissenschaftlich wertlos. Was es als Kategorie wertlos macht, entwertet die einzelnen Pflanzen allerdings nicht.

Ashwagandha senkt Cortisol. Chandrasekhar 2012 misst nach sechzig Tagen KSM-66-Extrakt eine Reduktion um 27,9 Prozent gegenüber Placebo. Das ist ein harter Befund mit Effektgröße, Dosis und Rezeptorprofil. Es wäre sauberer, ihn als Cortisol-Modulator zu beschreiben, aber »Cortisol-Modulator« klingt nicht mystisch genug für die Packung. Also steht dort »Adaptogen«, und der Befund verschwindet hinter dem Etikett.

Rhodiola rosea reduziert Fatigue. Darbinyan 2000 zeigt unter SHR-5-Extrakt bei jungen Ärzten im Nachtdienst verbesserte kognitive Leistung. Panossian 2010 beschreibt den molekularen Pfad über HSP70 und JNK-Signalwege, eine Stressantwort auf Proteinebene. Anti-Fatigue-Wirkstoff mit HSP70-Induktion wäre die richtige Beschreibung. Präzision verkauft sich schlecht.

Eleutherococcus senticosus, Brekhmans Lieblingsgewächs, enthält Eleuteroside statt Ginsenoside und wirkt auf andere Rezeptoren als Panax Ginseng. Im Regal stehen beide unter »Adaptogen«, als wären sie austauschbar. In der Pharmakologie trennt sie alles außer dem Etikett. Wer Ashwagandha und Reishi in denselben Satz packt, weil beide »adaptogen« sind, versteht weder Withanolide noch Triterpene.

Die sowjetische Forschung der fünfziger und sechziger Jahre produzierte über tausend Studien zu Eleutherococcus allein. Die meisten erschienen in russischsprachigen Journals, die westliche Datenbanken nicht indexieren. Die Replizierbarkeit ist offen, die Originale sind nicht lesbar. Wer die Adaptogen-Forschung unkritisch zitiert, zitiert ein Korpus, das er nicht gelesen hat und nicht lesen kann.

Die EMA erkennt die Kategorie nicht an. Die FDA auch nicht. Beide bewerten Pflanzen einzeln nach Wirkstoff und Indikation. Das ist methodisch sauberer, aber weniger verkaufsfördernd. Der Supplement-Markt hat sich für Verkaufsförderung entschieden.

Was bleibt, wenn man das Wort streicht und die Pflanzen einzeln betrachtet, sind sechs Gewächse mit messbarer Wirkung auf die Stressachse, auf Cortisol, auf Entzündungsmarker, auf kognitive Erschöpfung. Die Befunde tragen. Das Wort, das sie zusammenfasst, vernebelt sie. Es reduziert Pharmakologie auf eine Haltung. Haltungen kann man an jede Tinktur kleben.

Auf Amazon heißen inzwischen auch Kurkuma, Ingwer und Spirulina »adaptogen«. Was Lazarev 1947 meinte und was 2026 auf dem Etikett steht, verbindet nur noch die Silbenfolge.`,
      quellen: [
        {
          autoren: "Israel I. Brekhman, Igor V. Dardymov",
          titel: "New Substances of Plant Origin which Increase Nonspecific Resistance",
          journal: "Annual Review of Pharmacology",
          vol: "Vol. 9",
          datum: "1969",
          seiten: "419—430",
          doi: "10.1146/annurev.pa.09.040169.002223",
        },
        {
          autoren: "Alexander Panossian, Georg Wikman",
          titel: "Effects of Adaptogens on the Central Nervous System and the Molecular Mechanisms Associated with Their Stress-Protective Activity",
          journal: "Pharmaceuticals",
          vol: "Vol. 3, No. 1",
          datum: "19.01.2010",
          seiten: "188—224",
          doi: "10.3390/ph3010188",
        },
        {
          autoren: "Karuppiah Chandrasekhar, Jyoti Kapoor, Sridhar Anishetty",
          titel: "A Prospective, Randomized Double-Blind, Placebo-Controlled Study of Safety and Efficacy of a High-Concentration Full-Spectrum Extract of Ashwagandha Root in Reducing Stress and Anxiety in Adults",
          journal: "Indian Journal of Psychological Medicine",
          vol: "Vol. 34, No. 3",
          datum: "Juli—September 2012",
          seiten: "255—262",
          doi: "10.4103/0253-7176.106022",
          pmid: "23439798",
        },
        {
          autoren: "Vigen Darbinyan, Armen Kteyan, Alexander Panossian, et al.",
          titel: "Rhodiola rosea in stress induced fatigue — a double blind cross-over study of a standardized extract SHR-5 with a repeated low-dose regimen on the mental performance of healthy physicians during night duty",
          journal: "Phytomedicine",
          vol: "Vol. 7, No. 5",
          datum: "Oktober 2000",
          seiten: "365—371",
          doi: "10.1016/S0944-7113(00)80055-0",
          pmid: "11081987",
        },
        {
          autoren: "Alexander Panossian, Georg Wikman, Punit Kaur, et al.",
          titel: "Adaptogens Stimulate Neuropeptide Y and Hsp72 Expression and Release in Neuroglia Cells",
          journal: "Frontiers in Neuroscience",
          vol: "Vol. 6",
          datum: "01.02.2012",
          seiten: "6",
          doi: "10.3389/fnins.2012.00006",
          pmid: "22347152",
        },
        {
          autoren: "Velislava Todorova, Milena Ivanova",
          titel: "Bibliometric Study of Adaptogens in Dermatology: Pharmacophylogeny, Phytochemistry, and Pharmacological Mechanisms",
          journal: "Clinical, Cosmetic and Investigational Dermatology",
          vol: "Vol. 14",
          datum: "2021",
          seiten: "1839—1862",
          doi: "10.2147/CCID.S344533",
        },
        {
          autoren: "Adrian Lopresti, Stephen Smith, Heather Malvi, et al.",
          titel: "An investigation into the stress-relieving and pharmacological actions of an ashwagandha (Withania somnifera) extract",
          journal: "Medicine",
          vol: "Vol. 98, No. 37",
          datum: "September 2019",
          seiten: "e17186",
          doi: "10.1097/MD.0000000000017186",
          pmid: "31517876",
        },
        {
          autoren: "Nikolai V. Lazarev",
          titel: "General and Specific in the Action of Pharmacological Agents",
          journal: "Farmakologiya i Toksikologiya",
          vol: "Vol. 10",
          datum: "1947",
          seiten: "17—20",
        },
      ],
    },
    {
      slug: "ashwagandha-ksm66-schilddruese",
      titel: "Die bestuntersuchte Pflanze, vor der niemand warnt",
      lead: "Ashwagandha senkt Cortisol, verbessert Schlaf und stimuliert die Schilddrüse. Für die ersten beiden Wirkungen gibt es Etiketten. Für die dritte gibt es Fallberichte in der Notaufnahme.",
      filter: ["Unklar"],
      date: "2026-06-22",
      body: `Ashwagandha ist die Pflanze, bei der die Datenlage tatsächlich hält. Chandrasekhar 2012 misst nach sechzig Tagen KSM-66-Extrakt eine Cortisolreduktion um 27,9 Prozent gegenüber Placebo. Lopresti 2019 bestätigt den Befund mit einer größeren Kohorte und ergänzt Verbesserungen bei Schlafqualität, Stressresistenz und morgendlichem Cortisol. Langade 2019 zeigt in einer Aktigraphie-kontrollierten Studie signifikant verkürzte Einschlaflatenz und erhöhte Schlafeffizienz nach zehn Wochen. Das sind drei randomisierte Studien mit harten Endpunkten aus drei unabhängigen Gruppen. Für eine Pflanze, die man im Internet für zwölf Euro bestellen kann, ist das eine ungewöhnlich dichte Beweislage.

KSM-66 ist der Extrakt, auf den sich die meiste Evidenz stützt. Vollspektrum-Wurzelextrakt, standardisiert auf mindestens fünf Prozent Withanolide. Withanolide sind Steroidlactone, die an GABA-A-Rezeptoren binden, die HPA-Achse modulieren und Hitzeschockproteine hochregulieren. Wer auf dem Etikett »Ashwagandha 500 mg« liest, ohne Angabe des Extrakts und des Withanolid-Gehalts, kauft ein Versprechen ohne Spezifikation. Ob Wurzelpulver, Blattextrakt oder Vollspektrum drin ist, entscheidet über die Pharmakologie. Das Etikett schweigt.

Jetzt die Schilddrüse. Sharma 2018 zeigt in einer randomisierten Studie an Patienten mit subklinischer Hypothyreose, dass 600 mg Ashwagandha-Wurzelextrakt über acht Wochen TSH normalisiert und T3 sowie T4 anhebt. Die Studie war als Wirksamkeitsnachweis angelegt. Das war sie auch. Sie bewies nebenbei, dass Ashwagandha Schilddrüsenhormone hochtreibt. Bei Unterfunktion ist das erwünscht. Bei Überfunktion ist das die Notaufnahme.

Wie gefährlich, beschreiben die Fallberichte. Van der Hooft 2005 dokumentiert eine 32-jährige gesunde Frau, die unter Ashwagandha-Kapseln eine Thyreotoxikose entwickelte. Jaiswal 2023 berichtet im BMJ Case Reports einen vergleichbaren Fall. Eine 73-jährige Frau mit supraventrikulärer Tachykardie nach zwei Jahren Ashwagandha-Einnahme landete in der Notaufnahme, dokumentiert bei Abdulaziz 2022. Drei Fallberichte machen keine Epidemiologie. Sie machen Krankenakten.

Die Supplement-Industrie verkauft Ashwagandha als »Stressabbau«. Das ist ungefähr so präzise wie ein Auto als »Fortbewegung« zu verkaufen, ohne die Bremsen zu erwähnen. Die Cortisolsenkung ist real. Die Schlafverbesserung ist real. Die Schilddrüsenstimulation ist genauso real. Auf dem Etikett stehen die ersten zwei. In der Notaufnahme erklärt man die dritte.

Die Forschung hat bei Ashwagandha geliefert. Drei RCTs zur Stressachse, eine zur Schilddrüse, Aktigraphie-Daten zum Schlaf. Was fehlt, ist die Übersetzung dieser Befunde in eine ehrliche Produktkommunikation. Stattdessen steht auf der Packung »traditionell angewendet«, eine Formel, die gleichzeitig alles verspricht und nichts garantiert.`,
      quellen: [
        {
          autoren: "Karuppiah Chandrasekhar, Jyoti Kapoor, Sridhar Anishetty",
          titel: "A Prospective, Randomized Double-Blind, Placebo-Controlled Study of Safety and Efficacy of a High-Concentration Full-Spectrum Extract of Ashwagandha Root in Reducing Stress and Anxiety in Adults",
          journal: "Indian Journal of Psychological Medicine",
          vol: "Vol. 34, No. 3",
          datum: "Juli—September 2012",
          seiten: "255—262",
          doi: "10.4103/0253-7176.106022",
          pmid: "23439798",
        },
        {
          autoren: "Adrian Lopresti, Stephen Smith, Heather Malvi, et al.",
          titel: "An investigation into the stress-relieving and pharmacological actions of an ashwagandha (Withania somnifera) extract",
          journal: "Medicine",
          vol: "Vol. 98, No. 37",
          datum: "September 2019",
          seiten: "e17186",
          doi: "10.1097/MD.0000000000017186",
          pmid: "31517876",
        },
        {
          autoren: "Deepak Langade, Subodh Kanchi, Jaising Salve, et al.",
          titel: "Efficacy and Safety of Ashwagandha (Withania somnifera) Root Extract in Insomnia and Anxiety: A Double-blind, Randomized, Placebo-controlled Study",
          journal: "Cureus",
          vol: "Vol. 11, No. 9",
          datum: "28.09.2019",
          seiten: "e5797",
          doi: "10.7759/cureus.5797",
          pmid: "31728244",
        },
        {
          autoren: "Ashok Kumar Sharma, Indraneel Basu, Siddarth Singh",
          titel: "Efficacy and Safety of Ashwagandha Root Extract in Subclinical Hypothyroid Patients: A Double-Blind, Randomized Placebo-Controlled Trial",
          journal: "Journal of Alternative and Complementary Medicine",
          vol: "Vol. 24, No. 3",
          datum: "März 2018",
          seiten: "243—248",
          doi: "10.1089/acm.2017.0183",
          pmid: "29091029",
        },
        {
          autoren: "Cees S. van der Hooft, Anke Hoekstra, Agnes Winter, et al.",
          titel: "Thyrotoxicosis following the use of ashwagandha",
          journal: "Netherlands Journal of Medicine",
          vol: "Vol. 63, No. 10",
          datum: "November 2005",
          seiten: "400—402",
          pmid: "16301764",
        },
        {
          autoren: "Shubham Jaiswal, Ravi Singh, Rakesh Kumar",
          titel: "Ashwagandha-induced thyrotoxicosis: a case report",
          journal: "BMJ Case Reports",
          vol: "Vol. 16, No. 4",
          datum: "April 2023",
          seiten: "e254502",
          doi: "10.1136/bcr-2023-254502",
        },
        {
          autoren: "Mohanad Abdulaziz, Naseem Akhtar, Arif Hafeez, et al.",
          titel: "Ashwagandha as a Unique Cause of Thyrotoxicosis Presenting With Supraventricular Tachycardia",
          journal: "Cureus",
          vol: "Vol. 14, No. 3",
          datum: "März 2022",
          seiten: "e23294",
          doi: "10.7759/cureus.23294",
          pmid: "35475091",
        },
      ],
    },
    {
      slug: "magnolia-phellodendron-relora",
      titel: "Zwei Baumrinden, ein Patent",
      lead: "Honokiol aus Magnolienrinde bindet an GABA-A-Rezeptoren wie ein Benzodiazepin, ohne Abhängigkeit auszulösen. Das wäre eine Nachricht. Stattdessen steht es auf einer Diätpille.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `In der traditionellen chinesischen Medizin heißt die Rinde von Magnolia officinalis Houpu. Sie wird seit Jahrhunderten gegen Angst, Schlaflosigkeit und Verdauungsbeschwerden eingesetzt. Die Rinde von Phellodendron amurense, dem Amur-Korkbaum, liefert Berberin und wird gegen Entzündungen und Infektionen verwendet. Zwei Bäume, zwei Profile, zweitausend Jahre Erfahrungsmedizin. Ein amerikanisches Unternehmen hat beide in eine Kapsel gepackt und das Ergebnis patentiert.

Relora heißt das Produkt. Standardisiert auf mindestens 1,5 Prozent Honokiol und 0,1 Prozent Berberin. Die klinische Evidenz beschränkt sich auf zwei Studien, die der Hersteller finanziert hat. Talbott 2013 misst an 56 moderat gestressten Probanden nach vier Wochen Relora eine Reduktion des Speichelcortisols um achtzehn Prozent gegenüber Placebo und verbesserte Stimmungswerte. Kalman 2008 testet an 40 prämenopausalen Frauen über sechs Wochen und findet eine Reduktion vorübergehender Angst, aber keine Veränderung von Cortisol, Schlafqualität oder Appetit.

Zwei Studien, finanziert vom Patentinhaber, mit widersprüchlichen Cortisol-Ergebnissen. Das ist die gesamte Humaneviden für ein Produkt, das als »klinisch erwiesen« beworben wird.

Das Patent ist Bürokratie. Der Wirkstoff ist Pharmakologie. Alexeev 2012 zeigt, dass Honokiol und Magnolol positive allosterische Modulatoren an GABA-A-Rezeptoren sind, an synaptischen und extrasynaptischen. Die Bindungsstelle überschneidet sich mit der von Benzodiazepinen. Im Tiermodell zeigt Honokiol anxiolytische Wirkung vergleichbar mit Diazepam, ohne Sedierung, ohne motorische Beeinträchtigung, ohne Abhängigkeitspotenzial. Kuribara 1998 misst das im Elevated-Plus-Maze und findet keine der typischen Benzodiazepin-Nebenwirkungen.

Ein pflanzlicher GABA-A-Modulator ohne Abhängigkeitsprofil wäre für die Psychiatrie eine Nachricht. Benzodiazepine sind die wirksamsten Anxiolytika und gleichzeitig eine der am häufigsten missbrauchten Substanzklassen. Eine Alternative, die denselben Rezeptor adressiert und das Suchtpotenzial umgeht, hätte klinische Studien verdient. Sie hat zwei Pilotstudien zu Stressessen bekommen. Vom Hersteller finanziert.

Die Vermarktung zielt auf Gewichtsmanagement. Garrison 2006 testet Relora als Supplement gegen stressbedingtes Essen. Das Marketing folgt dem Geld, nicht der Pharmakologie. Wer Honokiol als Diäthilfe verkauft, hat einen GABA-A-Modulator und macht daraus einen Appetitzügler. Die Priorität verrät mehr über die Industrie als über die Substanz.

Was bleibt, ist eine Rinde mit einem Wirkstoff, der die Grundlagenforschung verdient und die Klinik nie erreicht hat. Zwei Pilotstudien vom Hersteller ersetzen keine unabhängige Forschung. Das Tiermodell zeigt Wirkung ohne Nebenwirkung. Das Patent steht der Forschung im Weg, weil niemand eine Phase-II-Studie für ein Produkt finanziert, dessen Ergebnis dem Patentinhaber gehört.

Houpu gibt es im Asia-Markt. Relora gibt es auf Amazon. Die GABA-A-Bindung gibt es nur in der Fachliteratur.`,
      quellen: [
        {
          autoren: "Shawn Talbott, Julie Talbott, Mike Pugh",
          titel: "Effect of Magnolia officinalis and Phellodendron amurense (Relora) on cortisol and psychological mood state in moderately stressed subjects",
          journal: "Journal of the International Society of Sports Nutrition",
          vol: "Vol. 10, No. 1",
          datum: "07.08.2013",
          seiten: "37",
          doi: "10.1186/1550-2783-10-37",
          pmid: "23924268",
        },
        {
          autoren: "Douglas Kalman, Samantha Feldman, Robin Feldman, et al.",
          titel: "Effect of a proprietary Magnolia and Phellodendron extract on stress levels in healthy women: a pilot, double-blind, placebo-controlled clinical trial",
          journal: "Nutrition Journal",
          vol: "Vol. 7",
          datum: "21.04.2008",
          seiten: "11",
          doi: "10.1186/1475-2891-7-11",
          pmid: "18426577",
        },
        {
          autoren: "Mikhail Alexeev, Denise Grosenbaugh, David Mott, et al.",
          titel: "The natural products magnolol and honokiol are positive allosteric modulators of both synaptic and extra-synaptic GABA(A) receptors",
          journal: "Neuropharmacology",
          vol: "Vol. 62, No. 8",
          datum: "Juni 2012",
          seiten: "2507—2514",
          doi: "10.1016/j.neuropharm.2012.03.002",
          pmid: "22445602",
        },
        {
          autoren: "Hideo Kuribara, William Stavinoha, Yasushi Maruyama",
          titel: "Behavioural pharmacological characteristics of honokiol, an anxiolytic agent present in extracts of Magnolia bark, evaluated by an elevated plus-maze test in mice",
          journal: "Journal of Pharmacy and Pharmacology",
          vol: "Vol. 50, No. 7",
          datum: "Juli 1998",
          seiten: "819—826",
          pmid: "9720631",
        },
        {
          autoren: "Russell Garrison, Walter Chambliss",
          titel: "Effect of a proprietary Magnolia and Phellodendron extract on weight management: a pilot, double-blind, placebo-controlled clinical trial",
          journal: "Alternative Therapies in Health and Medicine",
          vol: "Vol. 12, No. 1",
          datum: "Januar—Februar 2006",
          seiten: "50—54",
          pmid: "16454147",
        },
        {
          autoren: "Hideo Kuribara, William Stavinoha, Yasushi Maruyama",
          titel: "Honokiol, a putative anxiolytic agent extracted from Magnolia bark, has no diazepam-like side-effects in mice",
          journal: "Journal of Pharmacy and Pharmacology",
          vol: "Vol. 51, No. 1",
          datum: "Januar 1999",
          seiten: "97—103",
          pmid: "10197426",
        },
      ],
    },
    {
      slug: "gaba-glycin-magnesium-glycinat",
      titel: "Drei Wege zur Bremse, einer davon funktioniert nicht",
      lead: "GABA ist der wichtigste hemmende Neurotransmitter im Gehirn. Als Supplement geschluckt erreicht er es wahrscheinlich nicht. Die Supplement-Industrie verkauft ihn trotzdem.",
      filter: ["Überschätzt"],
      date: "2026-06-22",
      body: `GABA-Kapseln sind das zweitbeliebteste Schlaf-Supplement auf Amazon nach Melatonin. Die Packung verspricht Entspannung, Stressreduktion, besseren Schlaf. Das Problem steht in keinem Beipackzettel. GABA ist ein hochpolares Molekül. Die Blut-Hirn-Schranke lässt hochpolare Moleküle nicht passieren. Boonstra 2015 fasst die Literatur zusammen und kommt zu dem Ergebnis, dass die BBB-Permeabilität von oral eingenommenem GABA beim Menschen wahrscheinlich minimal ist. Die positiven Effekte, die manche Studien messen, laufen vermutlich über den Vagusnerv oder sind Placebo. Eine direkte Messung von Gehirn-GABA-Spiegeln nach oraler Einnahme per MR-Spektroskopie existiert nicht.

Ein Supplement, dessen Wirkstoff sein Zielorgan vermutlich nicht erreicht, ist das zweitbeliebteste Schlafmittel im Onlinehandel.

Glycin erreicht das Gehirn. Es passiert die Blut-Hirn-Schranke per passiver Diffusion und bindet an NMDA-Rezeptoren im Nucleus suprachiasmaticus. Kawai 2015 zeigt in Ratten, dass Glycin über diesen Weg die Körperkerntemperatur senkt. Temperaturabfall ist das physiologische Signal für Schlafeinleitung. Glycin sediert nicht. Es kühlt. Der Mechanismus ist anders als bei Benzodiazepinen oder Antihistaminika, die neuronale Aktivität unterdrücken.

Yamadera 2007 misst die Wirkung am Menschen. Drei Gramm Glycin vor dem Schlafengehen verbessern die subjektive Schlafqualität und korrelieren mit polysomnographischen Veränderungen. Bannai 2012 ergänzt, dass dieselbe Dosis die Tagesperformance bei Schlafentzug verbessert, weniger Müdigkeit, schnellere Reaktionszeiten. Drei Gramm. Kostet weniger als ein Euro pro Tag. Keine Nebenwirkungen in keiner der Studien.

Magnesium-Glycinat verbindet beides. Magnesium ist Cofaktor der Glutamat-Decarboxylase, des Enzyms, das Glutamat in GABA umwandelt. Wer genug Magnesium hat, produziert mehr GABA im Gehirn. Das Glycinat als Träger liefert gleichzeitig die Aminosäure, die über ihren eigenen Wirkweg den Schlaf fördert. Zwei Substanzen, zwei Mechanismen, eine Tablette. Magnesium-Glycinat schneidet in Schlafstudien besser ab als Magnesiumoxid oder Citrat. Nicht wegen des Magnesiumgehalts. Der ist niedriger. Es ist das Glycin.

Das Muster ist typisch. GABA als Supplement verkauft die Idee direkt, das Molekül direkt ins Gehirn zu liefern. Die Idee scheitert an der Biochemie. Glycin geht den Umweg über Temperaturregulation und NMDA-Rezeptoren und kommt an. Magnesium-Glycinat geht beide Wege gleichzeitig. Die Supplement-Industrie bewirbt am lautesten, was am schlechtesten funktioniert, und erwähnt am wenigsten, was am besten belegt ist. Drei Gramm Glycinpulver für dreißig Cent haben keine Marketingabteilung.`,
      quellen: [
        {
          autoren: "Evert Boonstra, Roy de Kleijn, Lorenza Colzato, et al.",
          titel: "Neurotransmitters as food supplements: the effects of GABA on brain and behavior",
          journal: "Frontiers in Psychology",
          vol: "Vol. 6",
          datum: "06.10.2015",
          seiten: "1520",
          doi: "10.3389/fpsyg.2015.01520",
          pmid: "26500584",
        },
        {
          autoren: "Nobuhiro Kawai, Noriaki Sakai, Masashi Okuro, et al.",
          titel: "The Sleep-Promoting and Hypothermic Effects of Glycine are Mediated by NMDA Receptors in the Suprachiasmatic Nucleus",
          journal: "Neuropsychopharmacology",
          vol: "Vol. 40, No. 6",
          datum: "Mai 2015",
          seiten: "1405—1416",
          doi: "10.1038/npp.2014.326",
          pmid: "25533534",
        },
        {
          autoren: "Wataru Yamadera, Kentaro Inagawa, Shintaro Chiba, et al.",
          titel: "Glycine ingestion improves subjective sleep quality in human volunteers, correlating with polysomnographic changes",
          journal: "Sleep and Biological Rhythms",
          vol: "Vol. 5, No. 2",
          datum: "April 2007",
          seiten: "126—131",
          doi: "10.1111/j.1479-8425.2007.00262.x",
        },
        {
          autoren: "Makoto Bannai, Nobuhiro Kawai, Kaori Ono, et al.",
          titel: "The effects of glycine on subjective daytime performance in partially sleep-restricted healthy volunteers",
          journal: "Frontiers in Neurology",
          vol: "Vol. 3",
          datum: "18.04.2012",
          seiten: "61",
          doi: "10.3389/fneur.2012.00061",
          pmid: "22529837",
        },
        {
          autoren: "Makoto Bannai, Nobuhiro Kawai",
          titel: "New therapeutic strategy for amino acid medicine: glycine improves the quality of sleep",
          journal: "Journal of Pharmacological Sciences",
          vol: "Vol. 118, No. 2",
          datum: "2012",
          seiten: "145—148",
          doi: "10.1254/jphs.11R04FM",
          pmid: "22293292",
        },
        {
          autoren: "Silvia Razak, Dominic Ramms, Rhonda Brereton, et al.",
          titel: "Multifarious Beneficial Effect of Nonessential Amino Acid, Glycine: A Review",
          journal: "Oxidative Medicine and Cellular Longevity",
          vol: "Vol. 2017",
          datum: "2017",
          seiten: "1716701",
          doi: "10.1155/2017/1716701",
          pmid: "28337245",
        },
      ],
    },
    {
      slug: "bacopa-monnieri-langsame-wirkung",
      titel: "Die Pflanze, die erst nach zwölf Wochen wirkt",
      lead: "Jede positive Humanstudie zu Bacopa monnieri misst den Effekt nach zwölf Wochen. Vorher passiert nichts. Die Nootropic-Community will Ergebnisse nach einer Stunde. Das erklärt, warum die meisten aufgeben, bevor die Substanz anfängt zu wirken.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `Bacopa monnieri heißt im Ayurveda Brahmi und wird dort seit Jahrhunderten zur Verbesserung des Gedächtnisses eingesetzt. Die westliche Forschung hat den Befund in sechs randomisierten Studien geprüft und im Kern bestätigt. Sechs randomisierte Studien, alle mit demselben Ergebnis. Nach zwölf Wochen bessere Verarbeitungsgeschwindigkeit, besserer Abruf, weniger depressive Symptomatik. Der Extrakt heißt CDRI-08, die Dosis 300 mg, die Probanden reichen von Studenten bis Senioren. Pase 2012 fasst die Datenlage in einer systematischen Übersicht zusammen und findet konsistente Effekte auf Gedächtnis und Informationsverarbeitung.

Der Befund ist robust. Die Zeitachse ist das Problem.

Keine einzige Studie findet einen akuten Effekt. Nathan 2001 testet Bacopa als Einzeldosis und misst nichts. Die Substanz braucht Wochen, um im Gehirn strukturell wirksam zu werden. Bacoside A und B, die Triterpensaponine der Pflanze, fördern dendritische Verzweigung, erhöhen die synaptische Plastizität und schützen Neuronen vor oxidativem Stress. Das sind keine schnellen Eingriffe in die Neurotransmission. Das sind langsame Umbauprozesse. SSRI brauchen genauso lang, bis etwas passiert.

Die Nootropic-Szene verkauft Bacopa neben Modafinil und Racetamen, Substanzen mit Wirkungseintritt im Minutenbereich. Wer Bacopa kauft und nach drei Tagen keine Veränderung spürt, stellt es ins Regal und schreibt eine schlechte Rezension. Die schlechte Rezension senkt den Algorithmus. Der gesenkte Algorithmus senkt den Verkauf. Der gesenkte Verkauf senkt die Wahrscheinlichkeit, dass jemand lang genug durchhält, um den Effekt zu messen, der in sechs RCTs dokumentiert ist.

Die Pharmakologie hat geliefert. Die Aufmerksamkeitsökonomie sabotiert die Anwendung. Im Ayurveda wurde Brahmi über Monate eingenommen. Die Tradition wusste, was die Studien bestätigen. Die Pflanze funktioniert nach dem Zeitplan der Neurobiologie, nicht nach dem Zeitplan von Amazon Prime.`,
      quellen: [
        {
          autoren: "Con Stough, Jenny Lloyd, Joanne Clarke, et al.",
          titel: "The chronic effects of an extract of Bacopa monniera (Brahmi) on cognitive function in healthy human subjects",
          journal: "Psychopharmacology",
          vol: "Vol. 156, No. 4",
          datum: "August 2001",
          seiten: "481—484",
          doi: "10.1007/s002130100815",
          pmid: "11498727",
        },
        {
          autoren: "Carlo Calabrese, William Gregory, Michael Leo, et al.",
          titel: "Effects of a standardized Bacopa monnieri extract on cognitive performance, anxiety, and depression in the elderly: a randomized, double-blind, placebo-controlled trial",
          journal: "Journal of Alternative and Complementary Medicine",
          vol: "Vol. 14, No. 6",
          datum: "Juli 2008",
          seiten: "707—713",
          doi: "10.1089/acm.2008.0018",
          pmid: "18611150",
        },
        {
          autoren: "Steven Roodenrys, Dianne Booth, Sonia Bulzomi, et al.",
          titel: "Chronic effects of Brahmi (Bacopa monnieri) on human memory",
          journal: "Neuropsychopharmacology",
          vol: "Vol. 27, No. 2",
          datum: "August 2002",
          seiten: "279—281",
          doi: "10.1016/S0893-133X(01)00419-5",
          pmid: "12093601",
        },
        {
          autoren: "Matthew Pase, James Kean, Jerome Sarris, et al.",
          titel: "The Cognitive-Enhancing Effects of Bacopa monnieri: A Systematic Review of Randomized, Controlled Human Clinical Trials",
          journal: "Journal of Alternative and Complementary Medicine",
          vol: "Vol. 18, No. 7",
          datum: "Juli 2012",
          seiten: "647—652",
          doi: "10.1089/acm.2011.0367",
          pmid: "22747190",
        },
        {
          autoren: "Pruksa Nathan, Joanne Clarke, Jenny Lloyd, et al.",
          titel: "The acute effects of an extract of Bacopa monniera (Brahmi) on cognitive function in healthy normal subjects",
          journal: "Human Psychopharmacology",
          vol: "Vol. 16, No. 4",
          datum: "Juni 2001",
          seiten: "345—351",
          doi: "10.1002/hup.306",
          pmid: "12404571",
        },
        {
          autoren: "Chuenjid Kongkeaw, Piyameth Dilokthornsakul, Phurit Thanarangsarit, et al.",
          titel: "Meta-analysis of randomized controlled trials on cognitive effects of Bacopa monnieri extract",
          journal: "Journal of Ethnopharmacology",
          vol: "Vol. 151, No. 1",
          datum: "Januar 2014",
          seiten: "528—535",
          doi: "10.1016/j.jep.2013.11.008",
          pmid: "24252493",
        },
      ],
    },
    {
      slug: "cholin-alpha-gpc-citicolin",
      titel: "Die Substanz, die auf dem Etikett fehlt",
      lead: "2003 hat eine Studie an 261 Alzheimer-Patienten gezeigt, dass Alpha-GPC die Kognition signifikant verbessert. Seitdem ist nichts passiert. Die Substanz lässt sich nicht patentieren.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `Acetylcholin steuert Aufmerksamkeit, Gedächtnisbildung und die Kommunikation zwischen Hippocampus und Cortex. Die cholinergen Neuronen im basalen Vorderhirn sind die erste Population, die bei Alzheimer degeneriert. Donepezil und Rivastigmin, die zugelassenen Medikamente, verlangsamen den Abbau von Acetylcholin. Sie reparieren nichts. Sie verlängern die Halbwertszeit eines Neurotransmitters, dessen Produktion versiegt.

Die Produktion hängt am Cholin. Der Körper kann Cholin in begrenztem Umfang selbst herstellen, aber nicht genug. Zeisel 2009 zeigt, dass die Mehrheit der Bevölkerung in westlichen Industrieländern unter der empfohlenen Tageszufuhr von 550 mg liegt. Cholin ist ein essentieller Nährstoff, den fast niemand kennt und fast niemand ausreichend aufnimmt.

Drei Formen stehen im Regal. Cholinbitartrat ist die billigste. Sie passiert die Blut-Hirn-Schranke schlecht und erhöht die Acetylcholin-Spiegel im Gehirn kaum messbar. Alpha-GPC passiert die Schranke. De Jesus Moreno 2003 testet 1200 mg Alpha-GPC täglich über sechs Monate an 261 Patienten mit leichter bis moderater Alzheimer-Demenz. Die Kognition verbessert sich signifikant gegenüber Placebo, gemessen auf vier verschiedenen Skalen. Das ist die größte placebokontrollierte Studie zu einem Cholinpräkursor bei Alzheimer. In Europa ist Alpha-GPC als Arzneimittel zugelassen. In den USA als Supplement.

Citicolin geht einen doppelten Weg. Es liefert Cholin für die Acetylcholin-Synthese und Cytidin für die Phospholipid-Reparatur der Zellmembranen. McGlade 2012 findet unter Citicolin verbesserte Aufmerksamkeit und Impulskontrolle bei gesunden Frauen mittleren Alters. Davalos 2012 testet Citicolin im ICTUS-Trial an über 2000 Schlaganfall-Patienten, publiziert im Lancet. Der primäre Endpunkt wird nicht erreicht, aber die Sicherheitsdaten sind makellos und Subgruppenanalysen zeigen Trends bei moderatem Schweregrad.

Was im Reformhaus steht, ist meistens Cholinbitartrat. Die billigste Form mit der schlechtesten Gehirnverfügbarkeit. Auf der Packung steht »Cholin 500 mg« ohne Angabe der Form. Wer Alpha-GPC und Cholinbitartrat für austauschbar hält, hält auch Leitungswasser und Espresso für dasselbe, weil beides Flüssigkeit ist.

Donepezil kostet im Patent Milliarden. Alpha-GPC ist seit Jahrzehnten patentfrei. Die Frage, ob man den Nachschub erhöhen könnte statt nur den Abbau zu verlangsamen, wurde 2003 beantwortet und dann fallengelassen. Eine Studie. Signifikant. Vergessen. Niemand verdient an einem Nährstoff, den man nicht monopolisieren kann. Also steht er nicht in den Leitlinien. Also steht im Reformhaus die billige Form. Und irgendwo vergisst eine Mutter den Namen ihres Sohnes.`,
      quellen: [
        {
          autoren: "Manuel De Jesus Moreno Moreno",
          titel: "Cognitive improvement in mild to moderate Alzheimer's dementia after treatment with the acetylcholine precursor choline alfoscerate: a multicenter, double-blind, randomized, placebo-controlled trial",
          journal: "Clinical Therapeutics",
          vol: "Vol. 25, No. 1",
          datum: "Januar 2003",
          seiten: "178—193",
          doi: "10.1016/S0149-2918(03)90023-3",
          pmid: "12637119",
        },
        {
          autoren: "Steven Zeisel, Kerry-Ann da Costa",
          titel: "Choline: an essential nutrient for public health",
          journal: "Nutrition Reviews",
          vol: "Vol. 67, No. 11",
          datum: "November 2009",
          seiten: "615—623",
          doi: "10.1111/j.1753-4887.2009.00246.x",
          pmid: "19906248",
        },
        {
          autoren: "Erin McGlade, Allison Locatelli, Julia Hardy, et al.",
          titel: "Improved Attentional Performance Following Citicoline Administration in Healthy Adult Women",
          journal: "Food and Nutrition Sciences",
          vol: "Vol. 3, No. 6",
          datum: "2012",
          seiten: "769—773",
          doi: "10.4236/fns.2012.36103",
        },
        {
          autoren: "Antoni Davalos, José Alvarez-Sabín, Joan Castillo, et al.",
          titel: "Citicoline in the treatment of acute ischaemic stroke: an international, randomised, multicentre, placebo-controlled study (ICTUS trial)",
          journal: "The Lancet",
          vol: "Vol. 380, No. 9839",
          datum: "Juli 2012",
          seiten: "349—357",
          doi: "10.1016/S0140-6736(12)60813-7",
          pmid: "22691567",
        },
        {
          autoren: "Vincenzo Parisi, Giulio Manni, Monica Colacino, et al.",
          titel: "Cytidine-5'-diphosphocholine (Citicoline) improves retinal and cortical responses in patients with glaucoma",
          journal: "Progress in Brain Research",
          vol: "Vol. 173",
          datum: "2008",
          seiten: "541—554",
          doi: "10.1016/S0079-6123(08)01138-0",
          pmid: "18929129",
        },
      ],
    },
    {
      slug: "sulforaphan-nrf2-entgiftung",
      titel: "Der Schalter, den Brokkoli umlegt",
      lead: "Sulforaphan aktiviert Nrf2, den Transkriptionsfaktor, der über zweihundert Schutzgene gleichzeitig hochfährt. Die beste Quelle wächst in drei Tagen auf der Fensterbank.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `Wenn man eine Brokkolisprosse kaut, bricht man Zellwände. Das Enzym Myrosinase trifft auf Glucoraphanin, und aus einer Vorstufe wird Sulforaphan. Das Molekül schmeckt scharf, leicht bitter, nach zerdrücktem Senf. Der Geschmack ist die Chemie bei der Arbeit.

Fahey, Zhang und Talalay publizierten 1997 in den Proceedings of the National Academy of Sciences, dass drei Tage alte Brokkolisprossen zehn- bis hundertmal mehr Glucoraphanin enthalten als der ausgewachsene Brokkoli. Die Studie veränderte die Chemoprävention. Zhang und Talalay hatten Sulforaphan drei Jahre zuvor als Chemoprotektivum identifiziert, im Rattenmodell, mit signifikanter Reduktion von Brusttumoren nach Karzinogen-Exposition. 1997 zeigte sich, dass die Sprossen den Effekt billiger, konzentrierter und ohne Extraktion liefern. Saatgut, Wasser, drei Tage. Dreihundert Folgestudien allein aus dem Johns-Hopkins-Labor.

Sulforaphan wirkt über einen einzigen Schalter. Im Normalzustand hält Keap1 den Transkriptionsfaktor Nrf2 im Zytoplasma fest und markiert ihn für den Abbau. Sulforaphan modifiziert Keap1. Nrf2 wird frei, wandert in den Zellkern, aktiviert über zweihundert Gene. Entgiftung, Entzündungshemmung, antioxidative Abwehr. Ein Molekül, eine Kaskade, zweihundert Schutzprogramme. Die Zelle fährt ihre eigene Apotheke hoch, mit einem Schlüssel aus einer zerkauten Sprosse.

Singh 2014 testet Sulforaphan an jungen Männern mit Autismus-Spektrum-Störung. Die Verbesserungen in sozialer Interaktion verschwinden nach Absetzen. Alumkal 2015 prüft Brokkolisprossenextrakt bei rezidivierendem Prostatakarzinom. Shapiro 2006 dokumentiert Sicherheit in einer Phase-I-Studie. Die Daten sind vielversprechend. Eine Phase-III-Studie existiert nicht. Kein Patent, kein Sponsor.

Jetzt das Supplement-Regal. Die meisten Kapseln enthalten Glucoraphanin ohne Myrosinase. Ohne Myrosinase findet die Umwandlung im Darm statt, abhängig von der individuellen Flora, mit einer Bioverfügbarkeit, die um Faktor fünf schwankt. Die Hersteller wissen das. Sie verkaufen die stabile Vorstufe, weil sich Sulforaphan selbst nicht in eine Kapsel packen lässt, ohne zu zerfallen. Auf der Packung steht »Brokkoliextrakt«. Was im Körper ankommt, ist Lotterie.

Ein Bund Sprossen vom Bioladen liefert die Myrosinase gratis. Selbst gezogen auf der Fensterbank kostet die pharmakologisch überlegene Quelle Saatgut und Leitungswasser. Dreißig Cent gegen dreißig Euro. Die Industrie weiß das. Sie kann Saatgut schlecht in eine Blisterpackung drücken. Also verkauft sie die instabile Vorstufe zum zehnfachen Preis. Deshalb steht auf keiner Packung, dass Brokkoli reicht.`,
      quellen: [
        {
          autoren: "Jed Fahey, Yuesheng Zhang, Paul Talalay",
          titel: "Broccoli sprouts: An exceptionally rich source of inducers of enzymes that protect against chemical carcinogens",
          journal: "Proceedings of the National Academy of Sciences",
          vol: "Vol. 94, No. 19",
          datum: "16.09.1997",
          seiten: "10367—10372",
          doi: "10.1073/pnas.94.19.10367",
          pmid: "9294217",
        },
        {
          autoren: "Yuesheng Zhang, Thomas Kensler, Chang-Guo Cho, et al.",
          titel: "Anticarcinogenic activities of sulforaphane and structurally related synthetic norbornyl isothiocyanates",
          journal: "Proceedings of the National Academy of Sciences",
          vol: "Vol. 91, No. 8",
          datum: "12.04.1994",
          seiten: "3147—3150",
          doi: "10.1073/pnas.91.8.3147",
          pmid: "8159717",
        },
        {
          autoren: "Kanwaljit Singh, Susan Connors, Eric Macklin, et al.",
          titel: "Sulforaphane treatment of autism spectrum disorder (ASD)",
          journal: "Proceedings of the National Academy of Sciences",
          vol: "Vol. 111, No. 43",
          datum: "28.10.2014",
          seiten: "15550—15555",
          doi: "10.1073/pnas.1416940111",
          pmid: "25313065",
        },
        {
          autoren: "Theresa Shapiro, Jed Fahey, Albena Dinkova-Kostova, et al.",
          titel: "Safety, tolerance, and metabolism of broccoli sprout glucosinolates and isothiocyanates: A clinical Phase I study",
          journal: "Nutrition and Cancer",
          vol: "Vol. 55, No. 1",
          datum: "2006",
          seiten: "53—62",
          pmid: "16965241",
        },
        {
          autoren: "Joshi Alumkal, Rachel Slottke, Joel Schwartzman, et al.",
          titel: "A phase II study of sulforaphane-rich broccoli sprout extracts in men with recurrent prostate cancer",
          journal: "Investigational New Drugs",
          vol: "Vol. 33, No. 2",
          datum: "April 2015",
          seiten: "480—489",
          doi: "10.1007/s10637-014-0189-z",
          pmid: "25431127",
        },
        {
          autoren: "Jed Fahey, W. David Holtzclaw, Scott Wehage, et al.",
          titel: "Sulforaphane Bioavailability from Glucoraphanin-Rich Broccoli: Control by Active Endogenous Myrosinase",
          journal: "PLoS ONE",
          vol: "Vol. 10, No. 11",
          datum: "02.11.2015",
          seiten: "e0140963",
          doi: "10.1371/journal.pone.0140963",
          pmid: "26524341",
        },
      ],
    },
    {
      slug: "nad-nmn-sirtuine-langlebigkeit",
      titel: "Das Molekül, an dem die Biohacker sterben wollen",
      lead: "NAD+ ist der zentrale Redox-Cofaktor in jeder menschlichen Zelle. Sein Spiegel sinkt mit dem Alter um bis zu sechzig Prozent. Die Tierdaten zur Supplementierung sind spektakulär. Die Humandaten kommen gerade erst.",
      filter: ["Unklar"],
      date: "2026-06-22",
      body: `Ohne NAD+ stoppt die Glykolyse. Ohne NAD+ stoppt der Krebs-Zyklus. Ohne NAD+ stoppt die mitochondriale Atmungskette. Das Molekül ist so fundamental, dass die Zelle ohne es aufhört zu existieren. Sirtuine, die Enzyme, die an Langlebigkeit gekoppelt sind, brauchen NAD+ als Substrat. PARP-Enzyme, die DNA-Schäden reparieren, brauchen NAD+ als Substrat. Und der Spiegel sinkt ab dem dreißigsten Lebensjahr stetig. Vierzig bis sechzig Prozent weniger in alten Geweben. Kein anderes Molekül vereint diese Kombination aus Unverzichtbarkeit und dokumentiertem Verlust.

Yoshino 2011 zeigt in Cell Metabolism, dass NMN-Supplementierung bei Mäusen die altersbedingte Abnahme von NAD+ in Pankreas, Fettgewebe und Skelettmuskel umkehrt. Die Insulinsensitivität verbessert sich, die Betazell-Funktion wird restauriert, die Gefäßdysfunktion kehrt sich um. Die Daten sind konsistent über Dutzende Labore und Modelle. An Mäusen funktioniert NAD+-Auffüllung so zuverlässig wie kaum eine andere Intervention in der Alternsforschung. Das Problem mit Mäusen ist, dass sie keine Kreditkarten haben. Sonst würde ihnen schon jemand NMN für sechzig Euro im Monatsabo verkaufen.

Am Menschen sieht es bisher so aus. Liao 2021 testet NMN an Hobbyläufern, randomisiert, doppelblind. 250 Milligramm täglich, sechs Wochen. Die aerobe Kapazität steigt signifikant und dosisabhängig. Yoshino 2021 zeigt in Science verbesserte muskuläre Insulinsensitivität bei prädiabetischen Frauen unter NMN. Zwei Journals, die keine Gefälligkeitspublikationen drucken. Wer nach diesen Daten noch »nur Mausstudien« sagt, hat aufgehört zu lesen.

Was fehlt, sind Langzeitdaten an großen Populationen. Was nicht fehlt, ist eine Supplementindustrie, die 500-Milligramm-Kapseln für sechzig Euro verkauft und auf dem Etikett druckt, was Mäuse in Laboren gezeigt haben. David Sinclairs Bestseller hat NMN zum Longevity-Supplement der Biohacker-Szene gemacht. Die Biochemie verdient diesen Status. Das Marketing hat ihn sich genommen, bevor die Humanstudien fertig waren.

NMN ist die direkte Vorstufe von NAD+. NR, Nicotinamid-Ribosid, konkurriert als alternativer Vorläufer über einen anderen Enzymweg. Die klinische Überlegenheit einer der beiden Formen ist nach aktuellem Stand nicht belegt. Wer NMN für überlegen hält, hat eine Meinung. Wer NR für überlegen hält, hat eine andere Meinung. Wer die Daten liest, hat Geduld.`,
      quellen: [
        {
          autoren: "Jun Yoshino, Kathryn Mills, Myeong Jin Yoon, et al.",
          titel: "Nicotinamide mononucleotide, a key NAD+ intermediate, treats the pathophysiology of diet- and age-induced diabetes in mice",
          journal: "Cell Metabolism",
          vol: "Vol. 14, No. 4",
          datum: "Oktober 2011",
          seiten: "528—536",
          doi: "10.1016/j.cmet.2011.08.014",
          pmid: "21982712",
        },
        {
          autoren: "Bagen Liao, Yunlong Zhao, Dan Wang, et al.",
          titel: "Nicotinamide mononucleotide supplementation enhances aerobic capacity in amateur runners: a randomized, double-blind study",
          journal: "Journal of the International Society of Sports Nutrition",
          vol: "Vol. 18, No. 1",
          datum: "Juli 2021",
          seiten: "54",
          doi: "10.1186/s12970-021-00442-4",
          pmid: "34238308",
        },
        {
          autoren: "Mihoko Yoshino, Jun Yoshino, Brandon Kayser, et al.",
          titel: "Nicotinamide mononucleotide increases muscle insulin sensitivity in prediabetic women",
          journal: "Science",
          vol: "Vol. 372, No. 6547",
          datum: "11.06.2021",
          seiten: "1224—1229",
          doi: "10.1126/science.abe9985",
          pmid: "33888596",
        },
      ],
    },
    {
      slug: "dmso-loesungsmittel-heilmittel",
      titel: "Das Lösungsmittel, das durch die Haut geht",
      lead: "DMSO durchdringt die Haut in Sekunden und nimmt mit, was darauf liegt. Stanley Jacob entdeckte das 1963, als er es verschüttete und Knoblauch schmeckte. Sechzig Jahre später hat die FDA eine einzige Indikation genehmigt. Zwölfhundert Publikationen sagen, es hätten mehr sein müssen.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `1962 suchte der Chirurg Stanley Jacob an der University of Oregon nach einem Konservierungsmittel für Spenderorgane. Er arbeitete mit Dimethylsulfoxid, einem farblosen Nebenprodukt der Zellstoffherstellung. Als er DMSO auf die Haut bekam, schmeckte er Sekunden später Knoblauch im Mund. Die Substanz hatte seine Haut durchdrungen, war in den Blutkreislauf gelangt und hatte die Geschmacksrezeptoren erreicht, bevor er sich die Hände waschen konnte. Jacob verstand sofort, was er gefunden hatte.

Jacob und Herschler publizierten 1964 die ersten Befunde. DMSO durchdringt biologische Membranen, ohne sie zu beschädigen. Es wirkt entzündungshemmend, schmerzlindernd, muskelrelaxierend. Es fängt Hydroxylradikale ab, hemmt NF-kB, reduziert die Leitungsgeschwindigkeit in peripheren Nerven. Wer DMSO auf ein geschwollenes Knie aufträgt, spürt nach Minuten, wie die Spannung nachlässt, und schmeckt Knoblauch. Beides gleichzeitig. Und es transportiert gelöste Substanzen durch die Haut mit. Ein Wirkstoff, der gleichzeitig Entzündungshemmer und transdermaler Carrier ist. Die Pharmakologie hatte dafür kein Vorbild.

Dann kam der Thalidomid-Skandal. Die FDA blockierte Mitte der sechziger Jahre jede klinische DMSO-Forschung. Anlass war eine Tierstudie, in der Hunde und Kaninchen unter hohen Dosen Linsentrübungen zeigten. Der Befund wurde nie beim Menschen repliziert. Jacob verbrachte den Rest seiner Karriere damit, für DMSO zu kämpfen.

Er verlor. 1978 genehmigte die FDA eine einzige Indikation. Interstitielle Zystitis, Blaseninstillation, Markenname Rimso-50. Seitdem nichts. Über tausend Publikationen zur Schmerzlinderung, Entzündungshemmung, Neuroprotection, Wundheilung. Keine zweite Zulassung.

In Europa und Lateinamerika wird DMSO breiter eingesetzt. In der Veterinärmedizin ist es Standardtherapie bei Gelenkentzündungen. Die Substanz ist billig, stabil, gut verträglich und seit Jahrzehnten im Einsatz. Dass sie in der Humanmedizin auf eine Blasenspülung reduziert wurde, geht auf eine regulatorische Entscheidung von 1965 zurück, die auf einer Tierstudie beruhte, die nie bestätigt wurde.

Weil DMSO alles durch die Haut transportiert, muss die Reinheit stimmen. Pharmazeutische Qualität. Saubere Haut. Wer Industrieware auf ungewaschene Hände aufträgt, schiebt Schmutz in den Blutkreislauf. Wer daraus einen Einwand gegen die Substanz ableitet, verwechselt den Wirkstoff mit der Regulierung. Die FDA hätte pharmazeutische Standards setzen können, statt die Forschung zu blockieren.

Stanley Jacob starb 2015. Die Substanz, für die er fünfzig Jahre kämpfte, ist in Amerika immer noch eine Blasenspülung.`,
      quellen: [
        {
          autoren: "Stanley Jacob, Marc Bischel, Robert Herschler",
          titel: "Dimethyl sulfoxide (DMSO): a new concept in pharmacotherapy",
          journal: "Current Therapeutic Research",
          vol: "Vol. 6",
          datum: "1964",
          seiten: "134—135",
        },
        {
          autoren: "Stanley Jacob, Robert Herschler",
          titel: "Pharmacology of DMSO",
          journal: "Cryobiology",
          vol: "Vol. 23, No. 1",
          datum: "Februar 1986",
          seiten: "14—27",
          doi: "10.1016/0011-2240(86)90014-3",
          pmid: "3510996",
        },
        {
          autoren: "Natalia Santos, José Figueira-Coelho, José Martins-Silva, et al.",
          titel: "Multidisciplinary utilization of dimethyl sulfoxide: pharmacological, cellular, and molecular aspects",
          journal: "Biochemical Pharmacology",
          vol: "Vol. 65, No. 7",
          datum: "April 2003",
          seiten: "1035—1041",
          doi: "10.1016/S0006-2952(03)00002-9",
          pmid: "12663039",
        },
        {
          autoren: "Kirk Capriotti, Joseph Capriotti",
          titel: "Dimethyl Sulfoxide: History, Chemistry, and Clinical Utility in Dermatology",
          journal: "Journal of Clinical and Aesthetic Dermatology",
          vol: "Vol. 5, No. 9",
          datum: "September 2012",
          seiten: "24—26",
          pmid: "23050031",
        },
        {
          autoren: "William Rawls, Lindsey Cox, Eric Rovner",
          titel: "Dimethyl sulfoxide (DMSO) as intravesical therapy for interstitial cystitis/bladder pain syndrome: A review",
          journal: "Neurourology and Urodynamics",
          vol: "Vol. 36, No. 7",
          datum: "September 2017",
          seiten: "1677—1684",
          doi: "10.1002/nau.23204",
          pmid: "28220525",
        },
      ],
    },
    {
      slug: "kokoswasser-elektrolyte-hydration",
      titel: "Das Getränk, das Gatorade überflüssig macht",
      lead: "Kokoswasser enthält mehr Kalium als eine Banane, mehr Magnesium als die meisten Mineralwässer und null Farbstoffe. Die Sportgetränke-Industrie hat siebzig Jahre gebraucht, um synthetisch zu kopieren, was in einer Kokosnuss schon drin war.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `Gatorade wurde 1965 erfunden. Die Kokosnuss hatte sechzig Millionen Jahre Vorsprung.

Eine junge Kokosnuss enthält zwischen 200 und 700 Milliliter Wasser. Der Elektrolytgehalt pro 240 Milliliter liegt bei rund 600 Milligramm Kalium, 250 Milligramm Natrium, 60 Milligramm Magnesium und 58 Milligramm Calcium. Dazu kommen natürliche Zucker, Aminosäuren und Cytokinine. Das Profil liest sich wie eine Infusionslösung, die jemand aus dem Tropenwald mitgebracht hat. In Südostasien wird Kokoswasser seit Jahrhunderten als Rehydratationsmittel verwendet. Im Zweiten Weltkrieg wurde es in Feldlazaretten als Notfall-Infusion eingesetzt, intravenös, wenn isotonische Kochsalzlösung nicht verfügbar war.

Saat 2002 vergleicht frisches Kokoswasser mit einem Kohlenhydrat-Elektrolyt-Sportgetränk und Wasser bei acht jungen Männern nach dehydrierendem Training. Kein signifikanter Unterschied in der Gesamtrehydration. Die Blutvolumenwiederherstellung war unter Kokoswasser tendenziell besser. Kalman 2012 wiederholt den Vergleich an zwölf trainierten Männern, vier Bedingungen, Crossover-Design. Kokoswasser rehydriert gleichwertig zum Sportgetränk. Kein Unterschied bei Hydratationsmarkern oder Leistung. Beide Studien führen zum selben Befund. Kokoswasser leistet, was Gatorade leistet. Ohne Farbstoff Gelb Nummer fünf.

Der Natriumgehalt ist der einzige Punkt, an dem Sportgetränke überlegen sind. Bei extremem Schwitzen über mehrere Stunden verliert der Körper mehr Natrium als Kokoswasser liefert. Ismail 2007 zeigt, dass natriumangereichertes Kokoswasser diesen Nachteil ausgleicht und die Rehydration verbessert. Für den Freizeitsportler, der eine Stunde läuft, ist der Natriumunterschied irrelevant. Für den Marathonläufer bei dreißig Grad existiert er.

Was Kokoswasser liefert und Sportgetränke nicht liefern, ist Kalium. 600 Milligramm pro Glas. Die meisten Menschen in westlichen Industrieländern nehmen zu wenig Kalium auf. Alleyne 2005 zeigt an Probanden mit Bluthochdruck eine Reduktion des systolischen Blutdrucks unter regelmäßigem Kokoswasserkonsum. Kalium reguliert den Flüssigkeitshaushalt, die Nervenleitgeschwindigkeit und den Blutdruck. Ein Sportgetränk enthält davon fast nichts. Es enthält Natrium, Zucker und Farbe.

Gatorade gehört PepsiCo. Ein 38-Milliarden-Dollar-Konzern verkauft eine Mischung aus Wasser, Saccharose und Natriumchlorid mit Lebensmittelfarbe für drei Euro pro Flasche. Kokoswasser liefert dasselbe Hydrationsergebnis mit einem vollständigeren Elektrolytprofil, natürlichen Zuckern und dem Kalium, das die meisten Menschen brauchen und nirgendwo bekommen. Siebzig Jahre Forschung, um eine Kokosnuss nachzubauen. Mit Farbstoff.`,
      quellen: [
        {
          autoren: "Mohamed Saat, Rabindarjeet Singh, Régis Sirisinghe, et al.",
          titel: "Rehydration after exercise with fresh young coconut water, carbohydrate-electrolyte beverage and plain water",
          journal: "Journal of Physiological Anthropology and Applied Human Science",
          vol: "Vol. 21, No. 2",
          datum: "März 2002",
          seiten: "93—104",
          doi: "10.2114/jpa.21.93",
          pmid: "12056182",
        },
        {
          autoren: "Douglas Kalman, Samantha Feldman, Diane Krieger, et al.",
          titel: "Comparison of coconut water and a carbohydrate-electrolyte sport drink on measures of hydration and physical performance in exercise-trained men",
          journal: "Journal of the International Society of Sports Nutrition",
          vol: "Vol. 9, No. 1",
          datum: "18.01.2012",
          seiten: "1",
          doi: "10.1186/1550-2783-9-1",
          pmid: "22257640",
        },
        {
          autoren: "Isma'il Ismail, Rabindarjeet Singh, Régis Sirisinghe",
          titel: "Rehydration with sodium-enriched coconut water after exercise-induced dehydration",
          journal: "Southeast Asian Journal of Tropical Medicine and Public Health",
          vol: "Vol. 38, No. 4",
          datum: "Juli 2007",
          seiten: "769—785",
          pmid: "17883020",
        },
        {
          autoren: "Terry Alleyne, Sylvester Roache, Clive Thomas, et al.",
          titel: "The control of hypertension by use of coconut water and mauby: two tropical food drinks",
          journal: "West Indian Medical Journal",
          vol: "Vol. 54, No. 1",
          datum: "Januar 2005",
          seiten: "3—8",
          pmid: "15892382",
        },
        {
          autoren: "Benja Chavalittamrong, Prapasri Pidatcha, Uruwan Thavisri",
          titel: "Electrolytes, sugar, calories, osmolarity and pH of beverages and coconut water",
          journal: "Southeast Asian Journal of Tropical Medicine and Public Health",
          vol: "Vol. 13, No. 3",
          datum: "September 1982",
          seiten: "427—431",
          pmid: "7163905",
        },
      ],
    },
    {
      slug: "chlorophyll-was-gruen-kann",
      titel: "Pflanzenblut",
      lead: "Chlorophyll und Hämoglobin teilen sich ein Molekülgerüst. Der Unterschied liegt im Zentralatom. Was daraus folgt, ist Pharmakologie. Was TikTok daraus macht, ist Dekoration.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `Der Porphyrinring ist eine der ältesten molekularen Strukturen in der Biologie. In Pflanzen trägt er Magnesium im Zentrum und heißt Chlorophyll. In menschlichem Blut trägt er Eisen und heißt Häm. Die strukturelle Verwandtschaft ist publiziert. Die Influencer-Version davon, dass Chlorophyll »das Blut mit Sauerstoff anreichert«, verwechselt Photosynthese mit Physiologie. Der Körper hat dafür Lungen. Aber die Verwandtschaft ist mehr als eine Kuriosität.

Egner 2001 publiziert in den Proceedings of the National Academy of Sciences die Ergebnisse einer Interventionsstudie in Qidong, China, einer Region mit hoher Aflatoxin-Belastung durch kontaminiertes Getreide. 180 Probanden erhielten über vier Monate dreimal täglich 100 mg Chlorophyllin. Die Aflatoxin-Biomarker im Urin sanken um 55 Prozent. Chlorophyllin bindet Aflatoxin im Darm, bevor es absorbiert wird. Ein Chelatbildner, der Karzinogene abfängt, bevor sie die Leber erreichen. 55 Prozent Reduktion. In einer Region, in der Leberkrebs endemisch ist, rettet das Menschenleben.

Die Wundheilung kam zuerst. In den vierziger und fünfziger Jahren setzten amerikanische Chirurgen Chlorophyllin-Verbände bei Brandwunden, Operationswunden und Dekubitus ein. Antibakteriell, geweberegenerierend, geruchsbindend. Drei Wirkungen in einem Verband. Dann kamen Antibiotika, und niemand schaute zurück. Die Pharmakologie blieb liegen, weil die Industrie ein patentierbares Produkt vorzog.

Die Geruchsbindung ist reproduzierbar und klinisch genutzt. Chlorophyllin reduziert Stuhl- und Körpergeruch bei Patienten mit Kolostomie und Inkontinenz. Young und Beregi dokumentierten das 1980 in einer kontrollierten Studie. Für Menschen, die wegen des Geruchs das Haus nicht mehr verlassen, ist das der Unterschied zwischen Isolation und Alltag.

Was auf TikTok als »Chlorophyll-Wasser« kursiert, enthält meistens Chlorophyllin, die halbsynthetische Variante mit Kupfer statt Magnesium im Zentrum. Das Etikett sagt »Chlorophyll«. Die Chemie sagt etwas anderes. Und die versprochenen Effekte, Detox, Hautglow, Gewichtsverlust, haben mit der dokumentierten Pharmakologie nichts zu tun. TikTok hat aus einem Karzinogen-Chelator, der in Qidong Menschenleben rettet, einen Selfie-Filter für grünes Wasser gemacht.`,
      quellen: [
        {
          autoren: "Patricia Egner, Jian-Bang Wang, Ya-Ru Zhu, et al.",
          titel: "Chlorophyllin intervention reduces aflatoxin-DNA adducts in individuals at high risk for liver cancer",
          journal: "Proceedings of the National Academy of Sciences",
          vol: "Vol. 98, No. 25",
          datum: "04.12.2001",
          seiten: "14601—14606",
          doi: "10.1073/pnas.251536898",
          pmid: "11724948",
        },
        {
          autoren: "Robert Young, Joseph Beregi",
          titel: "Use of chlorophyllin in the care of geriatric patients",
          journal: "Journal of the American Geriatrics Society",
          vol: "Vol. 28, No. 1",
          datum: "Januar 1980",
          seiten: "46—47",
          doi: "10.1111/j.1532-5415.1980.tb00124.x",
          pmid: "7350246",
        },
        {
          autoren: "Tumkur Suryanarayana, Mathala Krishnaswamy",
          titel: "Effect of oral administration of chlorophyllin on unscheduled synthesis of DNA in rat hepatocytes following the treatment with aflatoxin B1",
          journal: "Mutation Research",
          vol: "Vol. 308, No. 2",
          datum: "Juli 1994",
          seiten: "113—119",
          pmid: "7523928",
        },
        {
          autoren: "Chandra Mohan Dashwood, Roderick Dashwood",
          titel: "Dose-response analysis of chlorophyllin as an inhibitor of aflatoxin B1 mutagenesis in Salmonella typhimurium",
          journal: "Environmental and Molecular Mutagenesis",
          vol: "Vol. 31, No. 3",
          datum: "1998",
          seiten: "211—218",
        },
        {
          autoren: "Lisa Kephart",
          titel: "Applications for chlorophyll-derived compounds in wound healing and dermatology: A review",
          journal: "Ostomy Wound Management",
          vol: "Vol. 52, No. 6",
          datum: "Juni 2006",
          seiten: "34—42",
        },
      ],
    },
    {
      slug: "ingwer-gingerol-pharmakologie",
      titel: "Die Wurzel, die die EMA ernst nimmt",
      lead: "Die Europäische Arzneimittelagentur stuft Ingwer als »well-established use« gegen Reiseübelkeit ein. Fast kein anderer Pflanzenextrakt erreicht diese Klassifikation. Das Regal behandelt ihn trotzdem wie ein Gewürz.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `Ingwer enthält über vierhundert chemische Verbindungen. Die pharmakologisch relevanten sind Gingerole im frischen Rhizom und Shogaole im getrockneten. 6-Gingerol hemmt COX-2 und NF-kB, die zentralen Entzündungsschalter, die auch Ibuprofen adressiert. 6-Shogaol entsteht beim Trocknen durch Dehydratation und ist in vitro potenter als sein Vorläufer. Frischer Ingwer und getrockneter Ingwer sind pharmakologisch zwei verschiedene Zubereitungen. Auf keinem Etikett steht das.

Die Antiemese ist der am besten belegte Effekt. Vutyavanich 2001 testet ein Gramm Ingwerpulver täglich gegen Placebo bei 70 schwangeren Frauen mit Übelkeit und Erbrechen. Die Verum-Gruppe zeigt signifikant weniger Übelkeit und weniger Brechattacken. Ernst und Pittler 2000 fassen sechs randomisierte Studien zusammen. Seekrankheit, Schwangerschaftsübelkeit, Chemotherapie, alle positiv. Postoperative Übelkeit bleibt gemischt. Die EMA vergab trotzdem die höchste Klassifikation, die ein Phytopharmakon erreichen kann. Sechs Studien reichten. Die meisten Supplemente im Regal haben null.

Was weniger bekannt ist und pharmakologisch bemerkenswert. Ingwer beschleunigt die Magenentleerung. Wu 2008 misst per Ultraschall, dass ein Gramm Ingwer die Passage einer Testmahlzeit signifikant verkürzt. Eine Substanz, die gleichzeitig Übelkeit reduziert und die Motilität erhöht, widerspricht der Intuition. Die meisten Antiemetika bremsen den Magen. Ingwer beruhigt die Signale und beschleunigt den Transport. Der Wirkmechanismus läuft über serotonerge 5-HT3-Rezeptoren im Darm, dieselbe Bindungsstelle, die Ondansetron adressiert, das Standardmedikament gegen Chemotherapie-Übelkeit. Ondansetron kostet auf Rezept. Ingwer kostet im Supermarkt.

Die Entzündungshemmung bestätigt sich am Menschen bei Arthrose. Bartels 2015 findet in einer Metaanalyse moderate, signifikante Schmerzreduktion. Die Effektgröße liegt unter der von NSAID, aber Ingwer zerstört keinen Magen. Wer täglich Ibuprofen schluckt und von der Magenblutung liest, sollte wissen, dass eine Wurzel denselben Entzündungsweg adressiert, dosisabhängig, mit einem Nebenwirkungsprofil, das seit dreitausend Jahren empirisch getestet wird.

Die Supplement-Industrie verkauft Ingwer als Verdauungshilfe. Das stimmt und greift zu kurz. Die EMA-Einstufung, die COX-2-Hemmung, die 5-HT3-Affinität, die Arthrose-Daten, nichts davon steht auf der Packung. Was draufsteht, ist »für den Magen«. Was drin ist, hätte einen Beipackzettel verdient.`,
      quellen: [
        {
          autoren: "Tippawan Vutyavanich, Theerajana Kraisarin, Rung-Aroon Ruangsri",
          titel: "Ginger for nausea and vomiting in pregnancy: Randomized, double-masked, placebo-controlled trial",
          journal: "Obstetrics and Gynecology",
          vol: "Vol. 97, No. 4",
          datum: "April 2001",
          seiten: "577—582",
          pmid: "11275030",
        },
        {
          autoren: "Edzard Ernst, Max Pittler",
          titel: "Efficacy of ginger for nausea and vomiting: a systematic review of randomized clinical trials",
          journal: "British Journal of Anaesthesia",
          vol: "Vol. 84, No. 3",
          datum: "März 2000",
          seiten: "367—371",
          doi: "10.1093/oxfordjournals.bja.a013442",
          pmid: "10793599",
        },
        {
          autoren: "Kun-Ling Wu, Callum Rayner, Seng-Kee Chuah, et al.",
          titel: "Effects of ginger on gastric emptying and motility in healthy humans",
          journal: "European Journal of Gastroenterology and Hepatology",
          vol: "Vol. 20, No. 5",
          datum: "Mai 2008",
          seiten: "436—440",
          doi: "10.1097/MEG.0b013e3282f4b224",
          pmid: "18403946",
        },
        {
          autoren: "Else Bartels, Villads Folmer, Hans Bliddal, et al.",
          titel: "Efficacy and safety of ginger in osteoarthritis patients: a meta-analysis of randomized placebo-controlled trials",
          journal: "Osteoarthritis and Cartilage",
          vol: "Vol. 23, No. 1",
          datum: "Januar 2015",
          seiten: "13—21",
          doi: "10.1016/j.joca.2014.09.024",
          pmid: "25300574",
        },
        {
          autoren: "Iris Bischoff-Kont, Robert Fürst",
          titel: "Benefits of Ginger and Its Constituent 6-Shogaol in Inhibiting Inflammatory Processes",
          journal: "Pharmaceuticals",
          vol: "Vol. 14, No. 6",
          datum: "15.06.2021",
          seiten: "571",
          doi: "10.3390/ph14060571",
          pmid: "34208389",
        },
      ],
    },
    {
      slug: "olivenoel-oleocanthal-entzuendung",
      titel: "Das Öl, das im Hals brennt, wenn es gut ist",
      lead: "Frisches Olivenöl enthält einen COX-Hemmer mit der Potenz von Ibuprofen. Man erkennt ihn am Kratzen im Hals. Wenn das Öl nicht kratzt, fehlt der Wirkstoff.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `2005 saß der Sensorikforscher Gary Beauchamp auf einer Konferenz in Sizilien und probierte frisch gepresstes Olivenöl. Es brannte im Hals. Beauchamp kannte dieses Brennen. Er hatte jahrelang die sensorischen Eigenschaften von flüssigem Ibuprofen untersucht. Die Reizung saß an derselben Stelle, im selben Muster. Er nahm eine Probe mit nach Philadelphia.

Die Analyse bestätigte den Verdacht. Das Molekül heißt Oleocanthal, von oleo für Olive, canth für Stich, al für Aldehyd. Beauchamp publizierte die Ergebnisse in Nature. Oleocanthal hemmt COX-1 und COX-2 mit einer Potenz, die der von Ibuprofen auf molarer Basis entspricht. Derselbe Wirkmechanismus, dieselben Enzyme, ein anderes Molekül. In vier Esslöffeln hochwertigem Olivenöl steckt die entzündungshemmende Aktivität von etwa zehn Prozent einer Ibuprofen-Dosis. Täglich. Über Jahre. Ohne Magenblutung.

Hydroxytyrosol ist der zweite Wirkstoff, der zählt. Die EFSA hat 2011 eine Health Claim zugelassen, die einzige für ein Speiseöl. Olivenölpolyphenole schützen Blutfette vor oxidativem Stress, ab fünf Milligramm Hydroxytyrosol pro zwanzig Gramm Öl. Die meisten hochwertigen Extra-Vergine-Öle erreichen den Schwellenwert. Raffinierte Öle erreichen nichts.

Dann kam PREDIMED. Über 7400 Teilnehmer mit erhöhtem kardiovaskulärem Risiko, randomisiert auf mediterrane Diät mit Olivenöl, mediterrane Diät mit Nüssen oder fettreduzierte Kontrolldiät. Die Olivenöl-Gruppe zeigte eine Reduktion schwerer kardiovaskulärer Ereignisse um dreißig Prozent. Dreißig Prozent. Mit Essen. Keine Pharmafirma hat ein Medikament auf dem Markt, das in einer Studie dieser Größe ein vergleichbares Ergebnis liefert, ohne Nebenwirkungen.

Das Problem steht im Supermarkt. Die meisten Olivenöle, die dort als »Extra Vergine« verkauft werden, sind alt, falsch gelagert oder mit raffinierten Ölen verschnitten. Oleocanthal zerfällt bei Licht, Hitze und Zeit. Ein Öl, das nicht im Hals kratzt, hat seinen COX-Hemmer verloren. Das Brennen ist der Qualitätstest. Wer es wegzüchtet, züchtet die Pharmakologie heraus.

Vier Esslöffel am Tag. Frisch, dunkel gelagert, innerhalb eines Jahres nach der Ernte. Das kratzt im Hals und hemmt COX-2. Ibuprofen kratzt auch.`,
      quellen: [
        {
          autoren: "Gary Beauchamp, Russell Keast, Diane Morel, et al.",
          titel: "Phytochemistry: ibuprofen-like activity in extra-virgin olive oil",
          journal: "Nature",
          vol: "Vol. 437, No. 7055",
          datum: "01.09.2005",
          seiten: "45—46",
          doi: "10.1038/437045a",
          pmid: "16136122",
        },
        {
          autoren: "Ramón Estruch, Emilio Ros, Jordi Salas-Salvadó, et al.",
          titel: "Primary Prevention of Cardiovascular Disease with a Mediterranean Diet Supplemented with Extra-Virgin Olive Oil or Nuts",
          journal: "New England Journal of Medicine",
          vol: "Vol. 378, No. 25",
          datum: "21.06.2018",
          seiten: "e34",
          doi: "10.1056/NEJMoa1800389",
          pmid: "29897866",
        },
        {
          autoren: "Lisa Parkinson, Russell Keast",
          titel: "Oleocanthal, a phenolic derived from virgin olive oil: a review of the beneficial effects on inflammatory disease",
          journal: "International Journal of Molecular Sciences",
          vol: "Vol. 15, No. 7",
          datum: "Juli 2014",
          seiten: "12323—12334",
          doi: "10.3390/ijms150712323",
          pmid: "25019344",
        },
        {
          autoren: "Hisham Abuznait, Hisham Qosa, Belnaser Buber, et al.",
          titel: "Olive-oil-derived oleocanthal enhances β-amyloid clearance as a potential neuroprotective mechanism against Alzheimer's disease",
          journal: "ACS Chemical Neuroscience",
          vol: "Vol. 4, No. 6",
          datum: "Juni 2013",
          seiten: "973—982",
          doi: "10.1021/cn400024q",
          pmid: "23414128",
        },
        {
          autoren: "EFSA Panel on Dietetic Products, Nutrition and Allergies",
          titel: "Scientific Opinion on the substantiation of health claims related to polyphenols in olive",
          journal: "EFSA Journal",
          vol: "Vol. 9, No. 4",
          datum: "2011",
          seiten: "2033",
          doi: "10.2903/j.efsa.2011.2033",
        },
      ],
    },
    {
      slug: "brennnessel-urtica-prostata",
      titel: "Das Unkraut mit der Arzneimittelzulassung",
      lead: "Brennnessel hat sechs randomisierte Studien an über tausend Prostatapatienten. In Deutschland steht sie in der Pharmakopöe. Im Garten reißen die meisten sie raus.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `Wer als Kind in Brennnesseln gefallen ist, kennt den Wirkstoff. Die Brennhaare der Blätter brechen bei Berührung ab, durchstechen die Haut und injizieren ein Gemisch aus Histamin, Serotonin und Ameisensäure. Das brennt, weil es eine lokale Entzündungsreaktion ist. Die Pflanze impft dich mit ihren Botenstoffen. Dass dieselbe Pflanze Entzündung auch hemmen kann, hätte sich die Pharmakologie nicht ausgedacht.

Urtica dioica ist pharmakologisch zwei Pflanzen. Die Wurzel enthält Lignane und Phytosterole und adressiert die Prostata. Das Blatt enthält Flavonoide und Caffeoylsäure-Derivate und adressiert Entzündung und Allergie. Auf den meisten Etiketten steht »Brennnessel«. Kein Pflanzenteil, kein Hinweis, welches Organ gemeint ist. Wer eine Prostatawirkung erwartet und Blattextrakt kauft, kauft das Falsche.

Safarinejad 2005 testet Brennnesselwurzelextrakt an 620 Patienten mit benigner Prostatahyperplasie über sechs Monate, randomisiert, doppelblind, placebokontrolliert, mit Crossover. Die Symptome besserten sich signifikant unter Verum. Schneider 2004 bestätigt den Befund in einer zwölfmonatigen Multicenterstudie. Ghorbanibirgani 2013 repliziert an hundert Patienten. Sechs Studien, über tausend Patienten, alle in dieselbe Richtung. Für ein Unkraut ist das eine Datenbasis, die manches Medikament nicht vorweisen kann.

Die EMA führt Urtica-dioica-Wurzel als traditionell angewendet bei Prostatahyperplasie. In Deutschland ist Bazoton-uno als Phytopharmakon zugelassen, verschreibbar, erstattungsfähig. Dieselbe Pflanze, die der britische Rasenbesitzer als Plage betrachtet, hat in Deutschland eine Arzneimittelzulassung. Man muss sich entscheiden, welche Seite absurd ist.

Das Blatt arbeitet auf einem anderen Feld. Roschek 2009 zeigt, dass Brennnesselblattextrakt Histaminrezeptoren blockiert und Prostaglandin-D2-Synthese hemmt. Zwei Mechanismen, die erklären, warum Landbevölkerung seit Jahrhunderten bei Heuschnupfen Brennnesseltee trinkt. Die Oma wusste es, die Pharmakologie brauchte bis 2009. Kianbakht 2013 findet in einer placebokontrollierten Studie verbesserte Blutzuckerkontrolle bei Typ-2-Diabetes unter Brennnesselblattextrakt. Die Pflanze greift in den Glukosestoffwechsel ein. Aus dem Vorgarten.

Ein Unkraut, das mehr kann als die meisten Pillen im Regal. Es wächst am Straßenrand. Es kostet nichts. Und genau deshalb interessiert es keinen.`,
      quellen: [
        {
          autoren: "Mohammad Reza Safarinejad",
          titel: "Urtica dioica for treatment of benign prostatic hyperplasia: a prospective, randomized, double-blind, placebo-controlled, crossover study",
          journal: "Journal of Herbal Pharmacotherapy",
          vol: "Vol. 5, No. 4",
          datum: "2005",
          seiten: "1—11",
          pmid: "16635963",
        },
        {
          autoren: "Thomas Schneider, Herbert Rübben",
          titel: "Brennnesseltrockenextrakt (Bazoton-uno) in der Langzeittherapie des benignen Prostatasyndroms (BPS)",
          journal: "Der Urologe A",
          vol: "Vol. 43, No. 3",
          datum: "März 2004",
          seiten: "302—306",
          pmid: "15045190",
        },
        {
          autoren: "Alireza Ghorbanibirgani, Ali Khalili, Laleh Zamani",
          titel: "The efficacy of stinging nettle (Urtica dioica) in patients with benign prostatic hyperplasia: a randomized double-blind study in 100 patients",
          journal: "Iranian Red Crescent Medical Journal",
          vol: "Vol. 15, No. 1",
          datum: "Januar 2013",
          seiten: "9—10",
          doi: "10.5812/ircmj.2386",
          pmid: "23487561",
        },
        {
          autoren: "Brent Roschek, Ryan Fink, Matthew McMichael, et al.",
          titel: "Nettle extract (Urtica dioica) affects key receptors and enzymes associated with allergic rhinitis",
          journal: "Phytotherapy Research",
          vol: "Vol. 23, No. 7",
          datum: "Juli 2009",
          seiten: "920—926",
          doi: "10.1002/ptr.2763",
          pmid: "19140159",
        },
        {
          autoren: "Sedigheh Kianbakht, Faraz Khalighi-Sigaroodi, Fatemeh Hashem Dabaghian",
          titel: "Improved glycemic control in patients with advanced type 2 diabetes mellitus taking Urtica dioica leaf extract: a randomized double-blind placebo-controlled clinical trial",
          journal: "Clinical Laboratory",
          vol: "Vol. 59, No. 9—10",
          datum: "2013",
          seiten: "1071—1076",
          pmid: "24273930",
        },
      ],
    },
    {
      slug: "kokosoel-mct-laurinsaeure",
      titel: "Das Fett, das die Ernährungswissenschaft nicht einordnen kann",
      lead: "Kokosöl besteht zur Hälfte aus Laurinsäure, einem Antimikrobikum, das die Lipidhülle von Viren zerstört. Die American Heart Association behandelt es trotzdem wie Butter. Das sagt mehr über die AHA als über Kokosöl.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `Laurinsäure macht etwa fünfzig Prozent des Kokosöls aus. Sie ist eine mittelkettige Fettsäure mit zwölf Kohlenstoffatomen, und sie tötet Mikroben. Die Wirkung ist mechanisch. Laurinsäure und ihr Metabolit Monolaurin lösen die Lipidhülle umhüllter Viren auf und lysieren grampositive Bakterien. Kabara 1972 dokumentiert, dass Monolaurin in vitro gegen Staphylococcus aureus wirksamer ist als alle getesteten Antibiotika. Ein Speisefett mit antimikrobieller Wirkung, die stärker ist als Penicillin im Reagenzglas. Die Medizin hat stattdessen das Cholesterin gezählt.

2017 veröffentlichte die AHA ein Presidential Advisory, das Kokosöl in eine Reihe mit Butter und Schmalz stellte. Sacks und Kollegen argumentierten, es erhöhe LDL-Cholesterin. Das stimmt für Laurinsäure isoliert betrachtet. Was die AHA ignorierte, war die Kettenlänge. Mittelkettige Fettsäuren werden über die Pfortader direkt zur Leber transportiert und dort in Ketonkörper umgewandelt. Langkettige Fettsäuren gehen den Umweg über Chylomikronen ins Fettgewebe. Das metabolische Profil von Kokosöl unterscheidet sich von Butter so grundlegend, dass die Gleichsetzung über den Oberbegriff »gesättigtes Fett« pharmakologisch unseriös ist. Die AHA hat eine Kategorie benutzt, wo eine Analyse nötig gewesen wäre.

Dayrit 2015 beschreibt die Sondereigenschaften der Laurinsäure im Detail. Sie wird schneller absorbiert als langkettige Fettsäuren, erzeugt Ketonkörper für das Gehirn und liefert antimikrobielle Aktivität, die bei keiner anderen Fettsäure in dieser Konzentration vorkommt. Kein Pharmakonzern würde dieses Profil ignorieren. Die Ernährungswissenschaft hat es geschafft.

In Sri Lanka, den Philippinen und Polynesien ist Kokosöl seit Jahrhunderten die primäre Fettquelle. Lieberman 2006 untersucht Tokelau, wo über fünfzig Prozent der Kalorien aus Kokosnuss stammen. Die kardiovaskuläre Mortalität war niedrig, solange die Ernährung traditionell blieb. Sie stieg, als westliche Lebensmittel die Kokosnuss verdrängten. Das Fett, vor dem die AHA warnt, wurde durch die Ernährung ersetzt, die die AHA empfiehlt.

Antimikrobikum, Ketogenes, Kochfett. Drei Funktionen, eine Fettsäure. Die AHA hat eine gemessen und die anderen übersehen. Wenn dein Werkzeug nur Cholesterin zählen kann, sieht jedes Fett aus wie ein Herzinfarkt.`,
      quellen: [
        {
          autoren: "Jon Kabara, Dennis Swieczkowski, Anthony Conley, et al.",
          titel: "Fatty acids and derivatives as antimicrobial agents",
          journal: "Antimicrobial Agents and Chemotherapy",
          vol: "Vol. 2, No. 1",
          datum: "Juli 1972",
          seiten: "23—28",
          doi: "10.1128/AAC.2.1.23",
          pmid: "4670656",
        },
        {
          autoren: "Frank Sacks, Alice Lichtenstein, Jason Wu, et al.",
          titel: "Dietary fats and cardiovascular disease: a presidential advisory from the American Heart Association",
          journal: "Circulation",
          vol: "Vol. 136, No. 3",
          datum: "18.07.2017",
          seiten: "e1—e23",
          doi: "10.1161/CIR.0000000000000510",
          pmid: "28620111",
        },
        {
          autoren: "Fabian Dayrit",
          titel: "The properties of lauric acid and their significance in coconut oil",
          journal: "Journal of the American Oil Chemists' Society",
          vol: "Vol. 92, No. 1",
          datum: "Januar 2015",
          seiten: "1—15",
          doi: "10.1007/s11746-014-2562-7",
        },
        {
          autoren: "Seymour Lieberman, Mary Enig, Harry Preuss",
          titel: "A review of coconut oil's effect on cardiovascular risk factors",
          journal: "Natural Medicine Journal",
          datum: "2006",
        },
      ],
    },
    {
      slug: "szechuanpfeffer-sanshool-vibration",
      titel: "Das Gewürz, das die Lippen auf 50 Hertz vibrieren lässt",
      lead: "Szechuanpfeffer enthält Hydroxy-alpha-Sanshool, eine Substanz, die Mechanorezeptoren der Haut aktiviert und ein messbares Vibrieren bei 50 Hertz erzeugt. Das Kribbeln im Mund ist physikalisch real.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `Szechuanpfeffer gehört botanisch zu den Rautengewächsen, hat mit schwarzem Pfeffer so viel zu tun wie Erdnüsse mit Nüssen, und erzeugt statt Schärfe etwas, das sich anfühlt wie Strom. Ein leichtes Summen, das sich über die Lippen ausbreitet. Die meisten halten das für eine Art Schmerz, aber Szechuanpfeffer tut nicht weh. Er täuscht. Er aktiviert Berührungsrezeptoren mit einer Chemikalie. Der Mund meldet Vibration, obwohl nichts vibriert. Wer das einmal verstanden hat, traut seinen Sinnen nie wieder blind.

Der Wirkstoff heißt Hydroxy-alpha-Sanshool. Er gehört zur Klasse der N-Alkylamide, derselben Stoffgruppe wie Spilanthol aus der Parakresse. Koo 2007 identifiziert die molekularen Zielstrukturen. Sanshool aktiviert TRPV1 und TRPA1, die Kanäle, die auch auf Capsaicin und Senföl reagieren. Aber das ist nur die halbe Geschichte. Bautista 2008 zeigt in PNAS, dass Sanshool zusätzlich Zweiporenkaliumkanäle hemmt, KCNK3 und KCNK9. Diese Kanäle halten Nervenzellen in Ruhe. Wenn sie blockiert werden, feuern die Neurone spontan. Dieselben Kanäle adressieren Anästhesiemedikamente. Szechuanpfeffer betäubt nach demselben Prinzip, nach dem ein Zahnarzt betäubt. Die chinesische Medizin wusste das seit Jahrhunderten. Die Molekularbiologie brauchte bis 2008.

Hagura 2013 liefert die eleganteste Messung. In einer Studie am University College London trugen Probanden Szechuanpfeffer auf die Unterlippe auf und verglichen das Kribbeln mit mechanischen Vibrationen am Zeigefinger. Die wahrgenommene Frequenz lag bei 50 Hertz, plus minus 2,4. Das entspricht exakt dem Empfindlichkeitsbereich der RA1/Meissner-Mechanorezeptoren, der Fasern, die leichte Berührung und Vibration verarbeiten. Ein Gewürz, das die Lippen bei einer messbaren Frequenz vibrieren lässt. Die Neurologie hat dafür den Begriff »chemische Haptik« geprägt. Die Küche nennt es »Mala«.

Die sensorische Wirkung überschneidet sich mit der von Spilanthol, dem Wirkstoff der Parakresse. Beide sind N-Alkylamide, beide aktivieren trigeminale Fasern, beide erzeugen Parästhesien statt Schmerz. Der Unterschied liegt im Frequenzprofil und in der Latenz. Szechuanpfeffer setzt langsamer ein und hält länger an. In der Kombination erzeugen beide eine sensorische Tiefe, die kein einzelner Wirkstoff liefert.

Fünfzig Hertz. Die Frequenz eines europäischen Wechselstromnetzes. Ein Gewürz, das die Lippen auf Netzfrequenz bringt. Wer das Zufall nennt, hat keinen Sinn für die Pointen der Biochemie.`,
      quellen: [
        {
          autoren: "Jun Young Koo, Yanggu Jang, Hawon Cho, et al.",
          titel: "Hydroxy-alpha-sanshool activates TRPV1 and TRPA1 in sensory neurons",
          journal: "European Journal of Neuroscience",
          vol: "Vol. 26, No. 5",
          datum: "September 2007",
          seiten: "1139—1147",
          doi: "10.1111/j.1460-9568.2007.05743.x",
          pmid: "17767493",
        },
        {
          autoren: "Diana Bautista, Yaron Sigal, Aaron Milstein, et al.",
          titel: "Pungent agents from Szechuan peppers excite sensory neurons by inhibiting two-pore potassium channels",
          journal: "Nature Neuroscience",
          vol: "Vol. 11, No. 7",
          datum: "Juli 2008",
          seiten: "772—779",
          doi: "10.1038/nn.2143",
          pmid: "18568022",
        },
        {
          autoren: "Nobuhiro Hagura, Harry Barber, Patrick Haggard",
          titel: "Food vibrations: Asian spice sets lips trembling",
          journal: "Proceedings of the Royal Society B",
          vol: "Vol. 280, No. 1770",
          datum: "07.11.2013",
          seiten: "20131680",
          doi: "10.1098/rspb.2013.1680",
          pmid: "24026819",
        },
      ],
    },
    {
      slug: "kalium-elektrolyt-blutdruck",
      titel: "Das Defizit, das kein Blutbild zeigt",
      lead: "Die WHO empfiehlt 3510 Milligramm Kalium am Tag. Westliche Bevölkerungen nehmen im Schnitt 2500 auf. Die Differenz verursacht Bluthochdruck, Schlaganfälle und Knochenverlust. Kein Arzt misst sie.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `Kalium ist das häufigste Kation im Inneren jeder menschlichen Zelle. Es reguliert das Membranpotenzial. Ohne Kalium schlägt kein Herz, kontrahiert kein Muskel, leitet kein Nerv. Das weiß die Medizin. Sie handelt nur nicht danach.

Das Serumkalium liegt bei den meisten Menschen im Normbereich, selbst wenn das intrazelluläre Depot seit Jahren schrumpft. Der Serumwert fällt erst bei schwerer Depletion ab. Er verhält sich wie ein Bankkonto, das den Kontostand anzeigt, während die Altersvorsorge geplündert wird. Wer nur das Serum misst, verpasst den Mangel, der zählt. Ärzte messen das Serum. Sie messen es, weil es im Standardpanel steht. Und weil der Wert normal aussieht, sagen sie, alles sei in Ordnung.

Aburto 2013 hat für die WHO die Evidenz zusammengetragen. Eine systematische Übersichtsarbeit und Metaanalyse im BMJ. Erhöhte Kaliumzufuhr senkt den systolischen Blutdruck um 3,5 mmHg, den diastolischen um knapp 2 mmHg. Das Schlaganfallrisiko sinkt um 24 Prozent. Der Effekt ist dosisabhängig und bei Hypertonikern am stärksten. 24 Prozent weniger Schlaganfälle. Mit einem Mineral, das in Bananen steckt. Die WHO hat daraufhin 3510 Milligramm als Untergrenze empfohlen. Die meisten westlichen Ernährungsweisen liegen tausend Milligramm darunter.

Es gibt einen Faktor, der die Lücke vergrößert und auf keinem Etikett steht. Koffein steigert die renale Kaliumausscheidung. Jede Tasse Kaffee spült Kalium aus, und niemand rechnet es gegen. Eine Gesellschaft, die drei Tassen am Tag trinkt und sich kaliumarm ernährt, betreibt Elektrolyt-Raubbau, den kein Blutbild sichtbar macht.

Bananen liefern 360 Milligramm pro Stück. Avocados 485 Milligramm. Kokoswasser 600 Milligramm pro Portion. Die Lösung steht im Supermarkt, nicht in der Apotheke. Wer diese Quellen meidet und supplementiert, kauft sich eine Pille gegen ein Problem, das ein Glas Kokoswasser lösen würde. Aber Kokoswasser hat keine Vertriebsabteilung.`,
      quellen: [
        {
          autoren: "Nancy Aburto, Sara Hanson, Hialy Gutierrez, et al.",
          titel: "Effect of increased potassium intake on cardiovascular risk factors and disease: systematic review and meta-analyses",
          journal: "BMJ",
          vol: "Vol. 346",
          datum: "03.04.2013",
          seiten: "f1378",
          doi: "10.1136/bmj.f1378",
          pmid: "23558164",
        },
        {
          autoren: "World Health Organization",
          titel: "Guideline: Potassium intake for adults and children",
          dokument: "WHO, Genf · ISBN 978-92-4-150482-9",
          datum: "2012",
        },
        {
          autoren: "Tommaso Filippini, Androniki Naska, Maria-Iosifina Kasdagli, et al.",
          titel: "Potassium intake and blood pressure: a dose-response meta-analysis of randomized controlled trials",
          journal: "Journal of the American Heart Association",
          vol: "Vol. 9, No. 12",
          datum: "16.06.2020",
          seiten: "e015719",
          doi: "10.1161/JAHA.119.015719",
          pmid: "32500831",
        },
      ],
    },
    {
      slug: "wacholder-juniperus-terpinen",
      titel: "Die Beere mit vier Karrieren",
      lead: "Wacholder steht in der Europäischen Pharmakopöe und auf der Zutatenliste von Gin. Die Beere enthält über achtzig Monoterpene, ein kaliumsparendes Diuretikum und ein Breitband-Antimikrobikum. Das Regal verkauft sie als Gewürz.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `Im achtzehnten Jahrhundert war Genever ein Medikament. Ärzte verschrieben Wacholderschnaps bei Nierenleiden, Gelenkbeschwerden und Harnwegsinfekten. Die Pharmazie war real. Der Alkohol nur Lösungsmittel. Dann wurde Gin ein Konsumgut, die Beere verschwand aus der Medizin und tauchte hinter der Bar wieder auf. Was in der Flasche wirkt, hat sich nicht geändert. Nur wer es verschreibt.

Terpinen-4-ol ist der Schlüsselwirkstoff. Er macht die Wacholderbeere zum Diuretikum, indem er die glomeruläre Filtration steigert. Im Gegensatz zu Schleifendiuretika verschwendet er kein Kalium. Wer den Kalium-Essay gelesen hat, zuckt hier zusammen. Ein Diuretikum, das entwässert, ohne den Elektrolythaushalt zu ruinieren, ist pharmakologisch selten. Wacholder liefert es zwischen Sauerkraut und Wildbraten.

Das ätherische Öl aus der Beere hemmt in vitro grampositive und gramnegative Bakterien, Candida-Spezies und Dermatophyten. Raina 2019 fasst das antimikrobielle Spektrum in einem Review zusammen. Breiter als bei fast jeder Pflanze im Index. Alpha-Pinen, Sabinen, Limonen, Myrcen und Terpinen-4-ol arbeiten synergistisch, keine Einzelsubstanz erklärt die Wirkung allein. Wer ein synthetisches Antimykotikum mit diesem Spektrum auf den Markt bringen wollte, bräuchte Jahre klinischer Prüfung. Wer Wacholderbeeren kauft, braucht einen Supermarkt.

Die EMA führt Juniperus communis mit einer eigenen Monographie. Die Europäische Pharmakopöe listet sowohl die Beere als auch das ätherische Öl. EU-Verordnung 1576/89 verlangt, dass Gin seinen Geschmack hauptsächlich von Wacholderbeeren bezieht. Dieselbe Pflanze steht gleichzeitig im Arzneibuch und im Spirituosenrecht. Es gibt wenige Pflanzen, deren regulatorischer Spagat absurder ist.

Gewürz, Diuretikum, Antimikrobikum, Gin-Basis. Vier Karrieren für eine Beere. Die Medizin hat drei davon vergessen und trinkt die vierte.`,
      quellen: [
        {
          autoren: "Rajinder Raina, Pawan Verma, Rajesh Peshin, et al.",
          titel: "Potential of Juniperus communis L as a nutraceutical in human and veterinary medicine",
          journal: "Heliyon",
          vol: "Vol. 5, No. 8",
          datum: "August 2019",
          seiten: "e02376",
          doi: "10.1016/j.heliyon.2019.e02376",
          pmid: "31485546",
        },
        {
          autoren: "European Medicines Agency",
          titel: "Assessment report on Juniperus communis L., pseudo-fructus",
          dokument: "EMA/HMPC/441929/2008 Rev. 1, London",
          datum: "2011",
        },
        {
          autoren: "Souravh Bais, Naresh Singh Gill, et al.",
          titel: "A phytopharmacological review on a medicinal plant: Juniperus communis",
          journal: "International Scholarly Research Notices",
          vol: "Vol. 2014",
          datum: "2014",
          seiten: "634723",
          doi: "10.1155/2014/634723",
          pmid: "27355068",
        },
      ],
    },
    {
      slug: "petersilie-apigenin-nad",
      titel: "Das teuerste Kraut liegt neben dem Steak",
      lead: "Petersilie enthält pro hundert Gramm mehr Vitamin C als Orangen, mehr Vitamin K als jedes Gemüse im Supermarkt und Apigenin, einen CD38-Hemmer, der den NAD+-Abbau bremst. Die Gastronomie schiebt sie an den Tellerrand.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `Petersilie landet im Biomüll. Apigenin-Kapseln kosten dreißig Euro im Monat. Beides enthält denselben Wirkstoff. Die Zahlen pro hundert Gramm Petersilie: 133 Milligramm Vitamin C, 1640 Mikrogramm Vitamin K, 421 Mikrogramm Folat, 6,2 Milligramm Eisen. Eine Orange liefert 53 Milligramm Vitamin C. Spinat, das angebliche Eisenwunder, liefert 2,7 Milligramm Eisen. Petersilie schlägt beide, und niemand isst sie, weil alle glauben, sie sei Dekoration.

Der pharmakologisch relevanteste Inhaltsstoff heißt Apigenin. Escande 2013 publiziert in Diabetes, dass Apigenin CD38 hemmt, das Enzym, das in jeder Zelle NAD+ abbaut. CD38 ist der Haupttreiber des altersbedingten NAD+-Verlusts. Ein Bund Petersilie hemmt es für neunundneunzig Cent. In fettleibigen Mäusen erhöhte Apigenin die NAD+-Spiegel im Gewebe, senkte die globale Proteinacetylierung und verbesserte den Glukose- und Lipidstoffwechsel. Die Supplement-Industrie verkauft Apigenin-Kapseln für dreißig Euro im Monat. Petersilie kostet neunundneunzig Cent im Bund.

Myristicin, das zweite relevante Molekül, induziert Glutathion-S-Transferase und zeigt in vitro antikanzerogene Wirkung. Salehi 2019 fasst das therapeutische Potenzial von Apigenin in einem Review über 248 Quellen zusammen. Antioxidativ, antiinflammatorisch, antiproliferativ, neuroprotektiv. Vier Eigenschaften, die in jedem Longevity-Supplement einzeln verkauft werden. In Petersilie kommen sie zusammen, zum Preis eines Küchenkrauts.

Die Schwangerschaftswarnung gehört dazu. Petersilie ist in der traditionellen Phytotherapie als Emmenagogum bekannt. Hohe Dosen können Uteruskontraktionen auslösen. Die Garnitur auf dem Teller schadet niemandem. Der tägliche Petersilien-Smoothie bei Schwangeren ist eine andere Rechnung.

Ein Küchenkraut mit NAD+-Relevanz, das neben dem Hauptgericht liegt und zurück in die Küche geht. Wer Apigenin supplementiert und Petersilie wegwirft, bezahlt für seine eigene Ahnungslosigkeit.`,
      quellen: [
        {
          autoren: "Carlos Escande, Veronica Nin, Nathan Price, et al.",
          titel: "Flavonoid apigenin is an inhibitor of the NAD+ase CD38: implications for cellular NAD+ metabolism, protein acetylation, and treatment of metabolic syndrome",
          journal: "Diabetes",
          vol: "Vol. 62, No. 4",
          datum: "April 2013",
          seiten: "1084—1093",
          doi: "10.2337/db12-1139",
          pmid: "23172919",
        },
        {
          autoren: "Bahare Salehi, Alessandro Venditti, Marcello Sharifi-Rad, et al.",
          titel: "The therapeutic potential of apigenin",
          journal: "International Journal of Molecular Sciences",
          vol: "Vol. 20, No. 6",
          datum: "März 2019",
          seiten: "1305",
          doi: "10.3390/ijms20061305",
          pmid: "30875872",
        },
        {
          autoren: "Sami Alobaidi",
          titel: "Renal health benefits and therapeutic effects of parsley (Petroselinum crispum): a review",
          journal: "Frontiers in Medicine",
          vol: "Vol. 11",
          datum: "Dezember 2024",
          seiten: "1494740",
          doi: "10.3389/fmed.2024.1494740",
          pmid: "39735695",
        },
      ],
    },
    {
      slug: "biophotonen-ultraschwache-photonenemission",
      titel: "Das Licht, das beide Seiten ruiniert haben",
      lead: "Jede lebende Zelle emittiert messbare Photonen. Die Physik ist reproduziert, die Messung steht. Die Esoterik hat das Phänomen vereinnahmt, die Wissenschaft hat aufgehört hinzusehen. Beide haben versagt.",
      filter: ["Unklar"],
      date: "2026-06-22",
      body: `1922 beschreibt der russische Biologe Alexander Gurwitsch eine ultraschwache Strahlung, die von Zwiebelwurzeln ausgeht und in Nachbarzellen die Zellteilung stimuliert. Die Fachwelt ignoriert ihn. In den 1970er Jahren baut der deutsche Biophysiker Fritz-Albert Popp Photomultiplier-Systeme, die empfindlich genug sind, um das zu messen, was Gurwitsch behauptet hatte. Das Ergebnis war eindeutig. Jede lebende Zelle emittiert zwischen einem und einigen hundert Photonen pro Sekunde pro Quadratzentimeter, im Bereich von 200 bis 800 Nanometern. Popp nennt sie Biophotonen.

Die Quellen sind identifiziert. Oxidative Prozesse in der mitochondrialen Atmungskette und Lipidperoxidation an Zellmembranen erzeugen die Emission. Tumorzellen emittieren messbar anders als gesunde Zellen. Gestresste Pflanzen emittieren anders als ungestresste. Keimfähige Sojabohnen emittieren doppelt so stark wie nicht keimfähige. Die Messung ist reproduziert, in unabhängigen Laboren, über Jahrzehnte. Die Physik steht.

Dann kam die Interpretation. Popp selbst postulierte, die Emission sei kohärent und reguliere zelluläre Prozesse. Cifra und Pospíšil widersprechen in einer kritischen Analyse 2015 und nennen die Kohärenz-Interpretation umstritten und in der Fachwelt nicht akzeptiert. Die Daten zur Emission stehen. Die Theorie, dass Licht der fundamentale Regulator des Lebens sei, steht auf dünnerem Eis.

Was danach passierte, hat den Schaden vervollständigt. Die Esoterik-Szene hat Biophotonen zu »Lebensenergie« erklärt und mit Reiki, Kristallheilung und »biophotonischen Lebensmitteln« verknüpft. Die Messdaten wurden in einen Sumpf gezogen, aus dem die seriöse Forschung sich kaum noch heraustraut. Wer heute »Biophotonen« googelt, findet zehn Esoterik-Shops und eine Pubmed-Suche.

Zellen leuchten. Das ist gemessen, reproduziert und publiziert. Wer das für Esoterik hält, hat die Daten nie gelesen. Wer daraus Lebensenergie macht, hat sie missbraucht. Das Phänomen verdient Forschung. Es hat Fans und Feinde bekommen. Beide haben aufgehört zu lesen.`,
      quellen: [
        {
          autoren: "Fritz-Albert Popp, Yan Yu",
          titel: "Biophoton emission of the human body",
          journal: "Indian Journal of Experimental Biology",
          vol: "Vol. 41",
          datum: "Mai 2003",
          seiten: "440—445",
          pmid: "15244259",
        },
        {
          autoren: "Roeland Van Wijk, Eduard Van Wijk",
          titel: "An introduction to human biophoton emission",
          journal: "Forschende Komplementärmedizin und Klassische Naturheilkunde",
          vol: "Vol. 12, No. 2",
          datum: "April 2005",
          seiten: "77—83",
          doi: "10.1159/000083763",
          pmid: "15947465",
        },
        {
          autoren: "Michal Cifra, Pavel Pospíšil",
          titel: "Biophotons, coherence and photocount statistics: a critical review",
          dokument: "arXiv:1502.07316 (Preprint)",
          datum: "Februar 2015",
        },
        {
          autoren: "Jamie K. Adams, Daqing Piao, et al.",
          titel: "Ultra weak photon emission — a brief review",
          journal: "Frontiers in Physiology",
          vol: "Vol. 15",
          datum: "Januar 2024",
          seiten: "1348915",
          doi: "10.3389/fphys.2024.1348915",
          pmid: "38384806",
        },
      ],
    },
    {
      slug: "zitronenverbene-verbascoside-sport",
      titel: "Das Antioxidans, das die Anpassung nicht sabotiert",
      lead: "Hochdosiertes Vitamin C nach dem Sport kann die Trainingsanpassung blockieren. Zitronenverbene schützt die Muskeln, ohne die Adaptation zu stören. Das macht sie pharmakologisch einzigartig unter den Antioxidantien.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `Millionen Menschen schlucken nach dem Training Vitamin C, um ihre Muskeln zu schützen. Sie sabotieren damit die Anpassung, für die sie trainiert haben. Zitronenverbene macht beides: schützen und die Anpassung in Ruhe lassen. In Frankreich und Spanien trinkt man sie abends als Verveine und ahnt nicht, dass in der Tasse ein Phenylpropanoid sitzt, das die Sportmedizin seit 2011 untersucht.

Der Wirkstoff heißt Verbascoside. Die antioxidative Kapazität von Zitronenverbene-Extrakt übertrifft im ORAC-Test die von Grüntee. Funes 2011 testet den Extrakt an fünfzehn männlichen Läufern über 21 Tage chronischen Trainings. Die Marker für oxidativen Stress und Muskelschäden sinken signifikant unter Verum. Proinflammatorische Zytokine werden gedämpft. Die zelluläre Adaptation an das Training bleibt intakt.

Hochdosiertes Vitamin C und Vitamin E nach dem Training blockieren die Trainingsanpassung. Reaktive Sauerstoffspezies nach dem Sport sind Signalmoleküle, die den Körper zur Adaptation zwingen. Wer sie mit Megadosen löscht, löscht das Signal mit. Die Supplement-Industrie verkauft das als Regeneration. Es ist das Gegenteil. Zitronenverbene reduziert den Schaden, ohne die Botschaft zu unterdrücken. Buchwald-Werner 2018 bestätigt den Befund in einer randomisierten, placebokontrollierten Studie an 44 Probanden mit 400 Milligramm Extrakt täglich. Weniger Muskelschaden, weniger Kraftverlust, keine blockierte Adaptation.

Afrasiabian 2019 liefert die Schlaf-Evidenz. Eine randomisierte, doppelblinde, placebokontrollierte Studie an Insomnie-Patienten zeigt verbesserte Schlafqualität unter Zitronenverbene-Extrakt. Der Abendtee der französischen Großmutter hat jetzt eine RCT.

Ein Kraut, das Sportler schützt, ohne ihre Fortschritte zu sabotieren, und abends beim Einschlafen hilft. Die Supplement-Industrie verkauft stattdessen Vitamin-C-Megadosen, die genau das Gegenteil tun. Der Abendtee der französischen Großmutter hat jetzt eine RCT. Die Brausetablette nach dem Fitnessstudio wartet noch auf den Beweis, dass sie keinen Schaden anrichtet.`,
      quellen: [
        {
          autoren: "Lorena Funes, Lucrecia Carrera-Quintanar, Manuela Cerdán-Calero, et al.",
          titel: "Effect of lemon verbena supplementation on muscular damage markers, proinflammatory cytokines release and neutrophils' oxidative stress in chronic exercise",
          journal: "European Journal of Applied Physiology",
          vol: "Vol. 111, No. 4",
          datum: "April 2011",
          seiten: "695—705",
          doi: "10.1007/s00421-010-1684-3",
          pmid: "20967458",
        },
        {
          autoren: "Sybille Buchwald-Werner, Ioanna Naka, Manfred Wilhelm, et al.",
          titel: "Effects of lemon verbena extract (Recoverben) supplementation on muscle strength and recovery after exhaustive exercise: a randomized, placebo-controlled trial",
          journal: "Journal of the International Society of Sports Nutrition",
          vol: "Vol. 15, No. 1",
          datum: "Januar 2018",
          seiten: "13",
          doi: "10.1186/s12970-018-0208-0",
          pmid: "29382402",
        },
        {
          autoren: "Fatemeh Afrasiabian, Mozafar Mirabzadeh Ardakani, Kourosh Rahmani, et al.",
          titel: "Aloysia citriodora Palau (lemon verbena) for insomnia patients: a randomized, double-blind, placebo-controlled clinical trial of efficacy and safety",
          journal: "Phytotherapy Research",
          vol: "Vol. 33, No. 2",
          datum: "Februar 2019",
          seiten: "350—359",
          doi: "10.1002/ptr.6228",
          pmid: "30450627",
        },
      ],
    },
    {
      slug: "probiotika-staemme-evidenz",
      titel: "Zwanzig Milliarden Keime, null Belege",
      lead: "Die Supplement-Industrie verkauft Probiotika nach Milliarden und Stämmen. Mehr klingt nach besser. Die Evidenz sagt: weniger, aber geprüft. Nur einzelne Stämme haben Belege. Der Rest ist Arithmetik für Ahnungslose.",
      filter: ["Überschätzt"],
      date: "2026-06-22",
      body: `Auf dem Etikett steht »20 Milliarden KBE, 14 Stämme«. Es klingt nach Feuerkraft. Mehr Stämme, breiteres Spektrum, besserer Schutz. Die Studienlage sagt etwas anderes. Die meisten Multi-Stamm-Präparate sind in keiner kontrollierten Studie besser als Placebo. Die Stämme, die funktionieren, funktionieren einzeln, bei definierten Indikationen, in definierten Dosierungen. Alles andere ist Lotterie in Kapselform.

LGG hat über 1500 Publikationen. Bei akuter Gastroenteritis im Kindesalter verkürzt er die Durchfalldauer um einen Tag. Bei antibiotikaassoziierter Diarrhö halbiert er die Inzidenz. Bei atopischer Dermatitis senkt pränatale und postnatale Gabe die Ekzem-Rate über vier Jahre. Drei Indikationen, drei Metaanalysen, ein Stamm. Saccharomyces boulardii ist eine Hefe und damit gegen Antibiotika immun. Jedes bakterielle Probiotikum wird vom Antibiotikum mitgetötet. S. boulardii überlebt und reduziert die Rezidivrate bei Clostridium-difficile-Infektionen. Bacillus coagulans bildet Sporen, die Magensäure, Hitze und Lagerung überstehen. Überlebensrate über neunzig Prozent bis zum Dünndarm, verglichen mit fünf bis fünfzehn Prozent bei den meisten Lactobacillen. Drei Stämme für drei Indikationen mit messbaren Effekten. Daneben im Regal stehen Produkte, die vierzehn ungeprüfte Stämme mischen und die Milliardenzahl auf dem Etikett drucken. Die Zahl misst nichts außer Marketing. Ein Produkt mit einem Stamm und einer Metaanalyse schlägt ein Produkt mit vierzehn Stämmen und null Studien. Aber das eine verkauft sich schlechter, weil vierzehn größer klingt als eins.

Tausend Studien stehen im selben Regal wie null Studien. Das Etikett unterscheidet nicht. Der Preis auch nicht.`,
      quellen: [
        {
          autoren: "Hania Szajewska, Maria Skórka, Ewa Ruszczyński, et al.",
          titel: "Meta-analysis: Lactobacillus GG for treating acute gastroenteritis in children — updated analysis of randomised controlled trials",
          journal: "Alimentary Pharmacology and Therapeutics",
          vol: "Vol. 38, No. 5",
          datum: "September 2013",
          seiten: "467—476",
          doi: "10.1111/apt.12403",
          pmid: "23841880",
        },
        {
          autoren: "Marko Kalliomäki, Seppo Salminen, Heikki Arvilommi, et al.",
          titel: "Probiotics in primary prevention of atopic disease: a randomised placebo-controlled trial",
          journal: "The Lancet",
          vol: "Vol. 357, No. 9262",
          datum: "April 2001",
          seiten: "1076—1079",
          doi: "10.1016/S0140-6736(00)04259-8",
          pmid: "11297958",
        },
        {
          autoren: "Lynne McFarland",
          titel: "Meta-analysis of probiotics for the prevention of antibiotic associated diarrhea and the treatment of Clostridium difficile disease",
          journal: "American Journal of Gastroenterology",
          vol: "Vol. 101, No. 4",
          datum: "April 2006",
          seiten: "812—822",
          doi: "10.1111/j.1572-0241.2006.00465.x",
          pmid: "16635227",
        },
      ],
    },
    {
      slug: "akkermansia-muciniphila-darmbarriere",
      titel: "Der Keim, der tot besser wirkt als lebendig",
      lead: "Akkermansia muciniphila frisst die Schleimhaut des Darms und repariert sie dabei. Pasteurisiert wirkt besser als lebend. Beides widerspricht allem, was die Probiotika-Industrie über Darmbakterien erzählt.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `Die gesamte Probiotika-Werbung basiert auf einer Prämisse: lebende Bakterien sind gut für den Darm. Mehr davon, besser davon, Milliarden davon. Dann kommt ein Bakterium, das pasteurisiert besser wirkt als lebendig, und die Prämisse bricht zusammen.

Akkermansia muciniphila lebt in der Mukusschicht des Darms und ernährt sich von Muzin, dem Schleimprotein der Darmwand. Das klingt nach Angriff. Es ist Renovierung. Der Abbau alter Muzinschichten stimuliert die Becherzellen zur Produktion neuer Schichten. Die Darmbarriere wird frischer, dichter, widerstandsfähiger. Konsum als Erneuerungssignal. Kein Marketingtexter hätte sich den Mechanismus ausgedacht.

Die erste Humanstudie erscheint 2019 in Nature Medicine. Vierzig übergewichtige, insulinresistente Erwachsene, randomisiert, doppelblind, placebokontrolliert, drei Monate. Pasteurisiertes Akkermansia verbessert die Insulinsensitivität um 29 Prozent, senkt das Insulin um 34 Prozent, das Gesamtcholesterin um knapp neun Prozent. Lebendiges Akkermansia zeigt schwächere Effekte, die Signifikanz wackelt. Der tote Keim schlägt den lebenden. Die Erklärung liefert eine Mausstudie von 2017. Das Membranprotein Amuc_1100 ist hitzestabil und aktiviert den Toll-like-Rezeptor 2 auf Immunzellen. Die Pasteurisierung zerstört das Bakterium und legt den Wirkstoff frei.

Seit 2022 ist Akkermansia muciniphila in der EU als Novel Food zugelassen. Das erste Darmbakterium im Supplement-Regal. Entdeckt wurde es per Sequenzierung, weil Kulturmedien es nie isoliert hatten. Das allein disqualifiziert es im Weltbild der klassischen Probiotika-Industrie, die immer noch Lebendkeimzahlen auf Etiketten druckt, als wäre Überleben im Darm das Qualitätskriterium. Akkermansia beweist das Gegenteil. Der Wirkstoff überlebt das Bakterium.`,
      quellen: [
        {
          autoren: "Clara Depommier, Amandine Everard, Céline Druart, et al.",
          titel: "Supplementation with Akkermansia muciniphila in overweight and obese human volunteers: a proof-of-concept exploratory study",
          journal: "Nature Medicine",
          vol: "Vol. 25, No. 7",
          datum: "Juli 2019",
          seiten: "1096—1103",
          doi: "10.1038/s41591-019-0495-2",
          pmid: "31263284",
        },
        {
          autoren: "Hubert Plovier, Amandine Everard, Céline Druart, et al.",
          titel: "A purified membrane protein from Akkermansia muciniphila or the pasteurized bacterium improves metabolism in obese and diabetic mice",
          journal: "Nature Medicine",
          vol: "Vol. 23, No. 1",
          datum: "Januar 2017",
          seiten: "107—113",
          doi: "10.1038/nm.4236",
          pmid: "27892954",
        },
      ],
    },
    {
      slug: "praebiotika-ballaststoffe-butyrat",
      titel: "Das Futter, das wichtiger ist als der Keim",
      lead: "Die Supplement-Industrie verkauft Probiotika für dreißig Euro im Monat. Was die gekauften Keime am Leben hält, sind Ballaststoffe, die in Haferflocken, kalten Kartoffeln und Chicorée stecken. Niemand wirbt dafür, weil sich Hafer schlecht patentieren lässt.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `Probiotika sind die Gäste. Präbiotika sind das Futter. Wer Milliarden Keime schluckt und sie nicht füttert, betreibt Ansiedlungspolitik ohne Infrastruktur. Die Keime verhungern, und das Etikett hat trotzdem funktioniert, weil es verkauft wurde, bevor es wirken musste.

Inulin aus der Chicorée-Wurzel ist das am besten belegte Präbiotikum im Index. Über dreißig Vergleichsstudien bestätigen, dass es gezielt die nützlichen Darmbakterien füttert und die Calciumaufnahme verbessert. Die Sättigung steigt, weil der Darm Hormone ausschüttet, die dem Gehirn melden, dass genug da ist. Das Hauptproblem ist die Gasbildung. Inulin fermentiert schnell und am falschen Ende des Dickdarms. Wer empfindlich reagiert, bekommt Krämpfe. Das effektivste Präbiotikum ist gleichzeitig das unverträglichste.

Akazienfaser umgeht genau dieses Problem. Dieselbe Wirkung auf die Darmflora, aber die Fermentation verteilt sich über den gesamten Dickdarm statt sich am Eingang zu stauen. Fermentiert wie Inulin, verträglich wie Reis, und im Supplement-Regal unsichtbar.

Resistente Stärke übertrifft beide in einem Punkt. Sie wird im Darm zu Butyrat fermentiert, dem Stoff, der die Darmschleimhaut ernährt und schützt. Studien zeigen verbesserte Insulinsensitivität und flachere Blutzuckerkurven nach dem Essen. Eine große Langzeitstudie dokumentiert sogar reduzierte Krebsraten bei genetisch vorbelasteten Patienten. Die Quelle von resistenter Stärke sind gekochte und abgekühlte Kartoffeln, Reis und Nudeln. Kalte Kartoffeln vom Vortag enthalten mehr Medizin als die meisten Kapseln im Regal.

Drei Ballaststoffe, drei Fermentationsprofile, alle billig, alle belegt. Die Probiotika-Industrie verkauft den Gast. Das Futter erwähnt sie selten. Weil Futter kein Branding hat.`,
      quellen: [
        {
          autoren: "Marcel Roberfroid, Glenn Gibson, Lesley Hoyles, et al.",
          titel: "Prebiotic effects: metabolic and health benefits",
          journal: "British Journal of Nutrition",
          vol: "Vol. 104, Suppl. 2",
          datum: "August 2010",
          seiten: "S1—S63",
          doi: "10.1017/S0007114510003363",
          pmid: "20920376",
        },
        {
          autoren: "Wim Calame, André Weseler, Claudia Viebke, et al.",
          titel: "Gum arabic establishes prebiotic functionality in healthy human volunteers in a dose-dependent manner",
          journal: "British Journal of Nutrition",
          vol: "Vol. 100, No. 6",
          datum: "Dezember 2008",
          seiten: "1269—1275",
          doi: "10.1017/S0007114508981447",
          pmid: "18466655",
        },
        {
          autoren: "Michael David Robertson, Alex Bickerton, A. Louise Dennis, et al.",
          titel: "Insulin-sensitizing effects of dietary resistant starch and effects on skeletal muscle and adipose tissue metabolism",
          journal: "American Journal of Clinical Nutrition",
          vol: "Vol. 82, No. 3",
          datum: "September 2005",
          seiten: "559—567",
          doi: "10.1093/ajcn/82.3.559",
          pmid: "16155268",
        },
        {
          autoren: "John Burn, Dorothy Bishop, Julia Mecklin, et al.",
          titel: "Effect of aspirin or resistant starch on colorectal neoplasia in the Lynch syndrome",
          journal: "New England Journal of Medicine",
          vol: "Vol. 383, No. 7",
          datum: "August 2020",
          seiten: "752—763",
          doi: "10.1056/NEJMoa1801527",
          pmid: "32813948",
        },
      ],
    },
    {
      slug: "ala-nac-glutathion-recycling",
      titel: "Das Antioxidans, das alle anderen recycelt",
      lead: "Alpha-Liponsäure ist das einzige Antioxidans, das sowohl in Wasser als auch in Fett arbeitet. Es regeneriert verbrauchtes Glutathion, Vitamin C und Vitamin E zurück in ihre aktive Form. Die Supplement-Industrie verkauft lieber die Einzelteile.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `Glutathion ist das zentrale Antioxidans jeder menschlichen Zelle. Sein Spiegel sinkt mit dem Alter, bei Lebererkrankungen und unter oxidativem Stress. Die Supplement-Industrie verkauft es als Kapsel. Die Kapsel löst sich im Darm auf, Peptidasen zerlegen das Tripeptid in seine Aminosäuren, und der Wirkstoff kommt nie an. Nur die liposomale Form zeigt in einer kontrollierten Studie messbar erhöhte intrazelluläre Spiegel über sechs Monate. Das Regal verkauft das Ziel. Was fehlt, ist der Weg.

NAC liefert die limitierende Aminosäure Cystein, die die Zelle braucht, um Glutathion selbst zu bauen. In der Notaufnahme rettet NAC Lebern bei Paracetamol-Vergiftung, indem es die Glutathion-Speicher schneller auffüllt, als das Toxin sie leert. Chronisch eingenommen erhöht es den Glutathion-Spiegel zuverlässiger als Glutathion-Kapseln. In der Psychiatrie reduziert es über Glutamat-Modulation Zwangssymptome und Substanzverlangen. Eine Substanz, die in der Notaufnahme Lebern rettet und im Regal als Erkältungsmittel steht.

Alpha-Liponsäure hält das System zusammen. Sie arbeitet in Wasser und Fett, überall dort, wo Zellen kaputtgehen. Sie recycelt verbrauchtes Glutathion, Vitamin C und E zurück in ihre aktive Form. Sonst kann das nichts. Bei diabetischer Neuropathie reduziert sie Schmerzen, belegt in zwei großen Studien. Sie cheliert Schwermetalle. Sie repariert, was andere Antioxidantien liegen lassen. Das alles gilt für das R-Enantiomer. Im Handel dominiert das Racemat. Fünfzig Prozent davon sind biologisch tot. Der Preis bleibt gleich. Die Verpackung schweigt. So funktioniert eine Branche, die Gesundheit verkauft und Marge meint.

Drei Substanzen, ein System. Glutathion ist das Ziel, NAC ist das Baumaterial, ALA ist der Mechaniker, der alles wieder instand setzt. Die Industrie verkauft alle drei einzeln und erklärt den Zusammenhang nie.`,
      quellen: [
        {
          autoren: "Dan Ziegler, Alexander Ametov, Alexei Barinov, et al.",
          titel: "Oral treatment with alpha-lipoic acid improves symptomatic diabetic polyneuropathy: the SYDNEY 2 trial",
          journal: "Diabetes Care",
          vol: "Vol. 29, No. 11",
          datum: "November 2006",
          seiten: "2365—2370",
          doi: "10.2337/dc06-1216",
          pmid: "17065669",
        },
        {
          autoren: "Dan Ziegler, Philip Low, William Litchy, et al.",
          titel: "Efficacy and safety of antioxidant treatment with α-lipoic acid over 4 years in diabetic polyneuropathy",
          journal: "Diabetes Care",
          vol: "Vol. 34, No. 9",
          datum: "September 2011",
          seiten: "2054—2060",
          doi: "10.2337/dc11-0503",
          pmid: "21775755",
        },
        {
          autoren: "Ruchi Sinha, Devin Sinha, Sampath Parthasarathy, et al.",
          titel: "Oral supplementation with liposomal glutathione elevates body stores of glutathione and markers of immune function",
          journal: "European Journal of Clinical Nutrition",
          vol: "Vol. 72, No. 1",
          datum: "Januar 2018",
          seiten: "105—111",
          doi: "10.1038/ejcn.2017.132",
          pmid: "28853742",
        },
        {
          autoren: "Kenneth Heard",
          titel: "Acetylcysteine for acetaminophen poisoning",
          journal: "New England Journal of Medicine",
          vol: "Vol. 359, No. 3",
          datum: "Juli 2008",
          seiten: "285—292",
          doi: "10.1056/NEJMct0708278",
          pmid: "18635433",
        },
      ],
    },
    {
      slug: "chlorella-spirulina-detox-kontamination",
      titel: "Die Algen, die entgiften sollen und selbst vergiftet sind",
      lead: "Chlorella und Spirulina werden als Detox-Superfoods verkauft. Kontrollierte Humanstudien zur Schwermetall-Ausleitung existieren praktisch nicht. Dafür existieren Laboranalysen, in denen die Algen selbst mit Blei, Cadmium und Arsen kontaminiert sind.",
      filter: ["Überschätzt"],
      date: "2026-06-22",
      body: `Chlorella bindet Schwermetalle. Das ist das Versprechen. Millionen Menschen schlucken die Tabletten mit genau dieser Erwartung. Die Evidenz dafür besteht aus Tierstudien mit Cadmium, deren Dosierungen und Expositionsszenarien auf den Menschen nicht übertragbar sind. Kontrollierte Humanstudien zur systemischen Schwermetall-Ausleitung durch Chlorella-Einnahme fehlen. Das Versprechen lebt von Wiederholung, nicht von Belegen.

Was belegt ist, schadet dem Produkt. Chlorella-Kulturen akkumulieren Schwermetalle aus dem Kulturmedium. Offene Kulturbecken, besonders in Asien, produzieren regelmäßig Ware mit Blei-, Cadmium- und Arsenkonzentrationen über den Grenzwerten. Wer ein Detox-Supplement kauft und die Kontamination mitschluckt, importiert das Problem, das er loswerden wollte.

Spirulina teilt das Muster. Sechzig bis siebzig Prozent Protein, B-Vitamine, Eisen, Phycocyanin mit antioxidativer Wirkung. Die Nährstoffdichte stimmt. Moderate LDL-Senkung und Immunmodulation sind in Studien belegt. Bei allergischer Rhinitis reduziert Spirulina die Symptomscores. Konsistente Befunde, keine Schlagzeilen. Das Detox-Marketing ist trotzdem unbegründet. Spirulina cheliert im menschlichen Körper keine Schwermetalle zuverlässig. Und offene Kulturbecken sammeln Mikrocystine aus Cyanobakterien-Kontamination, ein Lebertoxin, das in nicht-zertifizierter Ware regelmäßig auftaucht.

Beide Algen enthalten echte Nährstoffe. Protein, Eisen, Chlorophyll, Phycocyanin. Nichts davon ist exklusiv, nichts davon rechtfertigt den Preis gegenüber Ei, Spinat oder Brokkoli. Das Detox-Versprechen ist das einzige Alleinstellungsmerkmal. Und es existiert nur im Marketing.

Die Algen sind selbst das Problem, das sie lösen sollen. Wer das Ironie nennt, ist zu höflich.`,
      quellen: [
        {
          autoren: "Rui Deng, Theodore Chow",
          titel: "Hypolipidemic, antioxidant and antiinflammatory activities of microalgae Spirulina",
          journal: "Cardiovascular Therapeutics",
          vol: "Vol. 28, No. 4",
          datum: "August 2010",
          seiten: "e33—e45",
          doi: "10.1111/j.1755-5922.2010.00200.x",
          pmid: "20633020",
        },
        {
          autoren: "Cemal Cingi, Müge Conk-Dalay, Hasan Cakli, et al.",
          titel: "The effects of spirulina on allergic rhinitis",
          journal: "European Archives of Oto-Rhino-Laryngology",
          vol: "Vol. 265, No. 10",
          datum: "Oktober 2008",
          seiten: "1219—1223",
          doi: "10.1007/s00405-008-0642-8",
          pmid: "18343939",
        },
      ],
    },
    {
      slug: "glutamin-zink-carnosin-schleimhaut",
      titel: "Zwei Substanzen für eine Wand, die niemand sieht",
      lead: "L-Glutamin ist der Hauptenergieträger der Darmschleimhaut. Zink-Carnosin ist in Japan als Magenmedikament zugelassen. Im Westen wird das eine für den Bizeps verkauft und das andere kennt niemand.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `Die Darmschleimhaut erneuert sich alle drei bis fünf Tage. Kein Gewebe im Körper hat eine höhere Zellteilungsrate. Der Brennstoff dafür ist Glutamin, die häufigste Aminosäure im Blutplasma. Ohne Glutamin hungern die Enterozyten, die Barriere wird durchlässig, Bakterien und Endotoxine passieren in den Blutkreislauf. Bei Intensivpatienten sinkt der Plasmaspiegel regelmäßig unter die Hälfte. Bei Chemotherapie-Patienten zerfällt die Mukosa. Glutamin-Supplementierung verbessert in beiden Fällen die Barrierefunktion messbar, reduziert Mukositis und senkt bei Verbrennungspatienten die Infektionsrate.

Die Fitness-Industrie verkauft Glutamin als Muskelregenerationsmittel. Die Datenlage für diese Indikation bei gesunden Sportlern wackelt seit Jahren. Was funktioniert, ist der Darm. Was verkauft wird, ist der Bizeps. Das Etikett zeigt einen Oberarm, die Evidenz zeigt eine Darmzotte.

Zink-Carnosin arbeitet auf der anderen Seite der Wand. Der Chelatkomplex aus Zink und L-Carnosin im Verhältnis 1:1 dissoziiert langsam im Magen und reichert sich an geschädigten Stellen an. In Japan ist die Substanz unter dem Namen Polaprezinc als Arzneimittel gegen Magengeschwüre zugelassen. Eine placebokontrollierte Studie zeigt beschleunigte Ulkusheilung. Bei NSAID-induzierter Gastropathie sinkt die intestinale Permeabilität. Bei Helicobacter-Eradikation verbessert Zink-Carnosin die Erfolgsrate der Tripletherapie. In Japan verschreibungspflichtig. Im Westen ein obskures Nischensupplement, das in keiner Apotheke liegt.

Zwei Substanzen, eine Aufgabe: die Wand reparieren, die den Körper vom Darminhalt trennt. Die eine wird für den falschen Zweck verkauft. Die andere wird gar nicht verkauft. Die Darmschleimhaut fragt nicht nach Marketing.`,
      quellen: [
        {
          autoren: "Ruurd van der Hulst, Maarten von Meyenfeldt, Nicolaas Deutz, et al.",
          titel: "Glutamine and the preservation of gut integrity",
          journal: "The Lancet",
          vol: "Vol. 341, No. 8857",
          datum: "Mai 1993",
          seiten: "1363—1365",
          doi: "10.1016/0140-6736(93)90939-E",
          pmid: "8098789",
        },
        {
          autoren: "Adeel Mahmood, Anthony FitzGerald, Tanya Marchbank, et al.",
          titel: "Zinc carnosine, a health food supplement that stabilises small bowel integrity and stimulates gut repair processes",
          journal: "Gut",
          vol: "Vol. 56, No. 2",
          datum: "Februar 2007",
          seiten: "168—175",
          doi: "10.1136/gut.2006.099929",
          pmid: "16777920",
        },
      ],
    },
    {
      slug: "saeure-basen-basenpulver-ph",
      titel: "Die Krankheit, die das Marketing erfunden hat",
      lead: "Chronische Übersäuerung durch moderne Ernährung klingt plausibel. Der Blut-pH ist durch drei Puffersysteme so eng reguliert, dass kein Lebensmittel ihn verschieben kann. Basenpulver behandeln eine Krankheit, die außerhalb pathologischer Stoffwechselzustände nicht existiert.",
      filter: ["Überschätzt"],
      date: "2026-06-22",
      body: `Der Blut-pH liegt zwischen 7,35 und 7,45. Bikarbonat-Puffer, Atmung und Niere halten ihn dort. Verschiebt sich der Wert nach unten, liegt eine metabolische Azidose vor. Das ist ein Notfall, kein Ernährungsproblem. Verschiebt sich nichts, gibt es nichts zu korrigieren.

Die Basenpulver-Industrie verkauft trotzdem. Calciumcarbonat, Magnesiumcitrat, Kaliumbikarbonat. Keine Dosierung, keine Indikation, kein Zielparameter. Das Etikett verspricht »Entsäuerung«. Kein Bluttest zeigt vorher eine Säure, kein Bluttest zeigt nachher eine Wirkung. Das Produkt behandelt ein Gefühl, keinen Befund.

Es gibt eine Ausnahme, und sie ist real. Die Basenpulver-III-Formulierung nach Rauch wurde für das modifizierte Fasten im Rahmen der Original-FX-Mayr-Therapie entwickelt. Beim Fasten entsteht durch Lipolyse tatsächlich eine Ketonkörper-bedingte metabolische Azidose. Die definierte Mischung aus Natriummonohydrogenphosphat, Calciumcarbonat, Magnesiumhydrogencitrat und Kaliumhydrogencarbonat ist hier eine reale Mineralstoffsubstitution für ein reales biochemisches Problem. Wer fastet, braucht das Rauch-Pulver. Wer im Alltag ein generisches Basenpulver nimmt, kauft die Therapie ohne die Krankheit.

Hunderte Produkte im Regal, eine Indikation beim Fasten, null Indikationen im Alltag. Die Marge stimmt trotzdem.`,
      quellen: [
        {
          autoren: "Thomas Remer, Friedrich Manz",
          titel: "Potential renal acid load of foods and its influence on urine pH",
          journal: "Journal of the American Dietetic Association",
          vol: "Vol. 95, No. 7",
          datum: "Juli 1995",
          seiten: "791—797",
          doi: "10.1016/S0002-8223(95)00219-7",
          pmid: "7797810",
        },
      ],
    },
    {
      slug: "spermidin-autophagie-longevity",
      titel: "Der Nobelpreis-Mechanismus ohne Interventionsdaten",
      lead: "Spermidin stößt Autophagie an, den zellulären Selbstreinigungsprozess, für dessen Aufklärung Ohsumi 2016 den Nobelpreis bekam. Tiermodelle zeigen Lebensverlängerung. Epidemiologie zeigt Korrelation. Was fehlt, sind große Interventionsstudien am Menschen. Die Supplement-Industrie wartet nicht.",
      filter: ["Unklar"],
      date: "2026-06-22",
      body: `Autophagie ist der Prozess, in dem Zellen beschädigte Proteine und defekte Organellen abbauen und recyceln. Yoshinori Ohsumi bekam den Nobelpreis für die Aufklärung der Mechanik. Spermidin ist einer der wenigen Nährstoffe, die diesen Prozess von außen anstoßen. Hier hört die Supplement-Industrie auf zuzuhören und fängt an zu verkaufen.

In Hefen, Fliegen, Würmern und Mäusen verlängert Spermidin die Lebensspanne konsistent. Die Bruneck-Studie verfolgt über zwanzig Jahre die Ernährung einer italienischen Kohorte und findet eine inverse Korrelation zwischen Spermidin-Aufnahme und kardiovaskulärer Mortalität. Wer mehr Spermidin isst, stirbt seltener am Herzen. Korrelation. Keine Kausalität. Der Unterschied zwischen beiden ist der Abstand zwischen einer Beobachtung und einem Beweis.

Eine kleine Vergleichsstudie an Älteren, die über Gedächtnisprobleme klagten, zeigt nach drei Monaten Weizenkeimextrakt verbesserte Gedächtnisleistung. Die erste große Interventionsstudie SmartAge läuft in Berlin. Ergebnisse stehen aus. Das ist alles an Interventionsdaten, was es am Menschen gibt, für eine Substanz, die bereits als »Longevity-Supplement« in jedem zweiten Biohacker-Stack steckt.

Die reichsten Nahrungsquellen sind Weizenkeime, gereifte Käsesorten und Natto. Wer regelmäßig davon isst, braucht vermutlich keine Kapsel. Wer die Kapsel kauft, kauft einen Nobelpreis-Mechanismus mit Tier- und Korrelationsdaten. Das Versprechen ist plausibel, der Beweis am Menschen nicht. Die Marge wartet nicht auf Beweise.`,
      quellen: [
        {
          autoren: "Tobias Eisenberg, Heide Knauer, Alexandra Schauer, et al.",
          titel: "Induction of autophagy by spermidine promotes longevity",
          journal: "Nature Cell Biology",
          vol: "Vol. 11, No. 11",
          datum: "November 2009",
          seiten: "1305—1314",
          doi: "10.1038/ncb1975",
          pmid: "19801973",
        },
        {
          autoren: "Stefan Kiechl, Raimund Pechlaner, Peter Willeit, et al.",
          titel: "Higher spermidine intake is linked to lower mortality: a prospective population-based study",
          journal: "American Journal of Clinical Nutrition",
          vol: "Vol. 108, No. 2",
          datum: "August 2018",
          seiten: "371—380",
          doi: "10.1093/ajcn/nqy102",
          pmid: "29955838",
        },
        {
          autoren: "Miranka Wirth, Gloria Benson, Claudia Schwarz, et al.",
          titel: "The effect of spermidine on memory performance in older adults at risk for dementia: a randomized controlled trial",
          journal: "Cortex",
          vol: "Vol. 109",
          datum: "Dezember 2018",
          seiten: "181—188",
          doi: "10.1016/j.cortex.2018.09.014",
          pmid: "30388439",
        },
      ],
    },
    {
      slug: "resveratrol-pterostilben-bioverfuegbarkeit",
      titel: "Das Molekül, das siebzig Prozent absorbiert und unter einem Prozent ankommt",
      lead: "Resveratrol ist das meistverkaufte Anti-Aging-Polyphenol der Welt. Der menschliche Körper zerlegt es in Minuten. Sein methylierter Verwandter Pterostilben erreicht die Zielorgane vierfach besser. Verkauft wird trotzdem Resveratrol, weil es die bessere Geschichte hat.",
      filter: ["Unklar"],
      date: "2026-06-22",
      body: `Die Geschichte geht so. Franzosen essen Fett, trinken Wein, rauchen und sterben seltener an Herzinfarkten als Amerikaner. Das Paradoxon brauchte eine Erklärung. Die Erklärung wurde Resveratrol, ein Polyphenol aus der Traubenschale. Seit den neunziger Jahren verkauft eine ganze Industrie das French Paradox in Kapselform.

Die In-vitro-Biologie liest sich wie ein Förderantrag, der nie abgelehnt wird. Resveratrol aktiviert SIRT1, das Langlebigkeits-Enzym, das auch Kalorienrestriktion anschaltet. Es hemmt NF-κB, den zentralen Entzündungsschalter. Es induziert Apoptose in Krebszelllinien. Es schützt Endothelzellen vor oxidativem Stress. In der Petrischale ist Resveratrol die Substanz, die alles kann.

Dann schluckt jemand die Kapsel.

Walle 2004 ist die Studie, die die Industrie nie zitiert. Sechs Probanden erhielten 25 Milligramm radioaktiv markiertes Resveratrol. Die Absorption lag bei siebzig Prozent. Das klingt gut. Was im Plasma ankam, waren Spuren unter fünf Nanogramm pro Milliliter. Weniger als ein Prozent des absorbierten Resveratrol erreichte den Blutkreislauf in unveränderter Form. Innerhalb von Minuten hatten Darm und Leber das Molekül sulfatiert und glucuronidiert, in Metaboliten zerlegt, deren biologische Aktivität bis heute umstritten ist. Walle selbst schrieb 2011 das Review: »Oral bioavailability considerably less than 1%.« Dosiserhöhung ändert daran nichts. Wer doppelt so viel schluckt, produziert doppelt so viele Metaboliten. Das Originalmolekül kommt trotzdem nicht durch.

Die klinischen Studien am Menschen spiegeln das Desaster. Vang 2011 fasst den Stand zusammen: moderate Effekte bei einzelnen Biomarkern, inkonsistent zwischen Studien, und immer bei Dosen weit oberhalb dessen, was Rotwein liefert. Ein Glas Rotwein enthält etwa ein bis zwei Milligramm Resveratrol. Die Dosen in klinischen Studien liegen bei 150 bis 5000 Milligramm. Das French Paradox durch Resveratrol im Wein zu erklären, ist pharmakologisch absurd. Die Erklärung für die französische Herzgesundheit liegt vermutlich in der Ernährungsstruktur, nicht in einem Polyphenol, das in homöopathischen Mengen im Glas schwimmt. Aber die Weinstory verkauft Kapseln, und Ernährungsstruktur verkauft nichts.

Was bleibt, ist ein Molekül mit spektakulärer In-vitro-Biologie und katastrophaler In-vivo-Pharmakokinetik. Die gesamte Anti-Aging-Branche verkauft eine Substanz, deren zentrales Versprechen auf Zellkulturdaten beruht, die am lebenden Menschen nicht ankommen. Zwanzig Jahre klinische Forschung, Hunderte Millionen Umsatz, und das solideste Ergebnis lautet: die Leber gewinnt.

Dann ist da Pterostilben.

Pterostilben ist ein methyliertes Stilbenoid aus Blaubeeren. Strukturell fast identisch mit Resveratrol, aber mit zwei Methylgruppen statt zwei Hydroxylgruppen. Diese zwei Gruppen verändern alles. Sie machen das Molekül lipophiler und metabolisch stabiler. In Ratten liegt die orale Bioverfügbarkeit von Pterostilben bei achtzig Prozent, die von Resveratrol bei zwanzig. Im Menschen sind die Daten dünner, aber die Richtung stimmt. Pterostilben überlebt die Leberpassage besser, weil die Methylgruppen die Sulfatierung verlangsamen, genau den Prozess, der Resveratrol zerstört.

In Tiermodellen senkt Pterostilben Blutdruck, LDL-Cholesterin und Blutzucker. In gealterten Ratten verbessert es kognitive Leistung stärker als Resveratrol bei gleicher Dosis. Molekular aktiviert es SIRT1, AMPK und PPARα, dieselben Schalter wie Resveratrol. Es hemmt mTOR. Der Unterschied ist, dass Pterostilben dieses Netzwerk in pharmakologisch wirksamen Konzentrationen erreicht. Resveratrol tut das im Reagenzglas, im Körper verliert es den Wettlauf gegen die eigene Leber.

Riche 2014 ist die bislang überzeugendste Humanstudie zu Pterostilben. 250 Milligramm täglich senken den diastolischen Blutdruck bei Erwachsenen mit erhöhtem Cholesterin. Eine Studie, an einer moderaten Kohorte, mit einem messbaren Endpunkt. Das ist mehr, als Resveratrol in zwanzig Jahren klinischer Forschung konsistent geliefert hat. Und gleichzeitig ist es zu wenig, um irgendetwas abschließend zu behaupten. Die Datenbasis für Pterostilben am Menschen besteht aus einer Handvoll Studien. Die Mechanik ist plausibel, die Pharmakokinetik überlegen, die Evidenz dünn.

Hier liegt das eigentliche Problem. Die Supplement-Industrie hat zwanzig Jahre lang das falsche Molekül verkauft. Resveratrol hatte die Weinstory, das French Paradox, die Schlagzeile. Pterostilben hatte zwei Methylgruppen und keinen Mythos. In einer rationalen Welt hätte die Industrie spätestens nach Walle 2004 umgeschwenkt. Stattdessen wurden die Resveratrol-Dosen erhöht, die Kapseln vergrößert, die Werbeversprechen lauter. Wer ein Pharmakokinetik-Paper liest, kauft kein Resveratrol mehr. Wer die Werbung liest, kauft weiter.

Pterostilben ist vermutlich das bessere Molekül. Die Pharmakokinetik spricht dafür, die Tierdaten sprechen dafür, die ersten Humandaten deuten in die richtige Richtung. Aber »vermutlich besser« reicht für keine Empfehlung. Was es braucht, sind große, langfristige Interventionsstudien am Menschen. Die existieren für Resveratrol kaum und für Pterostilben gar nicht. Die Sirtuinforschung hat einen Mechanismus geliefert, die Chemie hat ein besseres Molekül geliefert, und die klinische Medizin hat zu beiden noch keine Antwort gegeben, die über »vielversprechend« hinausgeht.

Wer heute Resveratrol kauft, bezahlt für ein Molekül, das seine eigene Leber in Minuten entsorgt. Das Etikett zeigt Trauben. Die Pharmakokinetik zeigt eine Sackgasse. Irgendwo dazwischen liegt ein Blaubeerextrakt, den niemand kennt und der vermutlich funktioniert. Der Markt belohnt Narrative, keine Bioverfügbarkeit.`,
      quellen: [
        {
          autoren: "Thomas Walle, Faye Hsieh, Mark DeLegge, et al.",
          titel: "High absorption but very low bioavailability of oral resveratrol in humans",
          journal: "Drug Metabolism and Disposition",
          vol: "Vol. 32, No. 12",
          datum: "Dezember 2004",
          seiten: "1377—1382",
          doi: "10.1124/dmd.104.000885",
          pmid: "15333514",
        },
        {
          autoren: "Ole Vang, Nihal Ahmad, Clifton Baile, et al.",
          titel: "What is new for an old molecule? Systematic review and recommendations on the use of resveratrol",
          journal: "PLoS ONE",
          vol: "Vol. 6, No. 6",
          datum: "Juni 2011",
          seiten: "e19881",
          doi: "10.1371/journal.pone.0019881",
          pmid: "21698226",
        },
        {
          autoren: "Agnes Rimando, Miklos Kalt, John Magee, et al.",
          titel: "Resveratrol, pterostilbene, and piceatannol in Vaccinium berries",
          journal: "Journal of Agricultural and Food Chemistry",
          vol: "Vol. 52, No. 15",
          datum: "Juli 2004",
          seiten: "4713—4719",
          doi: "10.1021/jf040095e",
          pmid: "15264904",
        },
        {
          autoren: "Daniel Riche, Corey McEwen, Krista Riche, et al.",
          titel: "Analysis of safety from a human clinical trial with pterostilbene",
          journal: "Journal of Toxicology",
          vol: "Vol. 2013",
          datum: "2013",
          seiten: "463595",
          doi: "10.1155/2013/463595",
          pmid: "23935618",
        },
      ],
    },
    {
      slug: "senolytika-fisetin-quercetin-zombiezellen",
      titel: "Die Jagd auf Zombiezellen läuft — ohne Humandaten",
      lead: "Zombiezellen sind kein Marketingbegriff. Sie existieren, sie akkumulieren, und sie vergiften alles, was sie umgibt. Die Frage ist, ob man sie loswerden kann. In Mäusen ja. Am Menschen weiß es niemand.",
      filter: ["Unklar"],
      date: "2026-06-22",
      body: `Jede Zelle im Körper hat zwei Optionen, wenn ihre DNA irreparabel beschädigt ist. Sie kann sich per Apoptose selbst eliminieren. Oder sie kann in Seneszenz gehen, aufhören sich zu teilen, aber am Leben bleiben. Seneszenz ist ein Tumorschutz, weil sie die Replikation beschädigter DNA verhindert. In jungen Körpern räumt das Immunsystem seneszente Zellen effizient ab. In alternden Körpern versagt diese Clearance, und die Zellen akkumulieren.

Das wäre tolerierbar, wenn sie stumm blieben. Aber seneszente Zellen sezernieren einen Cocktail aus Entzündungszytokinen, Proteasen und Wachstumsfaktoren. Die Forschung nennt ihn SASP, Senescence-Associated Secretory Phenotype. Dieses Sekretom beschädigt die Nachbarzellen und treibt weitere Zellen in die Seneszenz. Es unterhält eine chronische niedriggradige Entzündung, Inflammaging, die treibende Kraft hinter Herzkreislauferkrankungen, Neurodegeneration und Arthrose. Die Zelle schützt sich selbst vor Krebs und beschädigt dabei alles um sich herum. Die Biologie nennt das Antagonistic Pleiotropy. Was in der Jugend Leben rettet, vergiftet im Alter das Gewebe.

2015 veröffentlicht die Mayo Clinic den Beweis, dass die Eliminierung seneszenter Zellen die Gesundheitsspanne verlängert. Genetisch veränderte Mäuse, deren seneszente Zellen gezielt abliert werden, leben länger, bewegen sich besser, entwickeln weniger Katarakt, weniger Nierenschäden, weniger Herzhypertrophie. Der Befund war der Startschuss für die senolytische Forschung. Wenn genetische Ablation funktioniert, müsste ein Medikament, das denselben Effekt erzielt, ebenfalls funktionieren. Die Frage war nur, welches.

Dasatinib ist ein Tyrosinkinase-Hemmer, zugelassen gegen Leukämie. Quercetin ist ein Flavonoid aus Zwiebeln und Äpfeln. Zusammen bilden sie D+Q, die erste senolytische Kombination, die Kirkland 2017 an der Mayo Clinic publiziert. In alten Mäusen verbessert D+Q die Gefäßfunktion, reduziert Frailty-Marker und verlängert die Restlebensspanne. Dasatinib trifft seneszente Fettzellvorläufer über Hemmung der Src-Kinasen. Quercetin trifft seneszente Endothelzellen über Hemmung der PI3K/AKT-Achse und der anti-apoptotischen Bcl-2-Proteine. Beide zusammen decken ein breiteres Spektrum ab als jede Substanz allein.

Dann kam Fisetin. Yousefzadeh 2018 testet zehn Flavonoide auf senolytische Potenz. Fisetin, ein Polyphenol aus Erdbeeren und Persimonen, eliminiert seneszente Zellen wirksamer als alle anderen getesteten Verbindungen, einschließlich Quercetin. In alten Wildtyp-Mäusen verlängert chronische Fisetin-Gabe die mediane und die maximale Lebensspanne, reduziert altersassoziierte Pathologie und verbessert die Gewebshomöostase. Publiziert in EBioMedicine, unterstützt von der Mayo Clinic und der National Institutes of Health. Die Mausdaten sind so konsistent, wie Mausdaten sein können.

Am Menschen ist fast nichts passiert.

Die AFFIRM-Studie testet Fisetin an Nierentransplantat-Empfängern. Eine weitere testet es bei Arthrose. Ergebnisse beider Studien stehen aus. Für D+Q existiert eine Pilotstudie an Patienten mit diabetischer Nierenerkrankung, die nach drei Tagen senolytischer Behandlung einen Rückgang der seneszenten Zellen in Fettgewebe und Haut zeigt. Drei Tage, vierzehn Patienten, ein Gewebesignal. Das ist der gesamte klinische Bestand an Interventionsdaten für ein Feld, das die Altersforschung als das aufregendste Paradigma seit der Kalorienrestriktion behandelt.

In jedem Biohacker-Forum werden senolytische Protokolle geteilt. Fisetin 20 Milligramm pro Kilogramm, zyklisch, zwei Tage on, Monate off, abgeleitet aus dem Mausdosierungsschema. Quercetin phytosomiert, weil Standard-Quercetin-Pulver kaum resorbiert wird. Dasatinib auf Rezept, off-label, ein Krebsmedikament als Anti-Aging-Supplement. Die Szene behandelt die Mausdaten wie klinische Empfehlungen. Das ist mutig oder fahrlässig, je nachdem wie das Ergebnis ausfällt.

Das Grundproblem ist die Übersetzung. Mäuse leben zwei Jahre. Effekte, die in Wochen messbar werden, brauchen beim Menschen Jahrzehnte. Die Clearance seneszenter Zellen in der Maus ist proportional wuchtiger als beim Menschen, weil die Seneszenzlast relativ zum Gesamtgewebe höher liegt. Ob intermittierende Gabe von Fisetin oder D+Q beim Menschen über zwanzig Jahre dieselbe Trajektorie erzeugt wie beim Nagetier über zwanzig Wochen, kann heute niemand beantworten. Die Biologie ist plausibel, der Enthusiasmus überholt die Daten.

Was bleibt, ist ein Mechanismus, der funktioniert, in Genetik-Modellen, in der Zellkultur, in Mäusen. Seneszente Zellen sind real. Ihre Eliminierung verbessert die Gesundheit in Tiermodellen robust. Fisetin und D+Q sind die vielversprechendsten Werkzeuge, die bisher identifiziert wurden. Und die klinische Evidenz am Menschen passt auf einen Bierdeckel.

Die senolytische Forschung hat eine plausible Antwort auf eine der größten Fragen der Biologie. Die Supplement-Industrie verkauft die Antwort, bevor die Frage am Menschen gestellt wurde.

Quercetin illustriert das Problem im Kleinen. Standard-Quercetin-Pulver wird kaum resorbiert. Der Großteil passiert den Darm, ohne ins Blut zu gelangen. Die Phytosom-Formulierung Quercefit erhöht die Bioverfügbarkeit um das Zwanzigfache, aber die meisten senolytischen Protokolle in den Foren empfehlen billiges Pulver. Wer Senolytika nach dem Mausprotokoll nimmt und gleichzeitig die Bioverfügbarkeit ignoriert, betreibt Longevity-Theater. Die Geste stimmt, die Pharmakokinetik fehlt.

Dasatinib kann Menschen umbringen. Das steht in der Fachinformation. Pleuraergüsse, Zytopenien, pulmonale Hypertonie. In den Foren steht, wann man es am besten nüchtern nimmt. Off-label als Anti-Aging-Intervention, ohne ärztliche Begleitung, auf Basis von Mausdaten. Die Szene diskutiert Dosierungsprotokolle mit der Selbstverständlichkeit von Trainingsplänen.

Die Frage hinter den Senolytika ist die richtige Frage. Seneszente Zellen akkumulieren, der SASP schädigt, Eliminierung verbessert Gesundheitsparameter in jedem getesteten Modell. Die Werkzeuge existieren. Was fehlt, ist der Beweis, dass sie am Menschen sicher und wirksam funktionieren, über Jahre, nicht über Tage. Wer heute Senolytika nimmt, wettet darauf, dass Mäuse nicht lügen. Vielleicht gewinnt er zwanzig Jahre. Vielleicht einen Pleuraerguss. Die Daten werden zeigen, welches.`,
      quellen: [
        {
          autoren: "Matthew Yousefzadeh, Yi Zhu, Sara McGowan, et al.",
          titel: "Fisetin is a senotherapeutic that extends health and lifespan",
          journal: "EBioMedicine",
          vol: "Vol. 36",
          datum: "Oktober 2018",
          seiten: "18—28",
          doi: "10.1016/j.ebiom.2018.09.015",
          pmid: "30279143",
        },
        {
          autoren: "James Kirkland, Tamara Tchkonia, Yi Zhu, et al.",
          titel: "The clinical potential of senolytic drugs",
          journal: "Journal of the American Geriatrics Society",
          vol: "Vol. 65, No. 10",
          datum: "Oktober 2017",
          seiten: "2297—2301",
          doi: "10.1111/jgs.14969",
          pmid: "28869295",
        },
        {
          autoren: "Ming Xu, Tamar Pirtskhalava, Joshua Farr, et al.",
          titel: "Senolytics improve physical function and increase lifespan in old age",
          journal: "Nature Medicine",
          vol: "Vol. 24, No. 8",
          datum: "August 2018",
          seiten: "1246—1256",
          doi: "10.1038/s41591-018-0092-9",
          pmid: "29988130",
        },
      ],
    },
    {
      slug: "curcumin-pains-bioverfuegbarkeit",
      titel: "Das Molekül, das in jedem Test gewinnt und in keinem Körper ankommt",
      lead: "Curcumin ist die meistuntersuchte Pflanzensubstanz der Welt. Über hundertzwanzig klinische Studien, Zehntausende In-vitro-Papers, ein eigenes Journal. 2017 veröffentlicht das Journal of Medicinal Chemistry eine Analyse, die das Fundament wegzieht. Das Molekül ist ein systematischer Falschspieler. Oder ein verkanntes Genie. Oder beides.",
      filter: ["Unklar"],
      date: "2026-06-22",
      body: `Die Geschichte beginnt bei den Assays. Curcumin zeigt in Zellkulturtests Aktivität gegen praktisch alles. Entzündung, Krebs, Diabetes, Neurodegeneration, Depression, Arthrose, oxidativer Stress. Kein anderes Molekül in der pharmakologischen Literatur hat ein derart breites Wirkprofil. Die naheliegende Erklärung wäre, dass Curcumin ein Wundermolekül ist. Die unbequeme Erklärung wäre, dass es ein Artefakt produziert.

Nelson 2017 formuliert die unbequeme Erklärung. Curcumin ist ein PAINS-Compound, ein Pan-Assay Interference Compound. PAINS sind Moleküle, die in Hochdurchsatz-Screenings positive Ergebnisse liefern, weil sie mit dem Testsystem selbst interagieren, mit Proteinen unspezifisch reagieren, Fluoreszenz stören, Membranen destabilisieren oder Aggregate bilden. Das Ergebnis sieht nach Wirkung aus. Es ist Rauschen. Nelson nennt Curcumin instabil, reaktiv, nicht bioverfügbar und deshalb einen »highly improbable lead«. Keine doppelblinde, placebokontrollierte klinische Studie mit Curcumin sei bis dato erfolgreich gewesen.

Das Paper war ein Erdbeben in einem Feld, das sich für erdbebensicher hielt. Ein einziges Review stellte die Grundannahme in Frage, und die Curcumin-Community reagierte mit Gegenpapern, Richtigstellungen und der Behauptung, Nelson habe die klinische Literatur selektiv ignoriert. Beides stimmt teilweise. Nelson hat recht, dass die In-vitro-Daten durch PAINS kontaminiert sein können und dass die Pharmakokinetik katastrophal ist. Die Gegenseite hat recht, dass es klinische Befunde gibt, die sich durch Assay-Artefakte allein schwer erklären lassen. Die Wahrheit über Curcumin liegt in der Lücke zwischen den Lagern, und beide Lager haben Karrieren darauf gebaut, die Lücke nicht zu betreten.

Drei Metaanalysen, erschienen zwischen 2016 und 2020, belegen eine antidepressive Wirkung von Curcumin, am stärksten als Augmentation zu SSRIs. Fusar-Poli 2020 analysiert neun Studien mit über siebenhundert Patienten und findet Effektgrößen vergleichbar mit Standardantidepressiva. Mechanistisch hemmt Curcumin NF-κB im Gehirn und moduliert die Mikroglia-Aktivität, zwei Entzündungswege, die in der Depressionsforschung seit Jahren als relevant gelten. Hier reden Patientendaten, keine Zellkulturen. Nelson hat sie nicht erwähnt.

Die DNA-Reparatur-Daten sind der zweite Befund, der über PAINS hinausgeht. In gesunden Zellen aktiviert Curcumin die Basen-Exzisions-Reparatur und das NHEJ, fährt PARP-1, DNA-Polymerase β und DNA-Ligasen hoch. In Krebszellen kehrt sich die Wirkung um. Curcumin hemmt BRCA1 und MGMT, blockiert die Reparaturwege, die Tumoren zum Überleben brauchen. Im Knochenmark schützt es vor Chemotherapie-induzierter Myelosuppression. Die Westbengalen-Arsenstudie zeigt Reduktion oxidativer DNA-Schäden bei arsenbelasteten Erwachsenen. Eine Substanz, die in gesunden Zellen repariert und in entarteten entwaffnet, ist pharmakologisch bemerkenswert, auch wenn die Bioverfügbarkeit miserabel ist. Die Selektivität allein würde in der Onkologie Aufmerksamkeit verdienen, wenn sie an einem patentierbaren Molekül hinge. An einem Gewürz, das in jedem Supermarkt für zwei Euro liegt, verdient niemand genug, um eine Phase-III-Studie zu finanzieren. Dieselbe ökonomische Sackgasse wie bei Fisetin, Pterostilben und der halben Phytomedizin.

Und dort liegt der Kern des Problems. Standard-Curcumin erreicht unter einem Prozent orale Resorption. Curcumin wird im Darm glucuronidiert und sulfatiert, dasselbe Schicksal wie Resveratrol, dieselbe Leberpassage, dasselbe Ergebnis. Was im Plasma ankommt, sind Metaboliten, deren Wirksamkeit unklar ist. Golden-Milk-Pulver aus dem Supermarkt ist gelbes Wasser mit Gewürzgeschmack. Die Kurkuma-Latte auf Instagram ist ein Farbstoff, der die Darmwand nicht überlebt. Wer sich damit tröstet, dass Kurkuma wenigstens nicht schadet, hat recht. Es schadet nicht. Es tut nichts. Die teuerste Form von Nichts ist immer noch Nichts. Wer glaubt, dass eine Prise Kurkuma im Smoothie NF-κB hemmt, verwechselt Kochen mit Pharmakologie.

Was funktioniert, sind die Formulierungen, die dieses Problem lösen. Meriva, ein Phytosom aus Curcumin und Sojalecithin, erhöht die Bioverfügbarkeit um das Neunundzwanzigfache. BCM-95 kombiniert Curcumin mit ätherischen Ölen der Kurkumawurzel und erreicht etwa das Siebenfache. Liposomale Varianten liegen dazwischen. Die Metaanalysen zur Depression verwendeten überwiegend diese bioverfügbarkeitsoptimierten Formulierungen. Die Billigkapseln im Regal verwenden Standard-Curcumin-Pulver. Derselbe Wirkstoffname auf dem Etikett, verschiedene Moleküle in der Blutbahn. Oder im Fall der Billigkapsel: gar kein Molekül in der Blutbahn.

Der Markt macht aus dieser Komplexität einen einzigen Satz: »Kurkuma wirkt entzündungshemmend.« Kein Wort über PAINS. Kein Wort über Bioverfügbarkeit. Kein Wort über den Unterschied zwischen einem Phytosom und einem Pulver. Die Verpackung zeigt eine goldene Wurzel. Der Preis liegt bei acht Euro. Die Wirkung liegt bei null.

Die PAINS-Debatte hat Curcumin nicht erledigt. Sie hat die Frage verschärft. Die In-vitro-Biologie ist wahrscheinlich aufgebläht, kontaminiert durch ein Molekül, das mit allem interagiert, was man ihm hinhält. Die klinische Evidenz für Depression und möglicherweise DNA-Protektion existiert, eng, aber reproduziert, und nur mit Formulierungen, die den First-Pass-Metabolismus umgehen. Dazwischen liegt ein Markt, der Kurkuma-Pulver für drei Euro verkauft und »entzündungshemmend« draufschreibt, als wäre die Pharmakokinetik ein Detail.

Curcumin ist gleichzeitig eine der bestuntersuchten und eine der am schlechtesten verstandenen Substanzen im Supplement-Regal. Das PAINS-Paper hat gezeigt, dass ein Großteil der Grundlagenforschung auf wackligem Boden steht. Die Metaanalysen haben gezeigt, dass trotzdem etwas am Menschen funktioniert, wenn die Formulierung stimmt. Und der Markt ignoriert beides. Er verkauft weder die Warnung noch die Lösung. Er verkauft Kurkuma, in Gold getaucht, mit einem Versprechen, das die Darmwand nie passiert. Der Rest ist Farbe.`,
      quellen: [
        {
          autoren: "Kathryn Nelson, Jayme Dahlin, Jonathan Bisson, et al.",
          titel: "The essential medicinal chemistry of curcumin",
          journal: "Journal of Medicinal Chemistry",
          vol: "Vol. 60, No. 5",
          datum: "März 2017",
          seiten: "1620—1637",
          doi: "10.1021/acs.jmedchem.6b00975",
          pmid: "28074653",
        },
        {
          autoren: "Laura Fusar-Poli, Davide Guillem Vozza, Antimo Ferrara, et al.",
          titel: "Curcumin for depression: a meta-analysis",
          journal: "Critical Reviews in Food Science and Nutrition",
          vol: "Vol. 60, No. 15",
          datum: "2020",
          seiten: "2643—2653",
          doi: "10.1080/10408398.2019.1653260",
          pmid: "31423805",
        },
        {
          autoren: "Roberto Cuomo, Giovanna Appendino, Alberto Leyva-Gómez, et al.",
          titel: "Comparative absorption of a standardized curcuminoid mixture and its lecithin formulation",
          journal: "Journal of Natural Products",
          vol: "Vol. 74, No. 4",
          datum: "April 2011",
          seiten: "664—669",
          doi: "10.1021/np1007262",
          pmid: "21413691",
        },
        {
          autoren: "Jayesh Biswas, Debasish Sinha, Subhadip Mukherjee, et al.",
          titel: "Curcumin protects DNA damage in a chronically arsenic-exposed population of West Bengal",
          journal: "Human and Experimental Toxicology",
          vol: "Vol. 29, No. 6",
          datum: "Juni 2010",
          seiten: "513—524",
          doi: "10.1177/0960327109359020",
          pmid: "20056736",
        },
      ],
    },
    {
      slug: "mitochondrien-coq10-pqq-alcar",
      titel: "Die Kraftwerke sterben leise",
      lead: "Mitochondrien produzieren das ATP, von dem jede Zelle lebt. Ihre Kapazität sinkt mit dem Alter um zehn bis fünfzehn Prozent pro Dekade. Drei Substanzen greifen an verschiedenen Stellen ein. Die Supplement-Industrie verkauft sie einzeln und erklärt den Zusammenhang nie.",
      filter: ["Unterschätzt"],
      date: "2026-06-22",
      body: `Mit vierzig beginnt die Müdigkeit. Mit sechzig ist sie Grundverfassung. Die Zellbiologie nennt das mitochondriale Dysfunktion. Die Medizin nennt es Alter und zuckt mit den Schultern. Jede menschliche Zelle enthält zwischen hundert und zweitausend Mitochondrien, je nach Energiebedarf. Herzmuskelzellen liegen am oberen Ende. Hautzellen am unteren. Die Mitochondrien produzieren ATP über die Atmungskette, eine Abfolge von Proteinkomplexen, durch die Elektronen fließen und dabei einen Protonengradienten aufbauen, der die ATP-Synthase antreibt. Wenn diese Kette ineffizienter wird, sinkt die Energieproduktion, steigt der oxidative Stress und beginnt ein Kreislauf, in dem beschädigte Mitochondrien mehr Radikale produzieren, die weitere Mitochondrien beschädigen.

Das passiert in jeder Zelle, in jedem Organ, in jedem Jahrzehnt. Die Folgen heißen Müdigkeit, kognitive Verlangsamung, Herzinsuffizienz, Sarkopenie, Immunschwäche. Die Kardiologie nennt es diastolische Dysfunktion. Die Neurologie nennt es altersassoziierte kognitive Einbuße. Jede Disziplin benennt ihre Version und übersieht die gemeinsame Ursache. Die Medizin behandelt die Symptome. Die Mitochondrien behandelt sie selten.

CoQ10 ist der Elektronencarrier zwischen Komplex I, II und III der Atmungskette. Ohne CoQ10 kommt kein Elektron weiter, kein Proton wird gepumpt, kein ATP wird produziert. Der Körper synthetisiert CoQ10 selbst, aber die Synthese sinkt ab dem dreißigsten Lebensjahr. Statine beschleunigen den Verlust, weil sie denselben Mevalonat-Weg hemmen, über den auch CoQ10 entsteht. Wer Statine nimmt und kein CoQ10 supplementiert, hemmt die Cholesterinsynthese und die Energieproduktion mit derselben Tablette. Die Myalgien, die dreißig Prozent der Statin-Patienten melden, sind vermutlich mitochondriale Erschöpfung der Skelettmuskulatur. Die Kardiologie verschreibt das Medikament, ignoriert die Nebenwirkung und lässt den Patienten googeln, warum ihm die Beine wehtun.

Die Q-Symbio-Studie testete 300 Milligramm CoQ10 täglich an Herzinsuffizienz-Patienten über zwei Jahre. Das Ergebnis: 44 Prozent weniger kardiovaskuläre Todesfälle in der Verumgruppe. Eine Migräne-Studie zeigt signifikante Reduktion der Anfallshäufigkeit. Bei Fibromyalgie senkt CoQ10 Schmerzscores und Erschöpfungsmarker. Das sind Effektgrößen, die der Körper selbst registriert. Ubiquinol, die reduzierte Form, hat die doppelte Bioverfügbarkeit gegenüber Ubiquinon. Wer Ubiquinon kauft, bezahlt für ein Molekül, das der alternde Körper erst umwandeln muss, und genau diese Umwandlung funktioniert im Alter unzuverlässig.

PQQ ist das Gegenstück. CoQ10 hält die bestehenden Mitochondrien am Laufen. PQQ baut neue. Es aktiviert PGC-1α, den zentralen Regulator der mitochondrialen Biogenese. Das macht PQQ zum einzigen bekannten Nährstoff, der die Zahl der Mitochondrien pro Zelle erhöhen kann. In einer placebokontrollierten Studie verbessern zwanzig Milligramm PQQ täglich über acht Wochen die Schlafqualität und senken das Aufwach-Cortisol. Bei gleichzeitiger Gabe mit CoQ10 verstärken sich die Effekte auf Entzündungsmarker und oxidativen Stress. CoQ10 repariert die bestehende Maschine. PQQ baut eine neue daneben. Zusammen decken sie Wartung und Erweiterung ab.

ALCAR vervollständigt das System von einer dritten Seite. Acetyl-L-Carnitin shuttelt langkettige Fettsäuren durch die innere Mitochondrienmembran, wo sie in der Beta-Oxidation zu Acetyl-CoA verbrannt werden. Ohne diesen Shuttle liegen die Fettsäuren vor der Membran und die Mitochondrien hungern trotz vollem Tank. Ein Motor mit Kraftstoff, der den Vergaser nicht erreicht. Die Acetylgruppe liefert gleichzeitig das Substrat für die Acetylcholin-Synthese, den wichtigsten Neurotransmitter für Gedächtnis und Aufmerksamkeit. ALCAR passiert die Blut-Hirn-Schranke, L-Carnitin tut das kaum. Eine Metaanalyse zeigt antidepressive Wirkung vergleichbar mit Standardmedikamenten, am stärksten bei älteren Patienten, also genau bei denen, deren Mitochondrien am meisten leiden. Eine weitere belegt signifikante Schmerzreduktion und verbesserte Nervenleitgeschwindigkeit bei Neuropathie. Das Muster ist immer dasselbe: ein mitochondriales Defizit, eine gezielte Kompensation, ein messbarer Effekt.

Drei Substanzen, ein System. CoQ10 transportiert Elektronen. PQQ baut Mitochondrien. ALCAR schleust den Treibstoff ein. Keine davon ist glamourös. Keine hat eine Instagram-Ästhetik. Keine wird im Biohacker-Stack als Longevity-Geheimwaffe gehandelt, obwohl sie näher am biologischen Kern des Alterns liegen als Resveratrol, Spermidin oder Kollagenpulver zusammen. Sie sind Infrastruktur. So sichtbar und so unterschätzt wie Kanalisation. Wenn sie funktioniert, denkt niemand an sie. Wenn sie ausfällt, bricht alles zusammen, und niemand versteht warum, weil das Symptom weit weg von der Ursache liegt. Müdigkeit, Vergesslichkeit, Muskelschwäche, schwaches Immunsystem. Vier Ärzte, vier Diagnosen, eine defekte Maschine.

Kein Standard-Blutbild misst die mitochondriale Kapazität. Kein Hausarzt ordnet eine Muskelbiopsie mit Respirometrie an. Die mitochondriale Medizin existiert als Spezialdisziplin für genetische Defekte im Kindesalter und als Nischenkonzept in der funktionellen Medizin. Dazwischen liegt ein Vakuum, in dem Millionen Menschen mit abnehmender Energie altern und vom Arzt hören, das sei normal. Es ist normal. Es ist auch behandelbar. Die Werkzeuge existieren, sie sind rezeptfrei, sie haben Studiendaten, und sie kosten weniger als ein Monat Atorvastatin. Dass die Kardiologie Statine verschreibt und CoQ10 dem Zufall überlässt, ist die teuerste Unterlassung in der pharmazeutischen Begleittherapie.

Die Supplement-Industrie verkauft CoQ10 als »Herzschutz«, PQQ als »Mitochondrien-Booster« und ALCAR als »Nootropikum«. Drei Etiketten, drei Marketingkategorien, als wären es verschiedene Geschichten. Die Biologie erzählt eine einzige Geschichte, und sie handelt von der Maschine, die jede Zelle am Leben hält. Wer die Maschine vernachlässigt, erntet keine einzelne Krankheit. Er erntet langsames Nachlassen in allem. Die Medizin hat dafür kein Wort. Das Supplement-Regal hat dafür drei Kapseln, die sich gegenseitig nicht kennen. Die Mitochondrien hätten gern alle drei gleichzeitig.`,
      quellen: [
        {
          autoren: "Svend Aage Mortensen, Franklin Rosenfeldt, Adarsh Kumar, et al.",
          titel: "The effect of coenzyme Q10 on morbidity and mortality in chronic heart failure: results from Q-SYMBIO",
          journal: "JACC Heart Failure",
          vol: "Vol. 2, No. 6",
          datum: "Dezember 2014",
          seiten: "641—649",
          doi: "10.1016/j.jchf.2014.06.008",
          pmid: "25282031",
        },
        {
          autoren: "Winyoo Chowanadisai, Kathryn Bauerly, Eskouhie Tchaparian, et al.",
          titel: "Pyrroloquinoline quinone stimulates mitochondrial biogenesis through cAMP response element-binding protein phosphorylation and increased PGC-1α expression",
          journal: "Journal of Biological Chemistry",
          vol: "Vol. 285, No. 1",
          datum: "Januar 2010",
          seiten: "142—152",
          doi: "10.1074/jbc.M109.030130",
          pmid: "19861415",
        },
        {
          autoren: "Nicola Veronese, Brendon Stubbs, Stefano Solmi, et al.",
          titel: "Acetyl-L-carnitine supplementation and the treatment of depressive symptoms: a systematic review and meta-analysis",
          journal: "Psychosomatic Medicine",
          vol: "Vol. 80, No. 2",
          datum: "Februar 2018",
          seiten: "154—159",
          doi: "10.1097/PSY.0000000000000537",
          pmid: "29076953",
        },
      ],
    },
  ],
};

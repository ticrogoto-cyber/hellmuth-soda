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
  ],
};

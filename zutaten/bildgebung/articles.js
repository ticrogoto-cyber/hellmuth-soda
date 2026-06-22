// Bildgebung-Artikel: window.BILDGEBUNG_ARTICLES
// Schema pro Eintrag:
//   slug      string   URL-Segment unter /zutaten/bildgebung/<slug>/
//   titel     string   Überschrift
//   lead      string   Subtitle, ein bis zwei Sätze
//   body      string   Markdown-Body: ## Headlines, leere Zeilen trennen Absätze
//   quellen   Quelle[] Vollzitate als Objekte (siehe Schema unten)
//   filter    string[] Themen-Tags: Ruhe | Klarheit | Substanz
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
      filter: ["Ruhe"],
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
      filter: ["Klarheit"],
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
      filter: ["Substanz"],
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
      filter: ["Ruhe"],
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
      filter: ["Ruhe"],
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
      filter: ["Ruhe"],
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
      filter: ["Ruhe", "Substanz"],
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
      filter: ["Klarheit"],
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
  ],
};

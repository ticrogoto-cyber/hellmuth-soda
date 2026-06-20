// Substanz-Index Data: window.SUBSTANCES_DATA
// Schema per entry:
//   name             string  Display name
//   slug             string  URL-safe identifier
//   szenario         1 | 2 | 3 | "sonderfall"
//   kategorie        "Pflanze" | "Pilz" | "Mikrobiom" | "Aminosäure" | "Vitamin" | "Mineral" | "Fettsäure" | "Substanz" | "Konzept"
//   unterkategorie   string (z. B. "Wurzel", "Bakterium", "Molekül")
//   werbung          string  Verpackungsrückseite-Ton, 1–3 Sätze
//   wirkung          string  Mehrabsatziger Diagnose-Text, Absätze durch \n\n getrennt
//   quellen          string[]  Studienzitate als Datenattribute (nicht im Fließtext)
//   related_article  string|null  Pfad zu Bildgebung-Artikel
//
// Stand: Batches 4, 5, 7, 9, 10 (50 Einträge), verbatim aus dem Stil-Review.
// Batches 1, 2, 3, 6, 8 folgen in den nächsten Commits (Originale + Feinschliffe).

window.SUBSTANCES_DATA = {
  entries: [

    // ============================================================
    // SEED — 15 Einträge (Hellmuth-Heim + Sulforaphan + NAD+/NMN)
    // Verbatim aus WEBSITE2-Chatverlauf, freigegeben.
    // ============================================================

    {
      name: "Hopfen (Humulus lupulus)",
      slug: "hopfen",
      szenario: 3,
      kategorie: "Pflanze",
      unterkategorie: "Zapfen",
      werbung: "»Natürliches Schlafmittel ohne Nebenwirkungen. Beruhigt sanft, traditionell bewährt, alkoholfrei. Hilft beim Einschlafen und Durchschlafen.«",
      wirkung: "Hopfen ist in der europäischen Heilpflanzentradition ein Nervinum, in der Pharmakologie eine Mehrkomponentenpflanze und in der Werbung nur ein Schlaftee. Humulon und die Iso-α-Säuren modulieren GABA-A-Rezeptoren positiv, eine placebokontrollierte Studie an gesunden Erwachsenen senkt unter Hopfen-Trockenextrakt Angst-, Depressions- und Stress-Scores in allen drei DASS-21-Skalen. Xanthohumol, das prenylierte Chalcon der Lupulindrüsen, induziert Nrf2 und hemmt NF-κB, eine anti-inflammatorische Achse jenseits jedes Schlafkontextes. Die Bitterstoffe sprechen TAS2R-Rezeptoren an und ziehen über das enteroendokrine System Ghrelin- und CCK-Signale nach, eine eigene Wirkachse. Dass die Monotherapie-Evidenz dünn aussieht, sagt mehr über die Forschungsfrage als über die Pflanze. Man hat ein Sedativum gesucht und eine Apotheke übersehen.",
      quellen: ["Benkherouf 2019", "Kyrou 2017"],
      related_article: "/zutaten/bildgebung/hopfen-jenseits-vom-bier/"
    },

    {
      name: "Ashwagandha (Withania somnifera)",
      slug: "ashwagandha",
      szenario: 3,
      kategorie: "Pflanze",
      unterkategorie: "Beere",
      werbung: "»Adaptogen aus dem Ayurveda. Senkt Stress und Cortisol, fördert Schlaf und Energie. KSM-66 ist die meistuntersuchte Form, klinisch belegt.«",
      wirkung: "Eine der wenigen pflanzlichen Substanzen, deren anxiolytische und stress-modulierende Wirkung am Menschen mehrfach placebokontrolliert belegt ist, mit Effektstärken im Bereich klinischer Pharmaka. Die Withanolide wirken als positive allosterische Modulatoren am GABA-A-Rezeptor und greifen in die HPA-Achse ein, der chronisch erhöhte Cortisol-Tonus wird messbar gesenkt, die Schlafarchitektur verbessert sich, ohne dass es zu klassischer Sedierung kommt. Eine Metaanalyse von 12 RCTs findet eine standardisierte Mittelwertdifferenz von -1,55 für Angst-Scores gegenüber Placebo, das ist die Größenordnung gut wirksamer Anxiolytika und macht die Substanz nützlich bei chronischer Übererregung und Panikneigung, wo SSRIs zu träge und Benzodiazepine zu riskant sind. Bei latenter Hyperthyreose ist Vorsicht geboten, weil Withanolide die TSH-Suppression verstärken und in Einzelfällen thyrotoxische Krisen ausgelöst haben. Die Schilddrüse ist die einzige Kontraindikation. Dass sie auf keiner Packung steht, ist die einzige Kritik.",
      quellen: ["Akhgarjand 2022", "Langade 2019"],
      related_article: null
    },

    {
      name: "Kokosöl",
      slug: "kokosoel",
      szenario: 2,
      kategorie: "Fettsäure",
      unterkategorie: "Öl",
      werbung: "»Gesundheitsschädlich wegen seines hohen Anteils gesättigter Fette, die das LDL-Cholesterin erhöhen. Die American Heart Association rät 2017 ausdrücklich vom Kochen mit Kokosöl ab, die deutschen Ernährungsleitlinien folgen dieser Linie. Pflanzliche Öle wie Raps oder Sonnenblume gelten als überlegen.«",
      wirkung: "Die AHA stützt sich auf einen Surrogat-Marker. LDL steigt, aber Metaanalysen finden keine konsistente Verbindung zwischen gesättigten Fetten und kardiovaskulärer Mortalität bei gesunden Erwachsenen. Unter Kokosöl steigt vor allem das große, weniger atherogene LDL, HDL steigt im selben Verhältnis. Laurinsäure ist antimikrobiell gegen behüllte Viren, gram-positive Bakterien und Candida, ihr Monoester Monolaurin steht in klinischen Daten. Sonnenblumenöl, das die AHA als Alternative empfiehlt, oxidiert bei Bratenhitze zu reaktiven Aldehyden, die in der Linolsäure-Forschung als gefährlicher gelten als das gesamte gesättigte Fett, gegen das die Warnung sich richtet. Die Pfanne ist klüger als die Leitlinie, sie raucht beim Sonnenblumenöl und schweigt beim Kokosöl.",
      quellen: ["Siri-Tarino 2010", "Chowdhury 2014", "Astrup 2020"],
      related_article: null
    },

    {
      name: "NAC (N-Acetylcystein)",
      slug: "nac-n-acetylcystein",
      szenario: 1,
      kategorie: "Substanz",
      unterkategorie: "Molekül",
      werbung: "»Direkter Vorläufer von Glutathion. Entgiftet die Leber, schützt die Atemwege, hilft bei Sucht und Zwangsverhalten. Sicher und nebenwirkungsarm.«",
      wirkung: "Aminosäurederivat aus der Notfallmedizin, das in der Klinik bei Paracetamol-Vergiftung Leben rettet und im Supplement-Regal vor allem verspricht. Die orale Aufnahme wird zu großen Teilen schon in der Darmwand zerlegt, der zelluläre Glutathion-Anstieg ist messbar, bleibt aber bescheiden. In der Psychiatrie zeigen Metaanalysen kleine Effekte bei Trichotillomanie und Skin Picking, gemischte Daten bei OCD, keine konsistente Wirkung bei Schizophrenie oder Depression. Die EMA stuft NAC weiterhin als Arzneimittel ein, der Verkauf als Nahrungsergänzung in der EU bewegt sich in der rechtlichen Grauzone. Was als universelles Antioxidans vermarktet wird, ist ein Notfall-Antidot, das jemand in eine Kapsel gesteckt hat.",
      quellen: [],
      related_article: null
    },

    {
      name: "Igelstachelbart (Hericium erinaceus)",
      slug: "igelstachelbart",
      szenario: 3,
      kategorie: "Pilz",
      unterkategorie: "Vitalpilz",
      werbung: "»Der Pilz fürs Gehirn. Enthält Hericenone und Erinacine, die den Nervenwachstumsfaktor anregen. Fördert Konzentration, Gedächtnis und Nervenregeneration.«",
      wirkung: "Speisepilz mit einer der konsistentesten präklinischen Neurotrophin-Signaturen, die die Pflanzenpharmakologie überhaupt kennt. Hericenone und Erinacine induzieren NGF in humanen Astrozyten, erhöhen BDNF und fördern hippocampale Neurogenese, beschleunigen die Axonregeneration nach peripherer Nervenverletzung und schützen in Tiermodellen gegen Aβ-Toxizität. Vier Humanstudien aus drei Ländern weisen in dieselbe Richtung, kognitive Verbesserung bei milder Beeinträchtigung, Stimmung und Schlaf bei gesunden Erwachsenen, reduzierte depressive Symptome bei postmenopausalen Frauen, akute Verarbeitungsgeschwindigkeit bei jungen Erwachsenen. In der chinesischen Medizin als Hou Tou Gu und in Japan als Yamabushitake wird der Pilz seit Jahrhunderten als nervenstärkender Heilpilz eingesetzt, ohne dokumentierte Toxizitätssignale. Dass die klinischen Stichproben klein sind, ist ein Defizit der Forschungslandschaft, nicht des Pilzes. Was Igelstachelbart braucht, ist eine Studie mit dreihundert Teilnehmern, nicht einen weiteren Skeptiker.",
      quellen: ["Mori 2008", "Wong 2012", "Li 2020", "Mori 2009", "Saitsu 2019", "Vigna 2019", "Docherty 2023"],
      related_article: null
    },

    {
      name: "Brennnessel (Urtica dioica)",
      slug: "brennnessel",
      szenario: 3,
      kategorie: "Pflanze",
      unterkategorie: "Wildkraut",
      werbung: "»Natürliches Entwässerungsmittel. Pflanzliche Hilfe bei Prostatabeschwerden. Reich an Vitaminen, traditionell bewährt, gut bei Harnwegsbeschwerden.«",
      wirkung: "Eine der nährstoffdichtesten Heilpflanzen Europas, von der Werbung auf Entwässerung und Prostata reduziert. Das Blatt liefert Eisen, Kalzium, Silizium, Vitamin K und Chlorophyll in Konzentrationen, die kein Multivitaminpräparat aus dem Supplement-Regal erreicht. Wässrige und alkoholische Extrakte hemmen TNF-α und IL-6 in mehreren Studien, ein konsistentes anti-inflammatorisches Signal, das die Volksmedizin seit dem Mittelalter empirisch ausgenutzt hat. Kleine RCTs zeigen einen antihistaminischen Effekt bei allergischer Rhinitis und blutzuckersenkende Wirkung bei Typ-2-Diabetes über alpha-Glucosidase-Hemmung. Die Wurzel hemmt die 5-alpha-Reduktase und stört die SHBG-Bindung, was die Anwendung bei benigner Prostatahyperplasie pharmakologisch trägt. Die Wurzel macht die Prostata. Das Blatt macht alles andere. Die Forschung läuft an dieser Pflanze vorbei, weil am Wegesrand kein Patent liegt.",
      quellen: [],
      related_article: null
    },

    {
      name: "Sulforaphan",
      slug: "sulforaphan",
      szenario: 3,
      kategorie: "Substanz",
      unterkategorie: "Molekül",
      werbung: "»Antioxidans aus Brokkolisprossen, 20 bis 50 Mal stärker als reifer Brokkoli. Unterstützt die natürliche Entgiftung und schützt vor oxidativem Stress. Mit standardisiertem Glucoraphanin-Gehalt für gleichbleibende Wirkung.«",
      wirkung: "Sulforaphan ist der potenteste bekannte Nrf2-Aktivator in der menschlichen Nahrung, ein einzelner Schalter, der ein ganzes Phase-II-Programm hochfährt. Glutathion-S-Transferasen, NQO1, HO-1 und die Glutamatcystein-Ligase werden induziert, der Körper aktiviert seine eigene Stressantwort, statt sie von außen geliefert zu bekommen. Klinisch ist das angekommen, ein doppelblinder RCT findet signifikante Verbesserungen auf Autismus-Verhaltensskalen unter 18 Wochen Brokkoli-Sprossen-Extrakt, in China beschleunigt Sulforaphan die Ausscheidung von Aflatoxin- und Acrolein-Metaboliten messbar, bei Typ-2-Diabetes senken Brokkolisprossen Insulin und HOMA-IR. Das Problem ist nicht die Substanz, es ist die Bioverfügbarkeit, denn aktive Myrosinase wird beim Erhitzen zerstört, und ohne sie konvertiert Glucoraphanin im Darm nur unzuverlässig zu Sulforaphan. Die Sprossen-Standardisierung schwankt um den Faktor zehn, was die Werbung als »definierter Glucoraphanin-Gehalt« verkauft, ist im Regal eine Lotterie. Was die Werbung Antioxidans nennt, ist in Wahrheit die Anweisung, eines zu werden.",
      quellen: ["Singh 2014", "Egner 2014", "Bahadoran 2013", "Yagishita 2019"],
      related_article: null
    },

    {
      name: "Spilanthol (Acmella oleracea)",
      slug: "spilanthol",
      szenario: 3,
      kategorie: "Pflanze",
      unterkategorie: "Blüte",
      werbung: "Es gibt keine. Die Kosmetik vermarktet die Pflanze als Botox-Ersatz für die Stirn, die Lebensmittelindustrie schweigt, und kein Supplement-Hersteller hat verstanden, was er in der Hand hält.",
      wirkung: "Spilanthol ist ein N-Isobutylamid, das auf trigeminale Afferenzen wirkt, nicht auf das Zentralnervensystem. Es aktiviert TRPV1- und TRPA1-Kanäle in den freien Nervenendigungen der Mundschleimhaut, was als prickelndes, fast elektrisches Erwachen wahrgenommen wird und nichts mit Geschmack zu tun hat, sondern mit Berührung. Das ist sensorisch einzigartig, weil keine andere Pflanze der Welt diese Form der Salivation auslöst, weder Chili noch Menthol noch Sanshool. Pharmakologisch ist die Substanz darüber hinaus dokumentiert anti-inflammatorisch über COX-2- und iNOS-Hemmung und in einer doppelblinden RCT bei Kniearthrose topisch vergleichbar mit Diclofenac-Gel, aber das ist nicht der Grund, warum sie in einem Botanical Soda steht. Sie steht dort, weil sie ein Getränk wach macht, ohne ein Stimulans zu sein. Eine Substanz, die nur funktioniert, wenn die Zunge sie trifft, gehört in keine Kapsel.",
      quellen: ["Wu 2008", "Boonen 2010"],
      related_article: null
    },

    {
      name: "Passionsblume (Passiflora incarnata)",
      slug: "passionsblume",
      szenario: 1,
      kategorie: "Pflanze",
      unterkategorie: "Blüte",
      werbung: "»Pflanzliche Beruhigung bei Nervosität und Schlafstörungen. Sanfte Hilfe ohne Gewöhnungseffekt, traditionell bewährt.«",
      wirkung: "Eine der wenigen Pflanzen, deren anxiolytische Wirkung in randomisierten kontrollierten Studien gegen Benzodiazepine bestanden hat. Akhondzadeh 2001 zeigt bei generalisierter Angststörung Äquivalenz zu Oxazepam über vier Wochen, mit signifikant weniger Beeinträchtigung der Arbeitsleistung. Movafegh 2008 dokumentiert präoperative Anxiolyse über 90 Minuten ohne sedativen Überhang. Der Wirkmechanismus läuft über Chrysin und weitere Flavonoide als positive allosterische Modulatoren am GABA-A-Rezeptor, ein Profil, das pharmakologisch verwandt mit Benzodiazepinen ist, klinisch aber ohne deren Abhängigkeitspotenzial. Tierdaten weisen darüber hinaus auf antikonvulsive und dopaminerge Effekte, die im westlichen Forschungsbetrieb nie ernsthaft verfolgt wurden. Eine Pflanze, die mit Oxazepam auf Augenhöhe verhandelt und in der Werbung als »sanfte Hilfe« erscheint, wird systematisch unter ihrem Wert verkauft.",
      quellen: ["Akhondzadeh 2001", "Movafegh 2008"],
      related_article: null
    },

    {
      name: "Baldrian (Valeriana officinalis)",
      slug: "baldrian",
      szenario: 1,
      kategorie: "Pflanze",
      unterkategorie: "Wurzel",
      werbung: "»Pflanzliches Schlafmittel. Beruhigt bei Einschlafstörungen und innerer Unruhe, ohne Tageschläfrigkeit am nächsten Morgen.«",
      wirkung: "Die Studienlage zum Schlaf ist heterogen, weil die Industrie sich auf wässrige Standardextrakte verlässt, die Valerensäure und Valepotriate in wechselnden Konzentrationen enthalten. Wo sauber gemessen wurde, zeigen sich konsistente Effekte. Valerensäure bindet als positiver allosterischer Modulator an die β3-Untereinheit des GABA-A-Rezeptors, hemmt den GABA-Abbau und wirkt zusätzlich als partieller Agonist am 5-HT5A-Rezeptor, was den anxiolytischen Anteil erklärt. Eine Metaanalyse von 16 RCTs findet eine signifikante subjektive Schlafverbesserung, ohne den objektiven Polysomnographie-Befund vollständig zu bestätigen, ein Diskrepanzmuster, das in der Pflanzenforschung typisch ist und mehr über die Messung als über die Substanz sagt. Außerhalb des Schlafs gibt es Daten zu Tremor, Wechseljahresbeschwerden und Reizdarm, die kaum jemand zitiert. Die Pflanze ist breiter als ihr Etikett, aber das Etikett verkauft sich besser.",
      quellen: ["Bent 2006"],
      related_article: null
    },

    {
      name: "Szechuanpfeffer (Zanthoxylum piperitum / bungeanum)",
      slug: "szechuanpfeffer",
      szenario: 3,
      kategorie: "Pflanze",
      unterkategorie: "Samen",
      werbung: "»Exotisches Gewürz aus der chinesischen und japanischen Küche. Aromatisch-zitronig mit prickelnder Schärfe, ideal für Wok-Gerichte und Marinaden.«",
      wirkung: "Das Hydroxy-alpha-Sanshool im Pfeffer aktiviert KCNK-Kaliumkanäle in mechanosensitiven Nervenfasern und erzeugt damit eine wahrnehmbare Vibration im Mund, die in einer Frequenzanalyse mit 50 Hz quantifizierbar ist. Das ist keine Schärfe und keine Kühle, sondern eine taktile Halluzination, ein Berührungseindruck ohne Berührung, neuropharmakologisch ein Phänomen, das bisher kein anderer Naturstoff reproduziert hat. Die Substanz aktiviert zusätzlich TRPA1, hat in präklinischen Modellen anti-inflammatorische und analgetische Eigenschaften, und die Wurzelrinde wird in der traditionellen chinesischen Medizin bei chronischen Schmerzen verwendet, mit Hinweisen auf periphere Nervenregeneration in Tiermodellen. Was als Gewürz im Regal steht, ist molekular eine pharmakologische Sonde mit unausgeschöpftem Potenzial. Die Küche hat es früher entdeckt als die Wissenschaft.",
      quellen: ["Hagura 2013"],
      related_article: null
    },

    {
      name: "Ingwer (Zingiber officinale)",
      slug: "ingwer",
      szenario: "sonderfall",
      kategorie: "Pflanze",
      unterkategorie: "Wurzel",
      werbung: "»Wärmt von innen, hilft bei Übelkeit und unterstützt die Verdauung. Reich an ätherischen Ölen und traditionell als Hausmittel bewährt.«",
      wirkung: "Die antiemetische Wirkung ist die am besten dokumentierte und gleichzeitig die langweiligste Eigenschaft der Pflanze. Gingerol und Shogaol antagonisieren 5-HT3-Rezeptoren am Vagusnerv, was die Wirksamkeit bei Schwangerschaftserbrechen, Chemotherapie-induzierter Übelkeit und Reisekrankheit erklärt und in mehr als 30 RCTs bestätigt ist. Interessanter ist, was darunter liegt. Eine doppelblinde RCT vergleicht 250 mg Ingwerpulver mit 50 mg Sumatriptan bei akuter Migräne und findet vergleichbare Schmerzreduktion bei deutlich besserem Nebenwirkungsprofil. Die COX- und LOX-Hemmung trägt eine analgetische Wirkung bei Osteoarthritis, die in einer großen RCT der Wirkung von Ibuprofen nahekommt. Hinzu kommen Daten zu HbA1c-Reduktion bei Typ-2-Diabetes, beschleunigter Magenentleerung und einer Hemmung der Plättchenaggregation, die klinisch relevant ist und in keinem Beipackzettel auftaucht. Das Hausmittel ist ein Pharmakon, das niemand patentieren konnte.",
      quellen: ["Maghbooli 2014", "Altman 2001"],
      related_article: null
    },

    {
      name: "Limonenöl / D-Limonen",
      slug: "limonenoel-d-limonen",
      szenario: 3,
      kategorie: "Fettsäure",
      unterkategorie: "Öl",
      werbung: "»Erfrischender Zitrusduft für Aromatherapie und Haushalt. Reinigt natürlich und sorgt für gute Laune.«",
      wirkung: "D-Limonen ist eines der am besten erforschten Monoterpene mit Daten, die weit über Duft hinausreichen. Wilkins 2002 zeigt in einer offenen Studie bei GERD eine Symptomfreiheit über zwei Wochen bei 89 Prozent der Teilnehmer nach Einnahme von 1000 mg jeden zweiten Tag, ein Effekt, der bisher in keinem Protonenpumpenhemmer-Vergleich seriös nachgeprüft wurde. In einer Phase-I-Studie bei Brustkrebs reichern sich Limonen-Metaboliten im Tumorgewebe an und reduzieren die Cyclin-D1-Expression, ein Befund, der präklinisch durch chemopräventive Daten in Kolon-, Haut- und Mammakarzinom-Modellen gestützt wird. Die Substanz induziert Phase-II-Detoxenzyme wie Glutathion-S-Transferase, was die hepatoprotektive Beobachtung in mehreren Tiermodellen erklärt. Olfaktorisch wirkt sie über limbische Bahnen anxiolytisch und antidepressiv, was die Aromatherapie zufällig richtig macht, ohne den pharmakologischen Hintergrund zu kennen. Eine Zitrusschale wird hier als Putzmittel verkauft, obwohl sie eine Phase-I-Studie hinter sich hat.",
      quellen: ["Wilkins 2002", "Miller 2013", "Komiya 2006"],
      related_article: null
    },

    {
      name: "Wacholder (Juniperus communis)",
      slug: "wacholder",
      szenario: 3,
      kategorie: "Pflanze",
      unterkategorie: "Beere",
      werbung: "»Botanical für Gin. Aromatische Beere mit harzig-würziger Note, traditionell für Kräuterliköre und Wildgerichte verwendet.«",
      wirkung: "Wacholder war über Jahrhunderte eine der wichtigsten Heilpflanzen Europas, mit Anwendungen gegen Harnwegsinfekte, Rheuma, Verdauungsbeschwerden und in der Pestzeit als Räuchermittel zur Luftdesinfektion. Das ätherische Öl enthält alpha-Pinen, Myrcen und Sabinen, eine Kombination, die in vitro antimikrobielle Aktivität gegen E. coli, Staphylococcus aureus und Candida albicans zeigt und in der Volksmedizin empirisch die diuretische Wirkung trug, bevor Terpinen-4-ol als wahrscheinlicher Wirkstoff identifiziert wurde. Wässrige Beerenextrakte hemmen TNF-α und reduzieren Ödeme in Tiermodellen, eine alkoholische Tinktur senkt postprandiale Blutzuckerspitzen in einer kleinen Humanstudie. Die antiseptische Wirkung des Rauchs ist in einer experimentellen Studie zur Krankenhaushygiene tatsächlich gemessen worden, ein Befund, der die mittelalterliche Praxis pharmakologisch trägt. Heute steht die Beere im Supermarkt unter den Gewürzen und ihr wichtigster Markt ist eine Spirituose. Die Pflanze hat die Pest überlebt, aber nicht die Gin-Renaissance.",
      quellen: ["Acar 2016"],
      related_article: null
    },

    {
      name: "NAD+ / NMN",
      slug: "nad-nmn",
      szenario: 2,
      kategorie: "Substanz",
      unterkategorie: "Molekül",
      werbung: "»NMN gegen das Altern. Zellverjüngung auf molekularer Ebene. Fühl dich wieder wie 30. Die Longevity-Revolution aus dem Silicon Valley, jetzt auch für jeden, der sie sich leisten kann.«",
      wirkung: "Hinter dem Longevity-Marketing steht ein Molekül, ohne das keine Zelle des Körpers Energie produziert. NAD+ ist die zentrale Währung des oxidativen Stoffwechsels, der Kofaktor von mehr als fünfhundert Enzymen, und sein Spiegel sinkt mit dem Alter messbar um etwa 50 Prozent, ein Befund, der mit praktisch jeder altersbedingten Pathologie korreliert, von Kognition über Stimmung und Schlaf bis zur Entzündungskontrolle. Die Vorläufer NMN und NR reaktivieren über SIRT3 die mitochondriale Atmungskette und über SIRT1/PGC-1α die mitochondriale Biogenese, was in Tiermodellen die Hippocampusfunktion restauriert und depressives Verhalten messbar umkehrt. Yoshino 2017 zeigt am Menschen, dass orales NMN bioverfügbar ist und den NAD+-Spiegel in Skelettmuskel und peripheren mononukleären Blutzellen erhöht, eine pharmakokinetische Grundlage, die das Marketing nicht braucht und die Psychiatrie ignoriert, obwohl die Daten zur mitochondrialen Energiekrise unter dem Etikett »Depression« seit Jahren auf dem Tisch liegen. In der EU steht NMN unter dem Novel-Food-Vorbehalt und ist nicht durchgehend zugelassen, ein regulatorisches Problem, das die Substanz politisch betrifft und pharmakologisch nichts über sie aussagt. Das Longevity-Marketing macht NAD+ zur Hautcreme, der Regulator macht es zum Aktenzeichen, und dazwischen verschwindet der Kofaktor, ohne den keine Zelle Energie produziert.",
      quellen: ["Xie 2020", "Yoshino 2017"],
      related_article: null
    },

    // ============================================================
    // BATCH 4 — Probiotika stammspezifisch
    // ============================================================

    {
      name: "Lactobacillus rhamnosus GG (LGG)",
      slug: "lactobacillus-rhamnosus-gg",
      szenario: 3,
      kategorie: "Mikrobiom",
      unterkategorie: "Bakterium",
      werbung: "»Bewährter Lactobacillus für Magen, Darm und Immunsystem. Tausendfach studiert, weltweit eingesetzt.«",
      wirkung: "Das Kürzel verewigt zwei Bostoner Forscher, Gorbach und Goldin, die den Stamm 1985 isolierten. Seitdem über 800 klinische Arbeiten. Die wichtigste Wirkung: Prävention von Antibiotika-Durchfall. Dazu Reduktion akuter Diarrhö bei Kindern, Schutz vor atopischer Dermatitis bei Risiko-Säuglingen, weniger Atemwegsinfekte in Kitas.\n\nDie Mechanismen sind bekannt: kompetitive Verdrängung, IgA-Induktion, Tight-Junction-Stabilisierung. Aber hier die Kernregel: Ein Produkt mit »enthält L. rhamnosus« ohne den Code GG ist ein Blindkauf. Andere Stämme derselben Spezies haben andere Profile.\n\nDer Stamm-Code ist die Pharmakologie. Alles andere ist Dekoration.",
      quellen: ["Cochrane Hempel 2012", "Kalliomäki 2001", "Hatakka 2001"],
      related_article: null
    },

    {
      name: "Lactobacillus plantarum 299v",
      slug: "lactobacillus-plantarum-299v",
      szenario: 3,
      kategorie: "Mikrobiom",
      unterkategorie: "Bakterium",
      werbung: "»Probiotischer Allrounder aus Sauerkraut. Pflanzlich, mild, traditionell.«",
      wirkung: "Der Sauerkraut-Stamm ist ein schwedisches Patent. 214 Reizdarmpatienten, vier Wochen, zehn Milliarden KBE täglich: signifikante Reduktion von Bauchschmerz, Blähungen, Stuhlfrequenz.\n\nZweiter Befund: Frauen mit niedrigem Ferritin absorbieren fünfzig Prozent mehr Nicht-Häm-Eisen. Relevant für Vegetarierinnen. Der Stamm produziert antimikrobielle Plantaricine und stabilisiert die Darmbarriere über Mucin-Induktion.\n\nWas als probiotischer Kohl firmiert, ist im Befund ein Reizdarm-Therapeutikum mit eigener Stammakte.",
      quellen: ["Ducrotté 2012", "Hoppe 2017"],
      related_article: null
    },

    {
      name: "Lactobacillus reuteri DSM 17938",
      slug: "lactobacillus-reuteri-dsm-17938",
      szenario: 3,
      kategorie: "Mikrobiom",
      unterkategorie: "Bakterium",
      werbung: "»Natürlicher Lactobacillus für Säuglinge. In Muttermilch nachweisbar, sanft und sicher.«",
      wirkung: "Reuteri ist die einzige Lactobacillus-Spezies in menschlicher Muttermilch. Der Stamm DSM 17938 ist das am besten dokumentierte Anti-Koliken-Probiotikum: neunzig Minuten weniger Schreien pro Tag gegenüber Placebo. Er produziert Reuterin, ein Aldehyd, das pathogene Keime hemmt, ohne die kommensale Flora anzugreifen.\n\nEin Schwesterstamm derselben Spezies, DSM 17648, tut etwas völlig anderes: Er adhäriert an Helicobacter pylori und scheidet die Bakterien über den Darm aus.\n\nZwei Stämme, eine Spezies, zwei Mechanismen, zwei Indikationen. Ein Speziesname auf der Packung.",
      quellen: ["Indrio 2014", "Holz 2015"],
      related_article: null
    },

    {
      name: "Lactobacillus acidophilus",
      slug: "lactobacillus-acidophilus",
      szenario: 1,
      kategorie: "Mikrobiom",
      unterkategorie: "Bakterium",
      werbung: "»Klassischer Joghurt-Lactobacillus. Wichtigstes Probiotikum in der Ernährung, für gesunden Darm.«",
      wirkung: "Die meistvermarktete Spezies. Gleichzeitig die mit der schwächsten Stammakte. Grund: Die meisten Acidophilus-Produkte geben keinen Stamm-Code an. Also keine Datenlage.\n\nAusnahme: NCFM, ein Stamm der University of North Carolina, mit moderaten Effekten auf Reizdarmschmerz und Laktosetoleranz. Im Supermarkt-Joghurt liegen die Keimzahlen bei zehn bis hundert Millionen. Klinische Studien setzen eine Milliarde ein. Unterschiedliche Acidophilus-Stämme weichen im PCR-Fingerprint stärker voneinander ab als manche Vertreter unterschiedlicher Spezies.\n\nAcidophilus auf dem Joghurt-Becher ist ein Name. Kein Wirkstoff.",
      quellen: ["Sanders 2009"],
      related_article: null
    },

    {
      name: "Lactobacillus gasseri SBT2055 / BNR17",
      slug: "lactobacillus-gasseri",
      szenario: 3,
      kategorie: "Mikrobiom",
      unterkategorie: "Bakterium",
      werbung: "»Lactobacillus für Wohlfühlgewicht. Pflanzlicher Schlankheits-Probiotikum, klinisch erforscht.«",
      wirkung: "Die ungewöhnlichste Indikation im Probiotikum-Sortiment: Reduktion viszeralen Bauchfetts. Eine japanische Studie mit SBT2055 zeigt nach zwölf Wochen fermentierter Milch eine Reduktion der viszeralen Fettfläche um 4,6 Prozent, dazu Senkung von Bauchumfang, BMI, Hüftumfang. Unabhängige Replikation mit BNR17.\n\nDer Mechanismus: konjugierte Linolsäure, gehemmte Lipidabsorption, reduzierte LPS-Translokation. Andere Gasseri-Stämme zeigen das nicht.\n\nDer Speziesname liefert den Effekt nicht. Der Stamm-Code liefert ihn.",
      quellen: ["Kadooka 2010", "Jung 2013"],
      related_article: null
    },

    {
      name: "Bifidobacterium lactis BB-12",
      slug: "bifidobacterium-lactis-bb-12",
      szenario: 3,
      kategorie: "Mikrobiom",
      unterkategorie: "Bakterium",
      werbung: "»Bifidus für sanfte Verdauung und starkes Immunsystem. Besonders mild, kindgerecht.«",
      wirkung: "BB-12 ist ein Produkt der dänischen Chr. Hansen. Über 300 Publikationen, quer durch alle Altersgruppen.\n\nBei Kindern: sieben Monate tägliche Einnahme reduziert Atemwegsinfekte und Antibiotika-Verordnungen. Bei Erwachsenen mit Obstipation: erhöhte Stuhlfrequenz. Der Mechanismus: Dendritenzell-Aktivierung, T-Helfer-1-Verschiebung, IgA-Anstieg.\n\nBifidobakterien sind im Säuglingsalter dominant und nehmen mit dem Alter ab. Die Substitution bei älteren Erwachsenen ist plausibel. BB-12 ist ein Stamm-Code, der die Werbeversprechen einer ganzen Joghurt-Marke trägt.",
      quellen: ["Taipale 2011", "Eskesen 2015"],
      related_article: null
    },

    {
      name: "Bifidobacterium longum Rosell-175",
      slug: "bifidobacterium-longum-rosell-175",
      szenario: 3,
      kategorie: "Mikrobiom",
      unterkategorie: "Bakterium",
      werbung: "»Bifidus für Wohlbefinden und Balance. Sanfter Helfer für Nervensystem und Darm.«",
      wirkung: "Klinisch nur in Kombination mit L. helveticus R0052 untersucht, unter dem Namen Probio'Stick. Diese Mischung ist das klarste Beispiel einer pharmakologisch wirksamen Darm-Hirn-Achse am Menschen.\n\nDreißig Tage tägliche Einnahme bei gestressten Erwachsenen: signifikante Reduktion von Angst, Aggression, Depression. Zehn Prozent weniger Cortisol im Urin. Replikation an Patienten mit majorer Depression: Reduktion der BDI-Werte, Anstieg von BDNF im Serum.\n\nDer Mechanismus: vagale Afferenz, GABAerge Modulation der Amygdala. Zwei Stämme, eine Mischung, ein antidepressiver Effekt. Der Beipackzettel darf das Wort Depression nicht erwähnen.",
      quellen: ["Messaoudi 2011", "Kazemi 2019"],
      related_article: null
    },

    {
      name: "Bifidobacterium bifidum",
      slug: "bifidobacterium-bifidum",
      szenario: 1,
      kategorie: "Mikrobiom",
      unterkategorie: "Bakterium",
      werbung: "»Klassischer Bifidus für Babys und Erwachsene. Traditionell empfohlen, mild und natürlich.«",
      wirkung: "Im Säuglingsalter dominant, mit dem Alter abnehmend. Das Marketing deutet das als Auftrag zur Substitution. Das Studienprofil sagt etwas anderes.\n\nSpezifische Stamm-Codes sind selten. Der am besten untersuchte, MIMBb75, zeigt bei Reizdarm moderate Symptomreduktion. Quantitativ weit unter LGG, BB-12, Saccharomyces boulardii. Die generisch verkauften Produkte enthalten meist nicht-identifizierte Isolate. Lebendkeimzahlen schlecht dokumentiert.\n\nBifidum lebt vom Wort »Bifido« auf der Packung. Nicht von einer Stammakte.",
      quellen: ["Guglielmetti 2011"],
      related_article: null
    },

    {
      name: "Saccharomyces boulardii",
      slug: "saccharomyces-boulardii",
      szenario: 3,
      kategorie: "Pilz",
      unterkategorie: "Hefe",
      werbung: "»Tropische Hefe für Reisedurchfall und Antibiotika-Begleitung. Hitzestabil, einfach in der Anwendung.«",
      wirkung: "Kein Bakterium. Eine Hefe. Henri Boulard isolierte sie 1923 in Indochina aus Litschi-Schalen, gegen die grassierende Cholera. Seitdem die am besten dokumentierte anti-diarrhoische Substanz im Probiotikum-Sortiment.\n\n31 randomisierte Studien, systematisch ausgewertet: konsistente Wirksamkeit gegen Antibiotika-Durchfall, akute infektiöse Diarrhö, Reisedurchfall, C.-difficile-Colitis. Vier unabhängige Mechanismen: enzymatische Spaltung des C.-difficile-Toxins, Hemmung pathogener Adhärenz, Tight-Junction-Stabilisierung, IgA-Induktion.\n\nDazu intrinsische Antibiotikaresistenz, was simultane Einnahme mit oralen Antibiotika erlaubt. Das kann kein bakterielles Probiotikum. Eine Litschi-Hefe aus den 1920er Jahren hält in der Cochrane-Datenlage stand.",
      quellen: ["McFarland 2010"],
      related_article: null
    },

    {
      name: "Akkermansia muciniphila",
      slug: "akkermansia-muciniphila",
      szenario: 3,
      kategorie: "Mikrobiom",
      unterkategorie: "Bakterium",
      werbung: "»Next-Generation-Probiotikum für Stoffwechsel und Darmgesundheit. Forschungsstamm für anspruchsvolle Anwender.«",
      wirkung: "Erst 2004 isoliert vom niederländischen Mikrobiologen Antoon Akkermans. Die Spezies lebt in der inneren Schleimschicht des Darms und frisst ausschließlich Mucin. Direkter Kontakt zur Darmbarriere.\n\nNiedrige Akkermansia-Abundanz korreliert mit Adipositas, Typ-2-Diabetes, Lebersteatose. Phase-II-Studie an Übergewichtigen mit metabolischem Syndrom: drei Monate pasteurisierte Akkermansia senkt Leberenzyme, verbessert Insulinsensitivität, reduziert LDL.\n\nBemerkenswert: Die pasteurisierte Form wirkt stärker als die lebende. Das kehrt die Probiotikum-Logik um. Eine 2004 entdeckte Mucin-Spezialistin liefert als Totpräparat, was Metformin in kleiner Dosis schafft.",
      quellen: ["Depommier 2019"],
      related_article: null
    },

    // ============================================================
    // BATCH 5 — Bacillus-Rest + Präbiotika
    // ============================================================

    {
      name: "Bacillus coagulans (GBI-30, 6086)",
      slug: "bacillus-coagulans",
      szenario: 3,
      kategorie: "Mikrobiom",
      unterkategorie: "Bakterium",
      werbung: "»Robuster sporenbildender Probiotikum-Stamm, magensaft- und antibiotikaresistent. Hitzestabil bis zur Backtemperatur, ideal für Funktionsnahrung und Riegel.«",
      wirkung: "Die Spore überlebt Magensäure, Antibiotika und Backofen. Das ist keine Werbung, das ist Biochemie.\n\nBei Reizdarm reduziert der Stamm GBI-30 Schmerzen und Blähungen über acht Wochen. Man kann ihn parallel zum Antibiotikum nehmen, ohne dass er stirbt. Macht nur kein Arzt.",
      quellen: [],
      related_article: null
    },

    {
      name: "Bacillus subtilis (DE111 / Natto)",
      slug: "bacillus-subtilis",
      szenario: 1,
      kategorie: "Mikrobiom",
      unterkategorie: "Bakterium",
      werbung: "»Ahnenstamm aus der Natur für ein robustes Mikrobiom. Soil-based-Probiotikum, traditionell in fermentierten Sojabohnen, ursprünglich an die menschliche Verdauung angepasst.«",
      wirkung: "»Soil-based« klingt nach Urzeit-Weisheit. Bedeutet: aus dem Dreck.\n\nNur zwei Stämme haben Humandaten. Der Rest ist Marketing mit Erde drauf. Wer Natto isst, bekommt Vitamin K2 als Bonus. Wer Kapseln schluckt, bekommt einen Stamm-Code oder ein Fragezeichen.",
      quellen: [],
      related_article: null
    },

    {
      name: "Inulin",
      slug: "inulin",
      szenario: 1,
      kategorie: "Mikrobiom",
      unterkategorie: "Präbiotikum",
      werbung: "»Pflanzliche Wunderfaser für gesunde Darmflora, Bifidobakterien-Wachstum und natürliche Süße ohne Zucker. In Chicorée, Topinambur und tausend Funktionsnahrungsmitteln.«",
      wirkung: "Inulin füttert Bifidobakterien. Das stimmt.\n\nEs produziert dabei Gas, Blähungen und Krämpfe bei jedem, dessen Darm ohnehin schon gereizt ist. Wer Reizdarm hat, macht es mit Inulin schlimmer. Steht nicht auf dem Joghurt.",
      quellen: [],
      related_article: null
    },

    {
      name: "FOS (Fructooligosaccharide)",
      slug: "fos-fructooligosaccharide",
      szenario: 3,
      kategorie: "Mikrobiom",
      unterkategorie: "Präbiotikum",
      werbung: "»Pflanzlicher Süßstoff und Präbiotikum aus Chicorée und Agave. Bifidogen, kalorienarm, ideal für die gesunde Darmflora.«",
      wirkung: "Kürzer als Inulin, präziser in der Wirkung. Zehn Gramm am Tag verdoppeln die Bifidobakterien und halbieren die Pathogene. Verbessert nebenbei die Kalziumaufnahme.\n\nDie Industrie nutzt es als Süßstoff. Der Rest ist Beifang.",
      quellen: [],
      related_article: null
    },

    {
      name: "GOS (Galactooligosaccharide)",
      slug: "gos-galactooligosaccharide",
      szenario: 3,
      kategorie: "Mikrobiom",
      unterkategorie: "Präbiotikum",
      werbung: "»Mild verträgliches Präbiotikum, in Muttermilch natürlicherweise enthalten. Sanft fördernd für die Darmflora von Säuglingen und Erwachsenen.«",
      wirkung: "GOS senkt die Cortisol-Aufwachreaktion nach drei Wochen. Messbar. Bei Säuglingen halbiert es Hautekzeme und Darminfekte. Weniger Gas als Inulin, bessere Verträglichkeit.\n\nWird in der Apotheke als »sanftes Präbiotikum für Anspruchsvolle« verkauft. Anspruchsvoll heißt: teuer.",
      quellen: [],
      related_article: null
    },

    {
      name: "Resistente Stärke (RS2 / RS3)",
      slug: "resistente-staerke",
      szenario: 3,
      kategorie: "Mikrobiom",
      unterkategorie: "Präbiotikum",
      werbung: "»Pflanzliche Spezial-Stärke aus grünen Bananen, gekochten und abgekühlten Kartoffeln. Hilft beim Abnehmen, gut für die Verdauung, neue Faser-Generation.«",
      wirkung: "Koch Kartoffeln. Lass sie kalt werden. Iss sie.\n\nDie Stärke wird resistent, der Darm macht Butyrat draus, die Darmschleimhaut heilt. Verbessert nebenbei die Insulinsensitivität. Kein Pulver nötig. Kalte Bratkartoffel schlägt Kapsel.",
      quellen: [],
      related_article: null
    },

    {
      name: "Psyllium (Plantago ovata)",
      slug: "psyllium",
      szenario: 3,
      kategorie: "Pflanze",
      unterkategorie: "Samen",
      werbung: "»Quellfaser aus indischen Flohsamen für sanfte Regulierung der Verdauung. Klassisches Hausmittel bei Verstopfung und Durchfall, gut für Sättigung und Blutzucker.«",
      wirkung: "FDA Health Claim seit 2000. Senkt LDL um sieben bis neun Prozent. Funktioniert bei Verstopfung und bei Durchfall, weil die Faser das Vierzigfache ihres Gewichts an Wasser aufnimmt. Senkt HbA1c bei Diabetikern.\n\nKostet fast nichts. Heißt trotzdem Hausmittel.",
      quellen: [],
      related_article: null
    },

    {
      name: "PHGG (teilhydrolysiertes Guarkernmehl, Sunfiber)",
      slug: "phgg",
      szenario: 3,
      kategorie: "Mikrobiom",
      unterkategorie: "Präbiotikum",
      werbung: "»Mild verträgliche Faser aus indischer Guarbohne, partiell hydrolysiert. Magenfreundlich, ohne Gas und Blähungen, geeignet für sensiblen Darm.«",
      wirkung: "Die eleganteste Faser auf dem Markt. Fermentiert langsam, produziert Butyrat ohne Explosion. Funktioniert bei Reizdarm, egal welche Variante. Senkt Blutzucker und Cholesterin.\n\nSchmeckt nach nichts. Kennt niemand. Genau das ist das Problem.",
      quellen: [],
      related_article: null
    },

    {
      name: "Pektin (inkl. Modified Citrus Pectin)",
      slug: "pektin",
      szenario: 3,
      kategorie: "Mikrobiom",
      unterkategorie: "Präbiotikum",
      werbung: "»Pflanzliches Geliermittel aus Äpfeln und Zitrusfrüchten. Klassisch in Marmelade, sanft entgiftend, gut für die Verdauung.«",
      wirkung: "Normales Pektin senkt Cholesterin wie Psyllium. Modifiziertes Pektin geht ins Blut und hemmt Galektin-3, ein Protein, das Tumore wachsen lässt. Phase-II-Studie bei Prostatakrebs: PSA-Verdopplungszeit verlangsamt.\n\nBindet nebenbei Blei im Darm. Steht in der Marmeladen-Abteilung.",
      quellen: [],
      related_article: null
    },

    {
      name: "Beta-Glucan (Hafer)",
      slug: "beta-glucan-hafer",
      szenario: 3,
      kategorie: "Mikrobiom",
      unterkategorie: "Präbiotikum",
      werbung: "»Lösliche Hafer-Faser für gesundes Cholesterin, Sättigung und Verdauung. Klassisch in Haferflocken, von der FDA für die Cholesterinsenkung zugelassen.«",
      wirkung: "Zwei Schüsseln Haferflocken am Tag senken LDL-Cholesterin um fünf bis zehn Prozent. Die FDA hat das 1997 bestätigt.\n\nDas Gel im Darm fängt Gallesäuren ab, die Leber holt sich Nachschub aus dem Blut. Mechanisch, nicht magisch. Frühstück reicht.",
      quellen: [],
      related_article: null
    },

    // ============================================================
    // BATCH 7 — Hepato-Detox-Rest + Darmschleimhaut
    // ============================================================

    {
      name: "Akazienfaser",
      slug: "akazienfaser",
      szenario: 3,
      kategorie: "Mikrobiom",
      unterkategorie: "Präbiotikum",
      werbung: "»Natürlicher Ballaststoff. Sanft zur Verdauung. Ideal für sensible Bäuche.«",
      wirkung: "Akazienfaser fermentiert langsamer als Inulin. Das klingt nach Nachteil, ist aber der Punkt. Inulin explodiert im rechten Dickdarm und produziert Gas. Akazienfaser verteilt sich über die gesamte Kolonlänge, kein Blähbauch, trotzdem Präbiotik.\n\nVier Wochen täglich zehn Gramm erhöhen Bifidobakterien und Laktobazillen signifikant, bei besserer Verträglichkeit als Inulin. Anwendung bei Reizdarm, Antibiotika-Durchfall, chronischer Verstopfung.\n\nEine Faser, die wirkt wie Inulin und sich anfühlt wie Reis. Deshalb kennt sie niemand.",
      quellen: ["Calame 2008", "Babiker 2007"],
      related_article: null
    },

    {
      name: "Desmodium adscendens",
      slug: "desmodium-adscendens",
      szenario: 3,
      kategorie: "Pflanze",
      unterkategorie: "Kraut",
      werbung: "»Afrikanisches Leberkraut. Traditionelle Pflanzenkraft aus den Tropen.«",
      wirkung: "In Westafrika ein Leberschutz, in Frankreich ein verschreibungsfähiges Phytopharmakon, in Deutschland unbekannt.\n\nDesmodium stabilisiert Hepatozytenmembranen und moduliert das Glutathion-System. Klinisch getestet an Tuberkulose-Patienten unter Isoniazid und Rifampicin: signifikant weniger Leberschäden unter Desmodium-Begleitung. Repliziert bei medikamenteninduzierter Hepatitis, bei Hepatitis B. Dazu antihistaminische Wirkung über Phospholipase-A2-Hemmung, was die traditionelle Asthma-Anwendung erklärt.\n\nIn Paris ein Standardmittel bei Begleithepatitis. In Berlin kennt es der Heilpraktiker nicht.",
      quellen: ["Bensimon 1996"],
      related_article: null
    },

    {
      name: "Korianderkraut",
      slug: "korianderkraut",
      szenario: 1,
      kategorie: "Pflanze",
      unterkategorie: "Kraut",
      werbung: "»Chelatierende Wirkung. Natürliche Entgiftung. Schwermetalle raus.«",
      wirkung: "Eine Mausstudie aus 2001. Seitdem nichts. Keine Humandaten, keine Fallserie, keine Replikation.\n\nDie Mäuse hatten weniger Blei im Knochenmark, und zwanzig Jahre später verkauft das Internet Koriander als Schwermetall-Chelator. Was existiert: antimikrobielle Wirkung gegen Salmonellen in vitro, moderate Blutzuckersenkung im Tierversuch. Was nicht existiert: irgendetwas, das die Detox-Behauptung trägt.\n\nKoriander ist ein Würzkraut mit einer Mausstudie und einem Marketingproblem.",
      quellen: ["Aga 2001"],
      related_article: null
    },

    {
      name: "L-Glutamin",
      slug: "l-glutamin",
      szenario: 3,
      kategorie: "Aminosäure",
      unterkategorie: "Aminosäure",
      werbung: "»Aminosäure für den Darm. Hauptbrennstoff der Darmzellen. Gegen Leaky Gut.«",
      wirkung: "Die Enterozyten beziehen fünfunddreißig bis fünfzig Prozent ihrer Energie aus einer einzigen Aminosäure. L-Glutamin reguliert Tight-Junction-Proteine, schließt also die Löcher, durch die bei Leaky Gut Moleküle durchkommen, die nicht durchkommen sollten.\n\nAcht Wochen täglich fünfzehn Gramm bei Reizdarm mit dokumentierter Hyperpermeabilität: signifikante Symptomreduktion. In der Intensivmedizin Bestandteil der parenteralen Ernährung, reduziert Infektionsrate und Krankenhausaufenthalt.\n\nIm Sportregal liegt eine Aminosäure, die in der Intensivmedizin Standard ist.",
      quellen: ["Wang 2015", "Zhou 2018"],
      related_article: null
    },

    {
      name: "Zink-Carnosin (Polaprezinc)",
      slug: "zink-carnosin",
      szenario: 3,
      kategorie: "Substanz",
      unterkategorie: "Molekül",
      werbung: "»Magenschutz aus Zink und L-Carnosin. Innovativer Schleimhautschutz.«",
      wirkung: "In Japan seit 1994 verschreibungspflichtig gegen Magengeschwüre. Heilungsrate vergleichbar mit Sucralfat.\n\nPolaprezinc klebt an der geschädigten Schleimhaut und induziert Hitzeschock-Protein HSP70, das die Zellregeneration beschleunigt. Sieben Tage 75 mg reduzieren NSAID-induzierte Magenläsionen signifikant. Verbessert die Eradikationsrate bei Helicobacter-Triple-Therapie. Wirkt auch bei Geschmacksstörungen und Hyperammonämie unter Leberzirrhose.\n\nIn Tokyo ein Rezept, in Berlin ein Nahrungsergänzungsmittel.",
      quellen: ["Watari 2008", "Kashimura 1999"],
      related_article: null
    },

    {
      name: "DGL (Deglycyrrhiziniertes Süßholz)",
      slug: "dgl-deglycyrrhiziniertes-suessholz",
      szenario: 3,
      kategorie: "Pflanze",
      unterkategorie: "Wurzel",
      werbung: "»Süßholz ohne Blutdruck-Risiko. Magenfreundlich und sanft.«",
      wirkung: "Normales Süßholz enthält Glycyrrhizin, das die Cortisol-Inaktivierung hemmt und Bluthochdruck macht. DGL ist Süßholz minus Glycyrrhizin. Was bleibt: Liquiritin und Glabridin, die Mucin und Prostaglandin E2 in der Magenschleimhaut hochfahren.\n\nZwölf Wochen DGL bei Magengeschwür: Heilungsrate vergleichbar mit Cimetidin, kein Rebound nach Absetzen. Wirkt bei Reflux, Aphthen, Dyspepsie.\n\nDGL ist Süßholz mit chirurgisch entferntem Risiko. Im Sortiment selten in dieser Reinheit.",
      quellen: ["Morgan 1985"],
      related_article: null
    },

    {
      name: "Slippery Elm (Ulmenrinde)",
      slug: "slippery-elm-ulmenrinde",
      szenario: 3,
      kategorie: "Pflanze",
      unterkategorie: "Rinde",
      werbung: "»Indianisches Heilkraut. Schleimstoffreich. Beruhigend für Magen und Darm.«",
      wirkung: "Die Innenrinde der amerikanischen Ulme quillt auf Schleimhaut und bildet eine Schutzschicht. Keine isolierbare Substanz, kein Wirkstoff im pharmazeutischen Sinn.\n\nTrotzdem: acht Wochen bei Reizdarm reduzieren Bauchschmerzen und Blähungen signifikant. Symptombesserung bei chronisch entzündlicher Darmerkrankung als Therapie-Adjuvans. In Hustenpräparaten etabliert, weil dieselbe Schleimschicht die Bronchien dämpft.\n\nDie Ulme liefert einen Film, keine Substanz. Das Pharmazie-Lehrbuch kann damit nichts anfangen. Der Darm schon.",
      quellen: ["Hawrelak 2010"],
      related_article: null
    },

    {
      name: "Eibischwurzel (Althaea officinalis)",
      slug: "eibischwurzel",
      szenario: 3,
      kategorie: "Pflanze",
      unterkategorie: "Wurzel",
      werbung: "»Klassische Heilpflanze mit Schleimstoffen. Sanft bei Husten und Reizmagen.«",
      wirkung: "Bis zu zwanzig Prozent Schleimstoffe. Das Polysaccharidgemisch klebt am Epithel und bleibt dort Stunden. Quantifiziert an menschlichem Mundschleimhautgewebe.\n\nIn der Pädiatrie als Hustenstiller empfohlen, weil es ohne Codein-Nebenwirkungen die Reizweiterleitung dämpft. Dazu entzündungshemmend an der Magenschleimhaut, immunmodulatorisch über Phagozyten-Aktivierung.\n\nEibisch wirkt über einen Polysaccharid-Film. Ohne diesen Film hat die Pharmakologie nichts zu erklären.",
      quellen: ["Deters 2010"],
      related_article: null
    },

    {
      name: "Aloe Vera",
      slug: "aloe-vera",
      szenario: 3,
      kategorie: "Pflanze",
      unterkategorie: "Blatt",
      werbung: "»Universalpflanze für Haut, Verdauung und Immunsystem. Natürlich und vielseitig.«",
      wirkung: "Über zweihundert bioaktive Verbindungen. Der Hauptwirkstoff heißt Acemannan und aktiviert dendritische Zellen.\n\nVier Wochen oral bei aktiver Colitis ulcerosa: signifikante Remission gegenüber Placebo. Beschleunigte Heilung bei Aphthen. Erhöhte Bioverfügbarkeit von Vitamin C und E bei gleichzeitiger Einnahme. Topisch beschleunigte Wundheilung bei Verbrennungen.\n\nAber: Die äußere Blattschicht enthält Aloin, genotoxisch, seit 2013 IARC-Karzinogen Gruppe 2B. Der Wert von Aloe hängt vollständig daran, dass inneres Gel und Ganzblattextrakt nicht dasselbe sind.",
      quellen: ["Langmead 2004", "Vinson 2005"],
      related_article: null
    },

    {
      name: "Boswellia (Weihrauch)",
      slug: "boswellia-weihrauch",
      szenario: 3,
      kategorie: "Pflanze",
      unterkategorie: "Harz",
      werbung: "»Indisches Heilharz für Gelenke und Entzündungen. Ayurveda-Klassiker.«",
      wirkung: "Der aktive Bestandteil AKBA hemmt selektiv die 5-Lipoxygenase, ein Enzym, das konventionell nur durch wenige patentierte Substanzen adressiert wird.\n\nSechs Wochen bei aktiver Colitis ulcerosa: Remissionsrate vergleichbar mit Sulfasalazin. Acht Wochen bei Knie-Arthrose: signifikante Schmerzreduktion. Bei Asthma: weniger Anfälle, bessere Lungenfunktion. Anders als COX-Hemmer greift die 5-LOX-Hemmung die Magenschleimhaut nicht an.\n\nIm Ayurveda heißt es Salai Guggal. Im westlichen Markt liegt ein selektiver Entzündungshemmer zwischen Räucherstäbchen und Knie-Kapsel.",
      quellen: ["Gupta 1997", "Kimmatkar 2003", "Gupta 1998"],
      related_article: null
    },

    // ============================================================
    // BATCH 9 — Defers + NAD+/Sirtuin/Senolytika
    // ============================================================

    {
      name: "Bittersalz · Glaubersalz",
      slug: "bittersalz-glaubersalz",
      szenario: 1,
      kategorie: "Mineral",
      unterkategorie: "Mineral",
      werbung: "»Klassische Mayr-Substanz für Darmreinigung und Detox. Salinische Abführmittel für Frühjahrskuren und Entschlackungskuren, traditionell in der Naturheilkunde verwendet.«",
      wirkung: "Bittersalz ist Magnesiumsulfat. Glaubersalz ist Natriumsulfat. Beide ziehen Wasser ins Darmlumen. Der Stuhl wird flüssig. Das ist der gesamte Mechanismus.\n\nKlinisch etabliert: Darmreinigung vor Koloskopie. 15 bis 30 Gramm, einmalig, Wirkung nach zwei bis sechs Stunden. Danach ist der Darm leer. Nicht sauber, nicht entgiftet, leer.\n\nDas Konzept »Schlacken« hat keine wissenschaftliche Grundlage. Es gibt keine Toxin-Ablagerungen, die salinische Abführmittel selektiv entfernen. Die Substanz unterscheidet nicht zwischen Wasser, Stuhl und hypothetischen Giften.\n\nRegelmäßige Anwendung über Wochen induziert Elektrolytverschiebungen und Darmträgheit. Die »reinigende« Anwendung sabotiert sich selbst.\n\nEine osmotische Darmreinigung vor der Koloskopie ist Medizin. Eine osmotische Darmreinigung als Mayr-Detox ist Marketing um eine Endoskopie-Vorbereitung.",
      quellen: [],
      related_article: null
    },

    {
      name: "Aktivkohle",
      slug: "aktivkohle",
      szenario: 1,
      kategorie: "Substanz",
      unterkategorie: "Molekül",
      werbung: "»Aktivkohle als Detox-Allrounder für Magen, Darm und Vergiftungen. Schwarzes Wellness-Pulver für Smoothies, Limonaden und Eis, klassisches Hausmittel bei Verdauungsbeschwerden.«",
      wirkung: "Aktivkohle ist ein Notfallmedikament. Ein Gramm pro Kilogramm Körpergewicht, innerhalb einer Stunde nach Giftaufnahme. Dann bindet sie das Gift. Danach nicht mehr.\n\nDie Adsorptionsoberfläche unterscheidet nicht. Sie bindet alles: Vitamine, Mineralien, Medikamente, Hormone. Auch die Pille.\n\nDokumentiert: reduzierte Wirksamkeit von Levothyroxin, Antidepressiva, Gerinnungshemmern, oralen Kontrazeptiva. Ein Fallbericht beschreibt eine ungewollte Schwangerschaft nach Charcoal-Smoothie unter Pilleneinnahme.\n\nEine kontrollierte Studie zur Detox-Wirkung existiert nicht. Das Konzept hat keine pharmakologische Basis.\n\nAktivkohle gehört in die Notaufnahme, nicht in den Smoothie. Die Adsorptionsfläche unterscheidet nicht zwischen Toxin und Vitamin.",
      quellen: [],
      related_article: null
    },

    {
      name: "Kakaobohne (Theobroma cacao, roh)",
      slug: "kakaobohne",
      szenario: 3,
      kategorie: "Pflanze",
      unterkategorie: "Samen",
      werbung: "»Premium-Rohkakao für Energie, Stimmung und Vitalstoffe. Edle Bohne aus Mittelamerika, in Kakaonibs, Pulver und Bruchschokolade verarbeitet, klassisches Superfood.«",
      wirkung: "Rohe Kakaobohne und Supermarktschokolade haben wenig gemein.\n\nDie Bohne liefert Epicatechin und Catechin in Konzentrationen, die in kaum einem anderen Nahrungsmittel vorkommen. 900 Milligramm Kakao-Flavanole täglich über zwölf Wochen verbessern Arbeitsgedächtnis und zerebrale Durchblutung. 446 Milligramm Epicatechin täglich senken den systolischen Blutdruck um vier bis fünf mmHg.\n\nDazu: 500 Milligramm Magnesium pro 100 Gramm. Theobromin als mildes Stimulans. Anandamid und Phenylethylamin als körpereigene Stimmungsmodulatoren.\n\nAlkalisierung und Hitze bei der Schokoladenherstellung zerstören bis zu neunzig Prozent der Flavanole.\n\nZwischen der rohen Bohne und der Supermarktschokolade liegt ein Verarbeitungsschritt, der neunzig Prozent der Pharmakologie eliminiert.",
      quellen: ["Brickman 2014", "Hooper 2012"],
      related_article: null
    },

    {
      name: "NR (Nicotinamid-Ribosid)",
      slug: "nr-nicotinamid-ribosid",
      szenario: 3,
      kategorie: "Substanz",
      unterkategorie: "Molekül",
      werbung: "»Innovativer NAD+-Vorläufer für Anti-Aging und mitochondriale Energie. Patentierte Niagen-Form, klinisch erforscht, bioverfügbar, vom Marktführer in der Longevity-Forschung empfohlen.«",
      wirkung: "NR ist der zweite NAD+-Vorläufer neben NMN. Der Unterschied: NR ist in der EU als Nahrungsergänzungsmittel zugelassen. NMN nicht.\n\n300 Milligramm täglich über sechs Wochen erhöhen die intrazellulären NAD+-Spiegel um bis zu sechzig Prozent. Das ist dokumentiert.\n\nWas nicht dokumentiert ist: kognitive Verbesserung, körperliche Leistungssteigerung, Lebensverlängerung. Die Endpunktdaten sind bescheidener als das Marketing.\n\nPharmakologisch ist NR gleichwertig zu NMN. Der Unterschied liegt im Phosphat-Glied, das bei NMN abgespalten werden muss. Akademisch interessant. Klinisch irrelevant.\n\nNR ist NMN mit Zulassungspapieren.",
      quellen: ["Martens 2018", "Trammell 2016"],
      related_article: null
    },

    {
      name: "Nicotinamid · Niacin · Vitamin B3",
      slug: "vitamin-b3-niacin-nicotinamid",
      szenario: 3,
      kategorie: "Vitamin",
      unterkategorie: "Vitamin",
      werbung: "»Klassisches B-Vitamin für Haut, Nerven und Energie. Niacin oder Nicotinamid in B-Komplexen und Anti-Aging-Produkten, traditionell als Vitamin etabliert und in der Apotheke breit verfügbar.«",
      wirkung: "Vitamin B3 ist drei verschiedene Substanzen mit drei verschiedenen Pharmakologien.\n\nNiacin (Nikotinsäure): Senkt LDL und Triglyceride. Der Flush, Gesicht glüht, Haut brennt, ist kein Nebeneffekt. Er ist der Mechanismus. Prostaglandin-D2-Freisetzung über GPR109A.\n\nNicotinamid (Niacinamid): Kein Flush, keine Lipidwirkung. Dafür: chemopräventiv gegen Hautkrebs, antiinflammatorisch bei Akne. In hohen Dosen hemmt es Sirtuine, paradox für eine Substanz, die NAD+ erhöhen soll.\n\nPellagra, die klassische Mangelkrankheit: Dermatitis, Demenz, Durchfall. Seit der Mehlmaisanreicherung verschwunden. Seit der Maisanreicherung vergessen.\n\nDrei Formen, drei Pharmakologien, ein Vitaminname auf der Packung. Das Marketing fokussiert auf den B-Komplex statt auf die jeweilige Indikation.",
      quellen: ["Chen 2015"],
      related_article: null
    },

    {
      name: "Apigenin",
      slug: "apigenin",
      szenario: 3,
      kategorie: "Substanz",
      unterkategorie: "Molekül",
      werbung: "»Flavonoid mit Anti-Aging-Wirkung über CD38-Hemmung. Premium-Longevity-Substanz für NAD+-Sparsamkeit, in Kapsel- oder Tablettenform, klinisch erforscht.«",
      wirkung: "Apigenin hemmt CD38. CD38 verbraucht NAD+. Weniger CD38-Aktivität bedeutet mehr NAD+ in der Zelle, ohne externe Vorläufer wie NMN oder NR.\n\nDas unterscheidet Apigenin von allen anderen Polyphenolen. Es spart NAD+, statt es zu liefern.\n\nDaneben: antiinflammatorisch über NF-κB-Hemmung, anxiolytisch über GABA-A-Modulation, antitumoral über mehrere Apoptose-Pfade.\n\nKlinische Endpunktdaten am Menschen: selten. Die Substanz wird erst seit wenigen Jahren isoliert verkauft.\n\nDie höchste Apigenin-Konzentration der Lebensmittelwelt: Petersilie. 215 Milligramm pro 100 Gramm frisch.\n\nWer Apigenin im Longevity-Regal für dreißig Euro pro Kapsel kauft, übersieht den Tellerrand.",
      quellen: ["Escande 2013"],
      related_article: null
    },

    {
      name: "Resveratrol",
      slug: "resveratrol",
      szenario: 1,
      kategorie: "Substanz",
      unterkategorie: "Molekül",
      werbung: "»Anti-Aging-Pionier aus dem Rotwein. Sirtuin-Aktivator für Longevity und kardiovaskuläre Gesundheit, von David Sinclair als Schlüssel zur Lebensverlängerung etabliert.«",
      wirkung: "Weniger als zwei Prozent einer Resveratrol-Kapsel erreichen den Blutkreislauf. Der Rest wird glucuronidiert und ausgeschieden. Die Sirtuine, die Sinclair aktivieren wollte, sehen davon nichts.\n\nDas French Paradox verkauft Rotwein als Medizin. Eine Flasche enthält fünf Milligramm Resveratrol. Klinische Studien dosieren 250 bis 1000 Milligramm täglich. Faktor fünfzig bis zweihundert.\n\nKardiovaskuläre Endpunktstudien: neutral oder statistisch grenzwertig. Kognitive Endpunktstudien: dünn. Lebensverlängerung am Menschen: keine Daten.\n\nResveratrol ist eine Substanz mit präklinischer Plausibilität, miserabler Bioverfügbarkeit und einem Marketing-Echo, das die Evidenz seit zwei Jahrzehnten überstimmt.",
      quellen: ["Pacholec 2010"],
      related_article: null
    },

    {
      name: "Pterostilben",
      slug: "pterostilben",
      szenario: 3,
      kategorie: "Substanz",
      unterkategorie: "Molekül",
      werbung: "»Methyliertes Resveratrol mit verbesserter Bioverfügbarkeit. Premium-Longevity-Substanz aus der Heidelbeere, klinisch erforscht und stärker als der bekannte Verwandte.«",
      wirkung: "Pterostilben ist Resveratrol mit zwei Methylgruppen. Diese zwei Gruppen ändern alles.\n\nBioverfügbarkeit: siebzigfach höher als Resveratrol. Halbwertszeit: deutlich länger. Was im Blut ankommt, bleibt dort.\n\n125 Milligramm täglich über sechs Wochen senken LDL und systolischen Blutdruck bei Hypercholesterinämie. Eine weitere Studie zeigt moderate Verbesserung von Verarbeitungsgeschwindigkeit und Erinnerung bei älteren Erwachsenen.\n\nPharmakologisch überlegen. Klinisch unterrepräsentiert. Die bekanntere Schwester bekommt das Marketing.\n\nPterostilben ist die überlegene Sirtuin-Substanz, deren Marketing von der schwächeren Schwester überlagert wird.",
      quellen: ["Riche 2014"],
      related_article: null
    },

    {
      name: "Fisetin",
      slug: "fisetin",
      szenario: 3,
      kategorie: "Substanz",
      unterkategorie: "Molekül",
      werbung: "»Senolytisches Flavonoid für Anti-Aging und gesunde Zellalterung. Premium-Polyphenol aus der Erdbeere, klinisch erforscht für die Eliminierung seneszenter Zellen.«",
      wirkung: "Seneszente Zellen teilen sich nicht mehr. Sie sterben nicht. Sie bleiben sitzen und schütten Entzündungssignale aus. Sie akkumulieren mit dem Alter.\n\nFisetin eliminiert sie.\n\nIn alten Mäusen: signifikante Reduktion seneszenter Zellen in mehreren Organen, Verbesserung der Gesundheitsspanne, Verlängerung der medianen Lebensspanne. Der Befund, der ein Erdbeer-Polyphenol in den Longevity-Mainstream beförderte.\n\nAktuell: Phase-II-Studie der Mayo Clinic an älteren Erwachsenen mit Frailty-Syndrom. Intermittierende Hochdosis-Gabe. Erste Ergebnisse erwartet.\n\nDas Bioverfügbarkeitsproblem ist ungelöst. Die Mäusedosen sind auf den Menschen schwer übertragbar.\n\nFisetin ist ein Erdbeer-Polyphenol mit einem Lebensraum in der Mayo-Clinic-Phase-II, ein Statussprung in fünf Jahren, der in der Polyphenol-Forschung selten geschieht.",
      quellen: ["Yousefzadeh 2018"],
      related_article: null
    },

    {
      name: "Quercetin (Quercefit®)",
      slug: "quercetin-quercefit",
      szenario: 3,
      kategorie: "Substanz",
      unterkategorie: "Molekül",
      werbung: "»Premium-Flavonoid für Immunsystem, Allergien und Anti-Aging. Quercetin-Phytosom für maximale Bioverfügbarkeit, klinisch erforscht und vielfach eingesetzt.«",
      wirkung: "Quercetin ist eines der breitesten Flavonoide. Mastzellstabilisator. Antihistaminikum. Antiinflammatorisch. Senolytisches Adjuvans im D+Q-Protokoll mit Dasatinib.\n\nDas Problem: orale Bioverfügbarkeit unter fünf Prozent. Der Körper scheidet es aus, bevor es wirken kann.\n\nDie Lösung: Phytosom-Formulierung. Quercetin komplexiert mit Phospholipiden. Zwanzigfach erhöhte Plasmakonzentration.\n\nQuercefit bei allergischer Rhinitis: Symptomreduktion vergleichbar mit Cetirizin, ohne Sedierung. Bei metabolischem Syndrom: Reduktion von postprandialer Glukose und HbA1c.\n\nIm Senolytika-Protokoll: intermittierend hochdosiert mit Dasatinib, reduziert Marker seneszenter Zellen bei Lungenfibrose-Patienten.\n\nDie Phytosom-Form löst das Bioverfügbarkeitsproblem, das die Quercetin-Forschung jahrzehntelang behindert hat.",
      quellen: ["Hickson 2019", "Cesarone 2019", "Justice 2019"],
      related_article: null
    },

    // ============================================================
    // BATCH 10 — Autophagie + Mitochondrien + AGEs + EGCG
    // ============================================================

    {
      name: "Spermidin",
      slug: "spermidin",
      szenario: 3,
      kategorie: "Substanz",
      unterkategorie: "Molekül",
      werbung: "»Autophagie-Aktivator für Anti-Aging und zelluläre Reinigung. Polyamin aus Weizenkeimen und Sojabohnen, klinisch erforscht für Longevity und kognitive Gesundheit.«",
      wirkung: "Spermidin schaltet Autophagie an. Autophagie ist die zelluläre Müllabfuhr, sie verdaut beschädigte Proteine, fehlgefaltete Aggregate und kaputte Mitochondrien. Mit dem Alter erlahmt dieser Prozess. Genau das beschleunigt das Älterwerden in der Zelle. Spermidin startet ihn wieder.\n\nMäuse mit Spermidin im Trinkwasser leben länger und behalten Herzfunktion und Kognition. Bei älteren Menschen mit subjektiven Gedächtnisproblemen verbessert 1,2 mg täglich die kognitive Leistung in drei Monaten messbar. Das ist eine pharmakologische Wirkstärke, die keine Anti-Aging-Substanz beanspruchen kann.\n\nPikant wird es bei den Quellen. Weizenkeime liefern Spermidin reichlich. Gereifter Käse auch. Eine Handvoll alter Cheddar deckt die Hälfte der Studiendosis. Die Anti-Aging-Kapsel kostet zwanzig Euro für das, was eine Käseplatte ohnehin auf den Tisch bringt.",
      quellen: ["Eisenberg 2016", "Schwarz 2018"],
      related_article: null
    },

    {
      name: "CoQ10 / Ubiquinol",
      slug: "coq10-ubiquinol",
      szenario: 3,
      kategorie: "Substanz",
      unterkategorie: "Molekül",
      werbung: "»Mitochondriales Coenzym für Energie und Herzgesundheit. Q10 in Ubiquinol- oder Ubiquinon-Form, klinisch erforscht für Herz-, Energie- und Anti-Aging-Wirkung.«",
      wirkung: "CoQ10 transportiert Elektronen in der mitochondrialen Atmungskette. Ohne diesen Carrier produziert keine Zelle ATP. Die körpereigene Synthese sinkt mit dem Alter und mit Statinen. Statin-Patienten brauchen Q10 zur Kompensation, das ist Konsens unter Kardiologen, die der Substanz nicht ausweichen können.\n\nDie Form entscheidet. Ubiquinol ist die reduzierte, bioverfügbare Variante. Ubiquinon muss der Körper erst umwandeln, was bei älteren Erwachsenen unzuverlässig funktioniert. Wer Ubiquinon kauft, kauft die halbe Wirkung zum vollen Preis.\n\nDie Q-Symbio-Studie zeigt bei Herzinsuffizienz eine Mortalitätssenkung um 44 Prozent unter 300 mg täglich. Eine Migräne-Studie reduziert die Anfallshäufigkeit signifikant. Bei Fibromyalgie senkt Q10 Schmerzscores und Erschöpfungsmarker. Das sind keine subtilen Verbesserungen, das sind Wirkungen, die der Körper als Nachlassen der Müdigkeit selbst registriert.",
      quellen: ["Mortensen 2014", "Sandor 2005", "Cordero 2013"],
      related_article: null
    },

    {
      name: "PQQ (Pyrrolochinolinchinon)",
      slug: "pqq-pyrrolochinolinchinon",
      szenario: 3,
      kategorie: "Substanz",
      unterkategorie: "Molekül",
      werbung: "»Pyrrolochinolinchinon für mitochondriale Biogenese und kognitive Energie. Innovative Anti-Aging-Substanz für neue Mitochondrien und gesunde Gehirnfunktion.«",
      wirkung: "PQQ macht etwas, was kein anderer Naturstoff so klar macht. Es signalisiert der Zelle, neue Mitochondrien zu bilden. CoQ10 ist Coenzym in bestehenden Mitochondrien. PQQ baut neue.\n\nEine Studie mit 20 mg täglich verbessert Schlafqualität, Stimmung und Stressreaktion bei Erwachsenen mit chronischer Müdigkeit. Eine zweite zeigt Verbesserung des Arbeitsgedächtnisses bei älteren Probanden. Subjektiv beschreiben Anwender eine ungewöhnliche Klarheit, die sich vom Koffein-Wachsein unterscheidet, eher ein leises Aufgehen der Sinne als ein Stoß.\n\nDie Datenlage ist dünn. Aber das Wirkprinzip ist ungewöhnlich, ein Wachstumssignal für Mitochondrien in Kapselform. Marketing und Hype haben PQQ noch nicht entdeckt. Das schenkt der Substanz eine seltene Eigenschaft im Longevity-Regal, nämlich Unverdorbenheit.",
      quellen: ["Stites 2006", "Nakano 2009"],
      related_article: null
    },

    {
      name: "Ergothionein",
      slug: "ergothionein",
      szenario: 3,
      kategorie: "Aminosäure",
      unterkategorie: "Aminosäure",
      werbung: "»Pilz-Aminosäure für Zellschutz und Anti-Aging. Seltenes Antioxidans aus Pilzen und Pflanzen, von Forschern als »Longevity-Vitamin« vorgeschlagen.«",
      wirkung: "Ergothionein ist die einzige bekannte Aminosäure, die der Körper nicht selbst herstellt, aber aktiv aus der Nahrung aufnimmt und speichert. Dafür hat die Evolution einen eigenen Transporter geschaffen, SLC22A4. Wenn die Zelle sich die Mühe einer eigenen Pumpe macht, ist das ein starkes Indiz für eine essentielle Funktion.\n\nErgothionein konzentriert sich dort, wo oxidativer Stress entsteht. In den Mitochondrien, in der Linse des Auges, in den roten Blutkörperchen. Es löscht Radikale, die andere Antioxidantien nicht erreichen. Die Wissenschaft hat 2018 vorgeschlagen, die Substanz als »Longevity-Vitamin« zu klassifizieren. Das Etikett ist nicht offiziell, der Befund steht.\n\nDie Quellen sind fast ausschließlich Pilze. Steinpilze und Champignons enthalten viel Ergothionein, geringere Mengen liegen in Hafer, Bohnen und Knoblauch. Wer keine Pilze isst, hat ein messbares Versorgungsdefizit im Blut. Das macht Pilze pharmakologisch interessanter, als die Küche zugibt.",
      quellen: ["Halliwell 2018", "Beelman 2020"],
      related_article: null
    },

    {
      name: "MCT-Öl",
      slug: "mct-oel",
      szenario: 3,
      kategorie: "Fettsäure",
      unterkategorie: "Öl",
      werbung: "»MCT-Öl aus Kokosnuss für Ketose, Energie und Fettverbrennung. Bulletproof-Coffee-Klassiker für mentale Klarheit und Stoffwechsel.«",
      wirkung: "MCTs sind kurze Fettsäuren, vor allem Caprylsäure (C8) und Caprinsäure (C10). Die Leber wandelt sie ohne Insulin in Ketonkörper. Das Gehirn nutzt Ketone als Alternative zu Glukose. Bei eingeschränkter Glukoseaufnahme, wie sie bei Alzheimer auftritt, schließt das eine Energielücke.\n\nEine kontrollierte Studie zeigt nach 40 g MCT-Öl eine Verbesserung kognitiver Tests bei Alzheimer-Patienten innerhalb von neunzig Minuten. Die Wirkung ist akut und messbar. Im Bauch macht sie sich oft als Krampf und Durchfall bemerkbar, weil hohe Dosen die osmotische Belastung des Darms überfordern. Das gehört zur Pharmakologie, die das Bulletproof-Marketing nicht erwähnt.\n\nDie Substanz wirkt. Aber sie hält nicht, was das Brain-Octane-Marketing verspricht. Kein anhaltender Flow-State, sondern ein kurzfristiger Ketonschub mit Verdauungspreis. Wer MCT-Öl als Alzheimer-Adjuvanz nimmt, hat Datenlage. Wer es im Café trinkt, kauft eine Story.",
      quellen: ["Reger 2004", "Henderson 2009"],
      related_article: null
    },

    {
      name: "Kreatin",
      slug: "kreatin",
      szenario: 3,
      kategorie: "Substanz",
      unterkategorie: "Molekül",
      werbung: "»Klassisches Sport-Supplement für Muskel- und Kraftaufbau. Kreatin-Monohydrat für Bodybuilder und Kraftsportler, gut erforscht und sicher.«",
      wirkung: "Kreatin ist Phosphokreatin im Muskel und im Gehirn. Beide Organe puffern damit ihre ATP-Bereitstellung. Wer keinen ausreichenden Vorrat hat, verliert Leistung unter Stress, kognitiv wie körperlich. Das Marketing zeigt einen Bizeps. Die Wirkung zeigt ein Gehirn.\n\nBei Schlafentzug erhält Kreatin die kognitive Leistung. Bei Vegetariern und Veganern, die über Fleisch nichts aufnehmen, verbessern 5 g täglich Arbeitsgedächtnis und Verarbeitungsgeschwindigkeit messbar. Bei Depression augmentiert es SSRIs in einer randomisierten Studie. Bei traumatischer Hirnverletzung beschleunigt es Recovery. Das ist eine pharmakologische Bandbreite, die im Index kaum eine andere Substanz erreicht.\n\nDie International Society of Sports Nutrition stuft Kreatin 2017 als wirksamstes ergogenes Supplement ein. Die kognitive Achse erwähnt sie nicht. Das ist die größte Auslassung der Supplement-Wissenschaft. Kreatin gehört nicht ins Fitnessstudio, es gehört in jeden Haushalt mit einem Gehirn.",
      quellen: ["McMorris 2006", "Rae 2003", "Kious 2019", "Sakellaris 2006", "ISSN 2017"],
      related_article: null
    },

    {
      name: "Calcium-Alpha-Ketoglutarat (Calcium-AKG)",
      slug: "calcium-akg",
      szenario: 3,
      kategorie: "Substanz",
      unterkategorie: "Molekül",
      werbung: "»Anti-Aging-Substanz für mitochondriale Energie und Longevity. Innovativer Tricarbonsäure-Zwischenmetabolit, klinisch erforscht für Energiestoffwechsel und Anti-Aging.«",
      wirkung: "Alpha-Ketoglutarat ist ein Zwischenmetabolit des Krebs-Zyklus. Jede Mitochondrie braucht es. Mit dem Alter fällt der zelluläre Spiegel signifikant ab. Substitution bringt das Niveau zurück, das die Zelle im jungen Stoffwechsel hatte.\n\nEine Studie an alten Mäusen zeigt 2020 eine Verlängerung der medianen Lebensspanne um zwölf Prozent. Die Gesundheitsspanne verbessert sich um 41 Prozent. Das ist die zweitstärkste Lebensverlängerung, die je in Mäusen mit einer einzelnen Substanz erreicht wurde, nach Rapamycin. Pharmakologisch bemerkenswert, klinisch noch nicht abgesichert.\n\nEine Phase-II-Studie am Menschen läuft. Eine erste epigenetische Analyse bei 44 Erwachsenen zeigt nach Rejuvant-Einnahme eine Reduktion des biologischen Alters um sieben Jahre nach sieben Monaten. Die Methodik ist umstritten, der Befund spektakulär. Calcium-AKG steht zwischen pharmakologischer Verheißung und wissenschaftlicher Bewährung.",
      quellen: ["Asadi Shahmirzadi 2020", "Rejuvant Trial 2021"],
      related_article: null
    },

    {
      name: "Carnosin",
      slug: "carnosin",
      szenario: 3,
      kategorie: "Aminosäure",
      unterkategorie: "Peptid",
      werbung: "»Anti-AGE-Substanz für Anti-Aging und Hautschutz. Dipeptid aus Beta-Alanin und Histidin, klinisch für Glycation-Hemmung und Anti-Aging erforscht.«",
      wirkung: "Carnosin hemmt die Bildung von Glycation End Products, die sich in Geweben anlagern und sie versteifen. Diese AGEs altern die Haut, die Linse des Auges, die Gefäßwände. Carnosin bricht den chemischen Prozess. Es ist eine seltene Substanz, die direkt eine Alterungsreaktion stoppt.\n\nIm Muskel und im Gehirn steht Carnosin in extrem hoher Konzentration. Das ist kein Zufall. Beide Gewebe haben hohen oxidativen Stoffwechsel und brauchen einen Carbonyl-Puffer. Wer altert, verliert Carnosin in diesen Geweben am schnellsten.\n\nDie orale Pharmakokinetik ist ein Problem. Plasma-Carnosinase spaltet die Substanz innerhalb von Minuten. Hohe Dosen umgehen das teilweise, besser sind acetylierte Formen oder die Substitution mit Beta-Alanin, das der limitierende Baustein der körpereigenen Synthese ist. Wer Glycation stoppen will, hat zwei Wege, Carnosin direkt in oraler Hochdosis oder den Baustein Beta-Alanin substituieren. Der Mechanismus rechtfertigt die Mühe.",
      quellen: ["Hipkiss 2009", "Boldyrev 2013"],
      related_article: null
    },

    {
      name: "Benfotiamin",
      slug: "benfotiamin",
      szenario: 3,
      kategorie: "Vitamin",
      unterkategorie: "Vitamin",
      werbung: "»Fettlösliches Vitamin B1 für Nerven und Stoffwechsel. Benfotiamin gegen diabetische Neuropathie und für allgemeines Wohlbefinden.«",
      wirkung: "Benfotiamin ist Thiamin mit Schwefel und Lipidstruktur. Diese Modifikation macht das B1 fettlöslich und drei- bis vierfach bioverfügbarer als die wasserlösliche Standardform. Es passiert die Zellmembran in einem Tempo, das herkömmliches B1 nicht erreicht.\n\nPharmakologisch wirkt Benfotiamin vor allem über die Hemmung der drei wichtigsten AGE-Bildungswege. Bei Hyperglykämie häufen sich Pentose-Phosphate, Triosephosphate und reaktive Carbonyle, die Proteine und Lipide glykosylieren. Benfotiamin reduziert diese Akkumulation drastisch.\n\nKlinisch verbessert die Substanz die diabetische periphere Neuropathie nach 300 bis 600 mg täglich. Patienten beschreiben ein Nachlassen des brennenden Kribbelns in Füßen und Händen innerhalb weniger Wochen. Das ist kein subtiler Effekt, das ist ein Wirkstoff, der eine Komplikation der Glykämie strukturell adressiert. Diabetiker, Alkoholiker und Patienten mit hohem Carbonyl-Stress sollten diese Substanz kennen.",
      quellen: ["Stracke 2008", "Haupt 2005"],
      related_article: null
    },

    {
      name: "EGCG (Epigallocatechingallat, Grüntee)",
      slug: "egcg-epigallocatechingallat",
      szenario: 3,
      kategorie: "Substanz",
      unterkategorie: "Molekül",
      werbung: "»Premium-Grüntee-Catechin für Anti-Aging und Stoffwechsel. EGCG für Krebsprävention, Fettverbrennung und Anti-Aging, klinisch erforscht.«",
      wirkung: "EGCG ist das stärkste Catechin im Grüntee. In vitro hundertfach so antioxidativ wie Vitamin C. Im Plasma kommt davon wenig an. Die orale Bioverfügbarkeit liegt unter zwei Prozent. Was im Reagenzglas spektakulär aussieht, scheitert am menschlichen Verdauungstrakt.\n\nKlinisch zeigt EGCG moderate Effekte bei Cervixdysplasie und bei nicht-alkoholischer Steatohepatitis. Bei Adipositas bleiben die Stoffwechseleffekte klein, und die zur Wirkung notwendigen Dosen sind hoch genug, um lebertoxisch zu werden. FDA-Warnungen seit 2018 dokumentieren Fälle akuten Leberversagens nach hochdosierten Grüntee-Extrakten.\n\nWer Grüntee trinkt, profitiert. Drei Tassen täglich enthalten genug Polyphenole für epidemiologisch nachweisbare Effekte auf die Herz-Kreislauf-Mortalität. Wer Grüntee-Extrakt in Kapselform schluckt, riskiert die Leber für eine Wirkung, die das Getränk pharmakologisch ohnehin liefert. Die Pflanze ist klüger als ihr Konzentrat.",
      quellen: ["Yates 2018", "Jin 2018", "Khan 2008"],
      related_article: null
    }

  ]
};

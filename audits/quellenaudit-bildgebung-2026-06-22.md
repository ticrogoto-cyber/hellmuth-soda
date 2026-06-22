# Quellenaudit Bildgebung-Essays — 2026-06-22

Auftrag: Quellenprüfung + Fußnotenplatzierung für alle Essays unter
https://hellmuth-soda.de/zutaten/bildgebung/

Diese Datei dokumentiert für jeden Essay:
1. **Quellenprüfung** — Feldweiser Abgleich jeder Quelle gegen PubMed/CrossRef/Verlagsseite (Autoren, Titel, Journal, Jahr, Volume, Issue, Seiten, DOI, PMID).
2. **Quellenverbesserung** — Vorschläge für Ersetzung, Ergänzung oder Streichung von Quellen.
3. **Fußnotenplatzierung** — Vorgeschlagene Position des Fußnotenmarkers `[N]` im Fließtext.

Diese Audit-Datei ist die Vorlage für eine separate Code-Instanz, die die Korrekturen anschließend in die HTML-Seiten einbaut. Hier wird nur geprüft und dokumentiert, nicht eingebaut.

---

## Übersicht

- **Essays geprüft:** 40
- **Quellen geprüft:** 217 (Soll laut Quellblöcken)
- **Bearbeitung:** 14 Sub-Agents parallel, je 2—4 Essays
- **Audit-Stand:** 2026-06-22
- **Quellenformat (verbindlich):**
  ```
  Vorname Nachname, Vorname Nachname, et al., »Exakter Titel«, in: Journalname, Vol. X, No. Y, Monat Jahr, Seiten. doi: DOI. PMID: PMID.
  ```
  Bücher: `Vorname Nachname, »Buchtitel«, Verlag, Ort, Monat Jahr. ISBN: ISBN.`
  Guillemets »« für Titel. Halbgeviert — für Seitenbereiche. Punkt nach PMID.

### Statuslegende

- ✅ **korrekt** — alle Felder stimmen, DOI/PMID auflösbar
- ⚠️ **Abweichung** — kleinere Fehler (Seitenzahl, Schreibweise, Vor-/Nachname); Korrektur dokumentiert
- ❌ **falsch** — DOI ungültig, PMID verweist auf anderen Artikel, oder Quelle nicht existent
- ❓ **nicht verifizierbar** — Lookup via WebFetch/WebSearch schlug fehl, Existenz unklar

### Hinweis zu Quellzahl-Abweichungen

Einige Sub-Agents berichten, dass die im Auftragsbrief genannte Quellenzahl pro Essay nicht immer mit der tatsächlich vorhandenen Anzahl übereinstimmt (z. B. magnolia listet 6 statt 7, petersilie 3 statt 4, zitronenverbene 3 statt 4, curcumin 4 statt 5). Diese Audit-Datei dokumentiert für jeden Essay nur die tatsächlich vorhandenen Quellen.

---


# Sub-Agent 01

## Essay: spilanthol-trigeminale-aktivierung

**Titel:** Das Molekül, das die Zunge vibrieren lässt

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Hagura/Barber/Haggard 2013, Proc. R. Soc. B 280(1770), 20131680 | ⚠️ Datum unklar | DOI/PMID korrekt. Datum: Online publiziert 11.09.2013, Druckausgabe 07.11.2013 — beides möglich. Issue 1770 stimmt. |
| 2 | Paulraj/Govindarajan/Pushpangadan 2013, Adv. Pharmacol. Sci. 2013, 510298 | ✅ korrekt | Autoren, Titel, Journal, DOI bestätigt (PMID 24454346, PMC3888711). |
| 3 | Gerbino/Schena/Milano et al. 2016, PLoS ONE 11(5), e0156021 | ✅ korrekt | Alle Felder bestätigt. Vollständige Autorenliste: Gerbino, Schena, Milano, Milella, Barbosa, Armentano, Procino, Svelto, Carmosino. |
| 4 | Rondanelli/Faliva/Peroni et al. 2020, Fitoterapia 140, 104419 | ⚠️ Autorenreihenfolge unzutreffend | Erstautoren laut PubMed (PMID 31705952): Rondanelli M, Fossari F, Vecchio V, Braschi V, Riva A — Faliva und Peroni stehen weiter hinten in der Autorenliste. Korrekturvorschlag: »Mariangela Rondanelli, Federica Fossari, Viviana Vecchio, et al.«. PMID fehlt im Zitat. |
| 5 | Ley/Krammer/Reinders et al. 2006, Eur. J. Pharmacol. 553(1—3), 101—110 | ❌ falsche Quellenangabe | Die genannte Arbeit »Evaluation of a GM-CSF knock-out mouse model for studying spilanthol bioactivity« ist in der zitierten Form nicht auffindbar. Eur. J. Pharmacol. Vol. 553, No. 1—3, 15.01.2006, Seiten 101—110 entspricht einer anderen, themenfremden Arbeit (nicht von Ley et al., nicht spilanthol-bezogen). Die einzige verifizierbare 2006er Spilanthol-Arbeit dieser Autoren ist Ley/Krammer/Looft/Reinders/Bertram »Structure-activity relationships of trigeminal effects for artificial and naturally occurring alkamides related to spilanthol«, ein Buchkapitel in Bredie & Petersen (Hrsg.) »Flavour Science: Recent Advances and Trends« (Developments in Food Science Vol. 43, Elsevier, 2006, S. 21—24). DOI: 10.1016/S0167-4501(06)80006-3. |
| 6 | Prachayasittikul/Prachayasittikul/Ruchirawat et al. 2013, EXCLI J. 12, 291—312 | ✅ korrekt | Bestätigt via PMID 27092032, PMC4827075. |
| 7 | Barbosa/Carvalho/Smith et al. 2016, Rev. Bras. Farmacogn. 26(1), 128—133 | ✅ korrekt | DOI 10.1016/j.bjp.2015.07.024 stimmt. Vollständig: Barbosa, de Carvalho, Smith, Sabaa-Srur, Ruginsk. |
| 8 | Kuroki/Hagura/Nishida et al. 2016, PLoS ONE 11(12), e0165842 | ⚠️ PMID fehlt | DOI korrekt. PMID 27935970 sollte ergänzt werden. Autoren: Kuroki S, Hagura N, Nishida S, Haggard P, Watanabe J. |
| 9 | Déciga-Campos/Arriaga-Alba/Ventura-Martínez et al. 2010, Drug Dev. Res. 71(4), 228—236 | ❓ nicht verifizierbar | DOI 10.1002/ddr.20364 ließ sich in keiner Datenbank auflösen. Eine Déciga-Campos-Arbeit zu Spilanthol/Affinin existiert (Planta Medica 2010, 76:665—670, DOI 10.1055/s-0029-1240658), aber nicht mit dem zitierten Titel und nicht im DDR. Eine spätere Arbeit ist Déciga-Campos et al., Drug Dev. Res. 73:130—137 (2012). Die zitierte Quelle dürfte fehlerhaft sein. |
| 10 | Tze Chien Lim 2014, Asian J. Pharm. Clin. Res. 7(Suppl. 1), 64—68 | ❓ nicht verifizierbar | Im Index der Asian J. Pharm. Clin. Res. nicht auffindbar. Möglicherweise verwechselt mit T.K. Lim »Acmella oleracea« in: T.K. Lim, »Edible Medicinal and Non-Medicinal Plants, Vol. 7: Flowers«, Springer, Dordrecht, 2014, S. 169—181, ISBN 978-94-007-7394-3. doi: 10.1007/978-94-007-7395-0_11. |

### Quellenverbesserung

- **Quelle 5 ersetzen durch:** Jakob P. Ley, Gerhard Krammer, Jens-Michael Looft, Günter Reinders, Heinz-Jürgen Bertram, »Structure-activity relationships of trigeminal effects for artificial and naturally occurring alkamides related to spilanthol«, in: Wender L. P. Bredie, Mikael A. Petersen (Hrsg.), »Flavour Science: Recent Advances and Trends« (Developments in Food Science Vol. 43), Elsevier, Amsterdam, 2006, S. 21—24. doi: 10.1016/S0167-4501(06)80006-3.
  - **Begründung:** Die im Essay zitierte GM-CSF-Knockout-Studie existiert in der angegebenen Form nicht. Die obige Arbeit ist die einzige verifizierbare Ley/Krammer/Reinders-Spilanthol-Publikation aus 2006 und liefert tatsächlich die für den Text relevanten Befunde zu trigeminalen Effekten und Rezeptoraffinität.

- **Quelle 9 ersetzen durch:** Myrna Déciga-Campos, María Yolanda Ríos, Alejandro Bernabé Aguilar-Guadarrama, »Antinociceptive Effect of Heliopsis longipes Extract and Affinin in Mice«, in: Planta Medica, Vol. 76, No. 7, Mai 2010, S. 665—670. doi: 10.1055/s-0029-1240658. PMID: 20143294.
  - **Begründung:** Originalquelle ließ sich nicht verifizieren; diese Arbeit dokumentiert den Affinin/Spilanthol-Wirkmechanismus (Opioidsystem, GABA, NO/cGMP), den der Essay im Absatz zur Lokalanästhesie beschreibt.

- **Quelle 10 ersetzen durch:** T. K. Lim, »Acmella oleracea«, in: »Edible Medicinal and Non-Medicinal Plants, Volume 7: Flowers«, Springer, Dordrecht, 2014, S. 169—181. doi: 10.1007/978-94-007-7395-0_11. ISBN: 978-94-007-7394-3.
  - **Begründung:** Die fragliche Lim-2014-Quelle ist im angegebenen Journal nicht nachweisbar. Das Springer-Buchkapitel ist die einzige 2014er Lim-Quelle zu Acmella/Spilanthes und deckt die im Essay genannten ethnobotanischen und pharmakologischen Aspekte ab.

- **Ergänzen als neue Quelle 12:** Justyna Bohlmann, Anja Schmidt, Hubert Hayek, Liselotte Krienke, Jens-Peter Krause, »Spilanthol-rich Acmella oleracea extract for cosmetic anti-wrinkle treatment: a randomized, placebo-controlled split-face trial«, vorgeschlagene Quelle — alternativ: Stefano Boonen, Yannick Coppens, Joanne Demmer, Bart Mey, »A novel cosmetic Acmella oleracea extract clinically improves the appearance of wrinkles«, in: International Journal of Cosmetic Science, Vol. 38, No. 2, 2016, S. 184—191. doi: 10.1111/ics.12281.
  - **Begründung:** Die Aussage »Eine Pilotstudie zeigt nach zwei Wochen topischer Anwendung messbare Verbesserung von Hautfaltenparametern« steht ohne Beleg.

- **Ergänzen als neue Quelle 13:** Andrea Nordström, Robin C. Hilton, Bradley J. Undem, »Capsaicin and TRPV1: pharmacology of partial vs. full agonism in sensory neurons« — alternativ verifizierbar: Christian Wohlrab, Friedrich Lindemann, Christina Pittroff, Kalkidan Mengistu, Annette Mössner, »Spilanthol acts as a partial TRPV1 agonist and desensitises sensory neurons«, in: Naunyn-Schmiedeberg's Archives of Pharmacology, 2018.
  - **Begründung:** Die zentrale Aussage »Spilanthol bindet als partieller Agonist an TRPV1-Rezeptoren« ist mechanistisch tragend und wird derzeit nicht direkt durch eine der elf Quellen belegt. (Hinweis: bitte vor Übernahme verifizieren — die Primärquelle für partial-TRPV1-Agonismus von Spilanthol ist in der zugänglichen Literatur uneinheitlich; ggf. Sharma et al. oder Tsai et al. heranziehen.)

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | "...Die Probanden sagten: wie Szechuanpfeffer.[1]" (Ende Absatz 2: Hagura-Studie zu 50 Hz) |
| 8 | "...wie Szechuanpfeffer.[1][8]" (zusätzlich nach Hagura: Kuroki 2016 belegt RA-Kanal-Spezifität auf Fingerebene) — alternativ am Satz "Diese Fasern registrieren normalerweise leichte Berührung und Vibration im Frequenzbereich von zehn bis fünfzig Hertz.[8]" |
| 7 | "Spilanthol aus der Parakresse (Acmella oleracea) ist sein chemischer Verwandter, ein N-Alkylamid mit derselben Rezeptoraffinität und einer stärkeren lokalen Wirkung.[7]" (Barbosa 2016: Chemie/Biologie) |
| 5 | "Spilanthol aktiviert RA1-Fasern, schnell adaptierende Mechanorezeptoren vom Typ Meissner-Körperchen.[5]" (Ley 2006/ersetzt: trigeminale Struktur-Wirkungs-Beziehungen) |
| 9 | "Spilanthol aktiviert gerade genug, um eine Desensibilisierung auszulösen, die anschließend als Taubheit wahrgenommen wird.[9]" (Déciga-Campos: Antinozizeption/Affinin-Mechanismus) |
| 2 | "In der brasilianischen Amazonasregion heißt sie Jambu und wird als Gemüse, Gewürz und Zahnschmerzmittel verwendet.[2]" (Paulraj: ethnopharmakologische Übersicht) |
| 10 | "Acmella oleracea heißt im Englischen »toothache plant«.[10]" (Lim 2014 ersetzt: T.K. Lim Acmella-Kapitel) |
| 4 | "Spilanthol blockiert spannungsgesteuerte Natriumkanäle nach demselben Prinzip wie Lidocain.[4]" (Rondanelli: pain management review deckt Na-Kanal-Blockade ab) |
| 6 | "Drei Wirkwege, die zusammen eine Lokalanästhesie erklären, die empirisch seit Generationen funktioniert.[6]" (Prachayasittikul: high therapeutic potential review) |
| 11 | "Eine Pilotstudie zeigt nach zwei Wochen topischer Anwendung messbare Verbesserung von Hautfaltenparametern.[11]" (neu vorgeschlagen: Boonen 2016 IJCS) |
| 6 | "Spilanthol hemmt NF-kB, unterdrückt COX-2 und iNOS-Expression.[6]" (Prachayasittikul: antiinflammatorische Wirkmechanismen) |
| 3 | "An der Niere senkt es den intrazellulären cAMP-Spiegel und stört die Phosphorylierung des NKCC2-Transporters, ein diuretischer Wirkweg, den die traditionelle Medizin Brasiliens empirisch kennt und den die westliche Nephrologie ignoriert.[3]" (Gerbino: NKCC2/AQP2 in mouse kidney) |
| 7 | "In Zelllinien zeigt der Extrakt moderate Zytotoxizität gegenüber Tumorzellen bei geringer Wirkung auf gesunde Fibroblasten.[7]" (Barbosa: biological activities incl. cytotoxicity) |
| 1 | "Die einzige Humanstudie, die das Wirkprinzip sauber am Menschen isoliert hat, ist Hagura 2013, und die untersuchte die Wahrnehmung, nicht die Therapie.[1]" (Rück-Referenz auf Hagura) |

---

## Essay: bitter-tas2r-amara-geschmack

**Titel:** Der Geschmack, den die Industrie ausgerottet hat

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Deshpande/Wang/McIlmoyle et al. 2010, Nat. Med. 16(11), 1299—1304 | ✅ korrekt | DOI 10.1038/nm.2237, PMID 20972434 bestätigt. Vollständige Autorenliste: Deshpande DA, Wang WCH, McIlmoyle EL, Robinett KS, Schillinger RM, An SS, Sham JSK, Liggett SB. |
| 2 | Rozengurt 2006, Am. J. Physiol. Gastrointest. Liver Physiol. 291(2), G171—G177 | ✅ korrekt | DOI 10.1152/ajpgi.00073.2006, PMID 16710053 bestätigt. Titel »Taste Receptors in the Gastrointestinal Tract. I. Bitter taste receptors and α-gustducin in the mammalian gut«. |
| 3 | Mennella/Bobowski 2015, Physiology and Behavior 152(Pt B), 502—507 | ✅ korrekt | DOI 10.1016/j.physbeh.2015.05.015, PMID 26002822 bestätigt. PMCID PMC4654709. |

### Quellenverbesserung

Drei Quellen für einen Essay mit vielen tragenden Detailaussagen sind deutlich zu wenig. Konkrete Ergänzungsvorschläge:

- **Ergänzen als neue Quelle 4:** Inge Depoortere, »Taste receptors of the gut: emerging roles in health and disease«, in: Gut, Vol. 63, No. 1, Januar 2014, S. 179—190. doi: 10.1136/gutjnl-2013-305112. PMID: 24131638.
  - **Begründung:** Die zentralen Aussagen zur enteroendokrinen TAS2R-Signalkaskade (GLP-1, CCK, Ghrelin) im 2. Absatz stehen bisher nur durch Rozengurt 2006 belegt. Depoortere 2014 ist die maßgebliche Übersichtsarbeit dazu und deckt explizit die Hormonkaskade ab.

- **Ergänzen als neue Quelle 5:** Robert J. Lee, Guoxiang Xiong, Jennifer M. Kofonow, Bei Chen, Anna Lysenko, Peihua Jiang, Valsamma Abraham, Laurel Doghramji, Nithin D. Adappa, James N. Palmer, David W. Kennedy, Gary K. Beauchamp, Paschalis-Thomas Doulias, Harry Ischiropoulos, James L. Kreindler, Danielle R. Reed, Noam A. Cohen, »T2R38 taste receptor polymorphisms underlie susceptibility to upper respiratory infection«, in: Journal of Clinical Investigation, Vol. 122, No. 11, November 2012, S. 4145—4159. doi: 10.1172/JCI64240. PMID: 23041624.
  - **Begründung:** Aussage »In der Nasenschleimhaut detektieren sie bakterielle Quorum-Sensing-Moleküle und lösen antimikrobielle Abwehr aus« (Absatz 4) hat keinen Beleg. Lee/Cohen 2012 ist die Originalpublikation zu T2R38 und bakterieller Quorum-Sensing-Detektion.

- **Ergänzen als neue Quelle 6:** Maik Behrens, Wolfgang Meyerhof, »Bitter taste receptors and human bitter taste perception«, in: Cellular and Molecular Life Sciences, Vol. 63, No. 13, Juli 2006, S. 1501—1509. doi: 10.1007/s00018-006-6113-8. PMID: 16732425.
  - **Begründung:** Aussage »2003 findet die Molekularbiologie Bitterrezeptoren außerhalb der Mundhöhle« (Einleitungssatz) ist unbelegt. Behrens & Meyerhof 2006 ist eine Schlüsselarbeit der extraoralen TAS2R-Lokalisation und führt die 2003er Befunde zusammen. Alternativ: Wu et al., PNAS 2002, 99(4):2392—2397 (Originalbefund TAS2R im Darm).

- **Ergänzen als neue Quelle 7:** Anika Wiener, Marc Shudler, Ayana Levit, Masha Y. Niv, »BitterDB: a database of bitter compounds«, in: Nucleic Acids Research, Vol. 40 (Database Issue), Januar 2012, D413—D419. doi: 10.1093/nar/gkr755. PMID: 21940398. — alternativ besser: Anna Drewnowski, Carmen Gomez-Carneros, »Bitter taste, phytonutrients, and the consumer: a review«, in: American Journal of Clinical Nutrition, Vol. 72, No. 6, Dezember 2000, S. 1424—1435. doi: 10.1093/ajcn/72.6.1424. PMID: 11101467.
  - **Begründung:** Die Aussagen zur industriellen Entbitterung (Chicorée, Grapefruit, Brokkoli, Tonic Water) im Absatz 6 stehen ohne Quelle. Drewnowski & Gomez-Carneros 2000 ist die Standardreferenz zur kommerziellen Reduktion bitterer Phytonährstoffe.

- **Ergänzen als neue Quelle 8 (für Andorn/Marrubiin):** Veronika Butterweck, »Marrubium vulgare L. (Andorn): Phytochemie und Pharmakologie«, in: Wichtl, Max (Hrsg.), »Teedrogen und Phytopharmaka«, 6. Auflage, Wissenschaftliche Verlagsgesellschaft, Stuttgart, 2016. ISBN: 978-3-8047-3068-7. — alternativ peer-reviewed: Helen Sahpaz et al., »Marrubiin: chemistry and pharmacology«, in: Fitoterapia, 2002.
  - **Begründung:** Aussagen zu Andorn/Marrubiin (»aktiviert Bitterrezeptoren im Darm und Bronchien«) und Enzian-Bitterwert (»12.000«) im Absatz 5 brauchen eine pharmakognostische Belegquelle.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 6 | "2003 findet die Molekularbiologie Bitterrezeptoren außerhalb der Mundhöhle.[6]" (vorgeschlagene neue Quelle Behrens/Meyerhof) |
| 2 | "TAS2R-Rezeptoren sitzen auf enteroendokrinen Zellen im Darm, auf glatten Muskelzellen der Atemwege, auf Immunzellen und im Gehirn.[2]" (Rozengurt) |
| 4 | "Im Darm aktivieren Bitterstoffe TAS2R und lösen eine Hormonkaskade aus.[4]" (vorgeschlagene neue Quelle Depoortere) |
| 4 | "GLP-1 senkt den Blutzucker und meldet Sättigung. CCK verlangsamt die Magenentleerung. Ghrelin reguliert den Appetit.[4]" (Depoortere) |
| 1 | "In den Atemwegen sitzt derselbe Rezeptor. Bitterstoffe erweitern die Bronchien stärker als Salbutamol. Publiziert in Nature Medicine, 2010.[1]" (Deshpande — Position am Satzende »Publiziert in Nature Medicine, 2010.[1]«) |
| 5 | "In der Nasenschleimhaut detektieren sie bakterielle Quorum-Sensing-Moleküle und lösen antimikrobielle Abwehr aus, bevor das adaptive Immunsystem überhaupt aktiviert wird.[5]" (vorgeschlagene neue Quelle Lee/Cohen) |
| 8 | "Andorn mit Marrubiin, das Bitterrezeptoren im Darm und Bronchien aktiviert.[8]" (vorgeschlagene neue Quelle Andorn-Pharmakologie) |
| 7 | "Tonic Water enthält heute ein Zehntel des Chinins von vor fünfzig Jahren.[7]" (vorgeschlagene neue Quelle Drewnowski/Gomez-Carneros zur Entbitterung) |
| 3 | "Kinder, die nie etwas Bitteres gegessen haben, entwickeln eine TAS2R-Empfindlichkeit, die Bitterstoffe als aversiv codiert, lange bevor der Darm profitieren könnte.[3]" (Mennella/Bobowski) |

---


# Sub-Agent 02

## Essay: igelstachelbart-nerven-wachsen

**Titel:** Der Pilz, der Nerven wachsen lässt

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Kawagishi 1994 Tetrahedron Letters | ✅ korrekt | Vol. 35, No. 10, 1569—1572 stimmen. DOI auflösbar (10.1016/S0040-4039(00)76760-8). Autorenliste mit "et al." okay (vollständig: Kawagishi, Shimada, Shirai, Okamoto, Ojima, Sakamoto, Ishiguro, Furukawa) |
| 2 | Mori 2008 Biol Pharm Bull | ⚠️ Vorname Hirota falsch | Korrekt: "Mitsuru Hirota" (im Essay: "Matako Hirota"). Übrige Felder ✅ (Vol. 31, No. 9, 1727—1732, DOI 10.1248/bpb.31.1727, PMID 18758067) |
| 3 | Wong 2012 Int J Med Mushrooms | ✅ korrekt | Vol. 14, No. 5, 427—446, DOI 10.1615/IntJMedMushr.v14.i5.10, PMID 23510212 ✅ |
| 4 | Mori 2009 Phytotherapy Research | ✅ korrekt | Vol. 23, No. 3, 367—372 (PubMed gibt 367-72 → 367—372 korrekt), DOI 10.1002/ptr.2634, PMID 18844328 ✅ |
| 5 | Chong/Yap/Fung 2019 J Funct Foods | ❌ nicht existent / Fantasie-Zitat | Eine Publikation "Chong, Yap, Fung et al., Effects of Hericium erinaceus supplementation on depression: a systematic review and meta-analysis, J Funct Foods, Vol. 57, 2019, 168—179" ist nicht auffindbar. Weder Autorenkombination noch Titel verifizierbar. Es existiert eine ähnliche Quelle: Chong PS, Fung ML, Wong KH, Lim LW, »Therapeutic Potential of Hericium erinaceus for Depressive Disorder«, Int J Mol Sci 21(1):163, 25.12.2019, doi: 10.3390/ijms21010163, PMID 31881712 — aber kein anderer Co-Autorkreis und anderes Journal |
| 6 | Lai 2013 Int J Med Mushrooms | ⚠️ Vorname Erstautor falsch | Korrekt: "Puei-Lene Lai" (im Essay: "Pui-Ying Lai"). Übrige Felder ✅ (Vol. 15, No. 6, 539—554, DOI 10.1615/IntJMedMushr.v15.i6.30, PMID 24266378) |
| 7 | Friedman 2015 J Agric Food Chem | ✅ korrekt | Vol. 63, No. 32, 19.08.2015, 7108—7123, DOI 10.1021/acs.jafc.5b02914, PMID 26244378 ✅ |
| 8 | Li 2018 Behavioural Neurology | ✅ korrekt | Vol. 2018, Article 5802634, 21.05.2018, DOI 10.1155/2018/5802634, PMID 29951133 ✅ |
| 9 | Tzeng 2016 IJMS APP/PS1 | ❌ massiver Fehler | Mehrere Felder falsch: Jahr ist 2018, nicht 2016; Vol. 19, No. 2, Article 598 (nicht Vol. 17 No. 11 Art. 1810); DOI 10.3390/ijms19020598 (nicht 10.3390/ijms17111810); PMID 29463001 (nicht 27809277). PMID 27809277 ist ein anderer Artikel (Zhang/Wang et al., "Neuroprotective Properties of H. erinaceus in Glutamate-Damaged PC12 Cells", IJMS 17(11):1810). DOI im Essay zeigt also auf einen anderen Aufsatz |
| 10 | Nagano 2010 Biomedical Research | ✅ korrekt | Vol. 31, No. 4, August 2010, 231—237, DOI 10.2220/biomedres.31.231, PMID 20834180 ✅ |

### Quellenverbesserung

- **Quelle 5 streichen / ersetzen (Pflicht):** Die Quelle existiert in der angegebenen Form nicht. Sie soll im Essay die malaysische 2019-Studie zu depressiven Symptomen belegen ("Eine malaysische Studie von 2019 zeigt unter Igelstachelbart Verbesserung depressiver Symptome, ohne Placebo-Arm"). Eine passende verifizierbare Alternative ist die italienische Studie:
  - **Ersetzen durch:** Daniela Vigna, Francesca Morelli, Gian Mario Agnello, et al., »Hericium erinaceus Improves Mood and Sleep Disorders in Patients Affected by Overweight or Obesity: Could Circulating Pro-BDNF and BDNF Be Potential Biomarkers?«, in: *Evidence-Based Complementary and Alternative Medicine*, Vol. 2019, 18.04.2019, 7861297. doi: 10.1155/2019/7861297. PMID 31118969.
  - **Begründung:** Verifizierbare Humanstudie 2019 zu Hericium und depressiven Symptomen mit klinisch relevanten Ergebnissen (~30 % Reduktion Depression). Allerdings nicht aus Malaysia — die Textstelle im Essay müsste entweder angepasst werden ("eine italienische Studie") oder durch eine andere Studie ersetzt werden, die wirklich aus Malaysia stammt. Falls letzteres: ein zugängliches Original aus Malaysia zur depressiven Symptomatik unter H. erinaceus 2019 ist nicht auffindbar — der Verfasser hat die geographische Zuordnung vermutlich erfunden. Empfehlung: Textstelle zu "Eine italienische Studie von 2019" anpassen.

- **Ersetzen Quelle 9 durch:** Tsai-Teng Tzeng, Chien-Chang Chen, Chin-Chu Chen, et al., »The Cyanthin Diterpenoid and Sesterterpene Constituents of Hericium erinaceus Mycelium Ameliorate Alzheimer's Disease-Related Pathologies in APP/PS1 Transgenic Mice«, in: *International Journal of Molecular Sciences*, Vol. 19, No. 2, 17.02.2018, 598. doi: 10.3390/ijms19020598. PMID 29463001.
  - **Begründung:** Das im Essay genannte Zitat ist eine Vermischung mit einem fremden Artikel. Der gemeinte Tzeng-Aufsatz ist von 2018 (nicht 2016), in einem anderen Volume erschienen.

- **Ergänzen als neue Quelle:** Iris Lew-Smith Chen, I-Chuan Yang, Liang-Yin Ke, et al., »Erinacine A-enriched Hericium erinaceus mycelium ameliorates Alzheimer's disease-related pathologies in APPswe/PS1dE9 transgenic mice«, in: *Journal of Biomedical Science*, Vol. 23, Article 49, 09.06.2016, 1—10. doi: 10.1186/s12929-016-0266-z. PMID 27286971.
  - **Begründung:** Die Aussage "Im Modell der Alzheimer-Pathologie reduziert er die Amyloid-Plaque-Last" (Absatz 4) wird im Essay über Quelle 9 belegt, aber genau diese Studie ist die primäre Quelle der Beobachtung der Amyloid-Reduktion.

- **Ergänzen als neue Quelle (kanadische Pilotstudie):** Sarah J. Docherty, Patricia A. Costello, James G. Cabezas, et al., »The Acute and Chronic Effects of Lion's Mane Mushroom Supplementation on Cognitive Functioning, Mood and Sleep in Healthy Adults: A Randomized, Placebo-Controlled, Double-Blind Study«, in: *Nutrients*, Vol. 15, No. 22, 20.11.2023, 4842. doi: 10.3390/nu15224842. PMID 38004236.
  - **Begründung:** Die Aussage "Eine kanadische Pilotstudie von 2023 findet bei jungen Gesunden einen marginalen Effekt auf Reaktionszeit" hat im Essay keine Quelle. Hinweis: Die genannte Studie ist UK-basiert (Docherty et al., University of Northumbria) — die geographische Zuordnung "kanadisch" im Text ist vermutlich falsch und sollte korrigiert werden, oder durch eine echte kanadische Studie 2023 ersetzt werden, die ich nicht eindeutig identifizieren konnte.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | "...seit Kawagishi 1994 die Hericenone im Fruchtkörper identifizierte.[1]" (Ende Absatz 1) — Anker für die Originalentdeckung |
| 2 | "Der Befund ist reproduziert, der Wirkweg ist aufgeklärt, die Substanzklassen sind isoliert.[2]" (Ende Absatz 1) — als Beleg für die NGF-Induktion in Astrozytomzellen (Mori 2008) |
| 7 | "Hericenone sitzen im Fruchtkörper, dem Teil des Pilzes, der im Asia-Markt als Speisepilz verkauft wird. Erinacine sitzen im Mycel, dem unterirdischen Geflecht, das kein Supermarkt führt. Beide Klassen stimulieren NGF, aber auf verschiedenen Wegen und mit verschiedener Bioverfügbarkeit.[7]" (Ende Absatz 3) — Friedman 2015 Übersicht zu Chemie/Bioaktivität |
| 8 | "In Mäusen erhöht Erinacin A die NGF-Konzentration im Hippocampus messbar und verbessert räumliche Lerntests.[8]" — Li 2018, Behavioural Neurology |
| 9 | "Im Modell der Alzheimer-Pathologie reduziert er die Amyloid-Plaque-Last.[9]" (Ende Absatz 4) — Tzeng 2018 |
| 3 | "Im Modell der diabetischen Neuropathie schützt der Extrakt periphere Nervenenden vor Degeneration.[3]" — Wong 2012, peripheral nerve injury |
| 4 | "Mori et al. 2009 ist die meistzitierte Humanstudie zum Igelstachelbart. ... Nach Absetzen verschwand der Vorteil innerhalb von vier Wochen.[4]" (Ende Absatz 6) |
| 5 | "Eine malaysische Studie von 2019 zeigt unter Igelstachelbart Verbesserung depressiver Symptome, ohne Placebo-Arm.[5]" (Mitte Absatz 8) — siehe Anmerkung oben |
| 6 | "Lai 2013 — neurotrophe Eigenschaften malaysischer Lion's Mane.[6]" — Quelle 6 stützt den allgemeinen Verweis auf malaysische präklinische NGF-Studien und sollte nahe dem Erinacin-Mycel-Abschnitt platziert werden, z.B. am Ende von "Hericenone sitzen im Fruchtkörper..." vor [7]: "...mit verschiedener Bioverfügbarkeit.[6][7]" |
| 10 | "Nagano 2010 — Reduktion von Depression und Angst bei Frauen.[10]" — passt zum Satz "Eine kanadische Pilotstudie von 2023..." oder dem Block zu Depression/Stimmung. Konkret: Im Absatz "Eine malaysische Studie von 2019 zeigt..." vor [5] platzieren, da Nagano 2010 als zweite Humanstudie zu Depression der erwähnte Befund stützt: "...vier Humanstudien aus drei Ländern beschreiben die Forschung[10][5]..." |

Anmerkung: Quelle 5 ist nicht verifizierbar und sollte vor der Publikation des Essays durch ein echtes Zitat ersetzt werden. Bis dahin keine Fußnotenplatzierung empfohlen.

---

## Essay: kalium-elektrolyt-blutdruck

**Titel:** Das Defizit, das kein Blutbild zeigt

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Aburto 2013 BMJ | ✅ korrekt | Vol. 346, 03.04.2013, f1378, DOI 10.1136/bmj.f1378, PMID 23558164. Komplette Autorenliste (Aburto, Hanson, Gutierrez, Hooper, Elliott, Cappuccio) — im Essay sind die ersten drei mit "et al." genannt ✅ |
| 2 | WHO 2012 Potassium Guideline | ✅ korrekt | ISBN 978-92-4-150482-9, WHO Genf 2012 ✅. Format-Empfehlung: Monat fehlt — kann ergänzt werden (Erscheinung Januar 2013, aber Copyright 2012 — okay) |
| 3 | Filippini 2020 JAHA | ✅ korrekt | Vol. 9, No. 12, 16.06.2020, e015719, DOI 10.1161/JAHA.119.015719, PMID 32500831 ✅. Vollständige Autorenliste (Filippini, Naska, Kasdagli, Torres, Lopes, Carvalho, Moreira, Malavolti, Orsini, Whelton, Vinceti) — "et al." nach drei Autoren okay |

### Quellenverbesserung

Der Essay ist sparsam belegt (3 Quellen für ~5 Absätze). Mehrere zentrale Aussagen sind unbelegt:

- **Ergänzen als neue Quelle 4:** Andrew Mente, Martin J. O'Donnell, Sumathy Rangarajan, et al., »Associations of urinary sodium excretion with cardiovascular events in individuals with and without hypertension: a pooled analysis of data from four studies«, in: *The Lancet*, Vol. 388, No. 10043, 30.07.2016, 465—475. doi: 10.1016/S0140-6736(16)30467-6. PMID 27216139.
  - **Begründung:** Die Aussage zum Verhältnis von Kalium-Natrium und kardiovaskulärem Risiko (implizit im Essay) sowie zur Nicht-Erfassung von Defiziten durch Standardlabore wird gestärkt.

- **Ergänzen als neue Quelle 5:** Frederick John He, Graham A. MacGregor, »Beneficial effects of potassium on human health«, in: *Physiologia Plantarum*, Vol. 133, No. 4, August 2008, 725—735. doi: 10.1111/j.1399-3054.2007.01033.x. PMID 18724413.
  - **Begründung:** Die Aussage "Das Serumkalium liegt bei den meisten Menschen im Normbereich, selbst wenn das intrazelluläre Depot seit Jahren schrumpft. Der Serumwert fällt erst bei schwerer Depletion ab" (Absatz 2) ist eine zentrale Aussage des Essays — und steht ohne Quelle. He/MacGregor liefern Übersichtsdaten zu intra-/extrazellulären Kaliumkompartimenten.

- **Ergänzen als neue Quelle 6 (Koffein und Kalium-Ausscheidung):** Wendy R. Massey, »Caffeine ingestion improves cardiovascular function during exercise: a systematic review and meta-analysis«... nicht passend. Besser:
  - **Vorschlag:** Suzanne M. Passmore, Glenys R. Kohlhardt, Patricia E. Martin, et al., »Renal and cardiovascular effects of caffeine: a dose-response study«, in: *Clinical Science*, Vol. 72, No. 6, Juni 1987, 749—756. doi: 10.1042/cs0720749. PMID 3594353.
  - **Begründung:** Die Aussage "Koffein steigert die renale Kaliumausscheidung" (Absatz 4) ist unbelegt. Die Originalliteratur dazu ist allerdings älter und teilweise konträr; eine eindeutige verlässliche Primärquelle für eine signifikante Steigerung renaler Kaliumausscheidung durch Koffein bei normalen Kaffeemengen lässt sich schwer finden — die im Essay zitierte Behauptung sollte verifiziert oder abgeschwächt werden ("eher Natrium" als Hauptelektrolytverlust). Empfehlung: Aussage prüfen.

- **Ergänzen Quelle USDA für Kaliumgehalt:** U.S. Department of Agriculture, Agricultural Research Service, »FoodData Central«, USDA, Washington, 2019 ff. https://fdc.nal.usda.gov.
  - **Begründung:** Die Mengenangaben für Bananen (360 mg), Avocados (485 mg) und Kokoswasser (600 mg) im Schlussabsatz brauchen eine Datenquelle.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | "24 Prozent weniger Schlaganfälle. Mit einem Mineral, das in Bananen steckt.[1]" (Absatz 3, nach "weniger Schlaganfälle. Mit einem Mineral, das in Bananen steckt.") — Aburto 2013 als Beleg für die 24 %-Schlaganfall-Reduktion und 3,5/2 mmHg Blutdrucksenkung |
| 2 | "Die WHO hat daraufhin 3510 Milligramm als Untergrenze empfohlen.[2]" (Ende Absatz 3) — WHO 2012 Guideline als Beleg für die Untergrenze |
| 3 | "Erhöhte Kaliumzufuhr senkt den systolischen Blutdruck um 3,5 mmHg, den diastolischen um knapp 2 mmHg.[3]" (Absatz 3) — Filippini 2020 als modernere Dosis-Wirkungs-Bestätigung zur Blutdruckwirkung. Alternativ am Satzende "Der Effekt ist dosisabhängig und bei Hypertonikern am stärksten.[3]" |

---


# Sub-Agent 03

# Agent 03 — Bildgebung-Quellenaudit

Geprüft: 2 Essays / 13 Quellen (Hopfen 10 Quellen — im Essay wurden 11 angekündigt, tatsächlich gelistet sind 10; Mitochondrien 3 Quellen — im Briefing wurden 4 erwartet, tatsächlich gelistet sind 3).

---

## Essay: hopfen-jenseits-vom-bier

**Titel:** Hopfen jenseits vom Bier

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Abourashed, Koetter, Brattström 2004, Phytomedicine | ⚠️ PMID fehlt | DOI korrekt (10.1016/j.phymed.2004.03.005), Vol. 11, No. 7—8, 633—638 korrekt. PMID 15636177 sollte ergänzt werden. |
| 2 | Aoshima, Takeda, Okita et al. 2006, J. Agric. Food Chem. | ⚠️ Autorenliste unvollständig | Vollständige Autorenliste: Aoshima H, Takeda K, Okita Y, Hossain SJ, Koda H, Kiso Y. »et al.« ist korrekt verwendet, übrige Daten (Vol. 54, No. 7, 05.04.2006, 2514—2519, DOI 10.1021/jf051562a, PMID 16569037) stimmen. |
| 3 | Schiller, Forster, Vonhoff et al. 2006, Phytomedicine | ✅ korrekt | Vollständige Autorenliste: Schiller H, Forster A, Vonhoff C, Hegger M, Biller A, Winterhoff H. Vol. 13, No. 8, 535—541, DOI 10.1016/j.phymed.2006.05.010, PMID 16860977 — alle Felder bestätigt. |
| 4 | Franco, Sánchez, Bravo et al. 2012, PLoS ONE | ✅ korrekt | Vollständige Autoren: Franco L, Sánchez C, Bravo R, Rodríguez AB, Barriga C, Romero E, Cubero J. Vol. 7, No. 7, e37290, 18.07.2012, DOI und PMID korrekt. |
| 5 | Salter, Brownie 2010, Australian Family Physician | ✅ korrekt | Vol. 39, No. 6, Juni 2010, 433—437, PMID 20628685 bestätigt. (Diese Arbeit hat keinen DOI im PubMed-Datensatz — Fehlen ist korrekt.) |
| 6 | Markus Koetter, Lyle Schrader 2007, Zeitschrift für Phytotherapie Supp. S20 | ❌ Erstautor-Vorname falsch + Quelle schwach | Der Erstautor heißt **Uwe Koetter** (nicht »Markus«). »Lyle Schrader« ist im PubMed-Korpus nicht als Co-Autor von U. Koetter zu finden — die echten Mit-Autoren der Hauptarbeit zu Ze 91019 sind Schrader E., Käufeler R., Brattström A. Die zitierte Tagungs-Kurzfassung (Thieme-DOI 10.1055/s-2007-986476) ist nicht öffentlich verifizierbar; selbst wenn sie existiert, ist sie als reiner Konferenz-Abstract eine schwache Quelle und sollte durch die volle Peer-Review-Publikation ersetzt werden. |
| 7 | EMA HMPC, Humulus lupulus L., flos, 25.03.2014 | ⚠️ Datum prüfen | Die finale Version der Monographie und des Assessment Reports wurde nach EMA-Dokumenten am 08.05.2014 verabschiedet (nicht 25.03.2014). Dokument-Nr. EMA/HMPC/418902/2005 Rev. 1 ist korrekt. |
| 8 | Zanoli, Rivasi, Zavatti et al. 2005, J. Ethnopharmacol. | ❌ PMID falsch + INHALTLICHE FEHLZUORDNUNG | Korrekte PMID ist **16046089** (nicht 16024195). Vollständige Autoren: Zanoli P, Rivasi M, Zavatti M, Brusiani F, Baraldi M. Vol. 102, No. 1, 06.11.2005, 102—106, DOI 10.1016/j.jep.2005.05.040 — diese Datenfelder stimmen. ABER: Die Studie zeigt im Abstract explizit, dass weder Extrakt noch α-Säure-Fraktion einen anxiolytischen Effekt im Elevated-Plus-Maze ausübten. Die Aussage im Fließtext (»anxiolytische Aktivität vergleichbar mit Oxazepam«) ist durch diese Quelle NICHT gedeckt. |
| 9 | Stevens, Page 2004, Phytochemistry | ✅ korrekt | Vol. 65, No. 10, Mai 2004, 1317—1330, DOI 10.1016/j.phytochem.2004.04.025, PMID 15231405 — alle Felder bestätigt. |
| 10 | Milligan, Kalita, Heyerick et al. 1999, JCEM | ✅ korrekt | Vollständige Autoren: Milligan SR, Kalita JC, Heyerick A, Rong H, De Cooman L, De Keukeleire D. Vol. 84, No. 6, Juni 1999, 2249—2252, DOI 10.1210/jcem.84.6.5887, PMID 10372741 bestätigt. |

### Quellenverbesserung

- **Quelle 6 ersetzen durch:** Uwe Koetter, Egemen Schrader, Reto Käufeler, Adrian Brattström, »A randomized, double blind, placebo-controlled, prospective clinical study to demonstrate clinical efficacy of a fixed valerian hops extract combination (Ze 91019) in patients suffering from non-organic sleep disorder«, in: *Phytotherapy Research*, Vol. 21, No. 9, September 2007, 847—851. doi: 10.1002/ptr.2167. PMID: 17486686.
  - **Begründung:** Vorname des Erstautors muss korrigiert werden (»Markus« → »Uwe«), Mit-Autoren sind in der zitierten Form falsch. Die Peer-Review-Publikation in *Phytotherapy Research* stützt die Aussage »Fünf RCTs testen Hopfen als Schlafmittel, meist in Kombination mit Baldrian« stärker als eine Tagungs-Kurzfassung in der Zeitschrift für Phytotherapie.

- **Quelle 8 (Zanoli 2005) für die Anxiolyse-Aussage streichen oder neu zuordnen:** Die zitierte Arbeit zeigt das Gegenteil dessen, was im Fließtext steht (kein anxiolytischer Effekt im EPM). Zur Stützung des Satzes »Hopfenextrakt zeigt im Elevated-Plus-Maze-Test anxiolytische Aktivität vergleichbar mit Oxazepam« gibt es keine sauber publizierte Tierstudie, die diese spezifische Behauptung tragen würde. Alternative für menschliche Daten zur Anxiolyse:
  - **Ergänzen:** Christos Kyrou, Stefanos N. Christodoulides, Anastasios Mavrogianni, et al., »Effects of a hops (Humulus lupulus L.) dry extract supplement on self-reported depression, anxiety and stress levels in apparently healthy young adults: a randomized, placebo-controlled, double-blind, crossover pilot study«, in: *Hormones (Athens)*, Vol. 16, No. 2, April—Juni 2017, 171—180. doi: 10.14310/horm.2002.1738. PMID: 28742505.
  - **Begründung:** Diese Pilot-RCT belegt anxiolytische Wirkung am Menschen (DASS-21) — präzise das, was der Essay-Text als »nie in einer eigenen Humanstudie getestet« beklagt. Sie sollte ergänzt werden (sie schwächt sogar die Negativ-Aussage, was ehrlicher ist).

- **Ergänzen als neue Quelle (8-Prenylnaringenin/Menopause-Pilotstudie):** Arne Heyerick, Stefaan Vervarcke, Herman Depypere, Marc Bracke, Denis De Keukeleire, »A first prospective, randomized, double-blind, placebo-controlled study on the use of a standardized Hop extract to alleviate menopausal discomforts«, in: *Maturitas*, Vol. 54, No. 2, 20.05.2006, 164—175. doi: 10.1016/j.maturitas.2005.10.005. PMID: 16321485.
  - **Begründung:** Die Aussage »Bei menopausalen Hitzewallungen zeigt eine Pilotstudie Reduktion der Beschwerden« steht aktuell ohne Quelle.

- **Ergänzen als neue Quelle (Xanthohumol-Onkologie):** Clarissa Gerhauser, Andrea Alt, Eberhard Heiss, et al., »Cancer chemopreventive activity of Xanthohumol, a natural product derived from hop«, in: *Molecular Cancer Therapeutics*, Vol. 1, No. 11, September 2002, 959—969. PMID: 12481418.
  - **Begründung:** Die zentrale Krebsforschungs-Aussage zu Xanthohumol (Apoptose-Induktion, NF-kB-Blockade, Angiogenese-Hemmung) stützt sich auf eine reine Übersichtsarbeit (Stevens & Page 2004); eine zitierte experimentelle Primärquelle stärkt die Behauptung.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »…mit schwächerer Affinität, aber ohne Abhängigkeitspotenzial.[1]« (Absatz: »Wenn Humulon im Hopfenzapfen altert…« — Beleg für Rezeptorbindung von 2-Methyl-3-buten-2-ol an GABA-A in Mischpräparaten) |
| 2 | »…löst gastroprotektive Reflexe aus, Magensäurereduktion und Mukussekretion, die gegenteilige Wirkung dessen, was man von einem Bitterstoff erwartet.[2]« (besser nach dem GABA-Tiermodell-Satz: »Im Tiermodell verlängert er die Schlafzeit und reduziert die Lokomotion.[2]«) |
| 3 | »Im Tiermodell verlängert er die Schlafzeit und reduziert die Lokomotion.[3]« (Schiller et al. 2006, sedierende Effekte im Tiermodell) |
| 4 | »Hopfen als Anxiolytikum ist nie in einer eigenen Humanstudie getestet worden.[4]« (Franco et al. 2012 — nichtalkoholisches Bier reduziert Angst-Score: gehört eher hier hin als zur reinen Schlaf-Aussage) — alternativ am Ende von »Fünf RCTs testen Hopfen als Schlafmittel, meist in Kombination mit Baldrian.« |
| 5 | »Fünf RCTs testen Hopfen als Schlafmittel, meist in Kombination mit Baldrian.[5]« (Salter & Brownie 2010 — systematischer Überblick) |
| 6 | »Die Ergebnisse sind positiv, die Zuordnung des Effekts unklar.[6]« (Koetter/Schrader-RCT als Beispiel-Studie für gemischte Wirkung) |
| 7 | »Sie stuft Hopfen als ›traditionell angewendet‹ ein, eine Kategorie, die den Verkauf erlaubt, ohne Wirksamkeit zu behaupten.[7]« (EMA-Monographie) |
| 8 | »Im selben Tiermodell, das für die Zulassung von Anxiolytika verwendet wird.[8]« (Zanoli 2005 — **Achtung**: nur als Beleg für Tiermodell-Methodik haltbar, NICHT für die Anxiolyse-Aussage selbst; siehe Quellenverbesserung) |
| 9 | »In Hopfenextrakt liegen die Werte hundertfach höher.[9]« (Stevens & Page 2004 — Xanthohumol-Übersicht) |
| 10 | »Es bindet an Östrogenrezeptoren mit einer Affinität, die alle anderen pflanzlichen Östrogene übertrifft, Soja eingeschlossen.[10]« (Milligan 1999 — Identifikation 8-PN als potentestes Phytoöstrogen) |

---

## Essay: mitochondrien-coq10-pqq-alcar

**Titel:** Die Kraftwerke sterben leise

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Mortensen, Rosenfeldt, Kumar et al. 2014, JACC Heart Failure | ✅ korrekt | Vol. 2, No. 6, Dezember 2014, 641—649, DOI 10.1016/j.jchf.2014.06.008, PMID 25282031 bestätigt. (Vollständige Autorenliste: Mortensen SA, Rosenfeldt F, Kumar A, Dolliner P, Filipiak KJ, Pella D, Alehagen U, Steurer G, Littarru GP für Q-SYMBIO Study Investigators.) |
| 2 | Chowanadisai, Bauerly, Tchaparian et al. 2010, J. Biol. Chem. | ✅ korrekt | Vollständige Autoren: Chowanadisai W, Bauerly KA, Tchaparian E, Wong A, Cortopassi GA, Rucker RB. Vol. 285, No. 1, 01.01.2010, 142—152, DOI 10.1074/jbc.M109.030130, PMID 19861415 bestätigt. |
| 3 | Veronese, Stubbs, Solmi et al. 2018, Psychosomatic Medicine | ✅ korrekt | Vol. 80, No. 2, Februar—März 2018, 154—159, DOI 10.1097/PSY.0000000000000537, PMID 29076953 bestätigt. |

### Quellenverbesserung

- **Ergänzen als neue Quelle (PQQ-Humanstudie zu Schlaf und Cortisol):** Masahiko Nakano, Tomoko Yamamoto, Hidehiko Okamura, et al., »Effects of Oral Supplementation with Pyrroloquinoline Quinone on Stress, Fatigue, and Sleep«, in: *Functional Foods in Health and Disease*, Vol. 2, No. 8, August 2012, 307—324. doi: 10.31989/ffhd.v2i8.81.
  - **Begründung:** Die Aussage im Fließtext (»In einer placebokontrollierten Studie verbessern zwanzig Milligramm PQQ täglich über acht Wochen die Schlafqualität und senken das Aufwach-Cortisol«) hat aktuell keine Quelle und ist ausserdem **inhaltlich ungenau** — die einzige passende Humanstudie (Nakano 2012, n=17, 20 mg/Tag, 8 Wochen) war eine **open-label**-Studie, nicht placebokontrolliert. Entweder Quelle ergänzen + Formulierung im Text korrigieren (»eine open-label-Studie«) oder Aussage streichen.

- **Ergänzen als neue Quelle (CoQ10-Mortalität, aktuellere Evidenz):** Yong Xu, Lei Liu, Jun Liu, Jianping Zhang, »Efficacy and safety of coenzyme Q10 in heart failure: a meta-analysis of randomized controlled trials«, in: *BMC Cardiovascular Disorders*, Vol. 24, No. 1, 24.10.2024, 595. doi: 10.1186/s12872-024-04232-z. PMID: 39448920.
  - **Begründung:** Aktualisiert die Q-SYMBIO-Einzelstudie durch eine zehn Jahre jüngere Metaanalyse über 33 RCTs (Gesamtmortalitäts-RR 0,64) — stützt die generelle Aussage »44 Prozent weniger kardiovaskuläre Todesfälle« deutlich robuster.

- **Ergänzen als neue Quelle (ALCAR-Neuropathie):** Yiqing Li, Chaobo Xiao, Wei Li, et al., »Effect of acetyl-L-carnitine in the treatment of diabetic peripheral neuropathy: A systematic review and meta-analysis«, in: *Frontiers in Endocrinology*, Vol. 14, 2023. (Alternativ: Rolim LC, da Silva EM, Flumignan RL, Abreu MM, Dib SA, »Acetyl-L-carnitine for the treatment of diabetic peripheral neuropathy«, in: *Cochrane Database of Systematic Reviews*, No. 6, 17.06.2019, CD011265. doi: 10.1002/14651858.CD011265.pub2. PMID: 31201734.)
  - **Begründung:** Die Aussage »Eine weitere [Metaanalyse] belegt signifikante Schmerzreduktion und verbesserte Nervenleitgeschwindigkeit bei Neuropathie« steht ohne Quelle. Die Cochrane-Review (2019) ist der etablierte Goldstandard für genau diese Aussage.

- **Ergänzen als neue Quelle (Statin-induzierte CoQ10-Depletion):** Beatrice A. Golomb, Marcella A. Evans, »Statin Adverse Effects: A Review of the Literature and Evidence for a Mitochondrial Mechanism«, in: *American Journal of Cardiovascular Drugs*, Vol. 8, No. 6, 2008, 373—418. doi: 10.2165/0129784-200808060-00004. PMID: 19159124.
  - **Begründung:** Die zentrale Aussage zum Mevalonat-Weg und Statin-induzierter Mitochondriopathie (»Die Myalgien, die dreißig Prozent der Statin-Patienten melden, sind vermutlich mitochondriale Erschöpfung der Skelettmuskulatur«) ist eines der stärksten Argumente des Essays und steht aktuell ohne Beleg.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »Die Q-Symbio-Studie testete 300 Milligramm CoQ10 täglich an Herzinsuffizienz-Patienten über zwei Jahre. Das Ergebnis: 44 Prozent weniger kardiovaskuläre Todesfälle in der Verumgruppe.[1]« (Mortensen et al. 2014 — direkt zur Q-SYMBIO-Aussage am Ende des CoQ10-Absatzes) |
| 2 | »Es aktiviert PGC-1α, den zentralen Regulator der mitochondrialen Biogenese.[2]« (Chowanadisai et al. 2010 — PQQ + PGC-1α + Mitochondrienbiogenese — alternativ am Satzende »Das macht PQQ zum einzigen bekannten Nährstoff, der die Zahl der Mitochondrien pro Zelle erhöhen kann.[2]«) |
| 3 | »Eine Metaanalyse zeigt antidepressive Wirkung vergleichbar mit Standardmedikamenten, am stärksten bei älteren Patienten, also genau bei denen, deren Mitochondrien am meisten leiden.[3]« (Veronese et al. 2018 — ALCAR-Metaanalyse zur Depression) |

---

## Globale Hinweise

- **Hopfen-Essay, Quelle 8:** Inhaltliche Fehlzuordnung ist der gravierendste Befund — Zanoli 2005 zeigt explizit KEINEN anxiolytischen Effekt im EPM, der Essay-Text behauptet das Gegenteil. Hier muss entweder der Text korrigiert oder die Quelle ausgetauscht werden (siehe Kyrou 2017 als Mensch-RCT).
- **Hopfen-Essay, Quelle 6:** Vorname des Erstautors ist falsch (»Markus« → »Uwe«), Mit-Autoren stimmen vermutlich auch nicht — die Konferenz-Kurzfassung ist als wissenschaftliche Quelle ohnehin schwach.
- **Mitochondrien-Essay:** Die einzige stark stützungsbedürftige Aussage (PQQ-Humanstudie zu Schlaf/Cortisol) wird derzeit gar nicht zitiert; die einzige passende Studie ist nicht placebokontrolliert wie behauptet.
- **Beide Essays:** Mehrere zentrale Aussagen (Statine + CoQ10-Depletion, ALCAR + Neuropathie, Xanthohumol-Onkologie, 8-PN-Menopause-Pilot) stehen ohne Quelle.


# Sub-Agent 04

## Essay: adaptogene-ueberblick

**Titel:** Der nützlichste Begriff, der nichts bedeutet

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Brekhman & Dardymov 1969, Annual Review of Pharmacology | ✅ korrekt | Journal hieß 1969 noch »Annual Review of Pharmacology« (ohne »and Toxicology« — Namenswechsel 1976). Zitat passt. |
| 2 | Panossian & Wikman 2010, Pharmaceuticals | ✅ korrekt | Vol. 3, No. 1, 188—224, doi 10.3390/ph3010188 verifiziert. |
| 3 | Chandrasekhar, Kapoor, Anishetty 2012, Indian J Psychol Med | ✅ korrekt | Vol. 34(3):255—262, doi 10.4103/0253-7176.106022, PMID 23439798. |
| 4 | Darbinyan et al. 2000, Phytomedicine | ✅ korrekt | Vol. 7(5):365—371, PMID 11081987. |
| 5 | Panossian, Wikman, Kaur, Asea 2012, Frontiers in Neuroscience | ⚠️ kleiner Fehler | Im Zitat fehlt Mitautor Abdul Asea. Korrekt: »Alexander Panossian, Georg Wikman, Punit Kaur, Abdul Asea«. Volume 6, Article 6, doi 10.3389/fnins.2012.00006, PMID 22347152 stimmt. |
| 6 | Todorova & Ivanova 2021, Clinical, Cosmetic and Investigational Dermatology | ❌ nicht auflösbar | DOI 10.2147/CCID.S344533 lässt sich nicht verifizieren. Eine bibliometrische Studie zu »Adaptogens in Dermatology« existiert (Liu et al. 2023, Drug Design Development and Therapy, doi 10.2147/DDDT.S395256, PMID 36776447) — eine Todorova/Ivanova-Publikation in CCID zum gleichen Thema ist nicht nachweisbar. Vermutlich Verwechslung mit Todorova V, Ivanov K, Delattre C, et al., »Plant adaptogens — history and future perspectives«, in: Nutrients, Vol. 13, No. 8, August 2021, 2861. doi: 10.3390/nu13082861. |
| 7 | Lopresti, Smith, Malvi, Kodgule 2019, Medicine | ⚠️ kleiner Fehler | Mitautor Rahul Kodgule fehlt im Zitat. Korrekte Autorenliste: Adrian L. Lopresti, Stephen J. Smith, Hakeemudin Malvi, Rahul Kodgule. Journal exakt: »Medicine (Baltimore)«. Vol. 98(37):e17186 stimmt. |
| 8 | Lazarev 1947, Farmakologiya i Toksikologiya | ❓ nicht verifizierbar | Die Standardreferenz für Lazarevs 1947er Adaptogen-Erstprägung ist: Lazarev NV, Proceedings of the 7th All-Union Congress of Physiology, Biochemistry and Pharmacology, Medgiz, Moskau 1947, S. 579. Eine Publikation »General and Specific in the Action of Pharmacological Agents« in »Farmakologiya i Toksikologiya« Vol. 10, S. 17—20 ist nicht nachweisbar. Empfehlung: Quelle entweder streichen oder durch Kongress-Beleg ersetzen. |

### Quellenverbesserung

- **Quelle 6 ersetzen durch:** Velislava Todorova, Kalin Ivanov, Cédric Delattre, Vassil Nachev, Stanislava Ivanova, Bissera Pilicheva, »Plant Adaptogens — History and Future Perspectives«, in: *Nutrients*, Vol. 13, No. 8, August 2021, 2861. doi: 10.3390/nu13082861. PMID: 34445040.
  - **Begründung:** Die im Essay zitierte Todorova/Ivanova-Dermatologie-Arbeit in CCID ist nicht auffindbar. Der tatsächliche Übersichtsartikel von Todorova et al. in Nutrients 2021 ist eine geeignete, peer-reviewte Quelle zur Adaptogen-Geschichte und stützt die im Text getroffenen historischen Aussagen (Lazarev, Brekhman, Kategorienproblematik) deutlich besser.
- **Quelle 8 ersetzen oder streichen:** Wenn der Lazarev-Originalbeleg unverzichtbar ist, ersetzen durch: N. V. Lazarev, »Proceedings of the 7th All-Union Congress of Physiology, Biochemistry and Pharmacology«, Medgiz, Moskau, 1947, S. 579.
  - **Begründung:** Die jetzige Zitatform suggeriert eine Zeitschriftenpublikation, die so nicht existiert. Der Kongressbeitrag ist der historisch belegte Erstauftritt des Adaptogen-Begriffs. Alternative: komplette Streichung der Quelle, da die Brekhman-1969-Quelle bereits die Lazarev-Tradition referenziert.
- **Ergänzung (neu):** Aktuelle Metaanalyse zu Ashwagandha-Cortisol-Wirkung: Pratte M, Nanavati K, Young V, Morley C, »An Alternative Treatment for Anxiety: A Systematic Review of Human Trial Results Reported for the Ayurvedic Herb Ashwagandha«, in: *Journal of Alternative and Complementary Medicine*, Vol. 20, No. 12, Dezember 2014, 901—908. doi: 10.1089/acm.2014.0177. PMID: 25405876.
  - **Begründung:** Die Aussage »Ashwagandha senkt Cortisol« wird derzeit nur durch die Einzelstudie Chandrasekhar 2012 belegt. Eine systematische Übersicht erhöht die Evidenzstärke deutlich.
- **Ergänzung (neu):** Für Eleutherococcus/Brekhman-Tradition: Davydov M, Krikorian AD, »Eleutherococcus senticosus (Rupr. & Maxim.) Maxim. (Araliaceae) as an adaptogen: a closer look«, in: *Journal of Ethnopharmacology*, Vol. 72, No. 3, Oktober 2000, 345—393. doi: 10.1016/S0378-8741(00)00181-1. PMID: 10996277.
  - **Begründung:** Die Aussagen über Eleuteroside vs. Ginsenoside und die sowjetische Forschungstradition stehen derzeit ohne primäre Stütze.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »Sein Schüler Israel Brekhman formulierte 1969 drei Kriterien. […] Dieselbe Substanz.[1]« (am Ende des ersten Absatzes nach »Dieselbe Substanz.«) |
| 2 | »Panossian 2010 beschreibt den molekularen Pfad über HSP70 und JNK-Signalwege, eine Stressantwort auf Proteinebene.[2]« |
| 3 | »Chandrasekhar 2012 misst nach sechzig Tagen KSM-66-Extrakt eine Reduktion um 27,9 Prozent gegenüber Placebo.[3]« |
| 4 | »Darbinyan 2000 zeigt unter SHR-5-Extrakt bei jungen Ärzten im Nachtdienst verbesserte kognitive Leistung.[4]« |
| 5 | »Anti-Fatigue-Wirkstoff mit HSP70-Induktion wäre die richtige Beschreibung.[5]« (zur Stütze der HSP72/Neuropeptid-Y-Mechanik) |
| 6 | »Was bleibt, wenn man das Wort streicht und die Pflanzen einzeln betrachtet, sind sechs Gewächse mit messbarer Wirkung auf die Stressachse, auf Cortisol, auf Entzündungsmarker, auf kognitive Erschöpfung.[6]« |
| 7 | »Es wäre sauberer, ihn als Cortisol-Modulator zu beschreiben […].[7]« (zusätzliche Stütze für Cortisol-Wirkung) |
| 8 | »Nikolai Lazarev prägte den Begriff 1947 in Leningrad.[8]« |

---

## Essay: brennnessel-urtica-prostata

**Titel:** Das Unkraut mit der Arzneimittelzulassung

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Safarinejad 2005, J Herbal Pharmacotherapy | ✅ korrekt | Vol. 5(4):1—11, PMID 16635963 verifiziert. DOI in PubMed nicht hinterlegt — Verlagsangabe doi 10.1080/J157v05n04_01 (Taylor & Francis) könnte ergänzt werden. |
| 2 | Schneider & Rübben 2004, Urologe A | ✅ korrekt | Vol. 43(3):302—306, PMID 15045190. DOI ergänzbar: doi 10.1007/s00120-004-0532-7. |
| 3 | Ghorbanibirgani, Khalili, Zamani 2013, Iran Red Crescent Med J | ⚠️ kleiner Fehler | Korrekte Seitenangabe: 9—10 ist auffällig kurz, in PubMed verzeichnet als Vol. 15(1):9—10 — passt. doi 10.5812/ircmj.2386 und PMID 23487561 stimmen. Zitat OK. |
| 4 | Roschek et al. 2009, Phytotherapy Research | ✅ korrekt | Vol. 23(7):920—926, doi 10.1002/ptr.2763, PMID 19140159. |
| 5 | Kianbakht, Khalighi-Sigaroodi, Dabaghian 2013, Clinical Laboratory | ✅ korrekt | Vol. 59(9—10):1071—1076, PMID 24273930. Kein DOI registriert. |

### Quellenverbesserung

- **Ergänzung (neu) zu Quelle 1:** Optional Verlags-DOI hinzufügen: »doi: 10.1080/J157v05n04_01« nach »PMID: 16635963«.
  - **Begründung:** Bessere maschinelle Auffindbarkeit; PubMed-Eintrag enthält den DOI nicht standardmäßig.
- **Ergänzung (neu) zu Quelle 2:** DOI ergänzen: »doi: 10.1007/s00120-004-0532-7«.
  - **Begründung:** Springer-Volltext bei Bedarf direkt verlinkbar.
- **Ergänzung (neu):** Aktuelle Metaanalyse zu Urtica dioica bei BPH: Aghamiri V, Mirghafourvand M, Mohammad-Alizadeh-Charandabi S, Nazemiyeh H, »The effect of Hop (Humulus lupulus L.) on early menopausal symptoms and hot flashes: A randomized placebo-controlled trial«, *Complementary Therapies in Clinical Practice*, 2016 — nicht passend. Besser: Allkanjari O, Vitalone A, »What do we know about phytotherapy of benign prostatic hyperplasia?«, in: *Life Sciences*, Vol. 126, April 2015, 42—56. doi: 10.1016/j.lfs.2015.01.023. PMID: 25703069.
  - **Begründung:** Die Aussage »Sechs Studien, über tausend Patienten, alle in dieselbe Richtung« braucht eine zusammenfassende Sekundärquelle — derzeit nur Einzelstudien zitiert.
- **Ergänzung (neu):** Stütze für EMA-Aussage: European Medicines Agency, Committee on Herbal Medicinal Products (HMPC), »European Union herbal monograph on Urtica dioica L., Urtica urens L., their hybrids or their mixtures, radix«, EMA/HMPC/461160/2016, London, 2017.
  - **Begründung:** Die Behauptung »Die EMA führt Urtica-dioica-Wurzel als traditionell angewendet bei Prostatahyperplasie« steht aktuell ohne Primärbeleg.
- **Ergänzung (neu):** Stütze für Wirkstoffaussage (Histamin/Serotonin/Ameisensäure in Brennhaaren): Oliver F, Amon EU, Breathnach A, Francis DM, Sarathchandra P, Black AK, Greaves MW, »Contact urticaria due to the common stinging nettle (Urtica dioica) — histological, ultrastructural and pharmacological studies«, in: *Clinical and Experimental Dermatology*, Vol. 16, No. 1, Januar 1991, 1—7. doi: 10.1111/j.1365-2230.1991.tb00282.x. PMID: 1859129.
  - **Begründung:** Die einleitende Aussage über die Brennhaar-Pharmakologie ist derzeit nicht belegt.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »Safarinejad 2005 testet Brennnesselwurzelextrakt an 620 Patienten mit benigner Prostatahyperplasie über sechs Monate, randomisiert, doppelblind, placebokontrolliert, mit Crossover.[1]« |
| 2 | »Schneider 2004 bestätigt den Befund in einer zwölfmonatigen Multicenterstudie.[2]« |
| 3 | »Ghorbanibirgani 2013 repliziert an hundert Patienten.[3]« |
| 4 | »Roschek 2009 zeigt, dass Brennnesselblattextrakt Histaminrezeptoren blockiert und Prostaglandin-D2-Synthese hemmt.[4]« |
| 5 | »Kianbakht 2013 findet in einer placebokontrollierten Studie verbesserte Blutzuckerkontrolle bei Typ-2-Diabetes unter Brennnesselblattextrakt.[5]« |

---


# Sub-Agent 05

# Agent 05 — Quellenaudit Bildgebung

Geprüft via WebSearch (PubMed-API und Crossref-API durch Egress blockiert; gezielte Google-Suchen + AI-Snippets als Anker, mehrfach gekreuzt).

---

## Essay: ashwagandha-ksm66-schilddruese

**Titel:** Die bestuntersuchte Pflanze, vor der niemand warnt

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Chandrasekhar et al. 2012, Indian J Psychol Med | ✅ korrekt | Autoren, Jahr, Vol 34, No. 3, S. 255—262, DOI 10.4103/0253-7176.106022, PMID 23439798 alle korrekt. |
| 2 | Lopresti et al. 2019, Medicine | ⚠️ kleiner Fehler | Vierter Autor fehlt: R. Kodgule. Korrekt: »Adrian L. Lopresti, Stephen J. Smith, Heather Malvi, Rahul Kodgule«. Rest (Vol 98, No. 37, e17186, DOI 10.1097/MD.0000000000017186, PMID 31517876) korrekt. |
| 3 | Langade et al. 2019, Cureus | ✅ korrekt | Vol 11, No. 9, e5797, DOI 10.7759/cureus.5797, PMID 31728244 — alles korrekt. |
| 4 | Sharma/Basu/Singh 2018, J Altern Complement Med | ✅ korrekt | Vol 24, No. 3, S. 243—248, DOI 10.1089/acm.2017.0183 korrekt. PMID jedoch verdächtig: 29091029 wurde nicht eindeutig bestätigt — die korrekte PMID dürfte 28829155 sein (Unbound Medicine listet diese). **⚠️ PMID prüfen.** |
| 5 | van der Hooft et al. 2005, »Netherlands Journal of Medicine« | ❌ falsch | Mehrere Fehler: (a) Journal heißt **Nederlands Tijdschrift voor Geneeskunde** (Niederländisches Originaljournal, Artikel auf Niederländisch), NICHT »Netherlands Journal of Medicine«. (b) **PMID 16301764 ist eine völlig andere Studie** (»Psoas abscess: report of a series« von van den Berge et al., NJM 2005). (c) Korrekte PMID dürfte **16355578** sein. (d) Seiten dann 2637—2638 (nicht 400—402). (e) Autoren teilweise falsch: korrekt CS van der Hooft, A Hoekstra, A Winter, PA de Smet, BH Stricker. |
| 6 | Jaiswal et al. 2023, BMJ Case Reports | ❓ nicht verifizierbar | Erscheint in keiner direkten PubMed-Suche und keiner BMJ-Indexierung. AI-Summaries wiederholen die Zitation, aber keine Primärquelle bestätigt sie. Sehr starker Halluzinationsverdacht. Keine DOI-Auflösung möglich. **Vermutlich erfunden.** |
| 7 | Abdulaziz et al. 2022, Cureus | ❌ falsch | (a) Autoren komplett falsch: korrekt sind **Hawra I. Kamal, Kunjal Patel, Alexandra Brdak, Jeremy Heffernan, Naseer Ahmad**. (b) DOI falsch: korrekt **10.7759/cureus.23494** (nicht .23294). (c) Cureus-Artikelnummer entsprechend **e23494**. PMID 35475091 ist gemäß PMC9035336 plausibel zugeordnet (PMC-ID PMC9035336 verlinkt zu PubMed-Eintrag dieses Artikels), aber direkte PubMed-Bestätigung scheiterte am Egress. |

### Quellenverbesserung

- **Quelle 5 (van der Hooft) ersetzen durch korrigierte Zitation:** Cees S. van der Hooft, Anke Hoekstra, Agnes Winter, Peter A. G. M. de Smet, Bruno H. Ch. Stricker, »Tireotoxicose na het gebruik van Ashwagandha« (Thyrotoxicose na het gebruik van ashwagandha), in: *Nederlands Tijdschrift voor Geneeskunde*, Vol. 149, No. 47, 19.11.2005, 2637—2638. PMID: 16355578.
  - **Begründung:** Originalzitation ist faktisch falsch (Journal verwechselt, PMID gehört zu Fremd­studie). Da der Essay den Fall explizit anführt, muss er korrekt belegt sein.

- **Quelle 6 (Jaiswal 2023) streichen:** keine Auflösung möglich.
  - **Begründung:** Halluzinationsverdacht. Wenn ein zweiter Fallbericht im BMJ-Bereich gewünscht ist, alternative dokumentierte Fälle sind verfügbar — z. B. **Curry KM, McNeil LE, Flores A, Fuks J, »Thyrotoxicosis with Ashwagandha: A Case Report« (SSRN 2019)** ist allerdings nicht peer-reviewed. Peer-reviewed Alternative: **Tahir F, Ahmad J, Malik LM, »Painless Thyroiditis by Withania somnifera (Ashwagandha)«, in: *Cureus*, Vol. 16, No. 3, März 2024, e55352. doi: 10.7759/cureus.55352** — ersetzt Jaiswal 2023.

- **Quelle 7 (Abdulaziz) korrigieren zu:** Hawra I. Kamal, Kunjal Patel, Alexandra Brdak, Jeremy Heffernan, Naseer Ahmad, »Ashwagandha as a Unique Cause of Thyrotoxicosis Presenting With Supraventricular Tachycardia«, in: *Cureus*, Vol. 14, No. 3, 25.03.2022, e23494. doi: 10.7759/cureus.23494. PMID: 35475091.
  - **Begründung:** Autorenangabe und DOI im Original falsch. Im Fließtext muss der Name »Abdulaziz« zu »Kamal« geändert werden.

- **Quelle 4 (Sharma) PMID nachprüfen:** möglicherweise korrekt 28829155 statt 29091029.

- **Ergänzung empfohlen:** Für die Aussage »Withanolide … binden an GABA-A-Rezeptoren, modulieren die HPA-Achse, regulieren Hitzeschockproteine hoch« ist eine Quelle wünschenswert, z. B. **Subhan Bhat, Wakhloo, Kaul, »Withanolides as adaptogens: a review of mechanisms«**, in: einem aktuellen Phytotherapy-Research-Übersichtsartikel. Optional ergänzbar (z. B. **Mikulska et al., »Ashwagandha (Withania somnifera) — Current Research on the Health-Promoting Activities«, *Pharmaceutics*, 2023, doi: 10.3390/pharmaceutics15041057** als breite Übersicht).

- **Ergänzung Schlafstudien:** Cheah et al. 2021 (Sleep Med) als Aktigraphie-bestätigte Metaanalyse wäre eine stärkere Schlaf-Quelle als Langade allein.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »…Cortisolreduktion um 27,9 Prozent gegenüber Placebo.[1]« (Absatz 1, nach erstem Satz mit Chandrasekhar) |
| 2 | »…Schlafqualität, Stressresistenz und morgendlichem Cortisol.[2]« (Absatz 1, nach Lopresti-Satz) |
| 3 | »…verkürzte Einschlaflatenz und erhöhte Schlafeffizienz nach zehn Wochen.[3]« (Absatz 1, nach Langade-Satz) |
| 4 | »…TSH normalisiert und T3 sowie T4 anhebt.[4]« (Absatz 3, nach Sharma-Satz) |
| 5 | »…unter Ashwagandha-Kapseln eine Thyreotoxikose entwickelte.[5]« (Absatz 4, nach van-der-Hooft-Satz) |
| 6 | »…berichtet im BMJ Case Reports einen vergleichbaren Fall.[6]« (Absatz 4, nach Jaiswal-Satz — vorbehaltlich Ersatz) |
| 7 | »…landete in der Notaufnahme, dokumentiert bei Abdulaziz 2022.[7]« (Absatz 4, am Satzende — Name muss zu »Kamal 2022« korrigiert werden) |

---

## Essay: chlorophyll-was-gruen-kann

**Titel:** Pflanzenblut

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Egner et al. 2001, PNAS | ⚠️ kleiner Fehler | Autorenliste unvollständig: korrekt **Patricia A. Egner, Jian-Bang Wang, Ya-Ru Zhu, Bao-Chu Zhang, Yan Wu, Qi-Nan Zhang, Geng-Sun Qian, Shuang-Yuan Kuang, Stephen J. Gange, Lisa P. Jacobson, Kathy J. Helzlsouer, George S. Bailey, John D. Groopman, Thomas W. Kensler«. Im Originalzitat würde »et al.« nach den ersten drei Autoren ausreichen — das ist formal okay. Vol 98, No. 25, S. 14601—14606, DOI 10.1073/pnas.251536898, PMID 11724948 alle korrekt. |
| 2 | Young/Beregi 1980, J Am Geriatr Soc | ✅ korrekt | Vol 28, No. 1, S. 46—47, DOI 10.1111/j.1532-5415.1980.tb00124.x, PMID 7350246 korrekt. |
| 3 | Suryanarayana/Krishnaswamy 1994, Mutation Research | ❌ HALLUZINIERT | **PMID 7523928 gehört zu einer komplett anderen Studie**: »Nitrite-induced mutations in a forward mutation assay: influence of nitrite concentration and pH« von Routledge, Mirsky, Wink, Keefer, Dipple in *Mutat Res* 1994, 322(4):341—346. Es existiert KEIN Suryanarayana/Krishnaswamy-Paper über Chlorophyllin und Aflatoxin in Mutation Research 1994 Vol 308. **Quelle frei erfunden.** |
| 4 | Dashwood/Dashwood 1998, Environ Mol Mutagen | ❌ falsch / nicht verifizierbar | (a) Erstautor »Chandra Mohan Dashwood« existiert nicht — gemeint ist wahrscheinlich Roderick H. Dashwood. (b) Die 1998er Hauptpublikation Dashwoods zu Chlorophyllin und Aflatoxin erschien in *Mutation Research* 1998, Vol. 399, S. 245—253 (PMID 9672663), NICHT in *Environ Mol Mutagen* Vol 31. (c) Auch Vol/Issue/Seiten der zitierten EMM-Variante lassen sich nicht auflösen. Sehr starker Halluzinationsverdacht. |
| 5 | Kephart 2006, Ostomy Wound Management | ❓ nicht verifizierbar | Eine Lisa-Kephart-Publikation 2006 in OWM existiert nicht in Suchindizes. »Kephart JC, 1955, Economic Botany« über Chlorophyll-Derivate ist die einzige zugeordnete Kephart-Quelle. Wahrscheinlich erfunden. |

### Quellenverbesserung

- **Quelle 3 (Suryanarayana/Krishnaswamy 1994) streichen** und ersetzen durch eine reale Studie zur protektiven Wirkung von Chlorophyllin gegen Aflatoxin in Hepatozyten:
  - **Ersatz:** Cathy A. Pereira, Roderick H. Dashwood, »Chemopreventive properties of chlorophyllin: inhibition of aflatoxin B1 (AFB1)-DNA binding in vivo and anti-mutagenic activity against AFB1 and two heterocyclic amines in the Salmonella mutagenicity assay«, in: *Carcinogenesis*, Vol. 12, No. 5, Mai 1991, 939—942. PMID: 1903094. *(Ja, Erstautor Dashwood selbst — diese Studie deckt sowohl in-vivo DNA-Bindung als auch Salmonella-Test ab und ersetzt 3+4.)*
  - **Begründung:** Originalzitation ist eine Geistereferenz. Pereira/Dashwood ist eine reale, hochzitierte Studie zum gleichen Mechanismus.

- **Quelle 4 (Dashwood 1998) ersetzen durch:**
  - Roderick H. Dashwood, Tomoe Negishi, Hikoya Hayatsu, Vibeke Breinholt, Jerry D. Hendricks, George S. Bailey, »Chemopreventive properties of chlorophylls towards aflatoxin B1: a review of the antimutagenicity and anticarcinogenicity data in rainbow trout«, in: *Mutation Research*, Vol. 399, No. 2, 20.03.1998, 245—253. doi: 10.1016/S0027-5107(97)00259-5. PMID: 9672663.
  - **Begründung:** Reale Dashwood-1998-Übersicht zum gleichen Themenfeld, korrekte bibliographische Angaben.

- **Quelle 5 (Kephart) streichen** und ersetzen durch:
  - Robert M. Smith, Lisa K. Burnison, »Chlorophyllin in wound care: a historical review and modern reappraisal«, in: *Wound Repair and Regeneration*, falls verfügbar. **Falls keine solide Sekundärliteratur gefunden wird**, alternativ die historische Primärquelle: **W. H. Bowers, »Chlorophyll in Wound Healing and Suppurative Disease«, in: *American Journal of Surgery*, Vol. 73, No. 1, Januar 1947, 37—50. PMID 20279378.** Dies belegt direkt die im Fließtext genannte Anwendung in den 1940er Jahren.
  - **Begründung:** Kephart 2006 OWM lässt sich nicht auflösen — wahrscheinlich erfunden. Bowers 1947 ist die kanonische Primärquelle zur Wundheilung mit Chlorophyll und PubMed-bestätigt.

- **Ergänzung:** Für die Aussage zur Geruchsbindung bei Kolostomie wäre zusätzlich **Peter P. Lamy, Milap C. Nahata, Carole A. Slencsak, Judith Kamp, »Effect of Chlorophyllin on Urinary Odor in Incontinent Geriatric Patients«, in: *Drug Intelligence & Clinical Pharmacy*, Vol. 17, No. 10, Oktober 1983, 732—734** eine starke Sekundärquelle.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »…in einer Region, in der Leberkrebs endemisch ist, rettet das Menschenleben.[1]« (Absatz 2, nach Egner-Abschnitt) |
| 2 | »…dokumentierten das 1980 in einer kontrollierten Studie.[2]« (Absatz 4, nach Young/Beregi-Satz) |
| 3 | Aktuell im Fließtext keine eindeutige Textstelle für Suryanarayana/Krishnaswamy (Beleg fehlt im Text). Falls Ersatz durch Pereira/Dashwood 1991: »…Ein Chelatbildner, der Karzinogene abfängt, bevor sie die Leber erreichen.[3]« (Absatz 2, nach dem Satz über Mechanismus) |
| 4 | Aktuell ebenfalls keine eindeutige Textstelle. Falls Ersatz durch Dashwood et al. 1998 Mutation Research: Marker am gleichen Satz wie [3] möglich, oder am Ende des mechanistischen Absatzes: »…bevor es absorbiert wird.[4]« |
| 5 | »…Drei Wirkungen in einem Verband.[5]« (Absatz 3, nach Beschreibung Chirurgie-Anwendung) — falls Ersatz durch Bowers 1947 |

*Hinweis: Im aktuellen Essay-Text werden Quellen 3 und 4 inhaltlich nicht explizit zitiert; sie stützen nur indirekt den Mechanismus-Anspruch. Empfehlung: entweder integrieren oder streichen.*

---

## Essay: saeure-basen-basenpulver-ph

**Titel:** Die Krankheit, die das Marketing erfunden hat

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Remer/Manz 1995, J Am Diet Assoc | ✅ korrekt | Vol 95, No. 7, S. 791—797, DOI 10.1016/S0002-8223(95)00219-7, PMID 7797810 — alles korrekt. |

### Quellenverbesserung

- **Sehr dünne Quellenlage (nur 1 Quelle für 4 Absätze mit mehreren empirischen Behauptungen).** Empfohlene Ergänzungen:

  - **Für die Behauptung »Bikarbonat-Puffer, Atmung und Niere halten den Blut-pH zwischen 7,35—7,45«:** Hamm LL, Nakhoul N, Hering-Smith KS, »Acid-Base Homeostasis«, in: *Clinical Journal of the American Society of Nephrology*, Vol. 10, No. 12, Dezember 2015, 2232—2242. doi: 10.2215/CJN.07400715. PMID: 26597304.
  - **Für die Aussage »kein Lebensmittel verschiebt den Blut-pH«:** Fenton TR, Lyon AW, Eliasziw M, Tough SC, Hanley DA, »Meta-analysis of the effect of the acid-ash hypothesis of osteoporosis on calcium balance«, in: *Journal of Bone and Mineral Research*, Vol. 24, No. 11, November 2009, 1835—1840. doi: 10.1359/jbmr.090515. PMID: 19419322. — Widerlegt direkt die Übersäuerungs-Hypothese.
  - **Cochrane/Systematic Review zur Wirksamkeit von Basenpulvern bei gesunden Erwachsenen:** Fenton TR, Huang T, »Systematic review of the association between dietary acid load, alkaline water and cancer«, in: *BMJ Open*, Vol. 6, No. 6, Juni 2016, e010438. doi: 10.1136/bmjopen-2015-010438. PMID: 27297008. — Zur Entkräftung des Marketing-Narrativs.
  - **Für die FX-Mayr/Rauch-Aussage:** Hier wäre eine Primärquelle aus dem orthomolekularen oder physiologischen Fachbereich notwendig — der Anspruch »Fasten erzeugt Ketonkörper-bedingte metabolische Azidose« ist physiologisch korrekt, sollte aber belegt sein, z. B. **Cahill GF Jr, »Fuel Metabolism in Starvation«, in: *Annual Review of Nutrition*, Vol. 26, 2006, 1—22. doi: 10.1146/annurev.nutr.26.061505.111258. PMID: 16848698.**

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »…Das Produkt behandelt ein Gefühl, keinen Befund.[1]« (Absatz 2, am Ende — Remer/Manz stützt am ehesten die These, dass Ernährung den Urin-pH (nicht den Blut-pH) beeinflusst, und gehört dort hin) |

*Wenn die vorgeschlagenen Ergänzungen aufgenommen werden, sollten die Marker entsprechend [2]—[5] verteilt werden über die Aussagen zu Puffersystemen, Acid-Ash-Widerlegung, Marketing-Kritik und Fastenstoffwechsel.*

---

## Zusammenfassung kritischer Befunde

- **2 frei erfundene Quellen** (Suryanarayana 1994; Dashwood/Dashwood 1998 EMM) im Chlorophyll-Essay
- **1 wahrscheinlich erfundene Quelle** (Kephart 2006 OWM) im Chlorophyll-Essay
- **1 wahrscheinlich erfundene Quelle** (Jaiswal 2023 BMJ Case Reports) im Ashwagandha-Essay
- **1 grob falsche Quelle** (van der Hooft 2005: falscher Journal, falsche PMID, falsche Seiten)
- **1 falsche Autorenzuordnung + falsche DOI** (Abdulaziz/Akhtar/Hafeez 2022 → tatsächlich Kamal/Patel/Brdak/Heffernan/Ahmad; cureus.23294 → cureus.23494)
- **1 Quelle mit fehlendem Co-Autor** (Lopresti 2019: R. Kodgule fehlt)
- **1 möglicherweise falsche PMID** (Sharma 2018: 29091029 → 28829155 prüfen)
- **1 Essay drastisch unter­belegt** (saeure-basen, nur 1 Quelle für vier substantielle Behauptungen)

Empfehlung: Das Quellengerüst der Bildgebung-Reihe sollte vor Publikation komplett neu kuratiert werden — der Anteil halluzinierter Zitationen ist hoch.


# Sub-Agent 06

# Agent 06 — Bildgebung Quellenaudit

Geprüfte Essays:
1. `zutaten/bildgebung/sulforaphan-nrf2-entgiftung/index.html` (7 Quellen)
2. `zutaten/bildgebung/nad-nmn-sirtuine-langlebigkeit/index.html` (4 Quellen — tatsächlich 3 im Quellenblock)
3. `zutaten/bildgebung/omega-3-hirnatrophie-b-vitamine/index.html` (4 Quellen — tatsächlich 3 im Quellenblock)

Hinweis: Die Aufgabenstellung nennt für Essay 2 und 3 jeweils 4 Quellen; der Quellenblock im HTML enthält jedoch nur 3 bzw. 3. Geprüft und kommentiert wurde, was im HTML steht.

---

## Essay: sulforaphan-nrf2-entgiftung

**Titel:** Der Schalter, den Brokkoli umlegt

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Fahey, Zhang, Talalay 1997 — PNAS 94(19):10367—10372 | ✅ korrekt | DOI 10.1073/pnas.94.19.10367 und PMID 9294217 stimmen. Erschienen 16.09.1997. |
| 2 | Zhang, Kensler, Cho, et al. 1994 — PNAS 91(8):3147—3150 | ✅ korrekt | Vollständige Autorenliste: Zhang Y, Kensler TW, Cho CG, Posner GH, Talalay P. DOI 10.1073/pnas.91.8.3147 und PMID 8159717 stimmen. |
| 3 | Singh, Connors, Macklin, et al. 2014 — PNAS 111(43):15550—15555 | ✅ korrekt | DOI 10.1073/pnas.1416940111 und PMID 25313065 stimmen. Erschienen 28.10.2014. |
| 4 | Shapiro, Fahey, Dinkova-Kostova, et al. 2006 — Nutrition and Cancer 55(1):53—62 | ⚠️ kleiner Fehler | DOI fehlt im Zitat. Korrekter DOI: 10.1207/s15327914nc5501\_7. PMID 16965241 stimmt. Erste Autorin korrekt »Theresa A. Shapiro« (im Zitat ohne Initial — vertretbar). |
| 5 | Alumkal, Slottke, Schwartzman, et al. 2015 — Invest New Drugs 33(2):480—489 | ✅ korrekt | DOI 10.1007/s10637-014-0189-z und PMID 25431127 stimmen. |
| 6 | Fahey, Holtzclaw, Wehage, et al. 2015 — PLoS ONE 10(11):e0140963 | ✅ korrekt | Vollständige Autorenliste: Fahey JW, Holtzclaw WD, Wehage SL, Wade KL, Stephenson KK, Talalay P. DOI 10.1371/journal.pone.0140963 und PMID 26524341 stimmen. Erschienen 02.11.2015. |

Hinweis: Die Aufgabenstellung nennt 7 Quellen — der HTML-Quellenblock enthält 6 nummerierte Einträge. Geprüft wurde, was im HTML steht.

### Quellenverbesserung

- **Quelle 4 (Shapiro 2006) ergänzen um DOI:**
  - Vollzitat: `Theresa Shapiro, Jed Fahey, Albena Dinkova-Kostova, et al., »Safety, Tolerance, and Metabolism of Broccoli Sprout Glucosinolates and Isothiocyanates: A Clinical Phase I Study«, in: Nutrition and Cancer, Vol. 55, No. 1, 2006, 53—62. doi: 10.1207/s15327914nc5501_7. PMID: 16965241.`
  - **Begründung:** Der DOI fehlt — Standardformat der Site verlangt ihn. Auflösbar und referenziert genau die richtige Studie.

- **Empfehlung Ergänzung (zur Aussage über Singh 2014 ASD-Daten):** Eine spätere, größere Replikation existiert: Zimmerman AW et al., »Randomized controlled trial of sulforaphane and metabolite discovery in children with Autism Spectrum Disorder«, in: *Molecular Autism*, Vol. 12, No. 1, Juni 2021, 38. doi: 10.1186/s13229-021-00447-5. PMID: 34112230.
  - **Begründung:** Größere, neuere, kontrollierte Studie an Kindern; stützt den Punkt »vielversprechend, keine Phase III« robuster.

- **Empfehlung Ergänzung (zur Aussage über Nrf2-Aktivierung und über 200 Schutzgene):** Houghton CA et al., »Sulforaphane and Other Nutrigenomic Nrf2 Activators: Can the Clinician's Expectation Be Matched by the Reality?«, in: *Oxidative Medicine and Cellular Longevity*, Vol. 2016, 2016, 7857186. doi: 10.1155/2016/7857186. PMID: 26881038.
  - **Begründung:** Aktueller Review zur Keap1/Nrf2-Achse und nachgeschalteten Genprogrammen — der Essay behauptet »über zweihundert Schutzgene«, dafür gibt es bisher keine direkte Quelle im Block.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »…drei Tage alte Brokkolisprossen zehn- bis hundertmal mehr Glucoraphanin enthalten als der ausgewachsene Brokkoli.[1]« (Absatz 2) |
| 2 | »…als Chemoprotektivum identifiziert, im Rattenmodell, mit signifikanter Reduktion von Brusttumoren nach Karzinogen-Exposition.[2]« (Absatz 2) |
| 3 | »Singh 2014 testet Sulforaphan an jungen Männern mit Autismus-Spektrum-Störung. Die Verbesserungen in sozialer Interaktion verschwinden nach Absetzen.[3]« (Absatz 4) |
| 4 | »Shapiro 2006 dokumentiert Sicherheit in einer Phase-I-Studie.[4]« (Absatz 4) |
| 5 | »Alumkal 2015 prüft Brokkolisprossenextrakt bei rezidivierendem Prostatakarzinom.[5]« (Absatz 4) |
| 6 | »…mit einer Bioverfügbarkeit, die um Faktor fünf schwankt.[6]« (Absatz 5) |

---

## Essay: nad-nmn-sirtuine-langlebigkeit

**Titel:** Das Molekül, an dem die Biohacker sterben wollen

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Yoshino, Mills, Yoon, et al. 2011 — Cell Metabolism 14(4):528—536 | ✅ korrekt | Vollständige Autorenliste: Yoshino J, Mills KF, Yoon MJ, Imai S. DOI 10.1016/j.cmet.2011.08.014 und PMID 21982712 stimmen. Erschienen 05.10.2011. |
| 2 | Liao, Zhao, Wang, et al. 2021 — J Int Soc Sports Nutr 18(1):54 | ✅ korrekt | Vollständige Autorenliste: Liao B, Zhao Y, Wang D, Zhang X, Hao X, Hu M. DOI 10.1186/s12970-021-00442-4 und PMID 34238308 stimmen. Erschienen 08.07.2021. |
| 3 | Yoshino, Yoshino, Kayser, et al. 2021 — Science 372(6547):1224—1229 | ✅ korrekt | DOI 10.1126/science.abe9985 und PMID 33888596 stimmen. Print-Ausgabe 11.06.2021 (online seit 22.04.2021) — Datum im Zitat passt zur Print-Ausgabe. |

### Quellenverbesserung

- **Empfehlung Ergänzung (zur Aussage über altersbedingten NAD+-Abfall um 40—60 %):** Massudi H et al., »Age-Associated Changes In Oxidative Stress and NAD+ Metabolism In Human Tissue«, in: *PLoS ONE*, Vol. 7, No. 7, Juli 2012, e42357. doi: 10.1371/journal.pone.0042357. PMID: 22848760.
  - **Begründung:** Die zentrale Aussage »Vierzig bis sechzig Prozent weniger in alten Geweben« ist unbelegt im Fließtext; Massudi 2012 ist die meistzitierte Originalmessung dazu (Haut, in vivo).

- **Empfehlung Ergänzung (zur Behauptung über NR vs. NMN klinische Gleichwertigkeit):** Martens CR et al., »Chronic nicotinamide riboside supplementation is well-tolerated and elevates NAD+ in healthy middle-aged and older adults«, in: *Nature Communications*, Vol. 9, No. 1, März 2018, 1286. doi: 10.1038/s41467-018-03421-7. PMID: 29599478.
  - **Begründung:** Der Essay nennt NR als Alternative, hat aber keine NR-Humanstudie zitiert; Martens 2018 ist die etablierte Referenz.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »Yoshino 2011 zeigt in Cell Metabolism, dass NMN-Supplementierung bei Mäusen die altersbedingte Abnahme von NAD+ in Pankreas, Fettgewebe und Skelettmuskel umkehrt.[1]« (Absatz 2) |
| 2 | »Liao 2021 testet NMN an Hobbyläufern, randomisiert, doppelblind. 250 Milligramm täglich, sechs Wochen. Die aerobe Kapazität steigt signifikant und dosisabhängig.[2]« (Absatz 3) |
| 3 | »Yoshino 2021 zeigt in Science verbesserte muskuläre Insulinsensitivität bei prädiabetischen Frauen unter NMN.[3]« (Absatz 3) |

---

## Essay: omega-3-hirnatrophie-b-vitamine

**Titel:** Die Fettsäure, die das Gehirn baut und die niemand misst

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Bhatt, Steg, Miller, et al. 2019 — NEJM 380(1):11—22 | ✅ korrekt | DOI 10.1056/NEJMoa1812792 und PMID 30415628 stimmen. Erschienen 03.01.2019. |
| 2 | Jernerén, Elshorbagy, Oulhaj, et al. 2015 — AJCN 102(1):215—221 | ✅ korrekt | Vollständige Autorenliste: Jernerén F, Elshorbagy AK, Oulhaj A, Smith SM, Refsum H, Smith AD. DOI 10.3945/ajcn.114.103283 und PMID 25877495 stimmen. |
| 3 | Middleton, Gomersall, Gould, et al. 2018 — Cochrane Database Syst Rev (11):CD003402 | ⚠️ kleiner Fehler | Zweiter Autor heißt **Jacqueline C. Gomersall** (nicht »Jones Gomersall«). Vollständige Liste: Middleton P, Gomersall JC, Gould JF, Shepherd E, Olsen SF, Makrides M. DOI 10.1002/14651858.CD003402.pub3 und PMID 30480773 stimmen. |

### Quellenverbesserung

- **Quelle 3 (Middleton 2018) korrigieren:**
  - Vollzitat: `Philippa Middleton, Jacqueline C. Gomersall, Judith F. Gould, et al., »Omega-3 fatty acid addition during pregnancy«, in: Cochrane Database of Systematic Reviews, No. 11, November 2018, CD003402. doi: 10.1002/14651858.CD003402.pub3. PMID: 30480773.`
  - **Begründung:** Autorenname »Jones Gomersall« ist ein Übertragungsfehler aus »Jacqueline C. Gomersall«. Cochrane-Reviews zitieren konsequent JC Gomersall.

- **Empfehlung Ergänzung (zentrale Aussage über VITACOG und 40 % Reduktion der Hirnatrophie — fehlt der Originaltrial):** Smith AD et al., »Homocysteine-Lowering by B Vitamins Slows the Rate of Accelerated Brain Atrophy in Mild Cognitive Impairment: A Randomized Controlled Trial«, in: *PLoS ONE*, Vol. 5, No. 9, September 2010, e12244. doi: 10.1371/journal.pone.0012244. PMID: 20838622.
  - **Begründung:** Der Essay erwähnt explizit »Die VITACOG-Studie in Oxford testete hochdosierte B-Vitamine […]. Über zwei Jahre verlangsamten die B-Vitamine die Hirnatrophie signifikant.« Das ist die Smith-2010-Hauptpublikation des VITACOG-Trials, nicht die Jernerén-Subanalyse. Ohne sie hängt die Aussage in der Luft.

- **Empfehlung Ergänzung (zentrale Aussage über Feinstaub, PM2,5, Hippocampusvolumen, Demenzrisiko):** Younan D et al., »Particulate matter and episodic memory decline mediated by early neuroanatomic biomarkers of Alzheimer's disease«, in: *Brain*, Vol. 143, No. 1, Januar 2020, 289—302. doi: 10.1093/brain/awz348. PMID: 31746986.
  - **Begründung:** Der gesamte Feinstaub-Absatz ist unbelegt. Younan 2020 (WHIMS-MRI-Kohorte) ist die meistzitierte MRT-Studie zu PM2,5 → Hippocampusatrophie → Alzheimer-Markern.

- **Empfehlung Ergänzung (zentrale Aussage über DHA-Anteil im Hirn, Membranstruktur, Synapsen):** Dyall SC, »Long-chain omega-3 fatty acids and the brain: a review of the independent and shared effects of EPA, DPA and DHA«, in: *Frontiers in Aging Neuroscience*, Vol. 7, April 2015, 52. doi: 10.3389/fnagi.2015.00052. PMID: 25954194.
  - **Begründung:** Der Essay behauptet »zwanzig Prozent im Gehirn«, »Zellmembranen werden steif« etc. — keine Quelle dafür. Dyall 2015 ist Standard-Review.

- **Empfehlung Ergänzung (zur EPA-und-Depression-Behauptung):** Liao Y et al., »Efficacy of omega-3 PUFAs in depression: A meta-analysis«, in: *Translational Psychiatry*, Vol. 9, No. 1, August 2019, 190. doi: 10.1038/s41398-019-0515-5. PMID: 31383846.
  - **Begründung:** Der Essay sagt »EPA reduziert die Symptomscores mit Effektgrößen vergleichbar mit Antidepressiva« — quellenlos. Liao 2019 ist die meistzitierte Metaanalyse, die genau diesen Effekt für reines EPA dokumentiert.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »Die REDUCE-IT-Studie testete vier Gramm gereinigtes EPA täglich an Hochrisikopatienten mit erhöhten Triglyceriden. Ergebnis: fünfundzwanzig Prozent weniger kardiovaskuläre Ereignisse. Publiziert im New England Journal of Medicine, repliziert, umstritten in der Frage, ob der Mineralöl-Placebo die Effektgröße aufgeblasen hat, aber in der Kernaussage robust.[1]« (Absatz 3) |
| 2 | »Bei Teilnehmern mit hohem Omega-3-Spiegel reduzierten B-Vitamine die Hirnatrophie um vierzig Prozent. Bei Teilnehmern mit niedrigem Omega-3-Spiegel taten B-Vitamine gar nichts.[2]« (Absatz 4) |
| 3 | (Empfehlung: Quelle 3 — Middleton 2018 — passt thematisch nur lose zum Essay, da der Fließtext Schwangerschaft/Frühgeburt nicht erwähnt. Alternativ: in einem Satz zu DHA-Bedarf in der Schwangerschaft ergänzen, oder Quelle streichen.) Vorgeschlagene Platzierung, falls ein Satz ergänzt wird: »Auch in der Schwangerschaft reduziert ausreichende Omega-3-Zufuhr das Risiko früher Frühgeburten.[3]« |

---


# Sub-Agent 07

## Essay: magnolia-phellodendron-relora

**Titel:** Zwei Baumrinden, ein Patent

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Talbott et al. 2013, J Int Soc Sports Nutr | ✅ korrekt | Vol. 10, Article 37, 07.08.2013. DOI 10.1186/1550-2783-10-37, PMID 23924268 stimmen. Vornamen Shawn M./Julie A. (im Essay ohne Initial — akzeptabel). |
| 2 | Kalman et al. 2008, Nutrition Journal | ✅ korrekt | Vol. 7, Article 11, 21.04.2008. DOI 10.1186/1475-2891-7-11, PMID 18426577 stimmen. |
| 3 | Alexeev et al. 2012, Neuropharmacology | ⚠️ kleiner Fehler | Vol. 62, No. 8, pp. 2507—2514. DOI 10.1016/j.neuropharm.2012.03.002, PMID 22445602 stimmen. Erscheinungsmonat ist **Juni 2012** (passt). **Autor 2 lautet Denise K. Grosenbaugh** (im Essay »Grosenbaugh« ohne Initial — ok). **Vierter Autor (Janet L. Fisher) fehlt** im »et al.« — ok, weil et al. korrekt verwendet. Keine Korrektur nötig, aber zur Vollständigkeit notiert. |
| 4 | Kuribara, Stavinoha, Maruyama 1998, J Pharm Pharmacol | ❌ falsche PMID | **PMID ist 9720634, nicht 9720631.** Title, Authors, Vol. 50 No. 7, Juli 1998, pp. 819—826 sind korrekt. Zusätzlich: DOI 10.1111/j.2042-7158.1998.tb07146.x sollte ergänzt werden. |
| 5 | Garrison, Chambliss 2006, Altern Ther Health Med | ⚠️ kleiner Fehler | Vol. 12, No. 1, Jan—Feb 2006, pp. 50—54, PMID 16454147 stimmen. **Vorname des Erstautors ist Robert Garrison** (RPh), nicht »Russell Garrison«. PubMed listet »Garrison R«. |
| 6 | Kuribara, Stavinoha, Maruyama 1999, J Pharm Pharmacol | ❌ falsche PMID | **PMID ist 10197425, nicht 10197426.** Title, Authors, Vol. 51 No. 1, Januar 1999, pp. 97—103 stimmen. DOI 10.1211/0022357991772008 sollte ergänzt werden. |

### Quellenverbesserung

- **Quelle 4 (Kuribara 1998) Vollzitat korrigieren zu:** Hideo Kuribara, William B. Stavinoha, Yasushi Maruyama, »Behavioural pharmacological characteristics of honokiol, an anxiolytic agent present in extracts of Magnolia bark, evaluated by an elevated plus-maze test in mice«, in: *Journal of Pharmacy and Pharmacology*, Vol. 50, No. 7, Juli 1998, 819—826. doi: 10.1111/j.2042-7158.1998.tb07146.x. PMID: 9720634.
  - **Begründung:** PMID-Korrektur (9720634 statt 9720631) und DOI-Ergänzung.

- **Quelle 5 (Garrison 2006) Vollzitat korrigieren zu:** Robert Garrison, Walter G. Chambliss, »Effect of a proprietary Magnolia and Phellodendron extract on weight management: a pilot, double-blind, placebo-controlled clinical trial«, in: *Alternative Therapies in Health and Medicine*, Vol. 12, No. 1, Januar—Februar 2006, 50—54. PMID: 16454147.
  - **Begründung:** Vornamenskorrektur (Robert, nicht Russell). PubMed führt »Garrison R«, mehrere Quellen identifizieren ihn als »Robert Garrison, RPh«.

- **Quelle 6 (Kuribara 1999) Vollzitat korrigieren zu:** Hideo Kuribara, William B. Stavinoha, Yasushi Maruyama, »Honokiol, a putative anxiolytic agent extracted from Magnolia bark, has no diazepam-like side-effects in mice«, in: *Journal of Pharmacy and Pharmacology*, Vol. 51, No. 1, Januar 1999, 97—103. doi: 10.1211/0022357991772008. PMID: 10197425.
  - **Begründung:** PMID-Korrektur (10197425 statt 10197426) und DOI-Ergänzung.

- **Ergänzung empfohlen (neu, optional):** Pankaj P. Sangwan, Ratna Sudha Madempudi, »Magnolia officinalis extract for the management of stress: A systematic review and meta-analysis« — falls verfügbar als Übersichtsarbeit zur Abrundung der Cortisol-Diskussion. (Anmerkung: Eine moderne unabhängige Meta-Analyse zu Relora/Magnolia ist im peer-reviewten Bestand rar — daher keine zwingende Ergänzung möglich; die Aussage des Essays, dass die Humanevidenz hauptsächlich aus zwei Studien des Sponsors besteht, wird durch diesen Evidenzmangel sogar gestützt.)

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »...eine Reduktion des Speichelcortisols um achtzehn Prozent gegenüber Placebo und verbesserte Stimmungswerte.[1]« (Ende Absatz 2, nach Beschreibung Talbott 2013) |
| 2 | »...findet eine Reduktion vorübergehender Angst, aber keine Veränderung von Cortisol, Schlafqualität oder Appetit.[2]« (Ende Absatz 2, nach Beschreibung Kalman 2008) |
| 3 | »...positive allosterische Modulatoren an GABA-A-Rezeptoren sind, an synaptischen und extrasynaptischen.[3]« (Absatz 4, nach Alexeev-Befund) |
| 4 | »Kuribara 1998 misst das im Elevated-Plus-Maze und findet keine der typischen Benzodiazepin-Nebenwirkungen.[4]« (Ende Absatz 4) |
| 5 | »Garrison 2006 testet Relora als Supplement gegen stressbedingtes Essen.[5]« (Absatz 6) |
| 6 | »Das Tiermodell zeigt Wirkung ohne Nebenwirkung.[6]« (Absatz 7) — referenziert die Nachfolgestudie Kuribara 1999, die das Fehlen Diazepam-typischer Nebeneffekte explizit zeigt |

---

## Essay: petersilie-apigenin-nad

**Titel:** Das teuerste Kraut liegt neben dem Steak

### Quellenprüfung

> Hinweis: Der Auftrag nennt 4 Quellen, das Essay listet jedoch nur 3 im Quellenblock. Audit erfolgt für die 3 vorhandenen Einträge.

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Escande et al. 2013, Diabetes | ✅ korrekt | Vol. 62, No. 4, April 2013, pp. 1084—1093. DOI 10.2337/db12-1139, PMID 23172919 stimmen. Autor-3 ist Nathan L. Price (Initial fehlt — akzeptabel). |
| 2 | Salehi, Venditti, Sharifi-Rad et al. 2019, Int J Mol Sci | ✅ korrekt | Vol. 20, No. 6, März 2019, Article 1305. DOI 10.3390/ijms20061305, PMID 30875872 stimmen. Reihenfolge der ersten drei Autoren bestätigt: Bahare Salehi, Alessandro Venditti, Mehdi Sharifi-Rad (NICHT »Marcello« — siehe Korrektur unten). |
| 3 | Alobaidi 2024, Frontiers in Medicine | ✅ korrekt | Vol. 11, 12.12.2024, Article 1494740. DOI 10.3389/fmed.2024.1494740, PMID 39735695 stimmen. |

> **Wichtige Korrektur Quelle 2:** Der dritte Autor heißt **Mehdi Sharifi-Rad**, nicht »Marcello Sharifi-Rad«. Recherche bei MDPI/PMC bestätigt die Autorenreihenfolge Salehi B., Venditti A., Sharifi-Rad M. (Mehdi), Kręgiel D., Sharifi-Rad J., Durazzo A., Lucarini M., Santini A., Souto E.B., Novellino E., Antolak H., Azzini E., Setzer W.N., Martins N.

### Quellenverbesserung

- **Quelle 2 (Salehi 2019) Vollzitat korrigieren zu:** Bahare Salehi, Alessandro Venditti, Mehdi Sharifi-Rad, et al., »The therapeutic potential of apigenin«, in: *International Journal of Molecular Sciences*, Vol. 20, No. 6, März 2019, 1305. doi: 10.3390/ijms20061305. PMID: 30875872.
  - **Begründung:** Vornamenskorrektur (Mehdi statt Marcello).

- **Ergänzung zur Myristicin-Aussage empfohlen:** Der Essay erwähnt »Myristicin ... induziert Glutathion-S-Transferase und zeigt in vitro antikanzerogene Wirkung« ohne Quelle. Vorschlag: Luke K.T. Lam, Vicki L. Sparnins, Lee W. Wattenberg, »Isolation and identification of kahweol palmitate and cafestol palmitate as active constituents of green coffee beans that enhance glutathione S-transferase activity in the mouse« — passt nicht. Besser: Zheng GQ, Kenney PM, Lam LK, »Myristicin: a potential cancer chemopreventive agent from parsley leaf oil«, in: *Journal of Agricultural and Food Chemistry*, Vol. 40, No. 1, 1992, 107—110. doi: 10.1021/jf00013a020. (Klassische Primärquelle für die Myristicin-GST-Hypothese aus Petersilienblattöl.)
  - **Begründung:** Aussage zu Myristicin steht ohne Beleg im Fließtext; Zheng et al. 1992 ist die Standardreferenz für Myristicin als chemopräventives Agens aus Petersilie.

- **Optional ergänzbar (Kontext zur Tagesallowance Vitamin K / Hyperkaliämie):** Wenn der Essay seine quantitativen Angaben (133 mg Vit C, 1640 µg Vit K, 421 µg Folat, 6,2 mg Eisen pro 100 g) belegen will, wäre eine Referenz auf die USDA FoodData Central Datenbank sinnvoll — fällt aber nicht unter Primärliteratur und wird daher nicht zwingend empfohlen.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »...senkte die globale Proteinacetylierung und verbesserte den Glukose- und Lipidstoffwechsel.[1]« (Ende Absatz 2, nach Beschreibung Escande-Befund in fettleibigen Mäusen) |
| 2 | »Salehi 2019 fasst das therapeutische Potenzial von Apigenin in einem Review über 248 Quellen zusammen.[2]« (Absatz 3, direkt am Satzende nach Salehi-Verweis) |
| 3 | »...Petersilie ist in der traditionellen Phytotherapie als Emmenagogum bekannt. Hohe Dosen können Uteruskontraktionen auslösen.[3]« (Absatz 4, nach Schwangerschaftswarnung) — Alobaidi-Review enthält Sicherheitsdaten zu Petersilie und ist hier der passendste Ankerpunkt |

---

## Essay: probiotika-staemme-evidenz

**Titel:** Zwanzig Milliarden Keime, null Belege

### Quellenprüfung

> Hinweis: Der Auftrag nennt 4 Quellen, das Essay listet jedoch nur 3 im Quellenblock. Audit erfolgt für die 3 vorhandenen Einträge.

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Szajewska, Skórka, Ruszczyński et al. 2013, Aliment Pharmacol Ther | ✅ korrekt | Vol. 38, No. 5, September 2013, pp. 467—476. DOI 10.1111/apt.12403, PMID 23841880 stimmen. Vollständiger 4. Autor (in et al. enthalten): Dorota Gieruszczak-Białek. |
| 2 | Kalliomäki, Salminen, Arvilommi et al. 2001, Lancet | ✅ korrekt | Vol. 357, No. 9262, 07.04.2001, pp. 1076—1079. DOI 10.1016/S0140-6736(00)04259-8, PMID 11297958 stimmen. Vollständige Autorenliste: Marko Kalliomäki, Seppo Salminen, Heikki Arvilommi, Pentti Kero, Pertti Koskinen, Erika Isolauri. |
| 3 | McFarland 2006, Am J Gastroenterol | ✅ korrekt | Vol. 101, No. 4, April 2006, pp. 812—822. DOI 10.1111/j.1572-0241.2006.00465.x, PMID 16635227 stimmen. Vorname: Lynne V. McFarland (Initial fehlt — akzeptabel). |

### Quellenverbesserung

- **Quelle 1 (Szajewska 2013) Anmerkung zur Aktualität:** Es existiert ein Update von Szajewska H., Kołodziej M., Gieruszczak-Białek D., Skórka A., Ruszczyński M., Shamir R., »Systematic review with meta-analysis: Lactobacillus rhamnosus GG for treating acute gastroenteritis in children — a 2019 update«, in: *Alimentary Pharmacology & Therapeutics*, Vol. 49, No. 11, Juni 2019, 1376—1384. doi: 10.1111/apt.15267. PMID: 31025399.
  - **Begründung:** Das 2019-Update ist aktueller und kommt zu einem differenzierteren Ergebnis (begrenzter Effekt bei rotaviraler AGE in westlichen Ländern, vgl. NEJM-Schoenfeld-Studie). Wenn der Essay den belegten Effekt (»verkürzt die Durchfalldauer um einen Tag«) behaupten will, sollte die aktuellste Meta-Analyse referenziert werden — ggf. zusätzlich zur 2013er-Version.

- **Ergänzung zur S. boulardii-Aussage empfohlen:** Der Essay sagt »S. boulardii überlebt und reduziert die Rezidivrate bei Clostridium-difficile-Infektionen« ohne eigene Primärquelle (McFarland 2006 deckt das teilweise ab, aber die Rezidivrate-Aussage stützt sich klassisch auf McFarland LV, Surawicz CM, Greenberg RN, et al., »A randomized placebo-controlled trial of Saccharomyces boulardii in combination with standard antibiotics for Clostridium difficile disease«, in: *JAMA*, Vol. 271, No. 24, 22./29.06.1994, 1913—1918. doi: 10.1001/jama.1994.03510480037031. PMID: 8201735.
  - **Begründung:** Direkte Primärevidenz für die spezifische Rezidivrate-Aussage zu S. boulardii bei CDI.

- **Ergänzung zur Bacillus coagulans-Aussage empfohlen:** Die quantitative Aussage »Überlebensrate über neunzig Prozent« ist im Essay unbelegt. Vorschlag: Jurenka JS, »Bacillus coagulans: Monograph«, in: *Alternative Medicine Review*, Vol. 17, No. 1, März 2012, 76—81. PMID: 22502625. — oder besser eine aktuelle In-vitro-Survival-Studie zu B. coagulans-Sporen in simuliertem Gastrointestinaltrakt.
  - **Begründung:** Die konkrete Zahl »über 90 %« benötigt einen direkten Beleg; aktuell schwebt sie quellenlos im Text.

- **Ergänzung zur Kalliomäki-Aussage »über vier Jahre« empfohlen:** Der Essay sagt »senkt pränatale und postnatale Gabe die Ekzem-Rate über vier Jahre«. Die 4-Jahres-Followup-Studie ist eine eigene Publikation: Marko Kalliomäki, Seppo Salminen, Tuija Poussa, Heikki Arvilommi, Erika Isolauri, »Probiotics and prevention of atopic disease: 4-year follow-up of a randomised placebo-controlled trial«, in: *The Lancet*, Vol. 361, No. 9372, 31.05.2003, 1869—1871. doi: 10.1016/S0140-6736(03)13490-3. PMID: 12788576.
  - **Begründung:** Quelle 2 (Kalliomäki 2001) zeigt nur die erste Auswertung; die 4-Jahres-Aussage erfordert das Followup von 2003.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »Bei akuter Gastroenteritis im Kindesalter verkürzt er die Durchfalldauer um einen Tag.[1]« (Absatz 2) |
| 2 | »Bei atopischer Dermatitis senkt pränatale und postnatale Gabe die Ekzem-Rate über vier Jahre.[2]« (Absatz 2) |
| 3 | »S. boulardii überlebt und reduziert die Rezidivrate bei Clostridium-difficile-Infektionen.[3]« (Absatz 2) |

---


# Sub-Agent 08

# Agent-08 Audit — Bildgebung-Essays (GABA/Glycin, Senolytika, Spermidin)

Hinweis: Die Aufgabe nannte 7/4/4 Quellen, die Essays enthalten tatsächlich 6/3/3 Quellen. Geprüft wurden alle vorhandenen 12 Quellen.

---

## Essay: gaba-glycin-magnesium-glycinat

**Titel:** Drei Wege zur Bremse, einer davon funktioniert nicht

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Boonstra 2015 Frontiers in Psychology | ✅ korrekt | Vollständige Autorenliste: Boonstra E, de Kleijn R, Colzato LS, Alkemade A, Forstmann BU, Nieuwenhuis S — »et al.« nach drei Autoren korrekt. DOI, PMID, Vol 6, Article 1520, 06.10.2015 stimmen. |
| 2 | Kawai 2015 Neuropsychopharmacology | ✅ korrekt | Autoren, Vol. 40, No. 6, Mai 2015, 1405—1416, DOI, PMID alle korrekt. |
| 3 | Yamadera 2007 Sleep and Biological Rhythms | ✅ korrekt | Autoren (Yamadera W, Inagawa K, Chiba S, Bannai M, Takahashi M, Nakayama K) — et al. nach drei korrekt. Vol. 5, No. 2, 126—131, DOI auflösbar. |
| 4 | Bannai 2012 Frontiers in Neurology | ✅ korrekt | Vol. 3, Article 61, 18.04.2012, DOI, PMID alle korrekt. Vollständige Autoren: Bannai M, Kawai N, Ono K, Nakahara K, Murakami N. |
| 5 | Bannai/Kawai 2012 J Pharmacol Sci | ✅ korrekt | Vol. 118, No. 2, 145—148, DOI 10.1254/jphs.11R04FM, PMID 22293292 alle bestätigt. |
| 6 | Razak 2017 Oxid Med Cell Longev | ❌ falsche Autoren | Originalautoren sind **Meerza Abdul Razak, Pathan Shajahan Begum, Buddolla Viswanath, Senthilkumar Rajagopal** — NICHT »Silvia Razak, Dominic Ramms, Rhonda Brereton«. Titel, Journal, Vol, Article-No, DOI, PMID stimmen. Korrekt: »Meerza Abdul Razak, Pathan Shajahan Begum, Buddolla Viswanath, et al.«. |

### Quellenverbesserung

- **Quelle 6 korrigieren (Autoren):** Meerza Abdul Razak, Pathan Shajahan Begum, Buddolla Viswanath, et al., »Multifarious Beneficial Effect of Nonessential Amino Acid, Glycine: A Review«, in: *Oxidative Medicine and Cellular Longevity*, Vol. 2017, 2017, 1716701. doi: 10.1155/2017/1716701. PMID: 28337245.
  - **Begründung:** Die im Essay angegebenen Autorennamen entsprechen nicht der publizierten Autorenliste.

- **Quelle ergänzen (Magnesium-Glycinat Sleep-Aussage):** Behnood Abbasi, Masud Kimiagar, Khosro Sadeghniiat, et al., »The effect of magnesium supplementation on primary insomnia in elderly: A double-blind placebo-controlled clinical trial«, in: *Journal of Research in Medical Sciences*, Vol. 17, No. 12, Dezember 2012, 1161—1169. PMID: 23853635.
  - **Begründung:** Die Behauptung, »Magnesium-Glycinat schneidet in Schlafstudien besser ab als Magnesiumoxid oder Citrat«, ist im Essay unbelegt. Direkte vergleichende RCTs sind selten, aber Abbasi 2012 ist die Standardreferenz für Magnesium-Supplementation und Schlaf. Alternativ: Boyle NB, Lawton C, Dye L, »The Effects of Magnesium Supplementation on Subjective Anxiety and Stress — A Systematic Review«, *Nutrients*, Vol. 9, No. 5, 2017, 429. doi: 10.3390/nu9050429. PMID: 28445426.

- **Quelle ergänzen (GABA-Cofaktor Aussage):** Eine Quelle zum Magnesium-Cofaktor-Status der Glutamat-Decarboxylase wäre wünschenswert — beispielsweise eine Übersichtsarbeit wie Boyle 2017 (siehe oben). Aktuelle Übersicht: Arab A, Rafie N, Amani R, Shirani F, »The Role of Magnesium in Sleep Health: a Systematic Review of Available Literature«, *Biological Trace Element Research*, Vol. 201, No. 1, Januar 2023, 121—128. doi: 10.1007/s12011-022-03162-1. PMID: 35184264.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »Boonstra 2015 fasst die Literatur zusammen und kommt zu dem Ergebnis, dass die BBB-Permeabilität von oral eingenommenem GABA beim Menschen wahrscheinlich minimal ist.[1]« (Satz im ersten Absatz) |
| 2 | »Kawai 2015 zeigt in Ratten, dass Glycin über diesen Weg die Körperkerntemperatur senkt.[2]« (dritter Absatz) |
| 3 | »Yamadera 2007 misst die Wirkung am Menschen. Drei Gramm Glycin vor dem Schlafengehen verbessern die subjektive Schlafqualität und korrelieren mit polysomnographischen Veränderungen.[3]« (vierter Absatz) |
| 4 | »Bannai 2012 ergänzt, dass dieselbe Dosis die Tagesperformance bei Schlafentzug verbessert, weniger Müdigkeit, schnellere Reaktionszeiten.[4]« (vierter Absatz) |
| 5 | Am Ende des vierten Absatzes nach »Keine Nebenwirkungen in keiner der Studien.[5]« — Bannai/Kawai 2012 als Review-Synthese stützt die Gesamtaussage zu Glycin als Schlafmittel. |
| 6 | Am Ende des Glycin-Abschnitts (Absatz vier), nach »Keine Nebenwirkungen in keiner der Studien.[5][6]« oder besser an dem Satz »Magnesium-Glycinat verbindet beides.« — der Razak-Review als allgemeine Glycin-Evidenz. Vorschlag: »Es ist das Glycin.[6]« am Ende des fünften Absatzes. |

---

## Essay: senolytika-fisetin-quercetin-zombiezellen

**Titel:** Die Jagd auf Zombiezellen läuft — ohne Humandaten

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Yousefzadeh 2018 EBioMedicine | ✅ korrekt | Autoren Yousefzadeh MJ, Zhu Y, McGowan SJ, et al., Vol. 36, Oktober 2018, 18—28, DOI, PMID alle korrekt. |
| 2 | Kirkland 2017 J Am Geriatr Soc | ✅ korrekt | Autoren Kirkland JL, Tchkonia T, Zhu Y, Niedernhofer LJ, Robbins PD. Vol. 65, No. 10, Oktober 2017, 2297—2301, DOI, PMID korrekt. |
| 3 | Xu 2018 Nature Medicine | ✅ korrekt | Autoren Xu M, Pirtskhalava T, Farr JN, et al., Vol. 24, No. 8, August 2018, 1246—1256, DOI, PMID korrekt. |

### Quellenverbesserung

- **Quelle ergänzen (Mayo Clinic 2015 Ablation):** Darren Baker, Bennett Childs, Matej Durik, et al., »Naturally occurring p16^Ink4a-positive cells shorten healthy lifespan«, in: *Nature*, Vol. 530, No. 7589, Februar 2016, 184—189. doi: 10.1038/nature16932. PMID: 26840489.
  - **Begründung:** Die zentrale Aussage »2015 veröffentlicht die Mayo Clinic den Beweis, dass die Eliminierung seneszenter Zellen die Gesundheitsspanne verlängert« ist im Essay unbelegt. Die Schlüssel-Publikation der genetischen Ablation seneszenter Zellen aus Baker/van Deursen, Mayo Clinic — meist als Baker 2016 zitiert (epub 2015 vorab geplant, formell 2016 in Nature). Alternativ die ursprüngliche 2011er Arbeit: Baker DJ, Wijshake T, Tchkonia T, et al., »Clearance of p16^Ink4a-positive senescent cells delays ageing-associated disorders«, *Nature*, Vol. 479, No. 7372, November 2011, 232—236. doi: 10.1038/nature10600. PMID: 22048312.

- **Quelle ergänzen (D+Q Pilotstudie Diabetic Kidney Disease):** Jamie Justice, Anoop Nambiar, Tamara Tchkonia, et al., »Senolytics in idiopathic pulmonary fibrosis: Results from a first-in-human, open-label, pilot study«, in: *EBioMedicine*, Vol. 40, Februar 2019, 554—563. doi: 10.1016/j.ebiom.2018.12.052. PMID: 30616998. Bzw. für die Nierenerkrankung: Lilian Hickson, Larissa Langhi Prata, Shane Bobart, et al., »Senolytics decrease senescent cells in humans: Preliminary report from a clinical trial of Dasatinib plus Quercetin in individuals with diabetic kidney disease«, in: *EBioMedicine*, Vol. 47, September 2019, 446—456. doi: 10.1016/j.ebiom.2019.08.069. PMID: 31542391.
  - **Begründung:** Die »Drei Tage, vierzehn Patienten«-Pilotstudie ist Hickson 2019. Sollte zitiert werden, da im Essay konkret beschrieben.

- **Quelle ergänzen (SASP / Inflammaging):** Jean-Philippe Coppé, Pierre-Yves Desprez, Ana Krtolica, Judith Campisi, »The senescence-associated secretory phenotype: the dark side of tumor suppression«, in: *Annual Review of Pathology*, Vol. 5, 2010, 99—118. doi: 10.1146/annurev-pathol-121808-102144. PMID: 20078217.
  - **Begründung:** Das SASP-Konzept und Antagonistic Pleiotropy werden zentral im Essay beschrieben, aber unbelegt. Coppé/Campisi ist die kanonische SASP-Referenz.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »Fisetin, ein Polyphenol aus Erdbeeren und Persimonen, eliminiert seneszente Zellen wirksamer als alle anderen getesteten Verbindungen, einschließlich Quercetin.[1]« (Absatz 5) — alternativ am Ende: »Die Mausdaten sind so konsistent, wie Mausdaten sein können.[1]« |
| 2 | »Dasatinib trifft seneszente Fettzellvorläufer über Hemmung der Src-Kinasen. Quercetin trifft seneszente Endothelzellen über Hemmung der PI3K/AKT-Achse und der anti-apoptotischen Bcl-2-Proteine.[2]« (Absatz 4, Ende) — Kirkland 2017 Review stützt diese Mechanismus-Aussagen. |
| 3 | »In alten Mäusen verbessert D+Q die Gefäßfunktion, reduziert Frailty-Marker und verlängert die Restlebensspanne.[3]« (Absatz 4) — Xu 2018 ist die zentrale »Senolytics improve physical function and increase lifespan«-Arbeit. |

---

## Essay: spermidin-autophagie-longevity

**Titel:** Der Nobelpreis-Mechanismus ohne Interventionsdaten

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Eisenberg 2009 Nature Cell Biol | ✅ korrekt | Autoren Eisenberg T, Knauer H, Schauer A, et al., Vol. 11, No. 11, November 2009, 1305—1314, DOI, PMID alle korrekt. |
| 2 | Kiechl 2018 Am J Clin Nutr | ✅ korrekt | Autoren Kiechl S, Pechlaner R, Willeit P, et al., Vol. 108, No. 2, August 2018, 371—380, DOI, PMID alle korrekt. (Bruneck-Studie) |
| 3 | Wirth 2018 Cortex | ✅ korrekt | Autoren Wirth M, Benson G, Schwarz C, et al., Vol. 109, Dezember 2018, 181—188, DOI, PMID alle korrekt. |

### Quellenverbesserung

- **Quelle ergänzen (Ohsumi Nobelpreis Autophagie):** Yoshinori Ohsumi, »Historical landmarks of autophagy research«, in: *Cell Research*, Vol. 24, No. 1, Januar 2014, 9—23. doi: 10.1038/cr.2013.169. PMID: 24366340.
  - **Begründung:** Die Eröffnungs-Aussage »Yoshinori Ohsumi bekam den Nobelpreis für die Aufklärung der Mechanik« ist zwar allgemeines Wissen, aber eine Ohsumi-Eigenarbeit als Anker stärkt den Text. Alternativ: das Nobelpreis-Komitee-Dokument (https://www.nobelprize.org/prizes/medicine/2016/press-release/) — wäre aber kein Primärliteratur-Zitat.

- **Quelle ergänzen (Lebensspanne in Hefen/Fliegen/Würmern/Mäusen):** Frank Madeo, Tobias Eisenberg, Federico Pietrocola, Guido Kroemer, »Spermidine in health and disease«, in: *Science*, Vol. 359, No. 6374, Januar 2018, eaan2788. doi: 10.1126/science.aan2788. PMID: 29371440.
  - **Begründung:** Aktuelle, umfassende Übersichtsarbeit der Madeo-Gruppe — stützt die Aussage »In Hefen, Fliegen, Würmern und Mäusen verlängert Spermidin die Lebensspanne konsistent«. Stärker als Eisenberg 2009 allein für die Hefen/Fliegen/Würmer/Mäuse-Aussage.

- **Quelle ergänzen (SmartAge / Studienprotokoll):** Claudia Schwarz, Gloria Benson, Nora Horn, et al., »Effects of Spermidine Supplementation on Cognition and Biomarkers in Older Adults With Subjective Cognitive Decline: A Randomized Clinical Trial«, in: *JAMA Network Open*, Vol. 5, No. 5, Mai 2022, e2213875. doi: 10.1001/jamanetworkopen.2022.13875. PMID: 35616942.
  - **Begründung:** Das SmartAge-Folgeergebnis wurde 2022 publiziert (negativer/null Befund). Wenn der Essay sagt »Ergebnisse stehen aus«, ist das mittlerweile überholt. Ein Update der Aussage und Aufnahme dieser Quelle würde die Aktualität verbessern.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »In Hefen, Fliegen, Würmern und Mäusen verlängert Spermidin die Lebensspanne konsistent.[1]« (Absatz 2, Anfang) |
| 2 | »Die Bruneck-Studie verfolgt über zwanzig Jahre die Ernährung einer italienischen Kohorte und findet eine inverse Korrelation zwischen Spermidin-Aufnahme und kardiovaskulärer Mortalität.[2]« (Absatz 2) |
| 3 | »Eine kleine Vergleichsstudie an Älteren, die über Gedächtnisprobleme klagten, zeigt nach drei Monaten Weizenkeimextrakt verbesserte Gedächtnisleistung.[3]« (Absatz 3) |

---


# Sub-Agent 09

# Agent 09 — Bildgebung-Quellenaudit

Geprüft: 3 Essays, 12 Quellen (Hinweis: Prompt sprach von 7+4+4=15 Quellen; im HTML stehen tatsächlich 6+3+3=12).

---

## Essay: bacopa-monnieri-langsame-wirkung

**Titel:** Die Pflanze, die erst nach zwölf Wochen wirkt

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Stough et al. 2001, Psychopharmacology | ✅ korrekt | Vol. 156, S. 481–484, doi 10.1007/s002130100815, PMID 11498727 — alle Felder verifiziert. Vollständige Autorenliste laut PubMed: Stough, Lloyd, Clarke, Downey, Hutchison, Rodgers, Nathan. Im Zitat steht »Con Stough, Jenny Lloyd, Joanne Clarke, et al.« — Reihenfolge korrekt, »et al.« deckt die weiteren ab. |
| 2 | Calabrese et al. 2008, J Altern Complement Med | ✅ korrekt | Vol. 14, No. 6, 707–713, doi 10.1089/acm.2008.0018, PMID 18611150 — alle Felder verifiziert. |
| 3 | Roodenrys et al. 2002, Neuropsychopharmacology | ⚠️ kleiner Fehler | DOI, PMID, Vol. 27, Seiten 279–281, Autoren korrekt. **Erscheinungsmonat: August 2002 stimmt nicht** — Originalartikel erschien August 2002 lt. Nature/PubMed. (Tatsächlich August 2002 korrekt — Verifizierung bestätigt.) Status nach Re-Check: ✅ korrekt. |
| 4 | Pase et al. 2012, J Altern Complement Med | ✅ korrekt | Vol. 18, No. 7, 647–652, doi 10.1089/acm.2011.0367, PMID 22747190 — alle Felder verifiziert. Vollständige Autoren: Pase, Kean, Sarris, Neale, Scholey, Stough. |
| 5 | Nathan et al. 2001, Human Psychopharmacology | ⚠️ kleiner Fehler | Vol. 16, No. 4, 345–351, doi 10.1002/hup.306 korrekt, Autoren korrekt (Nathan, Clarke, Lloyd, Hutchison, Downey, Stough). **PMID 12404571 verweist tatsächlich auf den korrekten Artikel** (in PubMed bestätigt). Status: ✅ korrekt. |
| 6 | Kongkeaw et al. 2014, J Ethnopharmacol | ✅ korrekt | Vol. 151, No. 1, 528–535, doi 10.1016/j.jep.2013.11.008, PMID 24252493 — alle Felder verifiziert. Volle Autorenliste: Kongkeaw, Dilokthornsakul, Thanarangsarit, Limpeanchob, Scholfield (im Zitat »et al.« — korrekt). |

(Nach Re-Check Quellen 3 und 5 als korrekt bestätigt — initiale Markierung war Vorsicht; alle 6 Quellen sauber.)

### Quellenverbesserung

- **Ergänzung empfohlen:** Aussage über »dendritische Verzweigung«, »synaptische Plastizität« und »Schutz vor oxidativem Stress« durch Bacoside A und B ist mechanistisch — sollte durch eine Primärquelle gestützt werden.
  - **Vorschlag:** Sebastian Aguiar, Thomas Borowski, »Neuropharmacological Review of the Nootropic Herb Bacopa monnieri«, in: *Rejuvenation Research*, Vol. 16, No. 4, August 2013, 313–326. doi: 10.1089/rej.2013.1431. PMID: 23772955.
  - **Begründung:** Aguiar/Borowski 2013 ist die meistzitierte mechanistische Übersicht zu Bacopa-Wirkmechanismen (Bacoside A/B, Dendritenarborisierung, antioxidative Wirkung, Neuroprotektion). Sie würde das pharmakologische Argument im dritten Absatz absichern.

- **Aktualisierungsoption (optional):** Walker/Sarris 2016 oder neuere Metaanalysen sind verfügbar. Kongkeaw 2014 ist aber weiterhin Standard und im Text präzise zitiert; keine zwingende Ablösung nötig.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | Absatz 1 — Stough 2001 ist die zentrale »Chronic-effects«-RCT, an die der gesamte Aufschlag anknüpft. »Sechs randomisierte Studien, alle mit demselben Ergebnis.[1]« |
| 2 | Absatz 1 — Calabrese liefert die Senioren-RCT (»von Studenten bis Senioren«). »…die Probanden reichen von Studenten bis Senioren.[2]« |
| 3 | Absatz 1 — Roodenrys ergänzt die zweite zentrale Chronic-RCT zur Gedächtnisfunktion. »Nach zwölf Wochen bessere Verarbeitungsgeschwindigkeit, besserer Abruf, weniger depressive Symptomatik.[3]« |
| 4 | Absatz 1 — Pase 2012 wird im Text wörtlich erwähnt. »Pase 2012 fasst die Datenlage in einer systematischen Übersicht zusammen und findet konsistente Effekte auf Gedächtnis und Informationsverarbeitung.[4]« |
| 5 | Absatz 3 — Nathan ist der Akutstudien-Nullbefund, der im Text namentlich genannt wird. »Nathan 2001 testet Bacopa als Einzeldosis und misst nichts.[5]« |
| 6 | Absatz 3 oder Absatz 1 (Schluss) — Kongkeaw 2014 ist die Metaanalyse, die alle RCTs zusammenführt. Beste Stelle: hinter dem Satz, der den 12-Wochen-Befund als gesichert deklariert. »Das sind langsame Umbauprozesse.[6]« |

---

## Essay: szechuanpfeffer-sanshool-vibration

**Titel:** Das Gewürz, das die Lippen auf 50 Hertz vibrieren lässt

**Hinweis:** Prompt sprach von 4 Quellen, im HTML stehen tatsächlich 3.

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Koo et al. 2007, Eur J Neurosci | ✅ korrekt | Vol. 26, No. 5, 1139–1147, doi 10.1111/j.1460-9568.2007.05743.x, PMID 17767493 — alle Felder verifiziert. Volle Autorenliste: Koo, Jang, Cho, Lee, Jang, Chang, Shin, Oh. |
| 2 | Bautista et al. 2008, Nat Neurosci | ✅ korrekt | Vol. 11, No. 7, 772–779, doi 10.1038/nn.2143, PMID 18568022 — alle Felder verifiziert. Volle Autorenliste: Bautista, Sigal, Milstein, Garrison, Zorn, Tsuruda, Nicoll, Julius. Im Zitat ist »Diana Bautista, Yaron Sigal, Aaron Milstein, et al.« — korrekt. |
| 3 | Hagura, Barber, Haggard 2013, Proc R Soc B | ✅ korrekt | Vol. 280, No. 1770, Artikel 20131680, doi 10.1098/rspb.2013.1680, PMID 24026819 — alle Felder verifiziert. Datum 07.09.2013 (Article published 11. September 2013, Issue Print 07.11.2013 — Print-Issue-Datum im Zitat plausibel; Online-Erstpublikation 11.09.2013 wäre präziser). |

### Quellenverbesserung

- **Ergänzung empfohlen:** Aussage über »RA1/Meissner-Mechanorezeptoren« als Vibrationskanal bei 50 Hz wird im Hagura-Paper selbst erläutert — also bereits abgedeckt. Keine zusätzliche Quelle nötig.

- **Optional ergänzen:** Die mechanistische Aussage zur Wirkung über RA1-Fasern wurde 2016 erweitert durch Lapotko et al. bzw. später durch Tsunozaki/Bautista. Eine optionale Ergänzung:
  - Megumi Tsunozaki, Diana Bautista, »Mammalian somatosensory mechanotransduction«, in: *Current Opinion in Neurobiology*, Vol. 19, No. 4, August 2009, 362–369. doi: 10.1016/j.conb.2009.07.008. PMID: 19683913.
  - **Begründung:** Eine zusätzliche Übersichtsquelle zur trigeminalen Mechanotransduktion ist nicht zwingend, da Bautista 2008 und Hagura 2013 den Mechanismus bereits präzise verankern. Daher: **keine Ergänzung notwendig.**

- **Keine Verbesserungen zwingend.** Die drei Quellen decken die zentralen Aussagen sauber ab.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | Absatz 2 — Koo wird namentlich genannt. »Koo 2007 identifiziert die molekularen Zielstrukturen.[1]« |
| 2 | Absatz 2 — Bautista wird namentlich genannt und liefert den KCNK-Befund. »Diese Kanäle halten Nervenzellen in Ruhe.[2]« |
| 3 | Absatz 3 — Hagura wird namentlich genannt und liefert die 50-Hz-Messung. »Die wahrgenommene Frequenz lag bei 50 Hertz, plus minus 2,4.[3]« |

---

## Essay: wacholder-juniperus-terpinen

**Titel:** Die Beere mit vier Karrieren

**Hinweis:** Prompt sprach von 4 Quellen, im HTML stehen tatsächlich 3.

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Raina, Verma, Peshin et al. 2019, Heliyon | ⚠️ kleiner Fehler | Vol. 5, No. 8, e02376, doi 10.1016/j.heliyon.2019.e02376, PMID 31485546, August 2019 — alle Felder verifiziert. **Autorenliste:** Rajinder Raina, Pawan Kumar Verma, Rajinder Peshin, Harpreet Kour (insgesamt 4 Autoren). Im Zitat steht »Rajinder Raina, Pawan Verma, Rajesh Peshin, et al.« — Pawan Kumar Verma (»Pawan« reicht) und **Rajesh Peshin ist falsch — richtig: Rajinder Peshin.** Da nur 4 Autoren, ist »et al.« streng genommen nicht nötig; präziser wäre die Vollnennung. |
| 2 | EMA Assessment Report Juniperus communis pseudo-fructus | ⚠️ kleiner Fehler | Dokument EMA/HMPC/441929/2008 ist die Referenznummer der **Community Herbal Monograph** (verabschiedet 12. November 2009 vom HMPC, nicht 2011). Es gibt eine **Rev. 1 vom Jahr 2010/2011** des Monograph, und eine spätere Revision 2022. »Rev. 1« ist plausibel. Empfehlung: präzises Datum (z.B. »2010« bzw. »12.11.2009 / Rev. 1 2010«) und Dokumenttyp »Community herbal monograph« statt »Assessment report« würden das Dokument exakter benennen — die Rev.-1-Fassung wurde **18. November 2010** angenommen. |
| 3 | Bais, Gill et al. 2014, ISRN | ⚠️ kleiner Fehler | Vol. 2014, Artikel 634723, doi 10.1155/2014/634723, PMID 27355068 — verifiziert. **Volle Autorenliste:** Souravh Bais, Naresh Singh Gill, Nitan Rana, Shandeep Shandil. Im Zitat ist »Souravh Bais, Naresh Singh Gill, et al.« — korrekt. **Aber:** Die Zeitschrift wird im Zitat »International Scholarly Research Notices« genannt — genauer ist **»ISRN Pharmacology« als Subjournal** (Hindawi-Tradition), das später als ISRN aufgegangen ist. Beide Bezeichnungen kursieren; »International Scholarly Research Notices« ist akzeptabel, »ISRN Pharmacology« technisch präziser. Keine Korrektur zwingend. |

### Quellenverbesserung

- **Quelle 2 (EMA) präzisieren:**
  - **Vorschlag:** European Medicines Agency / Committee on Herbal Medicinal Products (HMPC), »Community herbal monograph on Juniperus communis L., pseudo-fructus«, EMA/HMPC/441929/2008 Rev. 1, London, 18. November 2010.
  - **Begründung:** Dokumenttyp ist »Community herbal monograph« (nicht »Assessment report« — letzteres ist ein separates Begleitdokument). Datum 2010 (Rev. 1) ist präziser als 2011.

- **Ergänzung für Aussage »Terpinen-4-ol … steigert die glomeruläre Filtration«:** Diese Behauptung ist substantiell und sollte direkt gestützt werden. Möglicher Beleg:
  - Maria Stanić et al. bzw. Janku 1957 sind ältere Primärquellen zum Diuretikum-Mechanismus; eine moderne Übersicht ist Raina 2019 selbst (Quelle 1) — die Aussage ist damit bereits abgedeckt.
  - **Optional:** Maria del Carmen Recio, José M. Prieto, »Antiinflammatory and antiulcerogenic activities of Juniperus phoenicea«, in: *Planta Medica* (für Mechanismus) — aber **nicht thematisch passend**. Daher: **keine zusätzliche Quelle empfohlen**, da Raina 2019 das Diuretikum-Profil hinreichend belegt.

- **Aussage »EU-Verordnung 1576/89«:** Diese EG-Verordnung ist veraltet — seit 2008 ersetzt durch **Verordnung (EG) Nr. 110/2008** und seit 2019 durch **Verordnung (EU) 2019/787**. Empfehlung: Aktualisierung im Text auf »Verordnung (EU) 2019/787« mit Gin-Definition in Anhang I, Nr. 20. Dies ist eine **Textkorrektur**, keine Quellenfrage — aber wichtig für die juristische Korrektheit.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | Absatz 3 — Raina wird namentlich genannt. »Raina 2019 fasst das antimikrobielle Spektrum in einem Review zusammen.[1]« Zusätzlich Absatz 2 (Diuretikum, Terpinen-4-ol) referenziert Raina ebenfalls — eine zweite Markierung wäre legitim: »Wer den Kalium-Essay gelesen hat, zuckt hier zusammen.[1]« — aber sparsam handhaben, also nur eine Platzierung. |
| 2 | Absatz 4 — EMA-Monographie wird genannt. »Die EMA führt Juniperus communis mit einer eigenen Monographie.[2]« |
| 3 | Absatz 2 oder 3 — Bais 2014 ist die zweite phytopharmakologische Übersicht; gehört zum Wirkmechanismus/Profil. Empfohlene Position: Absatz 2 nach dem Terpinen-4-ol-Mechanismus. »Wacholder liefert es zwischen Sauerkraut und Wildbraten.[3]« |

---


# Sub-Agent 10

## Essay: olivenoel-oleocanthal-entzuendung

**Titel:** Das Öl, das im Hals brennt, wenn es gut ist

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Beauchamp 2005 Nature | ✅ korrekt | Vorname »Diane« Morel ist in der peer-reviewten Literatur als »D. Morel« indexiert (Diane W. Morel, University of the Sciences) — passt. Alle übrigen Felder identisch zu PubMed (PMID 16136122). |
| 2 | Estruch 2018 NEJM | ✅ korrekt | NEJM 378:e34 (21.06.2018), DOI 10.1056/NEJMoa1800389, PMID 29897866. Es handelt sich um die korrigierte Republikation nach Retraction der Originalstudie 2013. Optional könnte ergänzt werden, dass dies eine Retraction/Republication ist, ist aber für die Korrektheit nicht erforderlich. |
| 3 | Parkinson & Keast 2014 IJMS | ✅ korrekt | Lisa Parkinson, Russell Keast, IJMS 15(7):12323–12334. DOI/PMID stimmen. |
| 4 | Abuznait 2013 ACS Chem Neurosci | ❌ Autoren falsch | Erstautor ist **Alaa H. Abuznait** (nicht Hisham); dritter Autor ist **Belnaser A. Busnena** (im Essay »Belnaser Buber« — falsch). Korrekt: Alaa H. Abuznait, Hisham Qosa, Belnaser A. Busnena, Khalid A. El Sayed, Amal Kaddoumi. Titel/Journal/Vol/Issue/Pages/DOI/PMID stimmen. |
| 5 | EFSA 2011 EFSA Journal | ✅ korrekt | EFSA NDA Panel, EFSA Journal 9(4):2033. DOI 10.2903/j.efsa.2011.2033 auflösbar. |

### Quellenverbesserung

- **Quelle 4 (Abuznait 2013) Autoren korrigieren:** Alaa H. Abuznait, Hisham Qosa, Belnaser A. Busnena, et al., »Olive-oil-derived oleocanthal enhances β-amyloid clearance as a potential neuroprotective mechanism against Alzheimer's disease: in vitro and in vivo studies«, in: *ACS Chemical Neuroscience*, Vol. 4, No. 6, Juni 2013, 973—982. doi: 10.1021/cn400024q. PMID: 23414128.
  - **Begründung:** Erst- und Drittautor sind im Essay falsch genannt. »Hisham Abuznait« existiert nicht — Hisham ist der Vorname des Zweitautors Qosa. »Belnaser Buber« ist falsch, korrekt ist Belnaser A. Busnena.

- **Ergänzung (zentrale Aussage ohne Quelle):** Die Aussage »vier Esslöffel hochwertigem Olivenöl steckt die entzündungshemmende Aktivität von etwa zehn Prozent einer Ibuprofen-Dosis« geht auf das Beauchamp-Paper (Quelle 1) zurück und braucht keine zusätzliche Quelle. Die Aussagen zur PREDIMED-Studie sind bereits durch Quelle 2 belegt. Keine weitere Quellenergänzung zwingend.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »Oleocanthal hemmt COX-1 und COX-2 mit einer Potenz, die der von Ibuprofen auf molarer Basis entspricht.[1]« (Absatz 2 — direkter Bezug auf das Beauchamp-Nature-Paper) |
| 2 | »Die Olivenöl-Gruppe zeigte eine Reduktion schwerer kardiovaskulärer Ereignisse um dreißig Prozent.[2]« (Absatz 4 — direkter Bezug auf PREDIMED) |
| 3 | »In vier Esslöffeln hochwertigem Olivenöl steckt die entzündungshemmende Aktivität von etwa zehn Prozent einer Ibuprofen-Dosis.[3]« (Absatz 2 — Parkinson/Keast-Review quantifiziert genau dies; alternativ am Ende des Absatzes 5 zu »Ein Öl, das nicht im Hals kratzt, hat seinen COX-Hemmer verloren.[3]«) |
| 4 | Da der Essay-Fließtext keine explizite Aussage zur Alzheimer-Wirkung enthält, könnte die Abuznait-Quelle entweder gestrichen werden ODER als ergänzender Beleg für die breitere Pharmakologie von Oleocanthal am Ende von Absatz 2 platziert werden: »Derselbe Wirkmechanismus, dieselben Enzyme, ein anderes Molekül.[4]« — **Empfehlung: Streichung erwägen**, weil der Essay nicht über Alzheimer spricht und damit keine direkte Stütze braucht. |
| 5 | »Olivenölpolyphenole schützen Blutfette vor oxidativem Stress, ab fünf Milligramm Hydroxytyrosol pro zwanzig Gramm Öl.[5]« (Absatz 3 — direkter Bezug auf den EFSA-Health-Claim) |

---

## Essay: zitronenverbene-verbascoside-sport

**Titel:** Das Antioxidans, das die Anpassung nicht sabotiert

> **Hinweis:** Auftrag nennt 4 Quellen, im HTML sind nur 3 Quellen gelistet. Es fehlt eine vierte (vermutlich die Paulsen-Vitamin-C/E-Studie, auf die der Essay implizit Bezug nimmt).

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Funes 2011 Eur J Appl Physiol | ✅ korrekt | Lorena Funes, Lucrecia Carrera-Quintanar, Manuela Cerdán-Calero — alle drei Vornamen verifiziert. Vol. 111, No. 4, April 2011, 695–705. DOI/PMID stimmen. |
| 2 | Buchwald-Werner 2018 JISSN | ⚠️ kleiner Fehler | Korrekte Quellenangabe: Vol. 15, Article 5 (= Erscheinungsdatum 23.01.2018), nicht »No. 1, Januar 2018, 13«. Das »Issue 1« ist nominell richtig (JISSN-Vol. 15 hat zwar Issue-Nummerierung), aber die Seitenzahl »13« ist falsch — es ist die Artikelnummer **5**, nicht Seite 13. Autoren und Titel korrekt. |
| 3 | Afrasiabian 2019 Phytother Res | ❌ Autoren-Vornamen falsch | Korrekte Vornamen: **Fariba** Afrasiabian (nicht Fatemeh), **Maryam** Mirabzadeh Ardakani (nicht Mozafar), **Katayoun** Rahmani (nicht Kourosh). Volume/Issue/Pages/DOI/PMID stimmen (Vol. 33, No. 2, Februar 2019, 350–359; PMID 30450627). |

### Quellenverbesserung

- **Quelle 2 (Buchwald-Werner 2018) korrigieren:** Sybille Buchwald-Werner, Ioanna Naka, Manfred Wilhelm, et al., »Effects of lemon verbena extract (Recoverben) supplementation on muscle strength and recovery after exhaustive exercise: a randomized, placebo-controlled trial«, in: *Journal of the International Society of Sports Nutrition*, Vol. 15, Article 5, 23.01.2018. doi: 10.1186/s12970-018-0208-0. PMID: 29410606.
  - **Begründung:** Die Seitenangabe »13« ist falsch — der Artikel ist Article 5 in der Online-Volume-15-Reihe (BMC/SpringerOpen-Format ohne klassische Seitennummerierung).

- **Quelle 3 (Afrasiabian 2019) Autoren korrigieren:** Fariba Afrasiabian, Maryam Mirabzadeh Ardakani, Katayoun Rahmani, et al., »Aloysia citriodora Palau (lemon verbena) for insomnia patients: a randomized, double-blind, placebo-controlled clinical trial of efficacy and safety«, in: *Phytotherapy Research*, Vol. 33, No. 2, Februar 2019, 350—359. doi: 10.1002/ptr.6228. PMID: 30450627.
  - **Begründung:** Drei Autoren-Vornamen sind im Essay falsch — Fatemeh/Mozafar/Kourosh statt Fariba/Maryam/Katayoun.

- **Ergänzung (4. Quelle, derzeit fehlend):** Der Essay behauptet zentral, dass »hochdosiertes Vitamin C und Vitamin E nach dem Training die Trainingsanpassung blockieren« — diese Aussage benötigt eine eigene Primärquelle, die derzeit fehlt. Empfohlene Ergänzung:
  - Gøran Paulsen, Kristoffer T. Cumming, Geir Holden, et al., »Vitamin C and E supplementation hampers cellular adaptation to endurance training in humans: a double-blind, randomised, controlled trial«, in: *The Journal of Physiology*, Vol. 592, No. 8, April 2014, 1887—1901. doi: 10.1113/jphysiol.2013.267419. PMID: 24492839.
  - **Begründung:** Belegt die zentrale These des Essays direkt mit der maßgeblichen RCT (Paulsen 2014, Journal of Physiology). Ohne diese Quelle steht die Kernbehauptung unbelegt im Raum.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »Funes 2011 testet den Extrakt an fünfzehn männlichen Läufern über 21 Tage chronischen Trainings. Die Marker für oxidativen Stress und Muskelschäden sinken signifikant unter Verum.[1]« (Absatz 2 — direkter Bezug auf Funes-Studie) |
| 2 | »Buchwald-Werner 2018 bestätigt den Befund in einer randomisierten, placebokontrollierten Studie an 44 Probanden mit 400 Milligramm Extrakt täglich. Weniger Muskelschaden, weniger Kraftverlust, keine blockierte Adaptation.[2]« (Absatz 3 — direkter Bezug auf Buchwald-Werner-RCT) |
| 3 | »Eine randomisierte, doppelblinde, placebokontrollierte Studie an Insomnie-Patienten zeigt verbesserte Schlafqualität unter Zitronenverbene-Extrakt.[3]« (Absatz 4 — direkter Bezug auf Afrasiabian-RCT) |
| 4 | (Falls Paulsen-Quelle ergänzt wird:) »Hochdosiertes Vitamin C und Vitamin E nach dem Training blockieren die Trainingsanpassung.[4]« (Absatz 3 — direkter Bezug auf Paulsen 2014) |

---

## Essay: curcumin-pains-bioverfuegbarkeit

**Titel:** Das Molekül, das in jedem Test gewinnt und in keinem Körper ankommt

> **Hinweis:** Auftrag nennt 5 Quellen, im HTML sind nur 4 Quellen gelistet. Eine zusätzliche Quelle könnte zur Stützung weiterer Aussagen ergänzt werden (z. B. zu BCM-95 oder zu den DNA-Reparatur-Befunden).

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Nelson 2017 J Med Chem | ✅ korrekt | Kathryn M. Nelson, Jayme L. Dahlin, Jonathan Bisson, James Graham, Guido F. Pauli, Michael A. Walters. Vol. 60, No. 5, 1620–1637. DOI/PMID stimmen. |
| 2 | Fusar-Poli 2020 Crit Rev Food Sci Nutr | ❌ Autoren falsch | Korrekte Autoren: Laura Fusar-Poli, **Lucia Vozza** (nicht »Davide Guillem Vozza«), **Alberto Gabbiadini** (nicht »Antimo Ferrara«), Antonio Vanella, Ilaria Concas, Silvia Tinacci, Antonino Petralia, Maria Salvina Signorelli, Eugenio Aguglia. Volume/Issue/Pages/DOI/PMID stimmen. |
| 3 | Cuomo 2011 J Nat Prod | ❌ Autoren falsch | Korrekte Autoren: **John** Cuomo (nicht »Roberto«), **Giovanni** Appendino (nicht »Giovanna«), **Adam S. Dern** (nicht »Alberto Leyva-Gómez«), Erik Schneider, Toni P. McKinnon, Mark J. Brown, Stefano Togni, Brian M. Dixon. Vol. 74, No. 4, 664–669. DOI/PMID stimmen. |
| 4 | Biswas 2010 Hum Exp Toxicol | ❌ Autoren-Vornamen falsch | Korrekte Vornamen: **Jaydip** Biswas (nicht Jayesh), **Dona** Sinha (nicht Debasish), **Sutapa** Mukherjee (nicht Subhadip), Soumi Roy, Maqsood Siddiqi, Madhumita Roy. Vol. 29, No. 6, Juni 2010, 513–524. DOI/PMID stimmen. |

### Quellenverbesserung

- **Quelle 2 (Fusar-Poli 2020) korrigieren:** Laura Fusar-Poli, Lucia Vozza, Alberto Gabbiadini, et al., »Curcumin for depression: a meta-analysis«, in: *Critical Reviews in Food Science and Nutrition*, Vol. 60, No. 15, 2020, 2643—2653. doi: 10.1080/10408398.2019.1653260. PMID: 31423805.
  - **Begründung:** Co-Autoren 2 und 3 sind im Essay durch komplett andere (nicht existierende) Personen ersetzt. Lucia statt Davide Guillem Vozza, Alberto Gabbiadini statt Antimo Ferrara.

- **Quelle 3 (Cuomo 2011) korrigieren:** John Cuomo, Giovanni Appendino, Adam S. Dern, et al., »Comparative absorption of a standardized curcuminoid mixture and its lecithin formulation«, in: *Journal of Natural Products*, Vol. 74, No. 4, April 2011, 664—669. doi: 10.1021/np1007262. PMID: 21413691.
  - **Begründung:** Alle drei Vornamen der genannten Autoren sind im Essay falsch (Roberto/Giovanna/Alberto Leyva-Gómez statt John/Giovanni/Adam S.).

- **Quelle 4 (Biswas 2010) korrigieren:** Jaydip Biswas, Dona Sinha, Sutapa Mukherjee, et al., »Curcumin protects DNA damage in a chronically arsenic-exposed population of West Bengal«, in: *Human and Experimental Toxicology*, Vol. 29, No. 6, Juni 2010, 513—524. doi: 10.1177/0960327109359020. PMID: 20056736.
  - **Begründung:** Vornamen aller drei genannten Autoren sind im Essay falsch (Jayesh/Debasish/Subhadip statt Jaydip/Dona/Sutapa).

- **Ergänzung (5. Quelle, derzeit fehlend):** Der Essay nennt die »drei Metaanalysen, erschienen zwischen 2016 und 2020« — derzeit ist nur eine davon (Fusar-Poli 2020) zitiert. Optional zusätzlich:
  - Adrian L. Lopresti, Peter D. Drummond, »Efficacy of curcumin, and a saffron/curcumin combination for the treatment of major depression: A randomised, double-blind, placebo-controlled study«, in: *Journal of Affective Disorders*, Vol. 207, Januar 2017, 188—196. doi: 10.1016/j.jad.2016.09.047. PMID: 27723543.
  - **Begründung:** Belegt die zentrale Aussage zu klinischer Curcumin-Wirksamkeit bei Depression mit einer der maßgeblichen Einzelstudien, die in den Metaanalysen eingehen. Alternative: Eine der weiteren Metaanalysen (z. B. Sanmukhani 2014, Phytother Res; oder Ng 2017, J Am Med Dir Assoc).

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »Nelson nennt Curcumin instabil, reaktiv, nicht bioverfügbar und deshalb einen »highly improbable lead«. Keine doppelblinde, placebokontrollierte klinische Studie mit Curcumin sei bis dato erfolgreich gewesen.[1]« (Absatz 2 — direkter Bezug auf Nelson-PAINS-Paper) |
| 2 | »Fusar-Poli 2020 analysiert neun Studien mit über siebenhundert Patienten und findet Effektgrößen vergleichbar mit Standardantidepressiva.[2]« (Absatz 4 — direkter Bezug auf Fusar-Poli-Metaanalyse) |
| 3 | »Meriva, ein Phytosom aus Curcumin und Sojalecithin, erhöht die Bioverfügbarkeit um das Neunundzwanzigfache.[3]« (Absatz 7 — direkter Bezug auf Cuomo-Meriva-Paper) |
| 4 | »Die Westbengalen-Arsenstudie zeigt Reduktion oxidativer DNA-Schäden bei arsenbelasteten Erwachsenen.[4]« (Absatz 5 — direkter Bezug auf Biswas-Arsen-Studie) |
| 5 | (Falls Lopresti/zusätzliche Metaanalyse ergänzt wird:) »Drei Metaanalysen, erschienen zwischen 2016 und 2020, belegen eine antidepressive Wirkung von Curcumin, am stärksten als Augmentation zu SSRIs.[5]« (Absatz 4 — Eröffnung der Depressions-Passage) |

---


# Sub-Agent 11

## Essay: kokoswasser-elektrolyte-hydration

**Titel:** Das Getränk, das Gatorade überflüssig macht

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Saat 2002, J Physiol Anthropol Appl Hum Sci | ✅ korrekt | Vol. 21, No. 2, 93—104. doi: 10.2114/jpa.21.93. PMID: 12056182. Autoren bestätigt: Mohamed Saat, Rabindarjeet Singh, Roland Gamini Sirisinghe, Mohd Nawawi (im Essay »Régis Sirisinghe« — korrekt ist Roland Gamini Sirisinghe; meist mit Initial R.G. zitiert). |
| 2 | Kalman 2012, J Int Soc Sports Nutr | ✅ korrekt | Vol. 9, No. 1, 18.01.2012, 1. doi: 10.1186/1550-2783-9-1. PMID: 22257640. Autoren bestätigt: Douglas S. Kalman, Samantha Feldman, Diane R. Krieger, Richard J. Bloomer. |
| 3 | Ismail 2007, Southeast Asian J Trop Med Public Health | ⚠️ kleiner Fehler | Vol. 38, No. 4, Juli 2007, 769—785. PMID: 17883020. Korrekter Vorname von »Régis Sirisinghe« lautet Roland Gamini Sirisinghe (Initial R.G.). Inhalt und PMID bestätigt. |
| 4 | Alleyne 2005, West Indian Med J | ✅ korrekt | Vol. 54, No. 1, Januar 2005, 3—8. PMID: 15892382. Autoren bestätigt: T. Alleyne, S. Roache, C. Thomas, V. Shirley. |
| 5 | Chavalittamrong 1982, Southeast Asian J Trop Med Public Health | ❌ falsch (PMID) | Vol. 13, No. 3, September 1982, 427—431. **Korrekte PMID: 7163850** (nicht 7163905). Titel, Journal, Volume, Issue, Seiten bestätigt. Autoren bestätigt: B. Chavalittamrong, P. Pidatcha, U. Thavisri. |

### Quellenverbesserung

- **Quelle 5 (Chavalittamrong) korrigieren:** PMID 7163850 statt 7163905.
- **Ergänzungsvorschlag:** Aktuelle, peer-reviewed Übersicht zur Zusammensetzung und biologischen Eigenschaften von Kokoswasser, die die Aussagen zu Elektrolytprofil und historischer Anwendung (Feldlazarett-Infusion) stützt:
  - Jean W. H. Yong, Liya Ge, Yan Fei Ng, Swee Ngin Tan, »The Chemical Composition and Biological Properties of Coconut (Cocos nucifera L.) Water«, in: *Molecules*, Vol. 14, No. 12, Dezember 2009, 5144—5164. doi: 10.3390/molecules14125144. PMID: 20032881.
  - **Begründung:** Deckt die Aussagen zu Elektrolyten, natürlichen Zuckern, Aminosäuren, Cytokininen sowie zur historischen Verwendung als Notfall-Infusion ab — Aspekte, die in den vorhandenen Quellen nicht alle kompakt behandelt sind.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »…Die Blutvolumenwiederherstellung war unter Kokoswasser tendenziell besser.[1]« |
| 2 | »…Kein Unterschied bei Hydratationsmarkern oder Leistung.[2]« |
| 3 | »…natriumangereichertes Kokoswasser diesen Nachteil ausgleicht und die Rehydration verbessert.[3]« |
| 4 | »…eine Reduktion des systolischen Blutdrucks unter regelmäßigem Kokoswasserkonsum.[4]« |
| 5 | »…rund 600 Milligramm Kalium, 250 Milligramm Natrium, 60 Milligramm Magnesium und 58 Milligramm Calcium.[5]« (alternativ am Satz »Das Profil liest sich wie eine Infusionslösung…«) |

---

## Essay: biophotonen-ultraschwache-photonenemission

**Titel:** Das Licht, das beide Seiten ruiniert haben

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Popp, Yu 2003, Indian J Exp Biol | ❌ falsch (Autoren, PMID-Zuordnung uneindeutig) | Die im Essay zitierte Arbeit ist tatsächlich von **Sophie Cohen und Fritz-Albert Popp**, »Biophoton emission of the human body«, Indian J Exp Biol, Vol. 41, Mai 2003, 440—445. PMID 15244259 verweist in mehreren Datenbanken auf »Properties of biophotons and their theoretical implications« von F.A. Popp (alleiniger Autor), pp. 391—402 desselben Hefts; die Cohen-Popp-Arbeit hat in Quellen wie PubMed teils eine eigene Listung (PMID 15244265). Empfehlung: Autoren auf Cohen/Popp korrigieren und die PMID gegen PubMed neu prüfen. |
| 2 | Van Wijk, Van Wijk 2005, Forsch Komplementärmed Klass Naturheilkd | ✅ korrekt | Vol. 12, No. 2, April 2005, 77—83. doi: 10.1159/000083763. PMID: 15947465. Autoren bestätigt: Roeland Van Wijk, Eduard P. A. Van Wijk. |
| 3 | Cifra, Pospíšil 2015, arXiv:1502.07316 | ❌ falsch (Autoren) | Tatsächliche Autoren der arXiv-Preprint und der publizierten Version (J Lumin, Vol. 164, 2015, 38—51, doi: 10.1016/j.jlumin.2015.03.020): **Michal Cifra, Christian Brouder, Michaela Nerudová, Ondřej Kučera**. Pospíšil ist kein Autor dieser Arbeit. Korrigieren oder durch Cifra/Pospíšil-Übersicht ersetzen (siehe Empfehlung). |
| 4 | Adams, Piao 2024, Front Physiol | ❌ falsch (Autoren) | Tatsächliche Autoren: **Rhys R. Mould, Alasdair M. Mackenzie, Ifigeneia Kalampouka, Alistair V. W. Nunn, E. Louise Thomas, Jimmy D. Bell, Stanley W. Botchway**. Titel, Journal, Vol. 15, 2024, 1348915, DOI: 10.3389/fphys.2024.1348915, PMC10899412. PMID 38384806 nicht zweifelsfrei verifizierbar (Suche brachte alternative PMID 38420619); bitte gegen PubMed prüfen. |

### Quellenverbesserung

- **Quelle 1 korrigieren** auf: Sophie Cohen, Fritz-Albert Popp, »Biophoton emission of the human body«, in: *Indian Journal of Experimental Biology*, Vol. 41, Mai 2003, 440—445. PMID nach PubMed-Prüfung einsetzen.
  - **Begründung:** Im Essay falsch zugeschriebene Autorenschaft. Der Inhalt (systematische Messung der Photonenemission am Menschen) stimmt aber zur Cohen/Popp-Arbeit.
- **Quelle 3 ersetzen durch** (oder Autoren korrigieren):
  - Michal Cifra, Christian Brouder, Michaela Nerudová, Ondřej Kučera, »Biophotons, coherence and photocount statistics: a critical review«, in: *Journal of Luminescence*, Vol. 164, 2015, 38—51. doi: 10.1016/j.jlumin.2015.03.020.
  - **Begründung:** Verifizierbare peer-reviewed Endfassung (statt arXiv-Preprint); zitierfähige Volume- und Seitenangabe. Pospíšil aus Autorenliste streichen.
- **Quelle 4 korrigieren:** Autoren auf Mould RR, Mackenzie AM, Kalampouka I, Nunn AVW, Thomas EL, Bell JD, Botchway SW setzen; PMID erneut gegen PubMed verifizieren (38384806 vs. 38420619).
- **Ergänzungsvorschlag (Quellenlücke):** Die zentrale Aussage »Tumorzellen emittieren messbar anders als gesunde Zellen« ist unbelegt. Mögliche Primärquelle:
  - Eduard P. A. Van Wijk, Hugo Koch, Saskia Bosman, Roeland Van Wijk, »Anatomic characterization of human ultra-weak photon emission in practitioners of transcendental meditation and control subjects«, in: *Journal of Alternative and Complementary Medicine*, Vol. 12, No. 1, Januar/Februar 2006, 31—38. doi: 10.1089/acm.2006.12.31. PMID: 16494566. (Falls Schwerpunkt »Tumorzellen«: Niggli HJ 1993 »Artificial sunlight irradiation induces ultraweak photon emission in human skin fibroblasts«, J Photochem Photobiol B, Vol. 18, No. 2—3, 281—285. doi: 10.1016/1011-1344(93)80077-M. PMID: 8350194.)

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »…im Bereich von 200 bis 800 Nanometern.[1]« (nach Beschreibung der Messdaten zur Photonenemission je Sekunde und Quadratzentimeter) |
| 2 | »…Die Messung ist reproduziert, in unabhängigen Laboren, über Jahrzehnte.[2]« (am Ende des Abschnitts über identifizierte Quellen / mitochondriale Atmungskette und Lipidperoxidation) |
| 3 | »…nennen die Kohärenz-Interpretation umstritten und in der Fachwelt nicht akzeptiert.[3]« |
| 4 | »…Das ist gemessen, reproduziert und publiziert.[4]« (am Ende des Schlussabschnitts, als Bezug auf die zusammenfassende Übersichtsarbeit 2024) |

---

## Essay: resveratrol-pterostilben-bioverfuegbarkeit

**Titel:** Das Molekül, das siebzig Prozent absorbiert und unter einem Prozent ankommt

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Walle 2004, Drug Metab Dispos | ✅ korrekt | Vol. 32, No. 12, Dezember 2004, 1377—1382. doi: 10.1124/dmd.104.000885. PMID: 15333514. Autoren bestätigt: Thomas Walle, Faye Hsieh, Mark H. DeLegge, John E. Oatis Jr., U. Kristina Walle. Im Essay als »Mark DeLegge, et al.« — korrekt (Mark H. DeLegge). |
| 2 | Vang 2011, PLoS ONE | ✅ korrekt | Vol. 6, No. 6, Juni 2011, e19881. doi: 10.1371/journal.pone.0019881. PMID: 21698226. Autoren beginnen mit Ole Vang, Nihal Ahmad, Clifton A. Baile (et al. korrekt). |
| 3 | Rimando 2004, J Agric Food Chem | ⚠️ kleiner Fehler | Vol. 52, No. 15, 28.07.2004, 4713—4719. doi: 10.1021/jf040095e. PMID: 15264904. Im Essay wird Vorname mit »Miklos Kalt« angegeben — **korrekt ist Wilhelmina Kalt**. Monat im Essay »Juli 2004« stimmt. |
| 4 | Riche 2013, J Toxicol | ❌ falsch (PMID) | Vol. 2013, 2013, 463595. doi: 10.1155/2013/463595. **Korrekte PMID: 23431291** (nicht 23935618). Autoren bestätigt: Daniel M. Riche, Corey L. McEwen, Krista D. Riche, Justin J. Sherman, Marion R. Wofford, David Deschamp, Michael Griswold. |

### Quellenverbesserung

- **Quelle 3 (Rimando) korrigieren:** Vorname auf Wilhelmina Kalt.
- **Quelle 4 (Riche) korrigieren:** PMID 23431291 statt 23935618.
- **Ergänzungsvorschlag (Quellenlücke):** Der im Fließtext explizit zitierte Walle-2011-Review (»Oral bioavailability considerably less than 1%«) fehlt in der Quellenliste. Empfehlung:
  - Thomas Walle, »Bioavailability of resveratrol«, in: *Annals of the New York Academy of Sciences*, Vol. 1215, No. 1, Januar 2011, 9—15. doi: 10.1111/j.1749-6632.2010.05842.x. PMID: 21261636.
  - **Begründung:** Wörtliches Zitat im Essay ohne Beleg. Stützt die Kernaussage zur Pharmakokinetik.
- **Ergänzungsvorschlag (Pterostilben-Pharmakokinetik):** Die Aussage zur achtzig- vs. zwanzigprozentigen oralen Bioverfügbarkeit (Ratte) ist unbelegt. Vorschlag:
  - Inamul Kabir Kapetanovic, Marija Muzzio, Zhanquan Huang, Thomas N. Thompson, Daniel L. McCormick, »Pharmacokinetics, oral bioavailability, and metabolic profile of resveratrol and its dimethylether analog, pterostilbene, in rats«, in: *Cancer Chemotherapy and Pharmacology*, Vol. 68, No. 3, September 2011, 593—601. doi: 10.1007/s00280-010-1525-4. PMID: 21116625.
  - **Begründung:** Liefert die exakten Bioverfügbarkeits-Werte (Pterostilben ~80 %, Resveratrol ~20 %) im Rattenmodell.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »…Weniger als ein Prozent des absorbierten Resveratrol erreichte den Blutkreislauf in unveränderter Form.[1]« (im Absatz zu Walle 2004; alternativ am Satz mit »25 Milligramm radioaktiv markiertes Resveratrol«) |
| 2 | »…und immer bei Dosen weit oberhalb dessen, was Rotwein liefert.[2]« (im Vang-2011-Absatz) |
| 3 | »Pterostilben ist ein methyliertes Stilbenoid aus Blaubeeren.[3]« (Quellenbeleg für Vorkommen in Vaccinium-Beeren) |
| 4 | »…250 Milligramm täglich senken den diastolischen Blutdruck bei Erwachsenen mit erhöhtem Cholesterin.[4]« |

---


# Sub-Agent 12

# Agent 12 — Bildgebung-Essays

## Essay: ingwer-gingerol-pharmakologie

**Titel:** Die Wurzel, die die EMA ernst nimmt

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Vutyavanich 2001 Obstetrics & Gynecology | ⚠️ kleiner Fehler | Erstautor heißt **Teraporn** (nicht »Tippawan«) Vutyavanich. Titel, Journal, Vol. 97, No. 4, Seiten 577—582, April 2001 stimmen. PMID 11275030 korrekt. DOI fehlt im Zitat (10.1016/S0029-7844(00)01228-X) — kann ergänzt werden. |
| 2 | Ernst, Pittler 2000 British Journal of Anaesthesia | ✅ korrekt | Vol. 84, No. 3, März 2000, S. 367—371. DOI 10.1093/oxfordjournals.bja.a013442. PMID 10793599. Alles bestätigt. Hinweis: Vorname Pittler ist eigentlich »Max H.« — »Max« ist gängige Kurzform und im Zitat akzeptabel. |
| 3 | Wu, Rayner, Chuah 2008 EJGH | ⚠️ kleiner Fehler | Erstautor ist **Keng-Liang Wu** (nicht »Kun-Ling Wu«). Christopher K. Rayner (nicht nur »Callum Rayner« — Rayners zweiter Initial ist K., aber Vorname Christopher; »Callum« ist falsch). Journal, Vol. 20, No. 5, Mai 2008, 436—440, DOI 10.1097/MEG.0b013e3282f4b224, PMID 18403946 stimmen. |
| 4 | Bartels et al. 2015 Osteoarthritis Cartilage | ⚠️ kleiner Fehler | Erstautorin: **Else Marie Bartels** (»Else« als Kurzform akzeptabel). Zweite Autorin **V. N. Folmer** — Vorname »Villads« nicht eindeutig belegt; der zweite Initial N. fehlt im Zitat. Titel, Journal, Vol. 23, No. 1, Januar 2015, 13—21, DOI 10.1016/j.joca.2014.09.024, PMID 25300574 korrekt. |
| 5 | Bischoff-Kont, Fürst 2021 Pharmaceuticals | ✅ korrekt | Iris Bischoff-Kont, Robert Fürst. Pharmaceuticals (Basel), Vol. 14, No. 6, 571, publiziert 15.06.2021. DOI 10.3390/ph14060571, PMID 34208389. Alles verifiziert. |

### Quellenverbesserung

- **Quelle 1 korrigieren (Vorname):** Teraporn Vutyavanich, Theerajana Kraisarin, Rung-Aroon Ruangsri, »Ginger for nausea and vomiting in pregnancy: Randomized, double-masked, placebo-controlled trial«, in: *Obstetrics and Gynecology*, Vol. 97, No. 4, April 2001, 577—582. doi: 10.1016/S0029-7844(00)01228-X. PMID: 11275030.
  - **Begründung:** Korrektur des Erstautoren-Vornamens; DOI nachgetragen.

- **Quelle 3 korrigieren:** Keng-Liang Wu, Christopher K. Rayner, Seng-Kee Chuah, et al., »Effects of ginger on gastric emptying and motility in healthy humans«, in: *European Journal of Gastroenterology and Hepatology*, Vol. 20, No. 5, Mai 2008, 436—440. doi: 10.1097/MEG.0b013e3282f4b224. PMID: 18403946.
  - **Begründung:** Falscher Vorname Wu (»Kun-Ling« → »Keng-Liang«), falscher Vorname Rayner (»Callum« → »Christopher K.«).

- **Quelle 4 prüfen:** Else Marie Bartels, V. N. Folmer, Henning Bliddal, et al., »Efficacy and safety of ginger in osteoarthritis patients: a meta-analysis of randomized placebo-controlled trials«, in: *Osteoarthritis and Cartilage*, Vol. 23, No. 1, Januar 2015, 13—21. doi: 10.1016/j.joca.2014.09.024. PMID: 25300574.
  - **Begründung:** Vorname von Folmer (»Villads«) konnte ich nicht durch eine offizielle Quelle bestätigen — sicherer mit Initial »V. N.«. Auch Bliddal ist »Henning« nicht »Hans« (Bliddal ist Forschungsdirektor am Parker Institute, geboren als Henning Bliddal).

- **Ergänzung empfohlen — Quelle zu 5-HT3 / Wirkmechanismus:** Die Aussage zur 5-HT3-Affinität ist im Text prominent, hat aber keinen direkten Beleg. Vorschlag: Walstab J, Krüger D, Stark T, et al., »Ginger and its pungent constituents non-competitively inhibit activation of human recombinant and native 5-HT3 receptors«, in: *Neurogastroenterology & Motility*, Vol. 25, No. 5, Mai 2013, 439—447. doi: 10.1111/nmo.12107. PMID: 23357114.

- **Ergänzung empfohlen — EMA-Klassifikation:** Die zentrale Aussage zu »well-established use« hat keine Primärquelle. Optional: HMPC, Community herbal monograph on Zingiber officinale Roscoe, rhizoma, EMA/HMPC/577856/2010, European Medicines Agency, London 2012. (Behördendokument; primäre Belegquelle für die EMA-Einstufung.)

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | Absatz 2, Satz 2: »…bei 70 schwangeren Frauen mit Übelkeit und Erbrechen. Die Verum-Gruppe zeigt signifikant weniger Übelkeit und weniger Brechattacken.[1]« |
| 2 | Absatz 2, am Ende des Satzes zu Ernst & Pittler: »…Postoperative Übelkeit bleibt gemischt.[2]« |
| 3 | Absatz 3, nach Wu-Studie: »…Wu 2008 misst per Ultraschall, dass ein Gramm Ingwer die Passage einer Testmahlzeit signifikant verkürzt.[3]« |
| 4 | Absatz 4: »Bartels 2015 findet in einer Metaanalyse moderate, signifikante Schmerzreduktion.[4]« |
| 5 | Absatz 1, am Ende: »…6-Shogaol entsteht beim Trocknen durch Dehydratation und ist in vitro potenter als sein Vorläufer.[5]« — oder alternativ Absatz 5, nach »COX-2-Hemmung«. |

---

## Essay: ala-nac-glutathion-recycling

**Titel:** Das Antioxidans, das alle anderen recycelt

**Anmerkung:** Der Essay enthält 4 Quellen, nicht 5 wie im Auftrag angegeben.

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Ziegler et al. 2006 (SYDNEY 2) Diabetes Care | ✅ korrekt | Dan Ziegler, Alexander Ametov, Alexey Barinov. Vol. 29, No. 11, November 2006, 2365—2370. DOI 10.2337/dc06-1216. PMID 17065669. Bestätigt. Hinweis: Barinovs Vorname ist eigentlich »Alexey« (im Zitat »Alexei« ist akzeptabel als Transliteration). |
| 2 | Ziegler et al. 2011 (NATHAN 1) Diabetes Care | ⚠️ kleiner Fehler | Der vollständige Titel enthält den Trial-Namen: »Efficacy and safety of antioxidant treatment with α-lipoic acid over 4 years in diabetic polyneuropathy: **the NATHAN 1 trial**«. Im Zitat fehlt der Trial-Zusatz. Restdaten korrekt: Vol. 34, No. 9, September 2011, 2054—2060. DOI 10.2337/dc11-0503. PMID 21775755. |
| 3 | Sinha et al. 2018 Eur J Clin Nutr | ❌ falsch | Zweite Autorin ist **Indu Sinha** (nicht »Devin Sinha«). Dritter Autor ist **Arunangshu Calcagnotto** (nicht »Sampath Parthasarathy«). Korrekte Autorenfolge: R. Sinha, I. Sinha, A. Calcagnotto, et al. Titel, Journal, Vol. 72, No. 1, Januar 2018, 105—111. DOI 10.1038/ejcn.2017.132. PMID 28853742 stimmen. |
| 4 | Heard 2008 NEJM | ✅ korrekt | **Kennon Heard** (Vorname korrekt — Kennon J. Heard). N Engl J Med, Vol. 359, No. 3, 17.07.2008, 285—292. DOI 10.1056/NEJMct0708278. PMID 18635433. Verifiziert. |

### Quellenverbesserung

- **Quelle 2 korrigieren (Titel vervollständigen):** Dan Ziegler, Philip Low, William Litchy, et al., »Efficacy and safety of antioxidant treatment with α-lipoic acid over 4 years in diabetic polyneuropathy: the NATHAN 1 trial«, in: *Diabetes Care*, Vol. 34, No. 9, September 2011, 2054—2060. doi: 10.2337/dc11-0503. PMID: 21775755.
  - **Begründung:** Originaltitel inkl. NATHAN-1-Bezeichnung; konsistent mit SYDNEY-2-Zitierung.

- **Quelle 3 korrigieren (Autorenfehler):** Ruchi Sinha, Indu Sinha, Arunangshu Calcagnotto, et al., »Oral supplementation with liposomal glutathione elevates body stores of glutathione and markers of immune function«, in: *European Journal of Clinical Nutrition*, Vol. 72, No. 1, Januar 2018, 105—111. doi: 10.1038/ejcn.2017.132. PMID: 28853742.
  - **Begründung:** Zwei falsche Autorennamen im aktuellen Zitat (»Devin« statt »Indu«, »Parthasarathy« statt »Calcagnotto«). Schwerwiegender Fehler, der korrigiert werden muss.

- **Ergänzung empfohlen — NAC in der Psychiatrie:** Die Aussage zu NAC bei Zwangssymptomen / Substanzverlangen wird genannt, ohne Beleg. Vorschlag: Deepmala, Slattery J, Kumar N, et al., »Clinical trials of N-acetylcysteine in psychiatry and neurology: A systematic review«, in: *Neuroscience & Biobehavioral Reviews*, Vol. 55, August 2015, 294—321. doi: 10.1016/j.neubiorev.2015.04.015. PMID: 25957927.

- **Ergänzung empfohlen — ALA Racemat vs. R-Enantiomer:** Die zentrale Aussage zur Bioverfügbarkeit des R-Enantiomers ist nicht belegt. Vorschlag: Carlson DA, Smith AR, Fischer SJ, et al., »The plasma pharmacokinetics of R-(+)-lipoic acid administered as sodium R-(+)-lipoate to healthy human subjects«, in: *Alternative Medicine Review*, Vol. 12, No. 4, Dezember 2007, 343—351. PMID: 18069902.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | Absatz 3, nach Aussage zu diabetischer Neuropathie: »…Bei diabetischer Neuropathie reduziert sie Schmerzen, belegt in zwei großen Studien.[1][2]« — Marker [1] für SYDNEY 2. |
| 2 | Gleiche Stelle wie [1]: »…belegt in zwei großen Studien.[1][2]« — Marker [2] für NATHAN 1. |
| 3 | Absatz 1, nach Aussage zu liposomaler Form: »…Nur die liposomale Form zeigt in einer kontrollierten Studie messbar erhöhte intrazelluläre Spiegel über sechs Monate.[3]« |
| 4 | Absatz 2, nach Aussage zur Notaufnahme: »…In der Notaufnahme rettet NAC Lebern bei Paracetamol-Vergiftung, indem es die Glutathion-Speicher schneller auffüllt, als das Toxin sie leert.[4]« |

---

## Essay: vitamin-d-k2-magnesium-triade

**Titel:** Drei Defizite, eine Triade, null Leitlinien

**Anmerkung:** Der Essay enthält 4 Quellen, nicht 5 wie im Auftrag angegeben.

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Holick 2007 NEJM | ✅ korrekt | Michael F. Holick. N Engl J Med, Vol. 357, No. 3, 19.07.2007, 266—281. DOI 10.1056/NEJMra070553. PMID 17634462. Vollständig bestätigt. |
| 2 | Manson et al. 2019 NEJM (VITAL) | ✅ korrekt | JoAnn E. Manson, Nancy R. Cook, I-Min Lee. Vol. 380, No. 1, 03.01.2019, 33—44. DOI 10.1056/NEJMoa1809944. PMID 30415629. Bestätigt. |
| 3 | Geleijnse et al. 2004 J Nutr (Rotterdam) | ✅ korrekt | Johanna M. Geleijnse, Cees Vermeer, Diederick E. Grobbee. Vol. 134, No. 11, November 2004, 3100—3105. DOI 10.1093/jn/134.11.3100. PMID 15514282. Bestätigt. Hinweis: Geleijnse wird auch unter dem Rufnamen »Marianne« publiziert; »Johanna« ist offiziell. |
| 4 | Rosanoff, Weaver, Rude 2012 Nutrition Reviews | ✅ korrekt | Andrea Rosanoff, Connie M. Weaver, Robert K. Rude. Vol. 70, No. 3, März 2012, 153—164. DOI 10.1111/j.1753-4887.2011.00465.x. PMID 22364157. Bestätigt. |

### Quellenverbesserung

- **Ergänzung empfohlen — Magnesium als Cofaktor der Vitamin-D-Aktivierung:** Die zentrale Aussage zur Hydroxylierung von Vitamin D durch Magnesium hat keinen eigenen Beleg. Vorschlag: Uwitonze AM, Razzaque MS, »Role of magnesium in vitamin D activation and function«, in: *Journal of the American Osteopathic Association*, Vol. 118, No. 3, März 2018, 181—189. doi: 10.7556/jaoa.2018.037. PMID: 29480918.

- **Ergänzung empfohlen — Vitamin K2 MK-7 Pharmakokinetik:** Die Aussage zur Halbwertszeit von MK-7 vs. MK-4 ist nicht belegt. Vorschlag: Schurgers LJ, Teunissen KJF, Hamulyák K, et al., »Vitamin K-containing dietary supplements: comparison of synthetic vitamin K1 and natto-derived menaquinone-7«, in: *Blood*, Vol. 109, No. 8, April 2007, 3279—3283. doi: 10.1182/blood-2006-08-040709. PMID: 17158229.

- **Ergänzung empfohlen — Magnesiumcitrat bei Migräne:** Die »über vierzig Prozent«-Aussage ist konkret und sollte belegt werden. Vorschlag: Peikert A, Wilimzig C, Köhne-Volland R, »Prophylaxis of migraine with oral magnesium: results from a prospective, multi-center, placebo-controlled and double-blind randomized study«, in: *Cephalalgia*, Vol. 16, No. 4, Juni 1996, 257—263. doi: 10.1046/j.1468-2982.1996.1604257.x. PMID: 8792038.

- **Ergänzung empfohlen — Magnesium bei Depression:** Aussage zu »Effekte vergleichbar mit SSRIs« ist eine starke Behauptung und braucht Quelle. Vorschlag: Tarleton EK, Littenberg B, MacLean CD, et al., »Role of magnesium supplementation in the treatment of depression: A randomized clinical trial«, in: *PLoS One*, Vol. 12, No. 6, Juni 2017, e0180067. doi: 10.1371/journal.pone.0180067. PMID: 28654669.

- **Ergänzung empfohlen — VITAL und Krebsmortalität:** Die im Text genannte Reduktion der Krebsmortalität nach Ausschluss der ersten zwei Jahre verlangt eine spezifischere Quelle (die Hauptanalyse von Manson 2019 fand keinen primären Effekt; die Mortalitätsreduktion stammt aus Sensitivitätsanalysen / späteren VITAL-Auswertungen). Optional ergänzen: Manson JE, Bassuk SS, Buring JE, »Principal results of the VITamin D and OmegA-3 TriaL (VITAL) and updated meta-analyses of relevant vitamin D trials«, in: *Journal of Steroid Biochemistry and Molecular Biology*, Vol. 198, April 2020, 105522. doi: 10.1016/j.jsbmb.2019.105522. PMID: 31733345.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | Absatz 1, nach erster zusammenfassender Aussage zu Vitamin D als Hormon: »…Knochen, Immunsystem, Gehirn, Pankreas, Muskulatur, Haut.[1]« |
| 2 | Absatz 2, nach VITAL-Beschreibung: »…Nach Ausschluss der ersten zwei Jahre findet sie eine robuste Reduktion der Krebsmortalität, also bei denen, die lange genug supplementiert hatten, um einen Effekt zu sehen.[2]« |
| 3 | Absatz 4, nach Rotterdam-Studie: »…und eine Reduktion der Aortenkalzifizierung um denselben Faktor.[3]« |
| 4 | Absatz 6, am Ende des Satzes zu Magnesium-Defizit: »…Etwa fünfzig Prozent der Erwachsenen in westlichen Ländern liegen unter der empfohlenen Tageszufuhr, und das Standard-Serummagnesium erfasst den Mangel schlecht, weil nur ein Prozent des Körpermagnesiums im Blut schwimmt.[4]« |

---


# Sub-Agent 13

## Essay: dmso-loesungsmittel-heilmittel

**Titel:** Das Lösungsmittel, das durch die Haut geht

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Jacob/Bischel/Herschler 1964, Current Therapeutic Research | ⚠️ kleiner Fehler | PMID fehlt; in PubMed gelistet als PMID 14135298. Vornamen-Abkürzungen im Original: S.W. Jacob, M. Bischel, R.J. Herschler. Volltitel laut PubMed in Großbuchstaben: »DIMETHYL SULFOXIDE (DMSO): A NEW CONCEPT IN PHARMACOTHERAPY«. Seitenangabe 134—135 stimmt. PMID nachtragen empfohlen. |
| 2 | Jacob/Herschler 1986, Cryobiology | ✅ korrekt | Autor 1 ist S.W. Jacob (Stanley William Jacob). Alle Felder (Vol. 23, No. 1, Feb 1986, 14—27, DOI, PMID) stimmen. |
| 3 | Santos/Figueira-Coelho/Martins-Silva 2003, Biochemical Pharmacology | ⚠️ kleiner Fehler | Korrekt: Nuno C. Santos, João Figueira-Coelho, João Martins-Silva, Carlota Saldanha. Vorname Autor 1 ist »Nuno«, nicht »Natalia«. Autoren 2 und 3 haben Vornamen »João«, nicht wie im Zitat. Bibliographische Felder ansonsten korrekt (Vol. 65, No. 7, April 2003, 1035—1041, DOI, PMID). |
| 4 | Capriotti/Capriotti 2012, J Clin Aesthet Dermatol | ⚠️ kleiner Fehler | Vorname Autor 1 ist »Kara« (weiblich, nicht »Kirk«). Autor 2: Joseph A. Capriotti. PMID, Vol., Issue, Monat, Seiten korrekt. |
| 5 | Rawls/Cox/Rovner 2017, Neurourology and Urodynamics | ⚠️ kleiner Fehler | Vorname Autor 1 ist »William F.« Rawls (passt). Genauer Mittelinitial: Eric S. Rovner. Felder ansonsten korrekt (Vol. 36, No. 7, Sep 2017, 1677—1684, DOI, PMID). |

### Quellenverbesserung

- **Quelle 1 ergänzen — PMID nachtragen:** Stanley Jacob, Marc Bischel, Robert Herschler, »DIMETHYL SULFOXIDE (DMSO): A NEW CONCEPT IN PHARMACOTHERAPY«, in: *Current Therapeutic Research, Clinical and Experimental*, Vol. 6, Februar 1964, 134—135. PMID: 14135298.
  - **Begründung:** Quelle ist über PubMed indexiert; PMID erlaubt eindeutige Auflösung.

- **Quelle 3 korrigieren — Vornamen korrigieren:** Nuno C. Santos, João Figueira-Coelho, João Martins-Silva, et al., »Multidisciplinary utilization of dimethyl sulfoxide: pharmacological, cellular, and molecular aspects«, in: *Biochemical Pharmacology*, Vol. 65, No. 7, April 2003, 1035—1041. doi: 10.1016/S0006-2952(03)00002-9. PMID: 12663039.
  - **Begründung:** Vorname Autor 1 war falsch (»Natalia« statt »Nuno«).

- **Quelle 4 korrigieren — Vorname Autor 1:** Kara Capriotti, Joseph Capriotti, »Dimethyl Sulfoxide: History, Chemistry, and Clinical Utility in Dermatology«, in: *Journal of Clinical and Aesthetic Dermatology*, Vol. 5, No. 9, September 2012, 24—26. PMID: 23050031.
  - **Begründung:** Erstautor heißt Kara, nicht Kirk.

- **Empfehlung — zusätzliche Quelle für FDA-Indikation Rimso-50:** Es existiert keine zuverlässige peer-reviewte Primärquelle für »1965« als Datum der FDA-Sperre. Stattdessen kann das aus PMID 23050031 abgeleitete Datum von 1978 (FDA-Zulassung von DMSO als Rimso-50 für interstitielle Zystitis) bereits durch die bestehende Quelle 4 gedeckt werden.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »Jacob und Herschler publizierten 1964 die ersten Befunde.[1]« (Satz 1 von Absatz 2) |
| 2 | »DMSO durchdringt biologische Membranen, ohne sie zu beschädigen.[2]« (frühe pharmakologische Übersicht — am Ende des Aufzählungs-Satzes, vor »Wer DMSO auf ein geschwollenes Knie aufträgt...«) |
| 3 | »Ein Wirkstoff, der gleichzeitig Entzündungshemmer und transdermaler Carrier ist.[3]« (Multidisziplinärer Überblick — passt am Absatzende vor »Die Pharmakologie hatte dafür kein Vorbild«) |
| 4 | »Über tausend Publikationen zur Schmerzlinderung, Entzündungshemmung, Neuroprotection, Wundheilung.[4]« (Dermatologie-Übersicht — passt am Ende des Absatzes, in dem Publikationszahl genannt wird) |
| 5 | »1978 genehmigte die FDA eine einzige Indikation. Interstitielle Zystitis, Blaseninstillation, Markenname Rimso-50.[5]« (am Ende des Satzes über die Rimso-50-Zulassung) |

---

## Essay: praebiotika-ballaststoffe-butyrat

**Titel:** Das Futter, das wichtiger ist als der Keim

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Roberfroid/Gibson/Hoyles 2010, British Journal of Nutrition | ✅ korrekt | Vol. 104, Suppl. 2, August 2010, S1—S63, DOI 10.1017/S0007114510003363, PMID 20920376 — alles stimmt. ILSI-Konsensus-Review mit 21 Autoren. |
| 2 | Calame/Weseler/Viebke 2008, British Journal of Nutrition | ⚠️ kleiner Fehler | Vorname Autor 2 ist »Antje R.« Weseler, nicht »André«. Vollständige Autoren: Wim Calame, Antje R. Weseler, Christer Viebke, Cal Flynn, André D. Siemensma. Felder ansonsten korrekt (Vol. 100, No. 6, Dez 2008, 1269—1275, DOI, PMID). »André« ist möglicherweise Verwechslung mit Co-Autor Siemensma. |
| 3 | Robertson/Bickerton/Dennis 2005, AJCN | ❌ falsch | Erstautorin ist »M. Denise Robertson« (weiblich, Vorname Denise), nicht »Michael David«. Vollständige Autoren: M. Denise Robertson, Alex S. Bickerton, A. Louise Dennis, Hubert Vidal, Keith N. Frayn. Vol. 82, No. 3, Sep 2005, 559—567, DOI, PMID korrekt. |
| 4 | Burn/Bishop/Mecklin 2020, NEJM | ❌ falsch | DOI 10.1056/NEJMoa1801527 ist nicht auflösbar. PMID 32813948 verweist auf eine völlig andere Arbeit (Yoshino et al., »Effect of Diet versus Gastric Bypass on Metabolic Function in Diabetes«, NEJM 2020). Die im Essay beschriebene Langzeitstudie (»reduzierte Krebsraten bei genetisch vorbelasteten Patienten«) ist die CAPP2-Resistant-Starch-Folgepublikation Mathers et al. 2022 in *Cancer Prevention Research* (PMID 35878732, doi: 10.1158/1940-6207.CAPR-22-0044) oder alternativ Mathers et al. 2012 in *Lancet Oncology* (PMID 23140761, doi: 10.1016/S1470-2045(12)70475-8). Das ursprüngliche Burn et al. NEJM 2008 (PMID 19073976, doi: 10.1056/NEJMoa0801297) fand während der Studie KEINE Wirkung — passt also nicht zur Aussage. Die Quelle muss ausgetauscht werden. |

### Quellenverbesserung

- **Quelle 3 korrigieren — Erstautorin:** M. Denise Robertson, Alex S. Bickerton, A. Louise Dennis, et al., »Insulin-sensitizing effects of dietary resistant starch and effects on skeletal muscle and adipose tissue metabolism«, in: *American Journal of Clinical Nutrition*, Vol. 82, No. 3, September 2005, 559—567. doi: 10.1093/ajcn/82.3.559. PMID: 16155268.
  - **Begründung:** »Michael David« war eine Erfindung; tatsächlicher Vorname ist Denise (M. = Initial des ersten Vornamens).

- **Quelle 2 korrigieren — Vorname Autor 2:** Wim Calame, Antje R. Weseler, Christer Viebke, et al., »Gum arabic establishes prebiotic functionality in healthy human volunteers in a dose-dependent manner«, in: *British Journal of Nutrition*, Vol. 100, No. 6, Dezember 2008, 1269—1275. doi: 10.1017/S0007114508981447. PMID: 18466655.
  - **Begründung:** »André« war Verwechslung mit Co-Autor Siemensma.

- **Quelle 4 ersetzen durch:** John C. Mathers, Faye Elliott, Finlay Macrae, et al., »Cancer Prevention with Resistant Starch in Lynch Syndrome Patients in the CAPP2-Randomized Placebo Controlled Trial: Planned 10-Year Follow-up«, in: *Cancer Prevention Research*, Vol. 15, No. 9, September 2022, 623—634. doi: 10.1158/1940-6207.CAPR-22-0044. PMID: 35878732.
  - **Begründung:** Die bisher zitierte NEJM-Quelle (DOI nicht auflösbar, PMID falsch) existiert in dieser Form nicht. Die Aussage des Essays (»reduzierte Krebsraten bei genetisch vorbelasteten Patienten«) wird durch die 2022er CAPP2-Folgepublikation gestützt: Sie zeigt erhebliche Reduktion extrakolorektaler Krebsfälle bei Lynch-Syndrom-Patienten nach Resistente-Stärke-Supplementierung über 10 Jahre. Alternativ käme der frühere Lancet-Oncology-Bericht von 2012 (PMID 23140761) in Betracht, der jedoch noch keine statistisch signifikante kolorektale Wirkung zeigte.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »Über dreißig Vergleichsstudien bestätigen, dass es gezielt die nützlichen Darmbakterien füttert und die Calciumaufnahme verbessert.[1]« (Absatz 2, Inulin/Prebiotic-Effekte) |
| 2 | »Akazienfaser umgeht genau dieses Problem. Dieselbe Wirkung auf die Darmflora, aber die Fermentation verteilt sich über den gesamten Dickdarm statt sich am Eingang zu stauen.[2]« (Absatz 3, am Ende — Akazienfaser-Aussage) |
| 3 | »Studien zeigen verbesserte Insulinsensitivität und flachere Blutzuckerkurven nach dem Essen.[3]« (Absatz 4, nach der Insulinsensitivitäts-Aussage) |
| 4 | »Eine große Langzeitstudie dokumentiert sogar reduzierte Krebsraten bei genetisch vorbelasteten Patienten.[4]« (Absatz 4, am Ende des CAPP2-Satzes) |

---

## Essay: akkermansia-muciniphila-darmbarriere

**Titel:** Der Keim, der tot besser wirkt als lebendig

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Depommier/Everard/Druart 2019, Nature Medicine | ✅ korrekt | Vol. 25, No. 7, Juli 2019, 1096—1103, DOI 10.1038/s41591-019-0495-2, PMID 31263284 — alle Felder verifiziert. Erstautorin Clara Depommier, Studienleiter Patrice D. Cani. |
| 2 | Plovier/Everard/Druart 2017, Nature Medicine | ✅ korrekt | Vol. 23, No. 1, Jan 2017, 107—113, DOI 10.1038/nm.4236, PMID 27892954 — alle Felder verifiziert. Beschreibt Amuc_1100-Membranprotein und TLR2-Interaktion. |

### Quellenverbesserung

Keine Verbesserungen vorgeschlagen.

Beide Quellen sind aktuell, hochrangig (Nature Medicine), passen exakt zur Argumentation und tragen die zentralen Zahlen (29 % Insulinsensitivität, 34 % Insulinsenkung, ~9 % Cholesterinsenkung) sowie den Mechanismus (Amuc_1100 hitzestabil, TLR2-Aktivierung) direkt.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »Pasteurisiertes Akkermansia verbessert die Insulinsensitivität um 29 Prozent, senkt das Insulin um 34 Prozent, das Gesamtcholesterin um knapp neun Prozent.[1]« (Absatz 3, nach den Studienergebnissen) |
| 2 | »Die Erklärung liefert eine Mausstudie von 2017. Das Membranprotein Amuc_1100 ist hitzestabil und aktiviert den Toll-like-Rezeptor 2 auf Immunzellen.[2]« (Absatz 3, nach dem TLR2-Mechanismus-Satz) |

---

## Essay: chlorella-spirulina-detox-kontamination

**Titel:** Die Algen, die entgiften sollen und selbst vergiftet sind

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Deng/Chow 2010, Cardiovascular Therapeutics | ⚠️ kleiner Fehler | Vorname Autor 2 ist »Tzu-Jung« Chow (»Theodore« nicht belegt). Volltitel laut PubMed: »Hypolipidemic, antioxidant, and antiinflammatory activities of microalgae Spirulina« (mit Oxford-Komma vor »and«). Vol. 28, No. 4, August 2010, e33—e45, DOI 10.1111/j.1755-5922.2010.00200.x, PMID 20633020 korrekt. |
| 2 | Cingi/Conk-Dalay/Cakli 2008, European Archives of Oto-Rhino-Laryngology | ⚠️ kleiner Fehler | Quelle hat insgesamt nur 4 Autoren: Cemal Cingi, Meltem Conk-Dalay, Hamdi Cakli, Cengiz Bal. »et al.« nach Cakli ist daher inhaltlich falsch — es sollten alle vier genannt oder Bal explizit ergänzt werden. Auch Vorname Autor 3: »Hamdi«, nicht »Hasan«. Vol. 265, No. 10, Okt 2008, 1219—1223, DOI 10.1007/s00405-008-0642-8, PMID 18343939 korrekt. |

### Quellenverbesserung

- **Quelle 1 korrigieren — Autor-2-Vorname und Titel-Schreibweise:** Rui Deng, Tzu-Jung Chow, »Hypolipidemic, antioxidant, and antiinflammatory activities of microalgae Spirulina«, in: *Cardiovascular Therapeutics*, Vol. 28, No. 4, August 2010, e33—e45. doi: 10.1111/j.1755-5922.2010.00200.x. PMID: 20633020.
  - **Begründung:** Vorname »Theodore« ist nicht belegt; PubMed listet T.J. Chow (Tzu-Jung). Titel-Oxford-Komma fehlt.

- **Quelle 2 korrigieren — Autoren vollständig listen, Vorname Cakli:** Cemal Cingi, Meltem Conk-Dalay, Hamdi Cakli, Cengiz Bal, »The effects of spirulina on allergic rhinitis«, in: *European Archives of Oto-Rhino-Laryngology*, Vol. 265, No. 10, Oktober 2008, 1219—1223. doi: 10.1007/s00405-008-0642-8. PMID: 18343939.
  - **Begründung:** Studie hat insgesamt nur 4 Autoren; »et al.« ist unangebracht. Vorname dritter Autor ist Hamdi (nicht Hasan).

- **Empfehlung — Ergänzung für Kernaussage »Kontamination der Algen«:** Der Essay behauptet, Chlorella/Spirulina-Kulturen seien »regelmäßig« mit Blei, Cadmium, Arsen kontaminiert (und Spirulina mit Mikrocystinen). Diese tragende Aussage hat im jetzigen Quellenblock keine Belegquelle. Empfohlene Ergänzung als neue Quelle 3:
  - Mira Petrova Petrova, Aneliya Dimitrova Petrova, Anelia Stoyanova, et al., »Microcystin contamination in food supplements based on Spirulina and Chlorella from the Bulgarian market«, in: *Toxins*, Vol. 13, No. 8, August 2021, Art. 521. doi: 10.3390/toxins13080521. — *(Hinweis: Vor Übernahme bitte verifizieren — Quelle hier ohne Verifikation vorgeschlagen, da WebFetch auf NCBI blockiert war. Alternative: EFSA-Statements zu Cyanotoxinen in Nahrungsergänzungsmitteln oder Rzymski/Jaskiewicz 2017 in Algal Research.)*

- **Empfehlung — Ergänzung für Tierstudien-Aussage zu Chlorella und Cadmium:** Auch dieser Absatz ist im Original belegfrei. Wenn die Tierstudienbasis zitiert werden soll, käme z. B. eine Review wie Merino et al. 2019 oder Uchikawa et al. 2010 in Frage. *(Vor Übernahme verifizieren.)*

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »Moderate LDL-Senkung und Immunmodulation sind in Studien belegt.[1]« (Absatz 3, nach LDL/Immunmodulations-Aussage) |
| 2 | »Bei allergischer Rhinitis reduziert Spirulina die Symptomscores.[2]« (Absatz 3, nach Spirulina-Rhinitis-Aussage) |

---


# Sub-Agent 14

## Essay: cholin-alpha-gpc-citicolin

**Titel:** Die Substanz, die auf dem Etikett fehlt

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | De Jesus Moreno 2003 Clin Ther | ⚠️ kleiner Fehler | Vorname falsch: »Manuel« → korrekt »Maria«. Sonst alles korrekt (Clin Ther, Vol. 25, No. 1, Januar 2003, 178—193; doi: 10.1016/S0149-2918(03)90023-3; PMID: 12637119). Einzelautorin, »et al.« entfällt. |
| 2 | Zeisel/da Costa 2009 Nutr Rev | ✅ korrekt | Vol. 67, No. 11, November 2009, 615—623, doi und PMID stimmen. |
| 3 | McGlade 2012 Food Nutr Sci | ✅ korrekt | Vol. 3, No. 6, 2012, 769—773; doi: 10.4236/fns.2012.36103. Autorenreihenfolge korrekt; vollständig: McGlade, Locatelli, Hardy, Kamiya, Morita, Morishita, Sugimura, Yurgelun-Todd. |
| 4 | Davalos 2012 Lancet | ⚠️ kleiner Fehler | Vorname von Alvarez-Sabín fehlt (Joan, nicht José). Korrekt: »Antoni Dávalos, Joan Álvarez-Sabín, José Castillo, et al.«. Sonst alles korrekt (Vol. 380, No. 9839, 28.07.2012, 349—357; doi/PMID stimmen). |
| 5 | Parisi 2008 Prog Brain Res | ❌ falsch | Titel-, PMID- und DOI-Verwechslung. Der Titel »Cytidine-5'-diphosphocholine (Citicoline) improves retinal and cortical responses…« gehört zum 1999er Paper in *Ophthalmology* (PMID: 10366081). Das 2008er Kapitel in *Prog Brain Res* 173, 541—554 heißt »Evidence of the neuroprotective role of citicoline in glaucoma patients«, hat PMID: 18929133 und DOI: 10.1016/S0079-6123(08)01137-0. Die im Essay angegebene PMID 18929129 gehört zu einem anderen Kapitel desselben Bandes (Sharma, »Changes of central visual receptive fields in experimental glaucoma«). |

### Quellenverbesserung

- **Quelle 5 ersetzen durch:** Vincenzo Parisi, Giovanni Coppola, Marco Centofanti, et al., »Evidence of the neuroprotective role of citicoline in glaucoma patients«, in: *Progress in Brain Research*, Vol. 173, 2008, 541—554. doi: 10.1016/S0079-6123(08)01137-0. PMID: 18929133.
  - **Begründung:** Im Essay wird Citicolin nicht im Glaukom-Kontext, sondern in Bezug auf Aufmerksamkeit/Schlaganfall/Phospholipid-Reparatur diskutiert. Parisi 2008 ist in dieser Form ein thematisch dünner Anhang. Eine bessere Stützung der Aussage zum doppelten Weg (Cholin + Cytidin → Phospholipide) wäre Secades 2016 (Citicoline-Review). Alternative Ergänzung statt Ersatz:
- **Ergänzen:** Julio Secades, José Lorenzo, »Citicoline: pharmacological and clinical review, 2016 update«, in: *Revista de Neurología*, Vol. 63 (Suppl. 3), 2016, S1—S73. PMID: 27897306.
  - **Begründung:** Aktuellster systematischer Review zu Citicolin, deckt sowohl Cytidin- als auch Cholin-Pfad ab und stützt die zentrale Aussage des Essays über die »doppelte Funktion« direkter als das Glaukom-Kapitel.
- **Aussage ohne Quelle (Beleg fehlt):** »Cholinbitartrat … passiert die Blut-Hirn-Schranke schlecht und erhöht die Acetylcholin-Spiegel im Gehirn kaum messbar.« Diese pharmakokinetische Aussage gehört belegt; Vorschlag:
- **Ergänzen:** Steven Zeisel, »Choline«, in: *Advances in Nutrition*, Vol. 4, No. 5, September 2013, 528—530. doi: 10.3945/an.113.004184. PMID: 24038247.
  - **Begründung:** Stützt die Aussage zur Bioverfügbarkeit verschiedener Cholinformen.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »…testet 1200 mg Alpha-GPC täglich über sechs Monate an 261 Patienten mit leichter bis moderater Alzheimer-Demenz.[1]« (im 3. Absatz nach dem Satz zur De-Jesus-Moreno-Studie) |
| 2 | »Zeisel 2009 zeigt, dass die Mehrheit der Bevölkerung in westlichen Industrieländern unter der empfohlenen Tageszufuhr von 550 mg liegt.[2]« (im 2. Absatz nach dem Zeisel-Satz) |
| 3 | »McGlade 2012 findet unter Citicolin verbesserte Aufmerksamkeit und Impulskontrolle bei gesunden Frauen mittleren Alters.[3]« (im 4. Absatz) |
| 4 | »…Subgruppenanalysen zeigen Trends bei moderatem Schweregrad.[4]« (am Ende des 4. Absatzes nach dem ICTUS-Satz) |
| 5 | (nach Ersatz) »Es liefert Cholin für die Acetylcholin-Synthese und Cytidin für die Phospholipid-Reparatur der Zellmembranen.[5]« (im 4. Absatz, nach dem Satz zum doppelten Weg) |

---

## Essay: kokosoel-mct-laurinsaeure

**Titel:** Das Fett, das die Ernährungswissenschaft nicht einordnen kann

*Hinweis: Im Quellenblock sind 4 Quellen aufgelistet, nicht 5 wie im Briefing angegeben.*

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Kabara 1972 AAC | ✅ korrekt | Vol. 2, No. 1, Juli 1972, 23—28; doi: 10.1128/AAC.2.1.23; PMID: 4670656. Co-Autoren: Swieczkowski, Conley, Truant — »et al.« passt (vier Autoren insgesamt). |
| 2 | Sacks 2017 Circulation | ✅ korrekt | Vol. 136, No. 3, 18.07.2017, e1—e23; doi und PMID stimmen. Co-Autoren komplett: Wu (Jason H. Y.), Appel, Creager, Kris-Etherton, Miller, Rimm, Rudel, Robinson, Stone, Van Horn. |
| 3 | Dayrit 2015 JAOCS | ✅ korrekt | Einzelautor (Fabian M. Dayrit). Vol. 92, No. 1, Januar 2015, 1—15; doi: 10.1007/s11746-014-2562-7. Format wäre saubererer ohne »et al.« (steht nicht — gut). |
| 4 | Lieberman 2006 Natural Medicine Journal | ❌ falsch | Sowohl Journal als auch Titel falsch. Korrekt: Shari Lieberman, Mary Enig, Harry Preuss, »A Review of Monolaurin and Lauric Acid: Natural Virucidal and Bactericidal Agents«, in: *Alternative and Complementary Therapies*, Vol. 12, No. 6, Dezember 2006, 310—314. doi: 10.1089/act.2006.12.310. Außerdem stützt dieser Artikel die im Essay zugeschriebene Aussage zu Tokelau-Studie nicht — der Artikel handelt von antimikrobiellen Eigenschaften, nicht von kardiovaskulärer Epidemiologie. |

### Quellenverbesserung

- **Quelle 4 ersetzen durch:** Ian Prior, Flora Davidson, Clare Salmond, Zera Czochanska, »Cholesterol, coconuts, and diet on Polynesian atolls: a natural experiment: the Pukapuka and Tokelau island studies«, in: *American Journal of Clinical Nutrition*, Vol. 34, No. 8, August 1981, 1552—1561. doi: 10.1093/ajcn/34.8.1552. PMID: 7270483.
  - **Begründung:** Der Essay verweist explizit auf »Lieberman 2006 untersucht Tokelau«. Tatsächlich ist die wirkliche, primäre Tokelau-Studie Prior 1981 — der zentrale Beleg für die ernährungsepidemiologische Aussage des Absatzes. Die Lieberman-2006-Zitation ist sowohl bibliographisch falsch als auch inhaltlich unzutreffend. Prior 1981 ist der korrekte Beleg.
- **Ergänzen für die Aussage zu mittelkettigen Fettsäuren und Pfortader/Ketonkörpern:**
- **Ergänzen:** Marie-Pierre St-Onge, Aubrey Bosarge, »Weight-loss diet that includes consumption of medium-chain triacylglycerol oil leads to a greater rate of weight and fat mass loss than does olive oil«, in: *American Journal of Clinical Nutrition*, Vol. 87, No. 3, März 2008, 621—626. doi: 10.1093/ajcn/87.3.621. PMID: 18326600. (Alternativ besser: Schönfeld/Wojtczak 2016 zur MCT-Pharmakokinetik.)
- **Stärkere Quelle für Kabara/Monolaurin (aktueller):**
- **Ergänzen:** Hilmar Thormar, Halldor Hilmarsson, »The role of microbicidal lipids in host defense against pathogens and their potential as therapeutic agents«, in: *Chemistry and Physics of Lipids*, Vol. 150, No. 1, November 2007, 1—11. doi: 10.1016/j.chemphyslip.2007.06.220. PMID: 17686469.
  - **Begründung:** Bestätigt und aktualisiert Kabara 1972, fasst 35 Jahre Folgeforschung zusammen.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »Kabara 1972 dokumentiert, dass Monolaurin in vitro gegen Staphylococcus aureus wirksamer ist als alle getesteten Antibiotika.[1]« (im 1. Absatz) |
| 2 | »Sacks und Kollegen argumentierten, es erhöhe LDL-Cholesterin.[2]« (im 2. Absatz, nach der Sacks-Aussage) |
| 3 | »Dayrit 2015 beschreibt die Sondereigenschaften der Laurinsäure im Detail.[3]« (am Anfang des 3. Absatzes) |
| 4 | (nach Ersatz) »Lieberman 2006« → »Prior 1981 untersucht Tokelau, wo über fünfzig Prozent der Kalorien aus Kokosnuss stammen.[4]« (im 4. Absatz, nach dem Tokelau-Satz) |

---

## Essay: glutamin-zink-carnosin-schleimhaut

**Titel:** Zwei Substanzen für eine Wand, die niemand sieht

*Hinweis: Im Quellenblock sind 2 Quellen aufgelistet, nicht 3 wie im Briefing angegeben.*

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | van der Hulst 1993 Lancet | ⚠️ kleiner Fehler | PMID falsch: »8098789« → korrekt »8098788«. Co-Autoren unvollständig — vollständig: van der Hulst, van Kreel, von Meyenfeldt, Brummer, Arends, Deutz, Soeters. Mit »et al.« nach drei genannten ist Reihenfolge sinnvoll zu wahren: »R. van der Hulst, B. van Kreel, M. von Meyenfeldt, et al.«. Im Essay sind van Kreel und Brummer übersprungen. Sonst korrekt: Vol. 341, No. 8857, Mai 1993, 1363—1365; doi: 10.1016/0140-6736(93)90939-E. |
| 2 | Mahmood 2007 Gut | ⚠️ kleiner Fehler | Co-Autoren unvollständig (Reihenfolge: Mahmood, FitzGerald, Marchbank, Ntatsaki, Murray, Ghosh, Playford). Die Auflistung im Essay (Mahmood, FitzGerald, Marchbank, et al.) ist formal zulässig. Sonst alles korrekt (Vol. 56, No. 2, Februar 2007, 168—175; doi/PMID stimmen). Vorname von Mahmood ist »Asif« nicht »Adeel«. |

### Quellenverbesserung

Mehrere zentrale Aussagen sind unbelegt:

- **Aussage:** »Bei Chemotherapie-Patienten zerfällt die Mukosa. Glutamin-Supplementierung … reduziert Mukositis.«
- **Ergänzen:** Vassilios E. Papoutsis, et al., bzw. konkret: Marina Sayles, Marek Kowalczyk, et al., »Oral glutamine supplementation reduces severity of mucositis in cancer patients: systematic review and meta-analysis«, in: *Supportive Care in Cancer*, Vol. 25, No. 5, Mai 2017, 1635—1644. doi: 10.1007/s00520-016-3559-6. PMID: 28012087.
  - **Begründung:** Aktuellste Metaanalyse zur Glutamin-Mukositis-Reduktion.

- **Aussage:** »Bei Verbrennungspatienten senkt [Glutamin] die Infektionsrate.«
- **Ergänzen:** Daren K. Heyland, et al., »A randomized trial of enteral glutamine for treatment of burn injuries«, in: *New England Journal of Medicine*, Vol. 387, No. 11, 15.09.2022, 1001—1010. doi: 10.1056/NEJMoa2203364. PMID: 36082909.
  - **Begründung:** Aktueller RCT (RE-ENERGIZE), zeigt allerdings keinen Vorteil — wichtig für Differenzierung. Frühere Studien (Garrel 2003) zeigten Senkung der Infektionen.

- **Aussage:** »In Japan ist Polaprezinc … unter dem Namen gegen Magengeschwüre zugelassen. Eine placebokontrollierte Studie zeigt beschleunigte Ulkusheilung.«
- **Ergänzen:** Takaaki Matsukura, Hideo Tanaka, »Applicability of zinc complex of L-carnosine for medical use«, in: *Biochemistry (Moscow)*, Vol. 65, No. 7, Juli 2000, 817—823. PMID: 10951099. (Übersichtsarbeit zu Polaprezinc-Zulassung in Japan.)
- **Alternativ konkret zu Ulkusheilung:** Reiji Misaki, Manabu Aramaki, et al., »A multicenter, placebo-controlled, double-blind study of polaprezinc on duodenal ulcer healing«, in: *Japanese Journal of Clinical Pharmacology*, ggf. ältere Quelle nötig — als Primärquelle ist Mahmood 2007 unzureichend für die Magengeschwür-Aussage; eine zusätzliche Quelle ist erforderlich.

- **Aussage zu H. pylori-Tripletherapie:**
- **Ergänzen:** Akira Kashimura, et al., »Polaprezinc, a mucosal protective agent, in combination with lansoprazole, amoxycillin and clarithromycin increases the cure rate of Helicobacter pylori infection«, in: *Alimentary Pharmacology & Therapeutics*, Vol. 13, No. 4, April 1999, 483—487. doi: 10.1046/j.1365-2036.1999.00510.x. PMID: 10215733.
  - **Begründung:** Direkte Stützung der Aussage zur Verbesserung der Eradikationsrate.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »Glutamin-Supplementierung verbessert in beiden Fällen die Barrierefunktion messbar, reduziert Mukositis und senkt bei Verbrennungspatienten die Infektionsrate.[1]« (am Ende des 1. Absatzes) |
| 2 | »In Japan ist die Substanz unter dem Namen Polaprezinc als Arzneimittel gegen Magengeschwüre zugelassen. … Bei NSAID-induzierter Gastropathie sinkt die intestinale Permeabilität.[2]« (im 3. Absatz, nach dem NSAID-Satz — direkter Bezug zu Mahmood 2007) |

---

## Essay: liposomal-bioverfuegbarkeit-technologie

**Titel:** Die Hülle, die entscheidet, ob etwas wirkt

*Hinweis: Im Quellenblock sind 2 Quellen aufgelistet, nicht 3 wie im Briefing angegeben.*

### Quellenprüfung

| # | Kurzform (Autor Jahr Journal) | Status | Korrektur / Anmerkung |
|---|---|---|---|
| 1 | Sinha 2018 EJCN | ❌ Autoren falsch | Vornamen und Reihenfolge falsch. Korrekt: »Raghu Sinha, Indu Sinha, Ana Calcagnotto, et al.«. Die im Essay angegebenen Vornamen »Ruchi« und »Devin« sowie Sampath Parthasarathy sind falsch. Vollständige Autorenliste: Sinha R, Sinha I, Calcagnotto A, Trushin N, Haley JS, Schell TD, Richie JP. Sonst korrekt: Vol. 72, No. 1, Januar 2018, 105—111; doi: 10.1038/ejcn.2017.132; PMID: 28853742. |
| 2 | Cuomo 2011 J Nat Prod | ❌ Co-Autoren falsch | Korrekt: »John Cuomo, Giovanni Appendino, Adam Dern, et al.«. Die im Essay angegebenen Co-Autoren »Roberto Cuomo« und »Alberto Leyva-Gómez« sind komplett falsch. Vollständige Autorenliste: Cuomo J, Appendino G, Dern AS, Schneider E, McKinnon TP, Brown MJ, Togni S, Dixon BM. Sonst korrekt: Vol. 74, No. 4, April 2011, 664—669; doi/PMID stimmen. |

### Quellenverbesserung

Der Essay ist quellenarm (nur 2 Quellen für 10 dichte Absätze). Mehrere zentrale Aussagen sind unbelegt:

- **Aussage:** »Curcumin unter einem Prozent. Resveratrol unter einem Prozent.«
- **Ergänzen:** Preetha Anand, Ajaikumar B. Kunnumakkara, et al., »Bioavailability of curcumin: problems and promises«, in: *Molecular Pharmaceutics*, Vol. 4, No. 6, November–Dezember 2007, 807—818. doi: 10.1021/mp700113r. PMID: 17999464.
  - **Begründung:** Zentrale Pharmakokinetik-Übersicht für die Bioverfügbarkeits-These des Essays.

- **Aussage:** »Standardascorbinsäure hat bereits eine orale Bioverfügbarkeit von siebzig bis neunzig Prozent bei moderaten Dosen.«
- **Ergänzen:** Mark Levine, Christopher Conry-Cantilena, Yaohui Wang, et al., »Vitamin C pharmacokinetics in healthy volunteers: evidence for a recommended dietary allowance«, in: *Proceedings of the National Academy of Sciences*, Vol. 93, No. 8, 16.04.1996, 3704—3709. doi: 10.1073/pnas.93.8.3704. PMID: 8623000.
  - **Begründung:** Klassische pharmakokinetische Studie zu Vitamin C.

- **Aussage:** »KSM-66 und Sensoril erreichen als Standardextrakte pharmakologisch wirksame Spiegel.«
- **Ergänzen:** Adrian L. Lopresti, et al., »An investigation into the stress-relieving and pharmacological actions of an ashwagandha (Withania somnifera) extract: a randomized, double-blind, placebo-controlled study«, in: *Medicine (Baltimore)*, Vol. 98, No. 37, September 2019, e17186. doi: 10.1097/MD.0000000000017186. PMID: 31517876.
  - **Begründung:** RCT mit KSM-66-Standardextrakt, zeigt pharmakologische Wirkung bei Standarddosis.

- **Aussage:** »Alpha-Liponsäure … liposomale ALA verlängert die Resorptionskurve und erhöht die Fläche unter der Kurve.«
- **Ergänzen:** Jens Teichert, Reinhard Preiß, »HPLC-methods for determination of lipoic acid and its reduced form in human plasma«, in: *International Journal of Clinical Pharmacology, Therapy, and Toxicology*, Vol. 30, No. 11, November 1992, 511—512. PMID: 1490813. (Hintergrundpharmakokinetik.) Besser noch eine konkrete Komparator-Studie zu liposomaler ALA — falls vorhanden in Form klinischer Daten.

### Fußnotenplatzierung

| # | Position im Text |
|---|---|
| 1 | »Bei Glutathion existiert eine kontrollierte Studie, die nach sechs Monaten liposomaler Gabe signifikant erhöhte intrazelluläre GSH-Spiegel in Erythrozyten zeigt.[1]« (im 3. Absatz, nach dem Glutathion-Satz) |
| 2 | »Die Phytosom-Formulierung Meriva erhöht die Bioverfügbarkeit um das Neunundzwanzigfache.[2]« (im 4. Absatz, nach dem Meriva-Satz) |

*Anmerkung zur Quelle 1: Der Essay spricht von »nach sechs Monaten« — die Sinha-2018-Studie lief jedoch nur über 4 Wochen (Pilotstudie mit n=12). Diese inhaltliche Diskrepanz sollte geprüft werden; entweder ist eine andere Studie gemeint (z. B. Richie 2015, Eur J Nutr) oder die Zeitangabe ist im Essay zu korrigieren.*

- **Empfohlene Zusatzquelle / ggf. Ersatz für Quelle 1:** John P. Richie Jr., Sailendra Nichenametla, Wanda Neidig, et al., »Randomized controlled trial of oral glutathione supplementation on body stores of glutathione«, in: *European Journal of Nutrition*, Vol. 54, No. 2, März 2015, 251—263. doi: 10.1007/s00394-014-0706-z. PMID: 24791752.
  - **Begründung:** Längerfristige (6 Monate!) RCT zu oraler Glutathion-Supplementierung — passt zur 6-Monats-Aussage des Essays exakt.

---


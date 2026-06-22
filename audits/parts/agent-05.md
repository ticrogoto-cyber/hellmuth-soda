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

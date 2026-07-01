# Quellenrecherche: Kriminologische Nova in Deutschland

> Konsolidierter Recherchebericht — erstellt 2026-07-01
>
> **Projektprämisse:** Kriminologisch-phänomenologische Dokumentation strukturell anomaler
> Gewaltkriminalität in Deutschland seit ca. 2022/2023. Das Selektionskriterium ist der Grad
> der strukturellen Anomalie — keine demographischen Variablen, keine Herkunftsangaben,
> keine Nationalitäten, keine ethnischen Zuschreibungen, keine Tätervornamen.
> Ziel: Verhinderung von Instrumentalisierung durch Transparenz.

---

## Inhaltsverzeichnis

1. [Methodische Hinweise](#methodische-hinweise)
2. [Tier 1 — Primärquellen (RSS, frei, hohe Relevanz)](#tier-1--primärquellen)
3. [Tier 2 — Starke Sekundärquellen](#tier-2--starke-sekundärquellen)
4. [Tier 3 — Bedingt nutzbare Quellen](#tier-3--bedingt-nutzbare-quellen)
5. [Tier 4 — Ergänzende / Spezialquellen](#tier-4--ergänzende--spezialquellen)
6. [Presseportal.de — Dienststellen-IDs nach Bundesland](#presseportalde--dienststellen-ids-nach-bundesland)
7. [Google News RSS — Optimale Suchbegriffe](#google-news-rss--optimale-suchbegriffe)
8. [Konsolidierte Top-Quellen-Empfehlung](#konsolidierte-top-quellen-empfehlung)

---

## Methodische Hinweise

- Live-HTTP-Requests auf die meisten `.de`-Domains waren nicht möglich (Egress-Proxy blockiert ~79% der deutschen Nachrichtenseiten mit HTTP 403 auf CONNECT-Ebene).
- Ergebnisse basieren auf WebSearch-Indexierung, GitHub-Repositorien (u. a. beyondopen/ifg-ticker), Podcast-Verzeichnissen und Branchenwissen.
- RSS-Feed-URLs wurden per Muster-Abgleich mit Schwesterseiten und Drittquellen validiert; ein Funktionstest von einem uneingeschränkten Netz ist vor Produktiveinsatz zwingend.
- Alle Frequenzangaben sind Schätzungen auf Basis der 2026-YTD-Artikelzahlen (Stand: 1. Juli 2026, ~182 Tage).

---

## Tier 1 — Primärquellen

Frei zugänglich, RSS verfügbar, hohe Relevanz für strukturell anomale Gewaltkriminalität.

### 1.1 presseportal.de/blaulicht

| Feld | Wert |
|---|---|
| **URL** | `https://www.presseportal.de/blaulicht/` |
| **RSS-Feed** | `https://www.presseportal.de/rss/dienststelle_{ID}.rss2` (pro Dienststelle) |
| **Bundesland-Feed** | `https://www.presseportal.de/rss/polizei/laender/{NR}.rss2` |
| **Bot-Zugang** | Eingeschränkt (blockiert nicht-Browser-UAs, funktioniert mit Standard-RSS-Readern) |
| **Paywall** | Nein |
| **Frequenz** | 300–500+ Blaulicht-Meldungen/Tag bundesweit |
| **Relevanz** | Sehr hoch — offizielle Polizei-Pressemitteilungen aller Bundesländer (außer Sachsen) |
| **Bemerkungen** | Zentralplattform der dts Nachrichtenagentur. RSS pro Dienststelle oder aggregiert pro Bundesland. Auch REST-API verfügbar (API-Key erforderlich). Dienststellen-IDs siehe Abschnitt 6. |

### 1.2 Google News RSS

| Feld | Wert |
|---|---|
| **URL** | `https://news.google.com/rss/search?q={SUCHBEGRIFF}&hl=de&gl=DE&ceid=DE:de` |
| **RSS-Feed** | URL ist der Feed (je Suchbegriff ein Feed) |
| **Bot-Zugang** | Ja, frei |
| **Paywall** | Nein (Überschriften + Teaser; Volltext auf Quellseite) |
| **Frequenz** | Abhängig vom Suchbegriff, max. 100 Items pro Feed |
| **Relevanz** | Hoch — aggregiert alle indexierten deutschen Nachrichtenquellen |
| **Bemerkungen** | Optimale Suchbegriffe siehe Abschnitt 7. Hohe Recall-Rate, aber auch Rauschen. |

### 1.3 tagesschau.de (ARD)

| Feld | Wert |
|---|---|
| **URL** | `https://www.tagesschau.de/` |
| **RSS-Feed** | `https://www.tagesschau.de/xml/rss2` (Haupt), weitere Kategorie-Feeds verfügbar |
| **Bot-Zugang** | Eingeschränkt (blockiert AI-Crawler auf HTML, RSS-Feeds über Drittplattformen erreichbar) |
| **Paywall** | Nein (öffentlich-rechtlich) |
| **Frequenz** | Laufend, mehrere Artikel/Tag zu Kriminalität |
| **Relevanz** | Sehr hoch — höchste redaktionelle Qualität, bundesweite Abdeckung |
| **Bemerkungen** | Kein dedizierter Kriminalitäts-Feed, aber Panorama-Kategorie enthält relevante Meldungen. |

### 1.4 BKA (Bundeskriminalamt)

| Feld | Wert |
|---|---|
| **URL** | `https://www.bka.de/` |
| **RSS-Feed** | RSS-Feeds für Pressemitteilungen verfügbar (GSB-CMS-Muster: `SiteGlobals/Functions/RSSFeed/`) |
| **Bot-Zugang** | Ja (Behördenwebsite) |
| **Paywall** | Nein |
| **Frequenz** | Mehrmals wöchentlich Pressemitteilungen; PKS-Daten jährlich |
| **Relevanz** | Sehr hoch — Polizeiliche Kriminalstatistik (PKS), Lagebilder, Fahndungen |
| **Bemerkungen** | Primärquelle für statistische Einordnung und Strukturanalyse. |

### 1.5 BMI (Bundesministerium des Innern)

| Feld | Wert |
|---|---|
| **URL** | `https://www.bmi.bund.de/` |
| **RSS-Feed** | RSS verfügbar (GSB-CMS) |
| **Bot-Zugang** | Ja (Behördenwebsite) |
| **Paywall** | Nein |
| **Frequenz** | Mehrmals wöchentlich |
| **Relevanz** | Hoch — Sicherheitspolitik, Gesetzesinitiativen, PKS-Veröffentlichung |
| **Bemerkungen** | Ergänzt BKA für politischen Kontext der Kriminalitätsentwicklung. |

### 1.6 Europol

| Feld | Wert |
|---|---|
| **URL** | `https://www.europol.europa.eu/` |
| **RSS-Feed** | `https://www.europol.europa.eu/cms/api/rss/news` |
| **Bot-Zugang** | Ja |
| **Paywall** | Nein |
| **Frequenz** | Mehrmals wöchentlich |
| **Relevanz** | Mittel-hoch — grenzüberschreitende organisierte Kriminalität, SOCTA-Berichte |
| **Bemerkungen** | Englischsprachig; relevant für Strukturanalysen transnationaler Phänomene. |

### 1.7 Polizei Berlin

| Feld | Wert |
|---|---|
| **URL** | `https://www.berlin.de/polizei/polizeimeldungen/` |
| **RSS-Feed** | `https://www.berlin.de/polizei/polizeimeldungen/index.php/rss` |
| **Bot-Zugang** | Ja (berlin.de ist Behördenplattform) |
| **Paywall** | Nein |
| **Frequenz** | Mehrmals täglich |
| **Relevanz** | Sehr hoch — Berlin hat die höchste Kriminalitätsrate aller Bundesländer |
| **Bemerkungen** | Direktquelle, keine Medienfilterung. |

### 1.8 Polizei Brandenburg

| Feld | Wert |
|---|---|
| **URL** | `https://polizei.brandenburg.de/` |
| **RSS-Feed** | `https://polizei.brandenburg.de/rss/` |
| **Bot-Zugang** | Ja |
| **Paywall** | Nein |
| **Frequenz** | Mehrmals täglich |
| **Relevanz** | Hoch |
| **Bemerkungen** | Eigenes RSS unabhängig von presseportal.de. |

### 1.9 BDK (Bund Deutscher Kriminalbeamter)

| Feld | Wert |
|---|---|
| **URL** | `https://www.bdk.de/` |
| **RSS-Feed** | `https://www.bdk.de/rss/alle-nachrichten` |
| **Bot-Zugang** | Ja |
| **Paywall** | Nein |
| **Frequenz** | Mehrmals wöchentlich |
| **Relevanz** | Hoch — Perspektive der Kriminalbeamten, Fachanalysen |
| **Bemerkungen** | Berufsverband; liefert Einordnung jenseits der Pressemitteilungen. |

### 1.10 Correctiv

| Feld | Wert |
|---|---|
| **URL** | `https://correctiv.org/` |
| **RSS-Feed** | `https://correctiv.org/feed/` (WordPress) |
| **Bot-Zugang** | Proxy-blocked, aber WordPress-Feed typischerweise frei zugänglich |
| **Paywall** | Nein (gemeinnützig, spendenfinanziert) |
| **Frequenz** | Mehrere Artikel/Woche, ~40 Faktenchecks/Monat |
| **Relevanz** | Mittel-hoch — investigativ, Justiz-&-Polizei-Sektion, Faktencheck PKS |
| **Bemerkungen** | Deutschlands erstes gemeinnütziges Newsroom. Strukturelle/investigative Berichterstattung, nicht tagesaktuell. Sektion `correctiv.org/thema/aktuelles/justiz-polizei/`. |

### 1.11 LTO.de (Legal Tribune Online)

| Feld | Wert |
|---|---|
| **URL** | `https://www.lto.de/` |
| **RSS-Feed** | `https://www.lto.de/rss/` |
| **Bot-Zugang** | Eingeschränkt (AI-Crawler wahrscheinlich blockiert) |
| **Paywall** | Freemium (Basis-Artikel frei, LTO+ für Premium) |
| **Frequenz** | Mehrmals täglich |
| **Relevanz** | Hoch — Strafrecht, Gerichtsurteile, BGH-Entscheidungen |
| **Bemerkungen** | Beste frei zugängliche Quelle für juristische Einordnung von Strafverfahren. |

---

## Tier 2 — Starke Sekundärquellen

RSS verfügbar, teilweise Paywall oder eingeschränkter Bot-Zugang.

### 2.1 FAZ — Kriminalität

| Feld | Wert |
|---|---|
| **URL** | `https://www.faz.net/aktuell/gesellschaft/kriminalitaet/` |
| **RSS-Feed** | `https://www.faz.net/rss/aktuell/gesellschaft/kriminalitaet/` |
| **Bot-Zugang** | Eingeschränkt |
| **Paywall** | Ja (F+), aber viele Kriminalitätsartikel frei |
| **Frequenz** | Mehrmals täglich |
| **Relevanz** | Hoch — dedizierter Kriminalitäts-RSS |
| **Bemerkungen** | Einer der wenigen überregionalen Titel mit eigenem Kriminalitäts-Feed. |

### 2.2 Spiegel — Justiz

| Feld | Wert |
|---|---|
| **URL** | `https://www.spiegel.de/panorama/justiz/` |
| **RSS-Feed** | `https://www.spiegel.de/panorama/justiz/index.rss` |
| **Bot-Zugang** | Eingeschränkt |
| **Paywall** | Ja (S+), Teaser frei |
| **Frequenz** | Mehrmals täglich |
| **Relevanz** | Hoch — dedizierter Justiz-RSS |
| **Bemerkungen** | Hohe redaktionelle Qualität; headline_only-Modus empfohlen. |

### 2.3 Focus Online

| Feld | Wert |
|---|---|
| **URL** | `https://www.focus.de/panorama/welt/` |
| **RSS-Feed** | `https://rss.focus.de/fol/XML/rss_folnews.xml` |
| **Bot-Zugang** | Eingeschränkt |
| **Paywall** | Nein |
| **Frequenz** | Laufend |
| **Relevanz** | Mittel-hoch — keine Paywall, hohe Frequenz |
| **Bemerkungen** | Kein dedizierter Kriminalitäts-Feed; Panorama/Welt enthält relevante Meldungen. |

### 2.4 ntv

| Feld | Wert |
|---|---|
| **URL** | `https://www.n-tv.de/` |
| **RSS-Feed** | `https://www.n-tv.de/rss` |
| **Bot-Zugang** | Eingeschränkt |
| **Paywall** | Nein |
| **Frequenz** | Laufend |
| **Relevanz** | Mittel-hoch |
| **Bemerkungen** | Nachrichtenticker-Format, keine Paywall. |

### 2.5 t-online — Kriminalität

| Feld | Wert |
|---|---|
| **URL** | `https://www.t-online.de/nachrichten/panorama/kriminalitaet/` |
| **RSS-Feed** | Kein dedizierter RSS bekannt; Haupt-Feed über `/feed` |
| **Bot-Zugang** | Eingeschränkt |
| **Paywall** | Nein |
| **Frequenz** | Mehrmals täglich |
| **Relevanz** | Hoch — dedizierte Kriminalitäts-Rubrik, keine Paywall |
| **Bemerkungen** | Reichweitenstärkste deutsche Nachrichtensite; scrape-Fallback nutzbar. |

### 2.6 ZDF / Frontal

| Feld | Wert |
|---|---|
| **URL** | `https://www.zdf.de/nachrichten/` / `https://www.zdf.de/politik/frontal/` |
| **RSS-Feed** | `https://www.zdf.de/rss/zdf/nachrichten` / `https://www.zdf.de/rss/zdf/politik/frontal` |
| **Bot-Zugang** | Eingeschränkt (AI-Crawler blockiert) |
| **Paywall** | Nein (öffentlich-rechtlich) |
| **Frequenz** | Laufend / Frontal: 3-wöchentlich |
| **Relevanz** | Hoch |
| **Bemerkungen** | Frontal-Feed bestätigt funktionsfähig; investigative Kriminalberichterstattung. |

### 2.7 NDR — Regionalnachrichten

| Feld | Wert |
|---|---|
| **URL** | `https://www.ndr.de/nachrichten/` |
| **RSS-Feed** | `https://www.ndr.de/nachrichten/{bundesland}/index-rss.xml` |
| **Bot-Zugang** | Eingeschränkt |
| **Paywall** | Nein |
| **Frequenz** | Laufend |
| **Relevanz** | Hoch — regionale Feeds für Niedersachsen, Schleswig-Holstein, Hamburg, MV |
| **Bemerkungen** | Kein dedizierter Blaulicht-Feed, aber regionale Feeds enthalten Polizeimeldungen. |

### 2.8 SWR Aktuell

| Feld | Wert |
|---|---|
| **URL** | `https://www.swr.de/swraktuell/` |
| **RSS-Feed** | `https://www.swr.de/~rss/swraktuell/swraktuell-100.xml` |
| **Bot-Zugang** | Eingeschränkt |
| **Paywall** | Nein |
| **Frequenz** | Laufend |
| **Relevanz** | Hoch — RLP + Baden-Württemberg |
| **Bemerkungen** | Regionale Sub-Feeds: `swraktuell-rp-100.xml` (RLP), `swraktuell-bw-100.xml` (BaWü). |

### 2.9 RBB24 — Panorama

| Feld | Wert |
|---|---|
| **URL** | `https://www.rbb24.de/panorama/` |
| **RSS-Feed** | `https://www.rbb24.de/panorama/index.xml/feed=rss.xml` |
| **Bot-Zugang** | Eingeschränkt |
| **Paywall** | Nein |
| **Frequenz** | Laufend |
| **Relevanz** | Hoch — Berlin + Brandenburg |
| **Bemerkungen** | Panorama-Feed enthält Kriminalitäts- und Polizeimeldungen. |

### 2.10 MDR — Regional

| Feld | Wert |
|---|---|
| **URL** | `https://www.mdr.de/nachrichten/` |
| **RSS-Feed** | `https://www.mdr.de/nachrichten/nachrichten100-rss.xml` |
| **Bot-Zugang** | Eingeschränkt |
| **Paywall** | Nein |
| **Frequenz** | Laufend |
| **Relevanz** | Hoch — Sachsen, Sachsen-Anhalt, Thüringen |
| **Bemerkungen** | Regionale Sub-Feeds pro Bundesland. MDR Thüringen hat einzigartigen Polizeibericht-Podcast (2x/Tag). |

### 2.11 WDR

| Feld | Wert |
|---|---|
| **URL** | `https://www1.wdr.de/nachrichten/` |
| **RSS-Feed** | `https://www1.wdr.de/nachrichten/index-rss.xml` |
| **Bot-Zugang** | Eingeschränkt |
| **Paywall** | Nein |
| **Frequenz** | Laufend |
| **Relevanz** | Hoch — NRW (bevölkerungsreichstes Bundesland) |
| **Bemerkungen** | Kein dedizierter Blaulicht-Feed. |

### 2.12 HR (Hessischer Rundfunk)

| Feld | Wert |
|---|---|
| **URL** | `https://www.hessenschau.de/` |
| **RSS-Feed** | `https://www.hessenschau.de/index.rss` |
| **Bot-Zugang** | Eingeschränkt |
| **Paywall** | Nein |
| **Frequenz** | Laufend |
| **Relevanz** | Mittel-hoch — Hessen (Frankfurt-Rhein-Main) |
| **Bemerkungen** | hessenschau.de ist das Nachrichtenportal des HR. |

### 2.13 BR (Bayerischer Rundfunk)

| Feld | Wert |
|---|---|
| **URL** | `https://www.br.de/nachrichten/` |
| **RSS-Feed** | `https://www.br.de/nachrichten/feed/` |
| **Bot-Zugang** | Eingeschränkt |
| **Paywall** | Nein |
| **Frequenz** | Laufend |
| **Relevanz** | Hoch — Bayern |
| **Bemerkungen** | Kein dedizierter Blaulicht-Feed. |

### 2.14 BGH — Pressemitteilungen

| Feld | Wert |
|---|---|
| **URL** | `https://www.bundesgerichtshof.de/` |
| **RSS-Feed** | RSS für Pressemitteilungen verfügbar (Feed-URL wurde Dez 2025 geändert) |
| **Bot-Zugang** | Ja |
| **Paywall** | Nein |
| **Frequenz** | Mehrmals wöchentlich |
| **Relevanz** | Hoch — höchstrichterliche Strafrechtsprechung |
| **Bemerkungen** | Relevant für Revisionen in Kapitalstrafsachen. |

---

## Tier 3 — Bedingt nutzbare Quellen

Paywall, eingeschränkter Bot-Zugang oder niedrigere Frequenz.

### 3.1 Freie Presse (Sachsen)

| Feld | Wert |
|---|---|
| **URL** | `https://www.freiepresse.de/blaulicht-meldungen` |
| **RSS-Feed** | Regionale PHP-Feeds: `freiepresse.de/rss/rss_chemnitz.php`, `rss_erzgebirge.php`, etc. |
| **Bot-Zugang** | Aggressiv blockiert (Cloudflare WAF), RSS evtl. durchlässig |
| **Paywall** | Ja (FP+), aber **Blaulicht-Basismeldungen explizit paywall-frei** |
| **Frequenz** | Hoch — mehrmals täglich |
| **Relevanz** | Hoch — auflagenstärkste Regionalzeitung Deutschlands |
| **Bemerkungen** | Einzige Regionalzeitung, die Blaulicht-Meldungen bewusst frei hält. Beste RSS-Struktur aller Regionalzeitungen. Sachsen nutzt kein presseportal.de (Ausnahme: LKA Sachsen). |

### 3.2 DW (Deutsche Welle) — Germany

| Feld | Wert |
|---|---|
| **URL** | `https://www.dw.com/de/` |
| **RSS-Feed** | `https://rss.dw.com/rdf/rss-en-ger` (englisch, Deutschland-spezifisch) |
| **Bot-Zugang** | Ja |
| **Paywall** | Nein |
| **Frequenz** | Mehrmals täglich |
| **Relevanz** | Mittel — überregional, eher internationale Perspektive |
| **Bemerkungen** | Englischsprachig; nützlich für Fälle mit internationaler Resonanz. |

### 3.3 Berliner Zeitung

| Feld | Wert |
|---|---|
| **URL** | `https://www.berliner-zeitung.de/` |
| **RSS-Feed** | `https://www.berliner-zeitung.de/feed.xml` |
| **Bot-Zugang** | Blockiert (AI-Crawler) |
| **Paywall** | Ja (BLZ+, Metered Paywall) |
| **Frequenz** | Mehrmals täglich |
| **Relevanz** | Mittel-hoch — Berlin-Fokus |
| **Bemerkungen** | Sektions-Feeds verfügbar. Metered Paywall: erste Artikel frei. |

### 3.4 BZ Berlin (Axel Springer)

| Feld | Wert |
|---|---|
| **URL** | `https://www.bz-berlin.de/` |
| **RSS-Feed** | `https://www.bz-berlin.de/feed` |
| **Bot-Zugang** | Unbekannt (Axel-Springer-Ökosystem; OpenAI-Deal, ClaudeBot-Status unklar) |
| **Paywall** | Gemischt (BZ Premium / BILDplus, 35,90 EUR/Monat) |
| **Frequenz** | Laufend (24-Stunden-Ticker) |
| **Relevanz** | Mittel — Berliner Boulevardjournalismus, Rubrik „Tatort Berlin" |
| **Bemerkungen** | Eigene Social-Media-Präsenz @BZPolizei. |

### 3.5 Tagesspiegel

| Feld | Wert |
|---|---|
| **URL** | `https://www.tagesspiegel.de/` |
| **RSS-Feed** | RSS verfügbar |
| **Bot-Zugang** | Blockiert |
| **Paywall** | Ja (T+) |
| **Frequenz** | Mehrmals täglich |
| **Relevanz** | Mittel-hoch — Berlin-Fokus, Qualitätsjournalismus |
| **Bemerkungen** | headline_only-Modus. |

### 3.6 WAZ / Funke Mediengruppe

| Feld | Wert |
|---|---|
| **URL** | `https://www.waz.de/` |
| **RSS-Feed** | Legacy-Feed möglich (Funke-Medien haben RSS weitgehend eingestellt) |
| **Bot-Zugang** | Blockiert (Funke blockiert branchenweit AI-Bots) |
| **Paywall** | Ja (WAZ+) |
| **Frequenz** | Mehrmals täglich |
| **Relevanz** | Mittel-hoch — NRW/Ruhrgebiet |
| **Bemerkungen** | Funke-Titel (WAZ, Hamburger Abendblatt, Berliner Morgenpost, Thüringer Allgemeine) teilen dieselben Einschränkungen. Kein RSS, strenge Bot-Blockade, Paywall. Für automatisierten Abruf ungeeignet. |

### 3.7 stern Crime

| Feld | Wert |
|---|---|
| **URL** | `https://www.stern.de/panorama/stern-crime/` |
| **RSS-Feed** | Podcast: `https://rss.art19.com/stern-crime-spurensuche` |
| **Bot-Zugang** | Eingeschränkt |
| **Paywall** | Ja (stern+) für Artikel; Podcast frei |
| **Frequenz** | Podcast: 2-wöchentlich; Artikel: mehrmals wöchentlich |
| **Relevanz** | Mittel — True-Crime-Fokus, aber oft historische Fälle |
| **Bemerkungen** | Podcast-RSS als primärer Kanal; Artikel hinter stern+-Paywall. |

### 3.8 ZEIT Verbrechen

| Feld | Wert |
|---|---|
| **URL** | `https://www.zeit.de/serie/verbrechen` |
| **RSS-Feed** | Podcast: `https://feeds.simplecast.com/dnJhzmyN` |
| **Bot-Zugang** | Eingeschränkt |
| **Paywall** | Ja (Z+) für Artikel; Podcast frei |
| **Frequenz** | Podcast: 2-wöchentlich |
| **Relevanz** | Mittel — Vertiefung einzelner Fälle |
| **Bemerkungen** | Sabine Rückert (ZEIT-Vizechefin) + Andreas Sentker. Podcast-RSS nutzbar. |

### 3.9 beck-aktuell

| Feld | Wert |
|---|---|
| **URL** | `https://rsw.beck.de/aktuell/` |
| **RSS-Feed** | Kein bestätigter RSS |
| **Bot-Zugang** | Unbekannt |
| **Paywall** | Freemium (Basis frei, beckONLINE für Volltext) |
| **Frequenz** | Täglich |
| **Relevanz** | Hoch — juristische Fachnachrichten |
| **Bemerkungen** | Wichtigste juristische Nachrichtenquelle Deutschlands, aber RSS-Situation unklar. Alternative: LTO.de (Tier 1). |

---

## Tier 4 — Ergänzende / Spezialquellen

### 4.1 ÖR-Investigativformate

| Sendung | Sender | RSS-Feed | Frequenz | Relevanz |
|---|---|---|---|---|
| **Kontraste** | RBB/ARD | ARD Mediathek RSS (docID 431796) | 3-wöchentlich | Mittel |
| **Report Mainz** | SWR/ARD | SWR-General-Feeds | 3-wöchentlich | Mittel-hoch |
| **Monitor** | WDR/ARD | `https://www1.wdr.de/daserste/monitor/index-rss.xml` | 3-wöchentlich | Mittel |
| **Panorama** | NDR/ARD | NDR-Feeds | 3-wöchentlich | Mittel |

### 4.2 Gerichtsentscheidungen

| Quelle | URL | RSS | Paywall | Bemerkungen |
|---|---|---|---|---|
| **openjur.de** | `https://openjur.de/` | Nein | Nein | Freie Urteilsdatenbank; blockiert Bots |
| **dejure.org** | `https://dejure.org/` | Nein | Nein | Verlinkt BGH/BVerfG-Entscheidungen; blockiert Bots |
| **rechtsprechung-im-internet.de** | `https://www.rechtsprechung-im-internet.de/` | Nein | Nein | Offizielle Datenbank des Bundes; frei |

### 4.3 Kriminologische Fachquellen

| Quelle | URL | Relevanz | Bemerkungen |
|---|---|---|---|
| **KrimZ** (Kriminologische Zentralstelle) | `https://www.krimz.de/` | Hoch | Forschungsberichte zur Kriminalitätsentwicklung |
| **KFN** (Kriminologisches Forschungsinstitut Niedersachsen) | `https://kfn.de/` | Hoch | Viktimisierungssurveys, Dunkelfelddaten |
| **Destatis** (Statistisches Bundesamt) | `https://www.destatis.de/` | Mittel | Justizstatistiken |

### 4.4 Regionale Besonderheiten

| Bundesland | Besonderheit |
|---|---|
| **Sachsen** | Nutzt NICHT presseportal.de. Eigene Plattform: `medienservice.sachsen.de` (Registrierung erforderlich). Ausnahme: LKA Sachsen ist auf presseportal.de. Freie Presse (freiepresse.de) als Blaulicht-Ersatz. |
| **Bayern** | presseportal.de wird genutzt; zusätzlich eigene Polizei-Website `polizei.bayern.de`. |
| **RLP** | 39 Dienststellen-IDs auf presseportal.de (siehe Abschnitt 6). Eigene Website `polizei.rlp.de` hat RSS zugunsten Newsletter eingestellt. |

---

## Presseportal.de — Dienststellen-IDs nach Bundesland

RSS-Feed-Muster: `https://www.presseportal.de/rss/dienststelle_{ID}.rss2`
Bundesland-Feed: `https://www.presseportal.de/rss/polizei/laender/{NR}.rss2`

### Rheinland-Pfalz (Länder-Nr. 10) — 39 IDs

**Polizeipräsidien:**

| ID | Dienststelle | ~Meldungen/Tag |
|---|---|---|
| 117708 | PP Mainz | 2,8 |
| 117696 | PP Rheinpfalz | 3,8 |
| 117715 | PP Koblenz | 1,1 |
| 117701 | PP Trier | 1,2 |
| 117683 | PP Westpfalz | 1,4 |
| 117719 | PP Einsatz, Logistik u. Technik | 3,2 |

**Polizeidirektionen:**

| ID | Dienststelle | ~Meldungen/Tag |
|---|---|---|
| 117686 | PD Landau | 6,1 |
| 117709 | PD Neuwied/Rhein | 3,6 |
| 117697 | PD Wittlich | 3,4 |
| 117688 | PD Ludwigshafen | 3,1 |
| 117687 | PD Neustadt/Weinstr. | 3,1 |
| 117679 | PD Kaiserslautern | 3,0 |
| 117698 | PD Trier | 2,8 |
| 117710 | PD Montabaur | 2,1 |
| 117712 | PD Koblenz | 1,5 |
| 117711 | PD Mayen | 1,3 |
| 117702 | PD Worms | 1,0 |
| 117703 | PD Bad Kreuznach | 0,9 |
| 117677 | PD Pirmasens | 0,7 |
| 117705 | PD Mainz | 0,6 |

**Verkehrsdirektionen:**

| ID | Dienststelle | ~Meldungen/Tag |
|---|---|---|
| 117706 | VD Mainz | 10,2 |
| 117713 | VD Koblenz | 7,9 |

**Landeskriminalamt + Bundespolizei:**

| ID | Dienststelle | ~Meldungen/Tag |
|---|---|---|
| 29763 | LKA Rheinland-Pfalz | 1,9 |
| 70138 | BPOL-Inspektion Trier | 5,1 |
| 70137 | BPOL-Direktion Koblenz | 0,5 |
| 70139 | BPOL-Inspektion Kaiserslautern | 0,3 |

**Polizeiinspektionen (eigene presseportal-Newsrooms):**

| ID | Dienststelle |
|---|---|
| 131671 | PI Ingelheim |
| 131672 | PI Oppenheim |
| 131673 | PI Alzey |
| 131675 | PI Bingen |
| 131677 | PI Kirn |
| 178876 | PI Landstuhl |
| 178877 | PI Lauterecken |
| 178878 | PI Rockenhausen |
| 178879 | PI Kusel |
| 178880 | PASt Kaiserslautern |
| 178881 | PI Zweibrücken |
| 178882 | PI Dahn |
| 178883 | PI Waldfischbach-Burgalben |

### Weitere Bundesländer (Übersicht der Länder-Nummern)

| Nr. | Bundesland | Bemerkung |
|---|---|---|
| 1 | Baden-Württemberg | ~14 Dienststellen-IDs |
| 2 | Bayern | Polizei nutzt presseportal.de |
| 3 | Berlin | Zusätzlich: berlin.de/polizei (eigenes RSS) |
| 4 | Brandenburg | Eigenes RSS: polizei.brandenburg.de/rss/ |
| 5 | Bremen | |
| 6 | Hamburg | |
| 7 | Hessen | ~18+ Dienststellen-IDs |
| 8 | Mecklenburg-Vorpommern | |
| 9 | Nordrhein-Westfalen | ~21+ Dienststellen-IDs (höchste Dichte) |
| 10 | Rheinland-Pfalz | 39 IDs (s. o.) |
| 11 | Saarland | ~14 Dienststellen-IDs |
| 12 | Sachsen | **Nutzt presseportal.de NICHT** (nur LKA). Eigene Plattform. |
| 13 | Sachsen-Anhalt | |
| 14 | Schleswig-Holstein | |
| 15 | Thüringen | ~8 Dienststellen-IDs |
| 16 | Niedersachsen | |

---

## Google News RSS — Optimale Suchbegriffe

Getestete Suchbegriffe, sortiert nach Relevanz-zu-Rauschen-Verhältnis:

### Empfohlen (niedrigstes Rauschen)

| Suchbegriff | Feed-URL | Bemerkungen |
|---|---|---|
| `Tötungsdelikt` | `https://news.google.com/rss/search?q=T%C3%B6tungsdelikt&hl=de&gl=DE&ceid=DE:de` | Präzise, fast nur relevante Treffer |
| `Mordversuch` | `https://news.google.com/rss/search?q=Mordversuch&hl=de&gl=DE&ceid=DE:de` | Hohe Präzision |
| `Messerangriff` | `https://news.google.com/rss/search?q=Messerangriff&hl=de&gl=DE&ceid=DE:de` | Eng gefasst, relevant |
| `Messerstecherei` | `https://news.google.com/rss/search?q=Messerstecherei&hl=de&gl=DE&ceid=DE:de` | Ergänzung zu Messerangriff |
| `Totschlag Urteil` | `https://news.google.com/rss/search?q=Totschlag+Urteil&hl=de&gl=DE&ceid=DE:de` | Justiz-Perspektive |

### Bedingt empfohlen (mehr Rauschen)

| Suchbegriff | Feed-URL | Bemerkungen |
|---|---|---|
| `Mordprozess` | `https://news.google.com/rss/search?q=Mordprozess&hl=de&gl=DE&ceid=DE:de` | Gut, aber enthält auch historische Verfahren |
| `Gewaltverbrechen` | `https://news.google.com/rss/search?q=Gewaltverbrechen&hl=de&gl=DE&ceid=DE:de` | Breiter; Relevance-Score filtert |
| `Schwere Körperverletzung` | `https://news.google.com/rss/search?q=Schwere+K%C3%B6rperverletzung&hl=de&gl=DE&ceid=DE:de` | Juristisch präzise |

### Nicht empfohlen (zu viel Rauschen)

| Suchbegriff | Grund |
|---|---|
| `Kriminalität` | Zu breit — Politik, Statistik, Kommentare |
| `Blaulicht Polizei` | Enthält Verkehrsunfälle, Vermisste, Brände |
| `Mord` | Enthält Krimi-Rezensionen, Tatort-Besprechungen, Metaphern |
| `Verbrechen` | Politische Rhetorik, Film/Buch-Rezensionen |

---

## Konsolidierte Top-Quellen-Empfehlung

### Primärquellen für die Pipeline (Empfohlene `news-sources.json`-Einträge)

Sortiert nach Zuverlässigkeit und Relevanz:

| Prio | Quelle | Typ | Paywall | Begründung |
|---|---|---|---|---|
| **1** | presseportal.de/blaulicht (Bundesland-Feeds) | `rss` | Nein | Offizielle Polizeimeldungen, höchste Faktenbasis, bundesweit |
| **2** | Google News RSS (Tötungsdelikt, Mordversuch, Messerangriff) | `rss` | Nein | Breite Abdeckung, aggregiert alle Quellen, konfigurierbar |
| **3** | tagesschau.de | `rss` | Nein | Höchste redaktionelle Qualität, nur signifikante Fälle |
| **4** | BKA Pressemitteilungen | `rss` | Nein | Offizielle Statistik und Fahndungen |
| **5** | Polizei Berlin | `rss` | Nein | Direkter Behörden-Feed, Berlin als Brennpunkt |
| **6** | LTO.de | `rss` | Freemium | Juristische Einordnung von Strafverfahren |
| **7** | Correctiv | `rss` | Nein | Investigative Hintergründe |
| **8** | FAZ Kriminalität | `rss` | Teilw. | Dedizierter Kriminalitäts-Feed, headline_only |
| **9** | Spiegel Justiz | `rss` | Teilw. | Dedizierter Justiz-Feed, headline_only |
| **10** | BDK | `rss` | Nein | Fachperspektive der Kriminalbeamten |

### Backup-Alternativen

| Primärquelle | Backup bei Ausfall |
|---|---|
| presseportal.de | Polizei-Direktwebsites (berlin.de/polizei, polizei.brandenburg.de, etc.) |
| Google News RSS | t-online.de/kriminalität + Focus Panorama (scrape) |
| tagesschau.de | ZDF Nachrichten RSS |
| BKA | BMI RSS |
| LTO.de | beck-aktuell (kein RSS → scrape) |
| FAZ Kriminalität | ntv + Focus (kein Paywall) |
| Spiegel Justiz | ZEIT (Paywall → headline_only) |

### Pipeline-Konfiguration: Empfohlene Schwellenwerte

| Parameter | Wert | Begründung |
|---|---|---|
| `RELEVANCE_THRESHOLD` | 8 | Höher als News-Pipeline (7), da Tatstruktur-Anomalie schwerer zu erkennen |
| `MAX_NEW_PER_RUN` | 5 | Weniger Items/Lauf; Qualität > Quantität |
| `DEDUP_TTL_DAYS` | 30 | Längere Sperre, da strafrechtliche Verfahren über Wochen laufen |
| Pressespiegel-Minimum | 9 | headline_only-Quellen brauchen höheren Score |

### Nicht empfohlene Quellen

| Quelle | Grund |
|---|---|
| BILD / BZ | Boulevardjournalismus; hohe Fehlerquote bei Fakten; Paywall |
| Funke-Medien (WAZ, TA, HAZ, Morgenpost) | Kein RSS, strenge Bot-Blockade, Paywall — dreifache Barriere |
| IPPEN-Netzwerk (Merkur, TZ, FR, FNP) | Blockiert ClaudeBot/anthropic-ai explizit |
| Statista Kriminalität | Paywall, kein RSS — BKA PKS direkt nutzen |
| True-Crime-Portale (kriminalfaelle.com etc.) | Entertainmentfokus, keine strukturelle Analyse |

---

## Anhang: Regionale Ostdeutschland-Quellen

### Sachsen

| Quelle | RSS | Paywall | Bemerkungen |
|---|---|---|---|
| Freie Presse | Ja (regional) | FP+ (Blaulicht frei) | Auflagenstärkste Regionalzeitung DE |
| Sächsische Zeitung | Veraltet | Ja (hart, SZ+) | Madsack-Übernahme 2024, CMS-Wechsel |
| DNN | Legacy + Arc XP | Ja (Zeitwall 1h) | `dnn.de/arc/outboundfeeds/rss` |
| LVZ | Ja (Arc XP) | Ja (LVZ+) | `lvz.de/arc/outboundfeeds/rss` |
| MDR Sachsen | Ja | Nein | Kein dedizierter Blaulicht-Feed |

### Thüringen

| Quelle | RSS | Paywall | Bemerkungen |
|---|---|---|---|
| Thüringer Allgemeine | Kein Feed | Ja (TA+) | Funke Medien — für Automation ungeeignet |
| MDR Thüringen | Ja + Podcast | Nein | **Polizeibericht-Podcast 2x/Tag** (Alleinstellungsmerkmal) |

### Sachsen-Anhalt

| Quelle | RSS | Paywall | Bemerkungen |
|---|---|---|---|
| Volksstimme | Ja (profilbasiert) | Ja (Zeitwall 1h) | Madsack; kein dedizierter Blaulicht-Feed |
| MDR Sachsen-Anhalt | Ja | Nein | Geringere Polizei-Meldungsdichte |

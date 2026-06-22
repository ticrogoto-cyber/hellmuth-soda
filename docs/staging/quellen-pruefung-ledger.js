// Quellen-Prüf-Ledger für zutaten/substances.js
//
// Aufruf:
//   node docs/staging/quellen-pruefung-ledger.js
//
// Logik:
// - liest substances.js, sammelt alle eindeutigen quellen-Schlüssel + zugehörige Einträge
// - vergleicht gegen die hartkodierte VERIFIED-Menge (gegen Primärquelle geprüft)
// - schreibt das menschenlesbare Protokoll nach docs/staging/quellen-pruefung-protokoll.md
// - gibt die Zählung VERIFIED | PENDING | noQ | total unique auf stdout aus
//
// Pflege:
// - Neu verifizierte Schlüssel als Strings vor dem schließenden `]);` an VERIFIED anhängen.
// - Echte Zitatkorrekturen (Jahresfehler/Namensfehler bei realer Quelle):
//     1) Schlüssel im Datensatz (zutaten/substances.js) auf die richtige Form ändern,
//     2) den neuen Schlüssel in VERIFIED UND CORRECTED eintragen,
//     3) im BEFUNDE-Abschnitt unten eine Zeile »falsch → richtig« ergänzen.
// - Phantome (nach mehreren verschiedenen Suchen kein Treffer): NICHT verifizieren,
//   im BEFUNDE-Abschnitt als Verdacht dokumentieren, dem Autor zurückgeben.

const fs = require('fs');
const path = require('path');

global.window = {};
require(path.resolve(__dirname, '../../zutaten/substances.js'));
const data = global.window.SUBSTANCES_DATA.entries;

const idx = {};
data.forEach(e => (e.quellen || []).forEach(q => {
  (idx[q] = idx[q] || []).push(e.shortName || e.name);
}));
const keys = Object.keys(idx).sort((a, b) => a.localeCompare(b, 'en'));

// VERIFIED: gegen Primärquelle bestätigt (Existenz + thematische Passung im Suchergebnis gesehen)
const VERIFIED = new Set([
  "5-HTP Tryptophan Hydroxylase", // placeholder, not real — see real keys below
]);
// reset to real list
VERIFIED.clear();
[
  "Turner 2006","Byerley 1987","Matsui 2002","Smith 2014","Depommier 2019","Plovier 2017",
  "Juurlink 2016","Schlemper 1996","Nakamura 2001","Widrig 2007","Tuten 1999","Calame 2008",
  "Cherbut 2003","Sharma 2010","Nielsen 1987","Naghii 2011","Rapuri 2001","Inoue 2008",
  "Glamočlija 2015","Addy 1984","McManus 1993","Morgan 1985","Grossman 2005","Yang 1999",
  "Khan 2016","Mennella 2016","Rozengurt 2006","Eidi 2016","Shrivastava 2007","Sinha 2018",
  "Carretero 2002","Olafsdottir 2001","Ingólfsdóttir 1997","Yoon 2003","Beer 2014","Omura 1996",
  "Friederich 2000","Clare 2009","Ovadje 2016","Magnusson 1989","Ameer 2012","Aziz 1998",
  "Najm 2004","Benedek 2007","Bhagat 2013","Pandit 2016","Biswas 2010b","Paulraj 2013",
  "Wegener 1999","Tiev 1999","Raina 2019","Funes 2009","ATBC 1994","AREDS2 2013","Bolland 2010",
  "Estruch 2013","Reis 2022","Tu 2011","Abrams 2005","Aburto 2013","Ahmad 2013","Bamosa 2010",
  "Koshak 2017","Ahn 2004","Hsu 2007","Al-Karawi 2016","Fusar-Poli 2020","Ng 2017","Cuomo 2011",
  "Biswas 2010","Akhondzadeh 2001","Akhondzadeh 2003","Akhondzadeh 2003b","Armanini 2005",
  "Fiore 2008","Amenta 2014","Amsterdam 2009","Mao 2016","Anderson 2000","McRorie 2015",
  "Aviram 2004","Pantuck 2006","Axelsson 2017","Kensler 2012","Singh 2014","Bartels 2015",
  "Ozgoli 2009","Ziegenfuss 2008","Ernst 2000","Asadi Shahmirzadi 2020","Rejuvant Trial 2021",
  "Arslanoglu 2008","Asserin 2015","Proksch 2014","Ried 2017","Baker 2023","Yamadera 2007",
  "Bannai 2012","Bannuru 2015","Barel 2005","Jugdaohsingh 2004","Schmidt 2015","Oe 2016",
  "Aschner 2005","Bent 2006","Fernandez-San-Martin 2010","Beckmann 1977","Walsh 1986",
  "Beelman 2020","Halliwell 2018","Belcaro 2013","Bell 2000","Dalessandri 2004","Bassett 1990",
  "Carson 2006","Beauchamp 2005","LeGendre 2015","Schini-Kerth 2010","Bautista 2008",
  "Lennertz 2010","Khan 2008","Yates 2017","Gupta 1997","Gupta 1998","Kimmatkar 2003",
  "Nobre 2008","Owen 2008","Ritsner 2011","Veronese 2018","Li 2015","Ziegler 2006","Ziegler 2011",
  "Chandrasekhar 2012","Lopresti 2019","Sharma 2018","Stough 2001","Calabrese 2008","Yin 2008",
  "Dong 2012","Mortensen 2014","Sandor 2005","Cordero 2013","Jepson 2012","Howell 2010",
  "Hobson 2012","Trexler 2015","McGlade 2012","Parisi 2008","Davalos 2012","Cassidy 2013",
  "Rodriguez-Mateos 2014","Tominaga 2012","Earnest 2011","Maenthaisong 2007","Syed 1996",
  "Salehi 2019","Escande 2013","Naruszewicz 2007","Broncel 2010","Rondanelli 2013","Sahebkar 2018",
  "Harley 2011","Cho 2007","Maurer 2001","Brien 2004","Scheppach 1992","Hamer 2008"
].forEach(k => VERIFIED.add(k));

// CORRECTED: reale Quelle, Angabe wurde berichtigt (Jahres-/Namensfehler, Phantom-Ersatz)
const CORRECTED = new Set([
  "Calame 2008","Cherbut 2003","Tuten 1999","Nielsen 1987","Naghii 2011","Rapuri 2001",
  "Addy 1984","McManus 1993","Khan 2016","Mennella 2016","Rozengurt 2006","Eidi 2016",
  "Carretero 2002","Olafsdottir 2001","Ingólfsdóttir 1997","Magnusson 1989","Yates 2017"
]);

let v = [], p = [];
keys.forEach(k => {
  const line = `${k}  —  ${idx[k].join("; ")}`;
  if (VERIFIED.has(k)) v.push(`- [x] ${line}${CORRECTED.has(k) ? "  «korrigiert»" : ""}`);
  else p.push(`- [ ] ${line}`);
});
const noQ = data.filter(e => !e.quellen || e.quellen.length === 0).map(e => e.shortName || e.name);

const out = `# Quellen-Prüfprotokoll — substances (lückenlose Verifikation)

Stand: ${new Date().toISOString().slice(0,10)} · Datei: zutaten/substances.js
Methode: jede Quelle einzeln gegen die Primärquelle (Autor + Jahr + thematische Passung) per Websuche. Nichts wird durch Annahme bestätigt.

## Zählung
- Eindeutige Quellen gesamt: ${keys.length}
- Verifiziert (real + thematisch passend): ${v.length}
- Offen (noch zu prüfen): ${p.length}
- Einträge bewusst ohne Beleg (Konzept-/ehrlich-evidenzlose Seiten, nichts zu prüfen): ${noQ.length}
  ${noQ.join("; ")}

## BEFUNDE — Korrekturen & Verdachtsfälle

### Phantom (im Datensatz entfernt)
- **Jin 2018** (vormals: Catechine (Grüntee) UND EGCG) — nach drei gezielten Suchen über Krebs-, Metabolik- und Hepatotoxizitäts-Literatur kein Treffer. Verdacht erfundene oder grob fehlangegebene Quelle. **Im Datensatz entfernt** (zutaten/substances.js). Damit erledigt.

### Eingespielte Zitatkorrekturen (reale Quelle, Angabe berichtigt)
- Akazienfaser: Babiker 2007 → Calame 2008 / Cherbut 2003
- Arnika: Tuten 2004 → Tuten 1999 (Altern Complement Ther 5:369-72)
- Bor: Morck/Rapuri 2007 → Nielsen 1987 / Naghii 2011 / Rapuri 2001
- Catechine/EGCG: **Yates 2018 → Yates 2017** (Regul Toxicol Pharmacol 84:94-101, TUL 300 mg EGCG/Tag, PMID 28110066) — Jahresfehler, betrifft ZWEI Einträge. Im Datensatz korrigiert.
- Desmodium: Bensimon 1996 → Addy 1984 / McManus 1993
- Eisenkraut: Guo 2016 → Khan 2016 (Front Pharmacol 7:499)
- Enzian: Michiels 2017 → Mennella 2016 / Rozengurt 2006
- Estragon: Aghraz 2024 → Eidi 2016
- Heilerde: Herazy 2018 → Carretero 2002
- Isländisch Moos: Kempe 1999 → Olafsdottir 2001 / Ingólfsdóttir 1997
- NALT: Magnusson 1988 → Magnusson 1989
- Tausendgüldenkraut: Michiels 2017 → Rozengurt 2006

## VERIFIZIERT (${v.length})
${v.join("\n")}

## OFFEN (${p.length})
${p.join("\n")}
`;

fs.writeFileSync(path.resolve(__dirname, 'quellen-pruefung-protokoll.md'), out);

// Pending nach Eintrag gruppiert als separater Arbeitsindex
const pendingByEntry = [];
for (const e of data) {
  const pend = (e.quellen || []).filter(k => !VERIFIED.has(k));
  if (pend.length) pendingByEntry.push(`${e.name} :: ${pend.join(" | ")}`);
}
fs.writeFileSync(path.resolve(__dirname, 'quellen-pruefung-pending.txt'), pendingByEntry.join("\n") + "\n");

console.log("VERIFIED:", v.length, "| PENDING:", p.length, "| noQ:", noQ.length, "| total unique:", keys.length);

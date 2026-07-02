// Cluster-Beschriftung für den Latent Space: k-means auf den One-Hot-
// Merkmalsvektoren (nicht auf den 3D-Koordinaten), k aus 4 bis 6 nach
// Silhouetten-Score. Pro Cluster ein Label aus den dominanten,
// distinktiven Merkmalen. Deterministisch durch geseedeten PRNG.

import { MERKMALE_ENUMS } from './classify-nova.mjs';
import { encodeMerkmale } from './umap-nova.mjs';

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const dist2 = (a, b) => {
  let s = 0;
  for (let i = 0; i < a.length; i++) { const d = a[i] - b[i]; s += d * d; }
  return s;
};

function kmeans(vectors, k, rand) {
  // k-means++-Initialisierung
  const n = vectors.length;
  const centroids = [vectors[Math.floor(rand() * n)].slice()];
  while (centroids.length < k) {
    const d = vectors.map((v) => Math.min(...centroids.map((c) => dist2(v, c))));
    const sum = d.reduce((a, b) => a + b, 0);
    let r = rand() * sum;
    let idx = 0;
    for (; idx < n - 1 && r > d[idx]; idx++) r -= d[idx];
    centroids.push(vectors[idx].slice());
  }
  const assign = new Array(n).fill(0);
  for (let iter = 0; iter < 60; iter++) {
    let changed = false;
    for (let i = 0; i < n; i++) {
      let best = 0;
      let bestD = Infinity;
      for (let c = 0; c < k; c++) {
        const d = dist2(vectors[i], centroids[c]);
        if (d < bestD) { bestD = d; best = c; }
      }
      if (assign[i] !== best) { assign[i] = best; changed = true; }
    }
    const sums = Array.from({ length: k }, () => new Array(vectors[0].length).fill(0));
    const counts = new Array(k).fill(0);
    for (let i = 0; i < n; i++) {
      counts[assign[i]] += 1;
      const v = vectors[i];
      const s = sums[assign[i]];
      for (let d = 0; d < v.length; d++) s[d] += v[d];
    }
    for (let c = 0; c < k; c++) {
      if (!counts[c]) continue; // leerer Cluster: Zentroid unverändert
      for (let d = 0; d < sums[c].length; d++) centroids[c][d] = sums[c][d] / counts[c];
    }
    if (!changed) break;
  }
  return { assign, centroids };
}

function silhouette(vectors, assign, k) {
  const n = vectors.length;
  const byCluster = Array.from({ length: k }, () => []);
  assign.forEach((c, i) => byCluster[c].push(i));
  let total = 0;
  let counted = 0;
  for (let i = 0; i < n; i++) {
    const own = byCluster[assign[i]];
    if (own.length <= 1) continue;
    let a = 0;
    for (const j of own) if (j !== i) a += Math.sqrt(dist2(vectors[i], vectors[j]));
    a /= own.length - 1;
    let b = Infinity;
    for (let c = 0; c < k; c++) {
      if (c === assign[i] || !byCluster[c].length) continue;
      let m = 0;
      for (const j of byCluster[c]) m += Math.sqrt(dist2(vectors[i], vectors[j]));
      b = Math.min(b, m / byCluster[c].length);
    }
    total += (b - a) / Math.max(a, b);
    counted += 1;
  }
  return counted ? total / counted : -1;
}

// Kurzformen für Labels
const SHORT = {
  'Machete-Hiebwaffe': 'Hiebwaffe',
  'ÖPNV-Bahn': 'ÖPNV',
  'Volksfest-Veranstaltung': 'Menschenmenge',
  'öffentlicher Straßenraum': 'Straßenraum',
  'Klinik-Rettungsdienst': 'Klinik',
  'Bildungseinrichtung': 'Schule',
  'Wohnumfeld': 'Wohnumfeld',
  'Kinder-Jugendliche': 'Minderjährige',
  'Personal-Beschäftigte': 'Beschäftigte',
  'Privatpersonen-Beziehungsumfeld': 'Beziehungsumfeld',
  'Mehrere Gruppen': 'Mehrere Gruppen',
  'Gruppenbegehung': 'Gruppengewalt',
};
const short = (v) => SHORT[v] || v;

/**
 * Label eines Clusters aus dominanten, distinktiven Merkmalen: je Dimension
 * die Prävalenz im Cluster minus Gesamtprävalenz; die zwei stärksten,
 * hinreichend dominanten Ausprägungen bilden das Label. Systemversagen
 * (egal welcher Art) zählt gebündelt.
 */
function clusterLabel(memberMerkmale, allMerkmale) {
  const candidates = [];
  const prevalence = (list, pred) => list.filter(pred).length / list.length;

  for (const dim of ['tatmittel', 'tatkontext', 'betroffene']) {
    for (const val of MERKMALE_ENUMS[dim]) {
      if (val === 'Sonstiges') continue;
      const inC = prevalence(memberMerkmale, (m) => m[dim] === val);
      if (inC < 0.4) continue;
      const overall = prevalence(allMerkmale, (m) => m[dim] === val);
      candidates.push({ text: short(val), score: inC - overall, inC });
    }
  }
  // Systemversagen gebündelt
  const svIn = prevalence(memberMerkmale, (m) => m.systemversagen !== 'keines');
  if (svIn >= 0.5) {
    const svAll = prevalence(allMerkmale, (m) => m.systemversagen !== 'keines');
    candidates.push({ text: 'Systemversagen', score: (svIn - svAll) * 1.2, inC: svIn });
  }
  // Gruppenbegehung
  const grIn = prevalence(memberMerkmale, (m) => (m.exzess || []).includes('Gruppenbegehung'));
  if (grIn >= 0.5) {
    const grAll = prevalence(allMerkmale, (m) => (m.exzess || []).includes('Gruppenbegehung'));
    candidates.push({ text: short('Gruppenbegehung'), score: grIn - grAll, inC: grIn });
  }

  candidates.sort((a, b) => b.score - a.score);
  const parts = [];
  for (const c of candidates) {
    if (parts.includes(c.text)) continue;
    parts.push(c.text);
    if (parts.length === 2) break;
  }
  if (!parts.length) return 'Mischcluster';
  return parts.join(' · ');
}

/**
 * Clustert Einträge mit Merkmalen und liefert beschriftete Schwerpunkte.
 * @param {Array<{merkmale?:object}>} records
 * @param {Array<[number,number,number]|null>} coords 3D-Koordinaten je Record
 * @returns {Array<{label:string, center:[number,number,number], count:number}>}
 */
export function computeClusters(records, coords) {
  const idx = [];
  const vectors = [];
  records.forEach((rec, i) => {
    if (rec.merkmale && rec.merkmale.tatmittel && coords[i]) {
      idx.push(i);
      vectors.push(encodeMerkmale(rec.merkmale));
    }
  });
  if (vectors.length < 12) return [];

  let best = null;
  for (const k of [4, 5, 6]) {
    const rand = mulberry32(20260702 + k);
    const { assign } = kmeans(vectors, k, rand);
    const score = silhouette(vectors, assign, k);
    if (!best || score > best.score) best = { k, assign, score };
  }

  const allMerkmale = idx.map((i) => records[i].merkmale);
  const clusters = [];
  for (let c = 0; c < best.k; c++) {
    const members = [];
    best.assign.forEach((a, v) => { if (a === c) members.push(v); });
    if (members.length < 3) continue; // Splitter nicht beschriften
    const center = [0, 0, 0];
    for (const v of members) {
      const p = coords[idx[v]];
      center[0] += p[0]; center[1] += p[1]; center[2] += p[2];
    }
    center[0] /= members.length; center[1] /= members.length; center[2] /= members.length;
    clusters.push({
      label: clusterLabel(members.map((v) => allMerkmale[v]), allMerkmale),
      center: center.map((v) => Number(v.toFixed(4))),
      count: members.length,
    });
  }
  return clusters;
}

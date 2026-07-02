// Latent-Space-Projektion der Nova-Merkmalsvektoren: One-Hot-Encoding der
// kriminologischen Merkmale, UMAP-Reduktion auf 3 Dimensionen. Läuft bei
// jedem Build; deterministisch durch geseedeten PRNG, damit die Punktwolke
// zwischen Builds nicht springt, solange sich der Bestand nicht ändert.

import { UMAP } from 'umap-js';
import { MERKMALE_ENUMS } from './classify-nova.mjs';

// Deterministischer PRNG (mulberry32), fester Seed.
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

/** One-Hot-Vektor eines Merkmale-Objekts (exzess mehrfach, Rest einfach). */
export function encodeMerkmale(m) {
  const vec = [];
  for (const key of ['tatmittel', 'tatkontext', 'betroffene', 'systemversagen']) {
    for (const val of MERKMALE_ENUMS[key]) vec.push(m[key] === val ? 1 : 0);
  }
  const ex = new Set(m.exzess || []);
  for (const val of MERKMALE_ENUMS.exzess) vec.push(ex.has(val) ? 1 : 0);
  return vec;
}

/**
 * Berechnet 3D-Koordinaten für alle Einträge mit Merkmalen.
 * @param {Array<{merkmale?:object}>} records
 * @returns {Array<[number,number,number]|null>} Koordinaten je Record
 *   (zentriert, auf [-1, 1] skaliert), null für Einträge ohne Merkmale.
 */
export function computeLatentCoords(records) {
  const idx = [];
  const vectors = [];
  records.forEach((rec, i) => {
    if (rec.merkmale && rec.merkmale.tatmittel) {
      idx.push(i);
      vectors.push(encodeMerkmale(rec.merkmale));
    }
  });
  const out = records.map(() => null);
  if (vectors.length < 4) return out;

  const umap = new UMAP({
    nComponents: 3,
    nNeighbors: Math.min(15, vectors.length - 1),
    minDist: 0.15,
    spread: 1.0,
    random: mulberry32(20260702),
  });
  const embedding = umap.fit(vectors);

  // Zentrieren und isotrop auf [-1, 1] skalieren (eine Skala für alle
  // Achsen, damit die Geometrie der Projektion erhalten bleibt).
  const dims = 3;
  const mean = [0, 0, 0];
  for (const p of embedding) for (let d = 0; d < dims; d++) mean[d] += p[d];
  for (let d = 0; d < dims; d++) mean[d] /= embedding.length;
  let maxAbs = 0;
  const centered = embedding.map((p) => {
    const c = p.map((v, d) => v - mean[d]);
    for (const v of c) maxAbs = Math.max(maxAbs, Math.abs(v));
    return c;
  });
  const scale = maxAbs > 0 ? 1 / maxAbs : 1;
  centered.forEach((c, k) => {
    out[idx[k]] = c.map((v) => Number((v * scale).toFixed(4)));
  });
  return out;
}

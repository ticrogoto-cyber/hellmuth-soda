// ── HELLMUTH · SpatialHash ────────────────────────────────────
// 30-line spatial hash grid for knockback physics queries.

const CELL = 128;

export default class SpatialHash {
  constructor() {
    this.cells = new Map();
  }

  _key(px, py) {
    return ((px / CELL) | 0) + ',' + ((py / CELL) | 0);
  }

  clear() {
    this.cells.clear();
  }

  insert(item) {
    const k = this._key(item.x, item.y);
    let bucket = this.cells.get(k);
    if (!bucket) { bucket = []; this.cells.set(k, bucket); }
    bucket.push(item);
  }

  queryRadius(px, py, r) {
    const results = [];
    const cr = Math.ceil(r / CELL);
    const cx0 = (px / CELL) | 0;
    const cy0 = (py / CELL) | 0;
    const rSq = r * r;
    for (let dy = -cr; dy <= cr; dy++) {
      for (let dx = -cr; dx <= cr; dx++) {
        const bucket = this.cells.get((cx0 + dx) + ',' + (cy0 + dy));
        if (!bucket) continue;
        for (const it of bucket) {
          const ddx = it.x - px, ddy = it.y - py;
          if (ddx * ddx + ddy * ddy <= rSq) results.push(it);
        }
      }
    }
    return results;
  }
}

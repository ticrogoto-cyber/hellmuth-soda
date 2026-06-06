// Winziger, abhängigkeitsfreier Logger. Schreibt nach stderr, damit stdout
// für maschinenlesbare Ausgaben (z. B. den Feed-Report) frei bleibt.

const ts = () => new Date().toISOString();

export const log = {
  info: (...a) => console.error(`[${ts()}] [info]`, ...a),
  warn: (...a) => console.error(`[${ts()}] [warn]`, ...a),
  error: (...a) => console.error(`[${ts()}] [error]`, ...a),
  step: (name) => console.error(`\n[${ts()}] === ${name} ===`),
};

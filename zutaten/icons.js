// Substanz-Index Icons
// window.SUBSTANCE_ICONS = { bySlug: {...}, byCategory: {...} }
//
// Die zehn bySlug-Icons stammen verbatim aus substance-icons-prototype.jsx und
// dürfen nicht verändert werden. Die byCategory-Fallbacks sind Platzhalter im
// gleichen Stil: viewBox 0 0 200 200, stroke-width 1.5, currentColor, fill none.

(function () {
  const bySlug = {

    // ── Prototyp verbatim ─────────────────────────────────────

    'hopfen': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="100" cy="78" rx="22" ry="14" />
      <ellipse cx="100" cy="92" rx="26" ry="14" />
      <ellipse cx="100" cy="106" rx="28" ry="14" />
      <ellipse cx="100" cy="120" rx="26" ry="14" />
      <ellipse cx="100" cy="134" rx="20" ry="12" />
      <ellipse cx="100" cy="146" rx="12" ry="8" />
      <path d="M100 65 L100 42" />
      <path d="M100 42 Q85 35 78 28" />
      <path d="M100 42 Q115 35 122 28" />
    </svg>`,

    'spilanthol': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="100" cy="85" r="12" />
      <circle cx="100" cy="85" r="6" opacity="0.5" />
      ${Array.from({length: 12}, (_, i) => {
        const a = (i * 30) * Math.PI / 180;
        const x1 = 100 + Math.cos(a) * 14;
        const y1 = 85 + Math.sin(a) * 14;
        const x2 = 100 + Math.cos(a) * 30;
        const y2 = 85 + Math.sin(a) * 30;
        return `<ellipse cx="${(x1+x2)/2}" cy="${(y1+y2)/2}" rx="4" ry="9" transform="rotate(${i*30} ${(x1+x2)/2} ${(y1+y2)/2})" />`;
      }).join('')}
      <path d="M100 115 Q100 140 95 165" />
      <path d="M95 145 Q80 138 70 142" />
    </svg>`,

    'nac-n-acetylcystein': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="80" cy="70" r="10" />
      <circle cx="120" cy="70" r="10" />
      <circle cx="100" cy="100" r="10" />
      <circle cx="70" cy="125" r="10" />
      <circle cx="130" cy="125" r="10" />
      <circle cx="100" cy="150" r="10" />
      <line x1="88" y1="75" x2="93" y2="93" />
      <line x1="112" y1="75" x2="107" y2="93" />
      <line x1="93" y1="107" x2="78" y2="118" />
      <line x1="107" y1="107" x2="122" y2="118" />
      <line x1="78" y1="132" x2="93" y2="145" />
      <line x1="122" y1="132" x2="107" y2="145" />
      <circle cx="80" cy="70" r="4" fill="currentColor" opacity="0.2" />
      <circle cx="100" cy="150" r="4" fill="currentColor" opacity="0.2" />
    </svg>`,

    'brennnessel': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M100 170 L100 75" />
      <path d="M100 75 Q95 45 80 35 Q92 40 100 35 Q108 40 120 35 Q105 45 100 75" />
      <path d="M100 100 Q80 85 68 78" />
      <path d="M68 78 Q75 82 80 75 Q85 82 92 78 Q82 88 68 78" />
      <path d="M100 100 Q120 85 132 78" />
      <path d="M132 78 Q125 82 120 75 Q115 82 108 78 Q118 88 132 78" />
      <path d="M100 130 Q82 118 72 112" />
      <path d="M72 112 Q78 115 82 110 Q85 116 92 113 Q83 120 72 112" />
      <path d="M100 130 Q118 118 128 112" />
      <path d="M128 112 Q122 115 118 110 Q115 116 108 113 Q117 120 128 112" />
      <line x1="88" y1="55" x2="85" y2="48" opacity="0.4" />
      <line x1="112" y1="55" x2="115" y2="48" opacity="0.4" />
    </svg>`,

    'ingwer': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M90 80 Q85 60 75 50 Q82 55 90 52 Q88 60 90 80" />
      <path d="M85 95 Q55 85 45 75 Q58 82 60 72 Q65 80 85 95" />
      <path d="M115 90 Q140 75 155 72 Q142 80 148 88 Q138 82 115 90" />
      <path d="M105 110 Q115 135 110 150 Q108 138 102 142 Q105 130 105 110" />
      <path d="M90 105 Q70 115 58 125 Q68 118 65 128 Q75 120 90 105" />
      <ellipse cx="100" cy="95" rx="22" ry="18" />
      <path d="M85 90 Q100 82 115 90" opacity="0.3" />
      <path d="M88 100 Q100 105 112 100" opacity="0.3" />
    </svg>`,

    'ashwagandha': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="100" cy="95" r="16" />
      <circle cx="100" cy="95" r="10" opacity="0.4" />
      <path d="M100 79 L100 50" />
      <path d="M100 50 Q85 42 78 45" />
      <path d="M100 50 Q115 42 122 45" />
      <path d="M84 92 Q70 85 60 88" />
      <path d="M60 88 Q55 80 52 72 Q60 78 65 72 Q62 82 60 88" />
      <path d="M116 92 Q130 85 140 88" />
      <path d="M140 88 Q145 80 148 72 Q140 78 135 72 Q138 82 140 88" />
      <path d="M95 110 Q88 125 82 135" />
      <path d="M82 135 Q78 128 72 130 Q78 136 82 135" />
      <path d="M105 110 Q112 125 118 135" />
      <path d="M118 135 Q122 128 128 130 Q122 136 118 135" />
      <path d="M88 100 Q85 108 78 115" stroke-dasharray="2 3" opacity="0.3" />
      <path d="M112 100 Q115 108 122 115" stroke-dasharray="2 3" opacity="0.3" />
    </svg>`,

    'lactobacillus-rhamnosus-gg': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="100" cy="100" rx="18" ry="35" />
      <ellipse cx="100" cy="100" rx="12" ry="28" opacity="0.3" />
      <path d="M82 88 Q65 78 55 82" />
      <path d="M55 82 Q50 78 48 72" />
      <path d="M82 100 Q62 100 52 96" />
      <path d="M52 96 Q46 98 42 95" />
      <path d="M82 112 Q65 122 55 118" />
      <path d="M55 118 Q50 122 48 128" />
      <path d="M118 88 Q135 78 145 82" />
      <path d="M145 82 Q150 78 152 72" />
      <path d="M118 100 Q138 100 148 96" />
      <path d="M148 96 Q154 98 158 95" />
      <path d="M118 112 Q135 122 145 118" />
      <path d="M145 118 Q150 122 152 128" />
    </svg>`,

    // Reishi-Form aus Prototyp als Fallback für Pilz (eigentlich Reishi-spezifisch,
    // hier auch für Glänzender Lackporling als der gleiche Pilz).
    'glaenzender-lackporling': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M60 110 Q60 60 100 50 Q140 60 140 110" />
      <path d="M65 110 Q65 70 100 62 Q135 70 135 110" />
      <ellipse cx="100" cy="112" rx="42" ry="8" />
      <line x1="100" y1="120" x2="100" y2="165" />
      <path d="M92 165 Q100 170 108 165" />
      <path d="M75 85 Q100 78 125 85" opacity="0.4" />
      <path d="M70 95 Q100 87 130 95" opacity="0.3" />
    </svg>`,

    // Magnesium-Form aus Prototyp wird zur Mineral-Kategorie.
    'magnesium': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="100,35 130,55 130,95 100,115 70,95 70,55" />
      <polygon points="100,50 120,63 120,89 100,102 80,89 80,63" opacity="0.5" />
      <line x1="100" y1="115" x2="100" y2="135" />
      <polygon points="85,135 100,130 115,135 120,155 100,165 80,155" />
      <line x1="70" y1="55" x2="55" y2="45" />
      <line x1="130" y1="55" x2="145" y2="45" />
      <line x1="130" y1="95" x2="148" y2="102" />
      <line x1="70" y1="95" x2="52" y2="102" />
    </svg>`,

    // Kokoswasser-Form aus Prototyp wird zur Tropfen/Öl-Kategorie.
    'kokoswasser': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M100 40 Q130 90 130 120 Q130 155 100 160 Q70 155 70 120 Q70 90 100 40" />
      <path d="M100 55 Q120 92 120 118 Q120 145 100 150 Q80 145 80 118 Q80 92 100 55" opacity="0.2" />
      <path d="M85 110 Q100 105 115 110" opacity="0.4" />
      <path d="M88 122 Q100 118 112 122" opacity="0.3" />
      <path d="M90 134 Q100 131 110 134" opacity="0.2" />
    </svg>`
  };

  // ── Platzhalter-Silhouetten pro Filter-Rubrik ─────────────────
  // Gleicher Stil: viewBox 0 0 200 200, stroke-width 1.5, currentColor, fill none.
  const byCategory = {

    'Pflanze': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M100 170 L100 80" />
      <path d="M100 80 Q90 50 75 40" />
      <path d="M75 40 Q85 45 95 42 Q100 50 100 80" />
      <path d="M100 80 Q110 50 125 40" />
      <path d="M125 40 Q115 45 105 42 Q100 50 100 80" />
      <path d="M100 110 Q85 100 70 95" />
      <path d="M70 95 Q80 100 88 96 Q95 105 100 110" />
      <path d="M100 110 Q115 100 130 95" />
      <path d="M130 95 Q120 100 112 96 Q105 105 100 110" />
      <path d="M100 140 Q88 130 78 125" />
      <path d="M100 140 Q112 130 122 125" />
    </svg>`,

    'Pilz': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M55 105 Q55 55 100 45 Q145 55 145 105" />
      <ellipse cx="100" cy="107" rx="46" ry="8" />
      <line x1="88" y1="115" x2="88" y2="165" />
      <line x1="112" y1="115" x2="112" y2="165" />
      <path d="M88 165 Q100 170 112 165" />
      <circle cx="85" cy="80" r="3" opacity="0.4" />
      <circle cx="115" cy="78" r="3" opacity="0.4" />
      <circle cx="100" cy="70" r="3" opacity="0.4" />
    </svg>`,

    'Mikrobiom': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="100" cy="100" rx="20" ry="40" />
      <ellipse cx="100" cy="100" rx="13" ry="32" opacity="0.3" />
      <path d="M80 90 Q60 80 50 84" />
      <path d="M80 105 Q60 105 50 100" />
      <path d="M80 120 Q60 130 50 126" />
      <path d="M120 90 Q140 80 150 84" />
      <path d="M120 105 Q140 105 150 100" />
      <path d="M120 120 Q140 130 150 126" />
    </svg>`,

    'Aminosäure': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="70" cy="85" r="11" />
      <circle cx="130" cy="85" r="11" />
      <circle cx="100" cy="115" r="11" />
      <circle cx="70" cy="145" r="11" />
      <circle cx="130" cy="145" r="11" />
      <line x1="80" y1="90" x2="92" y2="110" />
      <line x1="120" y1="90" x2="108" y2="110" />
      <line x1="92" y1="120" x2="80" y2="140" />
      <line x1="108" y1="120" x2="120" y2="140" />
      <circle cx="100" cy="55" r="11" opacity="0.5" />
      <line x1="100" y1="66" x2="100" y2="104" opacity="0.5" />
    </svg>`,

    'Vitamin': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="70" y="55" width="60" height="90" rx="30" />
      <line x1="70" y1="100" x2="130" y2="100" />
      <rect x="78" y="64" width="44" height="28" rx="14" opacity="0.3" />
    </svg>`,

    'Mineral': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="100,40 140,72 130,135 70,135 60,72" />
      <polygon points="100,55 128,78 120,125 80,125 72,78" opacity="0.4" />
      <line x1="100" y1="40" x2="100" y2="135" opacity="0.3" />
      <line x1="60" y1="72" x2="140" y2="72" opacity="0.3" />
    </svg>`,

    'Fettsäure': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M100 40 Q130 95 130 125 Q130 160 100 165 Q70 160 70 125 Q70 95 100 40" />
      <path d="M100 55 Q120 97 120 122 Q120 148 100 153 Q80 148 80 122 Q80 97 100 55" opacity="0.25" />
      <path d="M86 115 Q100 110 114 115" opacity="0.4" />
    </svg>`,

    'Substanz': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="80" cy="75" r="11" />
      <circle cx="120" cy="75" r="11" />
      <circle cx="100" cy="105" r="11" />
      <circle cx="70" cy="135" r="11" />
      <circle cx="130" cy="135" r="11" />
      <circle cx="100" cy="160" r="11" />
      <line x1="89" y1="80" x2="94" y2="98" />
      <line x1="111" y1="80" x2="106" y2="98" />
      <line x1="93" y1="113" x2="78" y2="126" />
      <line x1="107" y1="113" x2="122" y2="126" />
      <line x1="78" y1="144" x2="94" y2="155" />
      <line x1="122" y1="144" x2="106" y2="155" />
    </svg>`,

    'Konzept': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="100" cy="100" r="55" />
      <circle cx="100" cy="100" r="35" opacity="0.5" />
      <circle cx="100" cy="100" r="15" opacity="0.3" />
      <line x1="100" y1="45" x2="100" y2="155" stroke-dasharray="3 5" opacity="0.4" />
      <line x1="45" y1="100" x2="155" y2="100" stroke-dasharray="3 5" opacity="0.4" />
    </svg>`
  };

  window.SUBSTANCE_ICONS = { bySlug, byCategory };
})();

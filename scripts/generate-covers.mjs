// Generates custom SVG covers for all 11 Labelhook brands.
// Run: node scripts/generate-covers.mjs
// Output: labelhook-mvp/public/products/<slug>.svg
// Each cover shares composition language (gradient canvas, grain dots, light source top-left,
// floating motif, domain plate) while each industry gets its own motif + palette.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "products");

const W = 1200;
const H = 900;

// ---- helper: lighten/darken hex ----
function shade(hex, amt) {
  const n = parseInt(hex.replace("#", ""), 16);
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  if (amt >= 0) { r += Math.round((255 - r) * amt); g += Math.round((255 - g) * amt); b += Math.round((255 - b) * amt); }
  else { r += Math.round(r * amt); g += Math.round(g * amt); b += Math.round(b * amt); }
  return `#${[r, g, b].map((v) => Math.max(0, Math.min(255, v)).toString(16).padStart(2, "0")).join("")}`;
}

// canvas background: vertical gradient
function bg(accent) {
  return `<linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="${shade(accent, -0.72)}"/>
    <stop offset="0.55" stop-color="${shade(accent, -0.45)}"/>
    <stop offset="1" stop-color="${shade(accent, -0.2)}"/>
  </linearGradient>`;
}

// soft radial glow
function glow(accent, id = "glow") {
  return `<radialGradient id="${id}" cx="0.18" cy="0.12" r="0.9">
    <stop offset="0" stop-color="${shade(accent, 0.25)}" stop-opacity="0.85"/>
    <stop offset="0.5" stop-color="${shade(accent, 0.05)}" stop-opacity="0.35"/>
    <stop offset="1" stop-color="${shade(accent, -0.25)}" stop-opacity="0"/>
  </radialGradient>`;
}

// dotted grain as a repeating pattern (tiny output)
const grain = `
  <pattern id="grain" width="34" height="34" patternUnits="userSpaceOnUse">
    <circle cx="0" cy="0" r="1.1" fill="white" opacity="0.05"/>
  </pattern>`;

// thin frame border inset
const frame = `<rect x="28" y="28" width="${W - 56}" height="${H - 56}" rx="20" fill="none" stroke="white" stroke-opacity="0.14" stroke-width="1.5"/>`;

function motif(design) {
  return design;
}

const BUILDS = {
  // ---- 01 horarai — art auction: stacked picture frames ----
  horarai: ({ accent }) => motif(`
    <g opacity="0.96">
      <g transform="translate(600,190) rotate(-6)">
        <rect x="0" y="0" width="330" height="430" rx="10" fill="none" stroke="white" stroke-opacity="0.9" stroke-width="3"/>
        <rect x="18" y="18" width="294" height="394" rx="6" fill="${shade(accent, 0.05)}" opacity="0.85"/>
        <circle cx="165" cy="175" r="62" fill="${shade(accent, 0.25)}" opacity="0.9"/>
        <path d="M60 350 Q110 230 165 300 T270 350" stroke="white" stroke-width="4" fill="none" opacity="0.85"/>
        <path d="M80 380 Q130 300 165 340 T250 380" stroke="white" stroke-width="3" fill="none" opacity="0.6"/>
      </g>
      <g transform="translate(460,300) rotate(4)">
        <rect x="0" y="0" width="250" height="330" rx="8" fill="none" stroke="white" stroke-opacity="0.55" stroke-width="2.5"/>
        <rect x="14" y="14" width="222" height="302" rx="5" fill="${shade(accent, 0.08)}" opacity="0.8"/>
        <circle cx="125" cy="130" r="48" fill="none" stroke="white" stroke-opacity="0.7" stroke-width="3"/>
        <path d="M70 268 Q120 200 180 268" stroke="white" stroke-width="3" fill="none" opacity="0.7"/>
      </g>
    </g>`),
  // ---- 02 amlaker — real estate: modern tower skyline ----
  amlaker: ({ accent }) => motif(`
    <g>
      <path d="M560 780 L560 300 M560 300 L560 210 Q560 180 590 180 L600 180 M600 180 L600 540 M600 540 L752 540 L752 330 L752 300 L840 300 L840 780" stroke="white" stroke-opacity="0.2" stroke-width="2" fill="none"/>
      <rect x="700" y="180" width="120" height="600" fill="none" stroke="white" stroke-opacity="0.95" stroke-width="3"/>
      <g fill="${shade(accent, 0.3)}">
        <rect x="716" y="210" width="26" height="36" opacity="0.9"/>
        <rect x="758" y="210" width="26" height="36" opacity="0.7"/>
        <rect x="716" y="266" width="26" height="36" opacity="0.75"/>
        <rect x="758" y="266" width="26" height="36" opacity="0.9"/>
        <rect x="716" y="322" width="26" height="36" opacity="0.8"/>
        <rect x="758" y="322" width="26" height="36" opacity="0.65"/>
        <rect x="736" y="378" width="48" height="60" opacity="0.85"/>
      </g>
      <rect x="350" y="560" width="90" height="220" fill="none" stroke="white" stroke-opacity="0.5" stroke-width="2"/>
      <rect x="430" y="470" width="90" height="310" fill="none" stroke="white" stroke-opacity="0.7" stroke-width="2.5"/>
      <rect x="510" y="640" width="70" height="140" fill="none" stroke="white" stroke-opacity="0.4" stroke-width="2"/>
    </g>`),
  // ---- 03 tatokar — tattoo: flowing ink strokes ----
  tatokar: ({ accent }) => motif(`
    <g transform="translate(560,330)" opacity="0.95">
      <path d="M-220 -90 C -60 -190 60 40 220 -40 S 260 120 120 190" stroke="white" stroke-width="9" fill="none" stroke-linecap="round" opacity="0.92"/>
      <path d="M-260 40 C -140 -30 -60 140 80 60 S 220 200 100 260" stroke="white" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.6"/>
      <path d="M-140 -160 C -40 -240 80 -60 180 -140 S 300 -30 200 70" stroke="${shade(accent, 0.3)}" stroke-width="7" fill="none" stroke-linecap="round" opacity="0.85"/>
      <circle cx="150" cy="-150" r="16" fill="white" opacity="0.85"/>
      <circle cx="-190" cy="-90" r="9" fill="white" opacity="0.5"/>
    </g>`),
  // ---- 04 oilsoup — crypto: abstract liquidity waves ----
  oilsoup: ({ accent }) => motif(`
    <g transform="translate(0,120)">
      <path d="M0 560 Q 150 420 300 500 T 600 500 T 900 500 T 1200 500 L1200 900 L0 900 Z" fill="white" opacity="0.05"/>
      <path d="M0 630 Q 150 490 300 570 T 600 570 T 900 570 T 1200 570 L1200 900 L0 900 Z" fill="white" opacity="0.08"/>
      <path d="M0 700 Q 150 560 300 640 T 600 640 T 900 640 T 1200 640 L1200 900 L0 900 Z" fill="white" opacity="0.12"/>
      <g transform="translate(560,330)">
        <circle cx="0" cy="0" r="150" fill="none" stroke="white" stroke-opacity="0.35" stroke-width="2"/>
        <circle cx="0" cy="0" r="105" fill="none" stroke="white" stroke-opacity="0.5" stroke-width="2"/>
        <circle cx="0" cy="0" r="60" fill="none" stroke="white" stroke-width="2.5" stroke-opacity="0.8"/>
        <path d="M60 0 A60 60 0 0 1 -60 0" fill="white" opacity="0.85"/>
        <circle cx="-150" cy="-150" r="26" fill="none" stroke="white" stroke-width="3" opacity="0.6"/>
        <circle cx="150" cy="-150" r="18" fill="none" stroke="white" stroke-width="3" opacity="0.5"/>
      </g>
    </g>`),
  // ---- 05 shuterai — travel: layered peaks & sun ----
  shuterai: ({ accent }) => motif(`
    <g transform="translate(0,80)">
      <circle cx="700" cy="220" r="78" fill="${shade(accent, 0.2)}" opacity="0.9"/>
      <circle cx="700" cy="220" r="78" fill="none" stroke="white" stroke-opacity="0.25" stroke-width="1.5"/>
      <path d="M0 900 L0 560 L220 330 L430 560 L560 420 L760 620 L900 480 L1200 740 L1200 900 Z" fill="white" opacity="0.08"/>
      <path d="M0 900 L0 640 L240 440 L460 640 L620 510 L860 700 L1200 560 L1200 900 Z" fill="white" opacity="0.16"/>
      <path d="M0 900 L0 760 L260 580 L480 760 L680 630 L920 790 L1200 700 L1200 900 Z" fill="${shade(accent, -0.1)}" opacity="0.9"/>
      <path d="M0 900 L0 840 L300 700 L520 840 L740 730 L980 860 L1200 810 L1200 900 Z" fill="${shade(accent, -0.35)}"/>
    </g>`),
  // ---- 06 stadiuai — studio: sound wave equalizer ----
  stadiuai: ({ accent }) => motif(`
    <g transform="translate(430,280)">
      <g fill="white">
        <rect x="0" y="160" width="34" height="150" rx="6" opacity="0.5"/>
        <rect x="64" y="70" width="34" height="280" rx="6" opacity="0.8"/>
        <rect x="128" y="20" width="34" height="370" rx="6" opacity="0.95"/>
        <rect x="192" y="110" width="34" height="250" rx="6" opacity="0.85"/>
        <rect x="256" y="180" width="34" height="150" rx="6" opacity="0.55"/>
        <rect x="320" y="0" width="34" height="400" rx="6" opacity="0.9"/>
        <rect x="384" y="130" width="34" height="220" rx="6" opacity="0.7"/>
        <rect x="448" y="60" width="34" height="310" rx="6" opacity="0.88"/>
        <rect x="512" y="190" width="34" height="140" rx="6" opacity="0.5"/>
      </g>
      <path d="M0 520 L550 520" stroke="white" stroke-width="3" stroke-opacity="0.5"/>
      <circle cx="440" cy="130" r="34" fill="none" stroke="white" stroke-width="4" opacity="0.9"/>
      <circle cx="440" cy="130" r="14" fill="white" opacity="0.9"/>
    </g>`),
  // ---- 07 ironiai — industrial: gear & blueprint lines ----
  ironiai: ({ accent }) => motif(`
    <g transform="translate(560,380)">
      <path d="M0 -150 A150 150 0 0 1 150 0 M0 150 A150 150 0 0 1 -150 0" stroke="white" stroke-opacity="0.25" stroke-width="2" fill="none"/>
      <g transform="rotate(15)">
        <rect x="-12" y="-260" width="24" height="520" rx="8" fill="white" opacity="0.35"/>
        <rect x="-180" y="-12" width="360" height="24" rx="8" fill="white" opacity="0.35"/>
        <rect x="-12" y="-210" width="24" height="420" rx="8" fill="white" opacity="0.2"/>
        <rect x="-150" y="-12" width="300" height="24" rx="8" fill="white" opacity="0.2"/>
      </g>
      <circle r="150" fill="none" stroke="white" stroke-width="4" opacity="0.95"/>
      <circle r="108" fill="none" stroke="white" stroke-width="2.5" opacity="0.7"/>
      <circle r="30" fill="white" opacity="0.9"/>
      <g fill="${shade(accent, 0.25)}">
        <circle cx="150" cy="0" r="10"/><circle cx="-150" cy="0" r="10"/>
        <circle cx="0" cy="150" r="10"/><circle cx="0" cy="-150" r="10"/>
        <circle cx="106" cy="106" r="10"/><circle cx="-106" cy="-106" r="10"/>
        <circle cx="106" cy="-106" r="10"/><circle cx="-106" cy="106" r="10"/>
      </g>
    </g>`),
  // ---- 08 arangai — AI: neural nodes & connections ----
  arangai: ({ accent }) => motif(`
    <g transform="translate(0,0)">
      <defs>
        <linearGradient id="nn" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${shade(accent, 0.25)}"/>
          <stop offset="1" stop-color="white"/>
        </linearGradient>
      </defs>
      <g stroke="white" stroke-opacity="0.35" stroke-width="2" fill="none">
        <line x1="600" y1="200" x2="300" y2="420"/><line x1="600" y1="200" x2="760" y2="380"/>
        <line x1="600" y1="200" x2="500" y2="460"/><line x1="300" y1="420" x2="500" y2="460"/>
        <line x1="760" y1="380" x2="500" y2="460"/><line x1="300" y1="420" x2="900" y2="360"/>
        <line x1="500" y1="460" x2="900" y2="620"/><line x1="760" y1="380" x2="900" y2="620"/>
        <line x1="300" y1="420" x2="240" y2="660"/><line x1="240" y1="660" x2="500" y2="460"/>
        <line x1="500" y1="460" x2="120" y2="600"/><line x1="900" y1="620" x2="1020" y2="500"/>
      </g>
      <g fill="white">
        <circle cx="600" cy="200" r="16" opacity="0.95"/>
        <circle cx="300" cy="420" r="11" opacity="0.8"/><circle cx="760" cy="380" r="11" opacity="0.8"/>
        <circle cx="500" cy="460" r="13" opacity="0.9"/><circle cx="900" cy="360" r="9" opacity="0.7"/>
        <circle cx="900" cy="620" r="10" opacity="0.7"/><circle cx="240" cy="660" r="9" opacity="0.6"/>
        <circle cx="120" cy="600" r="8" opacity="0.6"/><circle cx="1020" cy="500" r="8" opacity="0.6"/>
      </g>
      <g fill="${shade(accent, 0.3)}">
        <circle cx="600" cy="200" r="36" opacity="0.35"/>
        <circle cx="600" cy="200" r="56" opacity="0.18"/>
      </g>
    </g>`),
  // ---- 09 cosoplay — beauty: elegant curves & sparkle ----
  cosoplay: ({ accent }) => motif(`
    <g transform="translate(560,340) rotate(-18)">
      <ellipse cx="0" cy="0" rx="70" ry="210" fill="none" stroke="white" stroke-width="7" opacity="0.95" transform="rotate(30)"/>
      <ellipse cx="0" cy="0" rx="70" ry="210" fill="none" stroke="white" stroke-width="4" opacity="0.5" transform="rotate(-30)"/>
      <ellipse cx="0" cy="0" rx="46" ry="160" fill="none" stroke="${shade(accent, 0.35)}" stroke-width="6" opacity="0.9" transform="rotate(6)"/>
      <ellipse cx="0" cy="0" rx="22" ry="120" fill="white" opacity="0.18" transform="rotate(6)"/>
    </g>
    <g transform="translate(760,260)">
      <path d="M0 -20 L5 -6 L20 -4 L9 6 L12 22 L0 14 L-12 22 L-9 6 L-20 -4 L-5 -6 Z" fill="white" opacity="0.9"/>
    </g>
    <g transform="translate(390,190)">
      <path d="M0 -14 L3.5 -4 L14 -2.5 L6 4.5 L8 15 L0 10 L-8 15 L-6 4.5 L-14 -2.5 L-3.5 -4 Z" fill="white" opacity="0.6"/>
    </g>`),
  // ---- 10 penselai — academic writing: pen nib & pages ----
  penselai: ({ accent }) => motif(`
    <g transform="translate(500,250)">
      <rect x="0" y="0" width="260" height="360" rx="10" fill="${shade(accent, 0.1)}" stroke="white" stroke-opacity="0.7" stroke-width="2.5"/>
      <g stroke="white" stroke-opacity="0.5" stroke-width="3" stroke-linecap="round">
        <line x1="36" y1="70" x2="224" y2="70"/><line x1="36" y1="118" x2="224" y2="118"/>
        <line x1="36" y1="166" x2="180" y2="166"/><line x1="36" y1="214" x2="224" y2="214"/>
        <line x1="36" y1="262" x2="150" y2="262"/>
      </g>
      <rect x="220" y="300" width="200" height="86" rx="8" fill="none" stroke="white" stroke-opacity="0.45" stroke-width="2"/>
      <line x1="250" y1="330" x2="396" y2="330" stroke="white" stroke-opacity="0.4" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="250" y1="356" x2="360" y2="356" stroke="white" stroke-opacity="0.4" stroke-width="2.5" stroke-linecap="round"/>
    </g>
    <path d="M640 120 L520 520" stroke="white" stroke-width="4" stroke-linecap="round" opacity="0.85"/>
    <path d="M520 520 L430 470 L490 400 Z" fill="white" opacity="0.9"/>
    <path d="M520 520 L555 560 L505 545 Z" fill="white" opacity="0.7"/>`),
  // ---- 11 unicai — academic: open book & mortarboard ----
  unicai: ({ accent }) => motif(`
    <g transform="translate(400,260)">
      <path d="M0 320 C 100 260 240 270 330 310 L330 60 C 240 20 100 30 0 90 Z" fill="white" opacity="0.16"/>
      <path d="M330 310 C 420 270 560 260 660 320 L660 90 C 560 30 420 20 330 60 Z" fill="white" opacity="0.3"/>
      <path d="M0 320 L0 110 C 100 50 240 60 330 110 L330 300 C 240 260 100 250 0 320 Z" fill="none" stroke="white" stroke-width="3" opacity="0.8"/>
      <path d="M0 200 C 100 150 240 150 330 200" stroke="white" stroke-width="2" stroke-opacity="0.5" fill="none"/>
      <path d="M0 260 C 100 210 240 210 330 260" stroke="white" stroke-width="2" stroke-opacity="0.4" fill="none"/>
    </g>
    <g transform="translate(660,140)">
      <path d="M0 70 L-40 20 L200 -70 L240 -20 Z" fill="white" opacity="0.9"/>
      <path d="M240 -20 L240 70 L-40 70 L-40 20" fill="none" stroke="white" stroke-width="3" opacity="0.85"/>
      <rect x="-46" y="66" width="292" height="16" rx="6" fill="white" opacity="0.55"/>
      <g stroke="white" stroke-opacity="0.5" stroke-width="3">
        <line x1="70" y1="74" x2="94" y2="120" opacity="0.4"/>
        <line x1="190" y1="56" x2="210" y2="112" opacity="0.4"/>
      </g>
    </g>`),
};

const PALETTES = {
  horarai: "#FB7185",
  amlaker: "#3B82F6",
  tatokar: "#F43F5E",
  oilsoup: "#8B5CF6",
  shuterai: "#10B981",
  stadiuai: "#F59E0B",
  ironiai: "#64748B",
  arangai: "#D946EF",
  cosoplay: "#EC4899",
  penselai: "#0EA5E9",
  unicai: "#84CC16",
};

const LABELS = {
  horarai: "هنر و مزایده · مزایده آثار هنری",
  amlaker: "املاک · بازار املاک آنلاین",
  tatokar: "تتو · رزرو نوبت تتوکارها",
  oilsoup: "رمزارز · خدمات مالی دیجیتال",
  shuterai: "گردشگری · تورهای ماجراجویانه",
  stadiuai: "موسیقی · رزرو استودیوی ضبط",
  ironiai: "صنعت · خدمات فروش صنعتی",
  arangai: "هوش مصنوعی · کسب‌وکار مبتنی بر AI",
  cosoplay: "زیبایی · سالن و آرایش عروس",
  penselai: "نگارش · خدمات آکادمیک",
  unicai: "آکادمیک · پروژه و آموزش دانشگاهی",
};

mkdirSync(OUT, { recursive: true });

for (const [slug, accent] of Object.entries(PALETTES)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="کاور برند ${LABELS[slug]}">
  <defs>
    ${bg(accent)}
    ${glow(accent)}
    ${grain}
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect width="${W}" height="${H}" fill="black" opacity="0.05"/>
  <rect width="${W}" height="${H}" fill="url(#grain)"/>
  ${frame}
  ${BUILDS[slug]({ accent })}
  <g font-family="system-ui, Tahoma, sans-serif">
    <text x="60" y="120" font-size="22" letter-spacing="6" fill="white" fill-opacity="0.55">LABELHOOK</text>
    <text x="60" y="${H - 70}" font-size="44" font-weight="700" fill="white">${slug}.com</text>
    <text x="60" y="${H - 26}" font-size="24" fill="white" fill-opacity="0.75">${LABELS[slug]}</text>
  </g>
</svg>`;
  writeFileSync(join(OUT, `${slug}.svg`), svg);
  console.log("✓", slug, "cover written");
}
console.log("Done.");

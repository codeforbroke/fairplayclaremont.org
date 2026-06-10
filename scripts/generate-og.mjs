/**
 * Generates /public/og-image.png (1200×630)
 * Run: node scripts/generate-og.mjs
 */

import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '../public/og-image.png');

// Build SVG that sharp will rasterize
const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap');
    </style>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#0F6E56"/>

  <!-- Subtle grid texture -->
  <rect width="1200" height="630" fill="none" stroke="#1D9E75" stroke-width="0.5" opacity="0.15"/>

  <!-- Bottom accent bar -->
  <rect x="0" y="590" width="1200" height="40" fill="#085041"/>

  <!-- Left accent line -->
  <rect x="72" y="80" width="4" height="80" fill="#5DCAA5" rx="2"/>

  <!-- Eyebrow -->
  <text x="92" y="118" font-family="Inter, system-ui, sans-serif" font-size="18" font-weight="600"
    fill="#5DCAA5" letter-spacing="3">CLAREMONT, CA · YOUTH SPORTS EQUITY</text>

  <!-- Main headline -->
  <text x="72" y="210" font-family="Inter, system-ui, sans-serif" font-size="68" font-weight="700"
    fill="#FFFFFF">Same city. Same taxes.</text>
  <text x="72" y="295" font-family="Inter, system-ui, sans-serif" font-size="68" font-weight="700"
    fill="#9FE1CB">Very different fields.</text>

  <!-- Subline -->
  <text x="72" y="370" font-family="Inter, system-ui, sans-serif" font-size="26" font-weight="400"
    fill="#9FE1CB" opacity="0.85">Girls softball in Claremont has 0 fields with both lights and a fence.</text>
  <text x="72" y="406" font-family="Inter, system-ui, sans-serif" font-size="26" font-weight="400"
    fill="#9FE1CB" opacity="0.85">California law says that's illegal. We're asking the City Council to fix it.</text>

  <!-- Divider -->
  <line x1="72" y1="460" x2="1128" y2="460" stroke="#1D9E75" stroke-width="1"/>

  <!-- Stats row -->
  <text x="120" y="510" font-family="Inter, system-ui, sans-serif" font-size="48" font-weight="700" fill="#FFFFFF">0</text>
  <text x="100" y="542" font-family="Inter, system-ui, sans-serif" font-size="15" fill="#5DCAA5">Lit + fenced fields</text>

  <text x="370" y="510" font-family="Inter, system-ui, sans-serif" font-size="48" font-weight="700" fill="#FFFFFF">0</text>
  <text x="352" y="542" font-family="Inter, system-ui, sans-serif" font-size="15" fill="#5DCAA5">Lockable fields</text>

  <text x="610" y="510" font-family="Inter, system-ui, sans-serif" font-size="48" font-weight="700" fill="#FFFFFF">4</text>
  <text x="586" y="542" font-family="Inter, system-ui, sans-serif" font-size="15" fill="#5DCAA5">Sundays/year</text>

  <text x="840" y="510" font-family="Inter, system-ui, sans-serif" font-size="48" font-weight="700" fill="#FFFFFF">1995</text>
  <text x="830" y="542" font-family="Inter, system-ui, sans-serif" font-size="15" fill="#5DCAA5">Year of ban</text>

  <!-- Domain -->
  <text x="1128" y="615" font-family="Inter, system-ui, sans-serif" font-size="18" font-weight="500"
    fill="#5DCAA5" text-anchor="end">fairplayclaremont.org</text>
</svg>
`.trim();

const pngBuffer = await sharp(Buffer.from(svg))
  .png()
  .toBuffer();

writeFileSync(outPath, pngBuffer);
console.log(`✓ OG image written to ${outPath}`);

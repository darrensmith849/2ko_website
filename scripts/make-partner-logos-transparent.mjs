/**
 * One-off script: remove near-white backgrounds from partner logo PNGs.
 *
 * Reads each PNG in public/partners/, converts pixels where R, G, B are
 * all > 230 to fully transparent, trims the resulting transparent border,
 * and overwrites the original file.
 *
 * Usage: node scripts/make-partner-logos-transparent.mjs
 */

import { readdir } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const PARTNERS_DIR = join(import.meta.dirname, "..", "public", "partners");
const WHITE_THRESHOLD = 230; // R, G, B all above this → transparent

async function processImage(filePath) {
  const image = sharp(filePath);
  const { width, height, channels } = await image.metadata();

  if (channels < 4) {
    // Ensure RGBA
    image.ensureAlpha();
  }

  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = Buffer.from(data);

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    if (r > WHITE_THRESHOLD && g > WHITE_THRESHOLD && b > WHITE_THRESHOLD) {
      pixels[i + 3] = 0; // set alpha to 0
    }
  }

  await sharp(pixels, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim()  // remove transparent border
    .png()
    .toFile(filePath + ".tmp");

  // Overwrite original
  const { rename } = await import("node:fs/promises");
  await rename(filePath + ".tmp", filePath);

  console.log(`✓ ${filePath}`);
}

const files = await readdir(PARTNERS_DIR);
const pngs = files.filter((f) => f.toLowerCase().endsWith(".png"));

console.log(`Processing ${pngs.length} PNG files in ${PARTNERS_DIR}...\n`);

for (const png of pngs) {
  await processImage(join(PARTNERS_DIR, png));
}

console.log("\nDone. All PNGs now have transparent backgrounds.");

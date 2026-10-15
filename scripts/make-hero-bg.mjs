import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const src = process.argv[2];
const outDir = process.argv[3] ?? path.resolve('public/images');

if (!src) {
  console.error('Usage: node scripts/make-hero-bg.mjs <source.jpg> [outDir]');
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });

const meta = await sharp(src).metadata();
console.log('source', meta.width, meta.height, meta.format);

// Full-bleed cinematic — keep source look; only resize/optimize.
const pipeline = sharp(src).resize(1920, 1080, {
  fit: 'cover',
  position: 'left',
  withoutEnlargement: false,
});

const jpgPath = path.join(outDir, 'hero-halloween-the-game-dark.jpg');
const webpPath = path.join(outDir, 'hero-halloween-the-game-dark.webp');

await pipeline.clone().jpeg({ quality: 86, mozjpeg: true }).toFile(jpgPath);
await pipeline.clone().webp({ quality: 82 }).toFile(webpPath);

console.log('wrote', jpgPath);
console.log('wrote', webpPath);
console.log(await sharp(webpPath).metadata());

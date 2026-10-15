/**
 * Copy Halloween the Game cheat screenshots into public/images,
 * then write SEO-named PNGs for gameplay + blog with alt metadata.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const assetsDir =
  'C:\\Users\\3Tee System\\.cursor\\projects\\c-Users-3Tee-System-Downloads-halloweenthegame-cheats-net-main\\assets';
const importDir = path.resolve('_import');
const gameplayDir = path.resolve('public/images/gameplay');
const blogDir = path.resolve('public/images/blog');

/** Explicit source → gameplay mapping (order = preferred hero/gallery priority). */
const GAMEPLAY = [
  {
    match: '161300',
    file: 'halloween-the-game-esp-wallhack.png',
    alt: 'Halloween the Game cheat ESP overlay showing item markers Master Key Kitchen Knife First Aid and player box with HP on Lillian Myers',
    caption: 'World & player ESP',
    captionDesc: 'Item distance markers and player box ESP with health and stamina.',
  },
  {
    match: '161251',
    file: 'halloween-the-game-squad-esp.png',
    alt: 'Halloween the Game Survivor ESP with red boxes skeletons names distances and HP bars on multiple players in a garage',
    caption: 'Survivor ESP',
    captionDesc: 'Boxes, skeletons, names, distance and HP on survivors through walls.',
  },
  {
    match: '161138',
    file: 'halloween-the-game-player-esp.png',
    alt: 'Halloween the Game cheat gameplay with skeleton ESP box ESP name tags HP bars and head aim markers on Myers and survivors',
    caption: 'Skeleton & box ESP',
    captionDesc: 'Skeleton wallhack, boxes, names and head aim markers.',
  },
  {
    match: '161151',
    file: 'halloween-the-game-loot-radar.png',
    alt: 'Halloween the Game world NPC ESP on Haddonfield street with Resident Medkit Weapon Phone Car Escape labels and orange skeleton highlight',
    caption: 'World / NPC ESP',
    captionDesc: 'Residents, weapons, phones, cars and escape markers with distance.',
  },
  {
    match: '161244',
    file: 'halloween-the-game-long-range-esp.png',
    alt: 'Halloween the Game weapon and item ESP showing shotguns axes phones fuses health spray labels with distances and 2D radar',
    caption: 'Weapon & item ESP',
    captionDesc: 'Weapons, keys, fuses and health items with distance readouts.',
  },
  {
    match: '161311',
    file: 'halloween-the-game-combat-esp.png',
    alt: 'Halloween the Game cheat ESP on Virginia St with Sedan Key Fuse Repair Kit weapon markers skeleton box and Bloodlust status',
    caption: 'Objective ESP',
    captionDesc: 'Sedan key, fuse, repair kit and player skeleton ESP with status.',
  },
  {
    match: '161335',
    file: 'halloween-the-game-myers-shape-options.png',
    alt: 'Halloween the Game Michael Myers Shape Jump ability menu with The Shape in mask and jumpsuit at night',
    caption: 'Myers / Shape options',
    captionDesc: 'Michael Myers ability loadout including Shape Jump.',
  },
  {
    match: '161328',
    file: 'halloween-the-game-myers-weapon.png',
    alt: 'Halloween the Game Michael Myers holding kitchen knife with melee weapon select bar axe sledgehammer pitchfork',
    caption: 'Myers weapons',
    captionDesc: 'Myers knife and melee weapon selection overlay.',
  },
  {
    match: '161349',
    file: 'halloween-the-game-survivor-items.png',
    alt: 'Halloween the Game survivor holding first aid spray with item hotbar tools medical kits and equipment icons',
    caption: 'Survivor items',
    captionDesc: 'Survivor first-aid spray and item selection hotbar.',
  },
  {
    match: '161342',
    file: 'halloween-the-game-survivor-outfits.png',
    alt: 'Halloween the Game survivor outfit customization menu with blonde survivor in green turtleneck in a dark workshop',
    caption: 'Survivor outfits',
    captionDesc: 'Survivor cosmetic / outfit selection screen.',
  },
];

/** Extra gameplay filenames the site still references — filled from best ESP shots. */
const EXTRA_GAMEPLAY = [
  {
    file: 'halloween-the-game-aimbot-combat.png',
    from: 'halloween-the-game-player-esp.png',
    alt: 'Halloween the Game aim assist and skeleton ESP cheat overlay with name tags HP and head markers',
    caption: 'Aim assist ESP',
    captionDesc: 'Aim markers with skeleton ESP and player info.',
  },
  {
    file: 'halloween-the-game-radar-hack.png',
    from: 'halloween-the-game-long-range-esp.png',
    alt: 'Halloween the Game 2D radar and item ESP cheat overlay with weapon markers and minimap',
    caption: '2D radar',
    captionDesc: 'Minimap radar with weapon and item ESP labels.',
  },
  {
    file: 'halloween-the-game-auto-aim.png',
    from: 'halloween-the-game-squad-esp.png',
    alt: 'Halloween the Game aim assist head markers with red box ESP skeletons and HP bars',
    caption: 'Aim markers',
    captionDesc: 'Head aim markers with box and skeleton ESP.',
  },
  {
    file: 'halloween-the-game-skin-changer.png',
    from: 'halloween-the-game-survivor-outfits.png',
    alt: 'Halloween the Game survivor cosmetic outfit menu used as skin changer preview gameplay',
    caption: 'Cosmetics',
    captionDesc: 'Survivor outfit customization preview.',
  },
  {
    file: 'halloween-the-game-thermal-esp.png',
    from: 'halloween-the-game-esp-wallhack.png',
    alt: 'Halloween the Game ESP wallhack cheat with item distance labels and highlighted player through the dark map',
    caption: 'ESP wallhack',
    captionDesc: 'Through-wall item and player ESP in Haddonfield.',
  },
  {
    file: 'halloween-the-game-chase-fight-esp.png',
    from: 'halloween-the-game-squad-esp.png',
    alt: 'Halloween the Game chase ESP showing multiple survivors with boxes skeletons names and distances',
    caption: 'Chase ESP',
    captionDesc: 'Multi-survivor ESP during a chase in a garage.',
  },
  {
    file: 'halloween-the-game-match-wallhack.png',
    from: 'halloween-the-game-loot-radar.png',
    alt: 'Halloween the Game match wallhack with dense world ESP labels residents weapons phones and escape routes',
    caption: 'Match wallhack',
    captionDesc: 'Full world ESP labels across a Haddonfield street.',
  },
  {
    file: 'halloween-the-game-haddonfield-esp.png',
    from: 'halloween-the-game-combat-esp.png',
    alt: 'Halloween the Game Haddonfield ESP on Virginia St with objective keys weapons and skeleton box overlay',
    caption: 'Haddonfield ESP',
    captionDesc: 'Street-level objective and player ESP in Haddonfield.',
  },
  {
    file: 'halloween-the-game-aimbot-lock.png',
    from: 'halloween-the-game-player-esp.png',
    alt: 'Halloween the Game aim lock markers on heads with skeleton ESP boxes names and HP readouts',
    caption: 'Aim lock',
    captionDesc: 'Head aim lock with skeleton and box ESP.',
  },
  {
    file: 'halloween-the-game-chams-esp.png',
    from: 'halloween-the-game-loot-radar.png',
    alt: 'Halloween the Game chams style orange skeleton highlight with world ESP item labels on Haddonfield',
    caption: 'Chams / skeleton',
    captionDesc: 'Glowing skeleton highlight with world ESP labels.',
  },
];

const BLOG = [
  'halloween-the-game-cheat-codes-guide.png',
  'halloween-the-game-console-cheats-tips.png',
  'how-to-use-halloween-the-game-cheat-codes.png',
  'halloween-the-game-cheats-features-guide.png',
  'halloween-the-game-console-commands-cheats.png',
  'halloween-the-game-lite-vs-pro.png',
  'halloween-the-game-elite-tier-guide.png',
  'halloween-the-game-aimbot-ranked-guide.png',
  'halloween-the-game-esp-wallhack-setup.png',
  'halloween-the-game-radar-hack-guide.png',
  'halloween-the-game-skin-changer-guide.png',
  'eac-patch-day-checklist.png',
  'halloween-the-game-hwid-spoofer-after-ban.png',
  'how-to-buy-halloween-the-game-cheats-2026.png',
  'halloween-the-game-aimbot-combat-guide.png',
  'eac-bypass-halloween-the-game-guide.png',
  'halloween-the-game-external-cheat-guide.png',
  'halloween-the-game-stream-proof-setup.png',
];

function longPath(p) {
  const resolved = path.resolve(p);
  if (resolved.startsWith('\\\\?\\')) return resolved;
  return `\\\\?\\${resolved}`;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function listAssetImages() {
  const entries = fs.readdirSync(longPath(assetsDir));
  return entries.filter((f) => /\.(png|jpe?g|webp)$/i.test(f));
}

function findSource(match, files) {
  const hit = files.find((f) => f.includes(match));
  if (!hit) throw new Error(`Missing asset matching ${match}`);
  return hit;
}

async function writeResizedPng(src, dest) {
  const buf = await sharp(src)
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .png({ compressionLevel: 8 })
    .toBuffer();
  fs.writeFileSync(dest, buf);
  console.log('wrote', path.relative(process.cwd(), dest), buf.length);
}

ensureDir(importDir);
ensureDir(gameplayDir);
ensureDir(blogDir);

const sources = listAssetImages();
console.log(`Found ${sources.length} source screenshots`);

const shortByMatch = new Map();
for (const item of GAMEPLAY) {
  const name = findSource(item.match, sources);
  const short = `shot-${item.match}.png`;
  const from = longPath(path.join(assetsDir, name));
  const to = path.join(importDir, short);
  await writeResizedPng(from, to);
  shortByMatch.set(item.match, to);
  console.log('imported', item.match, '←', name.slice(-50));
}

const alts = [];
const captionMeta = {};

for (const item of GAMEPLAY) {
  const src = shortByMatch.get(item.match);
  const dest = path.join(gameplayDir, item.file);
  fs.copyFileSync(src, dest);
  console.log('gameplay', item.file);
  alts.push({ file: item.file, alt: item.alt, match: item.match });
  captionMeta[item.file] = { alt: item.alt, caption: item.caption, captionDesc: item.captionDesc };
}

for (const item of EXTRA_GAMEPLAY) {
  const src = path.join(gameplayDir, item.from);
  const dest = path.join(gameplayDir, item.file);
  fs.copyFileSync(src, dest);
  console.log('extra', item.file, '←', item.from);
  alts.push({ file: item.file, alt: item.alt, from: item.from });
  captionMeta[item.file] = { alt: item.alt, caption: item.caption, captionDesc: item.captionDesc };
}

const primaryFiles = GAMEPLAY.map((g) => g.file);
for (let i = 0; i < BLOG.length; i++) {
  const srcName = primaryFiles[i % primaryFiles.length];
  await writeResizedPng(path.join(gameplayDir, srcName), path.join(blogDir, BLOG[i]));
}

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'gameplay-image-alts.json'),
  JSON.stringify({ gameplay: alts, captions: captionMeta, sourceCount: GAMEPLAY.length }, null, 2),
);

console.log('Done. Next: npm run optimize:images');

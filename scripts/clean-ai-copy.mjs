import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const files = [
  'src/utils/schema.ts',
  'src/utils/rss.ts',
  'src/data/faq.ts',
  'src/data/blog/posts.ts',
  'src/i18n/en.ts',
  'src/config/site.ts',
];

const reps = [
  ['HalloweenTheGameCheats Editorial', 'Halloween the Game Cheats'],
  ['HalloweenTheGameCheats Community Forum', 'Halloween the Game Cheats Forum'],
  ['HalloweenTheGameCheats Blog', 'Halloween the Game Cheats Blog'],
  ['HalloweenTheGameCheats Support', 'Halloween the Game Cheats Support'],
  ['Join HalloweenTheGameCheats on Discord', 'Join Halloween the Game Cheats on Discord'],
  ['HalloweenTheGameCheats home', 'Halloween the Game Cheats home'],
  ['HalloweenTheGameCheats', 'Halloween the Game Cheats'],
  ["TITLE_PREFIX = 'Halloween the Game Cheats & Hacks'", "TITLE_PREFIX = 'Halloween the Game Cheats'"],
  ['humanized Aimbot', 'smooth aimbot'],
  ['humanized order', 'smooth order'],
  ['humanized input', 'smooth input'],
  ['humanized', 'smooth'],
  [
    'Climbing matchmaking with halloween-the-game aimbot means smooth aimbot—not instant bot bursts that draw reports.',
    'Ranked Halloween the Game aimbot works better with smooth tracking than instant snaps that get you reported.',
  ],
  [
    'maintains private halloween the game cheats for Windows PC 1v4 multiplayer and story mode—not console lobby codes. Every module ships through the operator portal with secure checkout, Discord support, and live status banners before patch-day queues.',
    'sells Halloween the Game cheats for Windows PC 1v4 multiplayer and story mode. Check status before you queue after a patch.',
  ],
  [
    'maintains private halloween the game cheats for Windows PC 1v4 multiplayer and story mode. Every module ships through the operator portal with secure checkout, Discord support, and live status banners before patch-day queues.',
    'sells Halloween the Game cheats for Windows PC 1v4 multiplayer and story mode. Check status before you queue after a patch.',
  ],
  [
    'maintains private halloween the game cheats for Windows PC 1v4 multiplayer and story mode. Check live status before every patch-day queue.',
    'sells Halloween the Game cheats for Windows PC 1v4 multiplayer and story mode. Check status before you queue after a patch.',
  ],
  [
    'maintains private halloween the game cheats for Windows PC 1v4 multiplayer and story mode.',
    'sells Halloween the Game cheats for Windows PC 1v4 multiplayer and story mode.',
  ],
  [
    'ships a modular external suite for Windows PC ranked—not lobby cheat codes. Aimbot tracks targets, objective assist clears map points, ESP wallhack exposes third-parties, and utility tools like Radar Hack and Skin Changer round out the toolkit. This is the complete feature map across',
    'sells external Halloween the Game cheats for PC Matchmaking. Aimbot, objective assist, ESP wallhack, radar and Skin Changer. See',
  ],
];

for (const rel of files) {
  const file = path.join(root, rel);
  let text = fs.readFileSync(file, 'utf8');
  const before = text;
  for (const [from, to] of reps) text = text.split(from).join(to);
  if (text !== before) {
    fs.writeFileSync(file, text);
    console.log('updated', rel);
  } else {
    console.log('noop', rel);
  }
}

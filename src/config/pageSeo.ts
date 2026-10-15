/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Halloween the Game Cheats | Myers ESP, Survivor Toolkit & Aim Assist',
    description:
      'Halloween the Game cheats for Steam PC: Myers toolkit, Survivor ESP, aim assist, world/NPC markers, 2D radar and stream-proof overlay. Windows 10/11, Intel/AMD.',
  },
  '/products/halloween-the-game-cheats/': {
    title: 'Halloween the Game Cheats Products | Elite Myers & Survivor Suite',
    description:
      'Halloween the Game Elite cheats with Myers/Survivor toolkits, aim assist and world ESP for Steam PC, plus HWID spoofer and account tools.',
  },
  '/products/halloween-the-game-cheats/elite/': {
    title: 'Halloween the Game Elite Cheats | Myers Toolkit, Survivor ESP & Aim Assist',
    description:
      'Halloween the Game Elite with Myers/Shape options, Survivor toolkit, aim assist, world/NPC markers, 2D radar, stream-proof overlay and priority patches.',
  },
  '/products/halloween-the-game-cheats/utilities/': {
    title: 'Halloween the Game Utilities | HWID Spoofer & Account Tools',
    description:
      'HWID Spoofer after hardware bans and account tools for Steam and Easy Anti-Cheat appeals on Halloween the Game PC.',
  },
  '/blog/': {
    title: 'Halloween the Game Cheats Guides | Myers ESP, Aim Assist & EAC',
    description:
      'Guides on Halloween the Game Myers/Survivor ESP, aim assist, stream-proof setup and Easy Anti-Cheat patch checks.',
  },
  '/forum/': {
    title: 'Halloween the Game Cheats Forum',
    description:
      'Talk Halloween the Game cheat setup, Myers/Survivor configs, EAC status and product questions.',
  },
  '/faq/': {
    title: 'FAQ | Halloween the Game Myers ESP, Aim Assist & Setup',
    description:
      'Answers on Halloween the Game cheat tiers, Myers toolkit, Survivor ESP, aim assist, HWID spoofer and loader setup.',
  },
  '/terms/': {
    title: 'Terms & Conditions | Halloween the Game Cheats',
    description:
      'Purchase terms, license use and refund policy for Halloween the Game cheat products on halloweenthegamecheats.net.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Halloween the Game Cheats',
    description:
      'How halloweenthegamecheats.net uses analytics, cookies and contact data.',
  },
  '/about/': {
    title: 'About Halloween the Game Cheats',
    description:
      'Halloween the Game Cheats sells PC Halloween the Game cheat tiers, guides and utilities at halloweenthegamecheats.net.',
  },
  '/support/': {
    title: 'Support | Halloween the Game Cheats',
    description:
      'Help with Halloween the Game cheat loader setup, Myers/Survivor configs, HWID spoofing and checkout.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}

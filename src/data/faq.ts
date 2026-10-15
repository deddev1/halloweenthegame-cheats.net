import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const elite = link('Halloween the Game Elite', productPath('elite'));
const lite = link('Lite tier (ESP wallhack & ESP)', ROUTES.products);
const pro = link('Pro tier (scripts included)', ROUTES.products);
const productsHub = link('Halloween the Game products', ROUTES.products);
const hwid = link('HWID Spoofer', productPath('hwid-spoofer'));
const ugc = link('account tools', productPath('ugc'));
const skin = link('Skin Changer', productPath('unlock-all'));
const faqPage = link('full FAQ', ROUTES.faq);
const blog = link('blog guides', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if Halloween the Game cheats are online?',
    a: a('The live status banner is on halloweenthegamecheats.net and in the Discord #status channel. Always check after a Halloween the Game or EAC update.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Halloween the Game.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using third-party halloween the game cheats?',
    a: a('Yes—any modification carries risk. EAC and report systems evolve. Read current status and accept the risk before use.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Halloween the Game via Steam on Windows 10/11 64-bit only. macOS and Linux are not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products and utilities listed?',
    a: `${productsHub} lists cheat tiers, ${hwid}, ${ugc}, and ${skin} with feature lists and checkout via our partner.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is Halloween the Game ESP wallhack / ESP?',
    a: `Myers and Survivor ESP show player positions, held items, action states and world markers through walls. ${lite} covers awareness overlays. ${pro} and ${elite} add aim assist on top.`,
    scopes: ['lite', 'pro', 'elite'],
  },
  {
    id: 'esp-vs-scripts',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP and aim assist?',
    a: `ESP modules are information overlays—they do not move your aim. Aim Assist (Key, FOV, Smooth, Bone Selection) is on ${pro} and ${elite}. You can run awareness-only on ${lite}.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'faqWhichTierEsp',
    q: 'Which tier do I need for ESP wallhack only?',
    a: `${lite} is awareness only: Myers/Survivor ESP, world markers and 2D radar. ${pro} adds Aim Assist. ${elite} adds the full Myers/Survivor toolkit extras, fullbright, combat mode and panic key.`,
    scopes: ['lite'],
  },
  {
    id: 'which-tier-scripts',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'Which tier includes Aimbot?',
    a: `${pro} ships Aim Assist with Aim Key, FOV, Smooth, Bone Selection, Visible Check and Draw FOV. ${elite} includes everything in Pro plus full Myers toolkit extras, fullbright, combat mode and panic key. ${lite} has no aim assist.`,
    scopes: ['pro'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'How do you rank Lite vs Pro vs Elite?',
    a: `Myers/Survivor awareness only → ${lite}. Aim assist for 1v4 Steam matches → ${pro}. Full Myers & Survivor suite with priority patches → ${elite}. Compare on each cheat page or the ${faqPage}.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'faqEliteSlots',
    q: 'Why is Elite limited slots?',
    a: `Elite is a private build with direct dev support and priority patch delivery. Slot caps keep patch cycles fast. Check the status banner before checkout.`,
    scopes: ['elite'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Can OBS capture my overlay?',
    a: `Stream-proof mode on ${lite}, ${pro} and ${elite} hides overlays from OBS and Discord share. Test a local recording before going live.`,
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Are undetected Halloween the Game cheats guaranteed?',
    a: a('No. Undetected is current status on the product page—not a permanent guarantee. Stop if the build shows updating, testing, or detected.'),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Is ESP safer than aim assist?',
    a: a('ESP is quieter in replay than obvious aim-assist patterns, but it is still a cheat. EAC does not ignore overlays because you left aim assist off.'),
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'When do I need the HWID Spoofer?',
    a: `Use ${hwid} when fresh Steam accounts fail instantly on one PC but work elsewhere—hardware enforcement. Not for account-only EAC cases; see ${ugc} instead.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'ugc-what',
    topic: 'products',
    icon: 'faqUgcWhat',
    q: 'What is account tools?',
    a: `${ugc} (Unban & Governance Control) is an appeal workspace for Steam account restrictions and EAC bans—custom workflows and case tracking, not a guaranteed unban service.`,
    scopes: ['ugc'],
  },
  {
    id: 'skin-changer',
    topic: 'products',
    icon: 'faqSkinChanger',
    q: 'Does Skin Changer modify my Steam inventory?',
    a: `${skin} previews cosmetics locally on your client. Other players see your real inventory. Included with ${elite}; available standalone for cosmetic preview only.`,
    scopes: ['unlock-all'],
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Is the loader injected into the Steam folder?',
    a: `Halloween the Game Cheats runs external with cloud config sync—no files injected into the Halloween the Game directory. EAC risk still applies. See ${productsHub}.`,
  },
  {
    id: 'blog-vs-cheats',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Are blog cheat codes the same as matchmaking cheats?',
    a: `No. Blog articles about Steam console commands apply only in custom lobbies with cheats enabled. Matchmaking halloween the game cheats are separate products—see ${lite}, ${pro} and ${elite}.`,
  },
  {
    id: 'blog-setup',
    topic: 'blog',
    icon: 'faqBlogSetup',
    q: 'Where do blog setup guides point for purchase?',
    a: `Guides link to tier pages and ${productsHub}. Checkout runs through our secure partner—never paste loader files from random Discord DMs.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Where do I compare plans side by side?',
    a: `Each cheat tier page includes a compare table. The ${faqPage} collects product, cheat and blog answers in one place.`,
  },
  {
    id: 'who-lite',
    topic: 'plans',
    icon: 'faqWhoLite',
    q: 'Who should stay on Lite?',
    a: `Players who only want map awareness—Myers/Survivor ESP and world markers—and will not touch aim assist. If you keep enabling aim assist, buy ${pro} instead.`,
    scopes: ['lite'],
  },
  {
    id: 'who-pro',
    topic: 'plans',
    icon: 'faqWhoPro',
    q: 'Who should buy Pro?',
    a: `Ranked players who want Aimbot, Smooth Aim and Hotkey macros with ESP wallhack included. Pro is the most popular tier at halloweenthegamecheats.net.`,
    scopes: ['pro'],
  },
  {
    id: 'who-elite',
    topic: 'plans',
    icon: 'faqWhoElite',
    q: 'Who should buy Elite?',
    a: `Operators who want the full Myers & Survivor suite, aim assist extras, combat mode, panic key and priority patch delivery when slots are open.`,
    scopes: ['elite'],
  },
  {
    id: 'eac-update',
    topic: 'safety',
    icon: 'faqEacUpdate',
    q: 'What should I do after a EAC update?',
    a: a('Check halloweenthegamecheats.net status and Discord #status. Do not launch until the banner shows online. Load conservative presets after any patch.'),
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: a('Open Discord after purchase with your order email, Windows version and Halloween the Game client build. Staff walk through loader setup live.'),
  },
  {
    id: 'zero-build-ranked',
    topic: 'plans',
    icon: 'faqZoomRanked',
    q: 'Do tiers work in story mode and ranked?',
    a: `Yes—${lite}, ${pro} and ${elite} include story mode and matchmaking presets in the portal. Tune distance caps and script delay before your first queue.`,
  },
  {
    id: 'zoom-hack',
    topic: 'esp',
    icon: 'faqZoomHack',
    q: 'Which tier includes radar hack?',
    a: `Radar ships on ${lite} and carries through ${pro} and ${elite}. Mini-radar helps zone awareness without guessing rotates.`,
    scopes: ['lite'],
  },
  {
    id: 'auto-farm',
    topic: 'scripts',
    icon: 'faqAutoFarm',
    q: 'Which tier includes the full Myers Toolkit extras?',
    a: `Full Myers toolkit extras (out-of-screen arrows, last known position), fullbright, combat mode and panic key are ${elite} only. ${pro} covers aim assist without those Elite extras.`,
    scopes: ['elite'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'What are private Halloween the Game cheats?',
    a: a('Private means per-user keys and maintained builds—not public zip packs. Halloween the Game Cheats ships portal delivery for Myers/Survivor ESP and aim assist tiers.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `This site includes landing FAQs and per-page sections. See the ${faqPage} for all product, cheat and blog answers—or read ${blog} for deep guides.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

/** Shared FAQ block copy + filters (home, /faq/, products, blog). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter cheat plans, Myers ESP, aim assist, products, setup and blog answers.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) =>
      !f.scopes &&
      ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) =>
    ['rank-lite-vs-pro', 'compare-plans', 'undetected', 'eac-update'].includes(f.id),
  );

  const combined =
    kind === 'tier'
      ? [...scoped, ...tierCompare, ...general.slice(0, 8)]
      : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'blog-guide-start',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Should I use console cheat codes in matchmaking?',
      a: a('No. private lobby cheat codes only work in custom games with cheats enabled. Matchmaking requires separate halloween the game cheats from halloweenthegamecheats.net tiers.'),
    },
    {
      id: 'blog-guide-tier',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Which tier matches this guide?',
      a: `Awareness guides → ${lite}. Script and combo guides → ${pro}. Bot and kill-steal topics → ${elite}.`,
    },
    {
      id: 'blog-guide-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'Is this guide still valid after a patch?',
      a: a('Check the article date and the live status banner. Patch-day articles note when modules change—Discord #status has the latest build notes.'),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download the loader?',
      a: a('Only from your operator portal after checkout—not from third-party links in comments or DMs.'),
    },
    {
      id: 'blog-setup-lobby',
      topic: 'blog',
      icon: 'faqBlogSetupLobby',
      q: 'Should I test in a lobby first?',
      a: a('Yes. Load conservative presets in a lobby or story mode before ranked. Tune script delay and ESP distance caps over several sessions.'),
    },
  ],
  Security: [
    {
      id: 'blog-sec-eac',
      topic: 'blog',
      icon: 'faqBlogSecEac',
      q: 'Does this article guarantee undetected status?',
      a: a('No article replaces the live status banner. Undetected is a point-in-time label—stop if status shows updating or detected.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to ${lite}, ${pro}, ${elite} and ${productsHub}. Feature lists on product pages are authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Open Discord with your order email and the article slug. Staff reference the same portal presets mentioned in guides.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: a('Re-check status after every Halloween the Game update. Portal presets update with patch notes—reload configs instead of copying old sliders.'),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('map-hack') || slug.includes('esp') || slug.includes('ward')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which tier covers ESP wallhack from this article?',
      a: `${lite} includes Myers/Survivor ESP, world markers and 2D radar. ${pro} adds aim assist on the same overlay stack.`,
    });
  }
  if (slug.includes('script') || slug.includes('combo') || slug.includes('auto-combo')) {
    slugHints.push({
      id: 'blog-slug-scripts',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Which tier includes aim assist in this article?',
      a: `${pro} and ${elite} ship Aimbot and related modules. ${lite} is ESP wallhack only.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ban') || slug.includes('eac')) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Does this article replace HWID or account tools products?',
      a: `Recovery guides complement ${hwid} and ${ugc}—read product pages for workflow scope and realistic outcomes.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'Survivor ESP (Box / Skeleton / Health / Distance / Name)', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Michael Myers ESP & View Direction', icon: 'compareWardLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'Teammate ESP', icon: 'compareRuneTimer' as const, lite: true, pro: true, elite: true },
  { feature: 'World / NPC & Escape Markers', icon: 'compareFullMapHack' as const, lite: true, pro: true, elite: true },
  { feature: '2D Radar', icon: 'compareZoomHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Stream-Proof Overlay', icon: 'compareStreamproof' as const, lite: true, pro: true, elite: true },
  { feature: 'Visual Options (Box Styles, Colors, Snaplines)', icon: 'compareRadarHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Aim Assist (Key / FOV / Smooth)', icon: 'compareAutoCombo' as const, lite: false, pro: true, elite: true },
  { feature: 'Bone Selection & Visible Check', icon: 'compareTargetSelector' as const, lite: false, pro: true, elite: true },
  { feature: 'Draw FOV', icon: 'compareAbilityRadius' as const, lite: false, pro: true, elite: true },
  { feature: 'Stalk Target & Terror Radius', icon: 'compareSmokeAlert' as const, lite: false, pro: true, elite: true },
  { feature: 'Myers Threat State & Proximity Warning', icon: 'compareSmoothAim' as const, lite: false, pro: true, elite: true },
  { feature: 'Full Myers Toolkit extras (OOS Arrows, Last Known Pos)', icon: 'compareAutoFarm' as const, lite: false, pro: false, elite: true },
  { feature: 'Fullbright / Night Clear', icon: 'compareAutoKillSteal' as const, lite: false, pro: false, elite: true },
  { feature: 'Combat Mode & Panic Key', icon: 'compareAutoShieldBreak' as const, lite: false, pro: false, elite: true },
  { feature: 'Priority patch queue', icon: 'comparePriorityPatch' as const, lite: false, pro: false, elite: true },
  { feature: 'Direct Discord support', icon: 'compareDevSupport' as const, lite: false, pro: false, elite: true },
  { feature: 'Cloud config backup', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
];

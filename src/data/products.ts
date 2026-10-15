import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  lite: ['halloween-the-game-esp-wallhack-setup', 'halloween-the-game-lite-vs-pro', 'halloween-the-game-radar-hack-guide', 'eac-patch-day-checklist'],
  pro: [
    'halloween-the-game-aimbot-ranked-guide',
    'halloween-the-game-aimbot-combat-guide',
    'halloween-the-game-lite-vs-pro',
    'halloween-the-game-stream-proof-setup',
  ],
  elite: [
    'halloween-the-game-elite-tier-guide',
    'halloween-the-game-cheats-features-guide',
    'halloween-the-game-esp-wallhack-setup',
    'eac-patch-day-checklist',
    'how-to-buy-halloween-the-game-cheats-2026',
  ],
  'hwid-spoofer': [
    'halloween-the-game-hwid-spoofer-after-ban',
    'eac-bypass-halloween-the-game-guide',
    'eac-patch-day-checklist',
    'halloween-the-game-external-cheat-guide',
  ],
  ugc: [
    'eac-bypass-halloween-the-game-guide',
    'halloween-the-game-hwid-spoofer-after-ban',
    'how-to-buy-halloween-the-game-cheats-2026',
  ],
  'unlock-all': [
    'halloween-the-game-skin-changer-guide',
    'halloween-the-game-cheats-features-guide',
    'halloween-the-game-stream-proof-setup',
  ],
};

const productBase = '/products/halloween-the-game-cheats/';

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on halloweenthegamecheats.net and Discord #status before purchase—especially after a Halloween the Game or EAC update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Elite halloween the game cheats or the utility that matches your goal. Review the feature list before checkout via our secure checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, Steam platform, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test in a lobby, load presets, then queue matchmaking or story mode.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Halloween the Game and EAC receive frequent updates. Confirm module availability on the live status panel at halloweenthegamecheats.net before you purchase or launch. Overlay behavior may differ in lobbies, replays and spectator mode after patches.';

const sharedLimitations =
  'Third-party software in Halloween the Game can violate Steam Subscriber Agreement and lead to EAC bans or account action. You use this software at your own risk. Compatibility and availability can change after game, EAC, or Windows updates without notice.';

const halloweenTheGameSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10 or Windows 11 (64-bit).' },
  { icon: 'reqCpu', text: 'Intel or AMD CPU that meets Halloween the Game published requirements.' },
  { icon: 'reqSteam', text: 'Steam only — current Halloween the Game client with latest patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
];

type GalleryKey = keyof typeof galleryRaw;

const gameplay = '/images/gameplay';

const galleryRaw = {
  gpMapHack: {
    src: `${gameplay}/halloween-the-game-esp-wallhack.png`,
    alt: 'Halloween the Game cheat ESP overlay showing item markers Master Key Kitchen Knife First Aid and player box with HP on Lillian Myers',
    caption: 'World & player ESP',
    captionDesc: 'Item distance markers and player box ESP with health and stamina.',
  },
  gpScripts: {
    src: `${gameplay}/halloween-the-game-aimbot-combat.png`,
    alt: 'Halloween the Game aim assist and skeleton ESP cheat overlay with name tags HP and head markers',
    caption: 'Aim assist ESP',
    captionDesc: 'Aim markers with skeleton ESP and player info.',
  },
  gpZoomHack: {
    src: `${gameplay}/halloween-the-game-radar-hack.png`,
    alt: 'Halloween the Game 2D radar and item ESP cheat overlay with weapon markers and minimap',
    caption: '2D radar',
    captionDesc: 'Minimap radar with weapon and item ESP labels.',
  },
  gpSkinChanger: {
    src: `${gameplay}/halloween-the-game-skin-changer.png`,
    alt: 'Halloween the Game survivor cosmetic outfit menu used as skin changer preview gameplay',
    caption: 'Survivor outfits',
    captionDesc: 'Survivor outfit customization preview.',
  },
  gpAutoKill: {
    src: `${gameplay}/halloween-the-game-auto-aim.png`,
    alt: 'Halloween the Game aim assist head markers with red box ESP skeletons and HP bars',
    caption: 'Aim markers',
    captionDesc: 'Head aim markers with box and skeleton ESP.',
  },
  gpFarmBot: {
    src: `${gameplay}/halloween-the-game-loot-radar.png`,
    alt: 'Halloween the Game world NPC ESP on Haddonfield street with Resident Medkit Weapon Phone Car Escape labels and orange skeleton highlight',
    caption: 'World / NPC ESP',
    captionDesc: 'Residents, weapons, phones, cars and escape markers with distance.',
  },
  gpHeroEsp: {
    src: `${gameplay}/halloween-the-game-player-esp.png`,
    alt: 'Halloween the Game cheat gameplay with skeleton ESP box ESP name tags HP bars and head aim markers on Myers and survivors',
    caption: 'Skeleton & box ESP',
    captionDesc: 'Skeleton wallhack, boxes, names and head aim markers.',
  },
  gpThermal: {
    src: `${gameplay}/halloween-the-game-thermal-esp.png`,
    alt: 'Halloween the Game ESP wallhack cheat with item distance labels and highlighted player through the dark map',
    caption: 'ESP wallhack',
    captionDesc: 'Through-wall item and player ESP in Haddonfield.',
  },
  gpBuildFight: {
    src: `${gameplay}/halloween-the-game-chase-fight-esp.png`,
    alt: 'Halloween the Game chase ESP showing multiple survivors with boxes skeletons names and distances',
    caption: 'Chase ESP',
    captionDesc: 'Multi-survivor ESP during a chase in a garage.',
  },
  gpArena: {
    src: `${gameplay}/halloween-the-game-match-wallhack.png`,
    alt: 'Halloween the Game match wallhack with dense world ESP labels residents weapons phones and escape routes',
    caption: 'Match wallhack',
    captionDesc: 'Full world ESP labels across a Haddonfield street.',
  },
  gpSpawn: {
    src: `${gameplay}/halloween-the-game-haddonfield-esp.png`,
    alt: 'Halloween the Game Haddonfield ESP on Virginia St with objective keys weapons and skeleton box overlay',
    caption: 'Haddonfield ESP',
    captionDesc: 'Street-level objective and player ESP in Haddonfield.',
  },
  gpLongRange: {
    src: `${gameplay}/halloween-the-game-long-range-esp.png`,
    alt: 'Halloween the Game weapon and item ESP showing shotguns axes phones fuses health spray labels with distances and 2D radar',
    caption: 'Weapon & item ESP',
    captionDesc: 'Weapons, keys, fuses and health items with distance readouts.',
  },
  gpAimLock: {
    src: `${gameplay}/halloween-the-game-aimbot-lock.png`,
    alt: 'Halloween the Game aim lock markers on heads with skeleton ESP boxes names and HP readouts',
    caption: 'Aim lock',
    captionDesc: 'Head aim lock with skeleton and box ESP.',
  },
  gpChams: {
    src: `${gameplay}/halloween-the-game-chams-esp.png`,
    alt: 'Halloween the Game chams style orange skeleton highlight with world ESP item labels on Haddonfield',
    caption: 'Chams / skeleton',
    captionDesc: 'Glowing skeleton highlight with world ESP labels.',
  },
  gpSquad: {
    src: `${gameplay}/halloween-the-game-squad-esp.png`,
    alt: 'Halloween the Game Survivor ESP with red boxes skeletons names distances and HP bars on multiple players in a garage',
    caption: 'Survivor ESP',
    captionDesc: 'Boxes, skeletons, names, distance and HP on survivors through walls.',
  },
  gpCombat: {
    src: `${gameplay}/halloween-the-game-combat-esp.png`,
    alt: 'Halloween the Game cheat ESP on Virginia St with Sedan Key Fuse Repair Kit weapon markers skeleton box and Bloodlust status',
    caption: 'Objective ESP',
    captionDesc: 'Sedan key, fuse, repair kit and player skeleton ESP with status.',
  },
  gpMyersShape: {
    src: `${gameplay}/halloween-the-game-myers-shape-options.png`,
    alt: 'Halloween the Game Michael Myers Shape Jump ability menu with The Shape in mask and jumpsuit at night',
    caption: 'Myers / Shape options',
    captionDesc: 'Michael Myers ability loadout including Shape Jump.',
  },
  gpMyersWeapon: {
    src: `${gameplay}/halloween-the-game-myers-weapon.png`,
    alt: 'Halloween the Game Michael Myers holding kitchen knife with melee weapon select bar axe sledgehammer pitchfork',
    caption: 'Myers weapons',
    captionDesc: 'Myers knife and melee weapon selection overlay.',
  },
  gpSurvivorItems: {
    src: `${gameplay}/halloween-the-game-survivor-items.png`,
    alt: 'Halloween the Game survivor holding first aid spray with item hotbar tools medical kits and equipment icons',
    caption: 'Survivor items',
    captionDesc: 'Survivor first-aid spray and item selection hotbar.',
  },
  gpSurvivorOutfits: {
    src: `${gameplay}/halloween-the-game-survivor-outfits.png`,
    alt: 'Halloween the Game survivor outfit customization menu with blonde survivor in green turtleneck in a dark workshop',
    caption: 'Survivor outfits',
    captionDesc: 'Survivor cosmetic / outfit selection screen.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'halloween-the-game-cheats';
}

const tierAbout: Record<string, ProductPage['about']> = {
  lite: [
    {
      type: 'p',
      text: 'Halloween the Game Lite is built for awareness first. Knowing survivor or Myers positions, hide spots, vehicles and escape routes wins more 1v4 matches than raw aim—Lite gives you that edge without aim assist.',
    },
    { type: 'h2', text: 'Awareness-only by design' },
    {
      type: 'p',
      text: 'Lite skips Aim Assist. Survivor ESP, Myers ESP, teammate ESP, world/NPC markers and 2D radar keep you informed. Stream-proof mode hides overlays from OBS for content creators.',
    },
  ],
  pro: [
    {
      type: 'p',
      text: 'Halloween the Game Pro adds Aim Assist on top of full Myers/Survivor awareness. Tune Aim Key, FOV, Smooth, Bone Selection and Visible Check with portal presets so tracking stays natural.',
    },
    { type: 'h2', text: 'Aim assist + awareness combined' },
    {
      type: 'p',
      text: 'Pro inherits every Lite module and adds Aim Assist with Draw FOV, Stalk Target Highlight, Terror Radius Indicator and Myers Threat State tools. See the chase before it starts.',
    },
  ],
  elite: [
    {
      type: 'p',
      text: 'Halloween the Game Elite is the private build with the complete Myers / Shape and Survivor toolkits—aim assist, world/NPC markers, visual options, 2D radar, fullbright, stream-proof overlay, combat mode, panic key and direct Discord support.',
    },
    { type: 'h2', text: 'Use Elite responsibly' },
    {
      type: 'p',
      text: 'Elite power demands disciplined profiles. Test in lobbies, start with portal conservative presets, and scale up over days—not minutes. Staff in Discord help Elite users tune Myers or Survivor configs before their first Steam match.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  lite: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Survivor and Myers ESP with boxes, skeletons, distance and names; teammate ESP; world markers for doors, closets, vehicles and escape routes; 2D radar; visual options; and stream-proof overlay. Steam PC only.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'Lite license holders can upgrade to Pro or Elite through the portal without losing config backups. Compare tiers on the main product page before checkout.',
    },
  ],
  pro: [
    { type: 'h2', text: 'Aim assist controls' },
    {
      type: 'p',
      text: 'Aim Key, Aim FOV, Aim Smooth, Bone Selection, Visible Check and Draw FOV. Start with portal presets, not max FOV. Pair with Myers or Survivor toolkit ESP for 1v4 Steam matches.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Pro is the most popular tier at halloweenthegamecheats.net—enough aim assist for live matches without Elite slot limits. Read the aim assist guide in the blog before your first session.',
    },
  ],
  elite: [
    { type: 'h2', text: 'Full Myers & Survivor suite' },
    {
      type: 'p',
      text: 'Enable Myers Toolkit and Survivor Toolkit with stalk tools, threat state, world/NPC markers, escape routes, visual options, 2D radar, fullbright, stream-proof overlay, combat mode and custom panic key. Test in a lobby before live matches.',
    },
    { type: 'h2', text: 'Availability' },
    {
      type: 'p',
      text: 'Elite shows as limited slots on the status banner. Open a Discord ticket if checkout is gated—staff confirm slot availability before purchase.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when fresh Steam accounts fail instantly on one PC but work elsewhere—classic HWID enforcement. Do not use for account-only EAC cases; see [account tools](/products/halloween-the-game-cheats/ugc/) instead.',
    },
    { type: 'h2', text: 'Full workflow' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then conservative cheat profile before ranked. Full checklist ships in the portal and in our HWID blog guide.',
    },
  ],
  'ugc': [
    { type: 'h2', text: 'What account tools covers' },
    {
      type: 'p',
      text: 'account tools (Unban & Governance Control) is an appeal workspace for Steam account restrictions, EAC bans, trade holds and security flags. Build custom workflows, automate dispute steps and track case status from one dashboard—not a guaranteed unban service.',
    },
    { type: 'h2', text: 'Realistic expectations' },
    {
      type: 'p',
      text: 'Some EAC bans cannot be reversed. account tools organizes evidence and follow-ups for Steam review. Pair with [HWID Spoofer](/products/halloween-the-game-cheats/hwid-spoofer/) when hardware is flagged, or a new account when reputation is burned.',
    },
  ],
  'unlock-all': [
    { type: 'h2', text: 'Local preview only' },
    {
      type: 'p',
      text: 'Cosmetics display on your client for testing and content creation. Other players in your lobby see your actual inventory, not preview skins.',
    },
    { type: 'h2', text: 'Included with Elite' },
    {
      type: 'p',
      text: 'Skin Changer ships inside the Elite tier. Buy standalone here if you want cosmetic preview without full combat modules.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  lite: {
    images: slide('gpHeroEsp', 'gpLongRange', 'gpSquad'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: halloweenTheGameSystemRequirements,
    fullFeatures: [
      'Survivor ESP (Box, Skeleton, Health, Distance, Name)',
      'Michael Myers ESP (Box, Skeleton, Distance, View Direction)',
      'Teammate ESP, Distance, Health, Held Item',
      'World / NPC markers (doors, hide spots, vehicles, items)',
      'Escape Route & Rescue Objective Highlights',
      '2D Radar & Radar Range',
      'Box Styles, Snaplines, Health Bars, Distance Readouts',
      'Custom ESP Colors (Visible / Hidden)',
      'Stream-Proof Overlay',
      'Max World Distance',
      'Cloud config backup',
      'Patch auto-updater',
    ],
    overview: {
      title: 'Halloween the Game Lite: Myers & Survivor ESP',
      paragraphs: [
        'Lite is awareness-only: Survivor ESP, Myers ESP, teammate ESP, world/NPC markers, 2D radar and stream-proof overlay. No aim assist.',
        'Best if you want Haddonfield awareness in 1v4 matches without combat modules. Steam PC only (Windows 10/11, Intel/AMD).',
      ],
    },
  },
  pro: {
    images: slide('gpScripts', 'gpAimLock', 'gpCombat'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: halloweenTheGameSystemRequirements,
    fullFeatures: [
      'All Lite Myers / Survivor / World ESP modules',
      'Aim Assist',
      'Aim Key, Aim FOV, Aim Smooth',
      'Bone Selection',
      'Visible Check',
      'Draw FOV',
      'Stalk Target Highlight',
      'Terror Radius Indicator',
      'Line of Sight Check',
      'Myers Threat State & Proximity Warning',
      'Custom Crosshair',
      'Cloud config backup',
      'Patch auto-updater',
      'Discord operator support',
    ],
    overview: {
      title: 'Halloween the Game Pro: aim assist plus ESP',
      paragraphs: [
        'Pro includes everything in Lite, plus Aim Assist with Aim Key, FOV, Smooth, Bone Selection, Visible Check and Draw FOV.',
        'Use Myers or Survivor toolkit presets, then tune aim assist for 1v4 Steam matches. Start with portal defaults, not max FOV.',
      ],
    },
  },
  elite: {
    images: slide('gpAutoKill', 'gpThermal', 'gpBuildFight'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: halloweenTheGameSystemRequirements,
    fullFeatures: [
      'Enable Myers Toolkit — Survivor ESP, Box, Skeleton, Health State, Distance, Name',
      'Survivor Held Weapon & Action State (Looting / Healing / Alerting)',
      'Stalk Target Highlight, Terror Radius Indicator, Line of Sight Check',
      'Out of Screen Arrows & Last Known Position Marker',
      'Enable Survivor Toolkit — Michael Myers ESP, Box, Skeleton, Distance, View Direction',
      'Myers Threat State (Stalking / Chasing) & Proximity Warning',
      'Teammate ESP, Distance, Health, Held Item',
      'Aim Assist — Aim Key, FOV, Smooth, Bone Selection, Visible Check, Draw FOV',
      'World / NPC — Civilian ESP, Family/Resident, Weapons, Phones, Doors, Closets, Vehicles',
      'Alert / Authority, Rescue Objectives & Escape Route Highlights',
      'Visual Options — Box Styles, Skeleton Thickness, Snaplines, Health Bars, Colors',
      '2D Radar & Radar Range',
      'Fullbright / Night Clear, Stream-Proof Overlay, Custom Crosshair',
      'Combat Mode (Hide World ESP), Custom Menu Key, Custom Panic Key',
      'Priority patch queue & direct Discord support',
      'Cloud config backup & patch auto-updater',
    ],
    overview: {
      title: 'Halloween Cheats: full Myers & Survivor suite',
      paragraphs: [
        'Elite ships the complete Myers / Shape and Survivor toolkits with aim assist, world/NPC markers, visual options, 2D radar, stream-proof overlay, combat mode and panic key.',
        'Steam only on Windows 10/11 (Intel/AMD). Slots are limited. Check the status banner on halloweenthegamecheats.net before you buy.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('gpSpawn', 'gpArena', 'gpChams'),
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching Halloween the Game.',
    limitations:
      'Spoofing does not help account-only EAC cases. Never stack two spoof tools. Shared or work PCs may not be suitable. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching Halloween the Game after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'Discord recovery support',
    ],
    overview: {
      title: 'HWID Spoofer for Halloween the Game PC bans',
      paragraphs: [
        'Use the HWID Spoofer when Easy Anti-Cheat flags your PC hardware but the Steam account is still fine. Includes disk and MAC tools, a restore-point checklist, a compatibility scan and post-spoof checks.',
        'Use it when new accounts die on one PC but work on another. It does not fix account-only EAC bans. After spoofing, use a safer cheat profile before Matchmaking.',
      ],
    },
  },
  ugc: {
    images: slide('gpZoomHack', 'gpFarmBot', 'gpLongRange'),
    goodToKnow:
      'Gather order email, platform account details and restriction screenshots before opening a ticket. account tools structures appeals—it does not bypass platform review.',
    limitations:
      'account tools does not guarantee account restoration. Results vary by case type. Permanent EAC bans may require a new account path instead of appeal.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout on halloweenthegamecheats.net or at checkout on halloweenthegamecheats.net.' },
      { icon: 'reqShieldAccount', text: 'Account details and ban or restriction notification if available.' },
      { icon: 'reqWifiPortal', text: 'Internet access for Discord support and case dashboard.' },
    ],
    fullFeatures: [
      'Custom appeal workflows',
      'Restriction dispute automation',
      'Case documentation templates',
      'Status tracking dashboard',
      'Identity verification guide',
      'Evidence upload structure',
      'Timeline tracker',
      'Follow-up response templates',
      'Multi-platform support',
    ],
    overview: {
      title: 'account tools account appeal tools',
      paragraphs: [
        'account tools (Unban & Governance Control) helps you organize appeals for Steam restrictions and EAC bans. It does not guarantee an unban.',
        'Track cases, keep evidence in one place and follow up from the dashboard. Discord support can walk you through steps when needed.',
      ],
    },
  },
  'unlock-all': {
    images: slide('gpSkinChanger', 'gpChams', 'gpCombat'),
    goodToKnow:
      'Unlock All previews cosmetics locally on your client. Other players in your lobby see your real inventory—not preview skins. Included with Elite tier.',
    limitations:
      'Local preview only—does not modify Steam inventory or store state. Other players cannot see previewed skins or sets.',
    systemRequirements: halloweenTheGameSystemRequirements,
    fullFeatures: [
      'Outfit skin swap',
      'Skin & cosmetic preview',
      'Cosmetic customizer',
      'Loading screen editor',
      'Cursor & HUD theme',
      'Objective & objectives replacer',
      'Favorites list',
      'Loadout export',
    ],
    overview: {
      title: 'Skin Changer / Unlock All',
      paragraphs: [
        'Unlock All lets you preview outfits, cosmetics on your Halloween the Game client. It does not change your Steam inventory or store purchases.',
        'Only you see the preview skins. Other players see your real inventory. Included with Elite, or buy it alone without combat modules.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = cheat.name === 'Lite' ? 'Halloween the Game Lite' : cheat.name === 'Pro' ? 'Halloween the Game Pro' : 'Halloween the Game Elite';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

const cheatsHubSlides = slide('gpAimLock', 'gpThermal', 'gpArena');

export const heroSlides = slide(
  'gpMapHack',
  'gpSquad',
  'gpHeroEsp',
  'gpFarmBot',
  'gpLongRange',
  'gpCombat',
  'gpMyersShape',
  'gpMyersWeapon',
  'gpSurvivorItems',
  'gpSurvivorOutfits',
  'gpAimLock',
  'gpChams',
);

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description: 'Halloween the Game Elite cheats with Myers toolkit, Survivor ESP and aim assist for Steam PC, plus HWID spoofer and account tools.',
  buyUrl: checkoutPath('halloween'),
};

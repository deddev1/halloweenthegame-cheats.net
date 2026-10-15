import type { IconName } from '../components/icons/types';

export const featureIcons: Record<string, IconName> = {
  'Myers / Shape Options': 'featureEsp',
  'Survivor Options': 'featureAimbot',
  'Aim Assist': 'stepCrosshair',
  'World / NPC Options': 'featureRadar',
  'Visual Options': 'featureUtilitySuite',
  'Misc Options': 'streamProof',
  Platform: 'compareCloudBackup',
  'Stream Proof': 'streamProof',
  '2D Radar': 'compareZoomHack',
};

export const whyUsIcons: IconName[] = ['whyShield', 'whyUsers', 'whyMonitor', 'whyHeadphones'];

export const setupStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqCheck'];

export const toolkitIcons: Record<string, IconName> = {
  Myers: 'toolkitCombat',
  Survivor: 'toolkitVision',
  Aim: 'toolkitRadar',
  World: 'toolkitWeapons',
  Visual: 'toolkitMovement',
  Misc: 'toolkitProfiles',
};

export const workflowIcons: IconName[] = [
  'workflowAlert',
  'workflowPackage',
  'workflowSettings',
  'workflowCheck',
];

export const fieldNoteIcons: IconName[] = ['fieldCalendar', 'fieldShield', 'fieldHeadphones'];

export const blogTagIcons: Record<string, IconName> = {
  Guides: 'navBlog',
  Setup: 'settings',
  Features: 'layers',
  Updates: 'refresh',
  Troubleshooting: 'alert',
};

export const heroStatusPills: { icon: IconName; label: string }[] = [
  { icon: 'espActive', label: 'Myers Toolkit' },
  { icon: 'radarOnline', label: '2D Radar' },
  { icon: 'seasonBuild', label: 'Steam Only' },
  { icon: 'undetected', label: 'Undetected' },
  { icon: 'softAim', label: 'Aim Assist' },
  { icon: 'streamProof', label: 'Stream Proof' },
  { icon: 'lootEsp', label: 'World ESP' },
  { icon: 'skeletonEsp', label: 'Survivor Skeleton' },
  { icon: 'mapHack', label: 'Survivor ESP' },
  { icon: 'support247', label: '24/7 Support' },
  { icon: 'instantDelivery', label: 'Instant Delivery' },
  { icon: 'boneSelect', label: 'Bone Selection' },
  { icon: 'liveStatus', label: 'Live Status' },
  { icon: 'autoUpdates', label: 'Auto Updates' },
];

export const heroStatIcons: IconName[] = [
  'heroStatStream',
  'heroStatClock',
  'heroStatUsers',
  'heroStatHeadphones',
];

export const cheatTierIcons: Record<string, IconName> = {
  Lite: 'tierLite',
  Pro: 'tierPro',
  Elite: 'tierElite',
};

export const productCategoryIcons: Record<string, IconName> = {
  'Core product': 'coreProduct',
  'External suite': 'externalSuite',
  'DMA hardware': 'dmaHardware',
  'System utility': 'systemUtility',
  'Account recovery': 'accountRecovery',
  Cosmetic: 'cosmetic',
};

export const acquisitionStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqZap', 'acqCheck'];

/** After-purchase timeline on product detail — one distinct icon per step */
export const productAcquisitionStepIcons: IconName[] = [
  'liveStatus',
  'acqPackage',
  'headphones',
  'acqCheck',
];

/** Product detail requirement tiles — prefer compat-style icons where mapped */
export const productRequirementIcons: Partial<Record<IconName, IconName>> = {
  reqWindows: 'compatWindows',
  reqSteam: 'compatSteam',
  reqSettings: 'compatPackage',
  reqWifi: 'compatWifi',
  reqCpu: 'compatMonitor',
  reqRestorePoint: 'compatRefresh',
  reqShieldGuide: 'compatShield',
  reqMailOrder: 'mail',
  reqShieldAccount: 'compatShield',
  reqWifiPortal: 'compatWifi',
};

export function requirementDisplayIcon(icon: IconName): IconName {
  return productRequirementIcons[icon] ?? icon;
}

export const compatibilityIcons: IconName[] = [
  'compatWindows',
  'compatPackage',
  'compatSteam',
  'compatMonitor',
  'compatRefresh',
  'compatWifi',
  'compatDiscord',
  'compatShield',
];

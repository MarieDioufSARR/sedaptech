// =========================
// ICONS
// =========================

export type IconName =
  | "Leaf"
  | "MonitorSmartphone"
  | "Users"
  | "Utensils"
  | "Store"
  | "Building2"
  | "TrendingUp"
  | "ShieldCheck"
  | "BadgeCheck"
  | "PhoneCall"
  | "ChartNoAxesCombined"
  | "HandHelping"
  | "EyeOff"
  | "BarChart3"
  | "Smartphone"
  | "Facebook"
  | "Linkedin"
  | "Instagram"
  | "Tiktok";

// =========================
// NAVIGATION
// =========================

export interface NavLink {
  label: string;
  href: string;
}

// =========================
// STATISTIQUES
// =========================

export interface StatItem {
  valeur: number;
  suffix?: string;
  label: string;
}

export interface StatSection {
  tag: string;
  chiffres: StatItem[];
}

export interface ProblematiqueItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface ProblematiqueSection {
  title: string;
  subtitle: string;
  problems: ProblematiqueItem[];
}

// =========================
// PILIERS / SERVICES
// =========================

export interface Pilier {
  num: string;
  icone: IconName;
  titre: string;
  sous: string;
  points: string[];
}
// VALEURS
// =========================

// export interface Valeur {
//   check: IconName;
//   titre: string;
//   desc: string;
// }

// =========================
// HERO
// =========================

export interface HeroSection {
  titre: string;
  titreAccent: string;
  sousTitre: string;
  ctaPrimaire: string;
  ctaSecondaire: string;
  navigation: NavLink[];
}

// =========================
// À PROPOS
// =========================

export interface AproposSection {
  tag: string;
  titre: string;
  sousTitre: string;
  sousTitre2: string;
  sousTitre3: string;
  mission: string;
}

// =========================
// SOLUTION
// =========================

export interface SolutionSection {
  badge: string;
  titre: string;
  description: string;
  services: detailSolution[];
}
export interface detailSolution {
  titre: string;
  sous: string;
}
// =========================
// Call to action
// =========================
export interface CtaSection {
  tag: string;
  titre: string;
  ctaPrimaire: string;
}
// =========================
// CIBLE
// =========================

export interface CibleItem {
  icone: IconName;
  titre: string;
}

export interface CibleSection {
  tag: string;
  titre: string;
  items: CibleItem[];
}

// =========================
// MARCHÉ
// =========================

export interface Debouche {
  icone: IconName;
  titre: string;
  desc: string;
}

export interface MarcheSection {
  tag: string;
  titre: string;
  sousTitre: string;
  debouches: Debouche[];
}
// =========================
// Mission
// =========================
export interface Mission {
  titre: string;
  description: string;
}

// =========================
// Vision
// =========================
export interface Vision {
  titre: string;
  description: string;
}

// =========================
// CtaAbout
// =========================

export interface CtaAbout {
  titre: string;
  ctaPrimaire: string;
  ctaSecondaire: string;
}
// =========================
// SolutionPage
// =========================

export interface SolutionPageFeature {
  icon: string;

  title: string;

  description?: string;
}

export interface SolutionPageCamera {
  tag: string;

  title: string;

  description: string;

  features: SolutionPageFeature[];
}

export interface SolutionPage {
  camera: SolutionPageCamera;
  plateforme: SolutionPagePlateforme;
  market: SolutionPageMarket;
  suiviTechnique: SolutionPageSuiviTechnique;
}
export interface SolutionPageMarket {
  tag: string;

  title: string;

  description: string;

  features: SolutionPageFeature[];
}
export interface SolutionPageSuiviTechnique {
  tag: string;

  title: string;

  description: string;

  features: SolutionPageFeature[];
}

export interface SolutionPagePlateforme {
  tag: string;

  title: string;

  description: string;

  features: SolutionPageFeature[];
}

// =========================
// FAQ
// =========================

export interface FaqSection {
  tag: string;
  title: string;
  description: string;
  items: FaqItem[];
}
export interface FaqItem {
  question: string;
  answer: string;
}

// =========================
// FOOTER
// =========================

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  desc: string;
  badge: string;
  liens: FooterLink[];
  socialLinks?: SocialLink[];
  copyright: string;
}

// =========================
// FORMULAIRE
// =========================

export interface ContactFormData {
  nom: string;
  telephone: string;
  situation: string;
  localisation: string;
}
// Réseaux sociaux
export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}
// =========================
// API CONTACT
// =========================

export interface ContactApiResponse {
  success: boolean;
  message: string;
}

// =========================
// CONFIG GLOBALE
// =========================

export interface SiteConfig {
  nom: string;
  slogan: string;
  email: string;
  telephone: string;
  localisation: string;

  hero: HeroSection;
  statistiques: StatSection;
  ProblematiqueSection: ProblematiqueSection;
  apropos: AproposSection;
  solution: SolutionSection;
  cible: CibleSection;
  marche: MarcheSection;
  mission: Mission;
  vision: Vision;
  CtaSection: CtaSection;
  ctaAbout: CtaAbout;
  solutionPage: SolutionPage;
  faq: FaqSection;

  // valeurs: Valeur[];
  piliers: Pilier[];
  /** Liste des réseaux sociaux affichés dans le header/footer */

  footer: FooterSection;
}

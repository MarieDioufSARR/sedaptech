// =========================
// ICONS
// =========================

// Noms d'icônes utilisables dans la config (clés du registre lib/icons)
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
// HERO
// =========================

export interface HeroSection {
  titre: string;
  titreAccent: string;
  sousTitre: string;
  ctaPrimaire: string;
  ctaSecondaire: string;
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

// =========================
// PROBLÉMATIQUE
// =========================

export interface ProblematiqueItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface ProblematiqueSection {
  /** Surtitre de la section */
  tag: string;
  title: string;
  /** Mot ou groupe de mots du titre affiché en couleur */
  highlight?: string;
  subtitle: string;
  problems: ProblematiqueItem[];
}

// =========================
// SOLUTION (accueil)
// =========================

export interface SolutionService {
  titre: string;
  sous: string;
}

export interface SolutionSection {
  badge: string;
  titre: string;
  highlight?: string;
  description: string;
  services: SolutionService[];
}

// =========================
// CIBLE
// =========================

export interface CibleItem {
  icone: IconName;
  titre: string;
  description: string;
}

export interface CibleSection {
  tag: string;
  titre: string;
  highlight?: string;
  items: CibleItem[];
}

// =========================
// CALL TO ACTION (accueil)
// =========================

export interface CtaSection {
  tag: string;
  titre: string;
  description?: string;
  ctaPrimaire: string;
}

// =========================
// À PROPOS
// =========================

export interface AproposSection {
  tag: string;
  titre: string;
  highlight?: string;
  dirigeante: {
    nom: string;
    role: string;
  };
  sousTitre: string;
  sousTitre2: string;
  sousTitre3: string;
  mission: string;
}

export interface Mission {
  titre: string;
  description: string;
}

export interface Vision {
  titre: string;
  description: string;
}

/** En-tête de la section Mission / Vision */
export interface EngagementSection {
  tag: string;
  titre: string;
  highlight?: string;
  description: string;
}

export interface ValeurItem {
  /** Doit correspondre aux icônes déclarées dans le composant Valeur */
  icon: "Sparkles" | "Handshake" | "Leaf";
  titre: string;
  description: string;
}

export interface ValeursSection {
  tag: string;
  titre: string;
  description: string;
  items: ValeurItem[];
}

export interface CtaAbout {
  titre: string;
  ctaPrimaire: string;
  ctaSecondaire: string;
}

// =========================
// PAGE SOLUTIONS
// =========================

export interface SolutionPageFeature {
  icon: string;
  title: string;
}

/** Bloc commun à la caméra, la plateforme, le marché et le suivi technique */
export interface SolutionPageBlock {
  tag: string;
  /** Verbe d'étape affiché dans le parcours de l'en-tête (Voir, Comprendre, Décider, Vendre) */
  verbe: string;
  title: string;
  highlight?: string;
  description: string;
  features: SolutionPageFeature[];
}

export interface SolutionPageHeader {
  titre: string;
  highlight?: string;
  description: string;
}

export interface SolutionPage {
  header: SolutionPageHeader;
  camera: SolutionPageBlock;
  plateforme: SolutionPageBlock;
  market: SolutionPageBlock;
  suiviTechnique: SolutionPageBlock;
}

// =========================
// PAGE DÉMONSTRATIONS
// =========================

export interface DemoVideo {
  titre: string;
  description: string;
  url: string;
  poster?: string;
  apercu?: number;
}

/** Une série de vidéos rattachée à une solution */
export interface DemoGroup {
  /** Sert d'ancre (#id) et de clé */
  id: string;
  verbe: string;
  tag: string;
  titre: string;
  highlight?: string;
  description: string;
  videos: DemoVideo[];
}

/** Structure générale de la page Démonstrations */
export interface DemonstrationPage {
  header: {
    tag: string;
    titre: string;
    highlight?: string;
    description: string;
  };

  groupes: DemoGroup[];
}

// =========================
// FAQ
// =========================

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSection {
  tag: string;
  title: string;
  description: string;
  aide: {
    texte: string;
    cta: string;
  };
  items: FaqItem[];
}

// =========================
// PAGE CONTACT
// =========================

export interface ContactField {
  label: string;
  placeholder: string;
}

export interface ContactSection {
  header: {
    tag: string;
    titre: string;
    highlight?: string;
    description: string;
  };
  form: {
    titre: string;
    description: string;
    champs: {
      nom: ContactField;
      telephone: ContactField;
      sujet: { label: string; options: string[] };
      message: ContactField;
    };
    erreurs: { nom: string; telephone: string };
    messageIntro: string;
    envoyer: string;
    confirmation: string;
  };
  info: {
    titre: string;
    whatsapp: { titre: string; texte: string; cta: string };
    labels: { telephone: string; email: string; localisation: string };
  };
}

// =========================
// FOOTER
// =========================

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

export interface FooterSection {
  desc: string;
  liens: FooterLink[];
  socialLinks?: SocialLink[];
  copyright: string;
}

// =========================
// FORMULAIRE & API CONTACT
// =========================

export interface ContactFormData {
  nom: string;
  telephone: string;
  sujet: string;
  message: string;
  situation?: string;
  localisation?: string;
}

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
  /** Lien WhatsApp unique, utilisé par la navbar, le hero et les CTA */
  whatsapp: string;
  localisation: string;

  // Accueil
  hero: HeroSection;
  statistiques: StatSection;
  ProblematiqueSection: ProblematiqueSection;
  solution: SolutionSection;
  cible: CibleSection;
  CtaSection: CtaSection;

  // À propos
  apropos: AproposSection;
  engagement: EngagementSection;
  mission: Mission;
  vision: Vision;
  valeurs: ValeursSection;
  ctaAbout: CtaAbout;

  // Solutions
  solutionPage: SolutionPage;
  faq: FaqSection;
  demonstration: DemonstrationPage;
  contact: ContactSection;
  footer: FooterSection;
}

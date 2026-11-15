import {
  BarChart3,
  Brain,
  ChartColumn,
  Handshake,
  Headset,
  HeartPulse,
  LayoutDashboard,
  Scale,
  ShieldCheck,
  Users,
  Utensils,
  Wallet,
} from "lucide-react";

import {
  FaBell,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMicrophone,
  FaTiktok,
  FaWifi,
} from "react-icons/fa";

import { GiSolarPower } from "react-icons/gi";
import { Md360, MdOutlineNightlight } from "react-icons/md";

// Correspondance entre les noms d'icônes et leurs composants.
export const iconMap = {
  // Réseaux sociaux
  facebook: FaFacebook,
  Facebook: FaFacebook,
  instagram: FaInstagram,
  Instagram: FaInstagram,
  linkedin: FaLinkedin,
  Linkedin: FaLinkedin,
  tiktok: FaTiktok,
  Tiktok: FaTiktok,

  // Caméra
  vision360: Md360,
  solar: GiSolarPower,
  wifi: FaWifi,
  bell: FaBell,
  nightVision: MdOutlineNightlight,
  microphone: FaMicrophone,

  // Noms des composants d'icônes
  Md360,
  GiSolarPower,
  FaWifi,
  FaBell,
  MdOutlineNightlight,
  FaMicrophone,

  // Plateforme
  utensils: Utensils,
  scale: Scale,
  heartPulse: HeartPulse,
  wallet: Wallet,
  chartColumn: ChartColumn,
  layoutDashboard: LayoutDashboard,
  barChart3: BarChart3,

  // Accès au marché
  users: Users,
  shield: ShieldCheck,
  handshake: Handshake,

  // Suivi technique
  brain: Brain,
  headset: Headset,
} as const;

// Type représentant tous les noms d'icônes autorisés.
export type IconName = keyof typeof iconMap;

// Récupère le composant correspondant à un nom d'icône.
export function getIcon(iconName: IconName) {
  return iconMap[iconName];
}

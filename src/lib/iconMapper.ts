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

  // Caméra (noms courts)
  vision360: Md360,
  solar: GiSolarPower,
  wifi: FaWifi,
  bell: FaBell,
  nightVision: MdOutlineNightlight,
  microphone: FaMicrophone,

  // Caméra (noms réels)
  Md360: Md360,
  GiSolarPower: GiSolarPower,
  FaWifi: FaWifi,
  FaBell: FaBell,
  MdOutlineNightlight: MdOutlineNightlight,
  FaMicrophone: FaMicrophone,

  // Plateforme
  utensils: Utensils,
  scale: Scale,
  heartPulse: HeartPulse,
  wallet: Wallet,
  chartColumn: ChartColumn,
  layoutDashboard: LayoutDashboard,
  barChart3: BarChart3,
  //Market
  users: Users,
  shield: ShieldCheck,
  handshake: Handshake,
  // SuiviTechnique
  brain: Brain,
  headset: Headset,
} as const;

export type IconName = keyof typeof iconMap;

export function getIcon(iconName: IconName) {
  return iconMap[iconName];
}

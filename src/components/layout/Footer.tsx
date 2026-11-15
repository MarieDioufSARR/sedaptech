"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Container from "../shared/Container";

import { siteConfig } from "@/content/siteConfig";

import { fadeUp, staggerContainer, staggerItem } from "@/lib/animation";
import { getIcon, iconMap } from "@/lib/iconMapper";

// Même style de titre de colonne partout : hiérarchie identique aux surtitres des sections
const columnTitle =
  "mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400";

export default function Footer() {
  const phoneHref = `tel:${String(siteConfig.telephone).replace(
    /[^\d+]/g,
    ""
  )}`;

  return (
    <footer className="border-t border-white/10 bg-ink">
      <Container className="py-16 lg:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:gap-10"
        >
          {/* LOGO */}
          <motion.div
            variants={staggerItem}
            className="sm:col-span-2 lg:col-span-1"
          >
            <Link
              href="/"
              aria-label="SEDAP'Tech, retour à l'accueil"
              className="inline-flex items-center gap-4"
            >
              <span className="flex rounded-xl bg-white px-4 py-2.5">
                <Image
                  src="/Images/logo.png"
                  alt="SEDAP — La Sénégalaise de Développement Agricole et de Prestations"
                  width={200}
                  height={58}
                  className="h-10 w-auto"
                />
              </span>
              <span
                className="hidden h-8 w-px bg-white/15 min-[400px]:block"
                aria-hidden="true"
              />
              <span className="hidden text-xs font-medium leading-tight text-slate-400 min-[400px]:block">
                L&apos;aviculture
                <br />
                intelligente
              </span>
            </Link>

            <p className="mt-5 max-w-sm leading-relaxed text-slate-300">
              {siteConfig.footer.desc}
            </p>
          </motion.div>

          {/* NAVIGATION */}
          <motion.nav
            variants={staggerItem}
            aria-label="Navigation du pied de page"
          >
            <h2 className={columnTitle}>Navigation</h2>
            <ul className="flex flex-col gap-3">
              {siteConfig.footer.liens.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block py-1.5 text-slate-300 transition-colors duration-300 hover:text-brand-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* RÉSEAUX */}
          <motion.div variants={staggerItem}>
            <h2 className={columnTitle}>Nous suivre</h2>
            <div className="flex gap-3">
              {siteConfig.footer.socialLinks?.map((social) => {
                const Icon = getIcon(
                  social.icon.toLowerCase() as keyof typeof iconMap
                );
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors duration-300 hover:border-brand-soft/40 hover:text-brand-soft"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={staggerItem}>
            <h2 className={columnTitle}>Contact</h2>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-5 w-5 shrink-0 text-slate-500"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all transition-colors duration-300 hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PhoneCall
                  className="mt-0.5 h-5 w-5 shrink-0 text-slate-500"
                  aria-hidden="true"
                />
                <a
                  href={phoneHref}
                  className="transition-colors duration-300 hover:text-white"
                >
                  {siteConfig.telephone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-slate-500"
                  aria-hidden="true"
                />
                <span>{siteConfig.localisation}</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* PIED DE PAGE */}
        <motion.div
          {...fadeUp}
          className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row md:items-center"
        >
          <p>{siteConfig.footer.copyright}</p>
        </motion.div>
      </Container>
    </footer>
  );
}

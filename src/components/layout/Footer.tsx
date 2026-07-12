"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Container from "../shared/Container";

import { siteConfig } from "@/content/siteConfig";

import { fadeUp, staggerContainer, staggerItem } from "@/lib/animation";
import { getIcon, iconMap } from "@/lib/iconMapper";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      {/* BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden">
        {/* GRADIENTS */}

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-red-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />

        {/* GRID EFFECT */}

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[60px_60px]" />

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-black/70" />
      </div>

      <Container className="relative py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-16 lg:grid-cols-4"
        >
          {/* BRAND */}

          <motion.div variants={staggerItem}>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white shadow-2xl">
                <Image
                  src="/Images/logo.png"
                  alt="SEDAPTech Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  SEDAPTech
                </h3>

                <p className="text-sm text-neutral-400">
                  L’aviculture intelligente
                </p>
              </div>
            </div>

            <p className="max-w-md leading-relaxed text-neutral-300">
              {siteConfig.footer.desc}
            </p>

            {/* BADGE */}
            {/* 
            <div className="mt-6 inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 backdrop-blur-sm">
              {siteConfig.footer.badge}
            </div> */}
          </motion.div>

          {/* NAVIGATION */}

          <motion.div variants={staggerItem}>
            <h4 className="mb-6 text-lg font-semibold text-white">
              Navigation Rapide
            </h4>

            <div className="flex flex-col lg:ml-10 gap-4">
              {siteConfig.footer.liens.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2  text-neutral-300 transition-all duration-300 hover:translate-x-1 hover:text-red-400 text-lg font-semibold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* SOCIALS */}
          <motion.div variants={staggerItem}>
            <h4 className=" font-semibold text-lg text-white lg:text-center">
              Nous suivre
            </h4>
            <div className="mt-8 flex lg:items-center lg:justify-center gap-4">
              {siteConfig.footer.socialLinks?.map((social) => {
                const Icon = getIcon(
                  social.icon.toLowerCase() as keyof typeof iconMap
                );
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-neutral-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                  >
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </Link>
                );
              })}
            </div>
          </motion.div>
          {/* CONTACT */}

          <motion.div variants={staggerItem}>
            <h4 className="mb-6 text-lg font-semibold text-white lg:ml-16">
              Contact
            </h4>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="mt-1 rounded-2xl bg-red-500/10 p-3 text-red-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-neutral-200">{siteConfig.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="mt-1 rounded-2xl bg-red-500/10 p-3 text-red-400">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-neutral-200">{siteConfig.telephone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="mt-1 rounded-2xl bg-red-500/10 p-3 text-red-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-neutral-200">{siteConfig.localisation}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* BOTTOM */}

        <motion.div
          {...fadeUp}
          className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-neutral-500 md:flex-row"
        >
          <p>{siteConfig.footer.copyright}</p>

          <p>{siteConfig.footer.mention}</p>
        </motion.div>
      </Container>
    </footer>
  );
}

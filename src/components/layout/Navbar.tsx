"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import Container from "../shared/Container";

import { siteConfig } from "@/content/siteConfig";
import { slideDown, staggerContainer, staggerItem } from "@/lib/animation";

const WHATSAPP_URL = siteConfig.whatsapp;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    requestAnimationFrame(() => {
      const firstLink =
        mobileMenuRef.current?.querySelector<HTMLAnchorElement>("a");

      firstLink?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeMenu]);

  return (
    <>
      {/* Barre de navigation */}
      <motion.header
        {...slideDown}
        className={`fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled || isOpen
            ? "shadow-[0_8px_24px_-16px_rgba(15,23,42,0.25)]"
            : "shadow-none"
        }`}
      >
        <Container>
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo et signature */}
            <Link
              href="/"
              className="flex min-w-0 items-center gap-2.5 sm:gap-3"
              aria-label="SEDAP’Tech, retour à l’accueil"
              onClick={closeMenu}
            >
              <Image
                src="/Images/logo.png"
                alt="SEDAP — La Sénégalaise de Développement Agricole et de Prestations"
                width={200}
                height={58}
                priority
                sizes="(max-width: 639px) 140px, 180px"
                className="h-9 w-auto shrink-0 sm:h-10 lg:h-11"
              />

              <span
                className="hidden h-8 w-px shrink-0 bg-slate-200 min-[400px]:block"
                aria-hidden="true"
              />

              <span className="hidden text-[0.6875rem] font-medium leading-tight text-slate-500 min-[400px]:block sm:text-xs">
                L&apos;aviculture
                <br />
                intelligente
              </span>
            </Link>

            {/* Navigation ordinateur */}
            <div className="hidden items-center gap-6 lg:flex xl:gap-8">
              <nav
                aria-label="Navigation principale"
                className="flex items-center gap-5 xl:gap-8"
              >
                {siteConfig.footer.liens.map((link) => {
                  const active = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`border-b-2 py-2 text-[0.9375rem] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${
                        active
                          ? "border-brand text-ink"
                          : "border-transparent text-slate-700 hover:border-brand hover:text-ink"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                Nous contacter
              </a>
            </div>

            {/* Bouton du menu mobile */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsOpen((previous) => !previous)}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white text-ink transition-colors duration-200 hover:border-brand/40 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:hidden"
            >
              {isOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </Container>
      </motion.header>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-white/95 pb-8 pt-20 backdrop-blur-xl lg:hidden"
          >
            <Container>
              <nav
                ref={mobileMenuRef}
                aria-label="Navigation mobile"
                className="flex flex-col pt-4"
              >
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col"
                >
                  {siteConfig.footer.liens.map((link) => {
                    const active = pathname === link.href;

                    return (
                      <motion.div key={link.href} variants={staggerItem}>
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          aria-current={active ? "page" : undefined}
                          className={`flex min-h-14 items-center justify-between border-b border-slate-100 py-4 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                            active
                              ? "text-brand-dark"
                              : "text-ink hover:text-brand-dark"
                          }`}
                        >
                          <span>{link.label}</span>

                          {active && (
                            <span
                              className="h-2 w-2 rounded-full bg-brand"
                              aria-hidden="true"
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}

                  <motion.div variants={staggerItem} className="pt-7">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-12 w-full items-center justify-center rounded-xl bg-brand px-6 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                    >
                      Nous contacter
                    </a>
                  </motion.div>
                </motion.div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

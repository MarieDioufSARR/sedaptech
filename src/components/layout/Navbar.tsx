"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import Container from "../shared/Container";

import { siteConfig } from "@/content/siteConfig";

import { slideDown, staggerContainer, staggerItem } from "@/lib/animation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        {...slideDown}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "border-neutral-200/70 bg-white/80 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            {/* LOGO */}

            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl shadow-lg">
                <Image
                  src="/Images/logo.png"
                  alt="SEDAPTech Logo"
                  width={30}
                  height={24}
                  className="rounded-full object-cover"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>

              <div>
                <p className="text-lg font-bold tracking-tight text-neutral-900">
                  SEDAP’Tech
                </p>
                <p className="text-sm text-gray-500">
                  {" "}
                  L’aviculture intelligente
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU */}

            <nav className="hidden items-center gap-8 lg:flex">
              {siteConfig.footer.liens.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative overflow-hidden text-md font-medium text-neutral-900 transition duration-300 border-b-2 border-transparent hover:border-red-700 hover:text-black-500 "
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* MOBILE BUTTON */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-900 transition-all hover:border-red-200 hover:text-red-500 lg:hidden cursor-pointer"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </Container>
      </motion.header>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 lg:hidden"
          >
            <Container>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-4"
              >
                {siteConfig.footer.liens.map((link) => (
                  <motion.div key={link.label} variants={staggerItem}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between rounded-2xl border border-neutral-100 bg-white px-5 py-4 text-lg font-medium text-neutral-800 transition-all hover:border-red-100 hover:bg-red-50 hover:text-red-500"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

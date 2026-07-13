"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoCardProps {
  titre: string;
  description: string;
  url: string;
  onOpen: (video: string) => void;
}

export default function VideoCard({
  titre,
  description,
  url,
  onOpen,
}: VideoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_2px_20px_rgba(15,23,42,0.06)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
    >
      {/* Halo discret au hover */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-amber-100/0 via-transparent to-emerald-100/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Aperçu vidéo — cliquable, ouvre la modale */}
      <button
        onClick={() => onOpen(url)}
        aria-label={`Voir la vidéo : ${titre}`}
        className="relative mx-auto block max-w-[320px] overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5"
      >
        <div className="aspect-9/16 relative bg-gray-900">
          <video
            className="h-full w-full object-cover"
            muted
            playsInline
            preload="metadata"
          >
            <source src={`${url}#t=0.1`} type="video/mp4" />
          </video>

          {/* Overlay play */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-300 group-hover:bg-black/30">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-xl backdrop-blur-sm"
            >
              <Play className="h-7 w-7 translate-x-0.5 fill-emerald-600 text-emerald-600 cursor-pointer" />
            </motion.div>
          </div>
        </div>
      </button>

      {/* Contenu */}
      <div className="mt-7 text-center">
        <h2 className="text-xl font-bold tracking-tight text-gray-900">
          {titre}
        </h2>

        <div className="mx-auto mt-3 h-px w-10 bg-emerald-600/30" />

        <p className="mt-4 text-[15px] leading-relaxed text-gray-500">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";

type Props = {
  video: {
    titre: string;
    description: string;
    url: string;
  } | null;

  serie?: string;
  position?: string;

  cta: {
    label: string;
    href: string;
  };

  onClose: () => void;

  onPrev?: () => void;

  onNext?: () => void;
};

export default function VideoModal({
  video,
  serie,
  position,
  cta,
  onClose,
  onPrev,
  onNext,
}: Props) {
 
  const dialogRef = useRef<HTMLDivElement>(null);

  const closeRef = useRef<HTMLButtonElement>(null);


  const isOpen = video !== null;

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeRef.current?.focus();

    // Gère les interactions au clavier.
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      // Navigation entre les vidéos avec les flèches.
      if (event.key === "ArrowLeft" && onPrev) {
        event.preventDefault();
        onPrev();
        return;
      }

      if (event.key === "ArrowRight" && onNext) {
        event.preventDefault();
        onNext();
        return;
      }

      // Empêche le focus de sortir de la fenêtre avec Tab.
      if (event.key === "Tab") {
        const elements = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

        if (!elements || elements.length === 0) return;

        const premierElement = elements[0];
        const dernierElement = elements[elements.length - 1];

        if (event.shiftKey && document.activeElement === premierElement) {
          event.preventDefault();
          dernierElement.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === dernierElement
        ) {
          event.preventDefault();
          premierElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Nettoyage après la fermeture de la fenêtre.
    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      // Restaure le comportement de défilement initial.
      document.body.style.overflow = previousOverflow;

      if (previouslyFocused?.isConnected) {
        previouslyFocused.focus();
      }
    };
  }, [isOpen, onClose, onPrev, onNext]);

  const navButton =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand cursor-pointer";

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(event) => {
            // Ferme uniquement si l'utilisateur clique sur l'arrière-plan.
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
          className="fixed inset-0 z-60 flex items-center justify-center bg-ink/90 p-3 backdrop-blur-md sm:p-6"
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-modal-title"
            aria-describedby="demo-modal-description"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative flex max-h-[92dvh] w-full max-w-4xl flex-col overflow-y-auto rounded-3xl bg-ink shadow-2xl ring-1 ring-white/10 md:flex-row md:overflow-hidden"
          >
            {/* Bouton de fermeture */}
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Fermer la vidéo"
              className="absolute right-3 top-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-xl transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:right-4 sm:top-4 cursor-pointer"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="flex items-center justify-center bg-black md:shrink-0">
              <video
                key={video.url}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="max-h-[60dvh] w-auto max-w-full md:max-h-[88dvh] "
              >
                <source src={video.url} type="video/mp4" />
                Votre navigateur ne prend pas en charge la lecture vidéo.
              </video>
            </div>

            {/* Panneau d'informations */}
            <div className="flex flex-1 flex-col justify-between gap-8 p-6 pt-16 md:w-80 md:flex-none md:p-8 md:pt-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft">
                  {serie}
                  {position && (
                    <span className="ml-2 text-slate-400">· {position}</span>
                  )}
                </p>

                <h2
                  id="demo-modal-title"
                  className="mt-3 text-xl font-semibold leading-snug text-white"
                >
                  {video.titre}
                </h2>

                <p
                  id="demo-modal-description"
                  className="mt-3 text-sm leading-relaxed text-slate-300"
                >
                  {video.description}
                </p>
              </div>

              {/* Actions de la fenêtre */}
              <div className="space-y-5">
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-1 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-colors duration-300 hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  {cta.label}
                  <span aria-hidden="true">→</span>
                </a>

                {/* Navigation entre les vidéos */}
                {onPrev && onNext && (
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={onPrev}
                      aria-label="Vidéo précédente"
                      className={navButton}
                    >
                      <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                    </button>

                    <span className="text-xs text-slate-400">
                      Vidéo suivante
                    </span>

                    <button
                      type="button"
                      onClick={onNext}
                      aria-label="Vidéo suivante"
                      className={navButton}
                    >
                      <ChevronRight className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import CountUp from "react-countup";

import { siteConfig } from "@/content/siteConfig";

export default function Statistiques() {
  const { tag, chiffres } = siteConfig.statistiques;

  return (
    <section aria-label={tag} className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-10">
        <h2 className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-sm sm:tracking-[0.16em]">
          {tag}
        </h2>

        {/* Grille des statistiques */}
        <div className="mt-8 grid grid-cols-2 sm:mt-10 lg:grid-cols-4">
          {chiffres.map((chiffre, index) => (
            <div
              key={chiffre.label}
              className={[
                "relative flex min-w-0 flex-col items-center px-2 py-5 text-center sm:px-4 sm:py-6 lg:py-2",
                index % 2 === 0 ? "border-r border-slate-100" : "",
                index >= 2 ? "border-t border-slate-100 sm:border-t-0" : "",
                index !== 0 && index !== 2
                  ? "lg:border-l lg:border-slate-200"
                  : "",
                index === 2 ? "lg:border-l lg:border-slate-200" : "",
                index === 1 || index === 3 ? "lg:border-r-0" : "",
              ].join(" ")}
            >
              <span
                className="mb-3 h-0.5 w-7 shrink-0 rounded-full bg-leaf sm:mb-4 sm:w-8"
                aria-hidden="true"
              />

              <p className="whitespace-nowrap text-3xl font-bold leading-none tracking-tight text-ink tabular-nums sm:text-4xl lg:text-5xl">
                <span className="sr-only">
                  {chiffre.valeur}
                  {chiffre.suffix ?? ""}
                </span>

                <span aria-hidden="true">
                  <CountUp
                    end={Number(chiffre.valeur)}
                    duration={2.2}
                    suffix={chiffre.suffix ?? ""}
                    enableScrollSpy
                    scrollSpyOnce
                    preserveValue
                  />
                </span>
              </p>

              <p className="mt-3 max-w-[13rem] text-sm font-medium leading-5 text-slate-600 sm:mt-3 sm:text-base sm:leading-6">
                {chiffre.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

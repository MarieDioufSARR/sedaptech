"use client";

import { siteConfig } from "@/content/siteConfig";
import CountUp from "react-countup";

export default function Statistiques() {
  const { tag, chiffres } = siteConfig.statistiques;

  return (
    <section className="border-t border-gray-100 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {tag}
          </h2>
        </div>

        {/* Statistiques */}
        <div className="mt-16 grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {chiffres.map((chiffre, index) => (
            <div
              key={index}
              className={`text-center ${
                index !== chiffres.length - 1
                  ? "lg:border-r lg:border-gray-200"
                  : ""
              }`}
            >
              <div className="text-4xl font-bold tracking-tight text-green-600 lg:text-5xl">
                <CountUp
                  end={Number(chiffre.valeur)}
                  duration={2.5}
                  suffix={chiffre.suffix ?? ""}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>

              <p className="mt-3 text-sm font-medium text-gray-600 lg:text-base">
                {chiffre.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

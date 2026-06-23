import { siteConfig } from "@/content/siteConfig";
import { getIcon, iconMap } from "@/lib/iconMapper";
import Image from "next/image";

export default function SuiviTechnique() {
  const { suiviTechnique } = siteConfig.solutionPage;
  return (
    <section className="py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
            {suiviTechnique.tag}
          </span>

          <h2 className="mt-8 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
            {suiviTechnique.title}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            {suiviTechnique.description}
          </p>
        </div>

        {/* PRODUCT CARD */}
        <div className="mx-auto mt-20 max-w-5xl overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-lg">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 p-8 lg:p-12">
            {/* IMAGE */}
            <div className="flex justify-center">
              <div className="relative flex w-full max-w-105 items-center justify-center rounded-3xl bg-linear-to-br from-gray-100 via-slate-50 to-white p-8 lg:p-10">
                <Image
                  src="/Images/suivi.jpg"
                  width={360}
                  height={360}
                  alt={suiviTechnique.title}
                  className="object-contain -translate-y-1 drop-shadow-[0_25px_50px_rgba(0,0,0,0.18)] animate-[float_5s_ease-in-out_infinite]
                 animate-float
                transition-all
                duration-500
                hover:scale-105
                hover:rotate-3
                "
                />

                <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_70%)] animate-glow" />
              </div>
            </div>

            {/* FEATURES */}
            <div>
              <h3 className="mb-8 text-xl font-semibold text-slate-900 lg:text-2xl">
                Avantages
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {suiviTechnique.features.map((feature, index) => {
                  const Icon = getIcon(feature.icon as keyof typeof iconMap);

                  return (
                    <div
                      key={index}
                      className="group rounded-2xl border border-slate-200 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg "
                    >
                      <div className="flex items-center gap-4 cursor-pointer">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 transition-all duration-300 group-hover:bg-emerald-100">
                          {Icon && (
                            <Icon className="h-5 w-5 text-emerald-600" />
                          )}
                        </div>

                        <span className="text-sm font-semibold leading-relaxed text-slate-800">
                          {feature.title}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

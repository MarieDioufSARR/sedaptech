import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/content/siteConfig";

export default function ContactInfo() {
  const { info } = siteConfig.contact;

  // Prépare le numéro de téléphone pour créer un lien d'appel.
  const phoneHref = `tel:${siteConfig.telephone.replace(/[^\d+]/g, "")}`;

  // Regroupe les coordonnées pour faciliter leur affichage.
  const coordonnees = [
    {
      Icon: Phone,
      label: info.labels.telephone,
      value: siteConfig.telephone,
      href: phoneHref,
    },
    {
      Icon: Mail,
      label: info.labels.email,
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      Icon: MapPin,
      label: info.labels.localisation,
      value: siteConfig.localisation,
    },
  ];

  return (
    <aside aria-label="Informations de contact" className="space-y-6">
      {/* Contact direct par WhatsApp */}
      <section className="relative overflow-hidden rounded-3xl bg-ink p-6 text-white sm:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/10 blur-3xl"
        />

        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-brand-soft">
            <MessageCircle className="h-6 w-6" aria-hidden="true" />
          </div>

          <h2 className="mt-6 text-xl font-semibold leading-snug sm:text-2xl">
            {info.whatsapp.titre}
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            {info.whatsapp.texte}
          </p>

          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-all duration-300 hover:bg-brand-dark hover:shadow-brand/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
          >
            {info.whatsapp.cta}

            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </section>

      {/* Coordonnées de l'entreprise */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
        <h2 className="text-lg font-semibold tracking-tight text-ink sm:text-xl">
          {info.titre}
        </h2>

        <ul className="mt-5 divide-y divide-slate-100">
          {coordonnees.map(({ Icon, label, value, href }) => (
            <li
              key={label}
              className="flex items-start gap-4 py-5 first:pt-0 last:pb-0"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-ink ring-1 ring-slate-200/70">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>

              <div className="min-w-0 flex-1 pt-0.5">
                <p className="text-sm text-slate-500">{label}</p>

                {href ? (
                  <a
                    href={href}
                    className="mt-1 block break-words font-medium text-ink transition-colors duration-200 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    {value}
                  </a>
                ) : (
                  <address className="mt-1 break-words not-italic font-medium text-ink">
                    {value}
                  </address>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}

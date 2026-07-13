import { siteConfig } from "@/content/siteConfig";

export default function Cta() {
  const { tag, titre, ctaPrimaire } = siteConfig.CtaSection;
  return (
    <section className=" py-16 sm:py-20 bg-black/80 border-b border-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-lg uppercase tracking-wider lg:text-xl font-bold text-white">
          {tag}
        </p>
        <h2 className="text-center text-lg font-semibold text-white lg:text-lg mt-3">
          {titre}
        </h2>
        <div className="mt-8 flex justify-center">
          <a
            href="https://wa.me/221772485006"
            className="rounded-md bg-red-600 px-6 py-3 text-lg font-semibold text-white hover:bg-emerald-700 cursor-pointer transition duration-300"
          >
            {ctaPrimaire}
          </a>
        </div>
      </div>
    </section>
  );
}

import { GoChevronRight } from "react-icons/go";

export default function ContactHero() {
  return (
    <section className=" py-6">
      <div className="flex gap-2 px-6 bg-black/80 py-3 ">
        <a href="" className="text-white/70 transition hover:text-white">
          Accueil
        </a>
        <GoChevronRight className="h-4 w-4 text-white mt-1" />
        <a
          href="/Contact"
          className="text-white transition hover:text-emerald-200"
        >
          Contact
        </a>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-7 text-center">
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
          Parlons de votre projet agricole
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Une question, un partenariat ou un projet à développer ? Notre équipe
          est disponible pour vous accompagner.
        </p>
      </div>
    </section>
  );
}

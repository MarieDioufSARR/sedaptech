import { ArrowRight } from "lucide-react";

export function ContactForm() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-4xl border border-gray-100 bg-white p-8 shadow-sm lg:p-12">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Envoyez-nous un message
            </h2>

            <p className="mt-3 text-gray-600">
              Nous vous répondrons dans les meilleurs délais.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Nom complet"
                className="rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-red-500"
              />

              <input
                type="email"
                placeholder="Adresse email"
                className="rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-red-500"
              />
            </div>

            <input
              type="text"
              placeholder="Sujet"
              className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-red-500"
            />

            <textarea
              rows={6}
              placeholder="Votre message..."
              className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-red-500"
            />

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-2xl bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600"
            >
              Envoyer le message
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

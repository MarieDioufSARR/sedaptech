import { MessageCircle } from "lucide-react";

export default function ContactCta() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[40px] bg-gray-900 px-8 py-16 text-center text-white">
          <MessageCircle className="mx-auto h-12 w-12 text-red-400" />

          <h2 className="mt-6 text-4xl font-bold">
            Construisons L’aviculture de demain
          </h2>

          <a
            href="https://wa.me/221776679166"
            className="mt-8 rounded-2xl bg-white px-8 py-4 font-semibold text-gray-900 transition hover:bg-gray-100"
          >
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
}

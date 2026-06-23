import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="pb-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
        <div className="rounded-3xl border border-gray-100 p-8">
          <Mail className="h-8 w-8 text-red-500" />
          <h3 className="mt-4 text-xl font-semibold">Email</h3>
          <p className="mt-2 text-gray-600">sedapsn221@gmail.com</p>
        </div>

        <div className="rounded-3xl border border-gray-100 p-8">
          <Phone className="h-8 w-8 text-green-600" />
          <h3 className="mt-4 text-xl font-semibold">Téléphone</h3>
          <p className="mt-2 text-gray-600">+221 XX XXX XX XX</p>
        </div>

        <div className="rounded-3xl border border-gray-100 p-8">
          <MapPin className="h-8 w-8 text-blue-600" />
          <h3 className="mt-4 text-xl font-semibold">Localisation</h3>
          <p className="mt-2 text-gray-600">Thiés,Cité senghor,Sénégal</p>
        </div>
      </div>
    </section>
  );
}

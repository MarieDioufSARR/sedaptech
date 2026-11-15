"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";

import { siteConfig } from "@/content/siteConfig";
import type { ContactFormData } from "@/types";

type FieldName = "nom" | "telephone";
type Errors = Partial<Record<FieldName, string>>;

const controlBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-base text-ink outline-none transition placeholder:text-slate-400 focus:border-ink focus:ring-4 focus:ring-ink/10";

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
};

// Composant réutilisable pour afficher un champ et son éventuelle erreur.
function Field({ id, label, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>

      {children}

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-2 text-sm text-brand-dark"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const { form } = siteConfig.contact;
  const { champs } = form;

  const [values, setValues] = useState<ContactFormData>({
    nom: "",
    telephone: "",
    sujet: champs.sujet.options[0],
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  // Met à jour les champs et efface l'erreur dès que l'utilisateur corrige sa saisie.
  const update =
    (key: keyof ContactFormData) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const value = event.target.value;

      setValues((previous) => ({
        ...previous,
        [key]: value,
      }));

      if (key === "nom" || key === "telephone") {
        setErrors((previous) => ({
          ...previous,
          [key]: undefined,
        }));
      }
    };

  // Vérifie les informations obligatoires avant de préparer le message.
  const validate = () => {
    const nextErrors: Errors = {};

    if (values.nom.trim().length < 2) {
      nextErrors.nom = form.erreurs.nom;
    }

    const telephoneDigits = values.telephone.replace(/\D/g, "");

    if (telephoneDigits.length < 9 || telephoneDigits.length > 15) {
      nextErrors.telephone = form.erreurs.telephone;
    }

    setErrors(nextErrors);

    const firstError = (["nom", "telephone"] as const).find(
      (field) => nextErrors[field]
    );

    if (firstError) {
      document.getElementById(`contact-${firstError}`)?.focus();
      return false;
    }

    return true;
  };

  // Construit un message WhatsApp clair à partir des informations du formulaire.
  const createWhatsAppMessage = () => {
    const lines = [
      form.messageIntro,
      "",
      `Je souhaite vous contacter au sujet de : *${values.sujet}*.`,
      "",
      "*Mes coordonnées*",
      `- ${champs.nom.label} : ${values.nom.trim()}`,
      `- ${champs.telephone.label} : ${values.telephone.trim()}`,
    ];

    if (values.message.trim()) {
      lines.push("", "*Mon message*", values.message.trim());
    }

    lines.push("", "Merci pour votre retour.");

    return lines.join("\n");
  };

  // Prépare le message et ouvre WhatsApp après validation.
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) return;

    const message = createWhatsAppMessage();

    const whatsappUrl = `${siteConfig.whatsapp}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  // Adapte la bordure des champs en fonction de leur état de validation.
  const getBorderClass = (field: FieldName) =>
    errors[field] ? "border-brand" : "border-slate-300";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_24px_50px_-32px_rgba(15,23,42,0.25)] sm:p-8 lg:p-10">
      {/* En-tête du formulaire */}
      <h2 className="text-2xl font-bold tracking-tight text-ink">
        {form.titre}
      </h2>

      <p className="mt-3 text-base leading-relaxed text-slate-600">
        {form.description}
      </p>

      {/* Champs du formulaire */}
      <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="contact-nom" label={champs.nom.label} error={errors.nom}>
            <input
              id="contact-nom"
              type="text"
              autoComplete="name"
              required
              value={values.nom}
              onChange={update("nom")}
              placeholder={champs.nom.placeholder}
              aria-invalid={Boolean(errors.nom)}
              aria-describedby={errors.nom ? "contact-nom-error" : undefined}
              className={`${controlBase} ${getBorderClass("nom")}`}
            />
          </Field>

          <Field
            id="contact-telephone"
            label={champs.telephone.label}
            error={errors.telephone}
          >
            <input
              id="contact-telephone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              value={values.telephone}
              onChange={update("telephone")}
              placeholder={champs.telephone.placeholder}
              aria-invalid={Boolean(errors.telephone)}
              aria-describedby={
                errors.telephone ? "contact-telephone-error" : undefined
              }
              className={`${controlBase} ${getBorderClass("telephone")}`}
            />
          </Field>
        </div>

        {/* Objet de la demande */}
        <Field id="contact-sujet" label={champs.sujet.label}>
          <div className="relative">
            <select
              id="contact-sujet"
              value={values.sujet}
              onChange={update("sujet")}
              className={`${controlBase} appearance-none border-slate-300 pr-11`}
            >
              {champs.sujet.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
            />
          </div>
        </Field>

        <Field id="contact-message" label={champs.message.label}>
          <textarea
            id="contact-message"
            rows={5}
            value={values.message}
            onChange={update("message")}
            placeholder={champs.message.placeholder}
            className={`${controlBase} resize-y border-slate-300`}
          />
        </Field>

        <div className="space-y-3">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-colors duration-300 hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:w-auto"
          >
            {form.envoyer}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>

          <p className="text-xs leading-relaxed text-slate-500">
            {form.confirmation}
          </p>
        </div>
      </form>
    </div>
  );
}

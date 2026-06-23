import { ReactNode } from "react";

interface Props {
  title: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export default function SectionCard({
  title,
  description,
  icon,
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`rounded-4xl border border-black/5 bg-white/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_120px_rgba(0,0,0,0.08)] ${className}`}
    >
      {icon && (
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-600">
          {icon}
        </div>
      )}

      <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
        {title}
      </h3>

      {description && (
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          {description}
        </p>
      )}

      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}

import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  href = "https://wa.me/221776679166",
  variant = "primary",
}: Props) {
  const styles = {
    primary:
      "bg-gradient-to-r from-green-600 to-green-400 text-white hover:opacity-90 hover:scale-105 cursor-pointer",

    secondary:
      "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}

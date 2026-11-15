import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: Props) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-5 sm:px-6 lg:px-10 xl:px-12 ${className}`}
    >
      {children}
    </div>
  );
}

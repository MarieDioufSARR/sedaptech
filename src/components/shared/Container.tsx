import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: Props) {
  return <div className={` w-full px-6 lg:px-12 ${className}`}>{children}</div>;
}

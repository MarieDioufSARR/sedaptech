interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  center = true,
}: Props) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <h2 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg leading-relaxed text-neutral-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}

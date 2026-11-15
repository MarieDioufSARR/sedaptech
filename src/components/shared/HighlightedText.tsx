type Props = {
  text: string;
  /** Mot ou groupe de mots à mettre en couleur (insensible à la casse). Absent ou introuvable : texte brut. */
  highlight?: string;
  className?: string;
};

export default function HighlightedText({
  text,
  highlight,
  className = "text-brand",
}: Props) {
  if (!highlight) return <>{text}</>;

  const idx = text.toLowerCase().indexOf(highlight.toLowerCase());
  if (idx === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, idx)}
      <span className={className}>
        {text.slice(idx, idx + highlight.length)}
      </span>
      {text.slice(idx + highlight.length)}
    </>
  );
}

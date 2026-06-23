interface Props {
  text: string;
}

export default function SectionBadge({ text }: Props) {
  return (
    <div className="mb-5 inline-flex items-center rounded-full border border-red-100 bg-red-50 px-4 py-1.5">
      <span className="text-sm font-medium text-red-600">{text}</span>
    </div>
  );
}

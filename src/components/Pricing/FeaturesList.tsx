interface FeaturesListProps {
  features: string[];
}

export function FeaturesList({ features }: FeaturesListProps): JSX.Element {
  return (
    <div className="flex flex-1 flex-col justify-end w-full">
      <ul className="mb-7 ml-3 list-disc space-y-1 text-left text-lg leading-relaxed text-[var(--semantic-text-muted)]">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

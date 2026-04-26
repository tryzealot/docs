import type { EnterpriseTierItem } from "@site/src/types";

interface EnterpriseCardProps {
  enterprise: EnterpriseTierItem;
}

export function EnterpriseCard({ enterprise }: EnterpriseCardProps): JSX.Element {
  return (
    <div className="max-w-4xl rounded-2xl border-2 border-[var(--color-base-300)] bg-[var(--color-base-200)] p-10 flex flex-col items-center transition-all duration-200 hover:border-[var(--color-primary)] hover:shadow-[0_0_0_3px_rgba(75,107,251,0.15),0_4px_24px_0_rgba(75,107,251,0.1)] dark:border-[var(--color-base-300)] dark:bg-[var(--color-base-200)] dark:hover:border-[var(--color-primary)] dark:hover:shadow-[0_0_0_3px_rgba(75,107,251,0.25),0_4px_24px_0_rgba(0,0,0,0.3)]">
      <div className="mb-3 text-4xl">🏢</div>
      <div className="text-xl font-medium text-[var(--color-base-content)]">{enterprise.title}</div>
      <div className="mb-7 mt-5 text-center text-lg leading-relaxed text-[var(--semantic-text-muted)]">
        {enterprise.description}
      </div>
      <button
        className="hover:cursor-pointer w-full rounded-lg border-2 border-transparent bg-[var(--color-primary)] px-6 py-3 text-lg font-semibold text-[var(--color-primary-content)] transition-all duration-200 hover:opacity-90 hover:shadow-xl active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 dark:focus:ring-offset-[var(--color-base-100)] shadow-lg"
        onClick={() => {
          window.location.href = enterprise.button.href;
        }}
      >
        {enterprise.button.text}
      </button>
    </div>
  );
}

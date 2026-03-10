import type { EnterpriseTierItem } from "../../types";

interface EnterpriseCardProps {
  enterprise: EnterpriseTierItem;
}

export function EnterpriseCard({ enterprise }: EnterpriseCardProps): JSX.Element {
  return (
    <div className="max-w-4xl rounded-2xl border-2 border-gray-700 bg-gray-800 p-10 flex flex-col items-center transition-all duration-200 hover:border-yellow-500 hover:shadow-[0_0_0_3px_rgba(4,5,107,0.28),0_4px_24px_0_rgba(2,6,20,0.18)] dark:border-gray-700 dark:bg-gray-900 dark:hover:border-yellow-400">
      <div className="mb-3 text-4xl">🏢</div>
      <div className="text-xl font-medium text-white">{enterprise.title}</div>
      <div className="mb-7 mt-5 text-center text-lg leading-relaxed text-gray-300">
        {enterprise.description}
      </div>
      <button
        className="w-full rounded-lg border-2 border-gray-600 bg-gray-700 px-6 py-3 text-lg font-medium text-white transition-all duration-200 hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-yellow-300 dark:hover:border-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-gray-900"
        onClick={() => {
          window.location.href = enterprise.button.href;
        }}
      >
        {enterprise.button.text}
      </button>
    </div>
  );
}
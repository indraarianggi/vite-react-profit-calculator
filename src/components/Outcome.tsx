import { format } from "@/utils";

interface OutcomeProps {
  label: string;
  value: number;
  currency?: string;
  withDivider?: boolean;
}

const Outcome = ({ label, value, currency, withDivider }: OutcomeProps) => {
  return (
    <div className="mx-auto px-2">
      <p className="text-2xl font-semibold text-gray-600 dark:text-white">
        {label}
      </p>
      <p className="mt-2 flex items-baseline justify-center gap-x-2">
        <span className="text-2xl md:text-3xl font-bold tracking-tight text-brand truncate">
          {format(value, currency)}
        </span>
        <span className="tex-[10px] font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-500">
          {currency}
        </span>
      </p>
      {withDivider && (
        <div className="px-12 md:px-36">
          <p className="w-xs border-b mt-6 dark:border-gray-800"></p>
        </div>
      )}
    </div>
  );
};

export default Outcome;

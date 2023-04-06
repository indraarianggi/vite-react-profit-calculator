import React from "react";

import { CURRENCIES } from "@/constants";

interface TextFieldProps {
  label: string;
  name: string;
  value?: any;
  currency?: string;
  error?: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const TextField = ({
  label,
  name,
  value,
  currency,
  error,
  onChange,
  onBlur,
}: TextFieldProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-white">
        {label}
      </label>

      <div className="relative mt-1 rounded-md shadow-sm">
        {currency && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10">
            <span className="text-gray-500 dark:text-white sm:text-sm">
              {CURRENCIES[currency]}
            </span>
          </div>
        )}
        <input
          type="text"
          name={name}
          value={value || ""}
          onChange={onChange}
          onBlur={onBlur}
          placeholder="0.00"
          className="block w-full pr-5 pl-7 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 dark:text-white bg-gray-50 dark:bg-slate-900 focus:outline-none focus:border-transparent focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
        />
        {!currency && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center py-0 pl-12 pr-3 z-10">
            <span className="text-gray-500 dark:text-white sm:text-sm">%</span>
          </div>
        )}
      </div>

      {error && <p className="text-brand text-xs my-1">{error}</p>}
    </div>
  );
};

export default TextField;

interface OutcomeProps {
  label: string;
  value: any;
  currency: string | undefined;
  withDivider?: boolean;
}

interface FormState {
  salePrice: number;
  profit: number;
  grossMargin: number;
  currency?: string;
}

const initialFormState: FormState = {
  salePrice: 0,
  profit: 0,
  grossMargin: 0,
  currency: "USD",
};

export type { OutcomeProps, FormState };

export { initialFormState };

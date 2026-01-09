export interface ContactFields {
  name: string;
  email: string;
  phone: string;
  needs: string;
}

export interface ContactBudget {
  label: string;
  min: number;
  max: number;
  unit: string;
}

export interface ContactContent {
  headline: string;
  subheadline: string;
  interestChips: string[];
  fields: ContactFields;
  budget: ContactBudget;
  submitText: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  needs: string;
  interests: string[];
  budget: number;
}


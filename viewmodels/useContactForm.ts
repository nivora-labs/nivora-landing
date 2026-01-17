"use client";

import { useState, useCallback } from 'react';
import { contactFormSchema, ContactFormSchema } from '@/models';

interface UseContactFormReturn {
  formData: {
    name: string;
    email: string;
    phone: string;
    needs: string;
  };
  selectedInterests: string[];
  budget: number;
  isSubmitting: boolean;
  errors: Partial<Record<keyof ContactFormSchema, string>>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleInterest: (interest: string) => void;
  setBudget: (value: number) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    needs: "",
  });
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [budget, setBudgetState] = useState(40);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormSchema, string>>>({});

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormSchema]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }, [errors]);

  const toggleInterest = useCallback((interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
    // Clear interests error when user selects
    if (errors.interests) {
      setErrors(prev => ({ ...prev, interests: undefined }));
    }
  }, [errors.interests]);

  const setBudget = useCallback((value: number) => {
    setBudgetState(value);
  }, []);

  const resetForm = useCallback(() => {
    setFormData({ name: "", email: "", phone: "", needs: "" });
    setSelectedInterests([]);
    setBudgetState(40);
    setErrors({});
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const dataToValidate: ContactFormSchema = {
      ...formData,
      interests: selectedInterests,
      budget,
    };

    const result = contactFormSchema.safeParse(dataToValidate);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormSchema, string>> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof ContactFormSchema;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(result.data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || 'Erro ao enviar formulário');
      }

      console.log('Form submitted successfully:', result.data);
      resetForm();
      // Here you would show a success toast/notification
      alert('Orçamento enviado com sucesso! Entraremos em contato em breve.');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Here you would show an error toast/notification
      alert('Erro ao enviar orçamento. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, selectedInterests, budget, resetForm]);

  return {
    formData,
    selectedInterests,
    budget,
    isSubmitting,
    errors,
    handleInputChange,
    toggleInterest,
    setBudget,
    handleSubmit,
    resetForm,
  };
}


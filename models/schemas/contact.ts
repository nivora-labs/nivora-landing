import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  needs: z.string().min(10, 'Descreva suas necessidades com pelo menos 10 caracteres'),
  interests: z.array(z.string()).min(1, 'Selecione pelo menos uma área de interesse'),
  budget: z.number().min(10).max(100),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;


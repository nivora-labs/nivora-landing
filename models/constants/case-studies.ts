import { CaseStudy, CaseStudiesContent } from '../types';

//TODO: FALTAM IMAGENS E LINKS PARA OS 3 PROJETOS COMENTADOS

export const CASE_STUDIES_CONTENT: CaseStudiesContent = {
  title: "Projetos que definem nosso padrão",
};

export const CASE_STUDIES: CaseStudy[] = [
    {
      id: 2,
      name: "HypoPredict",
      category: "AI HealthTech",
      description: "Colaboração na engenharia de software para healthtech, focada na criação de modelos preditivos para antecipação de eventos hipoglicêmicos.",
      tags: ["React Native", "TensorFlow", "Google Cloud"],
      cta: "Visitar site",
      link: "https://hipoglicemia.com",
      image: "/images/case-studies/hypo.png"
    },
    
//   {
//     id: 8,
//     name: "Cerqueira Rocha",
//     category: "PropTech & Real Estate",
//     description: "Plataforma imobiliária completa com foco em conversão, gestão e experiência premium.",
//     tags: ["Next.js", "PostgreSQL", "Stripe"],
//     cta: "Visitar site",
//     link: "https://cerqueirarocha.com.br",
//     image: "/images/case-studies/real_estate_app_on_tablet.png",
//   },
//   {
//     id: 9,
//     name: "Jiro",
//     category: "Logística & Delivery",
//     description: "Delivery inteligente para comércio de bairro. IA otimiza rotas e reduz taxas operacionais.",
//     tags: ["Flutter", "Node.js", "Maps API"],
//     cta: "Visitar site",
//     link: "https://jiro.com.br",
//     image: "/images/case-studies/delivery_app_on_smartphone.png",
//   },
];


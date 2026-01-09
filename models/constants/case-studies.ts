import { CaseStudy, CaseStudiesContent } from '../types';

//TODO: FALTAM IMAGENS E LINKS PARA OS 3 PROJETOS COMENTADOS

export const CASE_STUDIES_CONTENT: CaseStudiesContent = {
  title: "Projetos que definem nosso padrão",
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    name: "Construclick",
    category: "SaaS com IA",
    description: "IA que processa orçamentos da construção civil em segundos. Menos custo, mais margem.",
    tags: ["Python", "GPT-4", "AWS Lambda"],
    cta: "Visitar site",
    link: "https://construclick.ai/",
    image: "/images/case-studies/construclick.png",
  },
  {
    id: 2,
    name: "HypoPredict",
    category: "AI HealthTech",
    description: "Plataforma preditiva para diabetes que antecipa eventos de hipoglicemia com até 60 minutos de antecedência.",
    tags: ["React Native", "TensorFlow", "AWS"],
    cta: "Visitar site",
    link: "https://hipoglicemia.com",
    image: "/images/case-studies/hypo.png",
  },
  {
    id: 3,
    name: "Mavsystem",
    category: "Logística & Field Service",
    description: "Sistema de gestão de campo com roteirização inteligente e sincronização em tempo real.",
    tags: ["React", "Express", "MongoDB"],
    cta: "Visitar site",
    link: "https://mavsystems.com.br/",
    image: "/images/case-studies/mavsystems.png",
  },
  {
    id: 4,
    name: "Ecossistema E-Siri",
    category: "GovTech",
    description: "Super App municipal para mais de 200 mil cidadãos com alta disponibilidade e UX acessível.",
    tags: ["Microservices", "Kubernetes", "Vue.js"],
    cta: "Visitar site",
    link: "https://conta.e-siri.com/",
    image: "/images/case-studies/e-siris.png",
  },
  {
    id: 5,
    name: "Ananda Health",
    category: "E-commerce B2B",
    description: "Desenvolvemos o sistema de e-commerce completo para uma empresa internacional, com integração com o Shopify.",
    tags: ["Shopify", "Stripe", "React"],
    cta: "Visitar site",
    link: "https://anandahealth.com/",
    image: "/images/case-studies/ananda.png",
  },

//   {
//     id: 7,
//     name: "Castlewall",
//     category: "FinTech & AI Analytics",
//     description: "Uma IA que atua como analista financeiro sênior 24/7. Interpreta métricas, detecta anomalias e recomenda ações estratégicas.",
//     tags: ["Python", "OpenAI", "FastAPI"],
//     cta: "Visitar site",
//     image: "/images/case-studies/fintech_dashboard_on_laptop.png",
//     link: "https://castlewall.com.br",
//   },
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


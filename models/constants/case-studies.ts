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
    description: "Desenvolvido de forma terceirizada por nós, uma IA que processa orçamentos de construção civil em segundos.",
    tags: ["Python", "OpenAI", "Kubernetes"],
    cta: "Visitar site",
    link: "https://construclick.ai/",
    image: "/images/case-studies/construclick.png",
  },
  {
    id: 2,
    name: "HypoPredict",
    category: "AI HealthTech",
    description: "Participamos do desenvolvimento de uma plataforma preditiva para diabetes que antecipa eventos de hipoglicemia.",
    tags: ["React Native", "TensorFlow", "AWS"],
    cta: "Visitar site",
    link: "https://hipoglicemia.com",
    image: "/images/case-studies/hypo.png",
  },
  {
    id: 3,
    name: "Mavsystem",
    category: "Logística & Field Service",
    description: "Construimos terceirizadamente o sistema de gestão de campo com roteirização inteligente e sincronização em tempo real.",
    tags: ["React.js", "Express", "MongoDB"],
    cta: "Visitar site",
    link: "https://mavsystems.com.br/",
    image: "/images/case-studies/mavsystems.png",
  },
  {
    id: 4,
    name: "Ecossistema E-Siri",
    category: "GovTech",
    description: "Trabalhamos terceiriadamente no super app municipal para mais de 200 mil cidadãos com alta disponibilidade e UX acessível.",
    tags: ["Microservices", "Kubernetes", "Vue.js"],
    cta: "Visitar site",
    link: "https://conta.e-siri.com/",
    image: "/images/case-studies/e-siris.png",
  },
  {
    id: 5,
    name: "Ananda Health",
    category: "E-commerce B2B",
    description: "Desenvolvemos terceirizadamente o sistema de e-commerce completo para uma empresa internacional, com integração com o Shopify.",
    tags: ["Shopify", "Stripe", "React"],
    cta: "Visitar site",
    link: "https://anandahealth.com/",
    image: "/images/case-studies/ananda.png",
  },

  {
    id: 7,
    name: "Castlewall",
    category: "FinTech & AI Analytics",
    description: "Construimos de forma terceirizada, uma IA que atua como analista financeiro sênior 24/7.",
    tags: ["Python", "OpenAI", "FastAPI"],
    cta: "Visitar site",
    image: "/images/case-studies/castlewall.png",
    link: "https://dashboard.castlewallpartners.com",
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


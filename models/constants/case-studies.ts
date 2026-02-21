import { CaseStudy, CaseStudiesContent } from '../types';

export const CASE_STUDIES_CONTENT: CaseStudiesContent = {
  title: "Projetos que Transformam Ideias em Resultados Reais",
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    name: "HypoPredict",
    client: "Hipoglicemia.com",
    category: "AI HealthTech",
    impact_headline: "Prevendo crises antes que elas aconteçam.",
    description: "Desenvolvemos um sistema de IA para prever crises de hipoglicemia antes que elas aconteçam.",
    what_we_did: [
      "Criação de modelos de IA preditivos",
      "Análise de dados em tempo real",
      "Interface focada em alertas rápidos",
    ],
    results: "O sistema antecipa eventos hipoglicêmicos, permitindo que o usuário tome medidas preventivas e tenha mais qualidade de vida.",
    tags: ["React Native", "TensorFlow", "Google Cloud"],
    cta: "Visitar site",
    link: "https://www.hipoglicemia.com/",
    image: "/images/case-studies/hypo.png",
  },
  {
    id: 2,
    name: "Marcelo Liberato",
    client: "Marcelo Liberato",
    category: "FitTech",
    impact_headline: "Gestão completa de alunos e treinos em um só lugar.",
    description: "Transformamos a consultoria de um personal trainer em uma plataforma digital de alta performance.",
    what_we_did: [
      "Site institucional moderno para vendas",
      "Sistema de anamnese automatizado",
      "Plataforma de acompanhamento de evolução dos alunos",
    ],
    results: "Eliminação de papéis e planilhas, centralizando toda a jornada do aluno, da primeira avaliação ao progresso diário.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    cta: "Visitar site",
    link: "https://marcelo-liberato.vercel.app/",
    image: "/images/case-studies/marcelo.png",
  },
];

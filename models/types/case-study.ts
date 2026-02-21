export interface CaseStudy {
  id: number;
  name: string;
  client: string;
  category: string;
  impact_headline: string;
  description: string;
  what_we_did: string[];
  results: string;
  tags: string[];
  cta: string;
  link: string;
  image: string;
}

export interface CaseStudiesContent {
  title: string;
}


export interface Product {
  id: string;
  slug: string;
  domain: string;
  name: string;
  nameFa: string;
  title: string;
  category: string;
  description: string;
  pitch: string;
  cover: string;
  icon: string;
  accent: string;
  status: "available" | "sold";
  price?: number;
  featured?: boolean;
  opportunityScore: number;
  scoreBreakdown: {
    market: number;
    brand: number;
    scalability: number;
    demand: number;
    differentiation: number;
  };
  targetAudience: string[];
  businessModel: string[];
  roadmap: {
    step: number;
    title: string;
    description: string;
    duration?: string;
  }[];
  launchPlan: {
    day30: string[];
    day60: string[];
    day90: string[];
  };
  includedAssets: string[];
  tags: string[];
  whyThisBrand: string[];
}

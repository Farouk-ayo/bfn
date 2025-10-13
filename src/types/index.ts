// FOUNDERS
export type Theme =
  | "The Builders"
  | "The Healers"
  | "The Changemakers"
  | "The Craftsmen";

export type Cohort = "Smart Start" | "Accelerate";
export interface Founder {
  name: string;
  businessName: string;
  description: string;
  story: string;
  industryCategory: string;
  cohort: Cohort;
  sector: string;
  imageUrl: string;
  ventureLogoUrl: string;
  url: string;
  linkedIn: string;
  theme: Theme;
}

// VOTING
export interface Candidate extends Founder {
  votes?: number;
}

export interface VotingCategory {
  id: string;
  title: string;
  emoji: string;
  description: string;
  candidates: Candidate[];
}

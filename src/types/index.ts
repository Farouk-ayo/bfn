// VOTING
export interface Candidate {
  id: string;
  name: string;
  businessName: string;
  imageUrl: string;
  votes?: number;
}

export interface VotingCategory {
  id: string;
  title: string;
  emoji: string;
  description: string;
  candidates: Candidate[];
}

import { useState, useEffect } from "react";
import {
  subscribeToCategory,
  castVote,
  hasVotedInCategory,
  getVoteChoice,
  subscribeToVotingStatus,
} from "../services/voting.service";
import { VotingCategory } from "../types";

interface UseVotingReturn {
  votes: Record<string, number>;
  hasVoted: boolean;
  votedFor: string | null;
  totalVotes: number;
  isVoting: boolean;
  vote: (candidateId: string) => Promise<void>;
  getVotePercentage: (candidateId: string) => number;
  getLeadingCandidate: () => string | null;
}

export const useVoting = (category: VotingCategory): UseVotingReturn => {
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [hasVoted, setHasVoted] = useState(false);
  const [votedFor, setVotedFor] = useState<string | null>(null);
  const [isVoting, setIsVoting] = useState(false);

  useEffect(() => {
    // Check if already voted
    setHasVoted(hasVotedInCategory(category.id));
    setVotedFor(getVoteChoice(category.id));

    // Subscribe to real-time updates
    const unsubscribe = subscribeToCategory(category.id, (data) => {
      setVotes(data);
    });

    return () => unsubscribe();
  }, [category.id]);

  const totalVotes = Object.values(votes).reduce(
    (sum, count) => sum + count,
    0
  );

  const vote = async (candidateId: string) => {
    if (hasVoted) {
      throw new Error("You have already voted in this category");
    }

    setIsVoting(true);
    try {
      await castVote(category.id, candidateId);
      setHasVoted(true);
      setVotedFor(candidateId);
    } finally {
      setIsVoting(false);
    }
  };

  const getVotePercentage = (candidateId: string): number => {
    if (totalVotes === 0) return 0;
    const candidateVotes = votes[candidateId] || 0;
    return Math.round((candidateVotes / totalVotes) * 100);
  };

  const getLeadingCandidate = (): string | null => {
    if (Object.keys(votes).length === 0) return null;

    return Object.entries(votes).reduce((leader, [id, count]) => {
      if (!leader || count > votes[leader]) return id;
      return leader;
    }, "");
  };

  return {
    votes,
    hasVoted,
    votedFor,
    totalVotes,
    isVoting,
    vote,
    getVotePercentage,
    getLeadingCandidate,
  };
};

export const useVotingStatus = () => {
  const [status, setStatus] = useState<"open" | "closed" | "">("");

  useEffect(() => {
    const unsubscribe = subscribeToVotingStatus((newStatus) => {
      setStatus(newStatus);
    });

    return () => unsubscribe();
  }, []);

  return status;
};

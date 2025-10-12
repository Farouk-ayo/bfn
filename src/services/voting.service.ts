import { ref, onValue, runTransaction, get, set } from "firebase/database";
import { database } from "./firebase.config";

export interface Candidate {
  id: string;
  name: string;
  businessName?: string;
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

// Subscribe to real-time vote updates for a category
export const subscribeToCategory = (
  categoryId: string,
  callback: (candidates: Record<string, number>) => void
) => {
  const categoryRef = ref(database, `votes/${categoryId}`);

  return onValue(categoryRef, (snapshot) => {
    const data = snapshot.val() || {};
    callback(data);
  });
};

// Subscribe to all categories at once
export const subscribeToAllVotes = (
  callback: (allVotes: Record<string, Record<string, number>>) => void
) => {
  const votesRef = ref(database, "votes");
  console.log(votesRef);
  return onValue(votesRef, (snapshot) => {
    const data = snapshot.val() || {};
    callback(data);
  });
};

// Cast a vote for a candidate
export const castVote = async (
  categoryId: string,
  candidateId: string
): Promise<void> => {
  // Check global voting status
  const statusRef = ref(database, "votingStatus");
  const statusSnapshot = await get(statusRef);
  const currentStatus = statusSnapshot.val() || "open";

  if (currentStatus !== "open") {
    throw new Error("Voting is currently closed.");
  }

  // Check if already voted in this category
  const hasVoted = localStorage.getItem(`voted-${categoryId}`);
  if (hasVoted) {
    throw new Error("You have already voted in this category");
  }

  // Proceed with transaction
  const voteRef = ref(database, `votes/${categoryId}/${candidateId}`);
  await runTransaction(voteRef, (currentVotes) => (currentVotes || 0) + 1);

  localStorage.setItem(`voted-${categoryId}`, candidateId);
};

// Check if user has voted in a category
export const hasVotedInCategory = (categoryId: string): boolean => {
  return !!localStorage.getItem(`voted-${categoryId}`);
};

// Get vote choice for a category
export const getVoteChoice = (categoryId: string): string | null => {
  return localStorage.getItem(`voted-${categoryId}`);
};

// Get total votes for a category
export const getTotalVotesForCategory = async (
  categoryId: string
): Promise<number> => {
  const categoryRef = ref(database, `votes/${categoryId}`);
  const snapshot = await get(categoryRef);
  const votes = snapshot.val() || {};

  return Object.values(votes).reduce(
    (sum: number, count) => sum + (count as number),
    0
  );
};

// Get winner for a category
export const getCategoryWinner = async (
  categoryId: string
): Promise<{ candidateId: string; votes: number } | null> => {
  const categoryRef = ref(database, `votes/${categoryId}`);
  const snapshot = await get(categoryRef);
  const votes = snapshot.val() || {};

  if (Object.keys(votes).length === 0) return null;

  let maxVotes = 0;
  let winnerId = "";

  Object.entries(votes).forEach(([id, count]) => {
    if ((count as number) > maxVotes) {
      maxVotes = count as number;
      winnerId = id;
    }
  });

  return { candidateId: winnerId, votes: maxVotes };
};

export const setVotingStatus = async (
  status: "open" | "closed"
): Promise<void> => {
  const statusRef = ref(database, "votingStatus");
  await set(statusRef, status);
};

export const subscribeToVotingStatus = (
  callback: (status: "open" | "closed") => void
) => {
  const statusRef = ref(database, "votingStatus");

  return onValue(statusRef, async (snapshot) => {
    let status = snapshot.val();
    console.log(status, "jd");

    if (!status) {
      await set(statusRef, "open");
      status = "open";
    }

    callback(status);
  });
};

import { ref, onValue, runTransaction, get, set } from "firebase/database";
import { database } from "./firebase.config";

const VOTING_SESSION_VERSION = "v5";
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
const checkVotingSession = async (): Promise<void> => {
  const sessionRef = ref(database, "votingSession");
  const snapshot = await get(sessionRef);
  const currentSession = snapshot.val();

  // If session version doesn't match, clear all localStorage votes
  const storedSession = localStorage.getItem("votingSession");
  console.log("session", currentSession, storedSession);

  if (!currentSession) {
    // Initialize session in Firebase
    await set(sessionRef, VOTING_SESSION_VERSION);
    localStorage.setItem("votingSession", VOTING_SESSION_VERSION);
  } else if (storedSession !== currentSession) {
    // Session changed! Clear all votes
    console.log("🔄 Voting session changed - clearing local votes");
    clearAllLocalVotes();
    localStorage.setItem("votingSession", currentSession);
  }
};

// Clear all vote records from localStorage
const clearAllLocalVotes = (): void => {
  const keys = Object.keys(localStorage);
  keys.forEach((key) => {
    if (key.startsWith("voted-")) {
      localStorage.removeItem(key);
    }
  });
};

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
  await checkVotingSession();

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
  checkVotingSession();
  return !!localStorage.getItem(`voted-${categoryId}`);
};

// Get vote choice for a category
export const getVoteChoice = (categoryId: string): string | null => {
  checkVotingSession();
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

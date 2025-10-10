// import { ref, onValue, runTransaction, get } from "firebase/database";
// import { database } from "./firebase.config";

// export interface Candidate {
//   id: string;
//   name: string;
//   businessName?: string;
//   imageUrl: string;
//   votes: number;
// }

// export interface VotingCategory {
//   id: string;
//   title: string;
//   emoji: string;
//   description: string;
//   candidates: Candidate[];
// }

// // Subscribe to real-time vote updates for a category
// export const subscribeToCategory = (
//   categoryId: string,
//   callback: (candidates: Record<string, number>) => void
// ) => {
//   const categoryRef = ref(database, `votes/${categoryId}`);

//   return onValue(categoryRef, (snapshot) => {
//     const data = snapshot.val() || {};
//     callback(data);
//   });
// };

// // Subscribe to all categories at once
// export const subscribeToAllVotes = (
//   callback: (allVotes: Record<string, Record<string, number>>) => void
// ) => {
//   const votesRef = ref(database, "votes");

//   return onValue(votesRef, (snapshot) => {
//     const data = snapshot.val() || {};
//     callback(data);
//   });
// };

// // Cast a vote for a candidate
// export const castVote = async (
//   categoryId: string,
//   candidateId: string
// ): Promise<void> => {
//   // Check if already voted in this category
//   const hasVoted = localStorage.getItem(`voted-${categoryId}`);

//   if (hasVoted) {
//     throw new Error("You have already voted in this category");
//   }

//   const voteRef = ref(database, `votes/${categoryId}/${candidateId}`);

//   // Use transaction to ensure atomic increment
//   await runTransaction(voteRef, (currentVotes) => {
//     return (currentVotes || 0) + 1;
//   });

//   // Mark as voted locally
//   localStorage.setItem(`voted-${categoryId}`, candidateId);
// };

// // Check if user has voted in a category
// export const hasVotedInCategory = (categoryId: string): boolean => {
//   return !!localStorage.getItem(`voted-${categoryId}`);
// };

// // Get vote choice for a category
// export const getVoteChoice = (categoryId: string): string | null => {
//   return localStorage.getItem(`voted-${categoryId}`);
// };

// // Get total votes for a category
// export const getTotalVotesForCategory = async (
//   categoryId: string
// ): Promise<number> => {
//   const categoryRef = ref(database, `votes/${categoryId}`);
//   const snapshot = await get(categoryRef);
//   const votes = snapshot.val() || {};

//   return Object.values(votes).reduce(
//     (sum: number, count) => sum + (count as number),
//     0
//   );
// };

// // Admin function: Toggle voting status
// export const setVotingStatus = async (
//   status: "open" | "closed" | "paused"
// ): Promise<void> => {
//   const statusRef = ref(database, "votingStatus");
//   await runTransaction(statusRef, () => status);
// };

// // Subscribe to voting status
// export const subscribeToVotingStatus = (
//   callback: (status: "open" | "closed" | "paused") => void
// ) => {
//   const statusRef = ref(database, "votingStatus");

//   return onValue(statusRef, (snapshot) => {
//     const status = snapshot.val() || "open";
//     callback(status);
//   });
// };

// // Admin function: Reset all votes (use with caution!)
// export const resetAllVotes = async (): Promise<void> => {
//   const votesRef = ref(database, "votes");
//   await runTransaction(votesRef, () => ({}));

//   // Clear localStorage
//   Object.keys(localStorage).forEach((key) => {
//     if (key.startsWith("voted-")) {
//       localStorage.removeItem(key);
//     }
//   });
// };

// // Export results for admin
// export const exportVotingResults = async () => {
//   const votesRef = ref(database, "votes");
//   const snapshot = await get(votesRef);
//   return snapshot.val() || {};
// };

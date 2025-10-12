import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { subscribeToAllVotes } from "../../../services/voting.service";
import { votingCategories } from "../../../../data/2025/voting-data";
import { founders } from "../../../../data/2025/founder-data";
import Navbar from "../layout/navbar";

interface LeaderboardEntry {
  categoryId: string;
  categoryTitle: string;
  emoji: string;
  winner: {
    id: string;
    name: string;
    businessName: string;
    imageUrl: string;
    votes: number;
  } | null;
  totalVotes: number;
}

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);

    const unsubscribe = subscribeToAllVotes((allVotes) => {
      const results: LeaderboardEntry[] = votingCategories.map((category) => {
        const categoryVotes = allVotes[category.id] || {};
        const totalVotes = Object.values(categoryVotes).reduce(
          (sum: number, count) => sum + (count as number),
          0
        );

        // Find winner
        let maxVotes = 0;
        let winnerId = "";

        Object.entries(categoryVotes).forEach(([id, count]) => {
          if ((count as number) > maxVotes) {
            maxVotes = count as number;
            winnerId = id;
          }
        });

        // Get winner details from founders or candidates
        let winnerData = null;
        if (winnerId) {
          const candidate = category.candidates.find((c) => c.id === winnerId);
          const founder = founders.find(
            (f) => f.name.toLowerCase().replace(/\s+/g, "-") === winnerId
          );

          winnerData = {
            id: winnerId,
            name: candidate?.name || founder?.name || "Unknown",
            businessName:
              candidate?.businessName || founder?.businessName || "",
            imageUrl: candidate?.imageUrl || founder?.imageUrl || "",
            votes: maxVotes,
          };
        }

        return {
          categoryId: category.id,
          categoryTitle: category.title,
          emoji: category.emoji,
          winner: winnerData,
          totalVotes,
        };
      });

      setLeaderboard(results);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  console.log(leaderboard);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Navbar />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="text-4xl sm:text-6xl"
        >
          🏆
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section - Mobile optimized */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="text-6xl sm:text-8xl md:text-9xl mb-6 sm:mb-8"
          >
            🏆
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 font-maldives px-2"
          >
            Leaderboard 2025
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3 }}
            className="w-24 sm:w-32 h-1 bg-gold mx-auto mb-6 sm:mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-body px-4"
          >
            See who's leading in each category! Votes are updated in real-time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 sm:mt-8"
          >
            <Link
              to="/yearbook-2025"
              className="inline-block bg-gold hover:bg-yellow-600 text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all text-sm sm:text-base"
            >
              ← Back to Voting
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Leaderboard Grid - Mobile first */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {leaderboard.map((entry, idx) => (
              <motion.div
                key={entry.categoryId}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-gold transition-all duration-300"
              >
                {/* Category Header - Mobile optimized */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="text-3xl sm:text-4xl lg:text-5xl">
                      {entry.emoji}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-maldives">
                        {entry.categoryTitle}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        {entry.totalVotes} total{" "}
                        {entry.totalVotes === 1 ? "vote" : "votes"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Winner Section - Mobile optimized */}
                {entry.winner ? (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-gold/20 to-gold/10 border-2 border-gold rounded-xl sm:rounded-2xl p-4 sm:p-6"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                      <div className="relative flex-shrink-0">
                        <img
                          src={entry.winner.imageUrl}
                          alt={entry.winner.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-3 sm:border-4 border-gold"
                        />
                        <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-gold text-black rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center font-bold text-xs sm:text-sm">
                          👑
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 truncate">
                          {entry.winner.name}
                        </h4>
                        <p className="text-gray-400 text-xs sm:text-sm mb-2 truncate">
                          {entry.winner.businessName}
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="bg-gold text-black px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
                            {entry.winner.votes}{" "}
                            {entry.winner.votes === 1 ? "vote" : "votes"}
                          </div>
                          <div className="text-gold text-xs sm:text-sm font-semibold">
                            {entry.totalVotes > 0
                              ? Math.round(
                                  (entry.winner.votes / entry.totalVotes) * 100
                                )
                              : 0}
                            % of votes
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="bg-gray-800/50 border-2 border-dashed border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
                    <p className="text-gray-500 text-base sm:text-lg">
                      No votes yet in this category
                    </p>
                    <Link
                      to="/yearbook-2025#voting"
                      className="inline-block mt-3 sm:mt-4 text-gold hover:text-yellow-600 font-semibold text-sm sm:text-base"
                    >
                      Be the first to vote →
                    </Link>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile optimized */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black border-2 border-gold rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-maldives">
              Haven't Voted Yet?
            </h3>
            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 font-body px-2">
              Your voice matters! Head back to cast your votes and help
              celebrate the 2025 cohort.
            </p>
            <Link
              to="/yearbook-2025#voting"
              className="inline-block bg-gold hover:bg-yellow-600 text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all"
            >
              Vote Now 🎉
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Leaderboard;

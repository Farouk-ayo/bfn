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
          className="text-6xl"
        >
          🏆
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="text-8xl sm:text-9xl mb-8"
          >
            🏆
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 font-maldives"
          >
            Leaderboard 2025
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3 }}
            className="w-32 h-1 bg-gold mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto font-body"
          >
            See who's leading in each category! Votes are updated in real-time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Link
              to="/yearbook-2025"
              className="inline-block bg-gold hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-semibold transition-all"
            >
              ← Back to Voting
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Leaderboard Grid */}
      <section className="pb-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leaderboard.map((entry, idx) => (
              <motion.div
                key={entry.categoryId}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-3xl p-8 hover:border-gold transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{entry.emoji}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white font-maldives">
                        {entry.categoryTitle}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {entry.totalVotes} total{" "}
                        {entry.totalVotes === 1 ? "vote" : "votes"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Winner Section */}
                {entry.winner ? (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-gold/20 to-gold/10 border-2 border-gold rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <img
                          src={entry.winner.imageUrl}
                          alt={entry.winner.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-gold"
                        />
                        <div className="absolute -top-2 -right-2 bg-gold text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                          👑
                        </div>
                      </div>

                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-1">
                          {entry.winner.name}
                        </h4>
                        <p className="text-gray-400 text-sm mb-2">
                          {entry.winner.businessName}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="bg-gold text-black px-3 py-1 rounded-full text-sm font-bold">
                            {entry.winner.votes}{" "}
                            {entry.winner.votes === 1 ? "vote" : "votes"}
                          </div>
                          <div className="text-gold text-sm font-semibold">
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
                  <div className="bg-gray-800/50 border-2 border-dashed border-gray-700 rounded-2xl p-8 text-center">
                    <p className="text-gray-500 text-lg">
                      No votes yet in this category
                    </p>
                    <Link
                      to="/yearbook-2025#voting"
                      className="inline-block mt-4 text-gold hover:text-yellow-600 font-semibold"
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

      {/* CTA Section */}
      <section className="pb-24 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black border-2 border-gold rounded-3xl p-12"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-maldives">
              Haven't Voted Yet?
            </h3>
            <p className="text-gray-400 text-lg mb-8 font-body">
              Your voice matters! Head back to cast your votes and help
              celebrate the 2025 cohort.
            </p>
            <Link
              to="/yearbook-2025#voting"
              className="inline-block bg-gold hover:bg-yellow-600 text-black px-10 py-4 rounded-full font-bold text-lg transition-all"
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

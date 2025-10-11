import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { VotingCategory } from "../../../types";
import Confetti from "../components/ui/Confetti";
import { votingCategories } from "../../../../data/2025/voting-data";
import CategoryCard from "../components/voting/CategoryCard";
import CandidateModal from "../components/voting/CandidateModal";

const VotingSection = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<VotingCategory | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [votes, setVotes] = useState<Record<string, string>>({});

  const handleVote = (candidateId: string) => {
    if (selectedCategory) {
      setVotes((prev) => ({
        ...prev,
        [`voted-${selectedCategory.id}`]: candidateId,
      }));

      setShowConfetti(true);
      setSelectedCategory(null);

      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const totalVotes = Object.keys(votes).length;

  return (
    <section
      id="voting"
      className="w-full py-16 sm:py-24 bg-black px-4 sm:px-8"
    >
      <Confetti show={showConfetti} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="text-6xl sm:text-7xl mb-6"
          >
            🎉
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-maldives">
            Tap to Vote Here
          </h2>

          <div className="w-24 h-1 bg-gold mx-auto mb-6" />

          <p className="text-xl sm:text-2xl text-gold mb-6 font-maldives">
            "Celebrate the 2025 Cohort—Your Way!"
          </p>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto mb-4 font-body">
            You've read their stories and seen their ventures, now it's your
            turn! Tap through the cards below and vote for the founders who
            stood out to you today. Help celebrate the vibes, creativity, and
            energy that make this cohort unforgettable.
          </p>

          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto font-body">
            You can vote in as many categories as you like. When you tap a card,
            your pick is recorded instantly and you'll see a little confetti
            burst 🎉 to make it official!
          </p>

          {totalVotes > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="mt-6 inline-block bg-gold/10 border border-gold rounded-full px-6 py-3"
            >
              <span className="text-gold font-bold">
                🎊 You've voted in {totalVotes}{" "}
                {totalVotes === 1 ? "category" : "categories"}!
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {votingCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <CategoryCard
                category={category}
                onClick={() => setSelectedCategory(category)}
              />
            </motion.div>
          ))}
        </div>

        {/* Social Share CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4 font-body">
            Share your picks with the community!
          </p>
          <motion.a
            href="https://www.linkedin.com/company/black-founders-network/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-semibold transition-all"
          >
            Share on LinkedIn #BFNDemoDay2025
          </motion.a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <CandidateModal
            category={selectedCategory}
            onClose={() => setSelectedCategory(null)}
            onVote={handleVote}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default VotingSection;

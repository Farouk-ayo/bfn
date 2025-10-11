import { useState } from "react";
import { VotingCategory } from "../../../../types";
import { motion } from "framer-motion";

const CategoryCard = ({
  category,
  onClick,
}: {
  category: VotingCategory;
  onClick: () => void;
}) => {
  //   const [votes, setVotes] = useState<Record<string, number>>({});
  const [votes] = useState<Record<string, number>>({});
  const hasVoted = votes[`voted-${category.id}`] !== undefined;

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`relative bg-gradient-to-br ${
        hasVoted
          ? "from-gold/20 to-gold/10 border-gold"
          : "from-gray-900 to-black border-gray-800"
      } border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl`}
    >
      {hasVoted && (
        <div className="absolute top-3 right-3 bg-gold text-black rounded-full px-3 py-1 text-xs font-bold">
          ✓ Voted
        </div>
      )}

      <div className="text-5xl mb-4">{category.emoji}</div>

      <h3 className="text-xl font-bold text-white mb-2 font-maldives">
        {category.title}
      </h3>

      <p className="text-gray-400 text-sm mb-4 font-body line-clamp-3">
        {category.description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-gold text-sm font-semibold">Tap to Vote →</span>
        {hasVoted && (
          <span className="text-xs text-gray-500">
            {category.candidates.length} nominees
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default CategoryCard;

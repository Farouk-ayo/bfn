import { motion } from "framer-motion";
import { VotingCategory } from "../../../../types";
import { useState } from "react";
import { useVoting } from "../../../../hooks/useVoting";

const CandidateModal = ({
  category,
  onClose,
  onVote,
}: {
  category: VotingCategory;
  onClose: () => void;
  onVote: () => void;
}) => {
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(
    null
  );
  const { vote, isVoting, hasVoted, votedFor } = useVoting(category);

  const handleVote = async () => {
    if (selectedCandidate && !isVoting) {
      try {
        await vote(selectedCandidate);
        onVote();
      } catch (error) {
        console.error("Error voting:", error);
        alert(
          error instanceof Error
            ? error.message
            : "Failed to cast vote. Please try again."
        );
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-gray-900 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col"
        onClick={(e: Event) => e.stopPropagation()}
      >
        {/* Fixed Header */}
        <div className="flex items-start justify-between p-6 sm:p-8 border-b border-gray-800">
          <div>
            <div className="text-4xl mb-2">{category.emoji}</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-maldives">
              {category.title}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-body">
              {category.description}
            </p>
            {hasVoted && (
              <div className="mt-3 inline-block bg-coolBlue/20 border border-coolBlue rounded-full px-4 py-1">
                <span className="text-coolBlue text-sm font-bold">
                  ✓ You voted in this category
                </span>
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl ml-4 flex-shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Candidates Container */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-3">
          {category.candidates.map((candidate) => {
            const isVotedFor = votedFor === candidate.id;
            const isSelected = selectedCandidate === candidate.id;

            return (
              <motion.div
                key={candidate.id}
                onClick={() => !isVoting && setSelectedCandidate(candidate.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                  isSelected
                    ? "bg-coolBlue/20 border-2 border-coolBlue"
                    : isVotedFor
                    ? "bg-green-900/20 border-2 border-green-500"
                    : "bg-gray-800 border-2 border-transparent hover:border-gray-700"
                }`}
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={candidate.imageUrl}
                    alt={candidate.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  {isSelected && (
                    <div className="absolute -top-1 -right-1 bg-coolBlue text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                  )}
                  {isVotedFor && !isSelected && (
                    <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold text-lg truncate">
                    {candidate.name}
                  </h4>
                  <p className="text-gray-400 text-sm truncate">
                    {candidate.businessName}
                  </p>
                  {isVotedFor && !isSelected && (
                    <p className="text-green-500 text-xs mt-1 font-semibold">
                      Your previous vote
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Fixed Button at Bottom */}
        <div className="p-6 sm:p-8 border-t border-gray-800 bg-gray-900">
          <motion.button
            onClick={handleVote}
            disabled={!selectedCandidate || isVoting}
            whileHover={selectedCandidate && !isVoting ? { scale: 1.05 } : {}}
            whileTap={selectedCandidate && !isVoting ? { scale: 0.95 } : {}}
            className={`w-full py-4 rounded-full font-bold text-lg transition-all ${
              selectedCandidate && !isVoting
                ? "bg-gradient-to-r from-coolBlue to-yellow-600 text-black hover:shadow-2xl"
                : "bg-gray-700 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isVoting
              ? "Casting Vote..."
              : hasVoted
              ? selectedCandidate
                ? "Change Your Vote 🎉"
                : "Select to Change Vote"
              : selectedCandidate
              ? "Cast Your Vote 🎉"
              : "Select a Candidate"}
          </motion.button>

          {hasVoted && (
            <p className="text-center text-gray-500 text-sm mt-3">
              You can change your vote anytime
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CandidateModal;

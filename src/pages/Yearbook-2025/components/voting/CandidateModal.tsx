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
      className="fixed inset-0 bg-black/95 z-50 flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-gray-900 rounded-t-3xl sm:rounded-3xl w-full sm:max-w-2xl h-[95vh] sm:h-auto sm:max-h-[90vh] flex flex-col"
        onClick={(e: Event) => e.stopPropagation()}
      >
        {/* Fixed Header */}
        <div className="flex items-start justify-between p-4 sm:p-6 lg:p-8 border-b border-gray-800 flex-shrink-0">
          <div className="flex-1 pr-2">
            <div className="text-3xl sm:text-4xl mb-2">{category.emoji}</div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 font-maldives">
              {category.title}
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm lg:text-base">
              {category.description}
            </p>
            {hasVoted && (
              <div className="mt-2 sm:mt-3 inline-block bg-coolBlue/20 border border-coolBlue rounded-full px-3 py-1">
                <span className="text-coolBlue text-xs sm:text-sm font-bold">
                  ✓ You voted in this category
                </span>
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl sm:text-2xl flex-shrink-0 w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Candidates Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-2 sm:space-y-3">
          {category.candidates.map((candidate) => {
            const isVotedFor = votedFor === candidate.id;
            const isSelected = selectedCandidate === candidate.id;

            return (
              <motion.div
                key={candidate.id}
                onClick={() => !isVoting && setSelectedCandidate(candidate.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl cursor-pointer transition-all ${
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
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover"
                  />
                  {isSelected && (
                    <div className="absolute -top-1 -right-1 bg-coolBlue text-black rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                  )}
                  {isVotedFor && !isSelected && (
                    <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold text-sm sm:text-base lg:text-lg truncate">
                    {candidate.name}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm truncate">
                    {candidate.businessName}
                  </p>
                  {isVotedFor && !isSelected && (
                    <p className="text-green-500 text-xs mt-0.5 sm:mt-1 font-semibold">
                      Your previous vote
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Fixed Button at Bottom */}
        <div className="p-4 sm:p-6 lg:p-8 border-t border-gray-800 bg-gray-900 flex-shrink-0 safe-area-bottom">
          <motion.button
            onClick={handleVote}
            disabled={!selectedCandidate || isVoting}
            whileHover={selectedCandidate && !isVoting ? { scale: 1.02 } : {}}
            whileTap={selectedCandidate && !isVoting ? { scale: 0.98 } : {}}
            className={`w-full py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all ${
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
            <p className="text-center text-gray-500 text-xs sm:text-sm mt-2 sm:mt-3">
              You can change your vote anytime
            </p>
          )}
        </div>
      </motion.div>

      <style>{`
        .safe-area-bottom {
          padding-bottom: max(1rem, env(safe-area-inset-bottom));
        }
        
        @media (min-width: 640px) {
          .safe-area-bottom {
            padding-bottom: 1.5rem;
          }
        }
        
        @media (min-width: 1024px) {
          .safe-area-bottom {
            padding-bottom: 2rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default CandidateModal;

import { motion } from "framer-motion";
import { VotingCategory } from "../../../../types";
import { useState } from "react";

const CandidateModal = ({
  category,
  onClose,
  onVote,
}: {
  category: VotingCategory;
  onClose: () => void;
  onVote: (candidateId: string) => void;
}) => {
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(
    null
  );

  const handleVote = () => {
    if (selectedCandidate) {
      onVote(selectedCandidate);
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
          {category.candidates.map((candidate) => (
            <motion.div
              key={candidate.id}
              onClick={() => setSelectedCandidate(candidate.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                selectedCandidate === candidate.id
                  ? "bg-gold/20 border-2 border-gold"
                  : "bg-gray-800 border-2 border-transparent hover:border-gray-700"
              }`}
            >
              <div className="relative flex-shrink-0">
                <img
                  src={candidate.imageUrl}
                  alt={candidate.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                {selectedCandidate === candidate.id && (
                  <div className="absolute -top-1 -right-1 bg-gold text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fixed Button at Bottom */}
        <div className="p-6 sm:p-8 border-t border-gray-800 bg-gray-900">
          <motion.button
            onClick={handleVote}
            disabled={!selectedCandidate}
            whileHover={selectedCandidate ? { scale: 1.05 } : {}}
            whileTap={selectedCandidate ? { scale: 0.95 } : {}}
            className={`w-full py-4 rounded-full font-bold text-lg transition-all ${
              selectedCandidate
                ? "bg-gradient-to-r from-gold to-yellow-600 text-black hover:shadow-2xl"
                : "bg-gray-700 text-gray-500 cursor-not-allowed"
            }`}
          >
            {selectedCandidate ? "Cast Your Vote 🎉" : "Select a Candidate"}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CandidateModal;

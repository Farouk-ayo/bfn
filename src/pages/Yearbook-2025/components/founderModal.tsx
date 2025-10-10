import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { FaLinkedin, FaGlobe } from "react-icons/fa";
import { founders } from "../../../../data/2025/founder-data";

interface FounderModalProps {
  founder: (typeof founders)[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

const FounderModal = ({ founder, isOpen, onClose }: FounderModalProps) => {
  if (!founder) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-400 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl"
            onClick={(e: Event) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400 transition-colors duration-300 bg-black bg-opacity-50 rounded-full p-2"
            >
              <FaTimes size={24} />
            </button>

            {/* Header with Photo */}
            <div className="relative bg-gradient-to-b from-yellow-400 to-transparent p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
                  <img
                    src={founder.imageUrl}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {founder.name}
                  </h2>
                  <p className="text-lg sm:text-xl text-black font-semibold mb-2">
                    {founder.businessName}
                  </p>
                  <span className="inline-block bg-black text-yellow-400 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {founder.cohort}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* About Section */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3 flex items-center">
                  <span className="mr-2">💡</span> Building
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {founder.description}
                </p>
              </div>

              {/* Industry */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3 flex items-center">
                  <span className="mr-2">🏢</span> Industry
                </h3>
                <div className="flex flex-wrap gap-2">
                  {founder.industryCategory.split(",").map((industry, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {industry.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-800">
                {founder.linkedIn && (
                  <a
                    href={founder.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors duration-300 text-sm sm:text-base"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                )}
                {founder.url && (
                  <a
                    href={founder.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full transition-colors duration-300 text-sm sm:text-base font-semibold"
                  >
                    <FaGlobe /> Website
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FounderModal;

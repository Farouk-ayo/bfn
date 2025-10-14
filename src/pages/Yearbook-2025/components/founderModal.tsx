import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaLinkedin, FaGlobe } from "react-icons/fa";
import confetti from "canvas-confetti";
import { Founder } from "../../../types";

interface FounderModalProps {
  founder: Founder | null;
  isOpen: boolean;
  onClose: () => void;
}

const FounderModal: React.FC<FounderModalProps> = ({
  founder,
  isOpen,
  onClose,
}) => {
  // Trigger confetti when modal opens
  useEffect(() => {
    if (isOpen && founder) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#D1A000", "#002A5C", "#FF6F61"],
      });
    }
  }, [isOpen, founder]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!founder) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-gray-900 rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto founder-modal-scroll shadow-2xl relative border border-gray-800"
            onClick={(e: Event) => e.stopPropagation()}
            style={{
              boxShadow: "0 0 40px rgba(209, 160, 0, 0.2)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
              aria-label="Close"
            >
              <FaTimes size={20} />
            </button>

            {/* Top Bar: Headshot + Name + Venture */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 sm:p-6 border-b border-gray-800">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-yellow-400 flex-shrink-0">
                  <img
                    src={founder.imageUrl}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {founder.name}
                  </h2>
                  <p className="text-base sm:text-lg text-yellow-400 font-semibold">
                    {founder.businessName}
                  </p>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-800 bg-opacity-50">
              <p className="text-sm sm:text-base text-gray-300 italic text-center">
                {founder.story}
              </p>
            </div>

            {/* Body: 2-Column Layout */}
            <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Left: About Section */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-2 sm:mb-3">
                  About
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {founder.description}
                </p>
                <div className="mt-3 sm:mt-4">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-2">
                    Industry
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {founder.industryCategory
                      .split(",")
                      .map((industry, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-800 text-gray-300 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs"
                        >
                          {industry.trim()}
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              {/* Right: Fun Facts / Q&A */}
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-2 sm:mb-3">
                    Quick Insights
                  </h3>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-1">
                    💡 What I Learned
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300">
                    The importance of persistence and adaptability in building
                    something meaningful.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-1">
                    🏆 Proudest Moment
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Completing the BFN program and building lasting connections
                    with fellow founders.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-1">
                    🚀 What's Next
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Scaling our solution and making a greater impact in our
                    industry.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer: Social + Program */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-800 bg-opacity-50 border-t border-gray-800">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs sm:text-sm text-gray-400">
                  Part of:{" "}
                  <span className="text-yellow-400 font-semibold">
                    {founder.cohort}
                  </span>
                </span>
                <div className="flex gap-2 sm:gap-3">
                  {founder.linkedIn && (
                    <a
                      href={founder.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-blue-500"
                    >
                      <FaLinkedin size={14} />
                    </a>
                  )}
                  {founder.url && (
                    <a
                      href={founder.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-white"
                    >
                      <FaGlobe size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FounderModal;

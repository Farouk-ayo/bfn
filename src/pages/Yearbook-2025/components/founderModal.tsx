import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaLinkedin, FaGlobe } from "react-icons/fa";
import { founders } from "../../../../data/2025/founder-data";
import { useEffect, useState } from "react";

interface FounderModalProps {
  founder: (typeof founders)[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

interface Confetti {
  id: number;
  x: number;
  y: number;
  color: string;
  rotation: number;
}

const FounderModal = ({ founder, isOpen, onClose }: FounderModalProps) => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  useEffect(() => {
    if (isOpen) {
      // Generate confetti on open
      const newConfetti = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: -10,
        color: ["#D1A000", "#FF6F61", "#4A90E2", "#9B59B6"][
          Math.floor(Math.random() * 4)
        ],
        rotation: Math.random() * 360,
      }));
      setConfetti(newConfetti);

      // Clear confetti after animation
      setTimeout(() => setConfetti([]), 2000);
    }
  }, [isOpen]);

  if (!founder) return null;

  // Extract short tagline from description (first sentence)
  const tagline = founder.description.split(".")[0] + ".";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Confetti */}
          {confetti.map((piece) => (
            <motion.div
              key={piece.id}
              className="absolute w-2 h-2 rounded-sm pointer-events-none"
              style={{
                left: `${piece.x}%`,
                backgroundColor: piece.color,
              }}
              initial={{ y: -20, opacity: 1, rotate: 0 }}
              animate={{
                y: typeof window !== "undefined" ? window.innerHeight : 1000,
                opacity: 0,
                rotate: piece.rotation + 720,
              }}
              transition={{
                duration: 2 + Math.random(),
                ease: "easeIn",
              }}
            />
          ))}

          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="bg-black border-2 border-gold rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
            style={{
              boxShadow: "0 0 60px rgba(209, 160, 0, 0.3)",
            }}
            onClick={(e: Event) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gold text-black rounded-full hover:bg-yellow-500 transition-all duration-300 z-50 shadow-lg hover:scale-110"
              aria-label="Close"
            >
              <FaTimes size={18} />
            </button>

            {/* Top Bar - Headshot + Name + Venture */}
            <div className="bg-gradient-to-r from-gold via-yellow-600 to-gold p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                {/* Headshot */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-black shadow-2xl flex-shrink-0">
                  <img
                    src={founder.imageUrl}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name + Venture */}
                <div className="text-center sm:text-left flex-1">
                  <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2 font-maldives">
                    {founder.name}
                  </h2>
                  <p className="text-xl sm:text-2xl text-gray-900 font-semibold mb-3">
                    {founder.businessName}
                  </p>
                  <span className="inline-block bg-black text-gold px-4 py-1.5 rounded-full text-sm font-semibold">
                    {founder.cohort}
                  </span>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div className="px-6 sm:px-8 py-4 bg-gray-900 border-b border-gray-800">
              <p className="text-softGray text-base sm:text-lg italic font-body">
                <span className="text-gold font-semibold">Building:</span>{" "}
                {tagline}
              </p>
            </div>

            {/* Body - 2 Column */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - About */}
                <div>
                  <h3 className="text-2xl font-bold text-gold mb-4 font-maldives flex items-center">
                    <span className="mr-2">💡</span> About
                  </h3>
                  <p className="text-softGray text-base leading-relaxed font-body mb-6">
                    {founder.description}
                  </p>

                  {/* Industry Tags */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gold mb-2 uppercase tracking-wide">
                      Industry
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {founder.industryCategory
                        .split(",")
                        .map((industry, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-800 text-softGray px-3 py-1 rounded-full text-sm border border-gray-700"
                          >
                            {industry.trim()}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Fun Facts/Q&A */}
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                  <h3 className="text-2xl font-bold text-gold mb-4 font-maldives">
                    Quick Facts
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-coral font-semibold mb-2 flex items-center text-base">
                        <span className="mr-2">🎯</span> What I Learned
                      </h4>
                      <p className="text-softGray text-sm font-body">
                        "Building a startup requires resilience, adaptability,
                        and the courage to pivot when necessary. The BFN
                        community has been invaluable in this journey."
                      </p>
                    </div>

                    <div>
                      <h4 className="text-coral font-semibold mb-2 flex items-center text-base">
                        <span className="mr-2">🏆</span> Proudest Moment
                      </h4>
                      <p className="text-softGray text-sm font-body">
                        "Seeing our first customers truly benefit from our
                        solution and hearing their positive feedback validated
                        all the hard work we put in."
                      </p>
                    </div>

                    <div>
                      <h4 className="text-coral font-semibold mb-2 flex items-center text-base">
                        <span className="mr-2">🚀</span> What's Next
                      </h4>
                      <p className="text-softGray text-sm font-body">
                        "We're focused on scaling our impact, expanding our
                        customer base, and continuing to innovate in ways that
                        solve real problems for our community."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-8 py-6 bg-gray-900 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Social Links */}
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {founder.linkedIn && (
                  <a
                    href={founder.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-all duration-300 text-sm font-semibold hover:scale-105"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                )}
                {founder.url && (
                  <a
                    href={founder.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gold hover:bg-yellow-500 text-black px-4 py-2 rounded-full transition-all duration-300 text-sm font-semibold hover:scale-105"
                  >
                    <FaGlobe /> Website
                  </a>
                )}
              </div>

              {/* Program Badge */}
              <div className="text-softGray text-sm font-body text-center sm:text-right">
                Part of:{" "}
                <span className="text-gold font-semibold">
                  {founder.cohort.includes("Smart Start")
                    ? "Smart Start"
                    : "Accelerate"}{" "}
                  2025
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FounderModal;

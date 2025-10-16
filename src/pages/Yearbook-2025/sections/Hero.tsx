import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
}

const Hero: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const newSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setSparkles(newSparkles);

    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((err) => console.log("Autoplay prevented:", err));
    }
  }, []);

  const handleVoteClick = () => {
    const votingSection = document.getElementById("voting");
    if (votingSection) {
      votingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#0A0A0A] to-black px-4 sm:px-6 md:px-8">
      {/* Sparkle background */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute w-1 h-1 rounded-full z-0"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            backgroundColor: "#D1A000",
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Running Ribbon - Vote Call-to-Action */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] cursor-pointer"
        onClick={handleVoteClick}
      >
        <div className="relative h-8  bg-gradient-to-r from-[#0A0A0A] via-[#6fc7ea] to-[#0A0A0A] flex items-center justify-center overflow-hidden text-white">
          <motion.div
            className="flex items-center gap-4 whitespace-nowrap text-white font-bold text-xs sm:text-sm"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span>
              click for a chance to vote for your favourite founder 🤏
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {["💡", "🌍", "🚀", "✨", "🎯", "💫"].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl sm:text-7xl  opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 max-w-5xl mt-24 relative "
      >
        {/* Main Headline */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight font-tradegothic tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          BLACK FOUNDERS
          <br className="block" />
          NETWORK
        </motion.h1>

        {/* Underline */}
        <motion.div
          className="w-20 sm:w-32  h-0.5 sm:h-1 mx-auto mb-4 sm:mb-6 md:mb-8"
          style={{ backgroundColor: "#d0d1c9" }}
          initial={{ width: 0 }}
          animate={{ width: "auto" }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />

        {/* Year Text with Skew */}
        <motion.h2
          className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 font-tradegothic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <motion.span
            className="relative -skew-y-1 inline-block transform perspective-300"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <span
              className="block -skew-y-1 px-3 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-lg"
              style={{
                background: "linear-gradient(135deg, #6fc7ea 0%, #5ab8d8 100%)",
                color: "#0A0A0A",
                fontSize: "inherit",
              }}
            >
              2025 YEARBOOK
            </span>
          </motion.span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-14 px-4 sm:px-0 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#d0d1c9" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Celebrating Innovation, Community, and Growth.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#cohort"
          className="inline-block font-bold text-xs sm:text-sm md:text-base px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
          style={{
            background: "linear-gradient(to right, #6fc7ea, #5ab8d8)",
            color: "#0A0A0A",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enter the Yearbook ↓
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div
          className="w-5 h-8 sm:w-6 sm:h-10 border-1.5 sm:border-2 rounded-full flex justify-center"
          style={{ borderColor: "#6fc7ea" }}
        >
          <motion.div
            className="w-1 h-1.5 sm:w-1.5 sm:h-2 rounded-full mt-1.5 sm:mt-2"
            style={{ backgroundColor: "#6fc7ea" }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

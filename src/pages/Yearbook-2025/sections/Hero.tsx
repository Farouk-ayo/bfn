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

    // Ensure video plays if it exists
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((err) => console.log("Autoplay prevented:", err));
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black px-4 sm:px-8">
      {/* Optional Background Video */}
      {/* Uncomment below to use video - make sure to add your video file */}
      {/* <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/cohort-video.mp4" type="video/mp4" />
      </video> */}

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

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {["💡", "🌍", "🚀", "✨", "🎯", "💫"].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
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
        className="text-center z-10 max-w-5xl"
      >
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight font-maldives"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          BLACK FOUNDERS NETWORK
        </motion.h1>

        <motion.div
          className="w-20 sm:w-32 h-1 mx-auto mb-4 sm:mb-6 bg-gold"
          style={{ backgroundColor: "#D1A000" }}
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />

        <motion.h2
          className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 font-maldives"
          style={{ color: "#D1A000" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          2025 YEARBOOK
        </motion.h2>

        <motion.p
          className="text-base sm:text-xl md:text-2xl mb-8 sm:mb-12 px-4 sm:px-0 max-w-2xl mx-auto"
          style={{ color: "#F5F5F5" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Celebrating Innovation, Community, and Growth.
        </motion.p>

        <motion.a
          href="#cohort"
          className="inline-block font-bold text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          style={{
            background: "linear-gradient(to right, #D1A000, #c99200)",
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div
          className="w-6 h-10 border-2 rounded-full flex justify-center"
          style={{ borderColor: "#D1A000" }}
        >
          <motion.div
            className="w-1.5 h-2 rounded-full mt-2"
            style={{ backgroundColor: "#D1A000" }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

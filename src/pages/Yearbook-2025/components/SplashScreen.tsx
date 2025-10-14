import { motion } from "framer-motion";

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  return (
    <section className="flex w-full h-screen justify-center items-center bg-black">
      <div className="flex justify-start sm:justify-center items-center uppercase tracking-wider">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onAnimationComplete={finishLoading}
        >
          <div className="text-white font-bold text-2xl">
            <img src="/bfn-white.svg" alt="Logo" className="w-40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SplashScreen;

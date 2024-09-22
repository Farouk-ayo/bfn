// components/SplashScreen.js
import { motion } from "framer-motion";

// import Lottie from "react-lottie";
// import animationData from "../../datas/lottie.json";

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  return (
    <section className="flex w-full h-screen justify-center items-center">
      <div className="flex justify-start sm:justify-center items-center uppercase tracking-wider">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
          onAnimationComplete={finishLoading}
        >
          <div className="text-white font-bold text-2xl">
            <img
              src="https://via.placeholder.com/100x100?text=Logo"
              alt="Logo"
              className="w-12 h-12"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SplashScreen;

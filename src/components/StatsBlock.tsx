import React, { useEffect } from "react";
import { gsap } from "gsap";

const StatsBlock: React.FC = () => {
  useEffect(() => {
    // GSAP animation
    gsap.fromTo(
      ".stats-item",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <section className="w-full py-8 bg-gradient-to-r  text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary">
          Key Program Stats
        </h2>
        {/* Stat Block Container */}
        <div className="flex justify-center items-center space-x-8 text-4xl font-bold">
          <div className="flex items-center stats-item">
            <span className="text-green-200">08</span>
            <div className="border-l-2 border-red-400 h-12 mx-4"></div>
            <span className="text-green-200">29</span>
            <div className="border-l-2 border-red-400 h-12 mx-4"></div>
            <span className="text-green-200">13</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBlock;

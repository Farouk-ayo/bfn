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
    <section className="w-full py-12 bg-white" data-aos="zoom-in">
      <div className="max-w-4xl mx-auto text-center">
        {/* Stat Block Container */}
        <div className="flex justify-around items-center space-x-8 text-center text-gray-800">
          {/* Total Founders */}
          <div className="stats-item">
            <h3 className="text-5xl font-bold">24+</h3>
            <p className="text-lg text-gray-500 mt-2">
              Finalist Black Founders
            </p>
          </div>

          {/* BFN Accelerate */}
          <div className="stats-item">
            <h3 className="text-5xl font-bold">11</h3>
            <p className="text-lg text-gray-500 mt-2">BFN Accelerate Program</p>
          </div>

          {/* BFN Smart Start */}
          <div className="stats-item">
            <h3 className="text-5xl font-bold">13</h3>
            <p className="text-lg text-gray-500 mt-2">
              BFN Smart Start Program
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBlock;

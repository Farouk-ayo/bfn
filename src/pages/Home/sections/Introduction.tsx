import React, { useEffect } from "react";
import { gsap } from "gsap";
import StatsBlock from "../../../components/StatsBlock";

const Introduction: React.FC = () => {
  useEffect(() => {
    // GSAP animations for the section
    gsap.fromTo(
      ".intro-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
    gsap.fromTo(
      ".stats-block",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 1 }
    );
  }, []);

  return (
    <section className="w-full py-16 px-8 bg-light text-gray-800">
      {/* Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Introduction Text */}
        <div className="intro-text space-y-6">
          <h2 className="text-4xl font-bold text-primary">
            Welcome to the Bams Founders Accelerator Program
          </h2>
          <p className="text-lg">
            Our accelerator program is designed to empower early-stage
            entrepreneurs from emerging markets. Over the course of 12 weeks,
            we've mentored 24 founders, hosted 8 interactive workshops, and
            connected them with 12 experienced mentors.
          </p>
          <p className="text-lg">
            The goal of this knowledge product is to share the journey and
            insights from the program, helping future founders and investors
            understand the impact and potential of emerging startups. Expect
            valuable lessons, case studies, and success stories.
          </p>
        </div>

        <StatsBlock />
      </div>
    </section>
  );
};

export default Introduction;

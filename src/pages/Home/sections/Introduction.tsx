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
    <section
      className="w-full py-16 px-8 bg-lighter text-gray-800 "
      id="introduction"
    >
      {/* Container */}
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 sm:gap-12 "
        data-aos="fade-up"
      >
        {/* Introduction Text */}
        <div className="intro-text space-y-6">
          <p className="text-lg" data-aos="fade-up">
            The Black Founders Network (BFN) was founded in 2021 by Efosa Obano
            with a clear-cut mission, “To address the unique challenges faced by
            Black founders in Canada.” What started as an initiative to help
            Black founders in Canada became a propeller dynamic for Black
            founders to scale their business to the next level. Since its
            founding in 2021, BFN has generated $15 million, created thousands
            of jobs, and supported over 10,000 people through its programs and
            events.
          </p>
          <p className="text-lg" data-aos="fade-up">
            BFN employs a unique approach in its overall support for Black
            founders, focusing on personalized assistance tailored to the
            specific challenges each entrepreneur faces. Rather than following a
            rigid curriculum, BFN begins with a thorough needs assessment to
            understand where each founder stands in their entrepreneurial
            journey. This custom approach ensures that the resources, workshops,
            and guidance provided are directly aligned with the needs of the
            business. By offering targeted non-dilutive funding options, such as
            grants for hiring and product development, BFN helps founders move
            from concept to launch and supports them in scaling their operations
            effectively.
          </p>
        </div>
        <div className="flex flex-col  intro-text">
          <p className="text-lg order-2 sm:order-1" data-aos="fade-up">
            In mid 2024, BFN initiated two cohort-based programs, attracting
            applications from Black founders in Canada with innovative startup
            ideas and product solutions. Through a competitive selection
            process, 24 finalist Black founders made it to both programs – 11 in
            the BFN Accelerate program and 13 in the BFN Smart Start program.
            The 2024 programs kicked off in June with the Summer Showcase, an
            extended community event that spotlights the founders from both
            cohorts and their innovative solutions. From June through September,
            the founders were immersed in a series of dynamic development
            programs, with BFN providing comprehensive support in every aspect
            of building, funding, and scaling their startups to the next level
          </p>
          <StatsBlock />
        </div>
      </div>
    </section>
  );
};

export default Introduction;

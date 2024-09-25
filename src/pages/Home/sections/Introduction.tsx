import React from "react";
import StatsBlock from "../../../components/StatsBlock";

const Introduction: React.FC = () => {
  return (
    <section
      className="w-full py-16 px-8 bg-lighter text-gray-800 "
      id="introduction"
    >
      {/* Container */}
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-5 sm:gap-12 "
        data-aos="fade-up"
      >
        {/* Introduction Text */}
        <div className="intro-text space-y-6">
          <p className="text-lg" data-aos="fade-up">
            The Black Founders Network (BFN) was founded in 2021 by Efosa Obano
            with a clear mission: “To address the unique challenges faced by
            Black founders in Canada.” What started as an initiative to help
            Black founders in Canada became a propeller dynamic for Black
            founders to scale their businesses to the next level. Since its
            founding in 2021, BFN has generated $15 million, created thousands
            of jobs, and supported over 10,000 people through its programs and
            events.
          </p>
          <div
            className="bg-gray-100 border-l-4 border-secondary px-2 py-2 sm:px-6 sm:py-4 shadow-md rounded-md my-4"
            data-aos="fade-up"
          >
            <ul className="list-disc pl-6 space-y-2 text-left text-lg">
              <li>
                <strong>Personalized Support:</strong> BFN provides tailored
                assistance based on each founder's unique challenges and needs
              </li>
              <li>
                <strong>Needs Assessment:</strong> Each engagement begins with a
                comprehensive assessment to determine where the entrepreneur is
                in their journey.
              </li>
              <li>
                <strong>Custom Resources & Guidance:</strong> Workshops,
                resources, and guidance are aligned with the specific needs of
                the founder's business.
              </li>
              <li>
                <strong>Non-Dilutive Funding:</strong> BFN offers targeted
                non-dilutive funding options, including grants for hiring and
                product development.
              </li>
              <li>
                <strong>From Concept to Scale:</strong> Support extends from
                helping founders bring their ideas to life to effectively
                scaling their operations.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col  intro-text">
          <p className="text-lg " data-aos="fade-down">
            In mid-2024, BFN initiated two cohort-based programs, attracting
            applications from Black founders in Canada with innovative startup
            ideas and product solutions. Through a competitive selection
            process, 24 finalist Black founders made it to both programs – 11 in
            the BFN Accelerate program and 13 in the BFN Smart Start program.
          </p>
          <StatsBlock />
          <p className="text-lg text-black" data-aos="fade-up">
            The 2024 programs kicked off in June with the Summer Showcase, an
            extended community event that spotlights the founders from both
            cohorts and their innovative solutions. From June through September,
            the founders were immersed in a series of dynamic development
            programs. BFN provided comprehensive support in building, funding,
            and scaling their startups to the next level.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

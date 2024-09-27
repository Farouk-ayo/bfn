import React from "react";
import StatsBlock from "../../../components/StatsBlock";

const Introduction: React.FC = () => {
  return (
    <section
      className="w-full py-16  px-4 sm:px-8 bg-lighter text-gray-800"
      id="introduction"
    >
      {/* Container */}
      <div
        className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[3fr,2fr] gap-5 sm:gap-12"
        data-aos="fade-up"
      >
        {/* Introduction Text */}
        <div className="intro-text space-y-6 ">
          <p className="text-lg" data-aos="fade-up">
            The Black Founders Network (BFN) was founded in 2021 with a
            clear-cut mission:
            <span className="font-semibold  text-xl">
              “To address the unique challenges faced by Black founders in
              Canada.”
            </span>{" "}
            It has since grown to become a strong community for black founders
            and entrepreneurs across Canada. It is a slingshot—designed to
            propel founders further by providing the proper support at very
            early stages with non-dilutive funding crucial for converting ideas
            to concepts, concepts to viable MVPs, and MVPs to fully grown
            startups.
          </p>
          {/* Title */}
          <h3 className="text-xl font-semibold text-primary mb-4">
            BFN’s Unique Approach to Programming
          </h3>
          {/* Boxed Section with Icons */}
          <div
            className="bg-gray-100 border-l-4 border-secondary px-2 py-6 sm:px-8 sm:py-8 shadow-md rounded-md my-4 flex flex-col space-y-4"
            data-aos="fade-up"
          >
            <ul className="space-y-4 text-left text-base sm:text-lg">
              <li className="flex items-start space-x-4">
                <p>
                  <strong className="text-primary">Needs Assessment: </strong>
                  Each engagement begins with a comprehensive assessment to
                  determine where the entrepreneur is in their journey
                </p>
              </li>
              <li className="flex items-start space-x-4">
                <p>
                  <strong className="text-primary">
                    Personalized Support:{" "}
                  </strong>
                  BFN provides tailored assistance based on each founder's
                  unique challenges and needs. Workshops, resources, and
                  guidance are aligned with the specific needs of the founder's
                  business.
                </p>
              </li>
              <li className="flex items-start space-x-4">
                <p>
                  <strong className="text-primary">
                    Non-Dilutive Funding:{" "}
                  </strong>
                  BFN offers targeted non-dilutive funding options, including
                  grants for hiring and product development.
                </p>
              </li>
              <li className="flex items-start space-x-4">
                <p>
                  <strong className="text-primary">
                    From Concept to Scale:{" "}
                  </strong>
                  Support extends from helping founders bring their ideas to
                  life to effectively scaling their operations.
                </p>
              </li>
              <li className="flex items-start space-x-4">
                <p>
                  <strong className="text-primary">Networking:</strong>
                  BFN connects founders within the Black community to the
                  broader entrepreneurial ecosystem, offering access to events,
                  pitch opportunities, and potential investors to help them
                  grow.
                </p>
              </li>
              <li className="flex items-start space-x-4">
                <p>
                  <strong className="text-primary">
                    One-on-One Mentorship:{" "}
                  </strong>
                  One-on-one mentorship from BFN’s Experts in Residence who
                  provide personalized guidance tailored to each founder’s
                  needs. These experts bring practical experience and
                  connections, helping founders navigate challenges and develop
                  their businesses and personal skills.
                </p>
              </li>
              <li className="flex items-start space-x-4">
                <p>
                  <strong className="text-primary">
                    Group-based Skill Building Sessions:{" "}
                  </strong>{" "}
                  Group sessions are also offered all through the length of the
                  programs that focus on specific skills and topics, from
                  storytelling and pitching to wellness and public speaking.
                  These workshops equip founders with the tools and knowledge to
                  succeed in their entrepreneurial journey
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* Side Column with Images */}
        <div className="flex flex-col space-y-6">
          <p className="text-lg" data-aos="fade-down">
            In mid-2024, BFN kicked off its two cohort-based programs, BFN
            Accelerate program and BFN Smart Start program, attracting
            applications from Black founders with innovative startup ideas and
            product solutions across Canada. Through a competitive selection
            process, 24 finalist Black founders made it to both programs – 11 in
            the BFN Accelerate program and 13 in the BFN Smart Start program.
          </p>
          <StatsBlock />
          <p className="text-lg" data-aos="fade-up">
            The 2024 programs kicked off in June with the Summer Showcase, an
            extended community event that spotlights the founders from both
            cohorts and their innovative solutions. From June through September,
            the founders were immersed in a series of dynamic development
            programs, with BFN providing comprehensive support in every aspect
            of building, funding, and scaling their startups to the next level.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

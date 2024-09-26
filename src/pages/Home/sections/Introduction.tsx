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
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[3fr,2fr] gap-5 sm:gap-12 "
        data-aos="fade-up"
      >
        {/* Introduction Text */}
        <div className="intro-text space-y-6">
          <p className="text-lg" data-aos="fade-up">
            The Black Founders Network (BFN) was founded in 2021 with a
            clear-cut mission: “To address the unique challenges faced by Black
            founders in Canada.” It has since grown to become a strong community
            for black founders and entrepreneurs across Canada. It is a
            slingshot—designed to propel founders further by providing the
            proper support at very early stages with non-dilutive funding
            crucial for converting ideas to concepts, concepts to viable MVPs,
            and MVPs to fully grown startups.
          </p>
          <div
            className="bg-gray-100 border-l-4 border-secondary px-2 py-2 sm:px-6 sm:py-4 shadow-md rounded-md my-4"
            data-aos="fade-up"
          >
            <ul className="sm:list-disc sm:pl-6 space-y-2 text-left text-base sm:text-lg">
              <li>
                <strong>Needs Assessment:</strong> Each engagement begins with a
                comprehensive assessment to determine where the entrepreneur is
                in their journey.
              </li>
              <li>
                <strong>Personalized Support:</strong> BFN provides tailored
                assistance based on each founder's unique challenges and needs.
                Workshops, resources, and guidance are aligned with the specific
                needs of the founder's business.
              </li>
              <li>
                <strong>Non-Dilutive Funding: </strong> BFN offers targeted
                non-dilutive funding options, including grants for hiring and
                product development.
              </li>
              <li>
                <strong>From Concept to Scale: </strong>Support extends from
                helping founders bring their ideas to life to effectively
                scaling their operations.
              </li>
              <li>
                <strong>Networking:</strong> BFN connects founders within the
                Black community to the broader entrepreneurial ecosystem,
                offering access to events, pitch opportunities, and potential
                investors to help them grow.
              </li>
              <li>
                <strong>One-on-One Mentorship:</strong>One-on-one mentorship
                from BFN’s Experts in Residence who provide personalized
                guidance tailored to each founder’s needs. These experts bring
                practical experience and connections, helping founders navigate
                challenges and develop their businesses and personal skills.
              </li>
              <li>
                <strong>Group-based Skill Building Sessions: </strong>Group
                sessions are also offered all through the length of the programs
                that focus on specific skills and topics, from storytelling and
                pitching to wellness and public speaking. These workshops equip
                founders with the tools and knowledge to succeed in their
                entrepreneurial journey.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col  intro-text">
          <p className="text-lg " data-aos="fade-down">
            In mid-2024, BFN kicked off its two cohort-based programs, the BFN
            Accelerate program and 13 in the BFN Smart Start program, attracting
            applications from Black founders with innovative startup ideas and
            product solutions across Canada. Through a competitive selection
            process, 24 finalist Black founders made it to both programs – 11 in
            the BFN Accelerate program and 13 in the BFN Smart Start program.
          </p>
          <StatsBlock />
          <p className="text-lg text-black" data-aos="fade-up">
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

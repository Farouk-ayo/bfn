import React, { useState } from "react";
import {
  FaChalkboardTeacher,
  FaChartLine,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";
import Modal from "../../../components/Modal";

const highlights = [
  {
    title: "Summer Showcase",
    date: "6 June, 2024",
    description:
      "The BFN 2024 program started with unveiling the founders from both cohorts. The Summer Showcase was a unique way to connect BFN’s community of investors and entrepreneurs with the founders. The attendees witnessed the amazing lineup of innovative ideas and products from this year's cohort as well as learn the stories behind the innovations.",
    icon: <FaChartLine className="text-2xl text-green-500" />,
    detailContent: [
      {
        title: "Summer Showcase",
        description:
          "Founders presented innovative ideas, connecting with investors and the BFN community.",
      },
    ],
  },
  {
    title: "Collision Conference",
    date: "17-20 June, 2024",
    description:
      "The next exciting phase of the program was connecting the founders to a global community of innovators. BFN sponsored the founders to attend Collision Conference, the fastest growing tech event in North America. With strengthened collaborations across similar ecosystems at the conference, the Black Innovation Zone spotlighted some of the amazing Black founders in North America, including a few founders from BFN’s cohorts also pitching at the event.",
    icon: <FaHandshake className="text-2xl text-blue-500" />,
    detailContent: [
      {
        title: "Collision Conference",
        description:
          "Founders pitched ideas and connected with a global network of innovators.",
      },
    ],
  },
  {
    title: "Startupfest",
    date: "10-12 July, 2024",
    description:
      "More opportunities for the founders to secure grants and funding as BFN sponsored the founders to attend and pitch at Startupfest in Montreal. Three founders from the BFN Accelerate Cohort made it to the final stage with up to $100,000 winning prize.",
    icon: <FaLightbulb className="text-2xl text-yellow-500" />,
    detailContent: [
      {
        title: "Startupfest",
        description:
          "Founders pitched for a chance to win funding. Three BFN founders reached the final stage.",
      },
    ],
  },
  {
    title: "Sessions on Communication",
    description:
      "These sessions helped the founders master the art of communicating with investors, customers, and partners. Will Greenblatt, CEO at OutLoud Speakers School led a masterclass session with the founders, guiding them to overcome self-doubt and become powerful storytellers.",
    icon: <FaChalkboardTeacher className="text-2xl text-blue-500" />,
    detailContent: [
      {
        title: "Sessions on Communication",
        description:
          "Sessions helped founders communicate with investors, customers, and partners more effectively.",
      },
    ],
  },
  {
    title: "Legal Education Series",
    description:
      "The legal education workshops were organized by BFN’s in-house legal expert, Angela Scarlett. Angela’s focus was ensuring that the founders avoided common pitfalls in legal operations. Key sessions with Fasken, a global leading law firm, ensured that the founders were equipped with foundational knowledge on corporate law among other aspects of being a law-abiding founder.",
    icon: <FaChalkboardTeacher className="text-2xl text-red-500" />,
    detailContent: [
      {
        title: "Legal Education Series",
        description:
          "Workshops were focused on avoiding legal pitfalls, ensuring founders operate within the law.",
      },
    ],
  },
  {
    title: "Sessions on Marketing",
    description:
      "The founders gained actionable insights from organized sessions with marketing experts. Tosin Adeniyi, brand consultant and public speaker, held informative sessions with the founders on navigating branding and marketing at the startup phase.",
    icon: <FaChalkboardTeacher className="text-2xl text-purple-500" />,
    detailContent: [
      {
        title: "Sessions on Marketing",
        description:
          "Sessions focused on founders' physical and mental well-being through exercises and sports.",
      },
    ],
  },
  {
    title: "Wellness and Exercise Sessions",
    description:
      "As part of a new initiative to cater to the overall well-being of Black founders, BFN introduced the Wellness Pillar. Sports and workout sessions were organized to support the founders through the program.",
    icon: <FaChalkboardTeacher className="text-2xl text-purple-500" />,
    detailContent: [
      {
        title: "Wellness and Exercise Sessions",
        description:
          "Sessions focused on founders' physical and mental well-being through exercises and sports.",
      },
    ],
  },
  {
    title: "Smart Start Internal Pitch",
    description:
      "After four months of intensive support from BFN, the 2024 program came to an end, starting with the Smart Start Cohort. The early-stage founders, over powered by confidence and growth took over the stage to showcase their innovations.",
    icon: <FaChartLine className="text-2xl text-green-500" />,
    detailContent: [
      {
        title: "Smart Start Internal Pitch",
        description:
          "Early-stage founders displayed their innovations, powered by confidence and growth.",
      },
    ],
  },
  {
    title: "BFN Demo Day",
    date: "27 September, 2024",
    description:
      "The Accelerate Cohort followed shortly after with BFN Demo Day. The extended BFN community gathered to celebrate 3 years of BFN and witness the founders compete in a pitch contest for $50,000 non-dilutive funding.",
    icon: <FaChartLine className="text-2xl text-yellow-500" />,
    detailContent: [
      {
        title: "BFN Demo Day",
        description:
          "Founders from the Accelerate Cohort competed for $50,000 non-dilutive funding.",
      },
    ],
  },
];

const ProgramHighlights: React.FC = () => {
  const [selectedHighlight, setSelectedHighlight] = useState<{
    title: string;
    detailContent: Array<{ title: string; description: string }>;
  } | null>(null);

  const openModal = (highlight: {
    title: string;
    detailContent: Array<{ title: string; description: string }>;
  }) => {
    setSelectedHighlight(highlight);
  };

  const closeModal = () => {
    setSelectedHighlight(null);
  };

  return (
    <section
      className="py-16 bg-light text-primary overflow-x-hidden"
      id="program-highlights"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          Program Highlights & Workshops
        </h2>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical Line */}
          <div
            className="absolute w-1 bg-gray-300 left-1/2 transform -translate-x-1/2 transition-all duration-300"
            style={{ height: "100%" }} // Dynamic height based on scroll
          ></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`flex flex-col items-center  ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0 p-4 bg-white rounded-full shadow-lg">
                  {highlight.icon}
                </div>

                {/* Content */}
                <div className="relative lg:w-1/2 w-full mt-4 lg:mt-0 p-6 bg-white rounded-lg shadow-lg flex flex-col ">
                  <h3 className="text-xl font-semibold mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mb-2">
                    {highlight.date}
                  </p>
                  <p className="text-gray-600 mb-4">{highlight.description}</p>

                  {/* Click to open modal */}
                  <button
                    onClick={() => openModal(highlight)}
                    className="text-secondary hover:underline focus:outline-none"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedHighlight && (
          <Modal
            isOpen={!!selectedHighlight}
            onClose={closeModal}
            title={selectedHighlight.title}
            content={selectedHighlight.detailContent}
          />
        )}
      </div>
    </section>
  );
};

export default ProgramHighlights;

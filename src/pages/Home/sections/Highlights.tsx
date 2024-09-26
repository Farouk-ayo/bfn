import React, { useState } from "react";
import {
  FaLightbulb,
  FaUsers,
  FaGlobe,
  FaRocket,
  FaComments,
  FaBalanceScale,
  FaBullhorn,
  FaHeartbeat,
  FaTrophy,
} from "react-icons/fa";
import Modal from "../../../components/Modal";

const highlights = [
  {
    title: "Summer Showcase",
    date: "6 June, 2024",
    description:
      "The BFN 2024 program started with unveiling the founders from both cohorts. The Summer Showcase was a unique way to connect BFN’s community of investors and entrepreneurs with the founders. The attendees witnessed the amazing lineup of innovative ideas and products from this year's cohort as well as learn the stories behind the innovations.",
    icon: <FaUsers size={24} color="#1E90FF " />,
    detailContent: {
      title: "Summer Showcase",
      media: [
        {
          type: "image",
          src: "/images/summershowcase-p-1.jpg",
          alt: "summer showcase image 1",
        },
        {
          type: "image",
          src: "/images/summershowcase-p-2.jpg",
          alt: "summer showcase image 2",
        },
        {
          type: "image",
          src: "/images/summershowcase-p-3.jpg",
          alt: "summer showcase image 3",
        },
        {
          type: "image",
          src: "/images/summershowcase-p-4.jpg",
          alt: "summer showcase image 4",
        },
        {
          type: "image",
          src: "/images/summershowcase-p-5.jpg",
          alt: "summer showcase image 5",
        },
        {
          type: "image",
          src: "/images/summershowcase-p-6.jpg",
          alt: "summer showcase image 6",
        },
        {
          type: "image",
          src: "/images/summershowcase-p-7.jpg",
          alt: "summer showcase image 7",
        },
        {
          type: "image",
          src: "/images/summershowcase-p-8.jpg",
          alt: "summer showcase image 8",
        },
        {
          type: "image",
          src: "/images/summershowcase-p-9.jpg",
          alt: "summer showcase image 9",
        },
        {
          type: "image",
          src: "/images/summershowcase-p-10.jpg",
          alt: "summer showcase image 10",
        },
        {
          type: "image",
          src: "/images/summershowcase-p-11.jpg",
          alt: "summer showcase image 11",
        },
        {
          type: "image",
          src: "/images/summershowcase-p-12.jpg",
          alt: "summer showcase image 12",
        },
        {
          type: "image",
          src: "/images/summershowcase-p-13.jpg",
          alt: "summer showcase image 13",
        },
        {
          type: "image",
          src: "/images/summershowcase-p-14.jpg",
          alt: "summer showcase image 14",
        },
      ],
    },
  },
  {
    title: "Collision Conference",
    date: "17-20 June, 2024",
    description:
      "The next exciting phase of the program was connecting the founders to a global community of innovators. BFN sponsored the founders to attend Collision Conference, the fastest growing tech event in North America. With strengthened collaborations across similar ecosystems at the conference, the Black Innovation Zone spotlighted some of the amazing Black founders in North America, including a few founders from BFN’s cohorts also pitching at the event.",
    icon: <FaGlobe size={24} color="#32CD32" />,
    detailContent: {
      title: "Collision Conference",
      media: [
        {
          type: "video",
          src: "/images/collision-conference-v-1.MOV",
          alt: "collision conference Video 1",
        },
        {
          type: "image",
          src: "/images/collision-conference-p-1.jpg",
          alt: "collision conference Image 1",
        },
        {
          type: "image",
          src: "/images/collision-conference-p-2.jpg",
          alt: "collision conference image 2",
        },
        {
          type: "image",
          src: "/images/collision-conference-p-3.jpg",
          alt: "collision conference image 3",
        },
        {
          type: "image",
          src: "/images/collision-conference-p-4.jpg",
          alt: "collision conference image 4",
        },
        {
          type: "image",
          src: "/images/collision-conference-p-5.jpg",
          alt: "collision conference image 5",
        },
        {
          type: "image",
          src: "/images/collision-conference-p-6.jpg",
          alt: "collision conference image 6",
        },
        {
          type: "image",
          src: "/images/collision-conference-p-7.jpg",
          alt: "collision conference image 7",
        },
      ],
    },
  },
  {
    title: "Startupfest",
    date: "10-12 July, 2024",
    description:
      "More opportunities for the founders to secure grants and funding as BFN sponsored the founders to attend and pitch at Startupfest in Montreal. Three founders from the BFN Accelerate Cohort made it to the final stage with up to $100,000 winning prize.",
    icon: <FaRocket size={24} color="#FFA500" />,
    detailContent: {
      title: "Startupfest",
      media: [
        {
          type: "image",
          src: "/images/pitching-startupfest-p-1.jpg",
          alt: "startupfest Image 1",
        },
        {
          type: "image",
          src: "/images/pitching-startupfest-p-2.jpg",
          alt: "startupfest Image 2",
        },
        {
          type: "video",
          src: "/images/pitching-startupfest-v-1.MOV",
          alt: "startupfest Image 3",
        },
        {
          type: "video",
          src: "/images/pitching-startupfest-v-2.MOV",
          alt: "startupfest Image 4",
        },
        {
          type: "image",
          src: "/images/pitching-startupfest-p-3.jpg",
          alt: "startupfest Image 5",
        },
        {
          type: "image",
          src: "/images/pitching-startupfest-p-4.jpg",
          alt: "startupfest Image 4",
        },
        {
          type: "image",
          src: "/images/pitching-startupfest-p-5.jpg",
          alt: "startupfest Image 5",
        },
        {
          type: "image",
          src: "/images/pitching-startupfest-p-6.jpg",
          alt: "startupfest Image 6",
        },
      ],
    },
  },
  {
    title: "Sessions on Communication",
    description:
      "These sessions helped the founders master the art of communicating with investors, customers, and partners. Will Greenblatt, CEO at OutLoud Speakers School led a masterclass session with the founders, guiding them to overcome self-doubt and become powerful storytellers.",
    icon: <FaComments size={24} color="#8A2BE2" />,
    detailContent: {
      title: "Sessions on Communication",
      media: [
        {
          type: "video",
          src: "/images/session-communication-v-1.mp4",
          alt: "communication session Image 1",
        },
        {
          type: "video",
          src: "/images/session-communication-v-2.MOV",
          alt: "communication session Image 2",
        },
        {
          type: "image",
          src: "/images/session-communication-v-3.jpg",
          alt: "communication session Video 3",
        },
      ],
    },
  },
  {
    title: "Legal Education Series",
    description:
      "The legal education workshops were organized by BFN’s in-house legal expert, Angela Scarlett. Angela’s focus was ensuring that the founders avoided common pitfalls in legal operations. Key sessions with Fasken, a global leading law firm, ensured that the founders were equipped with foundational knowledge on corporate law among other aspects of being a law-abiding founder.",
    icon: <FaBalanceScale size={24} color="#696969" />,
    detailContent: {
      title: "Legal Education Series",
      media: [
        {
          type: "image",
          src: "/images/legal-p-1.jpg",
          alt: "legal Image 1",
        },
        {
          type: "image",
          src: "/images/legal-p-2.jpg",
          alt: "legal Image 2",
        },
        {
          type: "video",
          src: "/images/legal-v-1.MOV",
          alt: "legal Image 3",
        },
        {
          type: "image",
          src: "/images/legal-p-3.jpg",
          alt: "legal Image 3",
        },
        {
          type: "image",
          src: "/images/legal-p-4.jpg",
          alt: "legal Image 4",
        },
        {
          type: "image",
          src: "/images/legal-p-5.jpg",
          alt: "legal Image 5",
        },
        {
          type: "image",
          src: "/images/legal-p-6.jpg",
          alt: "legal Image 6",
        },
      ],
    },
  },
  {
    title: "Sessions on Marketing",
    description:
      "The founders gained actionable insights from organized sessions with marketing experts. Tosin Adeniyi, brand consultant and public speaker, held informative sessions with the founders on navigating branding and marketing at the startup phase.",
    icon: <FaBullhorn size={24} color="#FF4500" />,
    detailContent: {
      title: "Sessions on Marketing",
      media: [
        {
          type: "image",
          src: "/images/session-marketing-p-1.jpg",
          alt: "session marketing Image 1",
        },
        {
          type: "image",
          src: "/images/session-marketing-p-2.jpg",
          alt: "session marketing Image 2",
        },
        {
          type: "image",
          src: "/images/session-marketing-p-3.jpg",
          alt: "session marketing Image 3",
        },
        {
          type: "image",
          src: "/images/session-marketing-p-4.jpg",
          alt: "session marketing Image 3",
        },
        {
          type: "image",
          src: "/images/session-marketing-p-5.jpg",
          alt: "session marketing Image 3",
        },
        {
          type: "image",
          src: "/images/session-marketing-p-6.jpg",
          alt: "session marketing Image 3",
        },
      ],
    },
  },
  {
    title: "Wellness and Exercise Sessions",
    description:
      "As part of a new initiative to cater to the overall well-being of Black founders, BFN introduced the Wellness Pillar. Sports and workout sessions were organized to support the founders through the program.",
    icon: <FaHeartbeat size={24} color="#20B2AA" />,
    detailContent: {
      title: "Wellness and Exercise Sessions",
      media: [
        {
          type: "video",
          src: "/images/wellness-session-v-1.mp4",
          alt: "wellness session Image 1",
        },
      ],
    },
  },
  {
    title: "Smart Start Internal Pitch",
    description:
      "After four months of intensive support from BFN, the 2024 program came to an end, starting with the Smart Start Cohort. The early-stage founders demonstrated confidence and growth as they pitched their innovations",
    icon: <FaLightbulb size={24} color="#FFD700" />,
    detailContent: {
      title: "Smart Start Internal Pitch",
      media: [
        {
          type: "image",
          src: "/images/coaching-workshop-p-1.jpg",
          alt: "coaching Image 1",
        },
        {
          type: "image",
          src: "/images/coaching-workshop-p-2.jpg",
          alt: "coaching Image 2",
        },
        {
          type: "video",
          src: "/images/coaching-workshop-v-1.MOV",
          alt: "coaching Image 1",
        },
      ],
    },
  },
  {
    title: "BFN Demo Day",
    date: "27 September, 2024",
    description:
      "The Accelerate Cohort followed shortly after with BFN Demo Day. The extended BFN community gathered to celebrate 3 years of BFN and witness the founders compete in a pitch contest for $50,000 non-dilutive funding.",
    icon: <FaTrophy size={24} color="#FFD700" />,
    detailContent: {
      title: "BFN Demo Day",
      media: [],
    },
  },
];

const ProgramHighlights: React.FC = () => {
  const [selectedHighlight, setSelectedHighlight] = useState<{
    title: string;
    detailContent: {
      title: string;
      media: Array<{ type: string; src: string; alt: string }>;
    };
  } | null>(null);

  const openModal = (highlight: {
    title: string;
    detailContent: {
      title: string;
      media: Array<{ type: string; src: string; alt: string }>;
    };
  }) => {
    setSelectedHighlight(highlight);
  };

  const closeModal = () => {
    setSelectedHighlight(null);
  };

  return (
    <section
      className="timeline-section py-16 bg-light text-primary overflow-x-hidden"
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
                    Explore moments
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
            detailContent={selectedHighlight.detailContent}
          />
        )}
      </div>
    </section>
  );
};

export default ProgramHighlights;

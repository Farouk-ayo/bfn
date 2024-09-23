import React, { useEffect, useState } from "react";
import {
  FaChalkboardTeacher,
  FaChartLine,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";
import Modal from "../../../components/Modal";

const highlights = [
  {
    title: "Core Business Skills",
    description:
      "The founders received hands-on guidance through workshops focused on building essential business foundations",
    detailContent: [
      {
        title: "Tax Planning & Compliance for Startups",
        description:
          "This workshop provided a deep dive into tax regulations and compliance, helping founders avoid common pitfalls and streamline their financial operations.",
      },
      {
        title: "Bookkeeping Core Workshop",
        description:
          "Focused on financial fundamentals, this session covered everything from managing startup finances to setting up effective bookkeeping practices for long-term growth.",
      },
      {
        title: "Business Model & Monetization",
        description:
          "Participating founders learned strategies to refine and optimize their business models while exploring innovative ways to generate revenue.",
      },
    ],
    icon: <FaLightbulb className="text-yellow-500 text-2xl" />,
  },
  {
    title: "Growth & Strategy",
    description:
      "This section of the program shifted towards growth hacking and scaling strategies, vital for startups looking to expand and capture market share",
    detailContent: [
      {
        title: "User Acquisition and Growth Strategy",
        description:
          "This session explored tactics for driving customer growth, with a particular emphasis on digital channels, customer funnels, and data-driven decision-making.",
      },
      {
        title: "Fundraising 101",
        description:
          "Startups were given a primer on the basics of fundraising, including how to pitch to investors, understand venture capital, and create a compelling financial narrative.",
      },
      {
        title: "Dabbling in Paid Social",
        description:
          "This workshop introduced participants to the fundamentals of paid social media marketing, equipping them with strategies to acquire new users and promote their products or services effectively.",
      },
      {
        title: "How to Strategically Enter and Excel in the US Market",
        description:
          "A critical session for startups looking to expand beyond borders, with expert advice on navigating the complexities of the US business landscape.",
      },
      {
        title: "PR Considerations",
        description:
          "The founders gained valuable insights into public relations strategies, learning how to craft a media-friendly narrative and manage their brand’s public image.",
      },
    ],
    icon: <FaChartLine className="text-green-500 text-2xl" />,
  },
  {
    title: "Operations & Compliance",
    description:
      "This section addressed logistics and regulatory hurdles for startups especially when scaling across borders",
    detailContent: [
      {
        title: "Customs and Logistics",
        description:
          "Founders learned the ins and outs of navigating customs requirements, optimizing their supply chains, and ensuring smooth cross-border operations to avoid costly delays.",
      },
      {
        title:
          "Important Cross-Border Regulatory Issues Every Founder Should Ponder",
        description:
          "This session emphasized the need to understand differing regulatory environments, from data privacy laws to import/export restrictions, and helped founders prepare for potential obstacles as they scale internationally.",
      },
    ],
    icon: <FaHandshake className="text-blue-500 text-2xl" />,
  },
  {
    title: "Storytelling & Communication",
    description:
      "Focused on helping founders master the art of communicating with investors, customers, and partners",
    detailContent: [
      {
        title: "Confident Communication, The Art of Engaging Your Audience",
        description:
          "This session taught participants how to use voice and body language to communicate effectively, ensuring that their message resonates with any audience.",
      },
      {
        title: "Storytelling & Pitch Decks",
        description:
          "Founders honed their storytelling skills, learning how to build a narrative around their brand that captures attention and wins over investors.",
      },
    ],
    icon: <FaChalkboardTeacher className="text-purple-500 text-2xl" />,
  },
  {
    title: "Special Experiences",
    description:
      "Orchestrated exclusive experiences that helped founders relax and connect with and beyond the BFN community",
    detailContent: [
      {
        title: "Collision Conference",
        description:
          "As part of the program, the founders were sponsored to attend Collision, the largest tech conference in Canada. This gave them direct access to some of the brightest minds in tech and the opportunity to showcase their startups to a global audience.",
      },
      {
        title: "One-on-Ones with Experts-in-Residence",
        description:
          "Invaluable personalized mentorship sessions were held with industry experts, providing tailored advice on everything from market entry strategies to legal compliance.",
      },
      {
        title: "Wellness Events and Hangouts",
        description:
          "Recognizing the importance of founder wellbeing, the program also included wellness events and informal hangouts, offering participants a chance to relax, recharge, and foster community bonds.",
      },
      {
        title: "Coworking Sessions",
        description:
          "These collaborative workspaces allowed startups to connect, share ideas, and work together in a supportive environment.",
      },
    ],
    icon: <FaChartLine className="text-red-500 text-2xl" />,
  },
];

const ProgramHighlights: React.FC = () => {
  const [selectedHighlight, setSelectedHighlight] = useState<{
    title: string;
    detailContent: Array<{ title: string; description: string }>;
  } | null>(null);
  const [lineHeight, setLineHeight] = useState("0%");
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      console.log(document.documentElement.scrollHeight, window);
      const scrolled = (scrollTop / docHeight) * 100;
      setLineHeight(`${Math.min(scrolled, 100)}%`);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <h2 className="text-4xl font-bold text-center mb-12">
          Program Highlights & Workshops
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* line height  */}
          <div
            className="absolute w-1 bg-primary2 left-1/2 transform -translate-x-1/2 transition-all duration-300"
            style={{ height: lineHeight }} // Dynamic height based on scroll
          ></div>
          {/* Timeline events */}
          <div className="space-y-12">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0 p-4 bg-white rounded-full shadow-lg">
                  {highlight.icon}
                </div>

                {/* Content */}
                <div className="relative lg:w-1/2 w-full mt-4 lg:mt-0 p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {highlight.title}
                  </h3>
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

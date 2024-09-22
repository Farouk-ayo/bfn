import React from "react";
import { FaChalkboardTeacher, FaChartLine, FaLightbulb, FaHandshake } from "react-icons/fa"; // Icons for workshops and milestones

const highlights = [
  {
    date: "Week 1",
    title: "Orientation & Program Kickoff",
    description: "Introduced the program's mission and objectives, and set expectations.",
    icon: <FaLightbulb className="text-yellow-500 text-2xl" />,
  },
  {
    date: "Week 2",
    title: "Fundraising 101 Workshop",
    description: "An in-depth workshop on securing seed and Series A funding.",
    icon: <FaChartLine className="text-green-500 text-2xl" />,
    stat: "Raised $1.5M in early-stage funding by the cohort.",
  },
  {
    date: "Week 4",
    title: "Mentorship Program",
    description: "Assigned mentors to each founder based on their business needs and sectors.",
    icon: <FaHandshake className="text-blue-500 text-2xl" />,
    stat: "12 industry experts mentored 24 founders.",
  },
  {
    date: "Week 6",
    title: "Product-Market Fit Workshop",
    description: "Focused on strategies for identifying and optimizing product-market fit.",
    icon: <FaChalkboardTeacher className="text-purple-500 text-2xl" />,
    stat: "8 founders pivoted to new market strategies.",
  },
  {
    date: "Final Week",
    title: "Demo Day & Graduation",
    description: "Showcased the results of the accelerator program and presented startups to potential investors.",
    icon: <FaChartLine className="text-red-500 text-2xl" />,
    stat: "$3M raised by startups on Demo Day.",
  },
];

const ProgramHighlights: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Program Highlights & Workshops</h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute w-1 bg-blue-300 h-full left-1/2 transform -translate-x-1/2"></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0 p-4 bg-white rounded-full shadow-lg">
                  {highlight.icon}
                </div>

                {/* Content */}
                <div className="relative lg:w-1/2 w-full mt-4 lg:mt-0 p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 mb-4">{highlight.description}</p>
                  {highlight.stat && <p className="text-sm text-blue-600 font-semibold">{highlight.stat}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Call-to-Action button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Explore Workshops
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;

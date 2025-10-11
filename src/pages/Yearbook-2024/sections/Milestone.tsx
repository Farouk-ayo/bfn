import {
  FaCheckCircle,
  FaUsers,
  FaHandHoldingUsd,
  FaTrophy,
  FaHandshake,
} from "react-icons/fa";

const milestones = [
  {
    program: "BFN Smart Start Program 2024",
    milestones: [
      {
        icon: <FaHandHoldingUsd />,
        text: "$40,000 non-dilutive funding disbursed to startups",
      },
      { icon: <FaCheckCircle />, text: "2 market-ready startups" },
      { icon: <FaUsers />, text: "5 startups with new team members" },
      {
        icon: <FaHandshake />,
        text: "1 strategic business partnership formed",
      },
      { icon: <FaCheckCircle />, text: "4 market surveys completed" },
    ],
  },
  {
    program: "BFN Accelerator Program 2024",
    milestones: [
      {
        icon: <FaHandHoldingUsd />,
        text: "Over $100,000 in non-dilutive funding disbursed to startups",
      },
      { icon: <FaCheckCircle />, text: "2 launched product campaigns" },
      { icon: <FaUsers />, text: "4 startups with new team members" },
      { icon: <FaHandshake />, text: "1 secured business investment" },
      { icon: <FaTrophy />, text: "4 entrepreneurial awards" },
      {
        icon: <FaHandshake />,
        text: "10 strategic business partnerships formed",
      },
      {
        icon: <FaHandHoldingUsd />,
        text: "$100,000+ secured through external pitch events",
      },
    ],
  },
];

const Milestone = () => {
  return (
    <section className="py-16 text-primary">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          2024 Milestones
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {milestones.map((program, index) => (
            <div
              key={index}
              className="bg-[#f5f5f5e6] p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4">{program.program}</h3>

              <ul className="space-y-4">
                {program.milestones.map((milestone, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-secondary mr-3">
                      {milestone.icon}
                    </span>
                    <p className="text-gray-700">{milestone.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestone;

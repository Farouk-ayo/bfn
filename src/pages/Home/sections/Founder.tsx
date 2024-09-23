import React, { useState } from "react";
import {
  FaBriefcase,
  FaBolt,
  FaSchool,
  FaBrush,
  FaBalanceScale,
  FaHeartbeat,
  FaUsers,
  FaLaptopCode,
  FaGlobe,
} from "react-icons/fa"; // Icons for sectors
import { founders } from "../../../data";

// Function to get icon based on business sector
const getSectorIcon = (sector: string) => {
  switch (sector) {
    case "ev":
      return <FaBolt className="text-primary2" size={20} />;
    case "education":
      return <FaSchool className="text-primary2" size={20} />;
    case "design":
      return <FaBrush className="text-primary2" size={20} />;
    case "financial":
      return <FaBalanceScale className="text-primary2" size={20} />;
    case "beauty":
      return <FaUsers className="text-primary2" size={20} />;
    case "healthcare":
      return <FaHeartbeat className="text-primary2" size={20} />;
    case "data":
      return <FaLaptopCode className="text-primary2" size={20} />;
    case "mentalHealth":
      return <FaGlobe className="text-primary2" size={20} />;
    case "legalTech":
      return <FaBalanceScale className="text-primary2" size={20} />;
    case "logistics":
      return <FaBriefcase className="text-primary2" size={20} />;
    default:
      return <FaBriefcase className="text-primary2" size={20} />;
  }
};

const Founder: React.FC = () => {
  // State to control how many founders are shown
  const [showAll, setShowAll] = useState(false);

  // Function to toggle "See All"
  const toggleShowAll = () => setShowAll(!showAll);

  // Only show 8 founders if "See All" is not clicked
  const foundersToShow = showAll ? founders : founders.slice(0, 8);

  return (
    <section className="py-16 bg-light text-gray-900" id="founder">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-primary text-center mb-16">
          Founder Spotlights
        </h2>

        {/* Grid layout for founders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {foundersToShow.map((founder, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 px-6 py-8"
              data-aos="fade-up"
            >
              {/* Front of the card */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={founder.imageUrl}
                  alt={founder.name}
                  className="w-40 h-40 rounded-full mb-6 object-cover border-4 border-light"
                />
                <h3 className="text-xl font-bold mb-2">{founder.name}</h3>
                <p className="text-base font-medium text-gray-700 mb-3">
                  {founder.businessName}
                </p>
                <div className="flex justify-center items-center space-x-2 mb-3">
                  {getSectorIcon(founder.sector)}
                  <p className="text-sm text-gray-600 font-semibold">
                    {founder.industryCategory}
                  </p>
                </div>
                <p className="text-sm text-gray-500 font-semibold mb-6">
                  {founder.cohort}
                </p>
                <a
                  href={founder.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white py-2 px-6 rounded-full font-bold hover:bg-primary-dark transition duration-200"
                >
                  More Info
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Show Less button */}
        <div className="text-center mt-10">
          <button
            className="text-lg font-semibold text-primary border-b  hover:border-b-primary  focus:outline-none transition duration-200 pb-1"
            onClick={toggleShowAll}
          >
            {showAll ? "See Less" : "See All"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Founder;

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
  FaLinkedin,
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
  const [showAll, setShowAll] = useState(false);
  const [selectedCohort, setSelectedCohort] = useState("BFN Smart Start"); // Default cohort

  const toggleShowAll = () => setShowAll(!showAll);

  // Toggle cohort between "BFN Accelerate" and "BFN Smart Start"
  const toggleCohort = (cohort: string) => setSelectedCohort(cohort);

  // Filter founders by selected cohort
  const filteredFounders = founders.filter(
    (founder) => founder.cohort === selectedCohort
  );
  const foundersToShow = showAll
    ? filteredFounders
    : filteredFounders.slice(0, 8);

  return (
    <section className="py-16 bg-light text-gray-900" id="founder">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-primary text-center mb-16">
          Meet The Founders
        </h2>

        <div className="flex justify-center mb-10 ">
          <button
            className={`py-2 px-6 font-bold border-l border-r border-b border-primary shadow-lg transition duration-300 transform ${
              selectedCohort === "BFN Smart Start"
                ? "bg-primary text-white "
                : "bg-gray-200 text-gray-700 hover:bg-primary hover:text-white "
            }`}
            onClick={() => toggleCohort("BFN Smart Start")}
          >
            BFN Smart Start
          </button>

          <button
            className={`py-2 px-6 font-bold border-l border-r border-b border-primary shadow-lg transition duration-300 transform ${
              selectedCohort === "BFN Accelerate"
                ? "bg-primary text-white "
                : "bg-gray-200 text-gray-700 hover:bg-primary hover:text-white "
            }`}
            onClick={() => toggleCohort("BFN Accelerate")}
          >
            BFN Accelerate
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 sm:px-0 ">
          {foundersToShow.map((founder, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 px-6 py-8"
              data-aos="fade-up"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={founder.imageUrl}
                  alt={founder.name}
                  className="w-40 h-40 rounded-full mb-6 object-cover border-4 border-primary2"
                />

                <div className="flex items-center justify-center gap-2">
                  <h3 className="text-xl font-bold">{founder.name}</h3>
                  {founder.linkedIn && (
                    <a
                      href={founder.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-primary hover:text-primary-dark"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                </div>
                <p className="text-base font-medium text-gray-700 mb-3">
                  {founder.businessName}
                </p>
                <div className="flex justify-center items-center space-x-2 mb-3">
                  {getSectorIcon(founder.sector)}
                  <p className="text-sm text-gray-600 font-semibold">
                    {founder.industryCategory}
                  </p>
                </div>
                {/* <p className="text-sm text-black mb-6">{founder.description}</p> */}
                <p className="text-sm text-black mb-6 ">
                  {founder.description}
                </p>
                <a
                  href={founder.url || "#"}
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
            className="text-lg font-semibold text-primary border-b hover:border-b-primary focus:outline-none transition duration-200 pb-1"
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
